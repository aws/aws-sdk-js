require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['snowball'] = {};
Snowball = Service.defineService('snowball', ['2016-06-30']);

apiLoader.services['snowball']['2016-06-30'] = require('../apis/snowball-2016-06-30.min.json');
apiLoader.services['snowball']['2016-06-30'].paginators = require('../apis/snowball-2016-06-30.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'Snowball')) {
  AWS.Snowball = Snowball;
}

module.exports = Snowball;
