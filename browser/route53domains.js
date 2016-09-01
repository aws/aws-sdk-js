require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['route53domains'] = {};
AWS.Route53Domains = AWS.Service.defineService('route53domains', ['2014-05-15']);

AWS.apiLoader.services['route53domains']['2014-05-15'] = require('../apis/route53domains-2014-05-15.min');
AWS.apiLoader.services['route53domains']['2014-05-15'].paginators = require('../apis/route53domains-2014-05-15.paginators').pagination;

module.exports = AWS.Route53Domains;
