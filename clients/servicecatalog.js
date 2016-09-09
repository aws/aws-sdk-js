require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['servicecatalog'] = {};
ServiceCatalog = Service.defineService('servicecatalog', ['2015-12-10']);

apiLoader.services['servicecatalog']['2015-12-10'] = require('../apis/servicecatalog-2015-12-10.min.json');
if (!Object.prototype.hasOwnProperty.call(AWS, 'ServiceCatalog')) {
  AWS.ServiceCatalog = ServiceCatalog;
}

module.exports = ServiceCatalog;
