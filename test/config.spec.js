var hasProp = {}.hasOwnProperty;
var helpers = require('./helpers');
var AWS = helpers.AWS;
var iniLoader = AWS.util.iniLoader;
var configure = function(options) {
  return new AWS.Config(options);
};

describe('AWS.Config', function() {
  describe('constructor', function() {
    it('should be able to pass in a Config object as parameter', function() {
      var config = new AWS.Config({
        sslEnabled: false,
        maxRetries: 0
      });
      var copyConfig = new AWS.Config(config);
      expect(copyConfig).not.to.equal(config);
      expect(copyConfig.sslEnabled).to.equal(false);
      expect(copyConfig.maxRetries).to.equal(0);
    });

    it('should be able to pass credential values directly', function() {
      var config = new AWS.Config({
        accessKeyId: 'akid',
        secretAccessKey: 'secret',
        sessionToken: 'session'
      });
      expect(config.credentials.accessKeyId).to.equal('akid');
      expect(config.credentials.secretAccessKey).to.equal('secret');
      expect(config.credentials.sessionToken).to.equal('session');
    });
  });

  describe('region', function() {
    var oldEnv = process.env;

    beforeEach(function(done) {
      process.env = {};
      done();
    });

    afterEach(function() {
      process.env = oldEnv;
      if (iniLoader) iniLoader.clearCachedFiles();//iniLoader not available in browsers
    });

    it('defaults to undefined', function() {
      expect(configure().region).not.to.exist;
    });

    if (AWS.util.isNode()) {
      it('grabs AWS_REGION from the env', function() {
        process.env.AWS_REGION = 'us-west-2';
        var config = new AWS.Config();
        expect(config.region).to.equal('us-west-2');
      });

      it('also grabs AMAZON_REGION from the env', function() {
        process.env.AMAZON_REGION = 'us-west-1';
        var config = new AWS.Config();
        expect(config.region).to.equal('us-west-1');
      });

      it('prefers AWS_REGION to AMAZON_REGION', function() {
        process.env.AWS_REGION = 'us-west-2';
        process.env.AMAZON_REGION = 'us-west-1';
        var config = new AWS.Config();
        expect(config.region).to.equal('us-west-2');
      });

      describe('shared config file', function() {
        beforeEach(function() {
          var os = require('os');
          helpers.spyOn(os, 'homedir').andReturn('/home/user');
        });

        it('grabs region from shared credentials file if AWS_SDK_LOAD_CONFIG is set', function() {
          process.env.AWS_SDK_LOAD_CONFIG = '1';
          helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
            if (path.match(/[\/\\]home[\/\\]user[\/\\].aws[\/\\]credentials/)) {
              return '[default]\nregion = us-west-2';
            } else {
              return '[default]\nregion = eu-east-1';
            }
          });
          var config = new AWS.Config();
          expect(config.region).to.equal('us-west-2');
        });

        it('loads file from path specified in AWS_SHARED_CREDENTIALS_FILE if AWS_SDK_LOAD_CONFIG is set', function() {
          process.env.AWS_SDK_LOAD_CONFIG = '1';
          process.env.AWS_SHARED_CREDENTIALS_FILE = '/path/to/user/config/file';
          helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
            if (path === '/path/to/user/config/file') {
              return '[default]\nregion = us-west-2';
            } else {
              return '[default]\nregion = eu-east-1';
            }
          });
          var config = new AWS.Config();
          expect(config.region).to.equal('us-west-2');
        });

        it('grabs region from shared config if AWS_SDK_LOAD_CONFIG is set', function() {
          process.env.AWS_SDK_LOAD_CONFIG = '1';
          helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
            if (path.match(/[\/\\]home[\/\\]user[\/\\].aws[\/\\]config/)) {
              return '[default]\nregion = us-west-2';
            } else {
              return '[default]\naws_access_key_id = AKIAIOSFODNN7EXAMPLE\naws_secret_access_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';
            }
          });
          var config = new AWS.Config();
          expect(config.region).to.equal('us-west-2');
        });

        it('loads file from path specified in AWS_CONFIG_FILE if AWS_SDK_LOAD_CONFIG is set', function() {
          process.env.AWS_SDK_LOAD_CONFIG = '1';
          process.env.AWS_CONFIG_FILE = '/path/to/user/config/file';
          helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
            if (path === '/path/to/user/config/file') {
              return '[default]\nregion = us-west-2';
            } else {
              return '[default]\naws_access_key_id = AKIAIOSFODNN7EXAMPLE\naws_secret_access_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';
            }
          });
          var config = new AWS.Config();
          expect(config.region).to.equal('us-west-2');
        });

        it('uses the profile specified in AWS_PROFILE', function() {
          process.env.AWS_SDK_LOAD_CONFIG = '1';
          process.env.AWS_PROFILE = 'foo';
          helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
            if (path.match(/[\/\\]home[\/\\]user[\/\\].aws[\/\\]config/)) {
              return '[default]\nregion = us-west-1\n\n[profile foo]\nregion = us-west-2';
            } else {
              return '[default]\nregion = eu-east-1';
            }
          });
          var config = new AWS.Config();
          expect(config.region).to.equal('us-west-2');
        });

        it('prefers AWS_REGION to the shared config file', function() {
          process.env.AWS_REGION = 'us-east-1';
          process.env.AWS_SDK_LOAD_CONFIG = '1';
          var mock = '[default]\nregion = us-west-2';
          helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock);
          var config = new AWS.Config();
          expect(config.region).to.equal('us-east-1');
        });

        it('non-existent credentials file returns empty', function() {
          process.env.AWS_SDK_LOAD_CONFIG = '1';
          var mock = '[default]\nregion = us-west-2';
          helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
            if (path.match(/[\/\\]home[\/\\]user[\/\\].aws[\/\\]config/)) {
              return mock;
            } else {
              throw new Error('File does not exist!');
            }
          });
          var config = new AWS.Config();
          expect(config.region).to.equal('us-west-2');
        });
      });
    }

    it('can be set to a string', function() {
      expect(configure({
        region: 'us-west-1'
      }).region).to.equal('us-west-1');
    });
  });

  describe('logger', function() {
      var oldEnv = process.env;

      beforeEach(function(done) {
        process.env = {};
        done();
      });

      afterEach(function() {
        process.env = oldEnv;
      });

      it('defaults to null', function() {
        expect(configure().logger).not.to.exist;
      });

      it('can be set to an object', function() {
        var myLogger = {log: function() {}};
        expect(configure({
          logger: myLogger
        }).logger).to.equal(myLogger);
      });

      if (AWS.util.isNode()) {
        it('grabs AWSJS_DEBUG from the env', function() {
          process.env.AWSJS_DEBUG = '1';
          var config = new AWS.Config();
          expect(config.logger).to.equal(console);
        });

        it('should prefer loggers supplied in code', function() {
          process.env.AWSJS_DEBUG = '1';

          var myLogger = {log: function() {}};
          expect(configure({
            logger: myLogger
          }).logger).to.equal(myLogger);
        });
      }
  });

  describe('maxRetries', function() {
    it('defaults to unefined', function() {
      expect(configure().maxRetries).to.equal(void 0);
    });

    it('can be set to an integer', function() {
      expect(configure({
        maxRetries: 2
      }).maxRetries).to.equal(2);
    });
  });

  describe('retryDelayOptions', function() {
    it('can set "base" to an integer', function() {
      expect(configure({
        retryDelayOptions: {
          base: 30
        }
      }).retryDelayOptions).to.eql({
        base: 30
      });
    });
  });

  describe('paramValidation', function() {
    it('defaults to true', function() {
      expect(configure().paramValidation).to.equal(true);
    });
  });

  describe('computeChecksums', function() {
    it('defaults to true', function() {
      expect(configure().computeChecksums).to.equal(true);
    });
  });

  describe('sslEnabled', function() {
    it('defaults to true', function() {
      expect(configure().sslEnabled).to.equal(true);
    });

    it('can be set to false', function() {
      expect(configure({
        sslEnabled: false
      }).sslEnabled).to.equal(false);
    });
  });

  describe('httpOptions', function() {
    it('defaults to {timeout:120000}', function() {
      expect(configure().httpOptions).to.eql({
        timeout: 120000
      });
    });
  });

  describe('systemClockOffset', function() {
    it('defaults to 0', function() {
      expect(configure().systemClockOffset).to.equal(0);
    });
  });

  describe('correctClockSkew', function() {
    it('defaults to false', function() {
      expect(configure().correctClockSkew).to.equal(false);
    });
  });

  describe('customUserAgent', function() {
    it('defaults to null', function() {
      expect(configure().customUserAgent).to.equal(null);
    });
  });

  describe('useAccelerateEndpoint', function() {
    it('defaults to false', function() {
      expect(configure().useAccelerateEndpoint).to.equal(false);
    });
  });

  describe('s3DisableBodySigning', function() {
    it('defaults to true', function() {
      expect(configure().s3DisableBodySigning).to.equal(true);
    });
  });

  describe('set', function() {
    it('should set a default value for a key', function() {
      var config = new AWS.Config();
      config.set('maxRetries', void 0, 'DEFAULT');
      expect(config.maxRetries).to.equal('DEFAULT');
    });

    it('should execute default value if it is a function', function() {
      var mock = helpers.createSpy();
      var config = new AWS.Config();
      config.set('maxRetries', void 0, mock);
      expect(mock.calls.length).not.to.equal(0);
    });

    it('should not expand default value function if value is present', function() {
      var mock = helpers.createSpy();
      var config = new AWS.Config();
      config.set('maxRetries', 'VALUE', mock);
      expect(mock.calls.length).to.equal(0);
    });
  });

  describe('clear', function() {
    it('should be able to clear all key values from a config object', function() {
      var config = new AWS.Config({
        credentials: {},
        maxRetries: 300,
        sslEnabled: 'foo'
      });
      expect(config.maxRetries).to.equal(300);
      expect(config.sslEnabled).to.equal('foo');
      expect(config.credentials).not.to.equal(void 0);
      config.clear();
      expect(config.maxRetries).to.equal(void 0);
      expect(config.sslEnabled).to.equal(void 0);
      expect(config.credentials).not.to.equal(void 0);
      expect(config.credentialProvider).not.to.equal(void 0);
    });
  });

  describe('update', function() {
    it('should be able to update keyed values', function() {
      var config = new AWS.Config();
      expect(config.maxRetries).to.equal(void 0);
      config.update({
        maxRetries: 10
      });
      expect(config.maxRetries).to.equal(10);
    });

    it('should ignore non-keyed values', function() {
      var config = new AWS.Config();
      config.update({
        foo: 10
      });
      expect(config.foo).to.equal(void 0);
    });

    describe('should allow', function() {
      var allServices = require('../clients/all');
      var results = [];
      for (var className in allServices) {
        if (!hasProp.call(allServices, className)) continue;
        var ctor = allServices[className];
        var serviceIdentifier = className.toLowerCase();
        results.push((function(id) {
          it(id + ' to be set', function() {
            var config = new AWS.Config();
            var params = {};
            params[id] = {
              endpoint: 'localhost'
            };
            config.update(params);
            expect(config[id]).to.eql({
              endpoint: 'localhost'
            });
          });
        })(serviceIdentifier));
      }
    });

    it('allows unknown keys if allowUnknownKeys is set', function() {
      var config = new AWS.Config();
      config.update({
        foo: 10
      }, true);
      expect(config.foo).to.equal(10);
    });

    it('should be able to update literal credentials', function() {
      var config = new AWS.Config();
      config.update({
        accessKeyId: 'akid',
        secretAccessKey: 'secret',
        sessionToken: 'session'
      });
      expect(config.credentials.accessKeyId).to.equal('akid');
      expect(config.credentials.secretAccessKey).to.equal('secret');
      expect(config.credentials.sessionToken).to.equal('session');
    });

    it('should deep merge httpOptions', function() {
      var config = new AWS.Config();
      config.update({
        httpOptions: {
          timeout: 1
        }
      });
      config.update({
        httpOptions: {
          xhrSync: true
        }
      });
      expect(config.httpOptions.timeout).to.equal(1);
      expect(config.httpOptions.xhrSync).to.equal(true);
    });
  });

  return describe('getCredentials', function() {
    var spy = null;
    var config = null;
    beforeEach(function(done) {
      spy = helpers.createSpy('getCredentials callback');
      done();
    });

    var expectValid = function(options, key) {
      if (options instanceof AWS.Config) {
        config = options;
      } else {
        config = new AWS.Config(options);
      }
      config.getCredentials(spy);
      expect(spy.calls.length).not.to.equal(0);
      expect(spy.calls[0]['arguments'][0]).not.to.exist;
      if (key) {
        expect(config.credentials.accessKeyId).to.equal(key);
      }
    };

    var expectError = function(options, message) {
      if (options instanceof AWS.Config) {
        config = options;
      } else {
        config = new AWS.Config(options);
      }
      config.getCredentials(spy);
      expect(spy.calls.length).not.to.equal(0);
      expect(spy.calls[0]['arguments'][0].code).to.equal('CredentialsError');
      expect(spy.calls[0]['arguments'][0].name).to.equal('CredentialsError');
      expect(spy.calls[0]['arguments'][0].message).to.equal(message);
    };

    it('should check credentials for static object first', function() {
      expectValid({
        credentials: {
          accessKeyId: '123',
          secretAccessKey: '456'
        }
      });
    });

    it('should error if static credentials are not available', function() {
      expectError({
        credentials: {}
      }, 'Missing credentials');
    });

    it('should check credentials for async get() method', function() {
      expectValid({
        credentials: {
          get: function(cb) {
            return cb();
          }
        }
      });
    });

    it('should error if credentials.get() cannot resolve', function() {
      var error = new Error('Error!');
      error.code = 'FooError';
      error.name = 'BarError';
      var options = {
        credentials: {
          constructor: {
            name: 'CustomCredentials'
          },
          get: function(cb) {
            return cb(error, null);
          }
        }
      };
      expectError(options, 'Could not load credentials from CustomCredentials');
    });

    it('should check credentialProvider if no credentials', function() {
      expectValid({
        credentials: null,
        credentialProvider: {
          resolve: function(cb) {
            return cb(null, {
              accessKeyId: 'key',
              secretAccessKey: 'secret'
            });
          }
        }
      });
    });

    it('should error if credentialProvider fails to resolve', function() {
      var error = new Error('Error!');
      error.code = 'FooError';
      error.name = 'BarError';
      var options = {
        credentials: null,
        credentialProvider: {
          resolve: function(cb) {
            return cb(error, null);
          }
        }
      };
      expectError(options, 'Could not load credentials from any providers');
    });

    it('should error if no credentials or credentialProvider', function() {
      var options = {
        credentials: null,
        credentialProvider: null
      };
      expectError(options, 'No credentials to load');
    });
  });
});

