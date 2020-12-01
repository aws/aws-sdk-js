require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['profile'] = {};
AWS.Profile = Service.defineService('profile', ['2020-08-15']);
Object.defineProperty(apiLoader.services['profile'], '2020-08-15', {
  get: function get() {
    var model = require('../apis/profile-2020-08-15.min.json');
    model.paginators = require('../apis/profile-2020-08-15.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Profile;
