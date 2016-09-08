require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'STS')) {
  apiLoader.services['sts'] = {};
  AWS.STS = Service.defineService('sts', ['2011-06-15']);
  require('../lib/services/sts');

  apiLoader.services['sts']['2011-06-15'] = require('../apis/sts-2011-06-15.min');
}

module.exports = AWS.STS;
