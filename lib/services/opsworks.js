var AWS = require('../core');

AWS.OpsWorks = AWS.Service.defineService('opsworks', ['2013-02-18']);

module.exports = AWS.OpsWorks;
