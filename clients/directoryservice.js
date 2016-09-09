require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['directoryservice'] = {};
AWS.DirectoryService = Service.defineService('directoryservice', ['2015-04-16']);

apiLoader.services['directoryservice']['2015-04-16'] = require('../apis/ds-2015-04-16.min.json');

module.exports = AWS.DirectoryService;
