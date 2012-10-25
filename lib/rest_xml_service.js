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
require('./rest_service');
require('./xml_builder');
require('./xml_parser');
var inherit = AWS.util.inherit;

AWS.RESTXMLService = inherit(AWS.RESTService, {

  constructor: function RESTXMLService(config) {
    AWS.RESTService.call(this, config);
  },

  buildRequest: function buildRequest(method, params) {

    var _super = AWS.RESTService.prototype.buildRequest;
    var req = _super.call(this, method, params);
    this.populateBody(req, this.api.operations[method], params || {});
    return req;

  },

  populateBody: function populateBody(req, operation, params) {

    var input = operation.i || {};
    var xmlWrapper = input.n;
    var rules = input.m || {};
    var body = null;

    if (xmlWrapper) {

      // filter the params to only those that belong in the body
      var xmlParams = {};
      AWS.util.each(rules, function (name, rule) {
        if (!rule.l)
          xmlParams[name] = params[name];
      });

      var builder = new AWS.XMLBuilder(xmlWrapper, rules, this.api);
      body = builder.toXML(xmlParams);

    } else {
      AWS.util.each.call(this, rules, function (name, rule) {
        if (rule.l == 'body')
          body = params[name];
      });
    }

    req.body = body;

  },

  extractData: function extractData(httpResponse, method) {

    /*jshint sub:true */

    var _super = AWS.RESTService.prototype.extractData;
    var data = _super.call(this, httpResponse, method);

    var rules = this.api.operations[method].o || {};

    if (rules['Body'] && rules['Body']['t'] === 'bl') {
      data['Body'] = httpResponse.body;
    } else if (httpResponse.body) {
      var parser = new AWS.XMLParser(rules);
      AWS.util.update(data, parser.parse(httpResponse.body));
    }

    // extract request id
    data['RequestId'] = httpResponse.headers['x-amz-request-id'];

    return data;

  },

  extractError: function extractError(httpResponse) {
    var data = new AWS.XMLParser({}).parse(httpResponse.body);
    if (data.Code) {
      return {
        code: data.Code,
        message: data.Message
      };
    } else {
      return {
        code: httpResponse.statusCode,
        message: null
      };
    }
  }

});
