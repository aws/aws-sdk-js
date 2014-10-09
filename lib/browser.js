var AWS = require('./core');

// Load browser API loader
var serviceMap = {};
AWS.apiLoader = function(svc, version) {
  return serviceMap[svc][version];
};
AWS.apiLoader.services = serviceMap;

// Load the DOMParser XML parser
AWS.XML.Parser = require('./xml/browser_parser');

// Load the XHR HttpClient
require('./http/xhr');

if (typeof window !== 'undefined') window.AWS = AWS;
