require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['eks'] = {};
AWS.EKS = Service.defineService('eks', ['2017-11-01']);
Object.defineProperty(apiLoader.services['eks'], '2017-11-01', {
  get: function get() {
    var model = require('../apis/eks-2017-11-01.min.json');
    model.paginators = require('../apis/eks-2017-11-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.EKS;
