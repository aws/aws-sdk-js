require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['repostspace'] = {};
AWS.Repostspace = Service.defineService('repostspace', ['2022-05-13']);
Object.defineProperty(apiLoader.services['repostspace'], '2022-05-13', {
  get: function get() {
    var model = require('../apis/repostspace-2022-05-13.min.json');
    model.paginators = require('../apis/repostspace-2022-05-13.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Repostspace;
