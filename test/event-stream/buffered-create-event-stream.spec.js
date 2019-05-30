var AWS = require('../helpers').AWS;
var createEventStream = require('../../lib/event-stream/buffered-create-event-stream').createEventStream;
var testEventMessages = require('./test-event-messages.fixture');
var mockEventStreamShape = require('./test-event-stream-model.fixture').mockEventStreamShape;
var toBuffer = AWS.util.buffer.toBuffer;
var buildMessage = require('../../lib/event-stream/build-message').buildMessage;
var Buffer = AWS.util.Buffer;

describe('buffered createEventStream', function() {
    var parser = new AWS.XML.Parser();

    it('returns an ordered array of events', function() {
        var payload = Buffer.concat([
            testEventMessages.recordEventMessage,
            testEventMessages.statsEventMessage,
            testEventMessages.endEventMessage
        ]);

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

        var eventStream = createEventStream(payload, parser, mockEventStreamShape);
        for (var i = 0; i < eventStream; i++) {
            var event = eventStream[i];
            expect(event).to.eql(expectedEvents[i]);
        }
    });

    it('throws an error on error events', function() {
        var errorEventMessage = buildMessage({
            headers: {
                ':message-type': {
                    type: 'string',
                    value: 'error'
                },
                ':error-code': {
                    type: 'string',
                    value: 'FooError'
                },
                ':error-message': {
                    type: 'string',
                    value: 'Event Error'
                }
            },
            body: toBuffer('')
        });

        var payload = Buffer.concat([
            testEventMessages.recordEventMessage,
            errorEventMessage,
            testEventMessages.statsEventMessage,
            testEventMessages.endEventMessage
        ]);

        expect(function() {
            var eventStream = createEventStream(payload, parser, mockEventStreamShape);
        }).to.throw('Event Error').with.property('name', 'FooError');
    });
});
