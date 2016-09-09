require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudhsm'] = {};
AWS.CloudHSM = Service.defineService('cloudhsm', ['2014-05-30']);

apiLoader.services['cloudhsm']['2014-05-30'] = require('../apis/cloudhsm-2014-05-30.min.json');

module.exports = AWS.CloudHSM;
