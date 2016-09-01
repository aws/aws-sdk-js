require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['opsworks'] = {};
AWS.OpsWorks = AWS.Service.defineService('opsworks', ['2013-02-18']);

AWS.apiLoader.services['opsworks']['2013-02-18'] = require('../apis/opsworks-2013-02-18.min');
AWS.apiLoader.services['opsworks']['2013-02-18'].paginators = require('../apis/opsworks-2013-02-18.paginators').pagination;
AWS.apiLoader.services['opsworks']['2013-02-18'].waiters = require('../apis/opsworks-2013-02-18.waiters2').waiters;

module.exports = AWS.OpsWorks;
