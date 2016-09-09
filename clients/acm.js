require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['acm'] = {};
AWS.ACM = Service.defineService('acm', ['2015-12-08']);

apiLoader.services['acm']['2015-12-08'] = require('../apis/acm-2015-12-08.min.json');
apiLoader.services['acm']['2015-12-08'].paginators = require('../apis/acm-2015-12-08.paginators.json').pagination;

module.exports = AWS.ACM;
