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
require('../xml/builder');
require('./rest');

/**
 * @api private
 */
AWS.ServiceInterface.RestXml = {
  buildRequest: function buildRequest(req) {
    AWS.ServiceInterface.Rest.buildRequest(req);
    AWS.ServiceInterface.RestXml.populateBody(req);
  },

  extractError: function extractError(resp) {
    AWS.ServiceInterface.Rest.extractError(resp);

    var data = new AWS.XML.Parser({}).parse(resp.httpResponse.body.toString());
    if (data.Errors) data = data.Errors;
    if (data.Error) data = data.Error;
    if (data.Code) {
      resp.error = AWS.util.error(new Error(), {
        code: data.Code,
        message: data.Message
      });
    } else {
      resp.error = AWS.util.error(new Error(), {
        code: resp.httpResponse.statusCode,
        message: null
      });
    }
  },

  extractData: function extractData(resp) {
    AWS.ServiceInterface.Rest.extractData(resp);

    var req = resp.request;
    var httpResponse = resp.httpResponse;
    var operation = req.client.api.operations[req.operation];
    var rules = operation.o || {};

    if (operation.op) {
      var payload = httpResponse.body;
      if (rules[operation.op] && !rules[operation.op].s) {
        payload = payload.toString(); // payload is not binary
      }
      resp.data[operation.op] = payload;
    } else if (httpResponse.body.length > 0) {
      var parser = new AWS.XML.Parser(rules);
      AWS.util.update(resp.data, parser.parse(httpResponse.body.toString()));
    }

    // extract request id
    resp.data.RequestId = httpResponse.headers['x-amz-request-id'];
  },

  populateBody: function populateBody(req) {
    var operation = req.client.api.operations[req.operation];
    var input = operation.i || {};
    var rules = input.m || {};
    var body = null;
    var xmlWrapper = input.n;

    if (!xmlWrapper) {
      AWS.util.each(rules, function(name, rule) {
        if ((rule.t == 'o' && rule.l == 'body') || !rule.l) {
          xmlWrapper = name;
        }
      });
    }

    if (xmlWrapper) {
      var xmlRules = rules[xmlWrapper] ? (rules[xmlWrapper].m || {}) : rules;
      var xmlParams = req.params[xmlWrapper] || req.params;
      var hasBodyParams = false;

      AWS.util.each(xmlParams, function(key) {
        if (xmlRules[key]) {
          hasBodyParams = true;
          return AWS.util.abort;
        }
      });

      if (hasBodyParams) {
        var builder = new AWS.XML.Builder(xmlWrapper, xmlRules, req.client.api);
        body = builder.toXML(xmlParams);
      }
    } else {
      AWS.util.each.call(this, rules, function(name, rule) {
        if (rule.l == 'body')
          body = req.params[name];
      });
    }

    req.httpRequest.body = body;
  }
};
