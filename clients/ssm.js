require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'SSM')) {
  apiLoader.services['ssm'] = {};
  AWS.SSM = Service.defineService('ssm', ['2014-11-06']);

  apiLoader.services['ssm']['2014-11-06'] = require('../apis/ssm-2014-11-06.min');
  apiLoader.services['ssm']['2014-11-06'].paginators = require('../apis/ssm-2014-11-06.paginators').pagination;
}

module.exports = AWS.SSM;
