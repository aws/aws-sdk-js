require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['cloudtrail'] = {};
AWS.CloudTrail = AWS.Service.defineService('cloudtrail', ['2013-11-01']);

AWS.apiLoader.services['cloudtrail']['2013-11-01'] = require('../apis/cloudtrail-2013-11-01.min');
AWS.apiLoader.services['cloudtrail']['2013-11-01'].paginators = require('../apis/cloudtrail-2013-11-01.paginators').pagination;

module.exports = AWS.CloudTrail;
