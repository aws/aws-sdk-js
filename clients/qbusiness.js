require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['qbusiness'] = {};
AWS.QBusiness = Service.defineService('qbusiness', ['2023-11-27']);
Object.defineProperty(apiLoader.services['qbusiness'], '2023-11-27', {
  get: function get() {
    var model = require('../apis/qbusiness-2023-11-27.min.json');
    model.paginators = require('../apis/qbusiness-2023-11-27.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.QBusiness;
