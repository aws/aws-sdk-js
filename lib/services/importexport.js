var AWS = require('../core');

AWS.ImportExport = AWS.Service.defineService('importexport', ['2010-06-01']);

module.exports = AWS.ImportExport;
