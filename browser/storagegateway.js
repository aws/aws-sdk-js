require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['storagegateway'] = {};
AWS.StorageGateway = AWS.Service.defineService('storagegateway', ['2013-06-30']);

AWS.apiLoader.services['storagegateway']['2013-06-30'] = require('../apis/storagegateway-2013-06-30.min');
AWS.apiLoader.services['storagegateway']['2013-06-30'].paginators = require('../apis/storagegateway-2013-06-30.paginators').pagination;

module.exports = AWS.StorageGateway;
