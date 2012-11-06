# Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

AWS = require('../../lib/core')

describe 'AWS.Config', ->

  configure = (options) -> new AWS.Config(options)

  describe 'constructor', ->
    it 'should be able to pass in a Config object as parameter', ->
      config = new AWS.Config(useSSL: false, maxRetries: 0)
      copyConfig = new AWS.Config(config)
      expect(copyConfig).not.toBe(config)
      expect(copyConfig.useSSL).toEqual(false)
      expect(copyConfig.maxRetries).toEqual(0)

  describe 'region', ->
    it 'defaults to undefined', ->
      expect(configure().region).toEqual(undefined)
    it 'can be set to a string', ->
      expect(configure(region: 'us-west-1').region).toEqual('us-west-1')

  describe 'maxRetries', ->
    it 'defaults to unefined', ->
      expect(configure().maxRetries).toEqual(undefined)
    it 'can be set to an integer', ->
      expect(configure(maxRetries: 2).maxRetries).toEqual(2)

  describe 'useSSL', ->
    it 'defaults to true', ->
      expect(configure().useSSL).toEqual(true)
    it 'can be set to false', ->
      expect(configure(useSSL: false).useSSL).toEqual(false)

  describe 'default', ->
    it 'should have a default Config object', ->
      expect(AWS.configuration.useSSL).toEqual(true)
      expect(AWS.configuration.maxRetries).toEqual(undefined)

    it 'can set default config to an object literal', ->

  describe 'Credentials', ->
    it 'should allow setting of credentials with keys', ->
      config = configure(
        accessKeyId: 'akid'
        secretAccessKey: 'secret'
        sessionToken: 'session'
      )
      expect(config.credentials.accessKeyId).toEqual('akid')
      expect(config.credentials.secretAccessKey).toEqual('secret')
      expect(config.credentials.sessionToken).toEqual('session')

    it 'should allow setting of credentials as object', ->
      creds =
        accessKeyId: 'akid'
        secretAccessKey: 'secret'
        sessionToken: 'session'
      config = configure({credentials: new AWS.Credentials(creds)})
      expect(config.credentials.accessKeyId).toEqual('akid')
      expect(config.credentials.secretAccessKey).toEqual('secret')
      expect(config.credentials.sessionToken).toEqual('session')

    it 'defaults credentials to undefined when not passed', ->
      config = configure()
      expect(config.credentials.accessKeyId).toBe(undefined)
      expect(config.credentials.secretAccessKey).toBe(undefined)
      expect(config.credentials.sessionToken).toBe(undefined)
