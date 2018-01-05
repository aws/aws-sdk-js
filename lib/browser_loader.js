var util = require('./util');

// browser specific modules
util.crypto.lib = {
  createHash: require('create-hash'),
  createHmac: require('create-hmac'),
  createSign: function() {
    throw new Error('createSign is not implemented in the browser');
  }
}
util.Buffer = require('buffer/').Buffer;
util.url = require('url/');
util.querystring = require('querystring/');
util.environment = 'js';

var AWS = require('./core');
module.exports = AWS;

require('./credentials');
require('./credentials/credential_provider_chain');
require('./credentials/temporary_credentials');
require('./credentials/web_identity_credentials');
require('./credentials/cognito_identity_credentials');
require('./credentials/saml_credentials');

// Load the DOMParser XML parser
AWS.XML.Parser = require('./xml/browser_parser');

// Load the XHR HttpClient
require('./http/xhr');

if (typeof process === 'undefined') {
  process = {
    browser: true
  };
}
