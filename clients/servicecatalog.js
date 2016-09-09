require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['servicecatalog'] = {};
AWS.ServiceCatalog = Service.defineService('servicecatalog', ['2015-12-10']);

apiLoader.services['servicecatalog']['2015-12-10'] = require('../apis/servicecatalog-2015-12-10.min.json');

module.exports = AWS.ServiceCatalog;
