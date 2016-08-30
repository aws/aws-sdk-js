require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['elb'] = {};
AWS.ELB = AWS.Service.defineService('elb', ['2012-06-01']);

AWS.apiLoader.services['elb']['2012-06-01'] = require('../apis/elasticloadbalancing-2012-06-01.min');
AWS.apiLoader.services['elb']['2012-06-01'].paginators = require('../apis/elasticloadbalancing-2012-06-01.paginators').pagination;
AWS.apiLoader.services['elb']['2012-06-01'].waiters = require('../apis/elasticloadbalancing-2012-06-01.waiters2').waiters;

module.exports = AWS.ELB;
