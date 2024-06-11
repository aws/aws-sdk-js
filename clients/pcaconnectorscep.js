require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['pcaconnectorscep'] = {};
AWS.PcaConnectorScep = Service.defineService('pcaconnectorscep', ['2018-05-10']);
Object.defineProperty(apiLoader.services['pcaconnectorscep'], '2018-05-10', {
  get: function get() {
    var model = require('../apis/pca-connector-scep-2018-05-10.min.json');
    model.paginators = require('../apis/pca-connector-scep-2018-05-10.paginators.json').pagination;
    model.waiters = require('../apis/pca-connector-scep-2018-05-10.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.PcaConnectorScep;
