helpers = require('../helpers')
AWS = helpers.AWS
Operation = helpers.AWS.Model.Operation
Api = helpers.AWS.Model.Api

svc = AWS.Protocol.Rest
describe 'AWS.Protocol.Rest', ->

  MockRESTService = helpers.util.inherit AWS.Service,
    endpointPrefix: 'mockservice'

  request = null
  response = null
  service = null

  beforeEach ->
    MockRESTService.prototype.api = new Api operations:
      SampleOperation:
        http:
          method: 'POST'
          requestUri: '/'
 

    AWS.Service.defineMethods(MockRESTService)

    service = new MockRESTService(region: 'region')
    request = new AWS.Request(service, 'sampleOperation')
    response = request.response

  defop = (op) ->
    AWS.util.property(service.api.operations, 'sampleOperation',
      new Operation('sampleOperation', op, api: service.api))

  describe 'buildRequest', ->
    input = null

    build = -> svc.buildRequest(request); request

    describe 'method', ->
      it 'populates method from the operation', ->
        defop http: method: 'GET'
        expect(build().httpRequest.method).toEqual('GET')

    describe 'uri', ->
      beforeEach ->
        input =
          type: 'structure'
          members:
            Id: location: 'uri', locationName: 'Id'

      it 'populates uri from the operation', ->
        defop http: requestUri: '/path'
        expect(build().httpRequest.path).toEqual('/path')

      it 'appends to existing httpRequest endpoint', ->
        service = new MockRESTService(endpoint: 'https://localhost/foo/bar')
        request = new AWS.Request(service, 'sampleOperation')
        request.params = Id: 'abc'
        defop input: input, http: requestUri: '/Owner/{Id}'
        expect(build().httpRequest.path).toEqual('/foo/bar/Owner/abc')

      it 'replaces param placeholders', ->
        request.params = Id: 'abc'
        defop input: input, http: requestUri: '/Owner/{Id}'
        expect(build().httpRequest.path).toEqual('/Owner/abc')

      it 'replaces param with empty string', ->
        request.params = Id: ''
        defop input: input, http: requestUri: '/Owner/{Id}'
        expect(build().httpRequest.path).toEqual('/Owner/')

      it 'can replace multiple path placeholders', ->
        request.params = Id: 'abc', Count: 123
        input.members.Count = type: 'integer', location: 'uri'
        defop input: input, http: requestUri: '/{Id}/{Count}'
        expect(build().httpRequest.path).toEqual('/abc/123')

      it 'performs querystring param replacements', ->
        request.params = Id: 'abc'
        defop input: input, http: requestUri: '/path'
        input.members.Id = location: 'querystring', locationName: 'id-param'
        expect(build().httpRequest.path).toEqual('/path?id-param=abc')

      it 'omits querystring when param is not provided', ->
        defop input: input, http: requestUri: '/path'
        input.members.Id = location: 'querystring', locationName: 'id-param'
        expect(build().httpRequest.path).toEqual('/path')

      it 'accpets multiple query params with uri params', ->
        request.params = Abc:'abc', Xyz:'xyz', Bar:'bar'
        defop input: input, http: requestUri: '/{Abc}/{Xyz}'
        input.members.Abc = location: 'uri'
        input.members.Xyz = location: 'uri'
        input.members.Foo = location: 'querystring', locationName: 'foo'
        input.members.Bar = location: 'querystring', locationName: 'bar'
        expect(build().httpRequest.path).toEqual('/abc/xyz?bar=bar')

      it 'uri escapes params in both path and querystring', ->
        request.params = Path:'a b', Query:'a/b'
        defop input: input, http: requestUri: '/{Path}'
        input.members.Path = location: 'uri'
        input.members.Query = location: 'querystring', locationName: 'query'
        expect(build().httpRequest.path).toEqual('/a%20b?query=a%2Fb')

    describe 'headers', ->
      beforeEach ->
        input =
          type: 'structure'
          members:
            ACL: location: 'header', locationName: 'x-amz-acl'

      it 'populates the headers with present params', ->
        request.params = ACL: 'public-read'
        defop input: input
        expect(build().httpRequest.headers['x-amz-acl']).toEqual('public-read')

      it 'populates the headers type translations', ->
        request.params = Count: 123
        defop input: members: Count: locationName: 'count', type: 'integer', location: 'header'
        expect(build().httpRequest.headers['count']).toEqual('123')

      it 'uses default rule name if locationName property is not present', ->
        request.params = ACL: 'public-read'
        delete input.members.ACL.locationName
        defop input: input
        expect(build().httpRequest.headers['ACL']).toEqual('public-read')

      it 'works with map types', ->
        request.params =
          Metadata:
            foo: 'bar'
            abc: 'xyz'
        input.members.Metadata =
          type: 'map'
          location: 'headers'
          locationName: 'x-amz-meta-'
        defop input: input

        build()
        expect(request.httpRequest.headers['x-amz-meta-foo']).toEqual('bar')
        expect(request.httpRequest.headers['x-amz-meta-abc']).toEqual('xyz')

    describe 'timestamp header with format', ->
      it 'populates the header with correct timestamp formatting', ->
        date = new Date(); date.setMilliseconds(0)
        request.params = IfModifiedSince: date
        input.members.IfModifiedSince =
          location: 'header'
          locationName: 'If-Modified-Since'
          type: 'timestamp'
          timestampFormat: 'rfc822'
        defop input: input
        expect(build().httpRequest.headers['If-Modified-Since']).toEqual(date.toUTCString())

    describe 'timestamp header without format', ->
      it 'populates the header using the api formatting', ->
        service.api.timestampFormat = 'rfc822'
        date = new Date(); date.setMilliseconds(0)
        request.params = IfModifiedSince: date
        input.members.IfModifiedSince =
          location: 'header'
          locationName: 'If-Modified-Since'
          type: 'timestamp'
        defop input: input
        expect(build().httpRequest.headers['If-Modified-Since']).toEqual(date.toUTCString())

    describe 'timestamp header with api formatting and parameter formatting', ->
      it 'populates the header using the parameter formatting', ->
        service.api.timestampFormat = 'invalid'
        date = new Date(); date.setMilliseconds(0)
        request.params = IfModifiedSince: date
        input.members.IfModifiedSince =
          location: 'header'
          locationName: 'If-Modified-Since'
          type: 'timestamp'
          timestampFormat: 'rfc822'
        defop input: input
        expect(build().httpRequest.headers['If-Modified-Since']).toEqual(date.toUTCString())

    describe 'timestamp header with iso formatting', ->
      it 'populates the header using the parameter formatting', ->
        date = new Date(); date.setMilliseconds(0)
        request.params = IfModifiedSince: date
        input.members.IfModifiedSince =
          location: 'header'
          locationName: 'If-Modified-Since'
          type: 'timestamp'
          timestampFormat: 'iso8601'
        defop input: input
        expect(build().httpRequest.headers['If-Modified-Since']).toEqual(date.toISOString())

  describe 'extractData', ->
    output = type: 'structure', members:
      ContentType:
        type: 'string'
        location: 'header'
        locationName: 'content-type'

    extract = -> defop output: output; svc.extractData(response); response

    describe 'headers', ->
      it 'extracts header values', ->
        response.httpResponse.headers['content-type'] = 'text/plain'
        expect(extract().data.ContentType).toEqual('text/plain')

      it 'extracts headers when the rule name is camel-cased', ->
        response.httpResponse.headers['content-type'] = 'text/plain'
        output.members.ContentType.locationName = 'Content-Type'
        expect(extract().data.ContentType).toEqual('text/plain')

      it 'extracts headers when the header name is camel-cased', ->
        response.httpResponse.headers['Content-Type'] = 'text/plain'
        expect(extract().data.ContentType).toEqual('text/plain')

      it 'extracts map types from header', ->
        output.members.Metadata = type: 'map', location: 'headers', locationName: 'x-amz-meta-'
        response.httpResponse.headers['X-AMZ-META-FOO'] = 'foo'
        response.httpResponse.headers['x-amz-meta-bar'] = 'bar'

        extract()
        expect(response.data.Metadata.FOO).toEqual('foo')
        expect(response.data.Metadata.bar).toEqual('bar')

      it 'adds empty map if no matching headers are found', ->
        output.members.Metadata = type: 'map', location: 'headers', locationName: 'x-amz-meta-'
        expect(extract().data.Metadata).toEqual({})

    describe 'status code', ->
      it 'extracts the http status when instructed to', ->
        output.members.Result = type: 'integer', location: 'status'
        response.httpResponse.statusCode = 200
        expect(extract().data.Result).toEqual(200)

      it 'casts string status codes to integers', ->
        output.members.Result = type: 'integer', location: 'status'
        response.httpResponse.statusCode = '202'
        expect(extract().data.Result).toEqual(202)
