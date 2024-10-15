require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['launchwizard'] = {};
AWS.LaunchWizard = Service.defineService('launchwizard', ['2018-05-10']);
Object.defineProperty(apiLoader.services['launchwizard'], '2018-05-10', {
  get: function get() {
    var model = require('../apis/launch-wizard-2018-05-10.min.json');
    model.paginators = require('../apis/launch-wizard-2018-05-10.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.LaunchWizard;
