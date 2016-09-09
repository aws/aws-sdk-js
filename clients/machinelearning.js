require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['machinelearning'] = {};
AWS.MachineLearning = Service.defineService('machinelearning', ['2014-12-12']);
require('../lib/services/machinelearning');

apiLoader.services['machinelearning']['2014-12-12'] = require('../apis/machinelearning-2014-12-12.min.json');
apiLoader.services['machinelearning']['2014-12-12'].paginators = require('../apis/machinelearning-2014-12-12.paginators.json').pagination;
apiLoader.services['machinelearning']['2014-12-12'].waiters = require('../apis/machinelearning-2014-12-12.waiters2.json').waiters;

module.exports = AWS.MachineLearning;
