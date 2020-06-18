var AWS = require('../helpers').AWS;
var toBuffer = AWS.util.buffer.toBuffer;
var Int64 = require('../../lib/event-stream/int64').Int64;

describe('Int64', function() {
    it('should hold integers greather than Number.MAX_SAFE_INTEGER without losing precision', function() {
        var bytes = toBuffer([0x7f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]);

        var int64 = new Int64(bytes);
        for (var i = 0, iLen = int64.bytes.length; i < iLen; i++) {
            expect(int64.bytes[i]).to.equal(bytes[i]);
        }
    });

    it('should allow the use of Int64s in arithmetic expressions', function () {
        var bytes = toBuffer([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x10]);

        expect(new Int64(bytes) + 4).to.equal(20);
    });

    it('should allow the use of negative Int64s in arithmetic expressions', function() {
        var bytes = toBuffer([0xff, 0xf0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);

        expect(new Int64(bytes) + Math.pow(2, 52)).to.equal(0);
    });

    it('should stringify negative Int64s in base 10', function() {
        var bytes = toBuffer([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xe2]);

        expect(String(new Int64(bytes))).to.equal('-30');
    });

    it('should throw when given a buffer of the wrong byte length', function() {
        expect(function() {
            new Int64(new Uint8Array(0));
        }).to.throw();
    });

    it('should convert numbers into Int64 values', function() {
        var expectedBytes = [0x00, 0x00, 0x00, 0x00, 0x7f, 0xff, 0xff, 0xff];
        var int64 = Int64.fromNumber(2147483647);

        for (var i = 0, iLen = int64.bytes.length; i < iLen; i++) {
            expect(int64.bytes[i]).to.equal(expectedBytes[i]);
        }
    });

    it('should convert negative numbers into Int64 values', function() {
        var expectedBytes = [0xff, 0xff, 0xff, 0xff, 0x80, 0x00, 0x00, 0x01];
        var int64 = Int64.fromNumber(-2147483647);

        for (var i = 0, iLen = int64.bytes.length; i < iLen; i++) {
            expect(int64.bytes[i]).to.equal(expectedBytes[i]);
        }
    });

    it('should throw when a number larger than 2^63 -1 is provided', function() {
        expect(function() {
            Int64.fromNumber(9323372036854775807);
        }).to.throw();
    });

    it('should throw when a number smaller than -1 * 2^63 is provided', function() {
        expect(function() {
            Int64.fromNumber(-9323372036854775807);
        }).to.throw();
    });
});
