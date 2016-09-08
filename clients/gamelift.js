require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'GameLift')) {
  apiLoader.services['gamelift'] = {};
  AWS.GameLift = Service.defineService('gamelift', ['2015-10-01']);

  apiLoader.services['gamelift']['2015-10-01'] = require('../apis/gamelift-2015-10-01.min');
}

module.exports = AWS.GameLift;
