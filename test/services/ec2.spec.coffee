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

  describe 'copySnapshot', ->
    it 'generates PresignedUrl and DestinationRegion parameters', ->
      spyOn(AWS.util.date, 'getDate').andReturn(new Date(0))
      helpers.mockHttpResponse 200, {}, ''
      params = SourceRegion: 'src-region', SourceSnapshotId: 'snap-123456789'
      ec2.copySnapshot params, ->
        parts = @request.httpRequest.body.split('&').sort()
        [
          'AWSAccessKeyId=akid',
          'Action=CopySnapshot',
          'DestinationRegion=mock-region',
          'PresignedUrl=https%3A%2F%2Fec2.src-region.amazonaws.com%2F%3F' +
            "Action%3DCopySnapshot%26DestinationRegion%3Dmock-region%26SourceRegion%3Dsrc-region" +
            "%26SourceSnapshotId%3Dsnap-123456789%26Version%3D#{ec2.api.apiVersion}" +
            "%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3Dakid%252F19700101" +
            "%252Fsrc-region%252Fec2%252Faws4_request%26X-Amz-Date%3D19700101T000000Z" +
            "%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3Dsession" +
            "%26X-Amz-Signature%3D014459362191e87b3b175e1e16d007c0c9aaa1fdb2743f8cebdfd8dea0fb0cc2" +
            "%26X-Amz-SignedHeaders%3Dhost",
          'SourceRegion=src-region',
          'SourceSnapshotId=snap-123456789'
        ].forEach (i) ->
          expect(parts).toContain(i)

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

