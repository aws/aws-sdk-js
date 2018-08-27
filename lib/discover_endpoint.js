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
    var endpointRequest = service[api.endpointOperation]({
      Operation: operationModel.name,
      Identifiers: identifiers,
    });
    endpointRequest.on('retry', function(resp) {
      var err = resp.error;
      err.retryable = true;
      resp.maxRetries = ENDPOINT_OPERATION_MAX_RETRIES;
    })
    endpointRequest.send(function(err, data) {
      if (data) {
        endpointCache.put(cacheKey, data.Endpoints);
      }
    });
    //put in a placeholder for endpoints already requested, prevent 
    //too much in-flight calls
    endpointCache.put(cacheKey, []);
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
    var endpointRequest = service[api.endpointOperation]({
      Operation: operationModel.name,
      Identifiers: identifiers,
    });
    endpointRequest.send(function(err, data) {
      if(err) {
        request.response.error = util.error(err, {
          code: 'EndpointDiscoveryException',
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

function discoverEndpoint (request, done) {
  var service = request.service || {};
  var operations = service.api.operations || {};
  var operationModel = operations[request.operation];
  var isEndpointDiscoveryRequired = operationModel ? operationModel.endpointDiscoveryRequired : 'NULL';
  switch (isEndpointDiscoveryRequired) {
    case 'OPTIONAL':
      if (service.config.endpointDiscoveryEnabled === true) {
        optionalDisverEndpoint(request);
      }
      done();
      break;
    case 'REQUIRED':
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
}