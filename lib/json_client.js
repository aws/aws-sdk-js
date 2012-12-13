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
 * @api private
 */
AWS.JSONClient = inherit(AWS.Client, {

  constructor: function JSONClient(config) {
    AWS.Client.call(this, config);
  },

  buildRequest: function buildRequest(operation, params) {

    var httpRequest = this.newHttpRequest();

    httpRequest.body = JSON.stringify(params || {});

    var target = this.api.targetPrefix + this.api.operations[operation].n;
    httpRequest.headers['Content-Type'] = 'application/x-amz-json-1.0';
    httpRequest.headers['Content-Length'] = httpRequest.body.length;
    httpRequest.headers['X-Amz-Target'] = target;

    return httpRequest;

  },

  extractData: function extractData(httpResponse) {
    return JSON.parse(httpResponse.body || '{}');
  },

  extractError: function extractError(httpResponse) {
    var error = {};
    if (httpResponse.body) {
      var e = JSON.parse(httpResponse.body);
      error.code = e.__type.split('#').pop();
      if (error.code === 'RequestEntityTooLarge') {
        error.message = 'Request body must be less than 1 MB';
      } else {
        error.message = (e.message || e.Message || null);
      }
    } else {
      error.code = httpResponse.statusCode;
      error.message = null;
    }
    return AWS.util.error(new Error(), error);
  }

});
