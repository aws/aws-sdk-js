require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['swf'] = {};
AWS.SWF = Service.defineService('swf', ['2012-01-25']);
require('../lib/services/swf');

apiLoader.services['swf']['2012-01-25'] = require('../apis/swf-2012-01-25.min.json');
apiLoader.services['swf']['2012-01-25'].paginators = require('../apis/swf-2012-01-25.paginators.json').pagination;

module.exports = AWS.SWF;
