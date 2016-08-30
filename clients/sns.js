require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['sns'] = {};
AWS.SNS = AWS.Service.defineService('sns', ['2010-03-31']);

AWS.apiLoader.services['sns']['2010-03-31'] = require('../apis/sns-2010-03-31.min');
AWS.apiLoader.services['sns']['2010-03-31'].paginators = require('../apis/sns-2010-03-31.paginators').pagination;

module.exports = AWS.SNS;
