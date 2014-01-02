var AWS = require('../core');

AWS.StorageGateway = AWS.Service.defineService('storagegateway', ['2013-06-30', '2012-06-30']);

module.exports = AWS.StorageGateway;
