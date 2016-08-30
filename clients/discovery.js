require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['discovery'] = {};
AWS.Discovery = AWS.Service.defineService('discovery', ['2015-11-01']);

AWS.apiLoader.services['discovery']['2015-11-01'] = require('../apis/discovery-2015-11-01.min');

module.exports = AWS.Discovery;
