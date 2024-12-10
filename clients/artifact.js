require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['artifact'] = {};
AWS.Artifact = Service.defineService('artifact', ['2018-05-10']);
Object.defineProperty(apiLoader.services['artifact'], '2018-05-10', {
  get: function get() {
    var model = require('../apis/artifact-2018-05-10.min.json');
    model.paginators = require('../apis/artifact-2018-05-10.paginators.json').pagination;
    model.waiters = require('../apis/artifact-2018-05-10.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Artifact;
