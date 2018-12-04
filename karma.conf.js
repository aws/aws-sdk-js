// Karma configuration
// Generated on Wed Feb 08 2017 17:56:27 GMT-0800 (PST)

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'test/browser/build/aws-sdk-all.js',
      'test/browser/build/tests.js'
    ],
    reporters: ['progress'],
    port: 19876,
    colors: false,
    logLevel: config.LOG_ERROR,
    browsers: [ 'HeadlessChrome' ],
    customLaunchers: {
      HeadlessChrome: {
          base: 'ChromeHeadless',
             flags: [ '--no-sandbox', ],
                  },
            },
    singleRun: true,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 30000,
    concurrency: 1
  })
};
