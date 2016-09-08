require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'Support')) {
  apiLoader.services['support'] = {};
  AWS.Support = Service.defineService('support', ['2013-04-15']);

  apiLoader.services['support']['2013-04-15'] = require('../apis/support-2013-04-15.min');
  apiLoader.services['support']['2013-04-15'].paginators = require('../apis/support-2013-04-15.paginators').pagination;
}

module.exports = AWS.Support;
