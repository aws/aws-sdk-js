require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['acm'] = {};
AWS.ACM = AWS.Service.defineService('acm', ['2015-12-08']);

AWS.apiLoader.services['acm']['2015-12-08'] = require('../apis/acm-2015-12-08.min');
AWS.apiLoader.services['acm']['2015-12-08'].paginators = require('../apis/acm-2015-12-08.paginators').pagination;

module.exports = AWS.ACM;
