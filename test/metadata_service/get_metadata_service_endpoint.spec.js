var AWS, helpers, getMetadataServiceEndpoint, Endpoint, EndpointMode, endpointConfigOptions, endpointModeConfigOptions;

helpers = require('./../helpers');

AWS = helpers.AWS;

getMetadataServiceEndpoint = require('../../lib/metadata_service/get_metadata_service_endpoint');

Endpoint = require('../../lib/metadata_service/endpoint');
EndpointMode = require('../../lib/metadata_service/endpoint_mode');

endpointConfigOptions = require('../../lib/metadata_service/endpoint_config_options');
endpointModeConfigOptions = require('../../lib/metadata_service/endpoint_mode_config_options');

if (AWS.util.isNode()) {
  describe('getMetadataServiceEndpoint', function() {
    describe('when endpoint is defined', function() {
      it('returns endpoint', function() {
        var mockEndpoint = 'http://127.0.0.1';
        helpers.spyOn(AWS.util, 'loadConfig').andReturn(mockEndpoint);
        expect(getMetadataServiceEndpoint()).to.equal(mockEndpoint);
      });
    });

    describe('when endpoint is not defined', function() {
      [
        [Endpoint.IPv4, EndpointMode.IPv4],
        [Endpoint.IPv6, EndpointMode.IPv6],
      ].forEach(function([endpoint, endpointMode]) {
        it('returns endpoint:'+ endpoint + ' for endpointMode:' + endpointMode, function() {
          helpers.spyOn(AWS.util, 'loadConfig').andCallFake(function(options) {
            if (options === endpointConfigOptions) {
              return undefined;
            } else {
              return endpointMode;
            }
          });
          expect(getMetadataServiceEndpoint()).to.equal(endpoint);
        });
      });

      it('throws error for invalid endpointMode:invalid', function() {
        const invalidEndpointMode = 'invalid';
        helpers.spyOn(AWS.util, 'loadConfig').andCallFake(function(options) {
          if (options === endpointConfigOptions) {
            return undefined;
          } else {
            return invalidEndpointMode;
          }
        });
        expect(function() {
          getMetadataServiceEndpoint();
        }).to['throw']('Unsupported endpoint mode: ' + invalidEndpointMode);
      });
    });
  });
}
