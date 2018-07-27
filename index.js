
"use strict";

//import the settingsBill module that is in the current folder
const SettingsBill = require('./settingsBill');

const settingsBill = SettingsBill();

let express = require('express');
let app = express();


//Exporting the Moment modules
const Moment = require('moment');
let moment = Moment();

//route to redirect to a GET route
//res.redirect('/target-route');


//Handlebars Section ...
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Static Resource
app.use(express.static('public'));


//Body parser ...
let bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//--------------------------Routes -------------------------------------------//

app.get("/", function(req, res){
    res.render("home");
  });
  
//set the settings - sms & call price and the warning & critical level
app.post('/settings', function(req,res){
    let smsCost = req.body.smsCost;
    let callCost = req.body.callCost;
    let warningLevel = req.body.warningLevel;
    let criticalLevel = req.body.criticalLevel;

    //console.log(callCost);
    

    settingsBill.calls(callCost);
    settingsBill.sms(smsCost);
    settingsBill.critical(criticalLevel);
    settingsBill.warning(warningLevel);

    console.log("Call Price: ", settingsBill.getCallPrice());

    let settings = {
      smsCost,
      callCost,
      warningLevel,
      criticalLevel
    };

    // process data
   // globalSetings = settings;

    // note that data can be sent to the template
    res.render('home', {settings})

});

/**record an action of sms or call and the appropriate price based on the settings entered 
& a timestamp when record has been entered.

1. Need to add the timestamp in the object as well.
**/

app.post('/action', function(req, res)
{
    let item = req.body.billItemTypeWithSettings;
  
    console.log(item)
    settingsBill.sumBill(item);
    
  
    let prices = {
      callPrice: settingsBill.sumCall(),
      smsPrice: settingsBill.sumSms(),
      totalPrice: settingsBill.sumTotal()
   
  }
  console.log('Total: ',prices.callPrice);

    res.render('home', { prices});

});


//show all the actions - display the timestamps using fromNow and display a total cost for all the actions on the screen
app.get('/actions', function(req, res)
{


    /**let Bill = {
        callBill: settingsBill.sumCall(),
        smsBill: settingsBill.sumSms(),
        totalBill: settingsBill.sumTotal()
    }**/

    //res.render('home', {Bill});
});

//display all the sms or call actions - display the timestamps using fromNow and display a total cost for the selected action.

// app.get('/action/:type', function (req, res) {
//     let costType = req.params.costType;

//     let cost = 0;
//     //lookup cost for costType
//     if (costType === 'sms'){
//         cost = settings.smsCost;
//     } else if (costType === 'call') {
//         cost = settings.callCost;
//     }

//     req.render('cost', {
//         costType,
//         cost
//     });
    

// });

//--------------------------------------------------------------------------------------------------------------------------//
let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});