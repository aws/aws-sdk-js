require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['qapps'] = {};
AWS.QApps = Service.defineService('qapps', ['2023-11-27']);
Object.defineProperty(apiLoader.services['qapps'], '2023-11-27', {
  get: function get() {
    var model = require('../apis/qapps-2023-11-27.min.json');
    model.paginators = require('../apis/qapps-2023-11-27.paginators.json').pagination;
    model.waiters = require('../apis/qapps-2023-11-27.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.QApps;
