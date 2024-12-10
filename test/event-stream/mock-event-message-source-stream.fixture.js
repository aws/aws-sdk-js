var Readable = require('stream').Readable;

/**
 * @param {Buffer[]} messages
 * @param {number} emitSize
 * @param {*} options
 */
function MockEventMessageSource(messages, emitSize, throwError, options) {
    Readable.call(this, options);

    this.data = Buffer.concat(messages);
    this.readCount = 0;
    this.emitSize = emitSize;
    this.throwError = throwError;
}

MockEventMessageSource.prototype = Object.create(Readable.prototype);

MockEventMessageSource.prototype._read = function() {
    var self = this;
    if (this.readCount === this.data.length) {
        if (this.throwError) {
            process.nextTick(function() {
                self.emit('error', new Error('Throwing an error!'));
            });
            return;
        } else {
            this.push(null);
            return;
        }
    }

    var bytesLeft = this.data.length - this.readCount;
    var numBytesToSend = Math.min(bytesLeft, this.emitSize);

    var chunk = this.data.slice(this.readCount, this.readCount + numBytesToSend);
    this.readCount += numBytesToSend;
    this.push(chunk);
};

module.exports = {
    MockEventMessageSource: MockEventMessageSource
};
