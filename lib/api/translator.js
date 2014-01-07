var AWS = require('../core');

/* jshint camelcase:false */

/* jshint -W079 */
var Buffer = require('buffer').Buffer;
/* jshint +W079 */

function Shape(rules, options) {
  if (!rules) {
    this.rules = { type: 'structure', members: {} };
    return;
  }

  this.options = options;
  this.rules = {};
  this.set_type(rules.type);
  AWS.util.each.call(this, rules, function (key, value) {
    if (key !== 'type') this['set_' + key](value);
  });

  if (this.rules.type === 'blob') {
    if (this.rules.payload || this.rules.streaming) {
      this.rules.type = 'binary';
    } else {
      this.rules.type = 'base64';
    }
  }
}

function InputShape(rules, options) {
  Shape.call(this, rules, options);
}

function OutputShape(rules, options) {
  Shape.call(this, rules, options);
}

Shape.prototype = {
  shapeClass: function() {
    if (this instanceof InputShape) return InputShape;
    if (this instanceof OutputShape) return OutputShape;
  },

  xmlname: function() {
    if (this.rules.flattened) {
      return this._xmlname || (this.rules.members || {}).name;
    } else {
      return this._xmlname;
    }
  },

  set_type: function(name) {
    var types = {
      structure: 'structure',
      list: 'list',
      map: 'map',
      boolean: 'boolean',
      timestamp: 'timestamp',
      character: 'string',
      double: 'float',
      float: 'float',
      integer: 'integer',
      long: 'integer',
      short: 'integer',
      string: 'string',
      blob: 'blob',
      biginteger: 'integer',
      bigdecimal: 'float'
    };
    if (name === 'string') { // omit string to reduce size
      /* jshint noempty:false */
    } else if (types[name]) {
      this.rules.type = types[name];
    } else {
      throw new Error('unhandled shape type ' + name);
    }
  },

  set_members: function(members) {
    var type = this.rules.type;
    var ShapeClass = this.shapeClass();
    if (type === 'structure') {
      this.rules.members = {};
      AWS.util.each.call(this, members, function(memberName, memberRules) {
        var shape = new ShapeClass(memberRules, this.options);
        if (this.swapNames(shape)) {
          shape.rules.name = memberName;
          memberName = shape.xmlname();
        }
        this.rules.members[memberName] = shape.rules;
      });
    } else if (type === 'list') {
      this.rules.members = new ShapeClass(members, this.options).rules;
    } else if (type === 'map') {
      this.rules.members = new ShapeClass(members, this.options).rules;
    } else if (type === 'blob') {
      this.rules.members = {};
    } else {
      throw new Error('unhandled complex shape `' + type + '\'');
    }
  },

  set_keys: function(rules) {
    var ShapeClass = this.shapeClass();
    this.rules.keys = new ShapeClass(rules, this.options).rules;
  },

  set_timestamp_format: function(format) {
    this.rules.format = format;
  },

  set_xmlname: function(name) {
    this._xmlname = name;
    this.rules.name = name;
  },

  set_location: function (location) {
    this.rules.location = (location === 'http_status' ? 'status' : location);
  },

  set_location_name: function(header_name) {
    this.rules.name = header_name;
  },

  set_payload: function(state) {
    if (state) this.rules.payload = true;
  },

  set_flattened: function(state) {
    if (state) this.rules.flattened = true;
  },

  set_streaming: function(state) {
    if (state) this.rules.streaming = true;
  },

  set_wrapper: function(state) {
    if (state) this.rules.wrapper = true;
  },

  set_xmlattribute: function(state) {
    if (state) this.rules.attribute = true;
  },

  set_xmlnamespace: function(ns) {
    this.rules.xmlns = ns;
  },

  set_documentation: function(docs) {
    if (this.options.documentation) this.rules.documentation = docs;
  },

  set_enum: function(values) {
    if (this.options.documentation) this.rules.enum = values;
  },

  set_shape_name: function() {},
  set_box: function() {},
  set_sensitive: function() {}
};

InputShape.prototype = AWS.util.merge(Shape.prototype, {
  swapNames: function() { return false; },

  set_required: function() { this.rules.required = true; },
  set_member_order: function(order) { this.rules.order = order; },

  set_min_length: function(min) {
    if (this.options.documentation) this.rules.min_length = min;
  },

  set_max_length: function(max) {
    if (this.options.documentation) this.rules.max_length = max;
  },

  set_pattern: function(pattern) {
    if (this.options.documentation) this.rules.pattern = pattern;
  }
});

