require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['applicationsignals'] = {};
AWS.ApplicationSignals = Service.defineService('applicationsignals', ['2024-04-15']);
Object.defineProperty(apiLoader.services['applicationsignals'], '2024-04-15', {
  get: function get() {
    var model = require('../apis/application-signals-2024-04-15.min.json');
    model.paginators = require('../apis/application-signals-2024-04-15.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ApplicationSignals;
