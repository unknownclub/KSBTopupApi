process.env.NODE_CONFIG_DIR = './security_configs'
const config = require('config');
const BASE_URL = 'https://online.kasikornbankgroup.com/K-Online/';
const _KCYBER_USERNAME = new WeakMap();
const _KCYBER_PASSWORD = new WeakMap();
const _KCYBER_LOGIN_PAGE = new WeakMap();
const _OPT_RECEIVER_NUMBER = new WeakMap();
const _HEADLESS = new WeakMap();

class Config {
    constructor() {
        _KCYBER_USERNAME.set(this, config.get('KSB_USER'));
        _KCYBER_PASSWORD.set(this, config.get('KSB_PASSWORD'));
        _KCYBER_LOGIN_PAGE.set(this, BASE_URL);
        _OPT_RECEIVER_NUMBER.set(this, config.get('KSB_OTP_NUMBER'));
        _HEADLESS.set(this, false);

    }

     get username() {
        return _KCYBER_USERNAME.get(this);
    }

     get password() {
        return _KCYBER_PASSWORD.get(this);
    }

     get login_page() {
        return _KCYBER_LOGIN_PAGE.get(this);
    }

     get otp_receiver() {
        return _OPT_RECEIVER_NUMBER.get(this);
    }

    get is_headless() {
        return _HEADLESS.get(this);
    }

    get prompt_amount(){
        return {
            properties: {
              amount: {
                message: 'Enter your amount to top up (THB)',
                required: true
              }
            }
        };
    }

    get prompt_otp(){
        return {
            properties: {
              opt: {
                message: 'Enter your OTP',
                required: true
              }
            }
        };
    }

}

module.exports = Config;