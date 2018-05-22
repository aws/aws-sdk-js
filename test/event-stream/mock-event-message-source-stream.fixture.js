var Readable = require('stream').Readable;

/**
 * @param {Buffer[]} messages
 * @param {number} emitSize
 * @param {*} options
 */
function MockEventMessageSource(messages, emitSize, options) {
    Readable.call(this, options);

    this.data = Buffer.concat(messages);
    this.readCount = 0;
    this.emitSize = emitSize;
}

MockEventMessageSource.prototype = Object.create(Readable.prototype);

MockEventMessageSource.prototype._read = function() {
    if (this.readCount === this.data.length) {
        this.push(null);
        return;
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