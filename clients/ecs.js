require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['ecs'] = {};
ECS = Service.defineService('ecs', ['2014-11-13']);

apiLoader.services['ecs']['2014-11-13'] = require('../apis/ecs-2014-11-13.min.json');
apiLoader.services['ecs']['2014-11-13'].paginators = require('../apis/ecs-2014-11-13.paginators.json').pagination;
apiLoader.services['ecs']['2014-11-13'].waiters = require('../apis/ecs-2014-11-13.waiters2.json').waiters;
if (!Object.prototype.hasOwnProperty.call(AWS, 'ECS')) {
  AWS.ECS = ECS;
}

module.exports = ECS;
