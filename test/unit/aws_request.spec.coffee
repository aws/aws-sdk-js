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

helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.AWSRequest', ->
  request = null
  response = null
  beforeEach ->
    request = new AWS.AWSRequest(null, 'operation', {})
    response = request.awsResponse

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
