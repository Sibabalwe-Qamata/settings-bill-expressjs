document.addEventListener('DOMContentLoaded', function() 
{
// get a reference to the sms or call radio buttons
var callsTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");

// get refences to all the settings fields
var callCostStt = document.querySelector(".callCostSetting");
var smsCostStt = document.querySelector(".smsCostSetting");
var warningLevel = document.querySelector(".warningLevelSetting");
var criticalLevel = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
var BillTotalAddBtn = document.querySelector(".BillAddBtn");
//get a reference to the 'Update settings' button
var settingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.
var totalCostSettingsElem = document.querySelector(".totalSettings");
//add an event listener for when the 'Update settings' button is pressed


var settingsUpdate = SettingBillFactory();


    function updateSetting()
    {
	    var newCallCost = callCostStt.value;
		settingsUpdate.calls(newCallCost);
        var newSmsCost = smsCostStt.value;
		settingsUpdate.sms(newSmsCost);
        var newWarningSetting= warningLevel.value;
		settingsUpdate.warning(newWarningSetting);
        var newCriticalSetting = criticalLevel.value;
		settingsUpdate.critical(newCriticalSetting);	
    }

	
function addBill()
{
	 var settingRadioItem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
	
	if(settingRadioItem)
	   {
	   	 var Billtype = settingRadioItem.value.trim();
		 settingsUpdate.sumBill(Billtype);
		   
	   }
	
	 callsTotalSettings.innerHTML = settingsUpdate.sumCall();
	 smsTotalSettings.innerHTML = settingsUpdate.sumSms();
            totalCostSettingsElem.innerHTML = settingsUpdate.sumTotal();	
	 	
}


function colorSettingsUpdate() 
{
	
    
   	var colorWarningTotal = parseFloat(settingsUpdate.sumTotal());
	var colorWarningLevel = parseFloat(settingsUpdate.getWarning());
	
	var colorCriticalLevel = parseFloat(settingsUpdate.getCritical());
    console.log(colorCriticalLevel);
         
    if (colorWarningTotal  >= colorWarningLevel)
	{
        totalCostSettingsElem.classList.remove("danger");
        totalCostSettingsElem.classList.add("warning");
        
        //totalCostSettingsElem.innerHTML = settingsUpdate.sumTotal();	
        
    }
       
    if ( colorWarningTotal  >= colorCriticalLevel)
	{
        // adding the danger class will make the text red
        totalCostSettingsElem.classList.remove("warning");
        totalCostSettingsElem.classList.add("danger"); 
        

		// BillTotalAddBtn.disabled = false;
    }
    
    
  
 
}

//add an event listener for when the add button is pressed
settingsBtn.addEventListener('click',updateSetting);

BillTotalAddBtn.addEventListener('click',
	function(){
		addBill();
		colorSettingsUpdate();
	});



});


