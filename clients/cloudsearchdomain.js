require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['cloudsearchdomain'] = {};
AWS.CloudSearchDomain = AWS.Service.defineService('cloudsearchdomain', ['2013-01-01']);
require('../lib/services/cloudsearchdomain');

AWS.apiLoader.services['cloudsearchdomain']['2013-01-01'] = require('../apis/cloudsearchdomain-2013-01-01.min');

module.exports = AWS.CloudSearchDomain;
