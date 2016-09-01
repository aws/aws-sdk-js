require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['firehose'] = {};
AWS.Firehose = AWS.Service.defineService('firehose', ['2015-08-04']);

AWS.apiLoader.services['firehose']['2015-08-04'] = require('../apis/firehose-2015-08-04.min');

module.exports = AWS.Firehose;
