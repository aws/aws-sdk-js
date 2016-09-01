require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['ec2'] = {};
AWS.EC2 = AWS.Service.defineService('ec2', ['2016-04-01']);
require('../lib/services/ec2');

AWS.apiLoader.services['ec2']['2016-04-01'] = require('../apis/ec2-2016-04-01.min');
AWS.apiLoader.services['ec2']['2016-04-01'].paginators = require('../apis/ec2-2016-04-01.paginators').pagination;
AWS.apiLoader.services['ec2']['2016-04-01'].waiters = require('../apis/ec2-2016-04-01.waiters2').waiters;

module.exports = AWS.EC2;
