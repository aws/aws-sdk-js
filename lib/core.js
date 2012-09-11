var AWS = require('./core');

/**
 * @constructor
 */
AWS.RequestSigner = function RequestSigner(request) {
  this.request = request;
};

require('./config');
require('./sigv4');
require('./http');
require('./promise');
require('./util');

module.exports = AWS;
