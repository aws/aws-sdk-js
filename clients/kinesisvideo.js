require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['kinesisvideo'] = {};
AWS.KinesisVideo = Service.defineService('kinesisvideo', ['2018-07-24']);
Object.defineProperty(apiLoader.services['kinesisvideo'], '2018-07-24', {
  get: function get() {
    var model = require('../apis/kinesisvideo-2018-07-24.min.json');
    model.paginators = require('../apis/kinesisvideo-2017-09-30.paginators.json').pagination;
    return model;s
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.KinesisVideo;
