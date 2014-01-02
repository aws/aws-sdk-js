var AWS = require('../core');

AWS.Kinesis = AWS.Service.defineService('kinesis', ['2013-12-02']);

module.exports = AWS.Kinesis;
