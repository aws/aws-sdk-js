require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['workspacesthinclient'] = {};
AWS.WorkSpacesThinClient = Service.defineService('workspacesthinclient', ['2023-08-22']);
Object.defineProperty(apiLoader.services['workspacesthinclient'], '2023-08-22', {
  get: function get() {
    var model = require('../apis/workspaces-thin-client-2023-08-22.min.json');
    model.paginators = require('../apis/workspaces-thin-client-2023-08-22.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.WorkSpacesThinClient;
