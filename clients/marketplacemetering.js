require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['marketplacemetering'] = {};
AWS.MarketplaceMetering = Service.defineService('marketplacemetering', ['2016-01-14']);

apiLoader.services['marketplacemetering']['2016-01-14'] = require('../apis/meteringmarketplace-2016-01-14.min.json');

module.exports = AWS.MarketplaceMetering;
