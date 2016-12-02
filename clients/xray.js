require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['xray'] = {};
AWS.XRay = Service.defineService('xray', ['2016-04-12']);
Object.defineProperty(apiLoader.services['xray'], '2016-04-12', {
  get: function get() {
    var model = require('../apis/xray-2016-04-12.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.XRay;
