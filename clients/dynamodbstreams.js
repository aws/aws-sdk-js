require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['dynamodbstreams'] = {};
AWS.DynamoDBStreams = Service.defineService('dynamodbstreams', ['2012-08-10']);

apiLoader.services['dynamodbstreams']['2012-08-10'] = require('../apis/streams.dynamodb-2012-08-10.min.json');

module.exports = AWS.DynamoDBStreams;
