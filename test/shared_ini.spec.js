var helpers = require('./helpers');
var os = require('os');
var AWS = helpers.AWS;
var IniLoader = AWS.IniLoader;

function validateCachedFiles(iniFile, expectedCache) {
  if (!expectedCache) return false;
  helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function() {throw new Error('shouldn\'t load new profiles');});
  for (var i = 0, filePaths = Object.keys(expectedCache); i < filePaths.length; i++) {
    var path = filePaths[i];
    expect(iniFile.loadFrom({filename: path})).to.eql(expectedCache[path]);
  }
}

if (AWS.util.isNode()) {
  describe('AWS.iniLoader', function() {
    var homedir;
    var env;

    beforeEach(function() {
      homedir = os.homedir;
      env = process.env;
      process.env = {};
    });

    afterEach(function() {
      os.homedir = homedir;
      process.env = env;
    });

    describe ('constructor', function() {
      it('should only read config file lazily when need to', function() {
        helpers.spyOn(os, 'homedir').andReturn('/foo/bar/baz');
        helpers.spyOn(AWS.util, 'readFileSync');
        var iniLoader = new IniLoader();
        expect(AWS.util.readFileSync.calls.length).to.equal(0);
      });
    });

    describe('loadFrom', function() {
      var iniLoader;

      beforeEach(function() {
        iniLoader = new IniLoader();
      });

      it('load config file with profile name indexed', function () {
        helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
          if (path === '/User/foo/config') {
            return '[default]\naws_access_key_id = akid\naws_secret_access_key = secret\n[profile user1]\naws_access_key_id = acki\naws_secret_access_key = asak\n';
          }
          return '[default]\naws_access_key_id = akid\naws_secret_access_key = secret\n';
        });
        iniLoader.loadFrom({isConfig: true, filename: '/User/foo/config'});
        validateCachedFiles(iniLoader, {
          '/User/foo/config': {
            'default': {
              'aws_access_key_id': 'akid',
              'aws_secret_access_key': 'secret'
            },
            'user1': {
              'aws_access_key_id': 'acki',
              'aws_secret_access_key': 'asak'
            }
          }
        });
      });

      it('load default profiles filename is not supplied', function() {
        process.env.HOME = '/foo';
        helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
          if (path === '/foo/.aws/config') return '[default]\naws_access_key_id = akid\naws_secret_access_key = secret';
          else return '[default]\naws_access_key_id = akid2\naws_secret_access_key = secret2';
        });
        var iniFile = new IniLoader();
        expect(iniFile.loadFrom({isConfig: true})).to.eql({'default': {'aws_access_key_id': 'akid', 'aws_secret_access_key': 'secret'}});
        expect(iniFile.loadFrom({})).to.eql({'default': {'aws_access_key_id': 'akid2', 'aws_secret_access_key': 'secret2'}});
      });

      it('load credentials file if isConfig parameter is not set', function() {
        helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
          if (path === '/foo/bar') return '[profile user]\naws_access_key_id = akid\naws_secret_access_key = secret';
          else if (path === '/foo/qux') return '[profile user2]\naws_access_key_id = akid2\naws_secret_access_key = secret2';
        });
        var iniFile = new IniLoader();
        expect(iniFile.loadFrom({isConfig: true, filename: '/foo/bar'})).to.eql({'user': {'aws_access_key_id': 'akid', 'aws_secret_access_key': 'secret'}});
        //for credients, the prefix 'profile ' of the profile name won't be removed
        expect(iniFile.loadFrom({filename: '/foo/qux'})).to.eql({'profile user2': {'aws_access_key_id': 'akid2', 'aws_secret_access_key': 'secret2'}});
      });

      it('won\'t load same file twice', function() {
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
        iniLoader.loadFrom({filename: 'foo'});
        iniLoader.loadFrom({filename: 'foo'});
        expect(AWS.util.readFileSync.calls.length).to.eql(1);
      });

      it('load default profiles according to environmental variables', function() {
        helpers.spyOn(os, 'homedir').andCallThrough();
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
        process.env = {HOME: '/foo', USERPROFILE: '/bar', HOMEPATH: '/baz', HOMEDRIVE: '/quz'};
        var iniFile = new IniLoader();
        iniFile.loadFrom({isConfig: true});
        iniFile.loadFrom({});
        expect(AWS.util.readFileSync.calls.length).to.eql(2);
        expect(AWS.util.readFileSync.calls[0].arguments).to.eql(['/foo/.aws/config']);
        expect(AWS.util.readFileSync.calls[1].arguments).to.eql(['/foo/.aws/credentials']);
        delete process.env.HOME;
        iniFile.loadFrom({isConfig: true});
        iniFile.loadFrom({});
        expect(AWS.util.readFileSync.calls.length).to.eql(4);
        expect(AWS.util.readFileSync.calls[2].arguments).to.eql(['/bar/.aws/config']);
        expect(AWS.util.readFileSync.calls[3].arguments).to.eql(['/bar/.aws/credentials']);
        delete process.env.USERPROFILE;
        iniFile.loadFrom({isConfig: true});
        iniFile.loadFrom({});
        expect(AWS.util.readFileSync.calls.length).to.eql(6);
        expect(AWS.util.readFileSync.calls[4].arguments).to.eql(['/quz/baz/.aws/config']);
        expect(AWS.util.readFileSync.calls[5].arguments).to.eql(['/quz/baz/.aws/credentials']);
        delete process.env.HOMEDRIVE;
        iniFile.loadFrom({isConfig: true});
        iniFile.loadFrom({});
        expect(AWS.util.readFileSync.calls.length).to.eql(8);
        expect(AWS.util.readFileSync.calls[6].arguments).to.eql(['C:/baz/.aws/config']);
        expect(AWS.util.readFileSync.calls[7].arguments).to.eql(['C:/baz/.aws/credentials']);
        expect(os.homedir.calls.length).to.eql(0);
      });
    });

    describe('clearCachedFiles', function() {
      it('remove all cached files', function() {
        process.env.HOME = '/foo';
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
        var iniFile = new IniLoader();
        iniFile.loadFrom();
        validateCachedFiles(iniFile, {
          '/foo/.aws/credentials': {},
        });
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
        expect(AWS.util.readFileSync.calls.length).to.eql(0);
        iniFile.loadFrom();
        expect(AWS.util.readFileSync.calls.length).to.eql(0);
        iniFile.clearCachedFiles();
        iniFile.loadFrom();
        expect(AWS.util.readFileSync.calls.length).to.eql(1);
      });
    });

    describe('resolvedProfiles', function() {
      var iniFile;
      beforeEach(function() {
        process.env.HOME = '/foo';
        helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
          if (path === '/foo/.aws/config') return '[default]\naws_access_key_id = akid\naws_secret_access_key = secret';
          else return '[default]\naws_access_key_id = akid2\naws_secret_access_key = secret2';
        });
        iniFile = new IniLoader();
        iniFile.loadFrom({isConfig: true});
        iniFile.loadFrom({});
      });

      afterEach(function() {
        iniFile.clearCachedFiles();
      });

      it('is un-enumerable', function() {
        expect(iniFile.resolvedProfiles).to.eql({});
        validateCachedFiles(iniFile, {
          '/foo/.aws/config': {
            'default': {
              'aws_access_key_id': 'akid',
              'aws_secret_access_key': 'secret'
            }
          },
          '/foo/.aws/credentials': {
            'default': {
              'aws_access_key_id': 'akid2',
              'aws_secret_access_key': 'secret2'
            }
          },
        });
      });

      it('profile config/credentials is not configurable', function() {
        delete iniFile.resolvedProfiles['/foo/.aws/config'];
        iniFile.resolvedProfiles['/foo/.aws/credentials'].default = {};
        validateCachedFiles(iniFile, {
          '/foo/.aws/config': {
            'default': {
              'aws_access_key_id': 'akid',
              'aws_secret_access_key': 'secret'
            }
          },
          '/foo/.aws/credentials': {
            'default': {
              'aws_access_key_id': 'akid2',
              'aws_secret_access_key': 'secret2'
            }
          },
        });
      });
    });
  });
}
