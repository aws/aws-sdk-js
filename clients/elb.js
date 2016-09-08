require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'ELB')) {
  apiLoader.services['elb'] = {};
  AWS.ELB = Service.defineService('elb', ['2012-06-01']);

  apiLoader.services['elb']['2012-06-01'] = require('../apis/elasticloadbalancing-2012-06-01.min');
  apiLoader.services['elb']['2012-06-01'].paginators = require('../apis/elasticloadbalancing-2012-06-01.paginators').pagination;
  apiLoader.services['elb']['2012-06-01'].waiters = require('../apis/elasticloadbalancing-2012-06-01.waiters2').waiters;
}

module.exports = AWS.ELB;
