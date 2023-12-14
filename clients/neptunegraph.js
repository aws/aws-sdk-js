require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['neptunegraph'] = {};
AWS.NeptuneGraph = Service.defineService('neptunegraph', ['2023-11-29']);
require('../lib/services/neptunegraph');
Object.defineProperty(apiLoader.services['neptunegraph'], '2023-11-29', {
  get: function get() {
    var model = require('../apis/neptune-graph-2023-11-29.min.json');
    model.paginators = require('../apis/neptune-graph-2023-11-29.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.NeptuneGraph;
