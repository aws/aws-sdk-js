require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['s3'] = {};
AWS.S3 = Service.defineService('s3', ['2006-03-01']);
require('../lib/services/s3');

apiLoader.services['s3']['2006-03-01'] = require('../apis/s3-2006-03-01.min.json');
apiLoader.services['s3']['2006-03-01'].paginators = require('../apis/s3-2006-03-01.paginators.json').pagination;
apiLoader.services['s3']['2006-03-01'].waiters = require('../apis/s3-2006-03-01.waiters2.json').waiters;

module.exports = AWS.S3;
