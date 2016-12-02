require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['shield'] = {};
AWS.Shield = Service.defineService('shield', ['2016-06-02']);
Object.defineProperty(apiLoader.services['shield'], '2016-06-02', {
  get: function get() {
    var model = require('../apis/shield-2016-06-02.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Shield;
