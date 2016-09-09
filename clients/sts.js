require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['sts'] = {};
AWS.STS = Service.defineService('sts', ['2011-06-15']);
require('../lib/services/sts');

apiLoader.services['sts']['2011-06-15'] = require('../apis/sts-2011-06-15.min.json');

module.exports = AWS.STS;
