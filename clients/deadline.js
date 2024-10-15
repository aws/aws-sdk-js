require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['deadline'] = {};
AWS.Deadline = Service.defineService('deadline', ['2023-10-12']);
Object.defineProperty(apiLoader.services['deadline'], '2023-10-12', {
  get: function get() {
    var model = require('../apis/deadline-2023-10-12.min.json');
    model.paginators = require('../apis/deadline-2023-10-12.paginators.json').pagination;
    model.waiters = require('../apis/deadline-2023-10-12.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Deadline;
