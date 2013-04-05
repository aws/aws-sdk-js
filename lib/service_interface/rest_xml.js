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
    var operation = req.service.api.operations[req.operation];
    var rules = operation.output.members;

    var output = operation.output;
    var payload = output.payload;

    if (payload) {
      if (rules[payload].streaming) {
        resp.data[payload] = httpResponse.body;
      } else {
        resp.data[payload] = httpResponse.body.toString();
      }
    } else if (httpResponse.body.length > 0) {
      var parser = new AWS.XML.Parser(operation.output || {});
      AWS.util.update(resp.data, parser.parse(httpResponse.body.toString()));
    }

    // extract request id
    resp.data.RequestId = httpResponse.headers['x-amz-request-id'] ||
                          httpResponse.headers['x-amzn-requestid'];
  },

  populateBody: function populateBody(req) {
    /*jshint maxcomplexity:10*/
    var input = req.service.api.operations[req.operation].input;
    var payload = input.payload;
    var rules = {};
    var builder = null;
    var params = req.params;

    if (typeof payload === 'string') {

      rules = input.members[payload];
      params = params[payload];

      if (params === undefined) return;

      if (rules.type === 'structure') {
        builder = new AWS.XML.Builder(payload, rules.members, req.service.api);
        req.httpRequest.body = builder.toXML(params);
      } else {
        // non-xml paylaod
        req.httpRequest.body = params;
      }

    } else if (payload) {

      AWS.util.arrayEach(payload, function (member) {
        rules[member] = input.members[member];
      });

      builder = new AWS.XML.Builder(input.wrapper, rules, req.service.api);
      req.httpRequest.body = builder.toXML(params);

    }

  }
};
