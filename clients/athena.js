require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['athena'] = {};
AWS.Athena = Service.defineService('athena', ['2017-05-18']);
Object.defineProperty(apiLoader.services['athena'], '2017-05-18', {
  get: function get() {
    var model = require('../apis/athena-2017-05-18.min.json');
    model.paginators = require('../apis/athena-2017-05-18.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Athena;
