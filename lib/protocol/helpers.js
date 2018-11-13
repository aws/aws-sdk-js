var util =  require('../util');

function populateHostPrefix(request)  {
  var enabled = request.service.config.hostPrefixEnabled;
  if (!enabled) return request;
  var operationModel = request.service.api[request.operation];
  //don't marshal host prefix when operation has endpoint discovery traits
  if (hasEndpointDiscover(request)) return request;
  if (operationModel.endpoint && operationModel.endpoint.hostPrefix) {
    var hostPrefixNotation = operationModel.endpoint.hostPrefix;
    var hostPrefix = expandHostPrefix(hostPrefixNotation, request.params, operationModel.input);
    prependEndpointPrefix(request.httpRequest.endpoint, hostPrefix);
    validateHostname(request.httpRequest.endpoint.hostname);
  }
  return request
}

function hasEndpointDiscover(request) {
  var api = request.service.api;
  var operationModel = api[request.operation];
  var isEndpointOperation = api.endpointOperation && (api.endpointOperation === util.string.lowerFirst(operationModel.name));
  return (operationModel.endpointDiscoveryRequired !== 'NULL' || isEndpointOperation === true);
}

function expandHostPrefix(hostPrefixNotation, params, shape) {
  util.each(shape.members, function(name, member) {
    if (member.hostLabel === true) {
      if (typeof params[name] !== 'string' || params[name] === '') {
        throw util.error(new Error(), {
          message: 'Parameter ' + name + ' should be a non-empty string.',
          code: 'InvalidParameter'
        });
      }
      var regex = new RegExp('\\{' + name + '\\}');
      hostPrefixNotation = hostPrefixNotation.replace(regex, params[name]);
    }
  });
  return hostPrefixNotation;
}

function prependEndpointPrefix(endpoint, prefix) {
  if(endpoint.host) {
    endpoint.host = prefix + endpoint.host;
  }
  if(endpoint.hostname) {
    endpoint.hostname = prefix + endpoint.hostname;
  }
}

function validateHostname(hostname) {
  var labels = hostname.split('.')
  //Reference: //https://tools.ietf.org/html/rfc1123#section-2
  var hostPattern = /^[a-zA-Z0-9]{1}$|^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/;
  util.arrayEach(labels, function(label) {
    if (!label.length || label.length < 1 || label.length > 63) {
      throw util.error(new Error(), {
        code: 'ValidationError',
        message: 'Hostname label length should be between 1 to 63 characters, inclusive.'
      })
    }
    if (!hostPattern.test(label)) {
      throw AWS.util.error(new Error(),
        {code: 'ValidationError', message: 'Label should be hostname compatible.'});
    }
  });
}

module.exports = {
  populateHostPrefix: populateHostPrefix
}