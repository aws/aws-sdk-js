require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['workspaces'] = {};
AWS.WorkSpaces = AWS.Service.defineService('workspaces', ['2015-04-08']);

AWS.apiLoader.services['workspaces']['2015-04-08'] = require('../apis/workspaces-2015-04-08.min');
AWS.apiLoader.services['workspaces']['2015-04-08'].paginators = require('../apis/workspaces-2015-04-08.paginators').pagination;

module.exports = AWS.WorkSpaces;
