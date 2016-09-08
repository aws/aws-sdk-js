require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'Snowball')) {
  apiLoader.services['snowball'] = {};
  AWS.Snowball = Service.defineService('snowball', ['2016-06-30']);

  apiLoader.services['snowball']['2016-06-30'] = require('../apis/snowball-2016-06-30.min');
  apiLoader.services['snowball']['2016-06-30'].paginators = require('../apis/snowball-2016-06-30.paginators').pagination;
}

module.exports = AWS.Snowball;
