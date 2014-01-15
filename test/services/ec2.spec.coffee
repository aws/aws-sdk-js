helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.EC2', ->

  ec2 = new AWS.EC2()

  describe 'proxy support', ->
    it 'always sets Host header to correct endpoint', ->
      helpers.mockHttpResponse 200, {}, ''
      ec2 = new AWS.EC2(httpOptions: proxy: 'http://__INVALID_HOSTNAME__:9999')
      ec2.makeRequest 'describeInstances', ->
        expect(@request.httpRequest.headers.Host).
          toEqual('ec2.mock-region.amazonaws.com')

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

