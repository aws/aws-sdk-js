var helpers = require('./helpers');
var SharedIniFile = require('../lib/shared-ini-file/shared_ini');
var os = require('os');
var AWS = helpers.AWS;

function validateCachedFiles(iniFile, expectedCache) {
  if (!expectedCache) return false;
  helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function() {throw new Error('shouldn\'t load new profiles')})
  for (var i = 0, filePaths = Object.keys(expectedCache); i < filePaths.length; i++) {
    var path = filePaths[i];
    expect(iniFile.loadFrom({filename: path})).to.eql(expectedCache[path]);
  }
}

if (AWS.util.isNode()) {
  describe('AWS.sharedIniFile', function() {
    var homedir = os.homedir;
    var env = process.env;
    
    beforeEach(function() {
      process.env = {};
    });
  
    after(function() {
      os.homedir = homedir;
      process.env = env;
    });
  
    describe ('constructor', function() {
      it('skip loading defaults files if cannot be loaded', function() {
        helpers.spyOn(os, 'homedir').andReturn('/foo/bar/baz');
        helpers.spyOn(AWS.util, 'readFileSync').andCallThrough();
        var error;
        var sharedIniFile;
        try {
          sharedIniFile = new SharedIniFile();
        } catch (e) {
          error = e;
        }
        expect(AWS.util.readFileSync.calls.length).to.equal(1);
        expect(error).to.eql(undefined);
        //if the path is not cached, loadFrom() will try to read file again
        try {
          sharedIniFile.loadFrom({filename: '/foo/bar/baz/.aws/credentials'});
        } catch (e) {
          error = e;
        }
        expect(AWS.util.readFileSync.calls.length).to.equal(2);
        expect(error).not.to.undefined;
      });
  
      it('can load config and credentials by default if available', function() {
        helpers.spyOn(os, 'homedir').andReturn('/foo/bar/baz');
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('[default]\naws_access_key_id = akid\naws_secret_access_key = secret\naws_session_token = session');
        var sharedIniFile = new SharedIniFile();
        expect(AWS.util.readFileSync.calls.length).to.eql(2);
        validateCachedFiles(sharedIniFile, {
          '/foo/bar/baz/.aws/credentials': {
            'default': {
              'aws_access_key_id': 'akid',
              'aws_secret_access_key': 'secret',
              'aws_session_token': 'session',
            }
          },
          '/foo/bar/baz/.aws/config': {
            'default': {
              'aws_access_key_id': 'akid',
              'aws_secret_access_key': 'secret',
              'aws_session_token': 'session',
            }
          },
        })
      });
  
      it('load default profiles according to environmental variables', function() {
        helpers.spyOn(os, 'homedir').andCallThrough();
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
        process.env = {HOME: '/foo', USERPROFILE: '/bar', HOMEPATH: '/baz', HOMEDRIVE: '/quz'};
        new SharedIniFile();
        expect(AWS.util.readFileSync.calls.length).to.eql(2);
        expect(AWS.util.readFileSync.calls[0].arguments).to.eql(['/foo/.aws/config']);
        expect(AWS.util.readFileSync.calls[1].arguments).to.eql(['/foo/.aws/credentials']);
        delete process.env.HOME;
        new SharedIniFile();
        expect(AWS.util.readFileSync.calls.length).to.eql(4);
        expect(AWS.util.readFileSync.calls[2].arguments).to.eql(['/bar/.aws/config']);
        expect(AWS.util.readFileSync.calls[3].arguments).to.eql(['/bar/.aws/credentials']);
        delete process.env.USERPROFILE;
        new SharedIniFile();
        expect(AWS.util.readFileSync.calls.length).to.eql(6);
        expect(AWS.util.readFileSync.calls[4].arguments).to.eql(['/quz/baz/.aws/config']);
        expect(AWS.util.readFileSync.calls[5].arguments).to.eql(['/quz/baz/.aws/credentials']);
        delete process.env.HOMEDRIVE;
        new SharedIniFile();
        expect(AWS.util.readFileSync.calls.length).to.eql(8);
        expect(AWS.util.readFileSync.calls[6].arguments).to.eql(['C:/baz/.aws/config']);
        expect(AWS.util.readFileSync.calls[7].arguments).to.eql(['C:/baz/.aws/credentials']);
        expect(os.homedir.calls.length).to.eql(0);
      });
    });
  
    describe('loadFrom', function() {
      var sharedIniFile;
  
      beforeEach(function() {
        sharedIniFile = new SharedIniFile();
      })
  
      it('load config file with profile name indexed', function () {
        helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
          if (path === '/User/foo/config') {
            return '[default]\naws_access_key_id = akid\naws_secret_access_key = secret\n[profile user1]\naws_access_key_id = acki\naws_secret_access_key = asak\n';
          }
          return '[default]\naws_access_key_id = akid\naws_secret_access_key = secret\n';
        });
        sharedIniFile.loadFrom({isConfig: true, filename: '/User/foo/config'});
        validateCachedFiles(sharedIniFile, {
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
        })
      });
  
      it('load default profiles filename is not supplied', function() {
        process.env.HOME = '/foo';
        helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
          if (path === '/foo/.aws/config') return '[default]\naws_access_key_id = akid\naws_secret_access_key = secret';
          else return '[default]\naws_access_key_id = akid2\naws_secret_access_key = secret2'
        });
        var iniFile = new SharedIniFile();
        expect(iniFile.loadFrom({isConfig: true})).to.eql({'default': {'aws_access_key_id': 'akid', 'aws_secret_access_key': 'secret'}});
        expect(iniFile.loadFrom({})).to.eql({'default': {'aws_access_key_id': 'akid2', 'aws_secret_access_key': 'secret2'}});
      });
  
      it('load credentials file if isConfig parameter is not set', function() {
        helpers.spyOn(AWS.util, 'readFileSync').andCallFake(function(path) {
          if (path === '/foo/bar') return '[profile user]\naws_access_key_id = akid\naws_secret_access_key = secret';
          else if (path === '/foo/qux') return '[profile user2]\naws_access_key_id = akid2\naws_secret_access_key = secret2'
        });
        var iniFile = new SharedIniFile();
        expect(iniFile.loadFrom({isConfig: true, filename: '/foo/bar'})).to.eql({'user': {'aws_access_key_id': 'akid', 'aws_secret_access_key': 'secret'}});
        //for credients, the prefix 'profile ' of the profile name won't be removed
        expect(iniFile.loadFrom({filename: '/foo/qux'})).to.eql({'profile user2': {'aws_access_key_id': 'akid2', 'aws_secret_access_key': 'secret2'}});
      });
  
      it('won\'t load same file twice', function() {
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
        sharedIniFile.loadFrom({filename: 'foo'});
        sharedIniFile.loadFrom({filename: 'foo'});
        expect(AWS.util.readFileSync.calls.length).to.eql(1);
      });
    });
  
    describe('clearCachedFiles', function() {
      it('remove all cached files', function() {
        process.env.HOME = '/foo';
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
        var iniFile = new SharedIniFile();
        validateCachedFiles(iniFile, {
          '/foo/.aws/config': {},
          '/foo/.aws/credentials': {},
        })
        iniFile.clearCachedFiles();
        helpers.spyOn(AWS.util, 'readFileSync').andReturn('');
        iniFile.loadFrom({filename: '/foo/.aws/config'});
        expect(Object.keys(iniFile.resolvedProfiles).length).to.eql(1);
        iniFile.loadFrom({filename: '/foo/.aws/credentials'});
        expect(Object.keys(iniFile.resolvedProfiles).length).to.eql(2);
      })
    });
  });
}