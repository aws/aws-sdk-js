require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['iot'] = {};
AWS.Iot = AWS.Service.defineService('iot', ['2015-05-28']);

AWS.apiLoader.services['iot']['2015-05-28'] = require('../apis/iot-2015-05-28.min');

module.exports = AWS.Iot;
