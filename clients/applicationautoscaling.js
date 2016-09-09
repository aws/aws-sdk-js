require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['applicationautoscaling'] = {};
AWS.ApplicationAutoScaling = Service.defineService('applicationautoscaling', ['2016-02-06']);

apiLoader.services['applicationautoscaling']['2016-02-06'] = require('../apis/application-autoscaling-2016-02-06.min.json');
apiLoader.services['applicationautoscaling']['2016-02-06'].paginators = require('../apis/application-autoscaling-2016-02-06.paginators.json').pagination;

module.exports = AWS.ApplicationAutoScaling;
