require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['snowball'] = {};
AWS.Snowball = AWS.Service.defineService('snowball', ['2016-06-30']);

AWS.apiLoader.services['snowball']['2016-06-30'] = require('../apis/snowball-2016-06-30.min');
AWS.apiLoader.services['snowball']['2016-06-30'].paginators = require('../apis/snowball-2016-06-30.paginators').pagination;

module.exports = AWS.Snowball;
