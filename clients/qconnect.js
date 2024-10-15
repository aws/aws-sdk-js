require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['qconnect'] = {};
AWS.QConnect = Service.defineService('qconnect', ['2020-10-19']);
Object.defineProperty(apiLoader.services['qconnect'], '2020-10-19', {
  get: function get() {
    var model = require('../apis/qconnect-2020-10-19.min.json');
    model.paginators = require('../apis/qconnect-2020-10-19.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.QConnect;
