var AWS = require('../../core');
var cryptoLib = AWS.util.crypto.lib;
var Buffer = AWS.util.Buffer;
var CHECKSUM_BYTE_LEN = 16;

module.exports = attachLengthChecker
/**
 * @api private
 * used to validate content-length in old node stream api.
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
					receivedLen + ' of ' + expectedLen + ' bytes.'),
				{ code: 'StreamContentLengthMismatch' })
			);
		}
	});
}
