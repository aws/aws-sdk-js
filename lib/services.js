var fs = require('fs');
var AWS = require('./core');
var apis = require('aws-sdk-apis');

// define services using map
apis.serviceNames.forEach(function(name) {
  var identifier = apis.serviceIdentifier(name);
  var versions = apis.serviceVersions(identifier);
  AWS[name] = AWS.Service.defineService(identifier, versions);

  // load any customizations from lib/services/<svcidentifier>.js
  var svcFile = __dirname + '/services/' + identifier + '.js';
  if (fs.existsSync(svcFile)) require(svcFile);
});
