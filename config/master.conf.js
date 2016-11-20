require('babel-core/register');
const _config = require('config');
const debug = process.env.DEBUG;
const errorLogs = [];
let feature, scenario, step, status, timestamp;

exports.config = {
    sync: true,
    debug: debug, //eslint-disable-line object-shorthand
    coloredLogs: true,
    screenshotPath: './reports/errorShots/',
    baseUrl: 'https://guitar-practice-app.herokuapp.com//',
    waitforTimeout: 30000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    env: _config,
    before: function () { //eslint-disable-line object-shorthand
        var chai = require('chai'); //eslint-disable-line no-var
        global.expect = chai.expect;
        chai.Should();
        chai.expect();
    },
    afterStep: function (stepResult) { //eslint-disable-line object-shorthand
        /**
         * Assign Step Staus of Passed/Failed/Skipped to a variable.
         */
        status = stepResult.getStatus();
        /**
         * If the step passes or is skipped, skip browser console logging.
         */
        if (status !== `failed`) {
            return;
        }
        /**
         * Assign current step data to variables for error logging purposes
         */
        feature = stepResult.getStep().getScenario().getFeature().getName();
        scenario = stepResult.getStep().getScenario().getName();
        step = stepResult.getStep().getName();
        /**
         * gets the current browser logs from selenium and assigns them to a variable
         */
        const logs = browser.log('browser');
        /**
         * Filters out everything except error messages and adds step/scenario/feature info to the errorLogs array
         */
        logs.value.forEach(log => {
            /**
             * only print error messages
             */
            if (!log || typeof log.level !== 'string' || log.level.toLowerCase() !== 'severe') {
                return;
            }
            /**
             * Assign time error was incurred to a variable
             */
            timestamp = log.timestamp.toString();
            /**
             * Add The test path and browser console message to the errorLogs array
             */
            errorLogs.push({
                name: `${status}: ${feature} ${scenario} ${step}`,
                message: log.message,
            });
        });

    },
    after: function (_, capabilities) { //eslint-disable-line object-shorthand
        /* eslint-disable no-console */
        /**
         * Skip if there are no severe browser errors to report
         */
        if (status === 'passed') {
            return;
        } else if ((status === 'failed' || status === 'skipped') && errorLogs.length === 0) {
            console.error(`\n<==== NO SEVERE BROWSER ERRORS DETECTED ====>`);
            return;
        }
        console.error('\n====> SEVERE BROWSER LOGS OF FAILING TESTS <====');
        console.error(`Feature: ${feature}`);
        console.error(`Scenario: ${scenario}`);
        console.error(`Step: ${step}`);
        console.error(`TimeStamp: ${timestamp}`);
        console.error(`Capabilities: ${JSON.stringify(capabilities)}`);
        errorLogs.forEach((log, i) => {
            if (i === 0 || errorLogs[i - 1].name !== log.name) {
                console.error(`\n> ${log.name}`);
            }
            console.error(`BROWSER CONSOLE LOG: ${log.message}`);
        });
        console.error('====> END OF BROWSER LOGS <====');
        /* eslint-enable no-console */
    },
};
