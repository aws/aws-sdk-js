require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['dms'] = {};
AWS.DMS = Service.defineService('dms', ['2016-01-01']);

apiLoader.services['dms']['2016-01-01'] = require('../apis/dms-2016-01-01.min.json');

module.exports = AWS.DMS;
