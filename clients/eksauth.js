require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['eksauth'] = {};
AWS.EKSAuth = Service.defineService('eksauth', ['2023-11-26']);
Object.defineProperty(apiLoader.services['eksauth'], '2023-11-26', {
  get: function get() {
    var model = require('../apis/eks-auth-2023-11-26.min.json');
    model.paginators = require('../apis/eks-auth-2023-11-26.paginators.json').pagination;
    model.waiters = require('../apis/eks-auth-2023-11-26.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.EKSAuth;
