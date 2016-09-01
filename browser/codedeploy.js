require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['codedeploy'] = {};
AWS.CodeDeploy = AWS.Service.defineService('codedeploy', ['2014-10-06']);

AWS.apiLoader.services['codedeploy']['2014-10-06'] = require('../apis/codedeploy-2014-10-06.min');
AWS.apiLoader.services['codedeploy']['2014-10-06'].paginators = require('../apis/codedeploy-2014-10-06.paginators').pagination;
AWS.apiLoader.services['codedeploy']['2014-10-06'].waiters = require('../apis/codedeploy-2014-10-06.waiters2').waiters;

module.exports = AWS.CodeDeploy;
