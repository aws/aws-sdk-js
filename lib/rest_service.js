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

AWS.RESTService = inherit(AWS.Service, {

  constructor: function RESTService(config) {
    AWS.Service.call(this, config);
  },

  buildRequest: function buildRequest(method, params) {

    // TODO : validate params

    var rules = this.api.operations[method];
    var httpRequest = this.newHttpRequest();
    httpRequest.method = rules.m;
    httpRequest.uri = this.buildURI(rules, params || {});
    AWS.util.update(httpRequest.headers, this.buildHeaders(rules, params || {}));
    return httpRequest;

  },

  buildURI: function buildURI(rules, params) {

    var uri = rules.u;

    AWS.util.each.call(this, rules.i || {}, function (name, rule) {
      if (rule.l == 'uri' && params[name])
        uri = uri.replace('{' + name + '}', params[name]);
    });

    var path = uri.split('?')[0];
    var querystring = uri.split('?')[1];

    if (querystring) {
      var parts = [];
      AWS.util.arrayEach(querystring.split('&'), function (part) {
        if (!part.match('{\\w+}')) parts.push(part);
      });
      return (parts.length > 0 ? path + '?' + parts.join('&') : path);
    } else {
      return path;
    }

  },

  buildHeaders: function buildHeaders(rules, params) {
    var headers = {};
    AWS.util.each.call(this, rules.i || {}, function (name, rule) {
      if (rule.l === 'header' && params[name]) {
        if (rule.t === 'm') { // header map
          AWS.util.each(params[name], function (key, value) {
            headers[rule.n + key] = value;
          });
        } else {
          headers[rule.n] = params[name];
        }
      }
    });
    return headers;
  }

});
