require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['firehose'] = {};
AWS.Firehose = Service.defineService('firehose', ['2015-08-04']);

apiLoader.services['firehose']['2015-08-04'] = require('../apis/firehose-2015-08-04.min.json');

module.exports = AWS.Firehose;
