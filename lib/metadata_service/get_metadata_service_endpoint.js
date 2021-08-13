var AWS = require('../core');

var Endpoint = require('./endpoint');
var EndpointMode = require('./endpoint_mode');

var endpointConfigOptions = require('./endpoint_config_options');
var endpointModeConfigOptions = require('./endpoint_mode_config_options');

var getMetadataServiceEndpoint = function() {
  var endpoint = AWS.util.loadConfig(endpointConfigOptions);
  if (endpoint !== undefined) return endpoint;

  var endpointMode = AWS.util.loadConfig(endpointModeConfigOptions);
  switch (endpointMode) {
    case EndpointMode.IPv4:
      return Endpoint.IPv4;
    case EndpointMode.IPv6:
      return Endpoint.IPv6;
    default:
      throw new Error('Unsupported endpoint mode: ' + endpointMode);
  }
};

module.exports = getMetadataServiceEndpoint;
