# Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

helpers = require('./helpers')
builder = require('../browser-builder')
domain = require('domain')
child = require('child_process')

describe 'browser builder', ->
  stream = null
  bundleCache = {}

  beforeEach ->
    stream = helpers.stringstream()

  buildBundle = (services, opts, code, cb) ->
    cacheKey = JSON.stringify(services: services, options: opts)
    if bundleCache[cacheKey]
      result = null
      if code
        result = helpers.evalCode(code, bundleCache[cacheKey])
      return cb(null, result)

    err = false; done = false
    opts = opts || {}
    opts.stream = stream
    runs ->
      builder services, opts, (e, s) ->
        if e
          err = e
        if s
          s.on('error', (e) -> err = e).on('end', -> done = true)
    waitsFor -> err || done
    runs ->
      bundleCache[cacheKey] = stream.data
      result = null
      if !err && code
        result = helpers.evalCode(code, stream.data)
      cb(err, result)

  it 'defaults to no minification', ->
    buildBundle null, null, null, ->
      expect(stream.data).toMatch(/Copyright .+ Amazon\.com/i)

  it 'can be minified (slow)', ->
    buildBundle null, minify: true, null, ->
      expect(stream.data).toMatch(/Copyright .+ Amazon\.com/i) # has license
      expect(stream.data).toMatch(/function \w\(\w,\w,\w\)\{function \w\(\w,\w\)\{/)

  it 'defaults to printing to stdout', ->
    origStdout = process.stdout
    process.__defineGetter__('stdout', -> stream)
    done = false
    runs -> builder null, null, (e, s) -> s.on('end', -> done = true)
    waitsFor -> done
    runs ->
      expect(stream.data).not.toEqual('')
      process.__defineGetter__('stdout', -> origStdout)

  it 'does not stream to stdout if stream is set to null', ->
    origStdout = process.stdout
    process.__defineGetter__('stdout', -> stream)
    done = false
    runs -> builder 'dynamodb', stream: null, (e, s) -> s.on('end', -> done = true)
    waitsFor -> done
    runs ->
      expect(stream.data).toEqual('')
      process.__defineGetter__('stdout', -> origStdout)

  it 'can build default services into bundle', ->
    buildBundle null, null, "window.AWS", (err, AWS) ->
      api = helpers.apiFilesMap
      expect(new AWS.S3().api.apiVersion).toEqual(api.s3[-1..-1][0])
      expect(new AWS.DynamoDB().api.apiVersion).toEqual(api.dynamodb[-1..-1][0])
      expect(new AWS.STS().api.apiVersion).toEqual(api.sts[-1..-1][0])

  it 'can build all services into bundle', ->
    buildBundle 'all', null, "window.AWS", (err, AWS) ->
      expect(Object.keys(AWS).length >
        Object.keys(helpers.apiFilesMap).length).toEqual(true)

  it 'passes errors to stream', ->
    buildBundle 'invalidmodule', null, null, (err) ->
      expect(err.message).toEqual('Missing modules: invalidmodule')

  describe 'as executable', ->
    cwd = __dirname + '/../'
    script = './browser-builder.js'

    it 'uses first argument to get services list', ->
      done = false
      runs ->
        pid = child.spawn(script, ['iam-2010-05-08'], cwd: cwd)
        pid.stdout.pipe(stream)
        pid.on('close', -> done = true)
      waitsFor -> done
      runs ->
        expect(stream.data).toMatch(/Copyright .+ Amazon\.com/i)
        expect(stream.data).toContain('/api/iam-2010-05-08"')
        expect(stream.data).not.toContain('/api/s3-2006-03-01"')

    it 'uses MINIFY environment variable to set minification mode', ->
      done = false
      runs ->
        env = JSON.parse(JSON.stringify(process.env))
        env.MINIFY = '1'
        pid = child.spawn(script, [], cwd: cwd, env: env)
        pid.stdout.pipe(stream)
        pid.on('close', -> done = true)
      waitsFor -> done
      runs ->
        expect(stream.data).toMatch(/Copyright .+ Amazon\.com/i)
        expect(stream.data).toMatch(/function \w\(\w,\w,\w\)\{function \w\(\w,\w\)\{/)
        expect(stream.data).toContain('s3-2006-03-01')
