require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['cognitoidentity'] = {};
AWS.CognitoIdentity = AWS.Service.defineService('cognitoidentity', ['2014-06-30']);
require('../lib/services/cognitoidentity');

AWS.apiLoader.services['cognitoidentity']['2014-06-30'] = require('../apis/cognito-identity-2014-06-30.min');

module.exports = AWS.CognitoIdentity;
