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

helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.AWSRequest', ->
  request = null
  response = null
  beforeEach ->
    response = new AWS.AWSResponse(client: null, method: 'POST', params: {})
    request = new AWS.AWSRequest(response)

  sharedBehaviour = (cbMethod, notifyMethod, data) ->
    it 'can register callback', ->
      spy = jasmine.createSpy(cbMethod + '_register')
      request[cbMethod](spy)
      request[notifyMethod](data)
      expect(spy).toHaveBeenCalled()

    it 'will trigger even if registered after notification', ->
      spy = jasmine.createSpy(cbMethod + '_trigger_after_notification')
      request[notifyMethod](data)
      request[cbMethod](spy)
      expect(spy).toHaveBeenCalled()

    it 'can register multiple callbacks', ->
      spies = [jasmine.createSpy(cbMethod + '_multiple_cb'),
               jasmine.createSpy(cbMethod + '_multiple_cb')]
      request[notifyMethod](data)
      for index of spies
        request[cbMethod](spies[index])
        expect(spies[index]).toHaveBeenCalled()

    it 'can chain callbacks', ->
      spy1 = jasmine.createSpy(cbMethod + '_chain')
      spy2 = jasmine.createSpy(cbMethod + '_chain')
      retVal = request[cbMethod](spy1)[cbMethod](spy2)
      request[notifyMethod](data)
      expect(retVal).toBe(request)
      expect(spy1).toHaveBeenCalled()
      expect(spy2).toHaveBeenCalled()

    it 'should be triggered in default binding of response object', ->
      request[cbMethod] ->
        expect(this).toBe(response)
      request[notifyMethod](data)

    it 'should be triggered with response object as param', ->
      request[cbMethod] (context) ->
        expect(context).toBe(response)
      request[notifyMethod](data)

    it 'should allow overriding of binding', ->
      request[cbMethod]((-> expect(this).toEqual('foo')), bind: 'foo')
      request[notifyMethod](data)


  describe 'constructor', ->
    it 'should add data callback passed in via client config (onData)', ->
      result = null
      response.client =
        config:
          onData: (resp) -> result = resp.data
      request = new AWS.AWSRequest(response)
      request.notifyData('FOO')
      expect(result).toEqual('FOO')

    it 'should allow callbacks to be passed in as an array', ->
      result1 = null
      result2 = null
      response.client =
        config:
          onData: [
            (resp) -> result1 = resp.data + '1',
            (resp) -> result2 = resp.data + '2'
          ]
      request = new AWS.AWSRequest(response)
      request.notifyData('FOO')
      expect(result1).toEqual('FOO1')
      expect(result2).toEqual('FOO2')

    it 'should work for other callbacks', ->
      result = []
      response.client =
        config:
          onData: -> result.push('data')
          onAlways: -> result.push('always')
          onFail: -> result.push('fail')
          onDone: -> result.push('done')
      request = new AWS.AWSRequest(response)
      request.notifyData()
      request.notifyFail()
      request.notifyDone()
      expect(result).toEqual [
        'data', 'fail', 'always', 'done', 'always'
      ]

  describe 'data', ->
    sharedBehaviour('data', 'notifyData', 'FOO')

  describe 'done', ->
    sharedBehaviour('done', 'notifyDone')

  describe 'fail', ->
    sharedBehaviour('fail', 'notifyFail')

  describe 'always', ->
    describe 'with notifyDone', ->
      sharedBehaviour('always', 'notifyDone')

    describe 'with notifyFail', ->
      sharedBehaviour('always', 'notifyFail')
