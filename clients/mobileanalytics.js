require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['mobileanalytics'] = {};
AWS.MobileAnalytics = AWS.Service.defineService('mobileanalytics', ['2014-06-05']);

AWS.apiLoader.services['mobileanalytics']['2014-06-05'] = require('../apis/mobileanalytics-2014-06-05.min');

module.exports = AWS.MobileAnalytics;
