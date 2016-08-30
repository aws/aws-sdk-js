require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['cloudwatchlogs'] = {};
AWS.CloudWatchLogs = AWS.Service.defineService('cloudwatchlogs', ['2014-03-28']);

AWS.apiLoader.services['cloudwatchlogs']['2014-03-28'] = require('../apis/logs-2014-03-28.min');
AWS.apiLoader.services['cloudwatchlogs']['2014-03-28'].paginators = require('../apis/logs-2014-03-28.paginators').pagination;

module.exports = AWS.CloudWatchLogs;
