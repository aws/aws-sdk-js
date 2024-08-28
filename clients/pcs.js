require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['pcs'] = {};
AWS.PCS = Service.defineService('pcs', ['2023-02-10']);
Object.defineProperty(apiLoader.services['pcs'], '2023-02-10', {
  get: function get() {
    var model = require('../apis/pcs-2023-02-10.min.json');
    model.paginators = require('../apis/pcs-2023-02-10.paginators.json').pagination;
    model.waiters = require('../apis/pcs-2023-02-10.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.PCS;
