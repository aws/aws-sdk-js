require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['marketplacecommerceanalytics'] = {};
AWS.MarketplaceCommerceAnalytics = AWS.Service.defineService('marketplacecommerceanalytics', ['2015-07-01']);

AWS.apiLoader.services['marketplacecommerceanalytics']['2015-07-01'] = require('../apis/marketplacecommerceanalytics-2015-07-01.min');

module.exports = AWS.MarketplaceCommerceAnalytics;
