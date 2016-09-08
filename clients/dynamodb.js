require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'DynamoDB')) {
  apiLoader.services['dynamodb'] = {};
  AWS.DynamoDB = Service.defineService('dynamodb', ['2011-12-05', '2012-08-10']);
  require('../lib/services/dynamodb');

  apiLoader.services['dynamodb']['2011-12-05'] = require('../apis/dynamodb-2011-12-05.min');
  apiLoader.services['dynamodb']['2011-12-05'].paginators = require('../apis/dynamodb-2011-12-05.paginators').pagination;
  apiLoader.services['dynamodb']['2011-12-05'].waiters = require('../apis/dynamodb-2011-12-05.waiters2').waiters;

  apiLoader.services['dynamodb']['2012-08-10'] = require('../apis/dynamodb-2012-08-10.min');
  apiLoader.services['dynamodb']['2012-08-10'].paginators = require('../apis/dynamodb-2012-08-10.paginators').pagination;
  apiLoader.services['dynamodb']['2012-08-10'].waiters = require('../apis/dynamodb-2012-08-10.waiters2').waiters;
}

module.exports = AWS.DynamoDB;
