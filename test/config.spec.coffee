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

configure = (options) -> new AWS.Config(options)

describe 'AWS.Config', ->

  describe 'constructor', ->
    it 'should be able to pass in a Config object as parameter', ->
      config = new AWS.Config(sslEnabled: false, maxRetries: 0)
      copyConfig = new AWS.Config(config)
      expect(copyConfig).not.toBe(config)
      expect(copyConfig.sslEnabled).toEqual(false)
      expect(copyConfig.maxRetries).toEqual(0)

    it 'should be able to pass credential values directly', ->
      config = new AWS.Config(
        accessKeyId: 'akid',
        secretAccessKey: 'secret',
        sessionToken: 'session')
      expect(config.credentials.accessKeyId).toEqual('akid')
      expect(config.credentials.secretAccessKey).toEqual('secret')
      expect(config.credentials.sessionToken).toEqual('session')

  describe 'region', ->
    oldEnv = process.env
    beforeEach ->
      process.env = {}
    afterEach ->
      process.env = oldEnv

    it 'defaults to undefined', ->
      expect(configure().region).toEqual(undefined)

    it 'grabs AWS_REGION from the env', ->
      process.env.AWS_REGION = 'us-west-2'
      config = new AWS.Config()
      expect(config.region).toEqual('us-west-2')

    it 'also grabs AMAZON_REGION from the env', ->
      process.env.AMAZON_REGION = 'us-west-1'
      config = new AWS.Config()
      expect(config.region).toEqual('us-west-1')

    it 'prefers AWS_REGION to AMAZON_REGION', ->
      process.env.AWS_REGION = 'us-west-2'
      process.env.AMAZON_REGION = 'us-west-1'
      config = new AWS.Config()
      expect(config.region).toEqual('us-west-2')

    it 'can be set to a string', ->
      expect(configure(region: 'us-west-1').region).toEqual('us-west-1')

  describe 'maxRetries', ->
    it 'defaults to unefined', ->
      expect(configure().maxRetries).toEqual(undefined)
    it 'can be set to an integer', ->
      expect(configure(maxRetries: 2).maxRetries).toEqual(2)

  describe 'paramValidation', ->
    it 'defaults to true', ->
      expect(configure().paramValidation).toEqual(true)

  describe 'computeChecksums', ->
    it 'defaults to true', ->
      expect(configure().computeChecksums).toEqual(true)

  describe 'sslEnabled', ->
    it 'defaults to true', ->
      expect(configure().sslEnabled).toEqual(true)
    it 'can be set to false', ->
      expect(configure(sslEnabled: false).sslEnabled).toEqual(false)

  describe 'set', ->
    it 'should set a default value for a key', ->
      config = new AWS.Config()
      config.set('maxRetries', undefined, 'DEFAULT')
      expect(config.maxRetries).toEqual('DEFAULT')

    it 'should execute default value if it is a function', ->
      mock = jasmine.createSpy()
      config = new AWS.Config()
      config.set('maxRetries', undefined, mock)
      expect(mock).toHaveBeenCalled()

    it 'should not expand default value function if value is present', ->
      mock = jasmine.createSpy()
      config = new AWS.Config()
      config.set('maxRetries', 'VALUE', mock)
      expect(mock).not.toHaveBeenCalled()

  describe 'clear', ->
    it 'should be able to clear all key values from a config object', ->
      config = new AWS.Config(maxRetries: 300, sslEnabled: 'foo')
      expect(config.maxRetries).toEqual(300)
      expect(config.sslEnabled).toEqual('foo')
      expect(config.credentials).not.toEqual(undefined)

      config.clear()

      expect(config.maxRetries).toEqual(undefined)
      expect(config.sslEnabled).toEqual(undefined)
      expect(config.credentials).not.toEqual(undefined)

  describe 'update', ->
    it 'should be able to update keyed values', ->
      config = new AWS.Config()
      expect(config.maxRetries).toEqual(undefined)
      config.update(maxRetries: 10)
      expect(config.maxRetries).toEqual(10)

    it 'should ignore non-keyed values', ->
      config = new AWS.Config()
      config.update(foo: 10)
      expect(config.foo).toEqual(undefined)

    it 'should be able to update literal credentials', ->
      config = new AWS.Config()
      config.update(
        accessKeyId: 'akid',
        secretAccessKey: 'secret',
        sessionToken: 'session')
      expect(config.credentials.accessKeyId).toEqual('akid')
      expect(config.credentials.secretAccessKey).toEqual('secret')
      expect(config.credentials.sessionToken).toEqual('session')

describe 'AWS.config', ->
  it 'should be a default Config object', ->
    expect(AWS.config.sslEnabled).toEqual(true)
    expect(AWS.config.maxRetries).toEqual(undefined)

  it 'can set default config to an object literal', ->
    oldConfig = AWS.config
    AWS.config = {}
    expect(AWS.config).toEqual({})
    AWS.config = oldConfig
