require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['directconnect'] = {};
AWS.DirectConnect = AWS.Service.defineService('directconnect', ['2012-10-25']);

AWS.apiLoader.services['directconnect']['2012-10-25'] = require('../apis/directconnect-2012-10-25.min');
AWS.apiLoader.services['directconnect']['2012-10-25'].paginators = require('../apis/directconnect-2012-10-25.paginators').pagination;

module.exports = AWS.DirectConnect;
