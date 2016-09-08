require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'CodeDeploy')) {
  apiLoader.services['codedeploy'] = {};
  AWS.CodeDeploy = Service.defineService('codedeploy', ['2014-10-06']);

  apiLoader.services['codedeploy']['2014-10-06'] = require('../apis/codedeploy-2014-10-06.min');
  apiLoader.services['codedeploy']['2014-10-06'].paginators = require('../apis/codedeploy-2014-10-06.paginators').pagination;
  apiLoader.services['codedeploy']['2014-10-06'].waiters = require('../apis/codedeploy-2014-10-06.waiters2').waiters;
}

module.exports = AWS.CodeDeploy;
