require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['waf'] = {};
AWS.WAF = AWS.Service.defineService('waf', ['2015-08-24']);

AWS.apiLoader.services['waf']['2015-08-24'] = require('../apis/waf-2015-08-24.min');

module.exports = AWS.WAF;
