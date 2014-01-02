var AWS = require('../core');

AWS.CloudSearch = AWS.Service.defineService('cloudsearch', ['2011-02-01']);

module.exports = AWS.CloudSearch;
