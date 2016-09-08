require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'ConfigService')) {
  apiLoader.services['configservice'] = {};
  AWS.ConfigService = Service.defineService('configservice', ['2014-11-12']);

  apiLoader.services['configservice']['2014-11-12'] = require('../apis/config-2014-11-12.min');
  apiLoader.services['configservice']['2014-11-12'].paginators = require('../apis/config-2014-11-12.paginators').pagination;
}

module.exports = AWS.ConfigService;
