require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cognitoidentityserviceprovider'] = {};
AWS.CognitoIdentityServiceProvider = Service.defineService('cognitoidentityserviceprovider', ['2016-04-18']);

apiLoader.services['cognitoidentityserviceprovider']['2016-04-18'] = require('../apis/cognito-idp-2016-04-18.min.json');

module.exports = AWS.CognitoIdentityServiceProvider;
