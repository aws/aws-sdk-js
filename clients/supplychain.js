require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['supplychain'] = {};
AWS.SupplyChain = Service.defineService('supplychain', ['2024-01-01']);
Object.defineProperty(apiLoader.services['supplychain'], '2024-01-01', {
  get: function get() {
    var model = require('../apis/supplychain-2024-01-01.min.json');
    model.paginators = require('../apis/supplychain-2024-01-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.SupplyChain;
