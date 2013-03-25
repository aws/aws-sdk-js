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

describe 'AWS.NodeHttpClient', ->
  http = new AWS.NodeHttpClient()

  describe 'handleRequest', ->
    it 'loads certificate bundle from disk in SSL request (once)', ->
      readSpy = spyOn(AWS.util, 'readFileSync').andCallThrough()
      done = false
      req = new AWS.HttpRequest 'https://invalid'
      runs -> http.handleRequest req, {}, null, ->
        done = true
        expect(AWS.NodeHttpClient.sslAgent).not.toEqual(null)
        expect(readSpy.callCount).toEqual(1)
      waitsFor -> done

    it 'emits error event', ->
      error = null
      req = new AWS.HttpRequest 'http://invalid'
      runs ->
        http.handleRequest req, {}, null, (err) ->
          error = err
      waitsFor -> error
      runs ->
        expect(error.code).toEqual 'ENOTFOUND'

    it 'supports timeout in httpOptions', ->
      error = null
      req = new AWS.HttpRequest 'http://1.1.1.1'
      runs ->
        http.handleRequest req, {timeout: 1}, null, (err) ->
          error = err

      waitsFor((-> error), 'Timed out', 100)
      runs ->
        expect(error.code).toEqual 'TimeoutError'
        expect(error.message).toEqual 'Connection timed out after 1ms'
