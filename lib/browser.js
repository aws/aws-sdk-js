require('./global');

var AWS = require('./core');

if (typeof window !== 'undefined') window.AWS = AWS;
if (typeof module !== 'undefined') module.exports = AWS;
if (typeof self !== 'undefined') self.AWS = AWS;

// Load default services
require('../clients/browser_default');