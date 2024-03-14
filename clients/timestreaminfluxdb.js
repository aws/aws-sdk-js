require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['timestreaminfluxdb'] = {};
AWS.TimestreamInfluxDB = Service.defineService('timestreaminfluxdb', ['2023-01-27']);
Object.defineProperty(apiLoader.services['timestreaminfluxdb'], '2023-01-27', {
  get: function get() {
    var model = require('../apis/timestream-influxdb-2023-01-27.min.json');
    model.paginators = require('../apis/timestream-influxdb-2023-01-27.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.TimestreamInfluxDB;
