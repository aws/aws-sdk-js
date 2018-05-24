var helpers = require('../helpers');
var AWS = helpers.AWS;
var spyOn = helpers.spyOn;
var createServer = require('./mock-server').createServer;
var Publisher = require('../../lib/publisher/index').Publisher;
var monitoringConfig = require('../../lib/publisher/configuration');

describe('Publisher', function () {
	describe('configuration resolving', function () {
		describe('get configurations from environmental variable', function () {
			beforeEach(function (done) {
				process.env = {};
				return done();
			});

			afterEach(function () {
				process.env = {};
			});

			it('should correctly parse truthy value to true', function () {
				for (var enabled of ['1', 'true', 'whatever', 'X', '99']) {
					process.env.AWSCSMENABLED = enabled;
					helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
					expect(monitoringConfig()).to.eql({
						enabled: true,
						port: undefined,
						clientId: undefined
					})
				}
			});

			it('should correctly parse falsy value to false', function () {
				for (var disabled of ['0', 'false']) {
					process.env.AWSCSMENABLED = disabled;
					helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
					expect(monitoringConfig()).to.eql({
						enabled: false,
						port: undefined,
						clientId: undefined
					});
				}
			});

			it('should get port', function () {
				process.env.AWSCSMPORT = '31001';
				helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
				expect(monitoringConfig()).to.eql({
					enabled: false,
					port: 31001,
					clientId: undefined,
				});
			});
			it('should get clientID', function () {
				process.env.AWSCSMCLIENT_ID = 'client_id';
				helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
				expect(monitoringConfig()).to.eql({
					enabled: false,
					port: undefined,
					clientId: 'client_id',
				});
			})
		})

		describe('get configuration from config file', function () {
			it('should correctly parse truthy value to true', function () {
				for (var enabled of ['1', 'true', 'whatever', 'X', '99']) {
					process.env.AWS_PROFILE = 'dummyRole';
					helpers.spyOn(AWS.util, 'readFileSync').andReturn('[profile dummyRole]\ncsm_enabled=' + enabled);
					expect(monitoringConfig()).to.eql({
						enabled: true,
						port: undefined,
						clientId: undefined
					});
					process.env = {};
				}
			});

			it('should correctly parse falsy value to false', function () {
				for (var disabled of ['0', 'false']) {
					helpers.spyOn(AWS.util, 'readFileSync').andReturn('[default]\ncsm_enabled=' + disabled);
					expect(monitoringConfig()).to.eql({
						enabled: false,
						port: undefined,
						clientId: undefined
					});
				}
			});

			it('should get port', function () {
				helpers.spyOn(AWS.util, 'readFileSync').andReturn('[default]\ncsm_port=31001');
				expect(monitoringConfig()).to.eql({
					enabled: false,
					port: 31001,
					clientId: undefined,
				});
			});

			it('should get clientID', function () {
				helpers.spyOn(AWS.util, 'readFileSync').andReturn('[default]\ncsm_clientid=id');
				expect(monitoringConfig()).to.eql({
					enabled: false,
					port: undefined,
					clientId: 'id',
				});
			})
		});

		describe('get configurations according to resolving chain', function () {
			it('should prefer environmental variables over config file', function () {
				process.env = {
					AWS_PROFILE: 'role',
					AWSCSMENABLED: '1',
					AWSCSMPORT: '54321',
				}
				helpers.spyOn(AWS.util, 'readFileSync').andReturn(
					'[profile role]\ncsm_enabled=false\ncsm_clientid=clientid'
				);
				expect(monitoringConfig()).to.eql({
					enabled: true,
					port: 54321,
					clientId: 'clientid',
				});
				process.env = {}
			});

			it('should not read shared config file if monitoring disabled from environment', function () {
				process.env = {
					AWS_PROFILE: 'role',
					AWSCSMENABLED: 'false',
				}
				var ReadFileCalled = 0;
				helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function () {
					called++;
					return '';
				});
				expect(monitoringConfig().enabled).to.equal(false);
				expect(ReadFileCalled).to.equal(0)
			})
		})
	})

	describe('constructor', function () {
		it('sets "port" to the passed in option', function () {
			spyOn(Publisher.prototype, 'resolveOptions').andReturn({
				port: 1111
			})
			var publisher = new Publisher();

			expect(publisher.port).to.equal(1111);
		});

		it('uses default port of 31000 if none was passed in', function () {
			spyOn(Publisher.prototype, 'resolveOptions').andReturn({})
			var publisher = new Publisher();

			expect(publisher.port).to.equal(31000);
		});

		it('sets "clientId" to the passed in option', function () {
			spyOn(Publisher.prototype, 'resolveOptions').andReturn({
				clientId: 'FooId'
			})
			var publisher = new Publisher();

			expect(publisher.clientId).to.equal('FooId');
		});

		it('uses default clientId of empty string if none was passed in', function () {
			spyOn(Publisher.prototype, 'resolveOptions').andReturn({})
			var publisher = new Publisher();

			expect(publisher.clientId).to.equal('');
		});

		it('trims "clientId" to 255 characters', function () {
			var mockClientId = '';
			for (var i = 0; i < 500; i++) {
				mockClientId += 'a';
			}
			spyOn(Publisher.prototype, 'resolveOptions').andReturn({
				clientId: mockClientId
			})
			var publisher = new Publisher();

			expect(publisher.clientId.length).to.equal(255);
		});
	});

	describe('trimFields', function () {
		var mockValue = '';
		for (var i = 0; i < 1000; i++) {
			mockValue += 'a';
		}
		beforeEach(function () {
			spyOn(Publisher.prototype, 'resolveOptions').andReturn({});
		})

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
	});

	describe('eventHandler', function () {
		beforeEach(function () {
			spyOn(Publisher.prototype, 'resolveOptions').andReturn({ clientId: 'Foo', enabled: true });
		})
		it('should not send event if publish is not enabled', function() {
			spyOn(Publisher.prototype, 'resolveOptions').andReturn({ clientId: 'Foo'});
			var mockEvent = { foo: 'bar' };
			var publisher = new Publisher();

			var publishDatagramSpy = spyOn(publisher, 'publishDatagram');

			publisher.eventHandler(mockEvent);

			expect(mockEvent.ClientId).to.equal('Foo');
			expect(publishDatagramSpy.calls.length).to.equal(0);
		})

		it('adds ClientId to incoming events', function () {
			var mockEvent = { foo: 'bar' };
			var publisher = new Publisher();

			var publishDatagramSpy = spyOn(publisher, 'publishDatagram');

			publisher.eventHandler(mockEvent);

			expect(mockEvent.ClientId).to.equal('Foo');
			expect(publishDatagramSpy.calls.length).to.equal(1);
		});

		it('ignores the event if it is > 8 KB', function () {
			var mockEvent = { foo: new Buffer(1024 * 8) };
			var publisher = new Publisher();

			var publishDatagramSpy = spyOn(publisher, 'publishDatagram');

			publisher.eventHandler(mockEvent);

			expect(publishDatagramSpy.calls.length).to.equal(0);
		});

		it('converts the message to a Buffer before sending', function () {
			// create mocks
			var mockEvent = { foo: 'bar' };
			var publisher = new Publisher();

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
			var publisher = new Publisher();

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
			var mockServer = createServer(function () {
				spyOn(Publisher.prototype, 'resolveOptions').andReturn({
					clientId: 'Foo',
					port: mockServer.address().port
				});
				var publisher = new Publisher();
				publisher.publishDatagram(new Buffer(1024));
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
				spyOn(Publisher.prototype, 'resolveOptions').andReturn({
					clientId: 'Foo',
					port: mockServer.address().port
				});
				publisher = new Publisher();
				publisher.publishDatagram(new Buffer(1024));
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
