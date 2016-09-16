require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudfront'] = {};
AWS.CloudFront = Service.defineService('cloudfront', ['2016-09-07']);
require('../lib/services/cloudfront');
Object.defineProperty(apiLoader.services['cloudfront'], '2016-09-07', {
  get: function get() {
    var model = require('../apis/cloudfront-2016-09-07.min.json');
    model.paginators = require('../apis/cloudfront-2016-09-07.paginators.json').pagination;
    model.waiters = require('../apis/cloudfront-2016-09-07.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CloudFront;
