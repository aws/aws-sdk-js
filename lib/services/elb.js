var AWS = require('../core');

AWS.ELB = AWS.Service.defineService('elb', ['2012-06-01']);

module.exports = AWS.ELB;
