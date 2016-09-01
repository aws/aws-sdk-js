require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['kinesisanalytics'] = {};
AWS.KinesisAnalytics = AWS.Service.defineService('kinesisanalytics', ['2015-08-14']);

AWS.apiLoader.services['kinesisanalytics']['2015-08-14'] = require('../apis/kinesisanalytics-2015-08-14.min');

module.exports = AWS.KinesisAnalytics;
