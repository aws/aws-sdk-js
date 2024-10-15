require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['networkmonitor'] = {};
AWS.NetworkMonitor = Service.defineService('networkmonitor', ['2023-08-01']);
Object.defineProperty(apiLoader.services['networkmonitor'], '2023-08-01', {
  get: function get() {
    var model = require('../apis/networkmonitor-2023-08-01.min.json');
    model.paginators = require('../apis/networkmonitor-2023-08-01.paginators.json').pagination;
    model.waiters = require('../apis/networkmonitor-2023-08-01.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.NetworkMonitor;
