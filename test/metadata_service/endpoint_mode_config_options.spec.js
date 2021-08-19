var helpers = require('./../helpers');
var options = require('../../lib/metadata_service/endpoint_mode_config_options');
var EndpointMode = require('../../lib/metadata_service/endpoint_mode');

var AWS = helpers.AWS;
var ENDPOINT_MODE_CONFIG_OPTIONS = options.ENDPOINT_MODE_CONFIG_OPTIONS;
var ENV_ENDPOINT_MODE_NAME = options.ENV_ENDPOINT_MODE_NAME;
var CONFIG_ENDPOINT_MODE_NAME = options.CONFIG_ENDPOINT_MODE_NAME;

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
