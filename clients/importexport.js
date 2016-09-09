require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['importexport'] = {};
ImportExport = Service.defineService('importexport', ['2010-06-01']);

apiLoader.services['importexport']['2010-06-01'] = require('../apis/importexport-2010-06-01.min.json');
apiLoader.services['importexport']['2010-06-01'].paginators = require('../apis/importexport-2010-06-01.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'ImportExport')) {
  AWS.ImportExport = ImportExport;
}

module.exports = ImportExport;
