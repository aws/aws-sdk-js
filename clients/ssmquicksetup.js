require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['ssmquicksetup'] = {};
AWS.SSMQuickSetup = Service.defineService('ssmquicksetup', ['2018-05-10']);
Object.defineProperty(apiLoader.services['ssmquicksetup'], '2018-05-10', {
  get: function get() {
    var model = require('../apis/ssm-quicksetup-2018-05-10.min.json');
    model.paginators = require('../apis/ssm-quicksetup-2018-05-10.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.SSMQuickSetup;
