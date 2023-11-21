require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['cloudfrontkeyvaluestore'] = {};
AWS.CloudFrontKeyValueStore = Service.defineService('cloudfrontkeyvaluestore', ['2022-07-26']);
Object.defineProperty(apiLoader.services['cloudfrontkeyvaluestore'], '2022-07-26', {
  get: function get() {
    var model = require('../apis/cloudfront-keyvaluestore-2022-07-26.min.json');
    model.paginators = require('../apis/cloudfront-keyvaluestore-2022-07-26.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CloudFrontKeyValueStore;
