require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['importexport'] = {};
AWS.ImportExport = AWS.Service.defineService('importexport', ['2010-06-01']);

AWS.apiLoader.services['importexport']['2010-06-01'] = require('../apis/importexport-2010-06-01.min');
AWS.apiLoader.services['importexport']['2010-06-01'].paginators = require('../apis/importexport-2010-06-01.paginators').pagination;

module.exports = AWS.ImportExport;
