require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['sqs'] = {};
AWS.SQS = AWS.Service.defineService('sqs', ['2012-11-05']);
require('../lib/services/sqs');

AWS.apiLoader.services['sqs']['2012-11-05'] = require('../apis/sqs-2012-11-05.min');
AWS.apiLoader.services['sqs']['2012-11-05'].paginators = require('../apis/sqs-2012-11-05.paginators').pagination;

module.exports = AWS.SQS;
