require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['iotdata'] = {};
AWS.IotData = AWS.Service.defineService('iotdata', ['2015-05-28']);
require('../lib/services/iotdata');

AWS.apiLoader.services['iotdata']['2015-05-28'] = require('../apis/iot-data-2015-05-28.min');

module.exports = AWS.IotData;
