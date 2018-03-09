var AWS = require('../../core');
var cryptoLib = AWS.util.crypto.lib;
var NodeBuffer = require('buffer');
var TransformStream = AWS.util.stream.Transform;

module.exports = IntegrityCheckerStream;

require('util').inherits(IntegrityCheckerStream, TransformStream);

/**
 * A transform stream to perform trailing md5 hash validation.
 * Whether to perform this validation is based on 'x-amz-tranfer-encoding'
 * response header.
 * @api private
 * @param {string} transferEncoding
 */
function IntegrityCheckerStream(transferEncoding, contentLength) {
	if (!(this instanceof TransformStream)) {
		return new TransformStream();
	}
	TransformStream.call(this);
	if (transferEncoding !== 'append-md5') {
		this.INVALID_HASHING = true;
	}
	this.hash = cryptoLib.createHash('md5');
	this.checksum = new Buffer([]);
	this.expectedDataLength = contentLength - 16;
	this.contentLength = contentLength;
	this.receivedLen = 0

	this.on('data', function() {
		if (this.INVALID_HASHING) {
			this.emit('error', AWS.util.error(
				new Error('Cannot validate response header: ' + transferEncoding),
				{ code: 'ValidationError' })
			)
		}
	})

	this.on('end', function() {
		if (this.checksum.length !== 16) {
			this.emit(
				'error',
				AWS.util.error(
					new Error('Cannot validate response integrity because it is too short!'),
					{code: 'ValidationError'}
				)
			)
		} else if (this.hash.digest('base64') !== this.checksum.toString('base64')) {
			this.emit('error', AWS.util.error(
				new Error('Response fails integrity check.'),
				{ code: 'ValidationError' })
			);
		}
	})
}

/**
 * override the transfor function in stream.Transform.
 */
IntegrityCheckerStream.prototype._transform = function(chunk, encoding, callback) {
	if (chunk.length > 0) {
		if (this.receivedLen >= this.expectedDataLength) {
			this.checksum = NodeBuffer.Buffer.concat([this.checksum, chunk]);
			chunk = null;
		}else if (this.receivedLen + chunk.length > this.expectedDataLength) {
			var newData = chunk.slice(0, this.expectedDataLength - this.receivedLen);
			var newChecksum = chunk.slice(this.expectedDataLength - this.receivedLen);
			this.checksum = NodeBuffer.Buffer.concat([this.checksum, newChecksum]);
			this.hash.update(newData);
			chunk = newData;
		} else {
			this.hash.update(chunk);
		}
		this.receivedLen += chunk.length;
	}
	callback(null, chunk);
}

