var AWS = require('../core');
var endpointConfigOptions = require('./endpoint_config_options');

var getMetadataServiceEndpoint = function() {
  return AWS.util.loadConfig(endpointConfigOptions);
};

module.exports = getMetadataServiceEndpoint;
