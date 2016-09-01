require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['glacier'] = {};
AWS.Glacier = AWS.Service.defineService('glacier', ['2012-06-01']);
require('../lib/services/glacier');

AWS.apiLoader.services['glacier']['2012-06-01'] = require('../apis/glacier-2012-06-01.min');
AWS.apiLoader.services['glacier']['2012-06-01'].paginators = require('../apis/glacier-2012-06-01.paginators').pagination;
AWS.apiLoader.services['glacier']['2012-06-01'].waiters = require('../apis/glacier-2012-06-01.waiters2').waiters;

module.exports = AWS.Glacier;
