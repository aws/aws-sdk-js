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

require('../xml/parser');

/**
 * @api private
 */
AWS.ServiceInterface.Query = {
  buildRequest: function buildRequest(req) {
    var operation = req.client.api.operations[req.operation];
    var httpRequest = req.httpRequest;
    httpRequest.headers['Content-Type'] =
      'application/x-www-form-urlencoded; charset=utf-8';
    httpRequest.params = new AWS.QueryParamList();
    httpRequest.params.add('Version', req.client.api.apiVersion);
    httpRequest.params.add('Action', operation.name);

    // convert the request parameters into a list of query params,
    // e.g. Deeply.NestedParam.0.Name=value
    var rules = operation.input;
    if (rules) rules = rules.members;
    var builder = new AWS.QueryParamSerializer(rules);
    builder.serialize(req.params, function(name, value) {
      httpRequest.params.add(name, value);
    });
    httpRequest.body = httpRequest.params.toString();
  },

  extractError: function extractError(resp) {
    var data, body = resp.httpResponse.body.toString();
    if (body.match('<UnknownOperationException')) {
      data = {
        Code: 'UnknownOperation',
        Message: 'Unknown operation ' + resp.request.operation
      };
    } else {
      data = new AWS.XML.Parser({}).parse(body);
    }

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
    var req = resp.request;
    var operation = req.client.api.operations[req.operation];
    var wrapperKey = operation.name + 'Result';
    var rules = operation.output || {};

    if (req.client.api.resultWrapped) {
      var tmp = {
        type: 'structure',
        members: {}
      };
      tmp.members[wrapperKey] = rules;
      rules = tmp;
    }

    var parser = new AWS.XML.Parser(rules);
    var data = parser.parse(resp.httpResponse.body.toString());

    if (req.client.api.resultWrapped) {
      if (data[wrapperKey]) {
        AWS.util.update(data, data[wrapperKey]);
        delete data[wrapperKey];
      }
    }

    AWS.util.each((operation.output || {}).members || {}, function (memberName, memberRules) {
      if (memberRules.wrapper && data[memberName]) {
        AWS.util.update(data, data[memberName]);
        delete data[memberName];
      }
    });

    resp.data = data;
  }
};

/**
 * @api private
 */
AWS.QueryParamList = inherit({

  constructor: function QueryParamList() {
    this.params = [];
  },

  add: function add(name, value) {
    this.params.push(new AWS.QueryParam(name, value));
  },

  sortedParams: function sortedParams() {
    return this.params.sort(function (p1, p2) {
      return p1.name < p2.name ? -1 : 1;
    });
  },

  toString: function toString() {
    var params = [];
    AWS.util.arrayEach(this.sortedParams(), function (param) {
      params.push(param.toString());
    });
    return params.join('&');
  },

  getValue: function getValue(name) {
    for (var i = 0; i < this.params.length; i++) {
      if (this.params[i].name === name)
        return this.params[i].value;
    }
    return null;
  }

});

/**
 * @api private
 */
AWS.QueryParam = inherit({

  constructor: function QueryParam(name, value) {
    this.name = name;
    this.value = value;
  },

  encode: function encode(string) {
    return AWS.util.uriEscape(string);
  },

  toString: function toString() {
    return this.value !== undefined && this.value !== null ?
      this.encode(this.name) + '=' + this.encode(this.value) :
      this.encode(this.name);
  }

});

/**
 * @api private
 */
AWS.QueryParamSerializer = inherit({

  constructor: function QueryParamSerializer(rules) {
    this.rules = rules;
  },

  serialize: function serialize(params, fn) {
    this.serializeStructure('', params, this.rules, fn);
  },

  serializeStructure: function serializeStructure(prefix, struct, rules, fn) {
    var that = this;
    AWS.util.each(struct, function (name, member) {
      var n = rules[name].name || name;
      var memberName = prefix ? prefix + '.' + n : n;
      that.serializeMember(memberName, member, rules[name], fn);
    });
  },

  serializeMap: function serialzeMap(name, map, rules, fn) {
    var i = 1;
    var that = this;
    AWS.util.each(map, function (key, value) {
      var position = '.' + (i++) + '.';
      var keyName = position + (rules.keys.name || 'key');
      var valueName = position + (rules.members.name || 'value');
      that.serializeMember(name + keyName, key, rules.keys, fn);
      that.serializeMember(name + valueName, value, rules.members, fn);
    });
  },

  serializeList: function serializeList(name, list, rules, fn) {
    var that = this;
    var memberRules = rules.members || {};
    AWS.util.arrayEach(list, function (v, n) {
      var suffix = '.' + (n + 1);
      if (rules.flattened) {
        if (memberRules.name) {
          var parts = name.split('.');
          parts.pop();
          parts.push(memberRules.name);
          name = parts.join('.');
        }
      } else {
        suffix = '.member' + suffix;
      }
      that.serializeMember(name + suffix, v, memberRules, fn);
    });
  },

  serializeMember: function serializeMember(name, value, rules, fn) {
    if (rules.type === 'structure')
      this.serializeStructure(name, value, rules.members, fn);
    else if (rules.type === 'list')
      this.serializeList(name, value, rules, fn);
    else if (rules.type === 'map')
      this.serializeMap(name, value, rules, fn);
    else
      fn.call(this, name, String(value));
  }

});
