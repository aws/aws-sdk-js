var exec = require('child_process').exec;
var helpers = require('./helpers');

var build = helpers.build;
var collector = helpers.collector;
var expect = helpers.chai.expect;

describe('ServiceCollector', function() {
  var add, assertBundleFailed, assertServiceAdded, code;
  code = null;
  add = function(services) {
    return code = collector(services);
  };
  assertServiceAdded = function(klass, version) {
    version = version || new helpers.AWS[klass]({
      endpoint: 'localhost'
    }).api.apiVersion;
    expect(code).to.match(new RegExp('AWS\\.' + klass + ' = AWS\\.Service\\.defineService\\(\'' + helpers.AWS[klass].serviceIdentifier + '\''));
    return expect(code).to.match(new RegExp('AWS\\.apiLoader\\.services\\[\'' + klass.toLowerCase() + '\'\\]\\[\'' + version + '\'\\] ='));
  };
  assertBundleFailed = function(services, errMsg) {
    return expect(function() {
      return add(services);
    }).to['throw'](errMsg);
  };
  it('accepts comma delimited services by name', function() {
    add('s3,cloudwatch');
    assertServiceAdded('S3');
    assertServiceAdded('CloudWatch');
    return assertServiceAdded('STS');
  });
  it('uses latest service version if version suffix is not supplied', function() {
    add('rds');
    return assertServiceAdded('RDS');
  });
  it('accepts fully qualified service-version pair', function() {
    add('rds-2013-09-09');
    return assertServiceAdded('RDS', '2013-09-09');
  });
  it('accepts "all" for all services', function() {
    add('all');
    return Object.keys(helpers.AWS).forEach(function(name) {
      if (helpers.AWS[name].serviceIdentifier) {
        return assertServiceAdded(name);
      }
    });
  });
  it('throws an error if the service does not exist', function() {
    return assertBundleFailed('invalidmodule', 'Missing modules: invalidmodule');
  });
  it('throws an error if the service version does not exist', function() {
    var msg, services;
    services = 's3-1999-01-01';
    msg = 'Missing modules: s3-1999-01-01';
    return assertBundleFailed(services, msg);
  });
  it('groups multiple errors into one error object', function() {
    var msg, services;
    services = 's3-1999-01-01,invalidmodule,dynamodb-01-01-01';
    msg = 'Missing modules: dynamodb-01-01-01, invalidmodule, s3-1999-01-01';
    return assertBundleFailed(services, msg);
  });
  return it('throws an opaque error if special characters are found (/, ., *)', function() {
    var msg;
    msg = 'Incorrectly formatted service names';
    assertBundleFailed('path/to/service', msg);
    assertBundleFailed('to/../../../root', msg);
    assertBundleFailed('*.js', msg);
    assertBundleFailed('a.b', msg);
    assertBundleFailed('a=b', msg);
    assertBundleFailed('!d', msg);
    return assertBundleFailed('valid1,valid2,invalid.module', msg);
  });
});

describe('build', function() {
  var buildBundle, bundleCache, data, err;
  bundleCache = {};
  err = null;
  data = null;
  buildBundle = function(services, opts, code, cb) {
    var cacheKey, result;
    opts = opts || {};
    opts.services = services;
    cacheKey = JSON.stringify({
      options: opts
    });
    if (bundleCache[cacheKey]) {
      result = null;
      if (code) {
        result = helpers.evalCode(code, bundleCache[cacheKey]);
      }
      return cb(null, result);
    }
    return build(function(err, d) {
      data = d;
      bundleCache[cacheKey] = data;
      result = null;
      if (!err && code) {
        result = helpers.evalCode(code, data);
      }
      return cb(err, result);
    });
  };
  it('defaults to no minification', function() {
    return buildBundle(null, null, 'window.AWS', function(err, AWS) {
      return expect(data).to.match(/Copyright Amazon\.com/i);
    });
  });
  it('can be minified (slow)', function() {
    return buildBundle(null, {
      minify: true
    }, null, function() {
      expect(data).to.match(/Copyright Amazon\.com/i);
      return expect(data).to.match(/function \w\(\w,\w,\w\)\{function \w\(\w,\w\)\{/);
    });
  });
  it('can build default services into bundle', function() {
    return buildBundle(null, null, 'window.AWS', function(err, AWS) {
      expect(new AWS.S3().api.apiVersion).to.equal(new helpers.AWS.S3().api.apiVersion);
      expect(new AWS.DynamoDB().api.apiVersion).to.equal(new helpers.AWS.DynamoDB().api.apiVersion);
      return expect(new AWS.STS().api.apiVersion).to.equal(new helpers.AWS.STS().api.apiVersion);
    });
  });
  it('can build all services into bundle', function() {
    return buildBundle('all', null, 'window.AWS', function(err, AWS) {
      return Object.keys(helpers.AWS).forEach(function(k) {
        if (k.serviceIdentifier) {
          return expect(typeof AWS[k]).to.equal('object');
        }
      });
    });
  });
  return describe('as executable', function() {
    var cwd, script;
    cwd = __dirname + '/../';
    script = './browser-builder.js ';
    it('uses first argument to get services list', function(done) {
      return exec(script + 'iam-2010-05-08', {
        cwd: cwd,
        maxBuffer: 999999999
      }, function(e, out) {
        expect(out).to.match(/Copyright Amazon\.com/i);
        expect(out).to.contain('"2010-05-08"');
        expect(out).not.to.contain('"2006-03-01"');
        return done();
      });
    });
    return it('uses MINIFY environment variable to set minification mode', function(done) {
      var env;
      env = JSON.parse(JSON.stringify(process.env));
      env.MINIFY = '1';
      return exec(script, {
        cwd: cwd,
        maxBuffer: 999999999
      }, function(e, out) {
        expect(out).to.match(/Copyright Amazon\.com/i);
        expect(out).to.match(/function \w\(\w,\w,\w\)\{function \w\(\w,\w\)\{/);
        expect(out).to.contain('"2006-03-01"');
        return done();
      });
    });
  });
});
