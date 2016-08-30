require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['machinelearning'] = {};
AWS.MachineLearning = AWS.Service.defineService('machinelearning', ['2014-12-12']);
require('../lib/services/machinelearning');

AWS.apiLoader.services['machinelearning']['2014-12-12'] = require('../apis/machinelearning-2014-12-12.min');
AWS.apiLoader.services['machinelearning']['2014-12-12'].paginators = require('../apis/machinelearning-2014-12-12.paginators').pagination;
AWS.apiLoader.services['machinelearning']['2014-12-12'].waiters = require('../apis/machinelearning-2014-12-12.waiters2').waiters;

module.exports = AWS.MachineLearning;
