require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['dynamodbstreams'] = {};
AWS.DynamoDBStreams = AWS.Service.defineService('dynamodbstreams', ['2012-08-10']);

AWS.apiLoader.services['dynamodbstreams']['2012-08-10'] = require('../apis/streams.dynamodb-2012-08-10.min');

module.exports = AWS.DynamoDBStreams;
