var stream = require('stream');
var AWS = require('../helpers').AWS;
var createEventStream = require('../../lib/event-stream/streaming-create-event-stream').createEventStream;
var testEventMessages = require('./test-event-messages.fixture');
var mockEventStreamShape = require('./test-event-stream-model.fixture').mockEventStreamShape;
var toBuffer = AWS.util.buffer.toBuffer;
var MockEventMessageSource = require('./mock-event-message-source-stream.fixture').MockEventMessageSource;
var buildMessage = require('../../lib/event-stream/build-message').buildMessage;

if (stream.Transform) {
    describe('streaming createEventStream', function() {
        var parser = new AWS.XML.Parser();

        it('returns a transform stream that emits events on data', function(done) {
            var events = [];

            var mockHttpResponse = new MockEventMessageSource([
                testEventMessages.recordEventMessage,
                testEventMessages.statsEventMessage,
                testEventMessages.endEventMessage
            ], 10);

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

        it('emits error on error events', function(done) {
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

            var mockHttpResponse = new MockEventMessageSource([
                testEventMessages.recordEventMessage,
                errorEventMessage,
                testEventMessages.statsEventMessage,
                testEventMessages.endEventMessage
            ], 10);

            var eventStream = createEventStream(mockHttpResponse, parser, mockEventStreamShape);

            eventStream.on('data', function(event) {});
            eventStream.on('error', function(err) {
                expect(err.name).to.equal('FooError');
                expect(err.code).to.equal('FooError');
                expect(err.message).to.equal('Event Error');
                done();
            });
        });

        it('emits error on error events from source', function(done) {
            var mockHttpResponse = new MockEventMessageSource(
                [
                    testEventMessages.recordEventMessage,
                    testEventMessages.statsEventMessage,
                    testEventMessages.endEventMessage
                ],
                10, true
            );

            var eventStream = createEventStream(mockHttpResponse, parser, mockEventStreamShape);

            eventStream.on('data', function(event) {});
            eventStream.on('error', function(err) {
                expect(err.name).to.equal('Error');
                expect(err.message).to.equal('Throwing an error!');
                done();
            });
        });

        it('emits error on error events from event chunker', function(done) {
            var responseMessage = Buffer.concat([
                testEventMessages.recordEventMessage,
                testEventMessages.statsEventMessage,
                testEventMessages.endEventMessage
            ]);
            var mockHttpResponse = new MockEventMessageSource(
                [responseMessage.slice(0, responseMessage.length - 4)],
                10
            );

            var eventStream = createEventStream(mockHttpResponse, parser, mockEventStreamShape);

            eventStream.on('data', function(event) {});
            eventStream.on('error', function(err) {
                expect(err.name).to.equal('Error');
                expect(err.message).to.equal('Truncated event message received.');
                done();
            });
        });
    });
}
