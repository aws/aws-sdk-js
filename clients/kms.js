require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['kms'] = {};
KMS = Service.defineService('kms', ['2014-11-01']);

apiLoader.services['kms']['2014-11-01'] = require('../apis/kms-2014-11-01.min.json');
apiLoader.services['kms']['2014-11-01'].paginators = require('../apis/kms-2014-11-01.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'KMS')) {
  AWS.KMS = KMS;
}

module.exports = KMS;
