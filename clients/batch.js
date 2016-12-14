require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['batch'] = {};
AWS.Batch = Service.defineService('batch', ['2016-08-10']);
Object.defineProperty(apiLoader.services['batch'], '2016-08-10', {
  get: function get() {
    var model = require('../apis/batch-2016-08-10.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Batch;
