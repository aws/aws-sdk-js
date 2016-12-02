require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['lightsail'] = {};
AWS.Lightsail = Service.defineService('lightsail', ['2016-11-28']);
Object.defineProperty(apiLoader.services['lightsail'], '2016-11-28', {
  get: function get() {
    var model = require('../apis/lightsail-2016-11-28.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Lightsail;
