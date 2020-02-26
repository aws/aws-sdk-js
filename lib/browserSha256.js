var Buffer = require('buffer/').Buffer;

var BLOCK_SIZE = 64;
var FINAL_SIZE = 56;

var KEY = [
    0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
    0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
    0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
    0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
    0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
    0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
    0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
    0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
    0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
    0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
    0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
    0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
    0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
    0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
    0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
    0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
];

/**
 * Adopted from: https://github.com/crypto-browserify/sha.js
 * but removed other un-used hashers.
 */
function Sha256() {
    this.init();

    this.word = new Array(64);
    this.block = new Buffer.alloc(BLOCK_SIZE);
    this.wordLength = 0;
}

Sha256.BLOCK_SIZE = BLOCK_SIZE;

Sha256.prototype.init = function () {
    this._a = 0x6a09e667;
    this._b = 0xbb67ae85;
    this._c = 0x3c6ef372;
    this._d = 0xa54ff53a;
    this._e = 0x510e527f;
    this._f = 0x9b05688c;
    this._g = 0x1f83d9ab;
    this._h = 0x5be0cd19;

    return this;
};

Sha256.prototype.update = function (data, enc) {
    if (typeof data === 'string') {
        enc = enc || 'utf8';
        data = Buffer.from(data, enc);
    }

    var block = this.block;
    var blockSize = BLOCK_SIZE;
    var length = data.length;
    var accum = this.wordLength;

    for (var offset = 0; offset < length;) {
        var assigned = accum % blockSize;
        var remainder = Math.min(length - offset, blockSize - assigned);

        for (var i = 0; i < remainder; i++) {
            block[assigned + i] = data[offset + i];
        }

        accum += remainder;
        offset += remainder;

        if (accum % blockSize === 0) {
            this._update(block);
        }
    }

    this.wordLength += length;
    return this;
};

Sha256.prototype._update = function (M) {
    var W = this.word;

    var a = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;
    var f = this._f | 0;
    var g = this._g | 0;
    var h = this._h | 0;

    for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
    for (; i < 64; ++i)
        W[i] = (gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16]) | 0;

    for (var j = 0; j < 64; ++j) {
        var T1 = (h + sigma1(e) + ch(e, f, g) + KEY[j] + W[j]) | 0;
        var T2 = (sigma0(a) + maj(a, b, c)) | 0;

        h = g;
        g = f;
        f = e;
        e = (d + T1) | 0;
        d = c;
        c = b;
        b = a;
        a = (T1 + T2) | 0;
    }

    this._a = (a + this._a) | 0;
    this._b = (b + this._b) | 0;
    this._c = (c + this._c) | 0;
    this._d = (d + this._d) | 0;
    this._e = (e + this._e) | 0;
    this._f = (f + this._f) | 0;
    this._g = (g + this._g) | 0;
    this._h = (h + this._h) | 0;
};

Sha256.prototype._hash = function () {
    var H = Buffer.alloc(32);

    H.writeInt32BE(this._a, 0);
    H.writeInt32BE(this._b, 4);
    H.writeInt32BE(this._c, 8);
    H.writeInt32BE(this._d, 12);
    H.writeInt32BE(this._e, 16);
    H.writeInt32BE(this._f, 20);
    H.writeInt32BE(this._g, 24);
    H.writeInt32BE(this._h, 28);

    return H;
};

Sha256.prototype.digest = function (enc) {
    var rem = this.wordLength % BLOCK_SIZE;

    this.block[rem] = 0x80;

    // zero (rem + 1) trailing bits, where (rem + 1) is the smallest
    // non-negative solution to the equation (length + 1 + (rem + 1)) === finalSize mod blockSize
    this.block.fill(0, rem + 1);

    if (rem >= FINAL_SIZE) {
        this._update(this.block);
        this.block.fill(0);
    }

    var bits = this.wordLength * 8;

    // uint32
    if (bits <= 0xffffffff) {
        this.block.writeUInt32BE(bits, BLOCK_SIZE - 4);

        // uint64
    } else {
        var lowBits = (bits & 0xffffffff) >>> 0;
        var highBits = (bits - lowBits) / 0x100000000;

        this.block.writeUInt32BE(highBits, BLOCK_SIZE - 8);
        this.block.writeUInt32BE(lowBits, BLOCK_SIZE - 4);
    }

    this._update(this.block);
    var hash = this._hash();

    return enc ? hash.toString(enc) : hash;
};

function ch(x, y, z) {
    return z ^ (x & (y ^ z));
}

function maj(x, y, z) {
    return (x & y) | (z & (x | y));
}

function sigma0(x) {
    return (
        ((x >>> 2) | (x << 30)) ^
        ((x >>> 13) | (x << 19)) ^
        ((x >>> 22) | (x << 10))
    );
}

function sigma1(x) {
    return (
        ((x >>> 6) | (x << 26)) ^ ((x >>> 11) | (x << 21)) ^ ((x >>> 25) | (x << 7))
    );
}

function gamma0(x) {
    return ((x >>> 7) | (x << 25)) ^ ((x >>> 18) | (x << 14)) ^ (x >>> 3);
}

function gamma1(x) {
    return ((x >>> 17) | (x << 15)) ^ ((x >>> 19) | (x << 13)) ^ (x >>> 10);
}

/**
 * @private
 */
module.exports = Sha256;
