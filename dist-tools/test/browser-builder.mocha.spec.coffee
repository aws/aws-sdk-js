helpers = require('./helpers')
build = helpers.build
collector = helpers.collector
exec = require('child_process').exec
fs = require('fs')
expect = helpers.chai.expect

describe 'ServiceCollector', ->
  code = null

  add = (services) -> code = collector(services)

  assertServiceAdded = (klass, version) ->
    version = version || new helpers.AWS[klass](endpoint: 'localhost').api.apiVersion;
    expect(code).to.match(new RegExp('AWS\\.' + klass +
      ' = AWS\\.Service\\.defineService\\(\'' +
      helpers.AWS[klass].serviceIdentifier + '\''))
    expect(code).to.match(new RegExp(
      'AWS\\.apiLoader\\.services\\[\'' + klass.toLowerCase() +
      '\'\\]\\[\'' + version + '\'\\] ='))

  assertBundleFailed = (services, errMsg) ->
    expect(-> add(services)).to.throw(errMsg)

  it 'accepts comma delimited services by name', ->
    add 's3,cloudwatch'
    assertServiceAdded 'S3'
    assertServiceAdded 'CloudWatch'
    assertServiceAdded 'STS' # STS always added

  it 'uses latest service version if version suffix is not supplied', ->
    add 'rds'
    assertServiceAdded 'RDS'

  it 'accepts fully qualified service-version pair', ->
    add 'rds-2013-09-09'
    assertServiceAdded 'RDS', '2013-09-09'

  it 'accepts "all" for all services', ->
    add 'all'
    Object.keys(helpers.AWS).forEach (name) ->
      if helpers.AWS[name].serviceIdentifier
        assertServiceAdded(name)

  it 'throws an error if the service does not exist', ->
    assertBundleFailed 'invalidmodule', 'Missing modules: invalidmodule'

  it 'throws an error if the service version does not exist', ->
    services = 's3-1999-01-01'
    msg = 'Missing modules: s3-1999-01-01'
    assertBundleFailed(services, msg)

  it 'groups multiple errors into one error object', ->
    services = 's3-1999-01-01,invalidmodule,dynamodb-01-01-01'
    msg = 'Missing modules: dynamodb-01-01-01, invalidmodule, s3-1999-01-01'
    assertBundleFailed(services, msg)

  it 'throws an opaque error if special characters are found (/, ., *)', ->
    msg = 'Incorrectly formatted service names'
    assertBundleFailed('path/to/service', msg)
    assertBundleFailed('to/../../../root', msg)
    assertBundleFailed('*.js', msg)
    assertBundleFailed('a.b', msg)
    assertBundleFailed('a=b', msg)
    assertBundleFailed('!d', msg)
    assertBundleFailed('valid1,valid2,invalid.module', msg)

describe 'build', ->
  bundleCache = {}
  err = null
  data = null

  buildBundle = (services, opts, code, cb) ->
    opts = opts || {}
    opts.services = services

    cacheKey = JSON.stringify(options: opts)
    if bundleCache[cacheKey]
      result = null
      if code
        result = helpers.evalCode(code, bundleCache[cacheKey])
      return cb(null, result)

    build (err, d) ->
      data = d
      bundleCache[cacheKey] = data
      result = null
      if !err && code
        result = helpers.evalCode(code, data)
      cb(err, result)

  it 'defaults to no minification', ->
    buildBundle null, null, 'window.AWS', (err, AWS) ->
      expect(data).to.match(/Copyright Amazon\.com/i)

  it 'can be minified (slow)', ->
    buildBundle null, minify: true, null, ->
      expect(data).to.match(/Copyright Amazon\.com/i) # has license
      expect(data).to.match(/function \w\(\w,\w,\w\)\{function \w\(\w,\w\)\{/)

  it 'can build default services into bundle', ->
    buildBundle null, null, 'window.AWS', (err, AWS) ->
      expect(new AWS.S3().api.apiVersion).to.equal(new helpers.AWS.S3().api.apiVersion)
      expect(new AWS.DynamoDB().api.apiVersion).to.equal(new helpers.AWS.DynamoDB().api.apiVersion)
      expect(new AWS.STS().api.apiVersion).to.equal(new helpers.AWS.STS().api.apiVersion)

  it 'can build all services into bundle', ->
    buildBundle 'all', null, 'window.AWS', (err, AWS) ->
      Object.keys(helpers.AWS).forEach (k) ->
        if k.serviceIdentifier
          expect(typeof AWS[k]).to.equal('object')

  describe 'as executable', ->
    cwd = __dirname + '/../'
    script = './browser-builder.js '

    it 'uses first argument to get services list', (done)  ->
      exec script + 'iam-2010-05-08', cwd: cwd, maxBuffer: 999999999, (e, out) ->
        expect(out).to.match(/Copyright Amazon\.com/i)
        expect(out).to.contain('"2010-05-08"')
        expect(out).not.to.contain('"2006-03-01"')
        done()

    it 'uses MINIFY environment variable to set minification mode', (done) ->
      env = JSON.parse(JSON.stringify(process.env))
      env.MINIFY = '1'
      exec script, cwd: cwd, maxBuffer: 999999999, (e, out) ->
        expect(out).to.match(/Copyright Amazon\.com/i)
        expect(out).to.match(/function \w\(\w,\w,\w\)\{function \w\(\w,\w\)\{/)
        expect(out).to.contain('"2006-03-01"')
        done()
