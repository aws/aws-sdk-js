var stream = require('stream');
var AWS = require('../helpers').AWS;
var createEventStream = require('../../lib/event-stream/streaming-create-event-stream').createEventStream;
var testEventMessages = require('./test-event-messages.fixture');
var mockEventStreamShape = require('./test-event-stream-model.fixture').mockEventStreamShape;
var toBuffer = require('../../lib/event-stream/to-buffer').toBuffer;
var MockEventMessageSource = require('./mock-event-message-source-stream.fixture').MockEventMessageSource;

if (stream.Transform) {
    describe('streaming createEventStream', function() {
        var parser = new AWS.XML.Parser();

        it('returns a transform stream that emits events on data', function(done) {
            var events = [];

            var mockHttpResponse = new MockEventMessageSource([
                testEventMessages.recordEventMessage,
                testEventMessages.statsEventMessage,
                testEventMessages.endEventMessage
            ], 10)

            var expectedEvents = [
                {
                    Records: {
                        Payload: toBuffer('1,Foo,When life gives you foo...\n2,Bar,make Bar!\n3,Fizz,Sometimes paired with...\n4,Buzz,the infamous Buzz!')
                    }
                },
                {
                    Stats: {
                        Details: {
                            BytesScanned: 126,
                            BytesProcessed: 126,
                            BytesReturned: 107
                        }
                    }
                },
                {
                    End: {}
                }
            ];

            var eventStream = createEventStream(mockHttpResponse, parser, mockEventStreamShape);
            eventStream.on('data', function(event) {
                events.push(event);
            });

            eventStream.on('end', function() {
                for (var i = 0; i < events; i++) {
                    var event = events[i];
                    expect(event).to.eql(expectedEvents[i]);
                }
                done();
            });
        });
    });
}