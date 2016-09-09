require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['storagegateway'] = {};
StorageGateway = Service.defineService('storagegateway', ['2013-06-30']);

apiLoader.services['storagegateway']['2013-06-30'] = require('../apis/storagegateway-2013-06-30.min.json');
apiLoader.services['storagegateway']['2013-06-30'].paginators = require('../apis/storagegateway-2013-06-30.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'StorageGateway')) {
  AWS.StorageGateway = StorageGateway;
}

module.exports = StorageGateway;
