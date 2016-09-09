require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['ec2'] = {};
EC2 = Service.defineService('ec2', ['2016-04-01']);
require('../lib/services/ec2')(EC2);

apiLoader.services['ec2']['2016-04-01'] = require('../apis/ec2-2016-04-01.min.json');
apiLoader.services['ec2']['2016-04-01'].paginators = require('../apis/ec2-2016-04-01.paginators.json').pagination;
apiLoader.services['ec2']['2016-04-01'].waiters = require('../apis/ec2-2016-04-01.waiters2.json').waiters;
if (!Object.prototype.hasOwnProperty.call(AWS, 'EC2')) {
  AWS.EC2 = EC2;
}

module.exports = EC2;
