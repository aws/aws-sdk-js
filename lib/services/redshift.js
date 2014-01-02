var AWS = require('../core');

AWS.Redshift = AWS.Service.defineService('redshift', ['2012-12-01']);

module.exports = AWS.Redshift;
