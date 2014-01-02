var AWS = require('../core');

AWS.ElastiCache = AWS.Service.defineService('elasticache', ['2012-11-15*', '2013-06-15']);

module.exports = AWS.ElastiCache;
