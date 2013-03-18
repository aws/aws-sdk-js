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

AWS = require('../lib/core')

describe 'AWS.HttpRequest', ->

  request = null
  beforeEach ->
    request = new AWS.HttpRequest('http://domain.com')

  describe 'constructor', ->

    it 'defaults to POST method requests', ->
      expect(request.method).toEqual('POST')

    it 'defaults the uri to /', ->
      expect(request.path).toEqual('/')

    it 'provides headers with a default user agent', ->
      expect(request.headers).toEqual({ 'User-Agent': AWS.util.userAgent() })

    it 'defaults body to empty string', ->
      expect(request.body).toEqual('')

    it 'defaults endpointPrefix to undefined', ->
      expect(request.endpointPrefix).toEqual(undefined)

    it 'uses the path from the endpoint if provided', ->
      request = new AWS.HttpRequest('http://domain.com/path')
      expect(request.path).toEqual('/path')

  describe 'pathname', ->

    it 'defaults to /', ->
      expect(request.pathname()).toEqual('/')

    it 'returns the path portion of the uri', ->
      request.path = '/abc/xyz?mno=hjk'
      expect(request.pathname()).toEqual('/abc/xyz')

  describe 'search', ->

    it 'defaults to an empty string', ->
      expect(request.search()).toEqual('')

    it 'returns the querystring portion of the uri', ->
      request.path = '/abc/xyz?mno=hjk'
      expect(request.search()).toEqual('mno=hjk')

