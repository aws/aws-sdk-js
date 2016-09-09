require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudwatch'] = {};
AWS.CloudWatch = Service.defineService('cloudwatch', ['2010-08-01']);

apiLoader.services['cloudwatch']['2010-08-01'] = require('../apis/monitoring-2010-08-01.min.json');
apiLoader.services['cloudwatch']['2010-08-01'].paginators = require('../apis/monitoring-2010-08-01.paginators.json').pagination;
apiLoader.services['cloudwatch']['2010-08-01'].waiters = require('../apis/monitoring-2010-08-01.waiters2.json').waiters;

module.exports = AWS.CloudWatch;
