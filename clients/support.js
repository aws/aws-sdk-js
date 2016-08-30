require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['support'] = {};
AWS.Support = AWS.Service.defineService('support', ['2013-04-15']);

AWS.apiLoader.services['support']['2013-04-15'] = require('../apis/support-2013-04-15.min');
AWS.apiLoader.services['support']['2013-04-15'].paginators = require('../apis/support-2013-04-15.paginators').pagination;

module.exports = AWS.Support;
