require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'APIGateway')) {
  apiLoader.services['apigateway'] = {};
  AWS.APIGateway = Service.defineService('apigateway', ['2015-07-09']);
  require('../lib/services/apigateway');

  apiLoader.services['apigateway']['2015-07-09'] = require('../apis/apigateway-2015-07-09.min');
  apiLoader.services['apigateway']['2015-07-09'].paginators = require('../apis/apigateway-2015-07-09.paginators').pagination;
}

module.exports = AWS.APIGateway;
