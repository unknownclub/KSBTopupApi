const SELECTOR_CONSTANTS = require('./../constants/selector');

const _TXT_USERNAME_SELECTOR = new WeakMap();
const _TXT_PASSWORD_SELECTOR = new WeakMap();
const _BTN_LOGIN_SELECTOR = new WeakMap();
const _URL_TOPUP_SELECTOR = new WeakMap();
const _NUMBER_OF_OWNER_SELECTOR = new WeakMap();
const _TOPUP_AMOUNT_SELECTOR = new WeakMap();
const _BTN_PAY_SELECTOR = new WeakMap();
const _BTN_PAY_CONFIRM_SELECTOR = new WeakMap();

class Selector {
    constructor() {
        _TXT_USERNAME_SELECTOR.set(this, SELECTOR_CONSTANTS.TXT_USERNAME_SELECTOR);
        _TXT_PASSWORD_SELECTOR.set(this, SELECTOR_CONSTANTS.TXT_PASSWORD_SELECTOR);
        _BTN_LOGIN_SELECTOR.set(this, SELECTOR_CONSTANTS.BTN_LOGIN_SELECTOR);
        _URL_TOPUP_SELECTOR.set(this, SELECTOR_CONSTANTS.URL_TOPUP_SELECTOR);
        _NUMBER_OF_OWNER_SELECTOR.set(this, SELECTOR_CONSTANTS.NUMBER_OF_OWNER_SELECTOR);
        _TOPUP_AMOUNT_SELECTOR.set(this, SELECTOR_CONSTANTS.TOPUP_AMOUNT_SELECTOR);
        _BTN_PAY_SELECTOR.set(this, SELECTOR_CONSTANTS.BTN_PAY_SELECTOR);
        _BTN_PAY_CONFIRM_SELECTOR.set(this, SELECTOR_CONSTANTS.BTN_PAY_CONFIRM_SELECTOR);
    }
    get username_selector(){
        return _TXT_USERNAME_SELECTOR.get(this);
    }

    get password_selector(){
        return _TXT_PASSWORD_SELECTOR.get(this);
    }

    get login_selector(){
        return _BTN_LOGIN_SELECTOR.get(this);
    }

    get topup_url_selector(){
        return _URL_TOPUP_SELECTOR.get(this);
    }

    get number_owner_selector(){
        return _NUMBER_OF_OWNER_SELECTOR.get(this);
    }

    get topup_amount_selector(){
        return _TOPUP_AMOUNT_SELECTOR.get(this);
    }

    get pay_selector(){
        return _BTN_PAY_SELECTOR.get(this);
    }

    get confirm_pay_selector(){
        return _BTN_PAY_CONFIRM_SELECTOR.get(this);
    }
    

}

module.exports = Selector;