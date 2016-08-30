require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['cognitosync'] = {};
AWS.CognitoSync = AWS.Service.defineService('cognitosync', ['2014-06-30']);

AWS.apiLoader.services['cognitosync']['2014-06-30'] = require('../apis/cognito-sync-2014-06-30.min');

module.exports = AWS.CognitoSync;
