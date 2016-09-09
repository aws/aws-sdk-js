require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['elbv2'] = {};
ELBv2 = Service.defineService('elbv2', ['2015-12-01']);

apiLoader.services['elbv2']['2015-12-01'] = require('../apis/elasticloadbalancingv2-2015-12-01.min.json');
apiLoader.services['elbv2']['2015-12-01'].paginators = require('../apis/elasticloadbalancingv2-2015-12-01.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'ELBv2')) {
  AWS.ELBv2 = ELBv2;
}

module.exports = ELBv2;
