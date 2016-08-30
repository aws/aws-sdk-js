require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['lambda'] = {};
AWS.Lambda = AWS.Service.defineService('lambda', ['2014-11-11', '2015-03-31']);

AWS.apiLoader.services['lambda']['2014-11-11'] = require('../apis/lambda-2014-11-11.min');
AWS.apiLoader.services['lambda']['2014-11-11'].paginators = require('../apis/lambda-2014-11-11.paginators').pagination;

AWS.apiLoader.services['lambda']['2015-03-31'] = require('../apis/lambda-2015-03-31.min');
AWS.apiLoader.services['lambda']['2015-03-31'].paginators = require('../apis/lambda-2015-03-31.paginators').pagination;

module.exports = AWS.Lambda;
