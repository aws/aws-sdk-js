require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['trustedadvisor'] = {};
AWS.TrustedAdvisor = Service.defineService('trustedadvisor', ['2022-09-15']);
Object.defineProperty(apiLoader.services['trustedadvisor'], '2022-09-15', {
  get: function get() {
    var model = require('../apis/trustedadvisor-2022-09-15.min.json');
    model.paginators = require('../apis/trustedadvisor-2022-09-15.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.TrustedAdvisor;
