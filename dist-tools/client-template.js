/*comment*/
// Template used to generate service files in clients directory. If changes are
// made here, the replacers object in client-creator.js must be configured.
/*comment*//**/
require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['$serviceName'] = {};
AWS.$className = Service.defineService('$serviceName', ['$versionNumbers']);
/*ifcustomizations*/
require('../lib/services/$serviceName');
/*ifcustomizations*//**/

/*eachVersion*/
/*$loaderPrefix*/
apiLoader.services['$serviceName']['$version']
/*$loaderPrefix*//**/
$loaderPrefix = require('../apis/$api.json');
/*ifpaginators*/
$loaderPrefix.paginators = require('../apis/$paginators.json').pagination;
/*ifpaginators*//**/
/*ifwaiters*/
$loaderPrefix.waiters = require('../apis/$waiters.json').waiters;
/*ifwaiters*//**/
/*eachVersion*//**/

module.exports = AWS.$className;
