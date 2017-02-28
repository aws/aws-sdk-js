require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['mturk'] = {};
AWS.MTurk = Service.defineService('mturk', ['2017-01-17']);
Object.defineProperty(apiLoader.services['mturk'], '2017-01-17', {
  get: function get() {
    var model = require('../apis/mturk-requester-2017-01-17.min.json');
    model.paginators = require('../apis/mturk-requester-2017-01-17.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.MTurk;
