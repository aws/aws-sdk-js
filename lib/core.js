var AWS = {
  VERSION: '0.1'
};

module.exports = AWS;

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
require('./service');
