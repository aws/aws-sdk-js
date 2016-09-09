require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['dynamodbstreams'] = {};
DynamoDBStreams = Service.defineService('dynamodbstreams', ['2012-08-10']);

apiLoader.services['dynamodbstreams']['2012-08-10'] = require('../apis/streams.dynamodb-2012-08-10.min.json');
if (!Object.prototype.hasOwnProperty.call(AWS, 'DynamoDBStreams')) {
  AWS.DynamoDBStreams = DynamoDBStreams;
}

module.exports = DynamoDBStreams;
