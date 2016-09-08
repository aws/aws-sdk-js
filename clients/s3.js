require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'S3')) {
  apiLoader.services['s3'] = {};
  AWS.S3 = Service.defineService('s3', ['2006-03-01']);
  require('../lib/services/s3');

  apiLoader.services['s3']['2006-03-01'] = require('../apis/s3-2006-03-01.min');
  apiLoader.services['s3']['2006-03-01'].paginators = require('../apis/s3-2006-03-01.paginators').pagination;
  apiLoader.services['s3']['2006-03-01'].waiters = require('../apis/s3-2006-03-01.waiters2').waiters;
}

module.exports = AWS.S3;
