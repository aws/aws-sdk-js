require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['datapipeline'] = {};
DataPipeline = Service.defineService('datapipeline', ['2012-10-29']);

apiLoader.services['datapipeline']['2012-10-29'] = require('../apis/datapipeline-2012-10-29.min.json');
apiLoader.services['datapipeline']['2012-10-29'].paginators = require('../apis/datapipeline-2012-10-29.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'DataPipeline')) {
  AWS.DataPipeline = DataPipeline;
}

module.exports = DataPipeline;
