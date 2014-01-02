var AWS = require('../core');

AWS.IAM = AWS.Service.defineService('iam', ['2010-05-08']);

module.exports = AWS.IAM;
