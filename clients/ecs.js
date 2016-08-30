require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['ecs'] = {};
AWS.ECS = AWS.Service.defineService('ecs', ['2014-11-13']);

AWS.apiLoader.services['ecs']['2014-11-13'] = require('../apis/ecs-2014-11-13.min');
AWS.apiLoader.services['ecs']['2014-11-13'].paginators = require('../apis/ecs-2014-11-13.paginators').pagination;
AWS.apiLoader.services['ecs']['2014-11-13'].waiters = require('../apis/ecs-2014-11-13.waiters2').waiters;

module.exports = AWS.ECS;
