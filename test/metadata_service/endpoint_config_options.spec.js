var helpers = require('./../helpers');
var options = require('../../lib/metadata_service/endpoint_config_options');

var AWS = helpers.AWS;
var ENDPOINT_CONFIG_OPTIONS = options.ENDPOINT_CONFIG_OPTIONS;
var ENV_ENDPOINT_NAME = options.ENV_ENDPOINT_NAME;
var CONFIG_ENDPOINT_NAME = options.CONFIG_ENDPOINT_NAME;

if (AWS.util.isNode()) {
  describe('endpointConfigOptions', function() {
    describe('environmentVariableSelector', function() {
      var environmentVariableSelector = ENDPOINT_CONFIG_OPTIONS.environmentVariableSelector;
      [undefined, 'mockEndpoint'].forEach(function(mockEndpoint) {
        it(
          'when env[' + ENV_ENDPOINT_NAME + ']: ' + mockEndpoint,
          function() {
            expect(
              environmentVariableSelector({
                [ENV_ENDPOINT_NAME]: mockEndpoint,
              })
            ).to.equal(mockEndpoint);
          }
        );
      });
    });

    describe('configFileSelector', function() {
      var configFileSelector = ENDPOINT_CONFIG_OPTIONS.configFileSelector;
      [undefined, 'mockEndpoint'].forEach(function(mockEndpoint) {
        it(
          'when env[' + CONFIG_ENDPOINT_NAME + ']: ' + mockEndpoint,
          function() {
            expect(
              configFileSelector({
                [CONFIG_ENDPOINT_NAME]: mockEndpoint,
              })
            ).to.equal(mockEndpoint);
          }
        );
      });
    });

    it('default returns undefined', function() {
      var defaultKey = ENDPOINT_CONFIG_OPTIONS.default;
      expect(defaultKey).to.equal(undefined);
    });
  });
};
