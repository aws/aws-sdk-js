require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['inspector'] = {};
AWS.Inspector = Service.defineService('inspector', ['2016-02-16']);

apiLoader.services['inspector']['2016-02-16'] = require('../apis/inspector-2016-02-16.min.json');

module.exports = AWS.Inspector;
