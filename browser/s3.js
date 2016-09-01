require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['s3'] = {};
AWS.S3 = AWS.Service.defineService('s3', ['2006-03-01']);
require('../lib/services/s3');

AWS.apiLoader.services['s3']['2006-03-01'] = require('../apis/s3-2006-03-01.min');
AWS.apiLoader.services['s3']['2006-03-01'].paginators = require('../apis/s3-2006-03-01.paginators').pagination;
AWS.apiLoader.services['s3']['2006-03-01'].waiters = require('../apis/s3-2006-03-01.waiters2').waiters;

module.exports = AWS.S3;
