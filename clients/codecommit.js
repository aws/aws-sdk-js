require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'CodeCommit')) {
  apiLoader.services['codecommit'] = {};
  AWS.CodeCommit = Service.defineService('codecommit', ['2015-04-13']);

  apiLoader.services['codecommit']['2015-04-13'] = require('../apis/codecommit-2015-04-13.min');
  apiLoader.services['codecommit']['2015-04-13'].paginators = require('../apis/codecommit-2015-04-13.paginators').pagination;
}

module.exports = AWS.CodeCommit;
