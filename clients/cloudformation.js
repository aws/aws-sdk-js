require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudformation'] = {};
AWS.CloudFormation = Service.defineService('cloudformation', ['2010-05-15']);

apiLoader.services['cloudformation']['2010-05-15'] = require('../apis/cloudformation-2010-05-15.min.json');
apiLoader.services['cloudformation']['2010-05-15'].paginators = require('../apis/cloudformation-2010-05-15.paginators.json').pagination;
apiLoader.services['cloudformation']['2010-05-15'].waiters = require('../apis/cloudformation-2010-05-15.waiters2.json').waiters;

module.exports = AWS.CloudFormation;
