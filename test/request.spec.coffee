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
AWS = helpers.AWS
MockClient = helpers.MockClient

describe 'AWS.Request', ->
  client = new MockClient

  describe 'createReadStream', ->
    it 'streams data', ->
      data = ''; done = false
      helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']

      runs ->
        request = client.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'end', -> done = true
        s.on 'data', (c) -> data += c.toString()
      waitsFor -> done == true
      runs ->
        expect(data).toEqual('FOOBARBAZQUX')

    it 'does not stream data on failures', ->
      data = ''; error = null; done = false
      helpers.mockHttpResponse 404, {}, ['No such file']

      runs ->
        request = client.makeRequest('mockMethod')
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
        request = client.makeRequest('mockMethod')
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
      AWS.HttpClient.getInstance.andReturn handleRequest: (req, resp) ->
        req.emit('httpHeaders', [200, {}, resp])
        AWS.util.arrayEach ['FOO', 'BAR', 'BAZ'], (str) ->
          req.emit('httpData', [new Buffer(str), resp])
        req.emit('httpError', [new Error('fail'), resp])

      runs ->
        request = client.makeRequest('mockMethod')
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
      spyOn(AWS.HttpClient, 'getInstance')
      AWS.HttpClient.getInstance.andReturn handleRequest: (req, resp) ->
        process.nextTick ->
            req.emit('httpHeaders', [200, {}, resp])
          AWS.util.arrayEach ['FOO', 'BAR', 'BAZ', 'QUX'], (str) ->
            if str == 'BAZ' and resp.retryCount < 1
              process.nextTick ->
                req.emit('httpError', [{code: 'NetworkingError', message: 'FAIL!', retryable: true}, resp])
              return AWS.util.abort
            else
              process.nextTick ->
                req.emit('httpData', [new Buffer(str), resp])
          if resp.retryCount >= 1
            process.nextTick ->
              req.emit('httpDone', [resp])

      runs ->
        request = client.makeRequest('mockMethod')
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
