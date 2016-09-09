require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudsearch'] = {};
AWS.CloudSearch = Service.defineService('cloudsearch', ['2011-02-01', '2013-01-01']);

apiLoader.services['cloudsearch']['2011-02-01'] = require('../apis/cloudsearch-2011-02-01.min.json');
apiLoader.services['cloudsearch']['2011-02-01'].paginators = require('../apis/cloudsearch-2011-02-01.paginators.json').pagination;

apiLoader.services['cloudsearch']['2013-01-01'] = require('../apis/cloudsearch-2013-01-01.min.json');
apiLoader.services['cloudsearch']['2013-01-01'].paginators = require('../apis/cloudsearch-2013-01-01.paginators.json').pagination;

module.exports = AWS.CloudSearch;
