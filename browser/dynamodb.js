require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['dynamodb'] = {};
AWS.DynamoDB = AWS.Service.defineService('dynamodb', ['2011-12-05', '2012-08-10']);
require('../lib/services/dynamodb');

AWS.apiLoader.services['dynamodb']['2011-12-05'] = require('../apis/dynamodb-2011-12-05.min');
AWS.apiLoader.services['dynamodb']['2011-12-05'].paginators = require('../apis/dynamodb-2011-12-05.paginators').pagination;
AWS.apiLoader.services['dynamodb']['2011-12-05'].waiters = require('../apis/dynamodb-2011-12-05.waiters2').waiters;

AWS.apiLoader.services['dynamodb']['2012-08-10'] = require('../apis/dynamodb-2012-08-10.min');
AWS.apiLoader.services['dynamodb']['2012-08-10'].paginators = require('../apis/dynamodb-2012-08-10.paginators').pagination;
AWS.apiLoader.services['dynamodb']['2012-08-10'].waiters = require('../apis/dynamodb-2012-08-10.waiters2').waiters;

module.exports = AWS.DynamoDB;
