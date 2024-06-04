require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['taxsettings'] = {};
AWS.TaxSettings = Service.defineService('taxsettings', ['2018-05-10']);
Object.defineProperty(apiLoader.services['taxsettings'], '2018-05-10', {
  get: function get() {
    var model = require('../apis/taxsettings-2018-05-10.min.json');
    model.paginators = require('../apis/taxsettings-2018-05-10.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.TaxSettings;
