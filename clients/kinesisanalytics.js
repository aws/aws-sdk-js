require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['kinesisanalytics'] = {};
AWS.KinesisAnalytics = Service.defineService('kinesisanalytics', ['2015-08-14']);

apiLoader.services['kinesisanalytics']['2015-08-14'] = require('../apis/kinesisanalytics-2015-08-14.min.json');

module.exports = AWS.KinesisAnalytics;
