require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['ecr'] = {};
AWS.ECR = Service.defineService('ecr', ['2015-09-21']);

apiLoader.services['ecr']['2015-09-21'] = require('../apis/ecr-2015-09-21.min.json');

module.exports = AWS.ECR;
