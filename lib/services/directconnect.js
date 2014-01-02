var AWS = require('../core');

AWS.DirectConnect = AWS.Service.defineService('directconnect', ['2012-10-25']);

module.exports = AWS.DirectConnect;
