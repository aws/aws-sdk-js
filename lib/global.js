var util = require('./util');

// browser specific modules
util.crypto.lib = require('crypto-browserify');

// browser stubs
util.nodeRequire = function nodeRequire(mod) {};

var AWS = require('./core');

// Load browser API loader
AWS.apiLoader = function(svc, version) {
  return AWS.apiLoader.services[svc][version];
};

/**
 * @api private
 */
AWS.apiLoader.services = {};

// Load the DOMParser XML parser
AWS.XML.Parser = require('./xml/browser_parser');

// Load the XHR HttpClient
require('./http/xhr');

if (typeof process === 'undefined') {
  process = {
    browser: true
  };
}

if (typeof window !== 'undefined') window.AWS = AWS;
if (typeof module !== 'undefined') module.exports = AWS;
if (typeof self !== 'undefined') self.AWS = AWS;