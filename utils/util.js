const figlet = require('figlet');
const logger = require('../configs/logger')

class Utils {
    static show_banner() {
        logger.info('(Utils) call show_banner()')
        return new Promise((resolve, reject) => {
            figlet('KCYBER TOPUP API', function(err, data) {
                if (err) {
                    reject('Something went wrong...')
                }
                resolve(data)
            });
        });
    }
}

module.exports = Utils;