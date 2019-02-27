var eventMessageChunker = require('../../lib/event-stream/event-message-chunker').eventMessageChunker;
var testEventMessages = require('./test-event-messages.fixture');

describe('eventMessageChunker', function() {
    var eventMessagesPayload = Buffer.concat([
        testEventMessages.recordEventMessage,
        testEventMessages.statsEventMessage,
        testEventMessages.endEventMessage
    ]);

    it('should split individual messages', function() {
        var messages = eventMessageChunker(eventMessagesPayload);

        expect(messages.length).to.equal(3);
    });

    it('should maintain event ordering', function() {
        var mockEventMessages = [
            testEventMessages.recordEventMessage,
            testEventMessages.statsEventMessage,
            testEventMessages.recordEventMessage,
            testEventMessages.endEventMessage
        ];
        var eventMessagesPayload = Buffer.concat(mockEventMessages);

        var messages = eventMessageChunker(eventMessagesPayload);

        expect(messages.length).to.equal(4);
        for (var i = 0; i < messages.length; i++) {
            expect(messages[i].toString('base64')).to.equal(mockEventMessages[i].toString('base64'));
        }
    });
});
