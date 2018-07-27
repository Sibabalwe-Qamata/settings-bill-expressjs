let assert = require('assert');

let settingBill = require('../settingsBill.js');

describe('Testing SettingsBill', function(){

    let SettingBill = settingBill();

    it('Should return call total', function(){

        SettingBill.calls(2.75);
        SettingBill.sumBill('call');

        assert.equal(SettingBill.sumCall(), 2.75);
    } )

})