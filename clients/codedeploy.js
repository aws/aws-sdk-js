require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['codedeploy'] = {};
AWS.CodeDeploy = Service.defineService('codedeploy', ['2014-10-06']);

apiLoader.services['codedeploy']['2014-10-06'] = require('../apis/codedeploy-2014-10-06.min.json');
apiLoader.services['codedeploy']['2014-10-06'].paginators = require('../apis/codedeploy-2014-10-06.paginators.json').pagination;
apiLoader.services['codedeploy']['2014-10-06'].waiters = require('../apis/codedeploy-2014-10-06.waiters2.json').waiters;

module.exports = AWS.CodeDeploy;
