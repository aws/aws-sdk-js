var spyOn = require('../helpers').spyOn;
var AWS = require('../helpers').AWS;
var createServer = require('./mock-server').createServer;
var Publisher = require('../../lib/publisher/index').Publisher;

if (AWS.util.isNode()) {
  describe('Publisher', function () {
    describe('constructor', function () {
      it('sets "port" to the passed in option', function () {
        var publisher = new Publisher({
          port: 1111
        });

        expect(publisher.port).to.equal(1111);
        expect(publisher.address).to.equal('127.0.0.1');
      });

      it('uses default port of 31000 if none was passed in', function () {
        var publisher = new Publisher();

        expect(publisher.port).to.equal(31000);
      });

      it('uses "127.0.0.1" as default address', function() {
        var publisher = new Publisher();

        expect(publisher.address).to.equal('127.0.0.1');
      });

      it('setting "host" of the passed-in option will set the address', function() {
        var publisher = new Publisher({
          host: 'dnshost'
        });

        expect(publisher.address).to.equal('dnshost');
      });

      it('sets "clientId" to the passed in option', function () {
        var publisher = new Publisher({
          clientId: 'FooId'
        });

        expect(publisher.clientId).to.equal('FooId');
      });

      it('uses default clientId of empty string if none was passed in', function () {
        var publisher = new Publisher();

        expect(publisher.clientId).to.equal('');
      });

      it('trims "clientId" to 255 characters', function () {
        var mockClientId = '';
        for (var i = 0; i < 500; i++) {
          mockClientId += 'a';
        }

        var publisher = new Publisher({
          clientId: mockClientId
        });

        expect(publisher.clientId.length).to.equal(255);
      });

      it('sets "enabled" to the passed in option', function () {
        var publisher = new Publisher({
          enabled: true
        });

        expect(publisher.enabled).to.equal(true);
      });

      it('uses set enabled as false if none was passed in', function () {
        var publisher = new Publisher();

        expect(publisher.enabled).to.equal(false);
      });
    });

    describe('trimFields', function () {
      var mockValue = '';
      for (var i = 0; i < 1000; i++) {
        mockValue += 'a';
      }

      it('trims UserAgent to 256 characters', function () {
        var mockEvent = { UserAgent: mockValue };
        var publisher = new Publisher({
          clientId: 'Foo'
        });

        expect(mockEvent.UserAgent.length).to.equal(1000);
        publisher.trimFields(mockEvent);
        expect(mockEvent.UserAgent.length).to.equal(256);
      });

      it('trims SdkException to 128 characters', function () {
        var mockEvent = { SdkException: mockValue };
        var publisher = new Publisher({
          clientId: 'Foo'
        });

        expect(mockEvent.SdkException.length).to.equal(1000);
        publisher.trimFields(mockEvent);
        expect(mockEvent.SdkException.length).to.equal(128);
      });

      it('trims SdkExceptionMessage to 512 characters', function () {
        var mockEvent = { SdkExceptionMessage: mockValue };
        var publisher = new Publisher({
          clientId: 'Foo'
        });

        expect(mockEvent.SdkExceptionMessage.length).to.equal(1000);
        publisher.trimFields(mockEvent);
        expect(mockEvent.SdkExceptionMessage.length).to.equal(512);
      });

      it('trims AwsException to 128 characters', function () {
        var mockEvent = { AwsException: mockValue };
        var publisher = new Publisher({
          clientId: 'Foo'
        });

        expect(mockEvent.AwsException.length).to.equal(1000);
        publisher.trimFields(mockEvent);
        expect(mockEvent.AwsException.length).to.equal(128);
      });

      it('trims AwsExceptionMessage to 512 characters', function () {
        var mockEvent = { AwsExceptionMessage: mockValue };
        var publisher = new Publisher({
          clientId: 'Foo'
        });

        expect(mockEvent.AwsExceptionMessage.length).to.equal(1000);
        publisher.trimFields(mockEvent);
        expect(mockEvent.AwsExceptionMessage.length).to.equal(512);
      });

      it('trims FinalSdkException to 128 characters', function () {
        var mockEvent = { FinalSdkException: mockValue };
        var publisher = new Publisher({
          clientId: 'Foo'
        });

        expect(mockEvent.FinalSdkException.length).to.equal(1000);
        publisher.trimFields(mockEvent);
        expect(mockEvent.FinalSdkException.length).to.equal(128);
      });

      it('trims FinalSdkExceptionMessage to 512 characters', function () {
        var mockEvent = { FinalSdkExceptionMessage: mockValue };
        var publisher = new Publisher({
          clientId: 'Foo'
        });

        expect(mockEvent.FinalSdkExceptionMessage.length).to.equal(1000);
        publisher.trimFields(mockEvent);
        expect(mockEvent.FinalSdkExceptionMessage.length).to.equal(512);
      });

      it('trims AwsExceptionMessage to 128 characters', function () {
        var mockEvent = { FinalAwsException: mockValue };
        var publisher = new Publisher({
          clientId: 'Foo'
        });

        expect(mockEvent.FinalAwsException.length).to.equal(1000);
        publisher.trimFields(mockEvent);
        expect(mockEvent.FinalAwsException.length).to.equal(128);
      });

      it('trims FinalAwsExceptionMessage to 512 characters', function () {
        var mockEvent = { FinalAwsExceptionMessage: mockValue };
        var publisher = new Publisher({
          clientId: 'Foo'
        });

        expect(mockEvent.FinalAwsExceptionMessage.length).to.equal(1000);
        publisher.trimFields(mockEvent);
        expect(mockEvent.FinalAwsExceptionMessage.length).to.equal(512);
      });
    });

    describe('eventHandler', function () {
      it('adds ClientId to incoming events', function () {
        var mockEvent = { foo: 'bar' };
        var publisher = new Publisher({
          enabled: true,
          clientId: 'Foo'
        });

        var publishDatagramSpy = spyOn(publisher, 'publishDatagram');

        publisher.eventHandler(mockEvent);

        expect(mockEvent.ClientId).to.equal('Foo');
        expect(publishDatagramSpy.calls.length).to.equal(1);
      });

      it('ignores the event if it is > 8 KB', function () {
        var mockEvent = { foo: AWS.util.buffer.alloc(1024 * 8) };
        var publisher = new Publisher({
          enabled: true,
          clientId: 'Foo'
        });

        var publishDatagramSpy = spyOn(publisher, 'publishDatagram');

        publisher.eventHandler(mockEvent);

        expect(publishDatagramSpy.calls.length).to.equal(0);
      });

      it('converts the message to a Buffer before sending', function () {
        // create mocks
        var mockEvent = { foo: 'bar' };
        var publisher = new Publisher({
          enabled: true,
          clientId: 'Foo'
        });

        // attach spy to verify the message is sent to the next function
        var publishDatagramSpy = spyOn(publisher, 'publishDatagram');

        // trigger method being tested
        publisher.eventHandler(mockEvent);

        // assertions
        expect(mockEvent.ClientId).to.equal('Foo');
        var publishArgument = publishDatagramSpy.calls[0].arguments[0];
        expect(Buffer.isBuffer(publishArgument)).to.equal(true);
        expect(JSON.parse(publishArgument.toString())).to.eql(mockEvent);
      });

      it('trims messages before sending', function () {
        var mockUserAgent = '';
        for (var i = 0; i < 1000; i++) {
          mockUserAgent += 'a';
        }

        var mockEvent = { foo: 'bar', UserAgent: mockUserAgent };
        var publisher = new Publisher({
          enabled: true,
          clientId: 'Foo'
        });

        var publishDatagramSpy = spyOn(publisher, 'publishDatagram');

        publisher.eventHandler(mockEvent);

        expect(mockEvent.ClientId).to.equal('Foo');
        var publishArgument = publishDatagramSpy.calls[0].arguments[0];
        expect(Buffer.isBuffer(publishArgument)).to.equal(true);
        var parsedPublishArgument = JSON.parse(publishArgument.toString());
        expect(parsedPublishArgument).to.eql(mockEvent);
        expect(parsedPublishArgument.UserAgent.length).to.equal(256);
      });
    });

    describe('publishDatagram', function () {
      it('sends a message via udp', function (done) {
        var publisher;
        var mockServer = createServer(function (server) {
          publisher = new Publisher({
            enabled: true,
            clientId: 'Foo',
            port: server.address().port
          });
          publisher.publishDatagram(AWS.util.buffer.alloc(1024));
        }, function () {
          // the message was received by the mock server
          expect(true).to.equal(true);
          mockServer.close();
          done();
        });
      });

      it('destroys its client when all in-flight requests are completed', function (done) {
        var publisher;
        var mockServer = createServer(function () {
          publisher = new Publisher({
            enabled: true,
            clientId: 'Foo',
            port: mockServer.address().port
          });
          publisher.publishDatagram(AWS.util.buffer.alloc(1024));
          expect(typeof publisher.client).not.to.equal('undefined');
        }, function () {
          // the message was received by the mock server
          expect(true).to.equal(true);
          expect(typeof publisher.client).to.equal('undefined');
          mockServer.close();
          done();
        });
      });
    });
  });
}
