// Load core-only
var AWS = require('./aws_core_loader');

// Load all service classes
require('../clients/all');

/**
 * @api private
 */
module.exports = AWS;
