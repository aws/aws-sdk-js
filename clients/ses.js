require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['ses'] = {};
AWS.SES = AWS.Service.defineService('ses', ['2010-12-01']);

AWS.apiLoader.services['ses']['2010-12-01'] = require('../apis/email-2010-12-01.min');
AWS.apiLoader.services['ses']['2010-12-01'].paginators = require('../apis/email-2010-12-01.paginators').pagination;
AWS.apiLoader.services['ses']['2010-12-01'].waiters = require('../apis/email-2010-12-01.waiters2').waiters;

module.exports = AWS.SES;
