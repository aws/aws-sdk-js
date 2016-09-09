require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['elasticache'] = {};
AWS.ElastiCache = Service.defineService('elasticache', ['2015-02-02']);

apiLoader.services['elasticache']['2015-02-02'] = require('../apis/elasticache-2015-02-02.min.json');
apiLoader.services['elasticache']['2015-02-02'].paginators = require('../apis/elasticache-2015-02-02.paginators.json').pagination;
apiLoader.services['elasticache']['2015-02-02'].waiters = require('../apis/elasticache-2015-02-02.waiters2.json').waiters;

module.exports = AWS.ElastiCache;
