require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['ec2'] = {};
AWS.EC2 = Service.defineService('ec2', ['2016-04-01']);
require('../lib/services/ec2');
Object.defineProperty(apiLoader.services['ec2'], '2016-04-01', {
  get: function get() {
    var model = require('../apis/ec2-2016-04-01.min.json');
    model.paginators = require('../apis/ec2-2016-04-01.paginators.json').pagination;
    model.waiters = require('../apis/ec2-2016-04-01.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.EC2;
