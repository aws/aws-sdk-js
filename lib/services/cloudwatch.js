var AWS = require('../core');

AWS.CloudWatch = AWS.Service.defineService('cloudwatch', ['2010-08-01']);

module.exports = AWS.CloudWatch;
