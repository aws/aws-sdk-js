require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['codecommit'] = {};
AWS.CodeCommit = AWS.Service.defineService('codecommit', ['2015-04-13']);

AWS.apiLoader.services['codecommit']['2015-04-13'] = require('../apis/codecommit-2015-04-13.min');
AWS.apiLoader.services['codecommit']['2015-04-13'].paginators = require('../apis/codecommit-2015-04-13.paginators').pagination;

module.exports = AWS.CodeCommit;
