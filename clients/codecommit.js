require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['codecommit'] = {};
CodeCommit = Service.defineService('codecommit', ['2015-04-13']);

apiLoader.services['codecommit']['2015-04-13'] = require('../apis/codecommit-2015-04-13.min.json');
apiLoader.services['codecommit']['2015-04-13'].paginators = require('../apis/codecommit-2015-04-13.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'CodeCommit')) {
  AWS.CodeCommit = CodeCommit;
}

module.exports = CodeCommit;
