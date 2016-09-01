require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['servicecatalog'] = {};
AWS.ServiceCatalog = AWS.Service.defineService('servicecatalog', ['2015-12-10']);

AWS.apiLoader.services['servicecatalog']['2015-12-10'] = require('../apis/servicecatalog-2015-12-10.min');

module.exports = AWS.ServiceCatalog;
