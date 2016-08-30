require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['efs'] = {};
AWS.EFS = AWS.Service.defineService('efs', ['2015-02-01']);

AWS.apiLoader.services['efs']['2015-02-01'] = require('../apis/elasticfilesystem-2015-02-01.min');

module.exports = AWS.EFS;
