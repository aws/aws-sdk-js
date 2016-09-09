require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['mobileanalytics'] = {};
MobileAnalytics = Service.defineService('mobileanalytics', ['2014-06-05']);

apiLoader.services['mobileanalytics']['2014-06-05'] = require('../apis/mobileanalytics-2014-06-05.min.json');
if (!Object.prototype.hasOwnProperty.call(AWS, 'MobileAnalytics')) {
  AWS.MobileAnalytics = MobileAnalytics;
}

module.exports = MobileAnalytics;
