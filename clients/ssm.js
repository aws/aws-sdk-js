require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['ssm'] = {};
AWS.SSM = Service.defineService('ssm', ['2014-11-06']);

apiLoader.services['ssm']['2014-11-06'] = require('../apis/ssm-2014-11-06.min.json');
apiLoader.services['ssm']['2014-11-06'].paginators = require('../apis/ssm-2014-11-06.paginators.json').pagination;

module.exports = AWS.SSM;
