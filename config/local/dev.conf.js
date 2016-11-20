require('babel-core/register');
const merge = require('deepmerge');
const masterConf = require('../master.conf.js');
const devConf = {
    specs: [
        './devFeatures/**/*.feature',
    ],
    capabilities: [
        // {
        //    browserName: 'firefox',
        //    autoAcceptAlerts: true,
        //    maxInstances: '1',
        // },
        {
            browserName: 'chrome',
            autoAcceptAlerts: true,
            // version: '50',
            maxInstances: '1',
        },
    ],
    logLevel: 'result',
    reporters: ['dot', 'spec'],
    // cucumberOpts: {
    //     require: ['./stepDefinitions/'],
    // },
};
exports.config = merge(masterConf.config, devConf);
