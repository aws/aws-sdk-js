var AWS = require('../core');

AWS.SNS = AWS.Service.defineService('sns', ['2010-03-31']);

module.exports = AWS.SNS;
