require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['sqs'] = {};
SQS = Service.defineService('sqs', ['2012-11-05']);
require('../lib/services/sqs')(SQS);

apiLoader.services['sqs']['2012-11-05'] = require('../apis/sqs-2012-11-05.min.json');
apiLoader.services['sqs']['2012-11-05'].paginators = require('../apis/sqs-2012-11-05.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'SQS')) {
  AWS.SQS = SQS;
}

module.exports = SQS;
