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
AWS.SigV2 = inherit(AWS.RequestSigner, {

  constructor: function SigV2(request) {
    AWS.RequestSigner.call(this, request);
  },

  addAuthorization: function addAuthorization(credentials, date) {

    if (!date) date = AWS.util.date.getDate();

    var r = this.request;

    r.params.add('Timestamp', date.toISOString());
    r.params.add('SignatureVersion', '2');
    r.params.add('SignatureMethod', 'HmacSHA256');
    r.params.add('AWSAccessKeyId', credentials.accessKeyId);

    if (credentials.sessionToken)
      r.params.add('SecurityToken', credentials.sessionToken);

    r.params.add('Signature', this.signature(credentials));

    r.body = r.params.toString();
    r.headers['Content-Length'] = r.body.length;

  },

  signature: function signature(credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
  },

  stringToSign: function stringToSign() {

    var host = this.request.endpoint.host;
    var port = this.request.endpoint.port;
    if (port != 80 && port != 443)
      host += ':' + port;

    var parts = [];
    parts.push(this.request.method);
    parts.push(host.toLowerCase());
    parts.push(this.request.pathname());
    parts.push(this.request.params.toString());

    return parts.join('\n');

  }

});
