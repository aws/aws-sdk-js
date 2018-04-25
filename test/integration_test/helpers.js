(function() {
  global.expect = require('chai').expect;
  module.exports = {
    bucketBaseName: 'aws-sdk-js-integration',
    AWS: require('../../lib/aws'),
    createBuffer: function(size) {
      var match;
      var buffer;
      if (match = size.match(/(\d+)KB/)) {
        buffer = new Buffer(parseInt(match[1]) * 1024);
      } else if (match = size.match(/(\d+)MB/)) {
        buffer = new Buffer(parseInt(match[1]) * 1024 * 1024);
      } else {
        switch (size) {
          case 'empty': buffer = new Buffer(0); break;
          case 'small': buffer = new Buffer(1024 * 1024); break;
          case 'large': buffer = new Buffer(1024 * 1024 * 20); break;
          default: return new Buffer(1024 * 1024);
        }
      }
      buffer.fill('x');
      return buffer;
    }
  }
})()
