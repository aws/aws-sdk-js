require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cognitoidentity'] = {};
AWS.CognitoIdentity = Service.defineService('cognitoidentity', ['2014-06-30']);
require('../lib/services/cognitoidentity');

apiLoader.services['cognitoidentity']['2014-06-30'] = require('../apis/cognito-identity-2014-06-30.min.json');

module.exports = AWS.CognitoIdentity;
