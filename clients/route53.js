require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['route53'] = {};
AWS.Route53 = Service.defineService('route53', ['2013-04-01']);
require('../lib/services/route53');

apiLoader.services['route53']['2013-04-01'] = require('../apis/route53-2013-04-01.min.json');
apiLoader.services['route53']['2013-04-01'].paginators = require('../apis/route53-2013-04-01.paginators.json').pagination;
apiLoader.services['route53']['2013-04-01'].waiters = require('../apis/route53-2013-04-01.waiters2.json').waiters;

module.exports = AWS.Route53;
