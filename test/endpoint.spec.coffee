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

describe 'AWS.Endpoint', ->
  it 'throws error if parameter is null/undefined', ->
    expect(-> new AWS.Endpoint(null)).toThrow('Invalid endpoint: null')
    expect(-> new AWS.Endpoint(undefined)).toThrow('Invalid endpoint: undefined')

  it 'copy constructs Endpoint', ->
    origEndpoint = new AWS.Endpoint('http://domain.com')
    endpoint = new AWS.Endpoint(origEndpoint)
    expect(endpoint).not.toBe(origEndpoint)
    expect(endpoint.host).toEqual('domain.com')

  it 'retains the entire endpoint as the endpoint href', ->
    href = 'http://domain.com/'
    endpoint = new AWS.Endpoint(href)
    expect(endpoint.href).toEqual(href)

  it 'populates the endpoint properites from the endpoint href', ->
    href = 'http://domain.com/'
    endpoint = new AWS.Endpoint(href)
    expect(endpoint.href).toEqual(href)
    expect(endpoint.protocol).toEqual('http:')
    expect(endpoint.host).toEqual('domain.com')
    expect(endpoint.hostname).toEqual('domain.com')
    expect(endpoint.port).toEqual(80)

  it 'keeps port in host when non-standard', ->
    href = 'http://domain.com:123/'
    endpoint = new AWS.Endpoint(href)
    expect(endpoint.href).toEqual(href)
    expect(endpoint.protocol).toEqual('http:')
    expect(endpoint.host).toEqual('domain.com:123')
    expect(endpoint.hostname).toEqual('domain.com')
    expect(endpoint.port).toEqual(123)

  it 'works with https endpoints', ->
    href = 'https://secure.domain.com/'
    endpoint = new AWS.Endpoint(href)
    expect(endpoint.href).toEqual(href)
    expect(endpoint.protocol).toEqual('https:')
    expect(endpoint.host).toEqual('secure.domain.com')
    expect(endpoint.hostname).toEqual('secure.domain.com')
    expect(endpoint.port).toEqual(443)

  it 'keeps port in host when non-standard for SSL', ->
    href = 'https://secure.domain.com:123/'
    endpoint = new AWS.Endpoint(href)
    expect(endpoint.href).toEqual(href)
    expect(endpoint.protocol).toEqual('https:')
    expect(endpoint.host).toEqual('secure.domain.com:123')
    expect(endpoint.hostname).toEqual('secure.domain.com')
    expect(endpoint.port).toEqual(123)

  it 'defaults the protocol to the current AWS.config.sslEnabled mode', ->
    AWS.config.sslEnabled = false
    endpoint = new AWS.Endpoint('domain.com')
    expect(endpoint.href).toEqual('http://domain.com/')
    expect(endpoint.protocol).toEqual('http:')
    expect(endpoint.host).toEqual('domain.com')
    expect(endpoint.hostname).toEqual('domain.com')
    expect(endpoint.port).toEqual(80)

  it 'defaults the protocol to the current AWS.config.sslEnabled mode', ->
    AWS.config.sslEnabled = true
    endpoint = new AWS.Endpoint('domain.com')
    expect(endpoint.href).toEqual('https://domain.com/')
    expect(endpoint.protocol).toEqual('https:')
    expect(endpoint.host).toEqual('domain.com')
    expect(endpoint.hostname).toEqual('domain.com')
    expect(endpoint.port).toEqual(443)

  it 'accepts a configuration object that specifies the mode', ->
    expect(AWS.config.sslEnabled).toEqual(true)
    endpoint = new AWS.Endpoint('domain.com', { sslEnabled: false })
    expect(endpoint.href).toEqual('http://domain.com/')
    expect(endpoint.protocol).toEqual('http:')
    expect(endpoint.host).toEqual('domain.com')
    expect(endpoint.hostname).toEqual('domain.com')
    expect(endpoint.port).toEqual(80)
