require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'CloudFront')) {
  apiLoader.services['cloudfront'] = {};
  AWS.CloudFront = Service.defineService('cloudfront', ['2016-08-01']);
  require('../lib/services/cloudfront');

  apiLoader.services['cloudfront']['2016-08-01'] = require('../apis/cloudfront-2016-08-01.min');
  apiLoader.services['cloudfront']['2016-08-01'].paginators = require('../apis/cloudfront-2016-08-01.paginators').pagination;
  apiLoader.services['cloudfront']['2016-08-01'].waiters = require('../apis/cloudfront-2016-08-01.waiters2').waiters;
}

module.exports = AWS.CloudFront;
