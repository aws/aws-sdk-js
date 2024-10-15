require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['bcmdataexports'] = {};
AWS.BCMDataExports = Service.defineService('bcmdataexports', ['2023-11-26']);
Object.defineProperty(apiLoader.services['bcmdataexports'], '2023-11-26', {
  get: function get() {
    var model = require('../apis/bcm-data-exports-2023-11-26.min.json');
    model.paginators = require('../apis/bcm-data-exports-2023-11-26.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.BCMDataExports;
