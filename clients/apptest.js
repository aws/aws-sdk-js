require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['apptest'] = {};
AWS.AppTest = Service.defineService('apptest', ['2022-12-06']);
Object.defineProperty(apiLoader.services['apptest'], '2022-12-06', {
  get: function get() {
    var model = require('../apis/apptest-2022-12-06.min.json');
    model.paginators = require('../apis/apptest-2022-12-06.paginators.json').pagination;
    model.waiters = require('../apis/apptest-2022-12-06.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.AppTest;
