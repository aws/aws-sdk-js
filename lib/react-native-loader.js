var util = require('./util');
// react-native specific modules
util.crypto.lib = require('crypto-browserify');
util.Buffer = require('buffer/').Buffer;
util.url = require('url/');
util.querystring = require('querystring/');
util.environment = 'js-react-native';

var AWS = require('./core');
module.exports = AWS;

// // react-native specific modules
 AWS.util.crypto.lib = util.crypto.lib;
 AWS.util.Buffer = util.Buffer;
 AWS.util.url = util.url;
 AWS.util.querystring = util.querystring;
 AWS.util.environment = util.environment;

require('./credentials');
require('./credentials/credential_provider_chain');
require('./credentials/temporary_credentials');
require('./credentials/web_identity_credentials');
require('./credentials/cognito_identity_credentials');
require('./credentials/saml_credentials');

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