require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['elastictranscoder'] = {};
AWS.ElasticTranscoder = Service.defineService('elastictranscoder', ['2012-09-25']);

apiLoader.services['elastictranscoder']['2012-09-25'] = require('../apis/elastictranscoder-2012-09-25.min.json');
apiLoader.services['elastictranscoder']['2012-09-25'].paginators = require('../apis/elastictranscoder-2012-09-25.paginators.json').pagination;
apiLoader.services['elastictranscoder']['2012-09-25'].waiters = require('../apis/elastictranscoder-2012-09-25.waiters2.json').waiters;

module.exports = AWS.ElasticTranscoder;
