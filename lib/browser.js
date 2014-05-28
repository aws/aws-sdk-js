window.AWS = module.exports = require('./core');

// Load the DOMParser XML parser
window.AWS.XML.Parser = require('./xml/browser_parser');

// Load the XHR HttpClient
require('./http/xhr');
