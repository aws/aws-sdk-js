require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['marketplaceagreement'] = {};
AWS.MarketplaceAgreement = Service.defineService('marketplaceagreement', ['2020-03-01']);
Object.defineProperty(apiLoader.services['marketplaceagreement'], '2020-03-01', {
  get: function get() {
    var model = require('../apis/marketplace-agreement-2020-03-01.min.json');
    model.paginators = require('../apis/marketplace-agreement-2020-03-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.MarketplaceAgreement;
