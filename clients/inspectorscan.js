require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['inspectorscan'] = {};
AWS.InspectorScan = Service.defineService('inspectorscan', ['2023-08-08']);
Object.defineProperty(apiLoader.services['inspectorscan'], '2023-08-08', {
  get: function get() {
    var model = require('../apis/inspector-scan-2023-08-08.min.json');
    model.paginators = require('../apis/inspector-scan-2023-08-08.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.InspectorScan;
