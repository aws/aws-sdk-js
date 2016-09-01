require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['cloudfront'] = {};
AWS.CloudFront = AWS.Service.defineService('cloudfront', ['2016-08-01']);
require('../lib/services/cloudfront');

AWS.apiLoader.services['cloudfront']['2016-08-01'] = require('../apis/cloudfront-2016-08-01.min');
AWS.apiLoader.services['cloudfront']['2016-08-01'].paginators = require('../apis/cloudfront-2016-08-01.paginators').pagination;
AWS.apiLoader.services['cloudfront']['2016-08-01'].waiters = require('../apis/cloudfront-2016-08-01.waiters2').waiters;

module.exports = AWS.CloudFront;
