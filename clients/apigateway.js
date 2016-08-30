require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['apigateway'] = {};
AWS.APIGateway = AWS.Service.defineService('apigateway', ['2015-07-09']);
require('../lib/services/apigateway');

AWS.apiLoader.services['apigateway']['2015-07-09'] = require('../apis/apigateway-2015-07-09.min');
AWS.apiLoader.services['apigateway']['2015-07-09'].paginators = require('../apis/apigateway-2015-07-09.paginators').pagination;

module.exports = AWS.APIGateway;
