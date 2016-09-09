require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['ses'] = {};
AWS.SES = Service.defineService('ses', ['2010-12-01']);

apiLoader.services['ses']['2010-12-01'] = require('../apis/email-2010-12-01.min.json');
apiLoader.services['ses']['2010-12-01'].paginators = require('../apis/email-2010-12-01.paginators.json').pagination;
apiLoader.services['ses']['2010-12-01'].waiters = require('../apis/email-2010-12-01.waiters2.json').waiters;

module.exports = AWS.SES;
