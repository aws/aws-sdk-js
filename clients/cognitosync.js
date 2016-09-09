require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cognitosync'] = {};
AWS.CognitoSync = Service.defineService('cognitosync', ['2014-06-30']);

apiLoader.services['cognitosync']['2014-06-30'] = require('../apis/cognito-sync-2014-06-30.min.json');

module.exports = AWS.CognitoSync;
