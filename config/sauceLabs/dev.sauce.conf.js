require('babel-core/register');
const merge = require('deepmerge');
const masterConf = require('../master.conf.js');
const devConf = {

    specs: [
        './specs/addSong.js',
    ],
    capabilities: [
        {
            browserName: 'firefox',
            platform: 'Windows 10',
            version: '48',
            // screenResolution: "1280x1024",
            autoAcceptAlerts: true,
            maxInstances: '1',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false,
        },
        {
            browserName: 'firefox',
            platform: 'OS X 10.11',
            version: '48',
            // screenResolution: "1600x1200",
            autoAcceptAlerts: true,
            maxInstances: '1',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false,
        },
        {
            browserName: 'safari',
            platform: 'OS X 10.11',
            version: '9.0',
            screenResolution: "1600x1200",
            autoAcceptAlerts: true,
            maxInstances: '1',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false,
        },
        {
            browserName: 'Chrome',
            platform: 'Windows 10',
            version: '53',
            screenResolution: "1280x1024",
            autoAcceptAlerts: true,
            maxInstances: '8',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false,
        },
        {
            browserName: 'Chrome',
            platform: 'OS X 10.11',
            version: '53',
            screenResolution: "1600x1200",
            autoAcceptAlerts: true,
            maxInstances: '1',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false,
        },

        {
            browserName: 'internet explorer',
            platform: 'Windows 10',
            version: '11.103',
            // screenResolution: "1280x1024",
            autoAcceptAlerts: true,
            maxInstances: '8',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false,
        },
    ],
    logLevel: 'result',
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    sauceConnect: true,
    reporters: ['dot', 'spec'],
};
exports.config = merge(masterConf.config, devConf);
