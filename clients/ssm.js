require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['ssm'] = {};
AWS.SSM = AWS.Service.defineService('ssm', ['2014-11-06']);

AWS.apiLoader.services['ssm']['2014-11-06'] = require('../apis/ssm-2014-11-06.min');
AWS.apiLoader.services['ssm']['2014-11-06'].paginators = require('../apis/ssm-2014-11-06.paginators').pagination;

module.exports = AWS.SSM;
