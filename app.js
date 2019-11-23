const puppeteer = require('puppeteer');
const prompt = require('prompt');
const _Config = require('./configs/config');
const _Selector = require('./selectors/selector');
const Utils = require('./utils/util');
const logger = require('./configs/logger')

Config = new _Config();
Selector = new _Selector();

logger.info('Application Running...')

Promise.all([Utils.show_banner()]).then(function (values) {
    console.log(values[0]);
    let inp = undefined;
    prompt.start();

    try {
        prompt.get(Config.prompt_amount, async function (err, result) {

            try {
                inp = result.amount;
                logger.info(`(App) user input amount ${inp} THB`)

            } catch (error) {
                logger.error(`(App) ${error}`)
                console.log('Bye!')
                process.exit(1)
            }

            (async () => {
    
                const browser = await puppeteer.launch({ headless: Config.is_headless }); // default is true
                logger.info(`(App) set browser headless to ${Config.is_headless}`)

                const page = await browser.newPage();
                await page.setRequestInterception(true);
                page.on('request', r => r.continue());
    
                await page.goto(Config.login_page);
                logger.info(`(App) called login page`)

                await page.waitFor(Selector.username_selector);
                logger.info(`(App) waiting for username visible`)
                await page.waitFor(Selector.password_selector);
                logger.info(`(App) waiting for password visible`)
                await page.waitFor(Selector.login_selector);
                logger.info(`(App) waiting for login btn visible`)

                await page.focus(Selector.username_selector);
                await page.keyboard.type(Config.username)
                logger.info(`(App) sent username`)
                await page.focus(Selector.password_selector);
                await page.keyboard.type(Config.password)
                logger.info(`(App) sent password`)
                await page.click(Selector.login_selector);
                logger.info(`(App) loging in to Kcyber`)

                await page.waitFor(3000);
                await page.goto(Selector.topup_url_selector);
                logger.info(`(App) called topup API`)

                await page.waitFor(3000);
                await page.waitFor(Selector.number_owner_selector);
                await page.click(Selector.number_owner_selector);
                logger.info(`(App) topup to owner only`)

                await page.waitFor(Selector.topup_amount_selector);
                await page.focus(Selector.topup_amount_selector);
                await page.$eval(Selector.topup_amount_selector, el => el.value = '');
    
                await page.focus(Selector.topup_amount_selector);
                try {
                    await page.keyboard.type(inp)
                    logger.info(`(App) set topup amout to ${inp}`)
                } catch (error) {
                    logger.error(`(App) ${error}`)
                    console.log('Bye!')
                    process.exit(1)
                }

                await page.waitFor(500);
                await page.click(Selector.pay_selector);
                logger.info(`(App) send pay action`)

                await page.waitFor(1000);
                await page.waitFor(Selector.confirm_pay_selector);
                await page.click(Selector.confirm_pay_selector);
                logger.info(`(App) send confirmed action`)

                //await browser.close();
                logger.info(`(App) Finished topup.`)

            })();

        });
    } catch (error) {
        logger.error(`(App) ${error}`)
        console.log('Bye!')
        process.exit(1)
    }

});
