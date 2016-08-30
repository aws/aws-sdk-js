require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['simpledb'] = {};
AWS.SimpleDB = AWS.Service.defineService('simpledb', ['2009-04-15']);

AWS.apiLoader.services['simpledb']['2009-04-15'] = require('../apis/sdb-2009-04-15.min');
AWS.apiLoader.services['simpledb']['2009-04-15'].paginators = require('../apis/sdb-2009-04-15.paginators').pagination;

module.exports = AWS.SimpleDB;
