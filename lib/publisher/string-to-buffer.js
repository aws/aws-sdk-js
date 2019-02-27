/**
 * Converts a UTF8 string into a Buffer.
 * @param {string} data Some string to convert to a Buffer
 * @returns {Buffer}
 */
function stringToBuffer(data) {
    return (typeof Buffer.from === 'function' && Buffer.from !== Uint8Array.from) ?
        Buffer.from(data) : new Buffer(data);
}

module.exports = {
    stringToBuffer: stringToBuffer
};
