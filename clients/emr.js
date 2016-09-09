require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['emr'] = {};
AWS.EMR = Service.defineService('emr', ['2009-03-31']);

apiLoader.services['emr']['2009-03-31'] = require('../apis/elasticmapreduce-2009-03-31.min.json');
apiLoader.services['emr']['2009-03-31'].paginators = require('../apis/elasticmapreduce-2009-03-31.paginators.json').pagination;
apiLoader.services['emr']['2009-03-31'].waiters = require('../apis/elasticmapreduce-2009-03-31.waiters2.json').waiters;

module.exports = AWS.EMR;
