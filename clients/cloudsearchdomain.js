require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudsearchdomain'] = {};
CloudSearchDomain = Service.defineService('cloudsearchdomain', ['2013-01-01']);
require('../lib/services/cloudsearchdomain')(CloudSearchDomain);

apiLoader.services['cloudsearchdomain']['2013-01-01'] = require('../apis/cloudsearchdomain-2013-01-01.min.json');
if (!Object.prototype.hasOwnProperty.call(AWS, 'CloudSearchDomain')) {
  AWS.CloudSearchDomain = CloudSearchDomain;
}

module.exports = CloudSearchDomain;
