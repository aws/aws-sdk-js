var helpers = require('../helpers');
var AWS = helpers.AWS;
var spyOn = helpers.spyOn;
var monitoringConfig = require('../../lib/publisher/configuration');
var iniLoader = require('../../lib/shared-ini').iniLoader;

if (AWS.util.isNode()) {
  describe('configuration resolving', function () {
    var processEnv;

    beforeEach(function() {
      processEnv = process.env;
      process.env = {
        'HOME': '/home/user'
      };
    });

    afterEach(function() {
      iniLoader.clearCachedFiles();
      process.env = processEnv;
    });
  
    describe('get configurations from environmental variable', function () {
      it('should correctly parse truthy value to true', function () {
        var enabled = ['1', 'true', 'whatever', 'X', '99'];
        for (var i = 0; i < enabled.length; i++) {
          process.env.AWS_CSM_ENABLED = enabled[i];
          helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
          expect(monitoringConfig()).to.eql({
            enabled: true,
            port: undefined,
            clientId: undefined
          });
        }
      });
  
      it('should correctly parse falsy value to false', function () {
        var disabled = ['0', 'false', ''];
        for (var i = 0; i < disabled.length; i++) {
          process.env.AWS_CSM_ENABLED = disabled[i];
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
        process.env.AWS_CSM_CLIENT_ID = 'client_id';
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
        var enabled = ['1', 'true', 'whatever', 'X', '99'];
        for (var i = 0; i < enabled.length; i++) {
          process.env.AWS_PROFILE = 'dummyRole';
          helpers.spyOn(AWS.util, 'readFileSync').andReturn('[profile dummyRole]\ncsm_enabled=' + enabled[i]);
          expect(monitoringConfig()).to.eql({
            enabled: true,
            port: undefined,
            clientId: undefined
          });
        }
      });
  
      it('should correctly parse falsy value to false', function () {
        var disabled = ['0', 'false', ''];
        for (var i = 0; i < disabled.length; i++) {
          helpers.spyOn(AWS.util, 'readFileSync').andReturn('[default]\ncsm_enabled=' + disabled[i]);
          expect(monitoringConfig()).to.eql({
            enabled: false,
            port: undefined,
            clientId: undefined
          });
        }
      });

      it('should not use configurations from config file when exceptions happen', function() {
        helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function() {
          throw new Error();
        });
        expect(monitoringConfig()).to.eql({
          enabled: false,
          port: undefined,
          clientId: undefined
        });
      })
  
      it('should get port', function () {
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('[default]\ncsm_port=31001');
        expect(monitoringConfig()).to.eql({
          enabled: false,
          port: 31001,
          clientId: undefined,
        });
      });
  
      it('should get clientID', function () {
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('[default]\ncsm_client_id=id');
        expect(monitoringConfig()).to.eql({
          enabled: false,
          port: undefined,
          clientId: 'id',
        });
      })
    });
  
    describe('get configurations according to resolving chain', function () {
      it('should prefer environmental variables over config file', function () {
        process.env.AWS_PROFILE = 'role';
        process.env.AWS_CSM_ENABLED = '1';
        process.env.AWS_CSM_PORT = '54321';
        helpers.spyOn(AWS.util, 'readFileSync').andReturn(
          '[profile role]\ncsm_enabled=false\ncsm_client_id=clientid'
        );
        expect(monitoringConfig()).to.eql({
          enabled: true,
          port: 54321,
          clientId: 'clientid',
        });
      });
  
      it('should not read shared config file if monitoring disabled from environment', function () {
        process.env.AWS_PROFILE = 'role';
        process.env.AWS_CSM_ENABLED = 'false';
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
}
