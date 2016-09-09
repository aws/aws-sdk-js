require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['devicefarm'] = {};
DeviceFarm = Service.defineService('devicefarm', ['2015-06-23']);

apiLoader.services['devicefarm']['2015-06-23'] = require('../apis/devicefarm-2015-06-23.min.json');
apiLoader.services['devicefarm']['2015-06-23'].paginators = require('../apis/devicefarm-2015-06-23.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'DeviceFarm')) {
  AWS.DeviceFarm = DeviceFarm;
}

module.exports = DeviceFarm;
