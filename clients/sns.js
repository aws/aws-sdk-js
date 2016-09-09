require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['sns'] = {};
AWS.SNS = Service.defineService('sns', ['2010-03-31']);

apiLoader.services['sns']['2010-03-31'] = require('../apis/sns-2010-03-31.min.json');
apiLoader.services['sns']['2010-03-31'].paginators = require('../apis/sns-2010-03-31.paginators.json').pagination;

module.exports = AWS.SNS;
