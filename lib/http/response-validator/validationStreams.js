var AWS = require('../../core');
var cryptoLib = AWS.util.crypto.lib;
var Buffer = AWS.util.Buffer;
var TransformStream = AWS.util.stream.Transform;
var CHECKSUM_BYTE_LEN = 16;

module.exports = {
  IntegrityCheckerStream: IntegrityCheckerStream,
  ContentLengthCheckerStream: ContentLengthCheckerStream,
}

require('util').inherits(IntegrityCheckerStream, TransformStream);
require('util').inherits(ContentLengthCheckerStream, TransformStream);

/**
 * Only runnable in Node
 * A transform stream to perform trailing md5 hash validation.
 * Whether to perform this validation is based on 'x-amz-tranfer-encoding'
 * response header.
 * @api private
 */
function IntegrityCheckerStream(transferEncoding, contentLength) {
  if (!(this instanceof TransformStream)) {
    return new TransformStream();
  }
  TransformStream.call(this);
  if (transferEncoding !== 'append-md5') {
    process.nextTick(function(stream, encoding) {
      stream.emit(
        'error',
        AWS.util.error(
          new Error('Cannot validate response header: ' + encoding + ', expect \'append-md5\''),
          {code: 'UnsupportedHashingAlgorithm'}
        )
      );
    }, this, transferEncoding);
  }
  this.hash = cryptoLib.createHash('md5');
  this.providedChecksum = typeof Buffer.allocUnsafe === 'function' ?
    Buffer.allocUnsafe(CHECKSUM_BYTE_LEN).fill(0) :
    new Buffer(CHECKSUM_BYTE_LEN);
  this.providedChecksumLen = 0;
  this.expectedDataLength = contentLength - CHECKSUM_BYTE_LEN;
  this.receivedLen = 0
}

/**
 * Override the flush function in Stream.Transform. It check whether the hashing is correct before
 * 'end' event emitted and after all data has been transformed and output.
 */
IntegrityCheckerStream.prototype._flush = function(callback) {
  if (
    this.providedChecksum.length !== CHECKSUM_BYTE_LEN ||
    this.hash.digest('base64') !== this.providedChecksum.toString('base64')
  ) {
    this.emit('error', AWS.util.error(
      new Error('Response fails integrity check.'),
      { code: 'ResponseChecksumMismatch' })
    );
  }
  callback();
}

/**
 * Override the transfer function in Stream.Transform. It basically slice the last 16 bytes
 * of the whole response as checksum and the first part as the real data that responsed.
 */
IntegrityCheckerStream.prototype._transform = function(chunk, encoding, callback) {
  if (chunk.length > 0) {
    if (this.receivedLen >= this.expectedDataLength) {
      this.providedChecksum.fill(
        chunk, this.providedChecksumLen, this.providedChecksumLen += chunk.length
      );
      chunk = null;
    } else if (this.receivedLen + chunk.length > this.expectedDataLength) {
      var newData = chunk.slice(0, this.expectedDataLength - this.receivedLen);
      var newChecksum = chunk.slice(this.expectedDataLength - this.receivedLen);
      newChecksum.copy(this.providedChecksum, this.providedChecksumLen);
      this.hash.update(newData);
      chunk = newData;
    } else {
      this.hash.update(chunk);
    }
    this.receivedLen += chunk ? chunk.length : 0;
  }
  callback(null, chunk);
}

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
    this.emit('error', AWS.util.error(
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
