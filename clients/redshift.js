require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['redshift'] = {};
AWS.Redshift = AWS.Service.defineService('redshift', ['2012-12-01']);

AWS.apiLoader.services['redshift']['2012-12-01'] = require('../apis/redshift-2012-12-01.min');
AWS.apiLoader.services['redshift']['2012-12-01'].paginators = require('../apis/redshift-2012-12-01.paginators').pagination;
AWS.apiLoader.services['redshift']['2012-12-01'].waiters = require('../apis/redshift-2012-12-01.waiters2').waiters;

module.exports = AWS.Redshift;
