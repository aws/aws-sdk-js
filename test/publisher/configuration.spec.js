var helpers = require('../helpers');
var AWS = helpers.AWS;
var spyOn = helpers.spyOn;
var monitoringConfig = require('../../lib/publisher/configuration');

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
        process.env.AWS_CSM_ENABLED = enabled;
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
        expect(monitoringConfig()).to.eql({
          enabled: true,
          port: undefined,
          clientId: undefined
        })
      }
    });

    it('should correctly parse falsy value to false', function () {
      for (var disabled of ['0', 'false', '']) {
        process.env.AWS_CSM_ENABLED = disabled;
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
        expect(monitoringConfig()).to.eql({
          enabled: false,
          port: undefined,
          clientId: undefined
        });
      }
    });

    it('should get port', function () {
      process.env.AWS_CSM_PORT = '31001';
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
      for (var disabled of ['0', 'false', '']) {
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
        AWS_CSM_ENABLED: '1',
        AWS_CSM_PORT: '54321',
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
        AWS_CSM_ENABLED: 'false',
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
