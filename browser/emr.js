require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['emr'] = {};
AWS.EMR = AWS.Service.defineService('emr', ['2009-03-31']);

AWS.apiLoader.services['emr']['2009-03-31'] = require('../apis/elasticmapreduce-2009-03-31.min');
AWS.apiLoader.services['emr']['2009-03-31'].paginators = require('../apis/elasticmapreduce-2009-03-31.paginators').pagination;
AWS.apiLoader.services['emr']['2009-03-31'].waiters = require('../apis/elasticmapreduce-2009-03-31.waiters2').waiters;

module.exports = AWS.EMR;
