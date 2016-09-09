require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['workspaces'] = {};
WorkSpaces = Service.defineService('workspaces', ['2015-04-08']);

apiLoader.services['workspaces']['2015-04-08'] = require('../apis/workspaces-2015-04-08.min.json');
apiLoader.services['workspaces']['2015-04-08'].paginators = require('../apis/workspaces-2015-04-08.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'WorkSpaces')) {
  AWS.WorkSpaces = WorkSpaces;
}

module.exports = WorkSpaces;
