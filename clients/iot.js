require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['iot'] = {};
AWS.Iot = Service.defineService('iot', ['2015-05-28']);

apiLoader.services['iot']['2015-05-28'] = require('../apis/iot-2015-05-28.min.json');

module.exports = AWS.Iot;
