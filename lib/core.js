var AWS = {};
module.exports = AWS;
require('./util');

AWS.util.update(AWS, {
  VERSION: '0.1',

  RequestSigner: AWS.util.inherit({
    constructor: function RequestSigner(request) {
      this.request = request;
    }
  })
});

require('./config');
require('./sigv4');
require('./http');
require('./promise');
require('./service');
