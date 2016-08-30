require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['cloudhsm'] = {};
AWS.CloudHSM = AWS.Service.defineService('cloudhsm', ['2014-05-30']);

AWS.apiLoader.services['cloudhsm']['2014-05-30'] = require('../apis/cloudhsm-2014-05-30.min');

module.exports = AWS.CloudHSM;
