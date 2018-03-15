var AWS = require('../../core');
var cryptoLib = AWS.util.crypto.lib;
var Buffer = AWS.util.Buffer;
var CHECKSUM_BYTE_LEN = 16;

module.exports = {
    //attachIntegrityChecker: attachLengthChecker,
    attachLengthChecker: attachLengthChecker,
}
//TODO: may not support integrity check in node version < 0.9.4
/* 
function attachIntegrityChecker(stream, transferEncoding, contentLength) {
	var hash = cryptoLib.createHash('md5');
	var providedChecksum = typeof Buffer.allocUnsafe === 'function' ?
		Buffer.allocUnsafe(CHECKSUM_BYTE_LEN).fill(0) :
		new Buffer(CHECKSUM_BYTE_LEN);
	var providedChecksumLen = 0;
	var expectedDataLength = contentLength - CHECKSUM_BYTE_LEN;
	var receivedLen = 0;
	//a hack to IncomingMessage stream to chop off trailing checksum
	stream.prototype._emitData = function(data) {
		if (data && data.length > 0) {
			if (receivedLen >= expectedDataLength) {
				providedChecksum.fill(data, providedChecksumLen, providedChecksumLen += data.length);
				data = null;
			} else if (receivedLen + data.length > expectedDataLength) {
				var newData = data.slice(0, expectedDataLength - receivedLen);
				var newChecksum = data.slice(expectedDataLength - receivedLen);
				providedChecksum.fill(newChecksum, providedChecksumLen, providedChecksumLen += newChecksum.length);
				hash.update(newData);
				data = newData;
			} else {
				hash.update(data);
			}
		}
		return stream.prototype._emitData.apply(this, arguments)
	}

	stream.on('end', function() {
		if (providedChecksumLen !== CHECKSUM_BYTE_LEN) {
			stream.emit(
				'error',
				AWS.util.error(
					new Error('Cannot validate response integrity because it is too short!'),
					{code: 'ValidationError'}
				)
			);
		} else if (hash.digest('base64') !== providedChecksum.toString('base64')) {
			stream.emit('error', AWS.util.error(
				new Error('Response fails integrity check.'),
				{ code: 'ValidationError' })
			);
		}
	})
};
*/
function attachLengthChecker(stream, contentLength) {
    var expectedLen = contentLength;
    var receivedLen = 0;
    stream.on('data', function(data) {
      if (data.length > 0) {
        receivedLen += data.length;
      }
    });
    stream.on('end', function() {
      if (expectedLen != receivedLen) {
        stream.emit('error', AWS.util.error(
          new Error('Stream content length mismatch. Received ' +
            this.receivedLen + ' of ' + this.expectedLen + ' bytes.'),
          { code: 'StreamContentLengthMismatch' })
        );
      }
    });
  }
