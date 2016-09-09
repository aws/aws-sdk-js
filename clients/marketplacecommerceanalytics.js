require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['marketplacecommerceanalytics'] = {};
MarketplaceCommerceAnalytics = Service.defineService('marketplacecommerceanalytics', ['2015-07-01']);

apiLoader.services['marketplacecommerceanalytics']['2015-07-01'] = require('../apis/marketplacecommerceanalytics-2015-07-01.min.json');
if (!Object.prototype.hasOwnProperty.call(AWS, 'MarketplaceCommerceAnalytics')) {
  AWS.MarketplaceCommerceAnalytics = MarketplaceCommerceAnalytics;
}

module.exports = MarketplaceCommerceAnalytics;
