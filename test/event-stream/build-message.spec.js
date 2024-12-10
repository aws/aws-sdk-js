var buildMessage = require('../../lib/event-stream/build-message').buildMessage;
var vectors = require('./test-vectors.fixture').vectors;

describe('message formatting', function() {
    var vectorNames = Object.keys(vectors);
    for (var i = 0, iLen = vectorNames.length; i < iLen; i++) {
        var vectorName = vectorNames[i];
        var vector = vectors[vectorName];

        (function(vectorName, vector) {
            it('should handle the ' + vectorName + ' test case', function() {
                if (vector.expectation === 'failure') {
                    expect(function() {
                        buildMessage(vector.decoded);
                    }).to.throw();
                } else {
                    expect(buildMessage(vector.decoded)).to.eql(vector.encoded);
                }
            });
        })(vectorName, vector);
    }
});
