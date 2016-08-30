require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['elasticache'] = {};
AWS.ElastiCache = AWS.Service.defineService('elasticache', ['2015-02-02']);

AWS.apiLoader.services['elasticache']['2015-02-02'] = require('../apis/elasticache-2015-02-02.min');
AWS.apiLoader.services['elasticache']['2015-02-02'].paginators = require('../apis/elasticache-2015-02-02.paginators').pagination;
AWS.apiLoader.services['elasticache']['2015-02-02'].waiters = require('../apis/elasticache-2015-02-02.waiters2').waiters;

module.exports = AWS.ElastiCache;
