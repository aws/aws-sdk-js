/**
 * What is necessary to create an event stream in node?
 *  - http response stream
 *  - parser
 *  - event stream model
 */

var EventMessageChunkerStream = require('../event-stream/event-message-chunker-stream').EventMessageChunkerStream;
var EventUnmarshallerStream = require('../event-stream/event-message-unmarshaller-stream').EventUnmarshallerStream;

function createEventStream(stream, parser, model) {
    var eventStream = new EventUnmarshallerStream({
        parser: parser,
        eventStreamModel: model
    });

    var eventMessageChunker = new EventMessageChunkerStream();

    stream.pipe(
        eventMessageChunker
    ).pipe(eventStream);

    return eventStream;
}

/**
 * @api private
 */
module.exports = {
    createEventStream: createEventStream
};