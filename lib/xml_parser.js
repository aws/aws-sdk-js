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
    AWS.util.each.call(this, structure, function (name, rawValue) {

      var value = null;
      var memberRules = rules[name] || {};

      // xml2js converts all elements into lists of values.  We need to know
      // if the list of values represents a flattened list.  If not, we grab
      // the first element and parse it as a structure member.  If it is a
      // flattened list, then we have to parse each member in a loop.
      if (memberRules.t === 'fl') { // flattened list
        value = [];
        AWS.util.arrayEach.call(this, rawValue, function (v) {
          value.push(this.parseMember(v, memberRules.m));
        });
      } else { // any other structure member shape
        value = this.parseMember(rawValue[0], memberRules);
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
