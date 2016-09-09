require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['redshift'] = {};
AWS.Redshift = Service.defineService('redshift', ['2012-12-01']);

apiLoader.services['redshift']['2012-12-01'] = require('../apis/redshift-2012-12-01.min.json');
apiLoader.services['redshift']['2012-12-01'].paginators = require('../apis/redshift-2012-12-01.paginators.json').pagination;
apiLoader.services['redshift']['2012-12-01'].waiters = require('../apis/redshift-2012-12-01.waiters2.json').waiters;

module.exports = AWS.Redshift;
