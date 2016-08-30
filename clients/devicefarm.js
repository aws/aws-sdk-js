require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['devicefarm'] = {};
AWS.DeviceFarm = AWS.Service.defineService('devicefarm', ['2015-06-23']);

AWS.apiLoader.services['devicefarm']['2015-06-23'] = require('../apis/devicefarm-2015-06-23.min');
AWS.apiLoader.services['devicefarm']['2015-06-23'].paginators = require('../apis/devicefarm-2015-06-23.paginators').pagination;

module.exports = AWS.DeviceFarm;
