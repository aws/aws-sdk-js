require('./node_loader');

var AWS = require('./core');
module.exports = AWS;

// Load all service classes
require('../clients/all');
