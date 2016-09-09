require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['simpledb'] = {};
AWS.SimpleDB = Service.defineService('simpledb', ['2009-04-15']);

apiLoader.services['simpledb']['2009-04-15'] = require('../apis/sdb-2009-04-15.min.json');
apiLoader.services['simpledb']['2009-04-15'].paginators = require('../apis/sdb-2009-04-15.paginators.json').pagination;

module.exports = AWS.SimpleDB;
