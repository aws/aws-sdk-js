require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['discovery'] = {};
AWS.Discovery = Service.defineService('discovery', ['2015-11-01']);

apiLoader.services['discovery']['2015-11-01'] = require('../apis/discovery-2015-11-01.min.json');

module.exports = AWS.Discovery;
