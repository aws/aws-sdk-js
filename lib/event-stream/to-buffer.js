var Buffer = require('../util').Buffer;
/**
 * Converts data into Buffer.
 * @param {ArrayBuffer|string|number[]|Buffer} data Data to convert to a Buffer
 * @param {string} [encoding] String encoding
 * @returns {Buffer}
 */
function toBuffer(data, encoding) {
    return (typeof Buffer.from === 'function' && Buffer.from !== Uint8Array.from) ?
        Buffer.from(data, encoding) : new Buffer(data, encoding);
}

/**
 * @api private
 */
module.exports = {
    toBuffer: toBuffer
};