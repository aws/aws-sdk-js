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
var libxml = require("libxmljs");
require('./rest_service');
var inherit = AWS.util.inherit;

AWS.RESTXMLService = inherit(AWS.RESTService, {

  constructor: function RESTXMLService(config) {
    AWS.RESTService.call(this, config);
  },

  buildRequest: function buildRequest(method, params) {
    var _super = AWS.RESTService.prototype.buildRequest;
    var httpRequest = _super.call(this, method, params);
    httpRequest.body = this.buildBody(this.api.operations[method], params || {});
    return httpRequest;
  },

  buildBody: function buildBody(rules, params) {
    var body = null;
    AWS.util.each.call(this, rules.i || {}, function (name, rule) {
      if (rule.l === 'body') {
        if (rule.t === 'o') {
          body = this.buildXML(name, rule, params);
        } else {
          body = params[name];
        }
      }
    });
    return body;
  },

  buildXML: function buildXML(name, rules, input) {
    var xml = new libxml.Document();
    this.serializeStructure(name, rules, input, xml, this.api.xmlNamespace);
    return xml.root().toString();
  },

  serializeStructure: function serializeStructure(name, rules, input, xml, xmlns) {

    // start structure element
    xml = xml.node(name);

    if (xmlns) xml.attr({ xmlns: xmlns });

    AWS.util.each.call(this, rules.m, function (memberName, memberRule) {
      if (input[memberName] !== undefined) {
        this.serializeMember(memberName, memberRule, input[memberName], xml);
      }
    });

    // close structure element
    xml = xml.parent();

  },

  serializeMember: function serializeMember(memberName, rules, input, xml) {

    var name = memberName;

    if (rules.t === 'o') {
      this.serializeStructure(name, rules, input, xml);
    } else {
      xml.node(name, String(input));
    }
  }

});
