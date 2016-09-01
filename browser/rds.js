require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['rds'] = {};
AWS.RDS = AWS.Service.defineService('rds', ['2013-01-10', '2013-02-12', '2013-09-09', '2014-10-31']);

AWS.apiLoader.services['rds']['2013-01-10'] = require('../apis/rds-2013-01-10.min');
AWS.apiLoader.services['rds']['2013-01-10'].paginators = require('../apis/rds-2013-01-10.paginators').pagination;

AWS.apiLoader.services['rds']['2013-02-12'] = require('../apis/rds-2013-02-12.min');
AWS.apiLoader.services['rds']['2013-02-12'].paginators = require('../apis/rds-2013-02-12.paginators').pagination;

AWS.apiLoader.services['rds']['2013-09-09'] = require('../apis/rds-2013-09-09.min');
AWS.apiLoader.services['rds']['2013-09-09'].paginators = require('../apis/rds-2013-09-09.paginators').pagination;
AWS.apiLoader.services['rds']['2013-09-09'].waiters = require('../apis/rds-2013-09-09.waiters2').waiters;

AWS.apiLoader.services['rds']['2014-10-31'] = require('../apis/rds-2014-10-31.min');
AWS.apiLoader.services['rds']['2014-10-31'].paginators = require('../apis/rds-2014-10-31.paginators').pagination;
AWS.apiLoader.services['rds']['2014-10-31'].waiters = require('../apis/rds-2014-10-31.waiters2').waiters;

module.exports = AWS.RDS;
