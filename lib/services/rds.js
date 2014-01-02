var AWS = require('../core');

AWS.RDS = AWS.Service.defineService('rds', ['2013-01-10', '2013-02-12', '2013-05-15*', '2013-09-09']);

module.exports = AWS.RDS;
