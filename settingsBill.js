module.exports = function ()
{
        var callsTotalBill = 0;
        var smsTotalBill = 0;
        var totalCostbill = 0; 

        var warningVariable = 0;
        var criticalVariable = 0;
        var smsCostVariable =0;
        var callCostVariable =0;
        
    function setCallCost(itemCall)
    {
        callCostVariable = parseFloat(itemCall);
        
        return callCostVariable.toFixed(2);
        
    }
    
    function setSmsCost(itemSmS)
    {
       	smsCostVariable = parseFloat(itemSmS);
        
        return  smsCostVariable.toFixed(2);
        
    }
    
    function setCriticalWarning(itemCritical)
    {
        criticalVariable = parseFloat(itemCritical);
        
        return criticalVariable.toFixed(2);
    }
    
    function setWarning(warning)
    {
        warningVariable = parseFloat(warning);
        
        return warningVariable.toFixed(2);
        
    }
    
    function addTotal(billItems)
    {
    // update the correct total
            if (billItems === "call"){
                if(totalCostbill < criticalVariable){
                    callsTotalBill += callCostVariable;
                   }
               
            }
            if (billItems === "sms"){
                if (totalCostbill < criticalVariable){
                    
                   smsTotalBill += smsCostVariable; 
                }
                
            }
    }
    
    function callTotal() {return callsTotalBill.toFixed(2);}
    function smsTotal () {return smsTotalBill.toFixed(2);}
	function getCriticalValue(){return criticalVariable.toFixed(2);}
	function getWarningValue(){return warningVariable.toFixed(2);}
    
    function total(){
		totalCostbill = callsTotalBill + smsTotalBill;
		return totalCostbill.toFixed(2);
	}
    
    
    return{
            
            calls : setCallCost,
            sms: setSmsCost,
            critical: setCriticalWarning,
            warning: setWarning,
		
		
            sumCall: callTotal,
            sumSms: smsTotal,
			getWarning: getWarningValue,
			getCritical: getCriticalValue,
            sumTotal: total,
            sumBill: addTotal

        }
}



