var AWS = require('../../core');
var cryptoLib = AWS.util.crypto.lib;
var Buffer = AWS.util.Buffer;
var TransformStream = AWS.util.stream.Transform;
var CHECKSUM_BYTE_LEN = 16;

module.exports = IntegrityCheckerStream;
require('util').inherits(IntegrityCheckerStream, TransformStream);

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
    this.incompleteConstruction = true;//flag not to take up resources
    var stream = this;
    process.nextTick(function() {
      stream.emit(
        'error',
        AWS.util.error(
          new Error('Cannot validate response header: ' + transferEncoding + ', expected \'append-md5\''),
          {code: 'UnsupportedHashingAlgorithm'}
        )
      );
    });
  } else {
    this.hash = cryptoLib.createHash('md5');
    if (typeof Buffer.alloc === 'function') {
      this.providedChecksum = Buffer.alloc(CHECKSUM_BYTE_LEN);
    } else {
      this.providedChecksum = new Buffer(CHECKSUM_BYTE_LEN);
      this.providedChecksum.fill(0);
    }
    this.providedChecksumLen = 0;
    this.expectedDataLength = contentLength - CHECKSUM_BYTE_LEN;
    this.receivedLen = 0
  }
}

/**
 * Override the flush function in Stream.Transform. It check whether the hashing is correct before
 * 'end' event emitted and after all data has been transformed and output.
 */
IntegrityCheckerStream.prototype._flush = function(callback) {
  if (this.incompleteConstruction) {callback(); return;}
  if (
    this.providedChecksum.length !== CHECKSUM_BYTE_LEN ||
    this.hash.digest('base64') !== this.providedChecksum.toString('base64')
  ) {
    callback( AWS.util.error(
      new Error('Response fails integrity check.'),
      { code: 'ResponseChecksumMismatch' })
    )
  } else {
    callback();
  }
}

/**
 * Override the transfer function in Stream.Transform. It basically slice the last 16 bytes
 * of the whole response as checksum and the first part as the real data that responsed.
 */
IntegrityCheckerStream.prototype._transform = function(chunk, encoding, callback) {
  if (this.incompleteConstruction) {
    callback(null, chunk); //pass through when resources are undefined
    return;
  }
  if (chunk.length > 0) {
    if (this.receivedLen >= this.expectedDataLength) {
      for (var i = 0; i < chunk.length; i++) {
        this.providedChecksum[this.providedChecksumLen + i] = chunk[i];
      }
      this.providedChecksumLen += chunk.length
      chunk = null;
    } else if (this.receivedLen + chunk.length > this.expectedDataLength) {
      var dataLengthInChunk =  this.expectedDataLength - this.receivedLen;
      var newData = chunk.slice(0, dataLengthInChunk);
      var newChecksum = chunk.slice(dataLengthInChunk);
      newChecksum.copy(this.providedChecksum, this.providedChecksumLen);
      this.providedChecksumLen += (chunk.length - dataLengthInChunk);
      this.hash.update(newData);
      chunk = newData;
    } else {
      this.hash.update(chunk);
    }
    this.receivedLen += chunk ? chunk.length : 0;
  }
  callback(null, chunk);
}
