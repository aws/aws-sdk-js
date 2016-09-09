require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cognitoidentity'] = {};
CognitoIdentity = Service.defineService('cognitoidentity', ['2014-06-30']);
require('../lib/services/cognitoidentity')(CognitoIdentity);

apiLoader.services['cognitoidentity']['2014-06-30'] = require('../apis/cognito-identity-2014-06-30.min.json');
if (!Object.prototype.hasOwnProperty.call(AWS, 'CognitoIdentity')) {
  AWS.CognitoIdentity = CognitoIdentity;
}

module.exports = CognitoIdentity;
