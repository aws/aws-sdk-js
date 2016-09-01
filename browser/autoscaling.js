require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['autoscaling'] = {};
AWS.AutoScaling = AWS.Service.defineService('autoscaling', ['2011-01-01']);

AWS.apiLoader.services['autoscaling']['2011-01-01'] = require('../apis/autoscaling-2011-01-01.min');
AWS.apiLoader.services['autoscaling']['2011-01-01'].paginators = require('../apis/autoscaling-2011-01-01.paginators').pagination;

module.exports = AWS.AutoScaling;
