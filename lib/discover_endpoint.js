var AWS = require('./core');
var util = require('./util');
var endpointCache = AWS.endpointCache;
var ENDPOINT_OPERATION_MAX_RETRIES = 60;

/**
 * @api private
 */
function getCacheKey(request) {
  var service = request.service;
  var api = service.api || {};
  var operations = api.operations;
  var identifiers = {};
  if (operations[request.operation] && operations[request.operation].name) {
    identifiers.operation = operations[request.operation].name;
  }
  if (service.config.region) {
    identifiers.region = service.config.region;
  }
  if (api.serviceId) {
    identifiers.serviceId = api.serviceId
  }
  if (service.config.credentials.accessKeyId) {
    identifiers.accessKeyId = service.config.credentials.accessKeyId
  }
  return identifiers;
}

/**
 * @api private
 */
function marshallCustomeIdentifiers(result, params, shape) {
  if (!shape || params === undefined || params === null) return;
  if (shape.type === 'structure' && shape.required && shape.required.length > 0) {
    util.arrayEach(shape.required, function(name) {
      var memberShape = shape.members[name];
      if (memberShape.endpointDiscoveryId === true) {
        var locationName = memberShape.isLocationName ? memberShape.name : name;
        result[locationName] = String(params[name]);
      } else {
        marshallCustomeIdentifiers(result, params[name], memberShape);
      }
    });
  }
}

/**
 * @api private
 */
function optionalDisverEndpoint(request) {
  var service = request.service;
  var api = service.api;
  var operations = api.operations || {};
  var operationModel = operations[request.operation];
  var inputShape = operationModel ? operationModel.input : undefined;
  
  var identifiers = {};
  marshallCustomeIdentifiers(identifiers, request.params, inputShape);
  var cacheKey = getCacheKey(request);
  cacheKey = util.update(cacheKey, identifiers);
  var endpoints = endpointCache.get(cacheKey);
  if (endpoints && endpoints.length > 0) {
    //found endpoint record from cache
    request.httpRequest.updateEndpoint(endpoints[0].Address);
  } else if(endpoints && endpoints.length === 0){
    //endpoint operation is being made but response not yet received
    return;
  } else {
    //endpoint record not in cache. make discovery operation
    var endpointRequest = service.makeRequest(api.endpointOperation, {
      Operation: operationModel.name,
      Identifiers: identifiers,
    });
    endpointRequest.removeListener('validate', AWS.EventListeners.Core.VALIDATE_PARAMETERS);
    endpointRequest.removeListener('retry', AWS.EventListeners.Core.RETRY_CHECK);
    var toHead = true;
    endpointRequest.on('retry', function(resp) {
      var err = resp.error;
      err.retryable = true;
      err.retryDelay = 60000;
      resp.maxRetries = ENDPOINT_OPERATION_MAX_RETRIES;
    }, toHead);
    //put in a placeholder for endpoints already requested, prevent 
    //too much in-flight calls
    endpointCache.put(cacheKey, []);
    endpointRequest.send(function(err, data) {
      if (data) {
        endpointCache.put(cacheKey, data.Endpoints);
      } else if (err) {
        endpointCache.remove(cacheKey);
      }
    });
  }
}

/**
 * @api private
 */
function requiredDiscoverEndpoint(request, done) {
  var service = request.service;
  var api = service.api;
  var operations = api.operations || {};
  var operationModel = operations[request.operation];
  var inputShape = operationModel ? operationModel.input : undefined;
  
  var identifiers = {};
  marshallCustomeIdentifiers(identifiers, request.params, inputShape);
  var cacheKey = getCacheKey(request);
  cacheKey = util.update(cacheKey, identifiers);
  var endpoints = endpointCache.get(cacheKey);
  if (endpoints === undefined || endpoints.length === 0) {
    var endpointRequest = service.makeRequest(api.endpointOperation, {
      Operation: operationModel.name,
      Identifiers: identifiers,
    });
    endpointRequest.removeListener('validate', AWS.EventListeners.Core.VALIDATE_PARAMETERS);
    endpointRequest.send(function(err, data) {
      if(err) {
        request.response.error = util.error(err, {
          code: 'EndpointDiscoveryException',
          message: 'Request cannot be fulfilled without specifying an endpoint',
          retryable: false
        });
      } else if (data) {
        endpointCache.put(cacheKey, data.Endpoints);
        request.httpRequest.updateEndpoint(data.Endpoints[0].Address);
      }
    });
    done();
  } else {
    request.httpRequest.updateEndpoint(endpoints[0].Address);
    done();
  }
}

/**
 * @api private
 */
function INVALIDATE_CACHED_ENDPOINT(response) {
  var error = response.error;
  var httpResponse = response.httpResponse;
  if (error &&
    (error.code === 'InvalidEndpointException' || httpResponse.statusCode === 421)
  ) {
    var request = response.request;
    var operations = request.service.api.operations || {};
    var inputShape = operations[request.operation] ? operations[request.operation].input : undefined;
    var identifiers = {};
    marshallCustomeIdentifiers(identifiers, request.params, inputShape);
    var cacheKey = getCacheKey(request);
    cacheKey = util.update(cacheKey, identifiers);
    AWS.endpointCache.remove(cacheKey);
  }
}

/**
 * @api private
 */
function hasCustomEndpoint(client) {
  //if set endpoint is set for specific client, enable endpoint discovery will raise an error.
  if (client._originalConfig && client._originalConfig.endpoint && client.config.endpointDiscoveryEnabled === true) {
    throw util.error(new Error(), {
      code: 'ConfigurationException',
      message: 'If custome endpoint is supplied, endpointDiscoverEnabled should be turned off.'
    });
  };
  var svcConfig = AWS.config[client.serviceIdentifier] || {};
  return AWS.config.endpoint || svcConfig.endpoint || (client._originalConfig && client._originalConfig.endpoint);
}

function discoverEndpoint (request, done) {
  var service = request.service || {};
  if (hasCustomEndpoint(service) || request.isPresigned()) return done();
  var operations = service.api.operations || {};
  var operationModel = operations[request.operation];
  var isEndpointDiscoveryRequired = operationModel ? operationModel.endpointDiscoveryRequired : 'NULL';
  if (service.config.endpointDiscoveryEnabled === true) {
    request.httpRequest.appendToUserAgent('endpoint-discovery');
  }
  switch (isEndpointDiscoveryRequired) {
    case 'OPTIONAL':
      if (service.config.endpointDiscoveryEnabled === true) {
        optionalDisverEndpoint(request);
        request.addNamedListener('INVALIDATE_CACHED_ENDPOINT', 'extractError', INVALIDATE_CACHED_ENDPOINT);
      }
      done();
      break;
    case 'REQUIRED':
      request.addNamedListener('INVALIDATE_CACHED_ENDPOINT', 'extractError', INVALIDATE_CACHED_ENDPOINT);
      requiredDiscoverEndpoint(request, done);
      break;
    case 'NULL':
    default:
      done();
      break;
  }
}

module.exports = {
  discoverEndpoint: discoverEndpoint,
  requiredDiscoverEndpoint: requiredDiscoverEndpoint,
  optionalDisverEndpoint: optionalDisverEndpoint,
  marshallCustomeIdentifiers: marshallCustomeIdentifiers,
  getCacheKey: getCacheKey,
  invalidateCachedEndpoint: INVALIDATE_CACHED_ENDPOINT,
}