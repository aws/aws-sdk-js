var AWS = require('../../core');
var TransformStream = AWS.util.stream.Transform;

module.exports = ContentLengthCheckerStream;

require('util').inherits(ContentLengthCheckerStream, TransformStream);

function ContentLengthCheckerStream(contentLength) {
	if (!(this instanceof TransformStream)) {
		return new TransformStream();
	}
	TransformStream.call(this);
	this.expectedLen = contentLength;
	this.receivedLen = 0;
	this.on('end', function () {
		if (this.receivedLen !== this.expectedLen) {
			this.emit('error', AWS.util.error(
				new Error('Stream content length mismatch. Received ' +
					this.receivedLen + ' of ' + this.expectedLen + ' bytes.'),
				{ code: 'StreamContentLengthMismatch' })
			)
		}
	})
}

ContentLengthCheckerStream.prototype._transform = function (chunk, encoding, callback) {
	if (chunk.length > 0) {
		this.receivedLen += chunk.length;
	}
	callback(null, chunk);
}

