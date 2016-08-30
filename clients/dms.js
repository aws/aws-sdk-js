require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['dms'] = {};
AWS.DMS = AWS.Service.defineService('dms', ['2016-01-01']);

AWS.apiLoader.services['dms']['2016-01-01'] = require('../apis/dms-2016-01-01.min');

module.exports = AWS.DMS;
