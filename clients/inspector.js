require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['inspector'] = {};
AWS.Inspector = AWS.Service.defineService('inspector', ['2016-02-16']);

AWS.apiLoader.services['inspector']['2016-02-16'] = require('../apis/inspector-2016-02-16.min');

module.exports = AWS.Inspector;
