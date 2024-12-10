var helpers = require('./helpers');
var http = require('http');
var url = require('url');
var AWS = helpers.AWS;
var endpoint_discovery_module = require('../lib/discover_endpoint');
var iniLoader = AWS.util.iniLoader;
var getCacheKey = endpoint_discovery_module.getCacheKey;
var marshallCustomIdentifiers = endpoint_discovery_module.marshallCustomIdentifiers;

var api = {
  metadata: {
    apiVersion: '2018-09-19',
    endpointPrefix: 'mockservice',
    serviceId: 'MockService',
    serviceAbbreviation: 'MockService',
    protocol: 'json'
  },
  operations: {
    DescribeEndpoints: {
      name: 'DescribeEndpoints',
      http: {},
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
};
// API with only optional endpoint discovery operations
var optionalEDOnlyApi = {
  metadata: api.metadata,
  operations: {
    DescribeEndpoints: api.operations.DescribeEndpoints,
    ComplexEDOperation: api.operations.ComplexEDOperation,
    OptionalEDOperation: api.operations.OptionalEDOperation
  }
};
// API with only required endpoint discovery operations
var requiredEDOnlyApi = {
  metadata: api.metadata,
  operations: {
    DescribeEndpoints: api.operations.DescribeEndpoints,
    RequiredEDOperation: api.operations.RequiredEDOperation
  }
};

describe('endpoint discovery', function() {
  afterEach(function() {
    AWS.config.endpoint = undefined;
    if (iniLoader) iniLoader.clearCachedFiles(); //iniLoader not available in browsers
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
        serviceId: 'MockService',
        accessKeyId: 'akid'
      });
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
      expect(spy.calls[0].arguments[0]).to.eql(AWS.EndpointCache.getKeyString({
        region: 'fake-region-1',
        operation: 'RequiredEDOperation',
        serviceId: 'MockService',
        accessKeyId: 'akid',
        Query: 'query'
      }));
    });
  });

  describe('marshallCustomIdentifiers', function() {
    it('can marshall params according to endpointdiscoveryid trait', function() {
      var MockService = helpers.MockServiceFromApi(api);
      var client = new MockService();
      var ids = marshallCustomIdentifiers({
        params: {Query: 'query', Record: 'record'}
      }, client.api.operations.requiredEDOperation.input);
      expect(ids).to.eql({Query: 'query'});
      ids = marshallCustomIdentifiers({
        params: {Query: {Record: 'record'}}
      }, client.api.operations.complexEDOperation.input);
      expect(ids).to.eql({RecordItem: 'record'});
    });
  });

  describe('optionalEndpointDiscovery', function() {
    beforeEach(function() {
      AWS.endpointCache.empty();
    });

    it('gets first corresponding endpoint from endpoint cache', function() {
      var spy = helpers.spyOn(AWS.endpointCache, 'get').andReturn([{
        Address: 'https://fakeService.amazonaws.com:22/path'
      }, {
        Address: 'https://fakeService.amaoznaws.com'
      }]);
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        region: 'fake-region-1',
        apiConfig: new AWS.Model.Api(optionalEDOnlyApi)
      });
      helpers.mockHttpResponse(200, {}, '{}');
      var request = client.makeRequest('optionalEDOperation', {Query: 'query'});
      request.send();
      expect(spy.calls.length).to.eql(1);
      expect(request.httpRequest.endpoint).to.include({
        hostname: 'fakeservice.amazonaws.com',
        port: 22,
        protocol: 'https:',
        path: '/path'
      });
    });

    it('use regional endpoint of new endpoint cannot be discovered', function() {
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        region: 'fake-region-1',
        apiConfig: new AWS.Model.Api(optionalEDOnlyApi)
      });
      var request = client.makeRequest('optionalEDOperation', {Query: 'query'});
      expect(request.httpRequest.endpoint.hostname).to.eql('mockservice.fake-region-1.amazonaws.com');
    });

    it('put in endpoint cache is endpoint operation succeeds', function() {
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        region: 'fake-region-1',
        maxRetries: 0,
        apiConfig: new AWS.Model.Api(optionalEDOnlyApi)
      });
      var spy = helpers.spyOn(AWS.endpointCache, 'put').andCallThrough();
      var request = client.makeRequest('optionalEDOperation', {Query: 'query'});
      expect(request.httpRequest.endpoint.hostname).to.eql('mockservice.fake-region-1.amazonaws.com');
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      request.send();
      expect(spy.calls.length).to.eql(2);
      expect(spy.calls[0].arguments[0]).to.eql({
        accessKeyId: 'akid',
        region: 'fake-region-1',
        serviceId: 'MockService'
      });
      expect(spy.calls[0].arguments[1]).to.eql([{Address: '', CachePeriodInMinutes: 1}]);
      expect(spy.calls[1].arguments[0]).to.eql({
        accessKeyId: 'akid',
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
        apiConfig: new AWS.Model.Api(optionalEDOnlyApi)
      });
      client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
      client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
      //should not make 4 calls which request endpoint once for every api call
      expect(spy.calls.length).to.eql(3);
    });

    it('should put in an undefined cache record valid for 1 minute when failed', function() {
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        maxRetries: 0,
        apiConfig: new AWS.Model.Api(optionalEDOnlyApi)
      });
      helpers.mockHttpResponse(400, {}, '');
      var spy = helpers.spyOn(AWS.endpointCache, 'put').andCallThrough();
      client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
      expect(spy.calls.length).to.eql(2);
      expect(spy.calls[1].arguments[0]).to.eql({
        accessKeyId: 'akid',
        region: 'mock-region',
        serviceId: 'MockService'
      });
      expect(spy.calls[1].arguments[1]).to.eql([{
        Address: '',
        CachePeriodInMinutes: 1
      }]);
    });

    it('evict invalid endpoint records from cache if InvalidEndpointException encountered', function() {
      var client = new AWS.Service({
        region: 'fake-region-1',
        endpointDiscoveryEnabled: true,
        apiConfig: new AWS.Model.Api(optionalEDOnlyApi)
      });
      helpers.mockHttpResponse(400, {}, '{"__type":"InvalidEndpointException", "Message":"Error Message" }');
      var cacheKey = {
        accessKeyId: 'akid',
        region: 'fake-region-1',
        serviceId: 'MockService'
      };
      AWS.endpointCache.put(cacheKey, [{Address: 'https://cell1.fakeservice.amazonaws.com/fakeregion'}]);
      var cacheRemoveSpy = helpers.spyOn(AWS.endpointCache, 'remove').andCallThrough();
      var request = client.makeRequest('optionalEDOperation', {Query: 'query'});
      request.send();
      expect(request.httpRequest.endpoint.href).to.eql('https://cell1.fakeservice.amazonaws.com/fakeregion');
      expect(cacheRemoveSpy.calls.length).to.eql(1);
      expect(cacheRemoveSpy.calls[0].arguments[0]).to.eql(cacheKey);
      expect(AWS.endpointCache.size).to.eql(0);
    });


    it('add "x-amz-api-version" header to discovery endpoint operation in optional endpoint discovery', function() {
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        apiConfig: new AWS.Model.Api(optionalEDOnlyApi),
      });
      var https = require('https');
      helpers.spyOn(https, 'request').andCallThrough();
      var request = client.makeRequest('optionalEDOperation', {Query: 'query'});
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      var spy = helpers.createSpy('send inject');
      AWS.events.on('sign', function(req) {
        if (req.operation === 'describeEndpoints') {
          spy(req);
        }
      });
      request.send();
      expect(spy.calls.length).to.eql(1);
      expect(spy.calls[0].arguments[0].httpRequest.headers['x-amz-api-version']).to.eql('2018-09-19');
    });
  });

  describe('requiredEndpointDiscovery', function() {
    beforeEach(function() {
      AWS.endpointCache.empty();
    });

    it('fail when endpoint discovery fails', function() {
      var client = new AWS.Service({
        maxRetries: 0,
        apiConfig: new AWS.Model.Api(requiredEDOnlyApi)
      });
      var body = '{"message": "failed to discover endpoint", "__type": "EndpointNotReady"}';
      helpers.mockHttpResponse(400, {}, body);
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      request.send(function(err, data) {
        expect(err).not.to.eql(null);
        expect(data).to.eql(null);
        expect(err.code).to.eql('EndpointNotReady');
        expect(err.message).to.eql('failed to discover endpoint');
      });
    });

    it('endpoint operation will be called at the same rate of api requests', function() {
      var client = new AWS.Service({
        apiConfig: new AWS.Model.Api(requiredEDOnlyApi)
      });
      helpers.mockHttpResponse(400, {}, '');
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
        apiConfig: new AWS.Model.Api(requiredEDOnlyApi)
      });
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      expect(request.httpRequest.endpoint.hostname).to.eql('mockservice.mock-region.amazonaws.com');
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell2.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      var putCacheCount = 0;
      var putInCacheSpy = helpers.spyOn(AWS.endpointCache, 'put').andCallFake(function() {
        //when discover endpoint optionally, \'put\' method is called twice each time
        if (arguments[1].length > 0 && arguments[1][0].Address !== '') putCacheCount++;
        //call through origin put method
        putInCacheSpy.origMethod.apply(putInCacheSpy.object, arguments);
      });
      request.send();
      expect(putInCacheSpy.calls.length).to.eql(2);
      expect(putCacheCount).to.eql(1);
      expect(putInCacheSpy.calls[1].arguments[1]).to.eql([{Address: 'https://cell2.fakeservice.amazonaws.com/fakeregion', CachePeriodInMinutes: 1}]);
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

    it('evict invalid endpoint records from cache if InvalidEndpointException encountered', function() {
      var client = new AWS.Service({
        apiConfig: new AWS.Model.Api(requiredEDOnlyApi)
      });
      helpers.mockHttpResponse(400, {}, '{"__type":"InvalidEndpointException", "Message":"Error Message" }');
      var cacheKey = {
        accessKeyId: 'akid',
        operation: 'RequiredEDOperation',
        region: 'mock-region',
        serviceId: 'MockService',
        Query: 'query'
      };
      AWS.endpointCache.put(cacheKey, [{Address: 'https://cell1.fakeservice.amazonaws.com/fakeregion', CachePeriodInMinutes: 1}]);
      var cacheRemoveSpy = helpers.spyOn(AWS.endpointCache, 'remove').andCallThrough();
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      request.send();
      expect(request.httpRequest.endpoint.href).to.eql('https://cell1.fakeservice.amazonaws.com/fakeregion');
      expect(cacheRemoveSpy.calls.length).to.eql(1);
      expect(cacheRemoveSpy.calls[0].arguments[0]).to.eql(cacheKey);
      expect(AWS.endpointCache.size).to.eql(0);
    });

    it('add "x-amz-api-version" header to discovery endpoint operation in required endpoint discovery', function() {
      var client = new AWS.Service({
        apiConfig: new AWS.Model.Api(requiredEDOnlyApi),
      });
      var https = require('https');
      helpers.spyOn(https, 'request').andCallThrough();
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell2.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      var spy = helpers.createSpy('send inject');
      AWS.events.on('sign', function(req) {
        if (req.operation === 'describeEndpoints') {
          spy(req);
        }
      });
      request.send();
      expect(spy.calls.length).to.eql(1);
      expect(spy.calls[0].arguments[0].httpRequest.headers['x-amz-api-version']).to.eql('2018-09-19');
    });

    it('update "Host" header with newly discovered endpoint', function() {
      var client = new AWS.Service({
        apiConfig: new AWS.Model.Api(requiredEDOnlyApi),
      });
      var https = require('https');
      helpers.spyOn(https, 'request').andCallThrough();
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      request.send();
      expect(request.httpRequest.headers.Host).to.eql('cell1.fakeservice.amazonaws.com');
    });

    if (AWS.util.isNode()) {
      describe('not make more endpoint operation requests if there is an in-flight request', function() {
        var port;
        var client;
        var app;

        function extractOperation(request) {
          if (request.headers['x-amz-target']) {
            var target = request.headers['x-amz-target'];
            var targetArr = target.split('.');
            return targetArr[targetArr.length - 1];
          }
        }

        var server = http.createServer(function(req, res) {
          app(req, res);
        });

        beforeEach(function() {
          port = 1024 + parseInt(Math.random() * 1024);
          server.listen(port);

          AWS.events.on('build', function(req) {
            req.httpRequest.updateEndpoint('http://127.0.0.1:' + port);
          });

          client = new AWS.Service({
            apiConfig: new AWS.Model.Api(requiredEDOnlyApi),
          });
        });

        afterEach(function() {
          AWS.events.removeAllListeners();
          try {server.close();} catch (e) {}//fix service node running error in node 0.10
        });

        it('endpoint operation succeed', function(done) {
          var concurrency = 10;
          var requestsCounter = 0;
          var endpointOperationCount = 0;
          var apiOperationCount = 0;
          app = function(req, res) {
            var timer;
            var operation = extractOperation(req);
            if (operation) {
              res.writeHead(200, {
                'Content-Type': 'text/plain'
              });
              if (operation === 'DescribeEndpoints') {
                endpointOperationCount++;
                timer = setTimeout(function() {
                  res.write('{"Endpoints": [{"Address": "http://127.0.0.1:' + port + '/discovered", "CachePeriodInMinutes": 10}]}');
                  res.end();
                }, 50);
              } else {
                apiOperationCount++;
                expect(url.parse(req.url).path).to.eql('/discovered');
                res.end('{"Operation": "' + operation + '"}');
              }
            } else {
              res.writeHead(404, {});
              res.end();
            }
            if (timer) {
              clearTimeout(timer);
              timer = null;
            }
          };
          for (var i = 0; i < concurrency; i++) {
            var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
            request.send(function(err, data) {
              requestsCounter ++;
              if (requestsCounter === concurrency) {
                AWS.events.removeAllListeners();
                server.close();
                expect(endpointOperationCount).to.eql(1);
                expect(apiOperationCount).to.eql(concurrency);
                done();
              }
            });
          }
        });

        it('endpoint operation fail', function(done) {
          var concurrency = 10;
          var requestsCounter = 0;
          var endpointOperationCount = 0;
          var apiOperationCount = 0;
          app = function(req, res) {
            var timer;
            var operation = extractOperation(req);
            if (operation) {
              if (operation === 'DescribeEndpoints') {
                endpointOperationCount++;
                timer = setTimeout(function() {
                  res.statusCode = 400;
                  res.write('{"__type": "EndpointUnavailable", "message": "endpoint is currently unavailable"}');
                  res.end();
                }, 50);
              } else {
                apiOperationCount++;
                res.statusCode = 200;
                res.end('{"Operation": "' + operation + '"}');
              }
            } else {
              res.writeHead(404, {});
              res.end();
            }
            if (timer) {
              clearTimeout(timer);
              timer = null;
            }
          };
          var failedRequestCounter = 0;
          for (var i = 0; i < concurrency; i++) {
            var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
            request.send(function(err, data) {
              requestsCounter ++;
              if (err) failedRequestCounter ++;
              expect(err.code).to.eql('EndpointUnavailable');
              expect(err.message).to.eql('endpoint is currently unavailable');
              if (requestsCounter === concurrency) {
                AWS.events.removeAllListeners();
                server.close();
                expect(endpointOperationCount).to.eql(1);
                expect(apiOperationCount).to.eql(0);
                expect(requestsCounter).to.eql(concurrency);
                expect(failedRequestCounter).to.eql(concurrency);
                done();
              }
            });
          }
        });
      });
    }
  });

  describe('discoverEndpoints', function() {
    beforeEach(function() {
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
        if (arguments[1].length > 0 && arguments[1][0].Address !== '') putCacheCount++;
        //call through origin put method
        putInCacheSpy.origMethod.apply(putInCacheSpy.object, arguments);
      });
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
        apiConfig: new AWS.Model.Api(optionalEDOnlyApi)
      });
      var putInCacheSpy = helpers.spyOn(AWS.endpointCache, 'put').andCallThrough();
      client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
      expect(putInCacheSpy.calls.length).to.eql(0);
      client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        apiConfig: new AWS.Model.Api(optionalEDOnlyApi)
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
      } catch (e) {
        error = e;
      }
      expect(error).not.to.eql(null);
      expect(error.code).to.eql('ConfigurationException');
      expect(error.message).to.eql('Custom endpoint is supplied; endpointDiscoveryEnabled must not be true.');

      client = new AWS.Service({
        apiConfig: new AWS.Model.Api(api),
        endpoint: 'custom-endpoint.amazonaws.com/fake-region',
      });
      var getFromCacheSpy = helpers.spyOn(AWS.endpointCache, 'get').andCallThrough();
      client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'}).send();
      expect(getFromCacheSpy.calls.length).to.eql(0);
    });

    it('append "endpoint-discovery" to user-agent on all requests', function() {
      var client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        apiConfig: new AWS.Model.Api(api),
      });
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      request.send();
      if (AWS.util.isNode()) {
        expect(request.httpRequest.headers['User-Agent']).include('endpoint-discovery');
      } else {
        expect(request.httpRequest.headers['X-Amz-User-Agent']).include('endpoint-discovery');
      }

      request = client.makeRequest('optionalEDOperation', {Query: 'query'});
      request.send();
      if (AWS.util.isNode()) {
        expect(request.httpRequest.headers['User-Agent']).include('endpoint-discovery');
      } else {
        expect(request.httpRequest.headers['X-Amz-User-Agent']).include('endpoint-discovery');
      }
    });
  });

  describe('configurations', function() {
    var env;
    beforeEach(function() {
      env = process.env;
      process.env = {};
      if (AWS.util.isBrowser()) process.env = null;
      AWS.endpointCache.empty();
      delete AWS.config.endpointDiscoveryEnabled;
    });
    afterEach(function() {
      process.env = env;
    });

    it('will enable endpoint discovery if at least one operation requires endpoint discovery', function() {
      var client = new AWS.Service({
        maxRetries: 0,
        apiConfig: new AWS.Model.Api(api)
      });
      var spy = helpers.createSpy('send inject');
      AWS.events.on('sign', function(req) {
        if (req.operation === 'describeEndpoints') {
          spy(req);
        }
      });
      var body = '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}';
      helpers.mockHttpResponse(200, {}, body);
      client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'}).send();
      expect(spy.calls.length).to.eql(1);
      client.makeRequest('optionalEDOperation', {Query: 'query', Record: 'record'}).send();
      // endpoint discovery is enabled even including operations where endpoint discovery is optional.
      expect(spy.calls.length).to.eql(2);
    });

    it('throws when endpoint discovery is required for operation but explicitly disabled from client', function() {
      var client = new AWS.Service({
        endpointDiscoveryEnabled: false,
        maxRetries: 0,
        apiConfig: new AWS.Model.Api(requiredEDOnlyApi)
      });
      var body = '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}';
      helpers.mockHttpResponse(200, {}, body);
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      request.send(function(err, data) {
        expect(err).not.to.eql(null);
        expect(data).to.eql(null);
        expect(err.code).to.eql('ConfigurationException');
        expect(err.message).to.eql(
          'Endpoint Discovery is disabled but MockService.requiredEDOperation() requires it. Please check your configurations.'
        );
      });
    });

    it('throws when endpoint discovery is required for operation but explicitly disabled from global config', function() {
      AWS.config.endpointDiscoveryEnabled = false;
      var client = new AWS.Service({
        maxRetries: 0,
        apiConfig: new AWS.Model.Api(requiredEDOnlyApi)
      });
      var body = '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}';
      helpers.mockHttpResponse(200, {}, body);
      var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
      request.send(function(err, data) {
        expect(err).not.to.eql(null);
        // expect(data).to.eql(null);
        expect(err.code).to.eql('ConfigurationException');
        expect(err.message).to.eql(
          'Endpoint Discovery is disabled but MockService.requiredEDOperation() requires it. Please check your configurations.'
        );
      });
    });

    it('default to turnoff endpoint discovery behavior for operational endpoint discovery', function() {
      client = new AWS.Service({
        apiConfig: new AWS.Model.Api(optionalEDOnlyApi),
      });
      var spy = helpers.createSpy('send inject');
      AWS.events.on('sign', function(req) {
        if (req.operation === 'describeEndpoints') {
          spy(req);
        }
      });
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
      expect(spy.calls.length).to.eql(0);
    });

    it('turn on endpoint discovery in client config', function() {
      client = new AWS.Service({
        endpointDiscoveryEnabled: true,
        apiConfig: new AWS.Model.Api(api),
      });
      var spy = helpers.createSpy('send inject');
      AWS.events.on('sign', function(req) {
        if (req.operation === 'describeEndpoints') {
          spy(req);
        }
      });
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
      expect(spy.calls.length).to.eql(1);
      client.makeRequest('requiredEDOperation',  {Query: 'query', Record: 'record'}).send();
      expect(spy.calls.length).to.eql(2);
    });

    it('turn on endpoint discovery in global config', function() {
      AWS.config.endpointDiscoveryEnabled = true;
      var client = new AWS.Service({
        apiConfig: new AWS.Model.Api(api),
      });
      var spy = helpers.createSpy('send inject');
      AWS.events.on('sign', function(req) {
        if (req.operation === 'describeEndpoints') {
          spy(req);
        }
      });
      helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
      client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
      expect(spy.calls.length).to.eql(1);
      client.makeRequest('requiredEDOperation',  {Query: 'query', Record: 'record'}).send();
      expect(spy.calls.length).to.eql(2);
    });

    if (AWS.util.isNode()) {
      it('turn on endpoint discovery from environmental variable AWS_ENABLE_ENDPOINT_DISCOVERY', function() {
        var client = new AWS.Service({
          apiConfig: new AWS.Model.Api(optionalEDOnlyApi),
        });
        var spy = helpers.createSpy('send inject');
        AWS.events.on('sign', function(req) {
          if (req.operation === 'describeEndpoints') {
            spy(req);
          }
        });
        process.env.AWS_ENABLE_ENDPOINT_DISCOVERY = '1';
        helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
        client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
        expect(spy.calls.length).to.eql(1);

        process.env.AWS_ENABLE_ENDPOINT_DISCOVERY = undefined;
        request = client.makeRequest('optionalEDOperation', {Query: 'query'});
        var error;
        try {
          request.send();
        } catch (e) {
          error = e;
        }
        expect(error).not.to.eql(undefined);
        expect(error.code).to.eql('ConfigurationException');
        expect(error.message).to.eql('environmental variable AWS_ENABLE_ENDPOINT_DISCOVERY cannot be set to nothing');
      });

      it('throws when endpoint discovery is required for operation but explicitly disabled from environmental variable', function() {
        var client = new AWS.Service({
          maxRetries: 0,
          apiConfig: new AWS.Model.Api(requiredEDOnlyApi)
        });
        var body = '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}';
        helpers.mockHttpResponse(200, {}, body);
        process.env.AWS_ENABLE_ENDPOINT_DISCOVERY = '0';
        var request = client.makeRequest('requiredEDOperation', {Query: 'query', Record: 'record'});
        request.send(function(err, data) {
          expect(err).not.to.eql(null);
          // expect(data).to.eql(null);
          expect(err.code).to.eql('ConfigurationException');
          expect(err.message).to.eql(
            'Endpoint Discovery is disabled but MockService.requiredEDOperation() requires it. Please check your configurations.'
          );
        });
      });

      it('turn on endpoint discovery from environmental variable AWS_ENDPOINT_DISCOVERY_ENABLED', function() {
        var client = new AWS.Service({
          apiConfig: new AWS.Model.Api(optionalEDOnlyApi),
        });
        var spy = helpers.createSpy('send inject');
        AWS.events.on('sign', function(req) {
          if (req.operation === 'describeEndpoints') {
            spy(req);
          }
        });
        process.env.AWS_ENDPOINT_DISCOVERY_ENABLED = '1';
        helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
        client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
        expect(spy.calls.length).to.eql(1);

        process.env.AWS_ENDPOINT_DISCOVERY_ENABLED = undefined;
        request = client.makeRequest('optionalEDOperation', {Query: 'query'});
        var error;
        try {
          request.send();
        } catch (e) {
          error = e;
        }
        expect(error).not.to.eql(undefined);
        expect(error.code).to.eql('ConfigurationException');
        expect(error.message).to.eql('environmental variable AWS_ENDPOINT_DISCOVERY_ENABLED cannot be set to nothing');
      });

      it('turn on endpoint discovery from config file', function() {
        var client = new AWS.Service({
          apiConfig: new AWS.Model.Api(optionalEDOnlyApi),
        });
        helpers.spyOn(iniLoader, 'loadFrom').andReturn({'dummyRole': {endpoint_discovery_enabled: true}});
        process.env.AWS_PROFILE = 'dummyRole';
        var spy = helpers.createSpy('send inject');
        AWS.events.on('sign', function(req) {
          if (req.operation === 'describeEndpoints') {
            spy(req);
          }
        });
        helpers.mockHttpResponse(200, {}, '{"Endpoints": [{"Address": "https://cell1.fakeservice.amazonaws.com/fakeregion", "CachePeriodInMinutes": 1}]}');
        client.makeRequest('optionalEDOperation', {Query: 'query'}).send();
        expect(spy.calls.length).to.eql(1);

        helpers.spyOn(iniLoader, 'loadFrom').andReturn({'dummyRole': {endpoint_discovery_enabled: undefined}});
        var request = client.makeRequest('optionalEDOperation', {Query: 'query', Record: 'record'});
        var error;
        try {
          request.send();
        } catch (e) {
          error = e;
        }
        expect(error).not.to.eql(undefined);
        expect(error.code).to.eql('ConfigurationException');
        expect(error.message).to.eql('config file entry \'endpoint_discovery_enabled\' cannot be set to nothing');
      });
    }
  });
});
