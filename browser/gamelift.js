require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['gamelift'] = {};
AWS.GameLift = AWS.Service.defineService('gamelift', ['2015-10-01']);

AWS.apiLoader.services['gamelift']['2015-10-01'] = require('../apis/gamelift-2015-10-01.min');

module.exports = AWS.GameLift;
