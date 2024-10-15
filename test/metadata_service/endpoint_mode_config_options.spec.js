var helpers = require('./../helpers');
var ENDPOINT_MODE_CONFIG_OPTIONS = require('../../lib/metadata_service/get_endpoint_mode_config_options')();
var EndpointMode = require('../../lib/metadata_service/get_endpoint_mode')();

var AWS = helpers.AWS;
var ENV_ENDPOINT_MODE_NAME = 'AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE';
var CONFIG_ENDPOINT_MODE_NAME = 'ec2_metadata_service_endpoint_mode';

if (AWS.util.isNode()) {
  describe('endpointModeConfigOptions', function() {
    describe('environmentVariableSelector', function() {
      var environmentVariableSelector = ENDPOINT_MODE_CONFIG_OPTIONS.environmentVariableSelector;
      [undefined, 'mockEndpointMode'].forEach(function(mockEndpointMode) {
        it(
          'when env[' + ENV_ENDPOINT_MODE_NAME + ']: ' + mockEndpointMode,
          function() {
            expect(
              environmentVariableSelector({
                [ENV_ENDPOINT_MODE_NAME]: mockEndpointMode,
              })
            ).to.equal(mockEndpointMode);
          }
        );
      });
    });

    describe('configFileSelector', function() {
      var configFileSelector = ENDPOINT_MODE_CONFIG_OPTIONS.configFileSelector;
      [undefined, 'mockEndpointMode'].forEach(function(mockEndpointMode) {
        it(
          'when env[' + CONFIG_ENDPOINT_MODE_NAME + ']: ' + mockEndpointMode,
          function() {
            expect(
              configFileSelector({
                [CONFIG_ENDPOINT_MODE_NAME]: mockEndpointMode,
              })
            ).to.equal(mockEndpointMode);
          }
        );
      });
    });

    it('default returns ' + EndpointMode.IPv4, function() {
      var defaultKey = ENDPOINT_MODE_CONFIG_OPTIONS.default;
      expect(defaultKey).to.equal(EndpointMode.IPv4);
    });
  });
};
