require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['elbv2'] = {};
AWS.ELBv2 = AWS.Service.defineService('elbv2', ['2015-12-01']);

AWS.apiLoader.services['elbv2']['2015-12-01'] = require('../apis/elasticloadbalancingv2-2015-12-01.min');
AWS.apiLoader.services['elbv2']['2015-12-01'].paginators = require('../apis/elasticloadbalancingv2-2015-12-01.paginators').pagination;

module.exports = AWS.ELBv2;
