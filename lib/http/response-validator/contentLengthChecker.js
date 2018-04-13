var AWS = require('../../core');
var TransformStream = AWS.util.stream.Transform;
module.exports = ContentLengthCheckerStream;
require('util').inherits(ContentLengthCheckerStream, TransformStream);

/**
 * @Only runnable in Node
 * A stream passthrough the data and calculate the length of the stream. At the end
 * of stream the stream will confirm the actual received data length is equal to
 * content-length header.
 * @api private
 */
function ContentLengthCheckerStream(contentLength) {
    if (!(this instanceof TransformStream)) {
      return new TransformStream();
    }
    TransformStream.call(this);
    this.expectedLen = contentLength;
    this.receivedLen = 0;
  }

  /**
   * Override the flush function in Stream.Transform. It check whether received
   * content length equals content-length header before 'end' event emitted and
   * after all data has been transformed and output.
   * @api private
   */
  ContentLengthCheckerStream.prototype._flush = function (callback) {
    if (this.receivedLen !== this.expectedLen) {
      callback( AWS.util.error(
        new Error('Stream content length mismatch. Received ' +
          this.receivedLen + ' of ' + this.expectedLen + ' bytes.'),
        { code: 'StreamContentLengthMismatch' })
      )
    }
    callback();
  }

  /**
   * Override the transfer function in Stream.Transform. It passes through the data and
   * comput the content length;
   */
  ContentLengthCheckerStream.prototype._transform = function (chunk, encoding, callback) {
    if (chunk.length > 0) {
      this.receivedLen += chunk.length;
    }
    callback(null, chunk);
  }
