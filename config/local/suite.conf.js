require('babel-core/register');
const merge = require('deepmerge');
const masterConf = require('../master.conf.js');
const suiteConf = {
    specs: [
        './features/**/*.feature',
    ],
    capabilities: [
        {
            browserName: 'chrome',
            screenResolution: "1280x1024",
            maxInstances: '1',
        },
    ],
    logLevel: 'result',
    reporters: ['dot', 'spec'],
};
exports.config = merge(masterConf.config, suiteConf);
