var AWS = require('./core');
var fs = require('fs');

var apiRoot = __dirname + '/../node_modules/aws-sdk-apis/apis';

// load symlinks file for API versions that have been removed from disk but
// are still referenceable in code.
var symlinksFile = apiRoot + '/symlinks.json';
var symlinks = JSON.parse(fs.readFileSync(symlinksFile).toString());

// create a map of each service name to its list of versions
var svcMap = {};
fs.readdirSync(apiRoot).forEach(function (file) {
  var match = file.match(/^([^-]+)-(\d+-\d+-\d+)\.json$/);
  if (match) {
    var svcName = match[1], version = match[2];
    var svcIdentifier = svcName.toLowerCase();

    if (!svcMap[svcName]) { // build the base service values
      // add versions from symlinks, if any
      var versions = symlinks[svcName] || [];
      svcMap[svcName] = { identifier: svcIdentifier, versions: versions };
    }

    svcMap[svcName].versions.push(version);
  }
});

// define services using map
AWS.util.each(svcMap, function(name, info) {
  AWS[name] = AWS.Service.defineService(info.identifier, info.versions);

  // load any customizations from lib/services/<svcidentifier>.js
  var svcFile = __dirname + '/services/' + info.identifier + '.js';
  if (fs.existsSync(svcFile)) require(svcFile);
});
