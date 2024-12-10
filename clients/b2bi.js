require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['b2bi'] = {};
AWS.B2bi = Service.defineService('b2bi', ['2022-06-23']);
Object.defineProperty(apiLoader.services['b2bi'], '2022-06-23', {
  get: function get() {
    var model = require('../apis/b2bi-2022-06-23.min.json');
    model.paginators = require('../apis/b2bi-2022-06-23.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.B2bi;
