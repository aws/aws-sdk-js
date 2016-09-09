require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['glacier'] = {};
AWS.Glacier = Service.defineService('glacier', ['2012-06-01']);
require('../lib/services/glacier');

apiLoader.services['glacier']['2012-06-01'] = require('../apis/glacier-2012-06-01.min.json');
apiLoader.services['glacier']['2012-06-01'].paginators = require('../apis/glacier-2012-06-01.paginators.json').pagination;
apiLoader.services['glacier']['2012-06-01'].waiters = require('../apis/glacier-2012-06-01.waiters2.json').waiters;

module.exports = AWS.Glacier;
