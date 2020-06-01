helpers = require('./helpers')
build = require('../node-builder')
collector = helpers.collector
exec = require('child_process').exec
fs = require('fs')
expect = helpers.chai.expect

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

  it 'can be minified (slow)', ->
    buildBundle null, minify: true, null, ->
      expect(data).to.match(/Copyright Amazon\.com/i) # has license
      expect(data).to.match(/function \w\(\w,\w,\w\)\{function \w\(\w,\w\)\{/)

  it 'can build default services into bundle', ->
    buildBundle null, null, 'AWS', (err, AWS) ->
      expect(new AWS.S3().api.apiVersion).to.equal(new helpers.AWS.S3().api.apiVersion)
      expect(new AWS.DynamoDB().api.apiVersion).to.equal(new helpers.AWS.DynamoDB().api.apiVersion)
      expect(new AWS.STS().api.apiVersion).to.equal(new helpers.AWS.STS().api.apiVersion)

  it 'can build all services into bundle', ->
    buildBundle 'all', null, 'AWS', (err, AWS) ->
      Object.keys(helpers.AWS).forEach (k) ->
        if k.serviceIdentifier
          expect(typeof AWS[k]).to.equal('object')

  describe 'as executable', ->
    cwd = __dirname + '/../'
    script = './node-builder.js '

    it 'uses first argument to get services list', (done)  ->
      exec script + 'iam-2010-05-08', cwd: cwd, maxBuffer: 999999999, (e, out) ->
        expect(out).to.match(/Copyright Amazon\.com/i)
        expect(out).to.contain('"2010-05-08"')
        expect(out).not.to.contain('"2006-03-01"')
        expect(out).not.to.contain('XMLHttpRequest')
        done()

    it 'uses MINIFY environment variable to set minification mode', (done) ->
      env = JSON.parse(JSON.stringify(process.env))
      env.MINIFY = '1'
      exec script, cwd: cwd, maxBuffer: 999999999, (e, out) ->
        expect(out).to.match(/Copyright Amazon\.com/i)
        expect(out).to.match(/function \w\(\w,\w,\w\)\{function \w\(\w,\w\)\{/)
        expect(out).to.contain('"2006-03-01"')
        expect(out).not.to.contain('XMLHttpRequest')
        done()
