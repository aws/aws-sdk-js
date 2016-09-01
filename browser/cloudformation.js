require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['cloudformation'] = {};
AWS.CloudFormation = AWS.Service.defineService('cloudformation', ['2010-05-15']);

AWS.apiLoader.services['cloudformation']['2010-05-15'] = require('../apis/cloudformation-2010-05-15.min');
AWS.apiLoader.services['cloudformation']['2010-05-15'].paginators = require('../apis/cloudformation-2010-05-15.paginators').pagination;
AWS.apiLoader.services['cloudformation']['2010-05-15'].waiters = require('../apis/cloudformation-2010-05-15.waiters2').waiters;

module.exports = AWS.CloudFormation;
