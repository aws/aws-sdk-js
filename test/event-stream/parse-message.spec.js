var parseMessage = require('../../lib/event-stream/parse-message').parseMessage;
var vectors = require('./test-vectors.fixture').vectors;

describe('message parsing', function() {
    var vectorNames = Object.keys(vectors);
    for (var i = 0, iLen = vectorNames.length; i < iLen; i++) {
        var vectorName = vectorNames[i];
        var vector = vectors[vectorName];

        (function(vectorName, vector) {
            it('should handle the ' + vectorName + ' test case', function() {
                if (vector.expectation === 'failure') {
                    expect(function() {
                        parseMessage(vector.encoded);
                    }).to.throw();
                } else {
                    expect(parseMessage(vector.encoded)).to.eql(vector.decoded);
                }
            });
        })(vectorName, vector);
    }
});
