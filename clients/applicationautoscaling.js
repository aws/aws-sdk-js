require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['applicationautoscaling'] = {};
AWS.ApplicationAutoScaling = AWS.Service.defineService('applicationautoscaling', ['2016-02-06']);

AWS.apiLoader.services['applicationautoscaling']['2016-02-06'] = require('../apis/application-autoscaling-2016-02-06.min');
AWS.apiLoader.services['applicationautoscaling']['2016-02-06'].paginators = require('../apis/application-autoscaling-2016-02-06.paginators').pagination;

module.exports = AWS.ApplicationAutoScaling;
