helpers = require('../helpers')
AWS = helpers.AWS
Buffer = AWS.util.Buffer

svc = AWS.Protocol.RestXml
describe 'AWS.Protocol.RestXml', ->

  MockRESTXMLService = AWS.util.inherit AWS.Service,
    endpointPrefix: 'mockservice'

  xmlns = 'http://mockservice.com/xmlns'
  request = null
  response = null
  service = null

  beforeEach ->
    MockRESTXMLService.prototype.api = new AWS.Model.Api
      metadata:
        xmlNamespace: xmlns
      operations:
        SampleOperation:
          http:
            method: 'POST'
            requestUri: '/'

    AWS.Service.defineMethods(MockRESTXMLService)
    service = new MockRESTXMLService(region: 'region')
    request = new AWS.Request(service, 'sampleOperation')
    response = request.response

  defop = (op) ->
    AWS.util.property(service.api.operations, 'sampleOperation',
      new AWS.Model.Operation('sampleOperation', op, api: service.api))

  describe 'buildRequest', ->
    build = -> svc.buildRequest(request); request

    describe 'empty bodies', ->
      it 'defaults body to empty string when there are no inputs', ->
        defop input: type: 'structure', members: {}
        expect(build().httpRequest.body).toEqual('')

      it 'defaults body to empty string when no body params are present', ->
        request.params = Bucket: 'abc', ACL: 'canned-acl'
        defop
          http: requestUri: '/{Bucket}'
          input:
            type: 'structure'
            members:
              Bucket:
                location: 'uri'
              ACL:
                locationName: 'x-amz-acl'
                location: 'header'

        build()
        expect(request.httpRequest.body).toEqual('')
        expect(request.httpRequest.path).toEqual('/abc')
        expect(request.httpRequest.headers['x-amz-acl']).toEqual('canned-acl')

    describe 'string bodies', ->
      it 'populates the body with string types directly', ->
        request.params = Bucket: 'bucket-name', Data: 'abc'
        defop
          http: requestUri: '/{Bucket}'
          input:
            payload: 'Data'
            members:
              Bucket:
                location: 'uri'
              Data:
                type: 'string'
        expect(build().httpRequest.body).toEqual('abc')

    describe 'xml bodies', ->
      it 'populates the body with XML from the params', ->
        request.params =
          ACL: 'canned-acl'
          Config:
            Abc: 'abc'
            Locations: ['a', 'b', 'c']
            Data: [
              { Foo:'foo1', Bar:'bar1' },
              { Foo:'foo2', Bar:'bar2' },
            ]
          Bucket: 'bucket-name'
          Marker: 'marker'
          Limit: 123
          Metadata:
            abc: 'xyz'
            mno: 'hjk'
        defop
          http: requestUri: '/{Bucket}'
          input:
            payload: 'Config'
            members:
              Bucket: # uri path param
                type: 'string'
                location: 'uri'
              Marker: # uri querystring param
                type: 'string'
                location: 'querystring'
                locationName: 'next-marker'
              Limit: # uri querystring integer param
                type: 'integer'
                location: 'querystring'
                locationName: 'limit'
              ACL: # header string param
                type: 'string'
                location: 'header'
                locationName: 'x-amz-acl'
              Metadata: # header map param
                type: 'map'
                location: 'headers'
                locationName: 'x-amz-meta-'
              Config: # structure of mixed tpyes
                type: 'structure'
                members:
                  Abc: type: 'string'
                  Locations: # array of strings
                    type: 'list'
                    member:
                      type: 'string'
                      locationName: 'Location'
                  Data: # array of structures
                    type: 'list'
                    member:
                      type: 'structure'
                      members:
                        Foo: type: 'string'
                        Bar: type: 'string'
        xml = """
        <Config xmlns="http://mockservice.com/xmlns">
          <Abc>abc</Abc>
          <Locations>
            <Location>a</Location>
            <Location>b</Location>
            <Location>c</Location>
          </Locations>
          <Data>
            <member>
              <Foo>foo1</Foo>
              <Bar>bar1</Bar>
            </member>
            <member>
              <Foo>foo2</Foo>
              <Bar>bar2</Bar>
            </member>
          </Data>
        </Config>
        """

        build()
        expect(request.httpRequest.method).toEqual('POST')
        expect(request.httpRequest.path).
          toEqual('/bucket-name?limit=123&next-marker=marker')
        expect(request.httpRequest.headers['x-amz-acl']).toEqual('canned-acl')
        expect(request.httpRequest.headers['x-amz-meta-abc']).toEqual('xyz')
        expect(request.httpRequest.headers['x-amz-meta-mno']).toEqual('hjk')
        helpers.matchXML(request.httpRequest.body, xml)

      it 'omits the body xml when body params are not present', ->
        request.params = Bucket:'abc' # omitting Config purposefully
        defop
          http: requestUri: '/{Bucket}'
          input:
            members:
              Bucket:
                location: 'uri'
              Config: {}

        build()
        expect(request.httpRequest.body).toEqual('')
        expect(request.httpRequest.path).toEqual('/abc')

    it 'uses payload member name for payloads', ->
      request.params =
        Data:
          Member1: 'member1'
          Member2: 'member2'
      defop
        input:
          payload: 'Data'
          members:
            Data:
              type: 'structure'
              locationName: 'RootElement'
              members:
                Member1: type: 'string'
                Member2: type: 'string'
      helpers.matchXML build().httpRequest.body, """
        <RootElement xmlns="http://mockservice.com/xmlns">
          <Member1>member1</Member1>
          <Member2>member2</Member2>
        </RootElement>
      """

  describe 'extractError', ->
    extractError = (body) ->
      if body == undefined
        body = """
        <Error>
          <Code>InvalidArgument</Code>
          <Message>Provided param is bad</Message>
        </Error>
        """
      response.httpResponse.statusCode = 400
      response.httpResponse.body = new Buffer(body)
      svc.extractError(response)

    it 'extracts the error code and message', ->
      extractError()
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual('InvalidArgument')
      expect(response.error.message).toEqual('Provided param is bad')
      expect(response.data).toEqual(null)

    it 'returns an empty error when the body is blank', ->
      extractError ''
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual(400)
      expect(response.error.message).toEqual(null)
      expect(response.data).toEqual(null)

    it 'extracts error when inside <Errors>', ->
      extractError """
      <SomeResponse>
        <Errors>
          <Error>
            <Code>code</Code><Message>msg</Message>
          </Error>
        </Errors>
      </SomeResponse>"""
      expect(response.error.code).toEqual('code')
      expect(response.error.message).toEqual('msg')

    it 'extracts error when <Error> is nested', ->
      extractError """
      <SomeResponse>
        <Error>
          <Code>code</Code><Message>msg</Message>
        </Error>
      </SomeResponse>"""
      expect(response.error.code).toEqual('code')
      expect(response.error.message).toEqual('msg')

  describe 'extractData', ->
    extractData = (body) ->
      response.httpResponse.statusCode = 200
      response.httpResponse.body = new Buffer(body)
      svc.extractData(response)

    it 'parses the xml body', ->
      defop output:
        type: 'structure'
        members:
          Foo: {}
          Bar:
            type: 'list'
            member:
              locationName: 'Item'
      extractData """
      <xml>
        <Foo>foo</Foo>
        <Bar>
          <Item>a</Item>
          <Item>b</Item>
          <Item>c</Item>
        </Bar>
      </xml>
      """
      expect(response.data).toEqual({Foo:'foo', Bar:['a', 'b', 'c']})

    it 'sets payload element to a Buffer object when it streams', ->
      defop output:
        type: 'structure'
        payload: 'Body'
        members:
          Body:
            streaming: true
      extractData 'Buffer data'
      expect(Buffer.isBuffer(response.data.Body)).toBeTruthy()
      expect(response.data.Body.toString()).toEqual('Buffer data')

    it 'sets payload element to String when it does not stream', ->
      defop output:
        type: 'structure'
        payload: 'Body'
        members:
          Body: type: 'string'
      extractData 'Buffer data'
      expect(typeof response.data.Body).toEqual('string')
      expect(response.data.Body).toEqual('Buffer data')

    it 'sets payload element along with other outputs', ->
      response.httpResponse.headers['x-amz-foo'] = 'foo'
      response.httpResponse.headers['x-amz-bar'] = 'bar'
      defop output:
        type: 'structure'
        payload: 'Baz'
        members:
          Foo:
            location: 'header'
            locationName: 'x-amz-foo'
          Bar:
            location: 'header'
            locationName: 'x-amz-bar'
          Baz: {}
      extractData 'Buffer data'
      expect(response.data.Foo).toEqual('foo')
      expect(response.data.Bar).toEqual('bar')
      expect(response.data.Baz).toEqual('Buffer data')
