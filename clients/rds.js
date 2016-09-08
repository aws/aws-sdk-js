require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'RDS')) {
  apiLoader.services['rds'] = {};
  AWS.RDS = Service.defineService('rds', ['2013-01-10', '2013-02-12', '2013-09-09', '2014-10-31']);

  apiLoader.services['rds']['2013-01-10'] = require('../apis/rds-2013-01-10.min');
  apiLoader.services['rds']['2013-01-10'].paginators = require('../apis/rds-2013-01-10.paginators').pagination;

  apiLoader.services['rds']['2013-02-12'] = require('../apis/rds-2013-02-12.min');
  apiLoader.services['rds']['2013-02-12'].paginators = require('../apis/rds-2013-02-12.paginators').pagination;

  apiLoader.services['rds']['2013-09-09'] = require('../apis/rds-2013-09-09.min');
  apiLoader.services['rds']['2013-09-09'].paginators = require('../apis/rds-2013-09-09.paginators').pagination;
  apiLoader.services['rds']['2013-09-09'].waiters = require('../apis/rds-2013-09-09.waiters2').waiters;

  apiLoader.services['rds']['2014-10-31'] = require('../apis/rds-2014-10-31.min');
  apiLoader.services['rds']['2014-10-31'].paginators = require('../apis/rds-2014-10-31.paginators').pagination;
  apiLoader.services['rds']['2014-10-31'].waiters = require('../apis/rds-2014-10-31.waiters2').waiters;
}

module.exports = AWS.RDS;
