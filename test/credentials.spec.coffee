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

validateCredentials = (creds, key, secret, session) ->
  expect(creds.accessKeyId).toEqual(key || 'akid')
  expect(creds.secretAccessKey).toEqual(secret || 'secret')
  expect(creds.sessionToken).toEqual(session || 'session')

describe 'AWS.Credentials', ->
  it 'should allow setting of credentials with keys', ->
    config = new AWS.Config(
      accessKeyId: 'akid'
      secretAccessKey: 'secret'
      sessionToken: 'session'
    )
    validateCredentials(config.credentials)

  it 'should allow setting of credentials as object', ->
    creds =
      accessKeyId: 'akid'
      secretAccessKey: 'secret'
      sessionToken: 'session'
    validateCredentials(new AWS.Credentials(creds))

  it 'defaults credentials to undefined when not passed', ->
    creds = new AWS.Credentials()
    expect(creds.accessKeyId).toBe(undefined)
    expect(creds.secretAccessKey).toBe(undefined)
    expect(creds.sessionToken).toBe(undefined)

describe 'AWS.EnvironmentCredentials', ->
  beforeEach ->
    process.env = {}

  describe 'constructor', ->
    it 'should be able to read credentials from env with a prefix', ->
      process.env.AWS_ACCESS_KEY_ID = 'akid'
      process.env.AWS_SECRET_ACCESS_KEY = 'secret'
      process.env.AWS_SESSION_TOKEN = 'session'
      creds = new AWS.EnvironmentCredentials('AWS')
      validateCredentials(creds)

    it 'should be able to read credentials from env without a prefix', ->
      process.env.ACCESS_KEY_ID = 'akid'
      process.env.SECRET_ACCESS_KEY = 'secret'
      process.env.SESSION_TOKEN = 'session'
      creds = new AWS.EnvironmentCredentials()
      validateCredentials(creds)

  describe 'refresh', ->
    it 'can refresh credentials', ->
      process.env.AWS_ACCESS_KEY_ID = 'akid'
      creds = new AWS.EnvironmentCredentials('AWS')
      expect(creds.accessKeyId).toEqual('akid')
      creds.accessKeyId = 'not_akid'
      expect(creds.accessKeyId).not.toEqual('akid')
      creds.refresh()
      expect(creds.accessKeyId).toEqual('akid')

describe 'AWS.FileSystemCredentials', ->
  describe 'constructor', ->
    it 'should accept filename and load credentials from root doc', ->
      mock = '{"accessKeyId":"akid", "secretAccessKey":"secret","sessionToken":"session"}'
      spyOn(AWS.util, 'readFileSync').andReturn(mock)

      creds = new AWS.FileSystemCredentials('foo')
      validateCredentials(creds)

    it 'should accept filename and load credentials from credentials block', ->
      mock = '{"credentials":{"accessKeyId":"akid", "secretAccessKey":"secret","sessionToken":"session"}}'
      spyOn(AWS.util, 'readFileSync').andReturn(mock)

      creds = new AWS.FileSystemCredentials('foo')
      validateCredentials(creds)

    it 'should accept filename and use initialCredentials', ->
      mock = '{}'
      spyOn(AWS.util, 'readFileSync').andReturn(mock)

      values =
        accessKeyId: "akid"
        secretAccessKey: "secret"
        sessionToken: "session"
      creds = new AWS.FileSystemCredentials('foo', values)
      validateCredentials(creds)

  describe 'refresh', ->
    it 'should refresh from given filename', ->
      mock = '{"credentials":{"accessKeyId":"RELOADED", "secretAccessKey":"RELOADED","sessionToken":"RELOADED"}}'
      spyOn(AWS.util, 'readFileSync').andReturn(mock)

      values =
        accessKeyId: "akid"
        secretAccessKey: "secret"
        sessionToken: "session"
      creds = new AWS.FileSystemCredentials('foo', values)
      validateCredentials(creds)

      creds.refresh()

      validateCredentials(creds, 'RELOADED', 'RELOADED', 'RELOADED')
