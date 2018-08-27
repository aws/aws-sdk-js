var helpers = require('./helpers');
var endpoint_discovery_module = require('../lib/discover_endpoint');
var discoverEndpoint = endpoint_discovery_module.discoverEndpoint;
var optionalDiscoverEndpoint = endpoint_discovery_module.optionalDisverEndpoint;
var requiredDiscoverEndpoint = endpoint_discovery_module.requiredDiscoverEndpoint;
var getCacheKey = endpoint_discovery_module.getCacheKey;
var marshallCustomeIdentifiers = endpoint_discovery_module.marshallCustomeIdentifiers;


var api = {
  metadata: {
    serviceId: 'MockService',
  },
  operations: {
    DescribeEndpoint: {
      name: 'DescribeEndpoint',
      http: {
        method: 'POST',
        requestUri: '/'
      },
      endpointoperation: true,
      input: {
        type: 'structure',
        required: ['Operation'],
        members: {
          Operation: {},
          Identifiers: {
            type: 'map',
            key: {},
            value: {},
          }
        }
      },
      output: {
        type: 'structure',
        required: ['Endpoints'],
        members: {
          Endpoints: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Address: {},
                CachePeriodInMinutes: {
                  type: 'number'
                }
              }
            }
          }
        }
      }
    },
    OptionalEDOperation: {
      name: 'OptionalEDOperation',
      http: {},
      endpointdiscovery: {},
      input: {
        type: 'structure',
        members: {
          Query: {}
        }
      },
      output: {
        type: 'structure',
        members: {
          Item: {}
        }
      }
    },
    RequiredEDOperation: {
      name: 'RequiredEDOperation',
      http: {},
      endpointdiscovery: {
        required: true
      },
      input: {
        type: 'structure',
        required: ['Query'],
        members: {
          Query: {
            type: 'string',
            endpointdiscoveryid: true
          },
          Record: {
            type: 'string',
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Item: {}
        }
      }
    }
  }
}

describe('getCacheKey', function() {
  it ('generate correct keys', function() {
    var MockService = helpers.MockServiceFromApi(api);
    var client = new MockService({region: 'fake-region-1'});
    var request = client.makeRequest('optionalEDOperation', {});
    var cacheKey = getCacheKey(request);
    expect(cacheKey).to.eql({
      region: 'fake-region-1',
      operation: 'OptionalEDOperation',
      serviceId: 'MockService',
      accessKeyId: 'akid'
    })
  })
});

describe('marshallCustomeIdentifiers', function() {
  it('can marchall params according to endpointdiscoveryid trait', function() {
    var MockService = helpers.MockServiceFromApi(api);
    var client = new MockService();
    var ids = {};
    marshallCustomeIdentifiers(ids, {Query: 'query', Record: 'record'}, client.api.operations.requiredEDOperation.input);
    expect(ids).to.eql({Query: 'query'})
  })
})