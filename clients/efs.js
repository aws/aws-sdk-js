require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['efs'] = {};
AWS.EFS = Service.defineService('efs', ['2015-02-01']);

apiLoader.services['efs']['2015-02-01'] = require('../apis/elasticfilesystem-2015-02-01.min.json');

module.exports = AWS.EFS;
