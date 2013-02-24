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
    var input = req.client.api.operations[req.operation].input;

    // non-XML (single param) payload
    if (input.payload) {
      if (req.params[input.payload]) {
        req.httpRequest.body = req.params[input.payload];
      }
      return;
    }

    var rules = input.members;

    if (input.xml === undefined) {
      input.xml = null;
      AWS.util.each(rules, function(name, rule) {
        if (!rule.location) {
          input.xml = name;
          return AWS.util.abort;
        }
      });
    }

    if (input.xml) {
      if (rules[input.xml]) {
        rules = rules[input.xml].members;
      }
      // do not populate the body with XML if none of the XML
      // params are present
      AWS.util.each(rules, function (key) {
        if (req.params[key]) {
          var builder = new AWS.XML.Builder(input.xml, rules, req.client.api);
          req.httpRequest.body = builder.toXML(req.params);
          return AWS.util.abort;
        }
      });
    }

  }
};
