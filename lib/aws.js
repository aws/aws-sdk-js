require('./node_loader');

var AWS = require('./core');

// Load all service classes
require('../clients/all');
require('./maintenance_mode_message');

/**
 * @api private
 */
module.exports = AWS;
