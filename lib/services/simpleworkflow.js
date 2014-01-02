var AWS = require('../core');

AWS.SimpleWorkflow = AWS.Service.defineService('simpleworkflow', ['2012-01-25']);

module.exports = AWS.SimpleWorkflow;
