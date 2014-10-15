var fs = require('fs');
var Transform = require('stream').Transform;
var Builder = require('./browser-builder');

module.exports = function(file) {
  var stream = new Transform();
  stream._transform = function(data, encoding, callback) {
    callback(null, data);
  };

  if (file.match(/\/lib\/browser\.js$/)) {
    var builder = new Builder().addServices(process.env.AWS_SERVICES);
    stream.push(new Buffer(builder.buildStrategy.license));
    stream._flush = function(callback) {
      stream.push(new Buffer(builder.serviceCode.join('\n')));
      callback();
    };
  }

  return stream;
};
