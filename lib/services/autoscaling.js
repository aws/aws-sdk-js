var AWS = require('../core');

AWS.AutoScaling = AWS.Service.defineService('autoscaling', ['2011-01-01']);

module.exports = AWS.AutoScaling;
