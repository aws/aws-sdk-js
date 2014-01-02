var AWS = require('../core');

AWS.CloudTrail = AWS.Service.defineService('cloudtrail', ['2013-11-01']);

module.exports = AWS.CloudTrail;
