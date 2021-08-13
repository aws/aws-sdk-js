var AWS = require('../core');
var endpointConfigOptions = require('./endpoint_config_options');

exports.getMetadataServiceEndpoint = function() {
  return AWS.util.loadConfig(endpointConfigOptions);
};
