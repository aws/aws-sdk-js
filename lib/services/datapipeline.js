var AWS = require('../core');

AWS.DataPipeline = AWS.Service.defineService('datapipeline', ['2012-10-29']);

module.exports = AWS.DataPipeline;
