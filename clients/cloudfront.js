require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudfront'] = {};
AWS.CloudFront = Service.defineService('cloudfront', ['2016-09-07']);
require('../lib/services/cloudfront');

apiLoader.services['cloudfront']['2016-09-07'] = require('../apis/cloudfront-2016-09-07.min.json');
apiLoader.services['cloudfront']['2016-09-07'].paginators = require('../apis/cloudfront-2016-09-07.paginators.json').pagination;
apiLoader.services['cloudfront']['2016-09-07'].waiters = require('../apis/cloudfront-2016-09-07.waiters2.json').waiters;

module.exports = AWS.CloudFront;
