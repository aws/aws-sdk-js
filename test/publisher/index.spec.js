var spyOn = require('../helpers').spyOn;
var createServer = require('./mock-server').createServer;
var Publisher = require('../../lib/publisher/index').Publisher;

describe('Publisher', function() {
    describe('constructor', function() {
        it('sets "port" to the passed in option', function() {
            var publisher = new Publisher({
                port: 1111
            });

            expect(publisher.port).to.equal(1111);
        });

        it('uses default port of 31000 if none was passed in', function() {
            var publisher = new Publisher();

            expect(publisher.port).to.equal(31000);
        });

        it('sets "clientId" to the passed in option', function() {
            var publisher = new Publisher({
                clientId: 'FooId'
            });

            expect(publisher.clientId).to.equal('FooId');
        });

        it('uses default clientId of empty string if none was passed in', function() {
            var publisher = new Publisher();

            expect(publisher.clientId).to.equal('');
        });
    });

    describe('eventHandler', function() {
        it('adds ClientId to incoming events', function() {
            var mockEvent = {foo: 'bar'};
            var publisher = new Publisher({
                clientId: 'Foo'
            });

            var publishDatagramSpy = spyOn(publisher, 'publishDatagram');

            publisher.eventHandler(mockEvent);

            expect(mockEvent.ClientId).to.equal('Foo');
            expect(publishDatagramSpy.calls.length).to.equal(1);
        });

        it('ignores the event if it is > 8 KB', function() {
            var mockEvent = {foo: new Buffer(1024 * 8)};
            var publisher = new Publisher({
                clientId: 'Foo'
            });

            var publishDatagramSpy = spyOn(publisher, 'publishDatagram');

            publisher.eventHandler(mockEvent);

            expect(publishDatagramSpy.calls.length).to.equal(0);
        });

        it('converts the message to a Buffer before sending', function() {
            var mockEvent = {foo: 'bar'};
            var publisher = new Publisher({
                clientId: 'Foo'
            });

            var publishDatagramSpy = spyOn(publisher, 'publishDatagram');

            publisher.eventHandler(mockEvent);

            expect(mockEvent.ClientId).to.equal('Foo');
            var publishArgument = publishDatagramSpy.calls[0].arguments[0];
            expect(Buffer.isBuffer(publishArgument)).to.equal(true);
            expect(JSON.parse(publishArgument.toString())).to.eql(mockEvent);
        });
    });

    describe('publishDatagram', function() {
        it('sends a message via udp', function(done) {
            var publisher;
            var mockServer = createServer(function() {
                var publisher = new Publisher({
                    clientId: 'Foo',
                    port: mockServer.address().port
                });
                publisher.publishDatagram(new Buffer(1024));
            }, function() {
                // the message was received by the mock server
                expect(true).to.equal(true);
                mockServer.close();
                done();
            });
        });

        it('destroys its client when all in-flight requests are completed', function(done) {
            var publisher;
            var mockServer = createServer(function() {
                publisher = new Publisher({
                    clientId: 'Foo',
                    port: mockServer.address().port
                });
                publisher.publishDatagram(new Buffer(1024));
                expect(typeof publisher.client).not.to.equal('undefined');
            }, function() {
                // the message was received by the mock server
                expect(true).to.equal(true);
                expect(typeof publisher.client).to.equal('undefined');
                mockServer.close();
                done();
            });
        });
    });
});