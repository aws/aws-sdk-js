require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['freetier'] = {};
AWS.FreeTier = Service.defineService('freetier', ['2023-09-07']);
Object.defineProperty(apiLoader.services['freetier'], '2023-09-07', {
  get: function get() {
    var model = require('../apis/freetier-2023-09-07.min.json');
    model.paginators = require('../apis/freetier-2023-09-07.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.FreeTier;
