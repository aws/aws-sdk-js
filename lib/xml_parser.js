var AWS = require('./core');
var inherit = AWS.util.inherit;
var xml2js = require('xml2js');

AWS.XMLParser = inherit({

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

  // Call this method with an xml string to parse.  The callback will be
  // called with the parsed javascript structure.  Throws an error if the
  // XML can not be parsed.
  parse: function parse(xml, callback) {
    var that = this;
    var parser = new xml2js.Parser(this.options);
    parser.parseString(xml, function (error, doc) {
      if (error)
        throw { code: 'AWS.XMLParser.Error', message: error.message };
      else
        callback.call(this, that.parseStructure(doc, that.rules));
    });
  },

  parseStructure: function parseStructure(structure, rules) {
    var that = this;
    var data = {};
    AWS.util.each(structure, function (name, rawValue) {

      var value = null;
      var memberRules = rules[name] || {};
      if (memberRules.t === 'f') { // flattened list
        value = rawValue;
      } else {
        value = that.parseMember(rawValue[0], memberRules);
      }
      data[memberRules.n || name] = value;

    });
    return data;
  },

  parseList: function parseList(list, rules) {

    var memberRules = rules.m || {};
    var memberName = memberRules.n || 'member';

    var data = [];
    AWS.util.arrayEach.call(this, list[memberName], function (member) {
      data.push(this.parseMember(member, memberRules));
    });
    return data;

  },

  parseMember: function parseMember(member, rules) {
    /*jshint maxcomplexity:10*/

    if (member === null) return null;

    if (!rules.t) rules.t = (typeof member === 'string' ? 's' : 'o');

    if (rules.t === 's') { // strings

      return member;

    } else if (rules.t === 'o') { // objects (structures)

      return this.parseStructure(member, rules.m || {});

    } else if (rules.t === 'a') { // list (array)

      return this.parseList(member, rules);

    } else if (rules.t === 'i') { // integers

      return parseInt(member, 10);

    } else if (rules.t === 'n') { // numbers

      return parseFloat(member);

    } else if (rules.t === 'b') { // booleans

      return member === 'true';

    } else {

      var msg = 'unhandled type: ' + rules.t;
      throw { code: 'AWS.XMLParser.Error', message: msg };

    }

  }

});
