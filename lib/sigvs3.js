/**
 * Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('./core');
var inherit = AWS.util.inherit;

/**
 * @constructor
 * @extends AWS.RequestSigner
 */
AWS.SigVS3 = inherit(AWS.RequestSigner, {

  constructor: function SigVS3(request) {
    AWS.RequestSigner.call(this, request);
  },

  subResources: {
    'acl': 1,
    'lifecycle': 1,
    'delete': 1,
    'location': 1,
    'logging': 1,
    'notification': 1,
    'partNumber': 1,
    'policy': 1,
    'requestPayment': 1,
    'torrent': 1,
    'uploadId': 1,
    'uploads': 1,
    'versionId': 1,
    'versioning': 1,
    'versions': 1,
    'website': 1,
    'response-content-type': 1,
    'response-content-language': 1,
    'response-expires': 1,
    'response-cache-control': 1,
    'response-content-disposition': 1,
    'response-content-encoding': 1
  },

  addAuthorization: function addAuthorization(credentials, date) {

    this.setDate(date);

    if (credentials.sessionToken)
      this.request.headers['X-Amz-Security-Token'] = credentials.sessionToken;

console.log(this.stringToSign());
    var signature = this.sign(credentials.secretAccessKey, this.stringToSign());
    var auth = 'AWS ' + credentials.accessKeyId + ':' + signature;

    /*jshint sub:true */
    this.request.headers['Authorization'] = auth;

  },

  stringToSign: function stringToSign() {
    /*jshint sub:true */

    var r = this.request;

    var parts = [];
    parts.push(r.method);
    parts.push(r.headers['Content-MD5'] || '');
    parts.push(r.headers['Content-Type'] || '');
    parts.push(r.headers['Date'] || '');
    var headers = this.canonicalizedAmzHeaders();
    if (headers) parts.push(headers);
    parts.push(this.canonicalizedResource());

    return parts.join('\n');

  },

  canonicalizedAmzHeaders: function canonicalizedAmzHeaders() {

    var amzHeaders = [];

    AWS.util.each(this.request.headers, function (name) {
      if (name.match(/^x-amz-/i))
        amzHeaders.push(name);
    });

    amzHeaders.sort(function (a, b) {
      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
    });

    var parts = [];
    AWS.util.arrayEach(amzHeaders, function (name) {
      parts.push(name.toLowerCase() + ':' + String(this.request.headers[name]));
    });

    return parts.join('\n');

  },

  canonicalizedResource: function canonicalizedResource() {

    var r = this.request;

    var parts = r.uri.split('?');
    var path = parts[0];
    var querystring = parts[1];

    var resource = '';

    if (r.virtualHostedBucket)
      resource += '/' + r.virtualHostedBucket;

    resource += path;

    if (querystring) {

      // collect a list of sub resources and query params that need to be signed
      var params = [];

      AWS.util.arrayEach.call(this, querystring.split('&'), function (param) {
        var name = param.split('=')[0];
        var value = param.split('=')[1];
        /*jshint undef:false */
        if (this.subResources[name]) {
          var param = { name: name }
          if (value !== undefined) param.value = unescape(value);
          params.push(param);
        }
      });

      params.sort(function (a, b) { return a.name < b.name });

      if (params.length) {

        querystring = [];
        AWS.util.arrayEach(params, function (param) {
          if (param.value !== undefined)
            querystring.push(param.name + '=' + param.value);
          else
            querystring.push(param.name);
        });

        resource += '?' + querystring.join('&');
      }

    }

    return resource;

  },

  sign: function sign(secret, string) {
    return AWS.util.crypto.hmac(secret, string, 'base64', 'sha1');
  },

  setDate: function setDate(date) {
    /*jshint sub:true */
    var r = this.request;
    if (date || (!r.headers['X-Amz-Date'] && !r.headers['Date']))
      r.headers['Date'] = AWS.util.date.rfc822(date);
  }

});
