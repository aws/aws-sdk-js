require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['iam'] = {};
AWS.IAM = Service.defineService('iam', ['2010-05-08']);

apiLoader.services['iam']['2010-05-08'] = require('../apis/iam-2010-05-08.min.json');
apiLoader.services['iam']['2010-05-08'].paginators = require('../apis/iam-2010-05-08.paginators.json').pagination;
apiLoader.services['iam']['2010-05-08'].waiters = require('../apis/iam-2010-05-08.waiters2.json').waiters;

module.exports = AWS.IAM;
