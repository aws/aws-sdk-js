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
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.JSON = {};

/**
 * @api private
 */
AWS.JSON.Builder = inherit({

  constructor: function XMLBuilder(rules, options) {
    this.rules = rules;
    this.timestampFormat = options.timestampFormat;
  },

  toJSON: function toJSON(params) {
    return JSON.stringify(this.translate(this.rules, params));
  },

  translate: function translate(rules, value) {
    if (rules.type == 'structure') {

      // translate structures (hashes with pre-defined keys)
      var struct = {};
      AWS.util.each.call(this, value, function (memberName, memberValue) {
        var memberRules = rules[memberName] || {};
        struct[memberName] = this.translate(memberRules, memberValue);
      });
      return struct;

    } else if (rules.type == 'list') {

      // translate each member of the list
      var list = [];
      AWS.util.arrayEach.call(this, value, function (memberValue) {
        var memberRules = rules.members || {};
        list.push(this.translate(memberRules, memberValue));
      });
      return list;

    } else if (rules.type == 'map') {

      // translate maps (hashes with user supplied keys)
      var map = {};
      AWS.util.each.call(this, value, function (memberName, memberValue) {
        var memberRules = rules.members || {};
        map[memberName] = translate(memberRules, memberValue);
      });
      return map;

    } else if (rules.type == 'timestamp') {

      var timestampFormat = rules.format || this.timestampFormat;
      return AWS.util.date.format(value, timestampFormat);

    } else {

      // all other shapes
      return value;

    }
  }

});
