var AWS = require('./core');
var inherit = AWS.util.inherit;

AWS.QueryService = inherit(AWS.Service, {

  constructor: function QueryService(config) {
    AWS.Service.call(this, config);
  },

  buildRequest: function buildRequest(method, requestParams) {

    var httpRequest = this.newHttpRequest();

    httpRequest.headers['Content-Type'] =
      'application/x-www-form-urlencoded; charset=utf-8';

    httpRequest.params = new AWS.QueryParamList();
    httpRequest.params.add('Version', this.api.apiVersion);
    httpRequest.params.add('Action', this.api.operations[method].n);

    // convert the request parameters into a list of query params,
    // e.g. Deeply.NestedParam.0.Name=value
    var builder = new AWS.QueryParamBuilder(this.api.operations[method].i);
    builder.serialize(requestParams, function(name, value) {
      httpRequest.params.add(name, value);
    });

    return httpRequest;

  },

  parseResponse: function parseResponse(httpResponse) {
    return httpResponse.body;
  },

  extractError: function extractError(httpResponse) {
    if (httpResponse.statusCode < 300)
      return null;
    else
      return httpResponse.body;
  }

});

AWS.QueryParamList = inherit({

  constructor: function QueryParamList() {
    this.params = [];
  },

  add: function add(name, value) {
    this.params.push(new AWS.QueryParam(name, value));
  },

  sortedParams: function sortedParams() {
    return this.params.sort(function(p1, p2) {
      return p1.name < p2.name ? -1 : 1;
    });
  },

  toString: function toString() {
    var params = [];
    AWS.util.arrayEach(this.sortedParams(), function(param) {
      params.push(param.toString());
    });
    return params.join('&');
  }

});

AWS.QueryParam = inherit({

  constructor: function QueryParam(name, value) {
    this.name = name;
    this.value = value;
  },

  encode: function encode(str) {
    /*jshint undef:false */
    return escape(str).replace(/\+/g, '%20').replace(/%7E/g, '~');
  },

  toString: function toString() {
    return this.value ?
      this.encode(this.name) + '=' + this.encode(this.value) :
      this.encode(this.name);
  }

});

AWS.QueryParamBuilder = inherit({

  constructor: function QueryParamBuilder(rules, memberedLists) {
    this.rules = rules;
    this.memberedLists = memberedLists;
  },

  serialize: function serialize(params, fn) {
    this.serializeStructure('', params, this.rules, fn);
  },

  serializeStructure: function serializeStructure(prefix, struct, rules, fn) {
    var that = this;
    AWS.util.each(struct, function(name, member) {
      var n = rules[name].n || name; // handle member names for structures
      var memberName = prefix ? prefix + '.' + n : n;
      that.serializeMember(memberName, member, rules[name], fn);
    });
  },

  serializeList: function serializeList(name, list, rules, fn) {
    var that = this;
    AWS.util.arrayEach(list, function(v,n) {
      var suffix = '.' + (n + 1);
      if (that.memberedLists)
        suffix = '.' + (rules.n || 'member') + suffix;
      var memberName = name + suffix;
      that.serializeMember(memberName, v, rules, fn);
    });
  },

  serializeMember: function serializeMember(name, value, rules, fn) {
    if (rules.t === 'o')
      this.serializeStructure(name, value, rules.m, fn);
    else if (rules.t === 'a')
      this.serializeList(name, value, rules.m, fn);
    else
      fn.call(this, name, String(value));
  }

});
