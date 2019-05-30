var stream = require('stream');
var AWS = require('../helpers').AWS;
var testEventMessages = require('./test-event-messages.fixture');
var mockEventStreamShape = require('./test-event-stream-model.fixture').mockEventStreamShape;
var toBuffer = AWS.util.buffer.toBuffer;
var EventUnmarshallerStream = require('../../lib/event-stream/event-message-unmarshaller-stream').EventUnmarshallerStream;

if (stream.Transform) {
    describe('EventUnmarshallerStream', function() {
        var parser = new AWS.XML.Parser();

        it('emits parsed events on data', function(done) {
            var events = [];
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

            var eventUnmarshallerStream = new EventUnmarshallerStream({
                parser: parser,
                eventStreamModel: mockEventStreamShape
            });

            eventUnmarshallerStream.on('data', function(event) {
                events.push(event);
            });

            eventUnmarshallerStream.on('end', function() {
                for (var i = 0; i < events; i++) {
                    var event = events[i];
                    expect(event).to.eql(expectedEvents[i]);
                }
                done();
            });

            eventUnmarshallerStream.write(testEventMessages.recordEventMessage);
            eventUnmarshallerStream.write(testEventMessages.statsEventMessage);
            eventUnmarshallerStream.write(testEventMessages.endEventMessage);
            eventUnmarshallerStream.end();
        });
    });
}
