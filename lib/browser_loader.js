var util = require('./util');

// browser specific modules
util.crypto.lib = require('crypto-browserify');
util.Buffer = require('buffer/').Buffer;

var AWS = require('./core');

// Use default API loader function
require('./api_loader');

// Load the DOMParser XML parser
AWS.XML.Parser = require('./xml/browser_parser');

// Load the XHR HttpClient
require('./http/xhr');

if (typeof process === 'undefined') {
  process = {
    browser: true
  };
}