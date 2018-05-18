/**
 * Converts data into Buffer.
 * @param {ArrayBuffer|string|number[]|Buffer} data Data to convert to a Buffer
 * @returns {Buffer}
 */
function toBuffer(data) {
    return (typeof Buffer.from === 'function' && Buffer.from !== Uint8Array.from) ?
        Buffer.from(data) : new Buffer(data);
}

/**
 * @api private
 */
module.exports = {
    toBuffer: toBuffer
};