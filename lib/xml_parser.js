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
    emptyTag: {},           // the default value for empty nodes
    explicitArray: false,   // always put child nodes in an array
    ignoreAttrs: false,     // ignore attributes, only create text nodes
    mergeAttrs: true,       // merge attributes and child elements
    validator: null         // a callable validator
  },

  // Call this method with an xml string to parse.  The callback will be
  // called with the parsed javascript structure.
  parse: function parse(xml, callback) {
    var that = this;
    var parser = new xml2js.Parser(this.options);
    parser.parseString(xml, function(error, doc) {
      callback.call(this, that.parseDom(doc));
    });
  },

  parseDom: function parseDom(doc) {
    return doc;
  }

});
