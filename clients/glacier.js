require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'Glacier')) {
  apiLoader.services['glacier'] = {};
  AWS.Glacier = Service.defineService('glacier', ['2012-06-01']);
  require('../lib/services/glacier');

  apiLoader.services['glacier']['2012-06-01'] = require('../apis/glacier-2012-06-01.min');
  apiLoader.services['glacier']['2012-06-01'].paginators = require('../apis/glacier-2012-06-01.paginators').pagination;
  apiLoader.services['glacier']['2012-06-01'].waiters = require('../apis/glacier-2012-06-01.waiters2').waiters;
}

module.exports = AWS.Glacier;