OutputShape.prototype = AWS.util.merge(Shape.prototype, {
  swapNames: function(shape) {
    if (this.options.documentation) return false;
    return shape.xmlname() && ['query', 'rest-xml'].indexOf(this.options.type) >= 0;
  },

  set_required: function() {},
  set_member_order: function() {},
  set_min_length: function() {},
  set_max_length: function() {},
  set_pattern: function() {}
});

function Operation(rules, options) {
  var origRules = rules;

  function normalizeInputs() {
    if (options.type.indexOf('rest') < 0) return;

    var xml = options.type.indexOf('xml') >= 0;
    var payload = false;
    var wrapper = false;

    var hasPayload = false;
    AWS.util.each(rules.input.members, function (name, rule) {
      if (rule.payload) {
        hasPayload = true;
        payload = name;
        delete rule.payload;
        return AWS.util.abort;
      }
    });

    if (!hasPayload) {
      var list = [];
      AWS.util.each(rules.input.members, function (name, rule) {
        if (!rule.location) { list.push(name); }
      });

      if (list.length > 0) {
        payload = list;
        if (xml) wrapper = origRules.input.shape_name;
      }
    }

    if (wrapper) rules.input = AWS.util.merge({wrapper: wrapper}, rules.input);
    if (payload) rules.input = AWS.util.merge({payload: payload}, rules.input);
  }

  function normalizeOutputs() {
    var moveUp = null;

    AWS.util.each(rules.output.members, function(memberName, rule) {
      if (rule.payload && rule.type === 'structure') {
        delete rule.payload;
        moveUp = memberName;
      }
      else if (rule.payload || rule.streaming) {
        delete rule.payload;
        rules.output.payload = memberName;
      }
    });

    if (moveUp) {
      var rule = rules.output.members[moveUp];
      delete rules.output.members[moveUp];
      AWS.util.update(rules.output.members, rule.members);
    }
  }

  rules = AWS.util.copy(rules);

  rules.input = new InputShape(rules.input, options).rules;
  rules.output = new OutputShape(rules.output, options).rules;
  rules.input.members = rules.input.members || {};
  rules.output.members = rules.output.members || {};

  normalizeInputs();
  normalizeOutputs();

  if (rules.http) delete rules.http.response_code;
  if (options.documentation) {
    rules.errors = rules.errors.map(function(e) { return e.shape_name; });
  } else {
    delete rules.errors;
    delete rules.documentation;
    delete rules.documentation_url;
    delete rules.response_code;
  }

  return rules;
}

function Translator(api, options) {
  function inflect(key) {
    return key.replace(/_(\w)/g, function (_, m) { return m.toUpperCase(); });
  }

  function setTranslatedKeys() {
    var list = Object.keys(api);
    list.push('timestamp_format');
    list.sort().forEach(function (key) { translate[inflect(key)] = api[key]; });
    translate.timestampFormat = translate.timestampFormat || 'iso8601';
    if (translate.jsonVersion) translate.jsonVersion = translate.jsonVersion.toString();
    if (translate.jsonVersion === '1') translate.jsonVersion = '1.0';
    if (!options.documentation) delete translate.documentation;
    if (!translate.resultWrapped) delete translate.resultWrapped;
    if (!api.type.match(/xml/)) delete translate.xmlnamespace;
    delete translate.operations;
    delete translate.pagination;
    delete translate.waiters;
    delete translate.type;
  }

  function setOperations() {
    translate.operations = {};
    AWS.util.each(api.operations, function (key, value) {
      var methodName = key[0].toLowerCase() + key.substr(1);
      methodName = methodName.replace(/\d{4}_\d{2}_\d{2}$/, '');
      var operation = new Operation(value, options);
      translate.operations[methodName] = operation;
    });
  }

  function setPagination() {
    if (api.pagination) {
      translate.pagination = {};
      AWS.util.each(api.pagination, function (key, value) {
        var object = {};
        AWS.util.each(value, function (k2, v2) { object[inflect(k2)] = v2; });
        translate.pagination[key[0].toLowerCase() + key.substr(1)] = object;
      });
    }
  }

  if (typeof api === 'string' || Buffer.isBuffer(api)) {
    api = JSON.parse(api);
  }

  options = options || {};
  options.type = api.type;

  var translate = {};
  translate.format = api.type;

  setTranslatedKeys();
  setOperations();
  setPagination();

  return translate;
}

AWS.API = { Translator: Translator };

module.exports = Translator;
