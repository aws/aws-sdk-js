/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.V4 = inherit(AWS.Signers.RequestSigner, {
  constructor: function V4(request, serviceName) {
    AWS.Signers.RequestSigner.call(this, request);
    this.serviceName = serviceName;
  },

  addAuthorization: function addAuthorization(credentials, date) {
    var datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '');
    this.addHeaders(credentials, datetime);
    this.request.headers['Authorization'] =
      this.authorization(credentials, datetime);
  },

  addHeaders: function addHeaders(credentials, datetime) {
    this.request.headers['Date'] = datetime;
    this.request.headers['X-Amz-Date'] = datetime;
    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }
  },

  authorization: function authorization(credentials, datetime) {
    var parts = [];
    var credString = this.credentialString(datetime);
    parts.push('AWS4-HMAC-SHA256 Credential=' +
      credentials.accessKeyId + '/' + credString);
    parts.push('SignedHeaders=' + this.signedHeaders());
    parts.push('Signature=' + this.signature(credentials, datetime));
    return parts.join(', ');
  },

  signature: function signature(credentials, datetime) {
    var kSecret = credentials.secretAccessKey;
    var kDate = AWS.util.crypto.hmac('AWS4' + kSecret, datetime.substr(0, 8));
    var kRegion = AWS.util.crypto.hmac(kDate, this.request.region);
    var kService = AWS.util.crypto.hmac(kRegion, this.serviceName);
    var kCredentials = AWS.util.crypto.hmac(kService, 'aws4_request');
    return AWS.util.crypto.hmac(kCredentials, this.stringToSign(datetime), 'hex');
  },

  stringToSign: function stringToSign(datetime) {
    var parts = [];
    parts.push('AWS4-HMAC-SHA256');
    parts.push(datetime);
    parts.push(this.credentialString(datetime));
    parts.push(this.hexEncodedHash(this.canonicalString()));
    return parts.join('\n');
  },

  canonicalString: function canonicalString() {
    var parts = [];
    parts.push(this.request.method);
    parts.push(this.request.pathname());
    parts.push(this.request.search());
    parts.push(this.canonicalHeaders() + '\n');
    parts.push(this.signedHeaders());
    parts.push(this.hexEncodedHash(this.request.body));
    return parts.join('\n');
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = [];
    AWS.util.each.call(this, this.request.headers, function (key, item) {
      headers.push([key, item]);
    });
    headers.sort(function (a, b) {
      return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
    });
    var parts = [];
    AWS.util.arrayEach.call(this, headers, function (item) {
      if (item[0] !== 'Authorization') {
        parts.push(item[0].toLowerCase() + ':' +
          this.canonicalHeaderValues(item[1].toString()));
      }
    });
    return parts.join('\n');
  },

  canonicalHeaderValues: function canonicalHeaderValues(values) {
    return values.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
  },

  signedHeaders: function signedHeaders() {
    var keys = [];
    AWS.util.each.call(this, this.request.headers, function (key) {
      key = key.toLowerCase();
      if (key !== 'authorization') keys.push(key);
    });
    return keys.sort().join(';');
  },

  credentialString: function credentialString(datetime) {
    var parts = [];
    parts.push(datetime.substr(0, 8));
    parts.push(this.request.region);
    parts.push(this.serviceName);
    parts.push('aws4_request');
    return parts.join('/');
  },

  hexEncodedHash: function hash(string) {
    return AWS.util.crypto.sha256(string, 'hex');
  }

});

module.exports = AWS.Signers.V4;
