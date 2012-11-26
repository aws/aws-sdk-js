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
AWS.RESTService = inherit(AWS.Service, {

  constructor: function RESTService(config) {
    AWS.Service.call(this, config);
  },

  buildRequest: function buildRequest(method, params) {

    if (!params) params = {};

    var operation = this.api.operations[method];

    var req = this.newHttpRequest();

    this.populateMethod(req, operation);
    this.populateURI(req, operation, params);
    this.populateHeaders(req, operation, params);

    return req;

  },

  populateMethod: function populateMethod(req, operation) {
    req.method = operation.m;
  },

  populateURI: function populateURI(req, operation, params) {

    var uri = operation.u;
    var pathPattern = uri.split(/\?/)[0];

    var rules = (operation.i || {}).m || {};

    AWS.util.each.call(this, rules, function (name, rule) {

      if (rule.l == 'uri' && params[name]) {

        // if the value is being inserted into the path portion of the
        // URI, then we need to use a different (potentially) escaping
        // pattern, this is especially true for S3 path params like Key.
        var value = pathPattern.match('{' + name + '}') ?
          this.escapePathParam(params[name]) :
          this.escapeQuerystringParam(params[name]);

        uri = uri.replace('{' + name + '}', value);

      }

    });

    var path = uri.split('?')[0];
    var querystring = uri.split('?')[1];

    if (querystring) {
      var parts = [];
      AWS.util.arrayEach(querystring.split('&'), function (part) {
        if (!part.match('{\\w+}')) parts.push(part);
      });
      uri = (parts.length > 0 ? path + '?' + parts.join('&') : path);
    } else {
      uri = path;
    }

    req.path = uri;

  },

  escapePathParam: function escapePathParam(value) {
    return AWS.util.uriEscape(String(value));
  },

  escapeQuerystringParam: function escapeQuerystringParam(value) {
    return AWS.util.uriEscape(String(value));
  },

  populateHeaders: function populateHeaders(req, operation, params) {

    var rules = (operation.i || {}).m || {};

    AWS.util.each.call(this, rules, function (name, rule) {
      if (rule.l === 'header' && params[name]) {
        if (rule.t === 'm') { // header map
          AWS.util.each(params[name], function (key, value) {
            req.headers[rule.n + key] = value;
          });
        } else {
          req.headers[rule.n] = params[name];
        }
      }
    });

  },

  extractData: function extractData(httpResponse, method) {

    var data = {};

    var r = httpResponse;

    var rules = this.api.operations[method].o || {};

    // normalize headers names to lower-cased keys for matching
    var headers = {};
    AWS.util.each(r.headers, function (k, v) {
      headers[k.toLowerCase()] = v;
    });

    AWS.util.each(rules, function (name, rule) {
      if (rule.l === 'header') {
        var header = (rule.n || name).toLowerCase();
        if (headers[header] !== undefined) {
          data[name] = headers[header];
        }
      }
      if (rule.l === 'status') {
        data[name] = parseInt(r.statusCode, 10);
      }
    });

    return data;

  }

});
