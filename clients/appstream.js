require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['appstream'] = {};
AWS.AppStream = Service.defineService('appstream', ['2016-12-01']);
Object.defineProperty(apiLoader.services['appstream'], '2016-12-01', {
  get: function get() {
    var model = require('../apis/appstream-2016-12-01.min.json');
    model.waiters = require('../apis/appstream-2016-12-01.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.AppStream;
