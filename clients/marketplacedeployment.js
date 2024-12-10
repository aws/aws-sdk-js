require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['marketplacedeployment'] = {};
AWS.MarketplaceDeployment = Service.defineService('marketplacedeployment', ['2023-01-25']);
Object.defineProperty(apiLoader.services['marketplacedeployment'], '2023-01-25', {
  get: function get() {
    var model = require('../apis/marketplace-deployment-2023-01-25.min.json');
    model.paginators = require('../apis/marketplace-deployment-2023-01-25.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.MarketplaceDeployment;
