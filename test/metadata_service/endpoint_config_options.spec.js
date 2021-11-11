var helpers = require('./../helpers');
var ENDPOINT_CONFIG_OPTIONS = require('../../lib/metadata_service/get_endpoint_config_options')();

var AWS = helpers.AWS;
var ENV_ENDPOINT_NAME = 'AWS_EC2_METADATA_SERVICE_ENDPOINT';
var CONFIG_ENDPOINT_NAME = 'ec2_metadata_service_endpoint';

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
