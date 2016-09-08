var AWS = require('./core');

AWS.apiLoader = function(svc, version) {
  return AWS.apiLoader.services[svc][version];
};

AWS.apiLoader.services = {};

module.exports = AWS.apiLoader;