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

AWS = require('../../lib/core')
helpers = require('../helpers')
require('../../lib/services/ec2')

describe 'AWS.EC2.Client', ->

  ec2 = new AWS.EC2.Client({region: 'us-east-1'})

  describe 'parseResponse', ->
    body = ''
    parse = (callback) ->
      helpers.mockHttpResponse 400, {}, body
      ec2.makeRequest 'describeInstances', (error, data) ->
        callback.call(this, error, data)

    describe 'with error', ->
      beforeEach ->
        body =
          """
          <Response>
            <Errors>
              <Error>
                <Code>InvalidInstanceID.Malformed</Code>
                <Message>Invalid id: "i-12345678"</Message>
              </Error>
            </Errors>
            <RequestID>ab123mno-6432-dceb-asdf-123mno543123</RequestID>
          </Response>
          """

      it 'extracts the error code', ->
        parse (error, data) ->
          expect(error.code).toEqual('InvalidInstanceID.Malformed')
          expect(data).toEqual(null)

      it 'extracts the error message', ->
        parse (error, data) ->
          expect(error.message).toEqual('Invalid id: "i-12345678"')
          expect(data).toEqual(null)

      it 'returns an empty error when the body is blank', ->
        body = ''
        parse (error, data) ->
          expect(error.code).toEqual(400)
          expect(error.message).toEqual(null)
          expect(data).toEqual(null)

