require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['cloudwatch'] = {};
AWS.CloudWatch = AWS.Service.defineService('cloudwatch', ['2010-08-01']);

AWS.apiLoader.services['cloudwatch']['2010-08-01'] = require('../apis/monitoring-2010-08-01.min');
AWS.apiLoader.services['cloudwatch']['2010-08-01'].paginators = require('../apis/monitoring-2010-08-01.paginators').pagination;
AWS.apiLoader.services['cloudwatch']['2010-08-01'].waiters = require('../apis/monitoring-2010-08-01.waiters2').waiters;

module.exports = AWS.CloudWatch;
