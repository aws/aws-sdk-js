var formatMessage = require('../../lib/event-stream/format-message').formatMessage;
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
                        formatMessage(vector.decoded);
                    }).to.throw();
                } else {
                    expect(formatMessage(vector.decoded)).to.eql(vector.encoded);
                }
            });
        })(vectorName, vector);
    }
});
