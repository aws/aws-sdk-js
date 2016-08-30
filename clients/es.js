require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['es'] = {};
AWS.ES = AWS.Service.defineService('es', ['2015-01-01']);

AWS.apiLoader.services['es']['2015-01-01'] = require('../apis/es-2015-01-01.min');

module.exports = AWS.ES;
