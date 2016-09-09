require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['configservice'] = {};
ConfigService = Service.defineService('configservice', ['2014-11-12']);

apiLoader.services['configservice']['2014-11-12'] = require('../apis/config-2014-11-12.min.json');
apiLoader.services['configservice']['2014-11-12'].paginators = require('../apis/config-2014-11-12.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'ConfigService')) {
  AWS.ConfigService = ConfigService;
}

module.exports = ConfigService;
