require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['route53'] = {};
AWS.Route53 = AWS.Service.defineService('route53', ['2013-04-01']);
require('../lib/services/route53');

AWS.apiLoader.services['route53']['2013-04-01'] = require('../apis/route53-2013-04-01.min');
AWS.apiLoader.services['route53']['2013-04-01'].paginators = require('../apis/route53-2013-04-01.paginators').pagination;
AWS.apiLoader.services['route53']['2013-04-01'].waiters = require('../apis/route53-2013-04-01.waiters2').waiters;

module.exports = AWS.Route53;
