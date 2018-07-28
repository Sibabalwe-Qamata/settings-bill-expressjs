let assert = require('assert');

let settingBill = require('../settingsBill.js');

describe('Testing SettingsBill', function(){

    let SettingBill = settingBill();

    it('Should return call total', function(){

        SettingBill.calls(2.75);
        SettingBill.sumBill('call');

        assert.equal(SettingBill.sumCall(), 2.75);
    } )

    it('Should return warning or danger ', function(){

        SettingBill.calls(2.75);
        SettingBill.sms(0.75);
        SettingBill.critical(3.00);
        SettingBill.warning(5.75);
        SettingBill.sumBill('call');
        SettingBill.sumBill('sms');
        SettingBill.colors(SettingBill.sumTotal());

        assert.equal(SettingBill.colors(), 'warning');
    } )


})