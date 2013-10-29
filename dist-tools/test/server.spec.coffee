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

request = require('supertest')
express = require('express')
server = require('../server')
helpers = require('./helpers')

describe 'bundle server routes', ->
  route = null
  beforeEach -> route = '/'
  get = -> request(server).get(route)

  describe '/aws-sdk.js', ->
    beforeEach -> route = '/aws-sdk.js'

    it 'builds unminified SDK', (done) ->
      get().set('Accept-Encoding', '').expect(200).
        expect(/AWS\.DynamoDB/).expect(/AWS\.S3/).
        expect(/Copyright .+ Amazon\.com, Inc\./i).end (err, res) ->
          expect(res.text.substr(0, 3)).toEqual('// ') # license first
          expect(res.headers['content-encoding']).not.toEqual('gzip')
          svc = helpers.evalCode("new window.AWS.DynamoDB()", res.text)
          api = helpers.apiFilesMap
          expect(svc.api.apiVersion).toEqual(api.dynamodb[-1..-1][0])
          done(err)

    it 'accepts services list as query string', (done) ->
      get().query('iam,cloudwatch').expect(200).
        expect(/AWS\.IAM/).expect(/AWS\.CloudWatch/).end(done)

    it 'accepts services list as fancy query string', (done) ->
      get().query('iam&cloudwatch=2010-08-01').expect(200).
        expect(/AWS\.IAM/).expect(/AWS\.CloudWatch/).end(done)

    it 'accepts services list as fancy query string with trailing =', (done) ->
      get().query('iam=&cloudwatch=2010-08-01').expect(200).
        expect(/AWS\.IAM/).expect(/AWS\.CloudWatch/).end(done)

    it 'can return contents as gzipped data', (done) ->
      get().set('Accept-Encoding', 'gzip').expect(200).end (err, res) ->
        expect(res.headers['content-encoding']).toEqual('gzip')
        done(err)

  describe '/aws-sdk.min.js', ->
    beforeEach -> route = '/aws-sdk.min.js'

    it 'builds minified SDK', (done) ->
      get().expect(200).end (err, res) ->
          expect(res.text).toMatch(/Copyright .+ Amazon\.com, Inc\./i)
          expect(res.text).toMatch(/function \w\(\w,\w,\w\)\{function \w\(\w,\w\)\{/)
          svc = helpers.evalCode("new window.AWS.DynamoDB()", res.text)
          api = helpers.apiFilesMap
          expect(svc.api.apiVersion).toEqual(api.dynamodb[-1..-1][0])
          done(err)

  describe 'error handling', ->
    beforeEach -> route = '/aws-sdk.js'

    it 'returns 400 if module is missing', (done) ->
      get().query('invalidmodule').
        expect(400, /Missing modules: invalidmodule/).end(done)

    it 'can handle weird/malicious requests', (done) ->
      request(server).get('/aws-sdk.js').
        query('/etc/passwd').
          expect(400, /Incorrectly formatted service names/).end(done)

    it 'does not respond to any other route', (done) ->
      request(server).post('/åßç').expect(404).end(done)
