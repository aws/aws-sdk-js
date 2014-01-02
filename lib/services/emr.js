var AWS = require('../core');

AWS.EMR = AWS.Service.defineService('emr', ['2009-03-31']);

module.exports = AWS.EMR;
