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
var builder = require('xmlbuilder');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.XML.Builder = inherit({

  constructor: function XMLBuilder(root, rules, options) {
    this.root = root;
    this.rules = rules;
    this.xmlns = options.xmlNamespace;
    this.timestampFormat = options.timestampFormat;
  },

  toXML: function buildXML(params) {
    var xml = builder.create(this.root);
    if (this.xmlns) xml.att('xmlns', this.xmlns);
    this.serializeStructure(this.rules, params, xml);
    return xml.root().toString();
  },

  serializeStructure: function serializeStructure(rules, params, xml) {
    AWS.util.each.call(this, rules || {}, function (memberName, memberRule) {
      if (params[memberName] !== undefined) {
        this.serializeMember(memberName, memberRule, params[memberName], xml);
      }
    });
  },

  serializeList: function serializeList(name, rules, list, xml) {
    if (rules.f) {
      AWS.util.arrayEach.call(this, list, function (value) {
        this.serializeMember(rules.n || name, rules.m, value, xml);
      });
    } else {
      xml = xml.ele(name);
      AWS.util.arrayEach.call(this, list, function (value) {
        var memberName = rules.m.n || 'member';
        this.serializeMember(memberName, rules.m, value, xml);
      });
    }
  },

  serializeMember: function serializeMember(memberName, rules, params, xml) {
    var name = memberName;
    if (rules.t === 'o') { // structure (object)
      this.serializeStructure(rules.m, params, xml.ele(name));
    } else if (rules.t === 'a') { // list (array)
      this.serializeList(name, rules, params, xml);
    } else if (rules.t === 't') { // timestamp
      xml.ele(name, String(AWS.util.date[this.timestampFormat](params)));
    } else {
      xml.ele(name, String(params));
    }
  }

});
