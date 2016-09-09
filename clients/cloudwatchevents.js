require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudwatchevents'] = {};
CloudWatchEvents = Service.defineService('cloudwatchevents', ['2015-10-07']);

apiLoader.services['cloudwatchevents']['2015-10-07'] = require('../apis/events-2015-10-07.min.json');
if (!Object.prototype.hasOwnProperty.call(AWS, 'CloudWatchEvents')) {
  AWS.CloudWatchEvents = CloudWatchEvents;
}

module.exports = CloudWatchEvents;
