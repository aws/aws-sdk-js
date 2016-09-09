require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['route53domains'] = {};
Route53Domains = Service.defineService('route53domains', ['2014-05-15']);

apiLoader.services['route53domains']['2014-05-15'] = require('../apis/route53domains-2014-05-15.min.json');
apiLoader.services['route53domains']['2014-05-15'].paginators = require('../apis/route53domains-2014-05-15.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'Route53Domains')) {
  AWS.Route53Domains = Route53Domains;
}

module.exports = Route53Domains;
