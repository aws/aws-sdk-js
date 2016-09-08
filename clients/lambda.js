require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'Lambda')) {
  apiLoader.services['lambda'] = {};
  AWS.Lambda = Service.defineService('lambda', ['2014-11-11', '2015-03-31']);

  apiLoader.services['lambda']['2014-11-11'] = require('../apis/lambda-2014-11-11.min');
  apiLoader.services['lambda']['2014-11-11'].paginators = require('../apis/lambda-2014-11-11.paginators').pagination;

  apiLoader.services['lambda']['2015-03-31'] = require('../apis/lambda-2015-03-31.min');
  apiLoader.services['lambda']['2015-03-31'].paginators = require('../apis/lambda-2015-03-31.paginators').pagination;
}

module.exports = AWS.Lambda;
