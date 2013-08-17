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
  describe 'constructor', ->
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

  describe 'needsRefresh', ->
    it 'needs refresh if credentials are not set', ->
      creds = new AWS.Credentials()
      expect(creds.needsRefresh()).toEqual(true)
      creds = new AWS.Credentials('akid')
      expect(creds.needsRefresh()).toEqual(true)

    it 'does not need refresh if credentials are set', ->
      creds = new AWS.Credentials('akid', 'secret')
      expect(creds.needsRefresh()).toEqual(false)

    it 'needs refresh if creds are expired', ->
      creds = new AWS.Credentials('akid', 'secret')
      creds.expired = true
      expect(creds.needsRefresh()).toEqual(true)

  describe 'get', ->
    it 'does not call refresh if not needsRefresh', ->
      spy = jasmine.createSpy('done callback')
      creds = new AWS.Credentials('akid', 'secret')
      refresh = spyOn(creds, 'refresh')
      creds.get(spy)
      expect(refresh).not.toHaveBeenCalled()
      expect(spy).toHaveBeenCalled()
      expect(spy.argsForCall[0][0]).toEqual(null)
      expect(creds.expired).toEqual(false)

    it 'calls refresh only if needsRefresh', ->
      spy = jasmine.createSpy('done callback')
      creds = new AWS.Credentials('akid', 'secret')
      creds.expired = true
      refresh = spyOn(creds, 'refresh').andCallThrough()
      creds.get(spy)
      expect(refresh).toHaveBeenCalled()
      expect(spy).toHaveBeenCalled()
      expect(spy.argsForCall[0][0]).toEqual(null)
      expect(creds.expired).toEqual(false)

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
      process.env.AWS_SECRET_ACCESS_KEY = 'secret'
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
      spy = spyOn(AWS.util, 'readFileSync').andReturn(mock)

      creds = new AWS.FileSystemCredentials('foo')
      validateCredentials(creds)

  describe 'refresh', ->
    it 'should refresh from given filename', ->
      mock = '{"credentials":{"accessKeyId":"RELOADED", "secretAccessKey":"RELOADED","sessionToken":"RELOADED"}}'
      spyOn(AWS.util, 'readFileSync').andReturn(mock)

      creds = new AWS.FileSystemCredentials('foo')
      validateCredentials(creds, 'RELOADED', 'RELOADED', 'RELOADED')

    it 'fails if credentials are not in the file', ->
      mock = '{"credentials":{}}'
      spyOn(AWS.util, 'readFileSync').andReturn(mock)

      new AWS.FileSystemCredentials('foo').refresh (err) ->
        expect(err.message).toEqual('Credentials not set in foo')

      expect(-> new AWS.FileSystemCredentials('foo').refresh()).
        toThrow('Credentials not set in foo')

describe 'AWS.EC2MetadataCredentials', ->
  describe 'constructor', ->
    it 'allows passing of AWS.MetadataService options', ->
      creds = new AWS.EC2MetadataCredentials(host: 'host')
      expect(creds.metadataService.host).toEqual('host')

  describe 'refresh', ->
    it 'loads credentials from EC2 Metadata service', ->
      creds = new AWS.EC2MetadataCredentials(host: 'host')
      spy = spyOn(creds.metadataService, 'loadCredentials').andCallFake (cb) ->
        cb(null, Code:"Success",AccessKeyId:"KEY",SecretAccessKey:"SECRET",Token:"TOKEN")
      creds.refresh(->)
      expect(creds.metadata.Code).toEqual('Success')
      expect(creds.accessKeyId).toEqual('KEY')
      expect(creds.secretAccessKey).toEqual('SECRET')
      expect(creds.sessionToken).toEqual('TOKEN')

    it 'does not try to load creds second time if Metadata service failed', ->
      creds = new AWS.EC2MetadataCredentials(host: 'host')
      spy = spyOn(creds.metadataService, 'loadCredentials').andCallFake (cb) ->
        cb(new Error('INVALID SERVICE'))

      creds.refresh (err) ->
        expect(err.message).toEqual('INVALID SERVICE')
      creds.refresh ->
        creds.refresh ->
          creds.refresh ->
            expect(spy.calls.length).toEqual(1)