describe('AWS.config', function() {
  it('should be a default Config object', function() {
    expect(AWS.config.sslEnabled).to.equal(true);
    expect(AWS.config.maxRetries).to.equal(void 0);
  });

  it('can set default config to an object literal', function() {
    var oldConfig = AWS.config;
    AWS.config = {};
    expect(AWS.config).to.eql({});
    AWS.config = oldConfig;
  });

  describe('setPromisesDependency', function() {
    it('updates promise support on requests', function() {
      var utilSpy = helpers.spyOn(AWS.util, 'addPromises');
      AWS.config.setPromisesDependency(function() {});
      expect(utilSpy.calls.length).to.equal(1);
      expect(Array.isArray(utilSpy.calls[0]['arguments'][0])).to.be['true'];
      expect(utilSpy.calls[0]['arguments'][0].length).to.equal(5);
    });

    if (typeof Promise !== 'undefined') {
      it('reverts to native promises when null is passed', function() {
        var P = function() {};
        var utilSpy = helpers.spyOn(AWS.util, 'addPromises');
        AWS.config.setPromisesDependency(P);
        expect(utilSpy.calls[0]['arguments'][1] === P).to.be['true'];
        AWS.config.setPromisesDependency(null);
        expect(utilSpy.calls[1]['arguments'][1] === Promise).to.be['true'];
        expect(utilSpy.calls[1]['arguments'][1] === P).to.be['false'];
      });
    }
  });

  describe('getPromisesDependency', function() {
    it('returns PromisesDependency if set', function() {
      AWS.config.setPromisesDependency();
      expect(AWS.config.getPromisesDependency()).to.be.undefined;
      var P = function() {};
      AWS.config.setPromisesDependency(P);
      var dep = AWS.config.getPromisesDependency();
      expect(dep).to.equal(P);
    });
  });
});
