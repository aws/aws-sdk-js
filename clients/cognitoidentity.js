require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'CognitoIdentity')) {
  apiLoader.services['cognitoidentity'] = {};
  AWS.CognitoIdentity = Service.defineService('cognitoidentity', ['2014-06-30']);
  require('../lib/services/cognitoidentity');

  apiLoader.services['cognitoidentity']['2014-06-30'] = require('../apis/cognito-identity-2014-06-30.min');
}

module.exports = AWS.CognitoIdentity;
