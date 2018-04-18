var Buffer = require('buffer/').Buffer;
var Hmac = require('../lib/browserHmac');
var Md5 = require('../lib/browserMd5');
var Sha1 = require('../lib/browserSha1');
var Sha256 = require('../lib/browserSha256');
var hashVectors = require('hash-test-vectors');
var hmacVectors = require('hash-test-vectors/hmac');

describe('Browser hash implementations', function() {
    var hashes = {
        md5: Md5,
        sha1: Sha1,
        sha256: Sha256
    };

    for (var i = 0; i < hashVectors.length; i++) {
        for (var hashType in hashes) {
            it(
                'should calculate a ' + hashType + ' hash of ' + hashVectors[i][hashType] + ' for hash vector ' + i,
                (function(input, expected, ctor) {
                    return function() {
                        var hash = new ctor();
                        hash.update(input);
                        expect(hash.digest()).to.eql(new Buffer(expected, 'hex'));
                    }
                })(
                    new Buffer(hashVectors[i].input, 'base64'),
                    hashVectors[i][hashType],
                    hashes[hashType]
                )
            );
        }
    }

    for (var i = 0; i < hmacVectors.length; i++) {
        for (var hashType in hashes) {
            it(
                'should calculate a ' + hashType + ' HMAC of ' + hmacVectors[i][hashType] + ' for hash vector ' + i,
                (function(key, data, expected, ctor, truncate) {
                    return function() {
                        var hash = new Hmac(ctor, key);
                        var digest = hash.update(data).digest();
                        if (truncate) {
                            digest = digest.slice(0, truncate);
                        }
                        //in node <= 0.10 digest sometimes returns a Dataview, should be buffer.
                        if (digest.toString() === '[object Uint8Array]') {
                            digest = new Buffer(digest);
                        }
                        expect(digest).to.eql(new Buffer(expected, 'hex'));
                    }
                })(
                    new Buffer(hmacVectors[i].key, 'hex'),
                    new Buffer(hmacVectors[i].data, 'hex'),
                    hmacVectors[i][hashType],
                    hashes[hashType],
                    hmacVectors[i].truncate
                )
            );
        }
    }
});
