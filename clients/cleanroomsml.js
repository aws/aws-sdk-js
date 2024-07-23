require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['cleanroomsml'] = {};
AWS.CleanRoomsML = Service.defineService('cleanroomsml', ['2023-09-06']);
Object.defineProperty(apiLoader.services['cleanroomsml'], '2023-09-06', {
  get: function get() {
    var model = require('../apis/cleanroomsml-2023-09-06.min.json');
    model.paginators = require('../apis/cleanroomsml-2023-09-06.paginators.json').pagination;
    model.waiters = require('../apis/cleanroomsml-2023-09-06.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CleanRoomsML;
