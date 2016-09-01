require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['marketplacemetering'] = {};
AWS.MarketplaceMetering = AWS.Service.defineService('marketplacemetering', ['2016-01-14']);

AWS.apiLoader.services['marketplacemetering']['2016-01-14'] = require('../apis/meteringmarketplace-2016-01-14.min');

module.exports = AWS.MarketplaceMetering;
