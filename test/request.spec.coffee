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
EventEmitter = require('events').EventEmitter
AWS = helpers.AWS
MockService = helpers.MockService

describe 'AWS.Request', ->
  service = new MockService

  describe 'createReadStream', ->
    it 'streams data', ->
      data = ''; done = false
      helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']

      runs ->
        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'end', -> done = true
        s.on 'data', (c) -> data += c.toString()
      waitsFor -> done == true
      runs ->
        expect(data).toEqual('FOOBARBAZQUX')

    it 'streams2 data (readable event)', ->
      if AWS.HttpClient.streamsApiVersion < 2
        return

      data = ''; done = false
      helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']

      runs ->
        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'end', -> done = true
        s.on 'readable', ->
          try
            chunk = s.read()
            if chunk
              data += chunk
          catch e
            console.log(e.stack)

      waitsFor -> done == true
      runs ->
        expect(data).toEqual('FOOBARBAZQUX')

    it 'streams2 data does not hang out while waiting response', ->
      if AWS.HttpClient.streamsApiVersion < 2
        return

      data = ''; done = false
      helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', null, null, 'BAZ', 'QUX']

      runs ->
        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'end', -> done = true
        s.on 'readable', ->
          try
            chunk = s.read()
            if chunk
              data += chunk
          catch e
            console.log(e.stack)

      waitsFor -> done == true
      runs ->
        expect(data).toEqual('FOOBARBAZQUX')

    it 'does not stream data on failures', ->
      data = ''; error = null; done = false
      helpers.mockHttpResponse 404, {}, ['No such file']

      runs ->
        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'end', -> done = true
        s.on 'error', (e) -> error = e; done = true
        s.on 'data', (c) -> data += c.toString()
      waitsFor -> done == true
      runs ->
        expect(data).toEqual('')
        expect(error.statusCode).toEqual(404)

    it 'retries temporal errors and streams resulting successful response', ->
      data = ''; error = null; done = false
      helpers.mockIntermittentFailureResponse 2, 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']

      runs ->
        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'end', -> done = true
        s.on 'error', (e) -> error = e; done = true
        s.on 'data', (c) -> data += c.toString()
      waitsFor -> done == true
      runs ->
        expect(data).toEqual('FOOBARBAZQUX')
        expect(error).toEqual(null)

    it 'streams partial data and raises an error', ->
      data = ''; error = null; reqError = null; done = false
      spyOn(AWS.HttpClient, 'getInstance')
      AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
        req = new EventEmitter()
        req.statusCode = 200
        req.headers = {}
        cb(req)
        AWS.util.arrayEach ['FOO', 'BAR', 'BAZ'], (str) ->
          req.emit 'data', new Buffer(str)
        errCb new Error('fail')

      runs ->
        request = service.makeRequest('mockMethod')
        request.on 'error', (e) -> reqError = e
        request.on 'complete', -> done = true
        s = request.createReadStream()
        s.on 'error', (e) -> error = e
        s.on 'data', (c) -> data += c.toString()
      waitsFor -> done == true
      runs ->
        expect(data).toEqual('FOOBARBAZ')
        expect(error.message).toEqual('fail')
        expect(reqError.message).toEqual('fail')

    it 'fails if retry occurs in the middle of a failing stream', ->
      data = ''; error = null; reqError = null; resp = null
      retryCount = 0
      spyOn(AWS.HttpClient, 'getInstance')
      AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
        req = new EventEmitter()
        req.statusCode = 200
        req.headers = {}
        process.nextTick ->
          cb(req)
          AWS.util.arrayEach ['FOO', 'BAR', 'BAZ', 'QUX'], (str) ->
            if str == 'BAZ' and retryCount < 1
              process.nextTick ->
                retryCount += 1
                errCb code: 'NetworkingError', message: 'FAIL!', retryable: true
              return AWS.util.abort
            else
              process.nextTick -> req.emit 'data', new Buffer(str)
          if retryCount >= 1
            process.nextTick -> req.emit('end')

      runs ->
        request = service.makeRequest('mockMethod')
        request.on 'error', (e) -> reqError = e
        request.on 'complete', (r) -> resp = r
        s = request.createReadStream()
        s.on 'error', (e) -> error = e
        s.on 'data', (c) -> data += c.toString()
      waitsFor -> resp != null
      runs ->
        expect(data).toEqual('FOOBAR')
        expect(error.code).toEqual('NetworkingError')
        expect(reqError.code).toEqual('NetworkingError')
        expect(resp.retryCount).toEqual(0)
