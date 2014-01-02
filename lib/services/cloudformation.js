var AWS = require('../core');

AWS.CloudFormation = AWS.Service.defineService('cloudformation', ['2010-05-15']);

module.exports = AWS.CloudFormation;
