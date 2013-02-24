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
require('./rest');
require('./json');

/**
 * @api private
 */
AWS.ServiceInterface.RestJson = {
  buildRequest: function buildRequest(req) {
    AWS.ServiceInterface.Rest.buildRequest(req);
    AWS.ServiceInterface.RestJson.populateBody(req);
  },

  extractError: function extractError(resp) {
    AWS.ServiceInterface.Json.extractError(resp);
  },

  extractData: function extractData(resp) {
    AWS.ServiceInterface.Rest.extractData(resp);

    var req = resp.request;
    var rules = req.client.api.operations[req.operation].output || {};
    if (rules.payload && rules.members[rules.payload]) {
      if (rules.members[rules.payload].streaming) {
        resp.data[rules.payload] = resp.httpResponse.body;
      } else {
        resp.data[rules.payload] = resp.httpResponse.body.toString();
      }
    } else {
      var data = resp.data;
      AWS.ServiceInterface.Json.extractData(resp);
      resp.data = AWS.util.merge(data, resp.data);
    }
  },

  populateBody: function populateBody(req) {
    var rules = req.client.api.operations[req.operation].input || {};
    if (rules.payload) {
      req.httpRequest.body = req.params[rules.payload];
    } else {
      var params = req.params[rules.root] || req.params || {};
      req.httpRequest.body = JSON.stringify(params);
    }
  }
};
