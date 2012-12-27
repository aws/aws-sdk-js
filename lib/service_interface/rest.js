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

AWS.ServiceInterface.Rest = {
  buildRequest: function buildRequest(req, resp) {
    AWS.ServiceInterface.Rest.populateMethod(req, resp);
    AWS.ServiceInterface.Rest.populateURI(req, resp);
    AWS.ServiceInterface.Rest.populateHeaders(req, resp);
  },

  extractError: function extractError() {
  },

  extractData: function extractData(req, resp) {
    var data = resp.data;
    var r = resp.httpResponse;
    var operation = req.client.api.operations[req.operation];
    var rules = operation.o || {};

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
  },

  populateMethod: function populateMethod(req, resp) {
    resp.httpRequest.method = req.client.api.operations[req.operation].m;
  },

  populateURI: function populateURI(req, resp) {
    var operation = req.client.api.operations[req.operation];
    var uri = operation.u;
    var pathPattern = uri.split(/\?/)[0];
    var rules = (operation.i || {}).m || {};

    var escapePathParam = req.client.escapePathParam ||
      AWS.ServiceInterface.Rest.escapePathParam;
    var escapeQuerystringParam = req.client.escapeQuerystringParam ||
      AWS.ServiceInterface.Rest.escapeQuerystringParam;

    AWS.util.each.call(this, rules, function (name, rule) {
      if (rule.l == 'uri' && req.params[name]) {
        // if the value is being inserted into the path portion of the
        // URI, then we need to use a different (potentially) escaping
        // pattern, this is especially true for S3 path params like Key.
        var value = pathPattern.match('{' + name + '}') ?
          escapePathParam(req.params[name]) :
          escapeQuerystringParam(req.params[name]);

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

    resp.httpRequest.path = uri;
  },

  escapePathParam: function escapePathParam(value) {
    return AWS.util.uriEscape(String(value));
  },

  escapeQuerystringParam: function escapeQuerystringParam(value) {
    return AWS.util.uriEscape(String(value));
  },

  populateHeaders: function populateHeaders(req, resp) {
    var operation = req.client.api.operations[req.operation];
    var rules = (operation.i || {}).m || {};

    AWS.util.each.call(this, rules, function (name, rule) {
      if (rule.l === 'header' && req.params[name]) {
        if (rule.t === 'm') { // header map
          AWS.util.each(req.params[name], function (key, value) {
            resp.httRequest.headers[rule.n + key] = value;
          });
        } else {
          resp.httpRequest.headers[rule.n] = req.params[name];
        }
      }
    });

  }
};
