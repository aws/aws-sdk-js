var Hmac = require('./browserHmac');
var Md5 = require('./browserMd5');
var Sha1 = require('./browserSha1');
var Sha256 = require('./browserSha256');
var util = require('./util');

// browser specific modules
util.crypto.lib = {
  createHash: function createHash(alg) {
    alg = alg.toLowerCase();
    if (alg === 'md5') {
      return new Md5();
    } else if (alg === 'sha256') {
      return new Sha256();
    } else if (alg === 'sha1') {
      return new Sha1();
    }

    throw new Error('Hash algorithm ' + alg + ' is not supported in the browser SDK');
  },
  createHmac: function createHmac(alg, key) {
    alg = alg.toLowerCase();
    if (alg === 'md5') {
      return new Hmac(Md5, key);
    } else if (alg === 'sha256') {
      return new Hmac(Sha256, key);
    } else if (alg === 'sha1') {
      return new Hmac(Sha1, key);
    }

    throw new Error('HMAC algorithm ' + alg + ' is not supported in the browser SDK');
  },
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
