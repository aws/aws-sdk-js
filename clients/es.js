require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['es'] = {};
AWS.ES = Service.defineService('es', ['2015-01-01']);

apiLoader.services['es']['2015-01-01'] = require('../apis/es-2015-01-01.min.json');

module.exports = AWS.ES;
