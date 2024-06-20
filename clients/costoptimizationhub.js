require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['costoptimizationhub'] = {};
AWS.CostOptimizationHub = Service.defineService('costoptimizationhub', ['2022-07-26']);
Object.defineProperty(apiLoader.services['costoptimizationhub'], '2022-07-26', {
  get: function get() {
    var model = require('../apis/cost-optimization-hub-2022-07-26.min.json');
    model.paginators = require('../apis/cost-optimization-hub-2022-07-26.paginators.json').pagination;
    model.waiters = require('../apis/cost-optimization-hub-2022-07-26.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CostOptimizationHub;
