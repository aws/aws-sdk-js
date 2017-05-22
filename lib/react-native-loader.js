var util = require('./util');

// react-native specific modules
util.crypto.lib = require('crypto-browserify');
util.Buffer = require('buffer/').Buffer;
util.url = require('url/');
util.querystring = require('querystring/');
util.environment = 'js-react-native';

var AWS = require('./core');

// Use default API loader function
require('./api_loader');

// Load the DOMParser XML parser
AWS.XML.Parser = require('./xml/node_parser');

// Load the XHR HttpClient
require('./http/xhr');

// add custom request event handlers
var addContentType = require('./react-native/add-content-type').addContentType;
AWS.EventListeners.Core.addNamedListeners(function(add) {
  add('ADD_CONTENT_TYPE', 'afterBuild', addContentType);
});

if (typeof process === 'undefined') {
  process = {};
}
process.browser = true;