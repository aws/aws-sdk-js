var AWS = require('../core');

var ENV_ENDPOINT_MODE_NAME = 'AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE';
var CONFIG_ENDPOINT_MODE_NAME = 'ec2_metadata_service_endpoint_mode';

AWS.MetadataService.ENDPOINT_MODE_CONFIG_OPTIONS = {
  environmentVariableSelector: function(env) { return env[ENV_ENDPOINT_MODE_NAME]; },
  configFileSelector: function(profile) { return profile[CONFIG_ENDPOINT_MODE_NAME]; },
  default: AWS.MetadataService.EndpointMode.IPv4,
};

module.exports = AWS.MetadataService.ENDPOINT_MODE_CONFIG_OPTIONS;
