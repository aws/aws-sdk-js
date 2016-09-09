require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['es'] = {};
ES = Service.defineService('es', ['2015-01-01']);

apiLoader.services['es']['2015-01-01'] = require('../apis/es-2015-01-01.min.json');
if (!Object.prototype.hasOwnProperty.call(AWS, 'ES')) {
  AWS.ES = ES;
}

module.exports = ES;
