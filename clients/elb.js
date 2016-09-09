require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['elb'] = {};
AWS.ELB = Service.defineService('elb', ['2012-06-01']);

apiLoader.services['elb']['2012-06-01'] = require('../apis/elasticloadbalancing-2012-06-01.min.json');
apiLoader.services['elb']['2012-06-01'].paginators = require('../apis/elasticloadbalancing-2012-06-01.paginators.json').pagination;
apiLoader.services['elb']['2012-06-01'].waiters = require('../apis/elasticloadbalancing-2012-06-01.waiters2.json').waiters;

module.exports = AWS.ELB;
