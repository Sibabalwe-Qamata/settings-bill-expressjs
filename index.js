
"use strict";

//import the settingsBill module that is in the current folder
const settingsBill = require('./settingsBill');


let express = require('express');
let app = express();

//route to redirect to a GET route
res.redirect('/target-route');


//Handlebars Section ...
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Static Resource
app.use(express.static('public'));


//--------------------------Routes -------------------------------------------//

app.get("/", function(req, res){
    res.render("home");
  });
  
//set the settings - sms & call price and the warning & critical level
app.post('settings', function(){




});

/**record an action of sms or call and the appropriate price based on the settings entered 
& a timestamp when record has been entered.**/
app.post('/action', function(){



});


//show all the actions - display the timestamps using fromNow and display a total cost for all the actions on the screen
app.post('/actions', function(){



});

//display all the sms or call actions - display the timestamps using fromNow and display a total cost for the selected action.

app.get('/actions/:type', function (req, res) {
    
    


});

//--------------------------------------------------------------------------------------------------------------------------//
let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});