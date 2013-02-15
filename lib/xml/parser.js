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
var xml2js = require('xml2js');

/**
 * @api private
 */
AWS.XML.Parser = inherit({

  constructor: function XMLParser(rules) {
    this.rules = rules;
  },

  // options passed to xml2js parser
  options: {
    explicitCharkey: false, // undocumented
    trim: false,            // trim the leading/trailing whitespace from text nodes
    normalize: false,       // trim interior whitespace inside text nodes
    explicitRoot: false,    // return the root node in the resulting object?
    emptyTag: null,         // the default value for empty nodes
    explicitArray: true,    // always put child nodes in an array
    ignoreAttrs: false,     // ignore attributes, only create text nodes
    mergeAttrs: true,       // merge attributes and child elements
    validator: null         // a callable validator
  },

  parse: function parse(xml) {

    var result = null;
    var error = null;
    var parser = new xml2js.Parser(this.options);
    parser.parseString(xml, function (e, r) {
      error = e;
      result = r;
    });

    if (result) {
      delete result.xmlns;
      return this.parseStructure(result, this.rules);
    } else if (error) {
      throw AWS.util.error(error, {code: 'XMLParserError'});
    } else { // empty xml document
      return {};
    }

  },

  parseStructure: function parseStructure(structure, rules) {
    var data = {};
    AWS.util.each.call(this, structure, function (name, value) {
      var rule = rules[name] || {};
      data[rule.n || name] = this.parseMember(value, rule);
    });

    return data;
  },

  parseMap: function parseMap(map, rules) {
    var data = {};
    var keyRules = rules.k || {};
    var valueRules = rules.m || {};
    var keyName = keyRules.n || 'key';
    var valueName = valueRules.n || 'value';
    if (!rules.f) {
      map = map[0].entry;
    }
    AWS.util.arrayEach.call(this, map, function (entry) {
      var value = this.parseMember(entry[valueName], valueRules);
      data[entry[keyName][0]] = value;
    });
    return data;
  },

  parseList: function parseList(list, rules) {
    var data = [];
    var memberRules = rules.m || {};
    var memberName = memberRules.n || 'member';
    if (rules.f) { // flattened list
      AWS.util.arrayEach.call(this, list, function (value) {
        data.push(this.parseMember([value], memberRules));
      });
    } else { // nested list
      AWS.util.arrayEach.call(this, list, function (member) {
        AWS.util.arrayEach.call(this, member[memberName], function (value) {
          data.push(this.parseMember([value], memberRules));
        });
      });
    }
    return data;
  },

  parseMember: function parseMember(values, rules) {
    /*jshint maxcomplexity:20*/

    if (values[0] === null) {
      if (rules.t === 'o') return {};
      if (rules.t === 'a') return [];
      if (rules.t === 'm') return {};
      return null;
    }

    if (!rules.t) rules.t = (typeof values[0] === 'string' ? 's' : 'o');

    if (rules.t === 's') { // strings

      return values[0];

    } else if (rules.t === 'o') { // objects (structures)

      return this.parseStructure(values[0], rules.m || {});

    } else if (rules.t === 'm') { // objects (maps)

      return this.parseMap(values, rules);

    } else if (rules.t === 'a') { // list (array)

      return this.parseList(values, rules);

    } else if (rules.t === 'i') { // integers

      return parseInt(values[0], 10);

    } else if (rules.t === 'n') { // numbers

      return parseFloat(values[0]);

    } else if (rules.t === 't') { // timestamp

      return this.parseTimestamp(values[0]);

    } else if (rules.t === 'b') { // booleans

      return values[0] === 'true';

    } else {

      var msg = 'unhandled type: ' + rules.t;
      throw AWS.util.error(new Error(msg), {code: 'XMLParserError'});

    }

  },

  parseTimestamp: function parseTimestamp(value) {

    if (value.match(/^\d+$/)) { // unix timestamp

      return new Date(value * 1000);

    } else if (value.match(/^\d{4}/)) { // iso8601
      /*jshint maxcomplexity:20*/

      var parts = value.split(/-|:|\.|T|Z/);
      var date = new Date(parts[0], 0, 1);
      if (parts[1]) { date.setUTCMonth(parts[1] - 1); }
      if (parts[2]) { date.setUTCDate(parts[2]); }
      if (parts[3]) { date.setUTCHours(parts[3]); }
      if (parts[4]) { date.setUTCMinutes(parts[4]); }
      if (parts[5]) { date.setUTCSeconds(parts[5]); }
      if (parts[6]) { date.setUTCMilliseconds(Number('0.' + parts[6]) * 1000); }

      return date;

    } else if (value.match(/^\w{3},/)) { // rfc822

      return new Date(value);

    } else {

      throw AWS.util.error(
        new Error('unhandled timestamp format: ' + value),
        {code: 'TimestampParserError'});

    }

  }

});
