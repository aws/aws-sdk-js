var helpers = require('./helpers');
var AWS = helpers.AWS
var endpoint_discovery_module = require('../lib/discover_endpoint');
var discoverEndpoint = endpoint_discovery_module.discoverEndpoint;
var optionalDiscoverEndpoint = endpoint_discovery_module.optionalDisverEndpoint;
var requiredDiscoverEndpoint = endpoint_discovery_module.requiredDiscoverEndpoint;
var getCacheKey = endpoint_discovery_module.getCacheKey;
var marshallCustomeIdentifiers = endpoint_discovery_module.marshallCustomeIdentifiers;


var api = {
  metadata: {
    endpointPrefix: 'mockservice',
    serviceId: 'MockService',
    protocol: 'json'
  },
  operations: {
    DescribeEndpoints: {
      name: 'DescribeEndpoints',
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
                CachePeriodInMinutes: {type: 'integer'}
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

describe('endpoint discovery', function() {
  after(function() {
    AWS.config.endpoint = undefined
  });

  describe('getCacheKey', function() {
    it ('generate correct keys', function() {
      var client = new AWS.Service({
        region: 'fake-region-1',
        apiConfig: new AWS.Model.Api(api)
      });
      var request = client.makeRequest('optionalEDOperation', {});
      var cacheKey = getCacheKey(request);
      expect(cacheKey).to.eql({
        region: 'fake-region-1',
        operation: 'OptionalEDOperation',
        serviceId: 'MockService',
        accessKeyId: 'akid'
      })
    });
  
    it('generate correct keys with endpointdiscoveryid traits', function() {
      var spy = helpers.spyOn(AWS.endpointCache, 'get').andReturn([{
        Address: 'https://fakeService.amaoznaws.com'
      }]);
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        region: 'fake-region-1',
        apiConfig: new AWS.Model.Api(api)
      });
      helpers.mockHttpResponse(200, {}, '{}');
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      request.send();
      expect(spy.calls.length).to.eql(1);
      expect(spy.calls[0].arguments[0]).to.eql({
        region: 'fake-region-1',
        operation: 'RequiredEDOperation',
        serviceId: 'MockService',
        accessKeyId: 'akid',
        Query: 'query'
      });
    });
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
    });
  });
  
  describe('optionalDiscoverEndpoint', function() {
    beforeEach(function(){
      AWS.endpointCache.empty()
    })
    
    it('gets first corresponding endpoint from endpoint cache', function() {
      var spy = helpers.spyOn(AWS.endpointCache, 'get').andReturn([{
        Address: 'https://fakeService.amazonaws.com:22/path'
      }, {
        Address: 'https://fakeService.amaoznaws.com'
      }]);
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        region: 'fake-region-1',
        apiConfig: new AWS.Model.Api(api)
      });
      helpers.mockHttpResponse(200, {}, '{}')
      var request = client.makeRequest('optionalEDOperation', {Query: 'query'});
      request.send();
      expect(spy.calls.length).to.eql(1);
      expect(request.httpRequest.endpoint).to.include({
        hostname: 'fakeservice.amazonaws.com',
        port: 22,
        protocol: 'https:',
        path: '/path'
      })
    });
  
    it('use regional endpoint of new endpoint cannot be discovered', function() {
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        region: 'fake-region-1',
        apiConfig: new AWS.Model.Api(api)
      });
      var request = client.makeRequest('optionalEDOperation', {Query: 'query'});
      expect(request.httpRequest.endpoint.hostname).to.eql('mockservice.fake-region-1.amazonaws.com')
    });
  
    it('put in endpoint cache is endpoint operation succeeds', async function() {
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        region: 'fake-region-1',
        maxRetries: 0,
        apiConfig: new AWS.Model.Api(api)
      });
      var spy = helpers.spyOn(AWS.endpointCache, 'put').andCallThrough();
      var request = client.makeRequest('optionalEDOperation', {Query: 'query'});
      expect(request.httpRequest.endpoint.hostname).to.eql('mockservice.fake-region-1.amazonaws.com');
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      request.send();
      expect(spy.calls.length).to.eql(2);
      expect(spy.calls[0].arguments[0]).to.eql({
        accessKeyId: 'akid',
        operation: 'OptionalEDOperation',
        region: 'fake-region-1',
        serviceId: 'MockService'
      });
      expect(spy.calls[0].arguments[1]).to.eql([]);
      expect(spy.calls[1].arguments[0]).to.eql({
        accessKeyId: 'akid',
        operation: 'OptionalEDOperation',
        region: 'fake-region-1',
        serviceId: 'MockService'
      });
      expect(spy.calls[1].arguments[1]).to.eql([{Address: 'https://cell1.fakeservice.amazonaws.com/fakeregion', CachePeriodInMinutes: 1}]);
      var makeRequestSpy = helpers.spyOn(client, 'makeRequest').andCallThrough();
      var replicatedRequest = client.makeRequest('optionalEDOperation', {Query: 'query'});
      replicatedRequest.send(function() {
        expect(this.request.httpRequest.endpoint).to.include({
          hostname: 'cell1.fakeservice.amazonaws.com',
          protocol: 'https:',
          path: '/fakeregion'
        });
        //do not request endpoint again
        expect(makeRequestSpy.calls.length).to.eql(1);
        expect(makeRequestSpy.calls[0].arguments[0]).to.eql('optionalEDOperation');
      });
    });
  
    it('make one endpoint operation for same cache keys before endpoint operation response returning', function() {
      var spy = helpers.spyOn(AWS.HttpClient, 'getInstance').andCallThrough();
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        region: 'fake-region-1',
        maxRetries: 0,
        apiConfig: new AWS.Model.Api(api)
      });
      client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
      client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
      //should not make 4 calls which request endpoint once for every api call
      expect(spy.calls.length).to.eql(3)
    });
  
    it('keep retry every 60 seconds when failed', function(done) {
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        maxRetries: 0,
        apiConfig: new AWS.Model.Api(api)
      });
      var spy = helpers.createSpy('retry inject');
      var topLevelScope = null;
      if (typeof window === 'undefined') {
        topLevelScope = global;
      } else {
        topLevelScope = window;
      }
      var setTimeoutSpy = helpers.spyOn(topLevelScope, 'setTimeout').andCallThrough();
      helpers.mockHttpResponse(400, {}, '');
      AWS.events.on('afterRetry', function(resp) {
        if(resp.request.operation === 'describeEndpoints') {
          spy(resp)
        }
      });
      client.makeRequest('optionalEDOperation', {Query: 'query'}).send(function() {
        //set ENDPOINT_OPERATION_MAX_RETRIES = 60 and the first request
        expect(spy.calls.length).to.eql(60 + 1);
        for(var call of spy.calls) {
          var resp = call.arguments[0];
          expect(resp.maxRetries).to.eql(60);
          expect(resp.error.retryDelay).to.eql(60000);
        }
        expect(setTimeoutSpy.calls.length).to.eql(60);
        for(var call of setTimeoutSpy.calls) {
          var timeout = call.arguments[1];
          expect(timeout).to.eql(60000);
        }
        done()
      });
    });

    it('evict invalide endpoint records from cache if InvalideEndpointException encountered', function() {
      var client = new AWS.Service({
        region: 'fake-region-1',
        endpointDiscoveryEnabled: true,
        apiConfig: new AWS.Model.Api(api)
      });
      helpers.mockHttpResponse(400, {}, '{"__type":"InvalidEndpointException", "Message":"Error Message" }');
      var cacheKey = {
        accessKeyId: 'akid',
        operation: 'OptionalEDOperation',
        region: 'fake-region-1',
        serviceId: 'MockService'
      }
      AWS.endpointCache.put(cacheKey, [{Address: 'https://cell1.fakeservice.amazonaws.com/fakeregion'}]);
      var cacheRemoveSpy = helpers.spyOn(AWS.endpointCache, 'remove').andCallThrough();
      var request = client.makeRequest('optionalEDOperation', {Query: 'query'});
      request.send();
      expect(request.httpRequest.endpoint.href).to.eql('https://cell1.fakeservice.amazonaws.com/fakeregion');
      expect(cacheRemoveSpy.calls.length).to.eql(1);
      expect(cacheRemoveSpy.calls[0].arguments[0]).to.eql(cacheKey);
      expect(AWS.endpointCache.size).to.eql(0);
    });
  });
  
  describe('requiredDiscoveryEndpoint', function() {
    beforeEach(function(){
      AWS.endpointCache.empty()
    });
  
    it('fail when endpoint discovery fails', function() {
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        maxRetries: 0,
        apiConfig: new AWS.Model.Api(api)
      });
      helpers.mockHttpResponse(400, {}, '');
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      request.send(function(err, data) {
        expect(err).not.to.eql(null);
        expect(data).to.eql(null);
        expect(err.code).to.eql('EndpointDiscoveryException');
        expect(err.message).to.eql('Request cannot be fulfilled without specifying an endpoint');
      })
    });
  
    it('endpoint operation will be called at the same rate of api requests', function() {
      var client = new AWS.Service({
        apiConfig: new AWS.Model.Api(api)
      });
      helpers.mockHttpResponse(400, {}, '');
      var endpointRequestCount = 0;
      var makeRequestSpy = helpers.spyOn(client, 'makeRequest').andCallThrough();
      for (var apiRequestCount = 0; apiRequestCount < 10; apiRequestCount++) {
        var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
        request.send();
      }
      expect(makeRequestSpy.calls.length).to.eql(20);
      var apiRequestCount = 0;
      var endpointOperationRequestCount = 0;
      for (var i = 0; i < makeRequestSpy.calls.length; i++) {
        var operationName = makeRequestSpy.calls[i].arguments[0];
        if (operationName === 'requiredEDOperation') apiRequestCount++;
        else if (operationName === 'describeEndpoints') endpointOperationRequestCount++;
      }
      expect(apiRequestCount).to.eql(10);
      expect(endpointOperationRequestCount).to.eql(10);
    });
  
    it('put in endpoint cache and use returned endpoint when endpoint discovery succeeds', function() {
      var client = new AWS.Service({
        apiConfig: new AWS.Model.Api(api)
      });
      var spy = helpers.spyOn(AWS.endpointCache, 'put').andCallThrough();
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      expect(request.httpRequest.endpoint.hostname).to.eql('mockservice.mock-region.amazonaws.com');
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell2.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      request.send();
      expect(spy.calls.length).to.eql(1);
      expect(spy.calls[0].arguments[0]).to.eql({
        accessKeyId: 'akid',
        operation: 'RequiredEDOperation',
        region: 'mock-region',
        serviceId: 'MockService',
        Query: 'query'//endpoint discovery id
      });
      expect(spy.calls[0].arguments[1]).to.eql([{Address: 'https://cell2.fakeservice.amazonaws.com/fakeregion', CachePeriodInMinutes: 1}]);
      var makeRequestSpy = helpers.spyOn(client, 'makeRequest').andCallThrough();
      var replicatedRequest = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      replicatedRequest.send(function() {
        expect(this.request.httpRequest.endpoint).to.include({
          hostname: 'cell2.fakeservice.amazonaws.com',
          protocol: 'https:',
          path: '/fakeregion'
        });
        //do not request endpoint again
        expect(makeRequestSpy.calls.length).to.eql(1);
        expect(makeRequestSpy.calls[0].arguments[0]).to.eql('requiredEDOperation');
      });
    });

    it('evict invalide endpoint records from cache if InvalideEndpointException encountered', function() {
      var client = new AWS.Service({
        apiConfig: new AWS.Model.Api(api)
      });
      helpers.mockHttpResponse(400, {}, '{"__type":"InvalidEndpointException", "Message":"Error Message" }');
      var cacheKey = {
        accessKeyId: 'akid',
        operation: 'RequiredEDOperation',
        region: 'mock-region',
        serviceId: 'MockService',
        Query: 'query'
      }
      AWS.endpointCache.put(cacheKey, [{Address: 'https://cell1.fakeservice.amazonaws.com/fakeregion'}]);
      var cacheRemoveSpy = helpers.spyOn(AWS.endpointCache, 'remove').andCallThrough();
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      request.send();
      expect(request.httpRequest.endpoint.href).to.eql('https://cell1.fakeservice.amazonaws.com/fakeregion');
      expect(cacheRemoveSpy.calls.length).to.eql(1);
      expect(cacheRemoveSpy.calls[0].arguments[0]).to.eql(cacheKey);
      expect(AWS.endpointCache.size).to.eql(0);
    });
  });
  
  describe('discoverEndpoints', function() {
    beforeEach(function(){
      AWS.endpointCache.empty();
    });
  
    it('accesses a single global endpoint cache for different services', function() {
      var clientOptions = {
        endpointDiscoveryEnabled: true,
        apiConfig: new AWS.Model.Api(api)
      };
      var client1 = new AWS.Service(clientOptions);
      var client2 = new AWS.Service(clientOptions);
      var putCacheCount = 0;
      var putInCacheSpy = helpers.spyOn(AWS.endpointCache, 'put').andCallFake(function() {
        //when discover endpoint optionally, \'put\' method is called twice each time
        if (arguments[1].length > 0) putCacheCount++;
        //call through origin put method
        putInCacheSpy.origMethod.apply(putInCacheSpy.object, arguments);
      })
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      client1.makeRequest('optionalEDOperation', {}).send();
      expect(putCacheCount).to.eql(1);
      expect(putInCacheSpy.calls.length).to.eql(2);
      client1.makeRequest('requiredEDOperation', {}).send();
      expect(putCacheCount).to.eql(2);
      //client2 will use the same cache so it won't request new endpoints
      client2.makeRequest('optionalEDOperation', {}).send();
      expect(putCacheCount).to.eql(2);
      client2.makeRequest('requiredEDOperation', {}).send();
      expect(putCacheCount).to.eql(2);
    });
  
    it('default not run endpoint operation for optional endpoint discovery', function() {
      var client = new AWS.Service({
        apiConfig: new AWS.Model.Api(api)
      });
      var putInCacheSpy = helpers.spyOn(AWS.endpointCache, 'put').andCallThrough();
      client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
      expect(putInCacheSpy.calls.length).to.eql(0);
      client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        apiConfig: new AWS.Model.Api(api)
      });
      client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
      expect(putInCacheSpy.calls.length).to.eql(1);
    });
  
    it('if endpoint specified for client, custom endpoint should be preferred', function() {
      var client = new AWS.Service({
        apiConfig: new AWS.Model.Api(api),
        endpointDiscoveryEnabled: true,
        endpoint: 'custom-endpoint.amazonaws.com/fack-region',
      });
      var error;
      try {
        client.makeRequest('optionalEDOperation', {Query: 'query'}).build();
      } catch(e) {
        error = e;
      }
      expect(error).not.to.eql(null);
      expect(error.code).to.eql('ConfigurationException');
      expect(error.message).to.eql('If custome endpoint is supplied, endpointDiscoverEnabled should be turned off.');
  
      client = new AWS.Service({
        apiConfig: new AWS.Model.Api(api),
        endpoint: 'custom-endpoint.amazonaws.com/fack-region',
      });
      var getFromCacheSpy = helpers.spyOn(AWS.endpointCache, 'get').andCallThrough();
      client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'}).send();
      expect(getFromCacheSpy.calls.length).to.eql(0);
    });
  
    it('if endpoint specified in global config, custom endpoint should be preferred', function() {
      AWS.config.update({endpoint: 'custom-endpoint.amazonaws.com/fack-region'})
      client = new AWS.Service({
        apiConfig: new AWS.Model.Api(api),
      });
      var getFromCacheSpy = helpers.spyOn(AWS.endpointCache, 'get').andCallThrough();
      client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'}).send();
      expect(getFromCacheSpy.calls.length).to.eql(0);
      delete AWS.config.endpoint;
    });
  
    it('if endpoint specified in global config, custom endpoint should be preferred', function() {
      AWS.config.update({mock: {endpoint: 'custom-endpoint.amazonaws.com/fack-region'}})
      var MockService = helpers.MockServiceFromApi(api);
      var client = new MockService({});
      var getFromCacheSpy = helpers.spyOn(AWS.endpointCache, 'get').andCallThrough();
      client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'}).send();
      expect(getFromCacheSpy.calls.length).to.eql(0);
      delete AWS.config.mock;
    });
  
    it('append "endpoint-discovery" to user-agent on all requests', function() {
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        paramValidation: false,
        apiConfig: new AWS.Model.Api(api),
      });
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'})
      request.send();
      expect(request.httpRequest.headers['User-Agent']).include('endpoint-discovery');
    });

    it('do not perform endpoint discovery for presigning', function() {
      
    });
  });
});