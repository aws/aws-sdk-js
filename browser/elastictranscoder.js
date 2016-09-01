require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['elastictranscoder'] = {};
AWS.ElasticTranscoder = AWS.Service.defineService('elastictranscoder', ['2012-09-25']);

AWS.apiLoader.services['elastictranscoder']['2012-09-25'] = require('../apis/elastictranscoder-2012-09-25.min');
AWS.apiLoader.services['elastictranscoder']['2012-09-25'].paginators = require('../apis/elastictranscoder-2012-09-25.paginators').pagination;
AWS.apiLoader.services['elastictranscoder']['2012-09-25'].waiters = require('../apis/elastictranscoder-2012-09-25.waiters2').waiters;

module.exports = AWS.ElasticTranscoder;
