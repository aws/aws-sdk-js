require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['configservice'] = {};
AWS.ConfigService = AWS.Service.defineService('configservice', ['2014-11-12']);

AWS.apiLoader.services['configservice']['2014-11-12'] = require('../apis/config-2014-11-12.min');
AWS.apiLoader.services['configservice']['2014-11-12'].paginators = require('../apis/config-2014-11-12.paginators').pagination;

module.exports = AWS.ConfigService;
