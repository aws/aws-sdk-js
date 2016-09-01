require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['kinesis'] = {};
AWS.Kinesis = AWS.Service.defineService('kinesis', ['2013-12-02']);

AWS.apiLoader.services['kinesis']['2013-12-02'] = require('../apis/kinesis-2013-12-02.min');
AWS.apiLoader.services['kinesis']['2013-12-02'].paginators = require('../apis/kinesis-2013-12-02.paginators').pagination;
AWS.apiLoader.services['kinesis']['2013-12-02'].waiters = require('../apis/kinesis-2013-12-02.waiters2').waiters;

module.exports = AWS.Kinesis;
