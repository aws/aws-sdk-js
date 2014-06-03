var AWS = require('./core');

// Load the DOMParser XML parser
AWS.XML.Parser = require('./xml/browser_parser');

// Load the XHR HttpClient
require('./http/xhr');

if (typeof window !== 'undefined') window.AWS = AWS;
