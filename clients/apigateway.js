require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['apigateway'] = {};
APIGateway = Service.defineService('apigateway', ['2015-07-09']);
require('../lib/services/apigateway')(APIGateway);

apiLoader.services['apigateway']['2015-07-09'] = require('../apis/apigateway-2015-07-09.min.json');
apiLoader.services['apigateway']['2015-07-09'].paginators = require('../apis/apigateway-2015-07-09.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'APIGateway')) {
  AWS.APIGateway = APIGateway;
}

module.exports = APIGateway;
