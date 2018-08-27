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
    },
    ComplexEDOperation: {
      name: 'ComplexEDOperation',
      http: {},
      endpointdiscovery: {
        required: false
      },
      input: {
        type: 'structure',
        required: ['Query'],
        members: {
          Query: {
            type: 'structure',
            required: ['Record'],
            members: {
              Record: {
                type: 'string',
                locationName: 'RecordItem',
                endpointdiscoveryid: true
              }
            }
          }
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
  it('can marshall params according to endpointdiscoveryid trait', function() {
    var MockService = helpers.MockServiceFromApi(api);
    var client = new MockService();
    var ids = {};
    marshallCustomeIdentifiers(ids, {Query: 'query', Record: 'record'}, client.api.operations.requiredEDOperation.input);
    expect(ids).to.eql({Query: 'query'});
    ids = {};
    marshallCustomeIdentifiers(ids, {Query: {Record: 'record'}}, client.api.operations.complexEDOperation.input);
    expect(ids).to.eql({RecordItem: 'record'});
  })
});

describe('optionalDiscoverEndpoint', function() {
  it('generates cache keys correctly', function() {
    var spy = helpers.spyOn(helpers.AWS.endpointCache, 'get').andReturn([{
      Address: 'https://fakeService.amaoznaws.com'
    }]);
    var MockService = helpers.MockServiceFromApi(api);
    var client = new MockService({endpointDiscoveryEnabled: true, region: 'fake-region-1'});
    helpers.mockHttpResponse(200, {}, '{}')
    var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
    request.send(console.log);
    expect(spy.calls.length).to.eql(1);
    expect(spy.calls[0].arguments[0]).to.eql({
      region: 'fake-region-1',
      operation: 'RequiredEDOperation',
      serviceId: 'MockService',
      accessKeyId: 'akid',
      Query: 'query'
    });
  });

  it('gets first corresponding endpoint from endpoint cache', function() {

  });

  it('make one endpoint operation for same cache keys', function() {

  });

  it('keep retrying endpoint operation if faled', function() {

  });

  it('put in endpoint cache is endpoint operation succeeds', function() {

  })
});

describe('requiredDiscoveryEndpoint', function() {
  
})

describe('discoverEndpoints', function() {
  it('accesses a single global endpoint cache for all services', function() {

  })
})