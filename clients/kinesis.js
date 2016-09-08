require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

if (!Object.prototype.hasOwnProperty.call(AWS, 'Kinesis')) {
  apiLoader.services['kinesis'] = {};
  AWS.Kinesis = Service.defineService('kinesis', ['2013-12-02']);

  apiLoader.services['kinesis']['2013-12-02'] = require('../apis/kinesis-2013-12-02.min');
  apiLoader.services['kinesis']['2013-12-02'].paginators = require('../apis/kinesis-2013-12-02.paginators').pagination;
  apiLoader.services['kinesis']['2013-12-02'].waiters = require('../apis/kinesis-2013-12-02.waiters2').waiters;
}

module.exports = AWS.Kinesis;
