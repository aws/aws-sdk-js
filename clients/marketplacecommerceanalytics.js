require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['marketplacecommerceanalytics'] = {};
AWS.MarketplaceCommerceAnalytics = Service.defineService('marketplacecommerceanalytics', ['2015-07-01']);

apiLoader.services['marketplacecommerceanalytics']['2015-07-01'] = require('../apis/marketplacecommerceanalytics-2015-07-01.min.json');

module.exports = AWS.MarketplaceCommerceAnalytics;
