require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['cloudwatchevents'] = {};
AWS.CloudWatchEvents = AWS.Service.defineService('cloudwatchevents', ['2015-10-07']);

AWS.apiLoader.services['cloudwatchevents']['2015-10-07'] = require('../apis/events-2015-10-07.min');

module.exports = AWS.CloudWatchEvents;
