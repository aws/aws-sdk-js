require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudhsm'] = {};
CloudHSM = Service.defineService('cloudhsm', ['2014-05-30']);

apiLoader.services['cloudhsm']['2014-05-30'] = require('../apis/cloudhsm-2014-05-30.min.json');
if (!Object.prototype.hasOwnProperty.call(AWS, 'CloudHSM')) {
  AWS.CloudHSM = CloudHSM;
}

module.exports = CloudHSM;
