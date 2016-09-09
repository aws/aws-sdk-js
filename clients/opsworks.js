require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['opsworks'] = {};
AWS.OpsWorks = Service.defineService('opsworks', ['2013-02-18']);

apiLoader.services['opsworks']['2013-02-18'] = require('../apis/opsworks-2013-02-18.min.json');
apiLoader.services['opsworks']['2013-02-18'].paginators = require('../apis/opsworks-2013-02-18.paginators.json').pagination;
apiLoader.services['opsworks']['2013-02-18'].waiters = require('../apis/opsworks-2013-02-18.waiters2.json').waiters;

module.exports = AWS.OpsWorks;
