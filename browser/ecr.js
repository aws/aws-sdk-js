require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['ecr'] = {};
AWS.ECR = AWS.Service.defineService('ecr', ['2015-09-21']);

AWS.apiLoader.services['ecr']['2015-09-21'] = require('../apis/ecr-2015-09-21.min');

module.exports = AWS.ECR;
