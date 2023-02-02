var helpers = require('./helpers');
var AWS = helpers.AWS;
var vectors = require('hash-test-vectors');

describe('Md5', function () {
    for (var idx = 0; idx < vectors.length; idx++) {
        var input = vectors[idx].input;
        var expected = vectors[idx].md5;
        it('should calculate a MD5 hash of ' + expected + ' for test vector ' + idx, function () {
            var buffer = AWS.util.Buffer.from(input, 'base64');
            expect(AWS.util.crypto.md5(buffer, 'hex')).to.equal(expected);
        });
    }
});
