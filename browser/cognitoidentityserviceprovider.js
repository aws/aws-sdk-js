require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['cognitoidentityserviceprovider'] = {};
AWS.CognitoIdentityServiceProvider = AWS.Service.defineService('cognitoidentityserviceprovider', ['2016-04-18']);

AWS.apiLoader.services['cognitoidentityserviceprovider']['2016-04-18'] = require('../apis/cognito-idp-2016-04-18.min');

module.exports = AWS.CognitoIdentityServiceProvider;
