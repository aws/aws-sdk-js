require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['kms'] = {};
AWS.KMS = AWS.Service.defineService('kms', ['2014-11-01']);

AWS.apiLoader.services['kms']['2014-11-01'] = require('../apis/kms-2014-11-01.min');
AWS.apiLoader.services['kms']['2014-11-01'].paginators = require('../apis/kms-2014-11-01.paginators').pagination;

module.exports = AWS.KMS;
