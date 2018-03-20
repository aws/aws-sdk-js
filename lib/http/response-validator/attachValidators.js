var AWS = require('../../core');
var cryptoLib = AWS.util.crypto.lib;
var Buffer = AWS.util.Buffer;
var CHECKSUM_BYTE_LEN = 16;

module.exports = {
	attachLengthChecker: attachLengthChecker,
  validateIntegrity: validateIntegrity,
  shouldCheckIntegrity: shouldCheckIntegrity,
}

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

/**
 * used to validating browser response. It slises off the trailing bytes as checksum
 * and compare it with calculated checksum the original data.
 * @api private
 */
function validateIntegrity(resp, buffer) {
  var encoding = res.headers['x-amz-transfer-encoding'];
  if (encoding !== 'append-md5') {
    resp.emit('error', AWS.util.error(
        new Error('Cannot validate response header: ' + encoding + ', expect \'append-md5\''),
        {code: 'ValidationError'}
      )
    );
    return false;
  }
  var dataLength = buffer.length - CHECKSUM_BYTE_LEN;
	var hash = buffer.slice(dataLength);
	var data = buffer.slice(0, dataLength);
	if (AWS.util.crypto.hash('md5', data, 'base64') === hash.toString('base64')) {
    if (resp.headers['content-length']) resp.headers['content-length'] = resp.headers['content-length'] - CHECKSUM_BYTE_LEN;
    if (resp.headers['x-amz-content-range']) resp.headers['content-range'] = resp.headers['x-amz-content-range'];
    return true;
	} else {
		resp.emit('error', AWS.util.error(
			new Error('Response fails integrity check.'),
			{ code: 'NetworkingError' }
    ));
    return false;
	}
}

/**
 * @api private
 */
function shouldCheckIntegrity(resp) {
  return resp.headers &&
    resp.headers['content-length'] &&
    resp.headers['x-amz-transfer-encoding'] &&
    resp.headers['x-amz-transfer-encoding'].indexOf('append-') === 0;
}

