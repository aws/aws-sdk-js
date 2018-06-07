var Buffer = require('../util').Buffer;
/**
 * Allocates a buffer.
 * @param {number} size Number of bytes to allocate for the buffer.
 * @returns {Buffer}
 */
function allocBuffer(size) {
    if (typeof size !== 'number') {
        throw new Error('size passed to allocBuffer must be a number.');
    }
    var buffer = typeof Buffer.alloc === 'function' ? Buffer.alloc(size) : new Buffer(size);
    buffer.fill(0);
    return buffer;
}

/**
 * @api private
 */
module.exports = {
    allocBuffer: allocBuffer
};