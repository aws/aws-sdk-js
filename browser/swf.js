require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['swf'] = {};
AWS.SWF = AWS.Service.defineService('swf', ['2012-01-25']);
require('../lib/services/swf');

AWS.apiLoader.services['swf']['2012-01-25'] = require('../apis/swf-2012-01-25.min');
AWS.apiLoader.services['swf']['2012-01-25'].paginators = require('../apis/swf-2012-01-25.paginators').pagination;

module.exports = AWS.SWF;
