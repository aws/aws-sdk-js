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

describe 'AWS.CredentialProviderChain', ->

  describe 'resolve', ->

    chain = null
    defaultProviders = AWS.CredentialProviderChain.defaultProviders

    beforeEach ->
      process.env = {}
      chain = new AWS.CredentialProviderChain()

    # restore the defaultProviders to the original values
    afterEach ->
      AWS.CredentialProviderChain.defaultProviders = defaultProviders

    it 'returns an empty credentials object by default', ->
      creds = chain.resolve()
      expect(creds.accessKeyId).toEqual(undefined)
      expect(creds.secretAccessKey).toEqual(undefined)
      expect(creds.sessionToken).toEqual(undefined)

    it 'returns AWS-prefixed credentials found in ENV', ->

      process.env['AWS_ACCESS_KEY_ID'] = 'akid'
      process.env['AWS_SECRET_ACCESS_KEY'] = 'secret'
      process.env['AWS_SESSION_TOKEN'] = 'session'

      creds = chain.resolve()
      expect(creds.accessKeyId).toEqual('akid')
      expect(creds.secretAccessKey).toEqual('secret')
      expect(creds.sessionToken).toEqual('session')

    it 'returns AMAZON-prefixed credentials found in ENV', ->

      process.env['AMAZON_ACCESS_KEY_ID'] = 'akid'
      process.env['AMAZON_SECRET_ACCESS_KEY'] = 'secret'
      process.env['AMAZON_SESSION_TOKEN'] = 'session'

      creds = chain.resolve()
      expect(creds.accessKeyId).toEqual('akid')
      expect(creds.secretAccessKey).toEqual('secret')
      expect(creds.sessionToken).toEqual('session')

    it 'prefers AWS credentials to AMAZON credentials', ->

      process.env['AWS_ACCESS_KEY_ID'] = 'akid'
      process.env['AWS_SECRET_ACCESS_KEY'] = 'secret'
      process.env['AWS_SESSION_TOKEN'] = 'session'

      process.env['AMAZON_ACCESS_KEY_ID'] = 'akid2'
      process.env['AMAZON_SECRET_ACCESS_KEY'] = 'secret2'
      process.env['AMAZON_SESSION_TOKEN'] = 'session2'

      creds = chain.resolve()
      expect(creds.accessKeyId).toEqual('akid')
      expect(creds.secretAccessKey).toEqual('secret')
      expect(creds.sessionToken).toEqual('session')

    it 'uses the defaultProviders property on the constructor', ->

      # remove default providers
      AWS.CredentialProviderChain.defaultProviders = []

      # these should now get ignored
      process.env['AWS_ACCESS_KEY_ID'] = 'akid'
      process.env['AWS_SECRET_ACCESS_KEY'] = 'secret'
      process.env['AWS_SESSION_TOKEN'] = 'session'

      chain = new AWS.CredentialProviderChain()
      creds = chain.resolve()
      expect(creds.accessKeyId).toEqual(undefined)
      expect(creds.secretAccessKey).toEqual(undefined)
      expect(creds.sessionToken).toEqual(undefined)

    it 'calls resolve on each provider in the chain, stopping for akid', ->

      staticCreds = { accessKeyId: 'abc', secretAccessKey: 'xyz' }

      AWS.CredentialProviderChain.defaultProviders.unshift(staticCreds)

      chain = new AWS.CredentialProviderChain()
      creds = chain.resolve()
      expect(creds.accessKeyId).toEqual('abc')
      expect(creds.secretAccessKey).toEqual('xyz')
      expect(creds.sessionToken).toEqual(undefined)

    it 'accepts providers as functions, elavuating them during resolution', ->

      provider = ->
        { accessKeyId: 'abc', secretAccessKey: 'xyz' }

      AWS.CredentialProviderChain.defaultProviders.unshift(provider)

      chain = new AWS.CredentialProviderChain()
      creds = chain.resolve()
      expect(creds.accessKeyId).toEqual('abc')
      expect(creds.secretAccessKey).toEqual('xyz')
      expect(creds.sessionToken).toEqual(undefined)
