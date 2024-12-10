require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['route53profiles'] = {};
AWS.Route53Profiles = Service.defineService('route53profiles', ['2018-05-10']);
Object.defineProperty(apiLoader.services['route53profiles'], '2018-05-10', {
  get: function get() {
    var model = require('../apis/route53profiles-2018-05-10.min.json');
    model.paginators = require('../apis/route53profiles-2018-05-10.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Route53Profiles;
