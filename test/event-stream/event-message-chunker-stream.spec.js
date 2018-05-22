var EventMessageChunkerStream = require('../../lib/event-stream/event-message-chunker-stream').EventMessageChunkerStream;
var testEventMessages = require('./test-event-messages.fixture');
var MockEventMessageSource = require('./mock-event-message-source-stream.fixture').MockEventMessageSource;

describe('EventMessageChunkerStream', function() {
    it('splits payloads into individual messages', function(done) {
        /** @type {Buffer[]} */
        var messages = [];
        var mockMessages = [
            testEventMessages.recordEventMessage,
            testEventMessages.statsEventMessage,
            testEventMessages.endEventMessage
        ];
        var mockStream = new MockEventMessageSource(mockMessages, 100);

        var eventChunker = new EventMessageChunkerStream();
        mockStream.pipe(eventChunker);
        eventChunker.on('data', function(message) {
            messages.push(message);
        });
        eventChunker.on('end', function() {
            expect(messages.length).to.equal(3);
            done();
        });
    });

    it('splits payloads in correct order', function(done) {
        /** @type {Buffer[]} */
        var messages = [];
        var mockMessages = [
            testEventMessages.recordEventMessage,
            testEventMessages.statsEventMessage,
            testEventMessages.recordEventMessage,
            testEventMessages.endEventMessage
        ];
        var mockStream = new MockEventMessageSource(mockMessages, 100);

        var eventChunker = new EventMessageChunkerStream();
        mockStream.pipe(eventChunker);
        eventChunker.on('data', function(message) {
            messages.push(message);
        });
        eventChunker.on('end', function() {
            expect(messages.length).to.equal(4);
            for (var i = 0; i < mockMessages.length; i++) {
                expect(messages[i].toString('base64')).to.equal(mockMessages[i].toString('base64'));
            }
            done();
        });
    });

    it('splits payloads when received all at once', function(done) {
        /** @type {Buffer[]} */
        var messages = [];
        var mockMessages = [
            testEventMessages.recordEventMessage,
            testEventMessages.statsEventMessage,
            testEventMessages.endEventMessage
        ];
        var mockStream = new MockEventMessageSource(mockMessages, mockMessages.reduce(function(prev, cur) {
            return prev + cur.length;
        }, 0));

        var eventChunker = new EventMessageChunkerStream();
        mockStream.pipe(eventChunker);
        eventChunker.on('data', function(message) {
            messages.push(message);
        });
        eventChunker.on('end', function() {
            expect(messages.length).to.equal(3);
            done();
        });
    });

    it('splits payloads when total event message length spans multiple chunks', function(done) {
        /** @type {Buffer[]} */
        var messages = [];
        var mockMessages = [
            testEventMessages.recordEventMessage,
            testEventMessages.statsEventMessage,
            testEventMessages.endEventMessage
        ];
        var mockStream = new MockEventMessageSource(mockMessages, 1);

        var eventChunker = new EventMessageChunkerStream();
        mockStream.pipe(eventChunker);
        eventChunker.on('data', function(message) {
            messages.push(message);
        });
        eventChunker.on('end', function() {
            expect(messages.length).to.equal(3);
            done();
        });
    });
});