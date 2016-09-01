require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['datapipeline'] = {};
AWS.DataPipeline = AWS.Service.defineService('datapipeline', ['2012-10-29']);

AWS.apiLoader.services['datapipeline']['2012-10-29'] = require('../apis/datapipeline-2012-10-29.min');
AWS.apiLoader.services['datapipeline']['2012-10-29'].paginators = require('../apis/datapipeline-2012-10-29.paginators').pagination;

module.exports = AWS.DataPipeline;
