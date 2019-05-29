var util = require('../../lib/util');
var splitMessage = require('../../lib/event-stream/split-message').splitMessage;
var allocBuffer = util.buffer.alloc;


describe('splitMessage', function() {
    it('should throw when given a message under 16 bytes', function() {
        for (var i = 0; i < 16; i++) {
            var emptyMessage = new Uint8Array(i);
            expect(function() {
                splitMessage(emptyMessage);
            }).to.throw('too short');
        }
    });

    it(
        'should throw if the specified length does not match the length of the received message',
        function() {
            var message = allocBuffer(17, 0);
            message.writeInt32BE(16, 0);

            expect(function() {
                splitMessage(message);
            }).to.throw('length does not match');
        }
    );

    it(
        'should throw if the prelude checksum does not match the calculated prelude checksum',
        function() {
            var message = allocBuffer(16, 0);
            message.writeInt32BE(16, 0);
            message.writeInt32BE(0x05c248ec, 8);

            expect(function() {
                splitMessage(message);
            }).to.throw('prelude checksum');
        }
    );

    it(
        'should throw if the message checksum does not match the calculated message checksum',
        function() {
            var message = allocBuffer(16, 0);
            message.writeInt32BE(16, 0);
            message.writeInt32BE(0x05c248eb, 8);
            message.writeInt32BE(0x7d98c8fe, 12);

            expect(function() {
                splitMessage(message);
            }).to.throw('message checksum');
        }
    );

    it(
        'should return header and body buffers for messages with well-formed metadata',
        function() {
            var emptyBuffer = allocBuffer(0, 0);
            var message = allocBuffer(16, 0);
            message.writeInt32BE(16, 0);
            message.writeInt32BE(0x05c248eb, 8);
            message.writeInt32BE(0x7d98c8ff, 12);

            expect(splitMessage(message)).to.eql({
                headers: emptyBuffer,
                body: emptyBuffer
            });
        }
    );
});
