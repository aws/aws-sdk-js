require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['waf'] = {};
AWS.WAF = Service.defineService('waf', ['2015-08-24']);

apiLoader.services['waf']['2015-08-24'] = require('../apis/waf-2015-08-24.min.json');

module.exports = AWS.WAF;
