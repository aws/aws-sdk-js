require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['iam'] = {};
AWS.IAM = AWS.Service.defineService('iam', ['2010-05-08']);

AWS.apiLoader.services['iam']['2010-05-08'] = require('../apis/iam-2010-05-08.min');
AWS.apiLoader.services['iam']['2010-05-08'].paginators = require('../apis/iam-2010-05-08.paginators').pagination;
AWS.apiLoader.services['iam']['2010-05-08'].waiters = require('../apis/iam-2010-05-08.waiters2').waiters;

module.exports = AWS.IAM;
