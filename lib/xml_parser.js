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
    var self = this;
    var parser = new xml2js.Parser(this.options);
    parser.parseString(xml, function (error, doc) {
      if (error)
        throw { code: 'AWS.XMLParser.Error', message: error.message };
      else {
        if (doc) delete doc.xmlns;
        callback.call(this, self.parseStructure(doc, self.rules));
      }
    });
  },

  parseStructure: function parseStructure(structure, rules) {
    var data = {};
    AWS.util.each.call(this, structure, function (name, value) {
      var rule = rules[name] || {};
      data[rule.n || name] = this.parseMember(value, rule)
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
        AWS.util.arrayEach.call(this, member[memberName], function(value) {
          data.push(this.parseMember([value], memberRules));
        });
      });
    }
    return data;
  },

  parseMember: function parseMember(member, rules) {
    /*jshint maxcomplexity:10*/

    if (member[0] === null) return null;

    if (!rules.t) rules.t = (typeof member[0] === 'string' ? 's' : 'o');

    if (rules.t === 's') { // strings

      return member[0];

    } else if (rules.t === 'o') { // objects (structures)

      return this.parseStructure(member[0], rules.m || {});

    } else if (rules.t === 'a') { // list (array)

      return this.parseList(member, rules);

    } else if (rules.t === 'i') { // integers

      return parseInt(member[0], 10);

    } else if (rules.t === 'n') { // numbers

      return parseFloat(member[0]);

    } else if (rules.t === 'b') { // booleans

      return member[0] === 'true';

    } else {

      var msg = 'unhandled type: ' + rules.t;
      throw { code: 'AWS.XMLParser.Error', message: msg };

    }

  }

});
