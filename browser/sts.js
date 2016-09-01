require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['sts'] = {};
AWS.STS = AWS.Service.defineService('sts', ['2011-06-15']);
require('../lib/services/sts');

AWS.apiLoader.services['sts']['2011-06-15'] = require('../apis/sts-2011-06-15.min');

module.exports = AWS.STS;
