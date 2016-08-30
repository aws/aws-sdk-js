require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['cloudsearch'] = {};
AWS.CloudSearch = AWS.Service.defineService('cloudsearch', ['2011-02-01', '2013-01-01']);

AWS.apiLoader.services['cloudsearch']['2011-02-01'] = require('../apis/cloudsearch-2011-02-01.min');
AWS.apiLoader.services['cloudsearch']['2011-02-01'].paginators = require('../apis/cloudsearch-2011-02-01.paginators').pagination;

AWS.apiLoader.services['cloudsearch']['2013-01-01'] = require('../apis/cloudsearch-2013-01-01.min');
AWS.apiLoader.services['cloudsearch']['2013-01-01'].paginators = require('../apis/cloudsearch-2013-01-01.paginators').pagination;

module.exports = AWS.CloudSearch;
