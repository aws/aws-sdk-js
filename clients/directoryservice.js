require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['directoryservice'] = {};
AWS.DirectoryService = AWS.Service.defineService('directoryservice', ['2015-04-16']);

AWS.apiLoader.services['directoryservice']['2015-04-16'] = require('../apis/ds-2015-04-16.min');

module.exports = AWS.DirectoryService;
