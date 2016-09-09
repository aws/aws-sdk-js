require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['inspector'] = {};
Inspector = Service.defineService('inspector', ['2016-02-16']);

apiLoader.services['inspector']['2016-02-16'] = require('../apis/inspector-2016-02-16.min.json');
if (!Object.prototype.hasOwnProperty.call(AWS, 'Inspector')) {
  AWS.Inspector = Inspector;
}

module.exports = Inspector;
