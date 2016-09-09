require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudtrail'] = {};
AWS.CloudTrail = Service.defineService('cloudtrail', ['2013-11-01']);

apiLoader.services['cloudtrail']['2013-11-01'] = require('../apis/cloudtrail-2013-11-01.min.json');
apiLoader.services['cloudtrail']['2013-11-01'].paginators = require('../apis/cloudtrail-2013-11-01.paginators.json').pagination;

module.exports = AWS.CloudTrail;
