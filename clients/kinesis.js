require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['kinesis'] = {};
Kinesis = Service.defineService('kinesis', ['2013-12-02']);

apiLoader.services['kinesis']['2013-12-02'] = require('../apis/kinesis-2013-12-02.min.json');
apiLoader.services['kinesis']['2013-12-02'].paginators = require('../apis/kinesis-2013-12-02.paginators.json').pagination;
apiLoader.services['kinesis']['2013-12-02'].waiters = require('../apis/kinesis-2013-12-02.waiters2.json').waiters;
if (!Object.prototype.hasOwnProperty.call(AWS, 'Kinesis')) {
  AWS.Kinesis = Kinesis;
}

module.exports = Kinesis;
