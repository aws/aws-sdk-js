helpers = require('../helpers')
AWS = helpers.AWS
Buffer = AWS.util.Buffer

svc = AWS.Protocol.Query
describe 'AWS.Protocol.Query', ->
  service = null
  request = null
  response = null

  beforeEach ->
    service = new AWS.Service apiConfig:
      metadata:
        endpointPrefix: 'mockservice'
        apiVersion: '2012-01-01'
      operations:
        OperationName:
          name: 'OperationName'
          input:
            members:
              Input:
                type: 'string'
              List:
                type: 'list'
                members: {}
          output:
            type: 'structure'
            members:
              Data:
                type: 'structure'
                members:
                  Name:
                    type: 'string'
                  Count:
                    type: 'float'

    request = new AWS.Request(service, 'operationName')
    response = request.response

  describe 'buildRequest', ->
    stringify = (params) -> AWS.util.queryParamsToString(params)

    buildRequest = (input, list) ->
      if input == undefined
        input = 'foo+bar: yuck/baz=~'
      request.params = Input: input, List: list
      svc.buildRequest(request)

    it 'should use POST method requests', ->
      buildRequest()
      expect(request.httpRequest.method).to.equal('POST')

    it 'should perform all operations on root (/)', ->
      buildRequest()
      expect(request.httpRequest.path).to.equal('/')

    it 'allows mounted path to be specified', ->
      service.setEndpoint('https://localhost/foo/bar')
      request = new AWS.Request(service, 'operationName')
      buildRequest()
      expect(request.httpRequest.path).to.equal('/foo/bar')

    it 'should set Content-Type header', ->
      buildRequest()
      expect(request.httpRequest.headers['Content-Type']).
        to.equal('application/x-www-form-urlencoded; charset=utf-8')

    it 'should add the api version param', ->
      buildRequest()
      expect(stringify(request.httpRequest.params)).
        to.match(/Version=2012-01-01/)

    it 'should add the operation name as Action', ->
      buildRequest()
      expect(stringify(request.httpRequest.params)).
        to.match(/Action=OperationName/)

    it 'should uri encode params properly', ->
      buildRequest()
      expect(stringify(request.httpRequest.params)).
        to.match(/foo%2Bbar%3A%20yuck%2Fbaz%3D~/);

    it 'encodes empty string values properly', ->
      buildRequest('')
      expect(stringify(request.httpRequest.params)).
        to.match(/Input=($|&)/);

    it 'serializes empty lists', ->
      buildRequest(null, [])
      expect(stringify(request.httpRequest.params)).to.match(/[?&]List=(&|$)/)

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

    it 'extracts error from UnknownOperationException', ->
      extractError '<UnknownOperationException/>'
      expect(response.error ).to.be.instanceOf(Error)
      expect(response.error.code).to.equal('UnknownOperation')
      expect(response.error.message).to.equal('Unknown operation operationName')
      expect(response.data).to.equal(null)

    it 'extracts the error code and message', ->
      extractError()
      expect(response.error ).to.be.instanceOf(Error)
      expect(response.error.code).to.equal('InvalidArgument')
      expect(response.error.message).to.equal('Provided param is bad')
      expect(response.data).to.equal(null)

    it 'returns an empty error when the body is blank', ->
      extractError('')
      expect(response.error.code).to.equal(400)
      expect(response.error.message).to.equal(null)
      expect(response.data).to.equal(null)

    it 'extracts error when inside <Errors>', ->
      extractError """
      <SomeResponse>
        <Errors>
          <Error>
            <Code>code</Code><Message>msg</Message>
          </Error>
        </Errors>
      </SomeResponse>"""
      expect(response.error.code).to.equal('code')
      expect(response.error.message).to.equal('msg')

    it 'extracts error when <Error> is nested', ->
      extractError """
      <SomeResponse>
        <Error>
          <Code>code</Code><Message>msg</Message>
        </Error>
      </SomeResponse>"""
      expect(response.error.code).to.equal('code')
      expect(response.error.message).to.equal('msg')

  describe 'extractData', ->
    extractData = (body) ->
      response.httpResponse.statusCode = 200
      response.httpResponse.body = new Buffer(body)
      svc.extractData(response)

    it 'parses the response using the operation output rules', ->
      extractData """
      <xml>
        <Data>
          <Name>abc</Name>
          <Count>123</Count>
        </Data>
      </xml>
      """
      expect(response.error).to.equal(null)
      expect(response.data).to.eql({Data:{Name:'abc',Count:123}})

    it 'performs default xml parsing when output rule is missing', ->
      delete service.api.operations.operationName.output
      extractData """
      <xml>
        <data>
          <name>abc</name>
          <count>123</count>
        </data>
      </xml>
      """
      expect(response.error).to.equal(null)
      expect(response.data).to.eql({data:{name:'abc',count:'123'}})

    it 'removes wrapping result element if resultWrapper is set', ->
      service.api.operations.operationName.output.resultWrapper = 'OperationNameResult'
      extractData """
      <xml>
        <OperationNameResult>
          <Data>
            <Name>abc</Name>
            <Count>12345.5</Count>
          </Data>
        </OperationNameResult>
      </xml>
      """
      expect(response.error).to.equal(null)
      expect(response.data).to.eql({Data:{Name:'abc',Count:12345.5}})

    it 'extracts requestId from the response', ->
      extractData """
      <xml>
        <requestId>12345-abcde</requestId>
        <Data>
          <Name>abc</Name>
          <Count>123</Count>
        </Data>
      </xml>
      """
      expect(response.requestId).to.equal('12345-abcde')
      expect(response.data).to.eql({Data:{Name:'abc',Count:123}})

    it 'extracts requestId even if output members are absent', ->
      delete service.api.operations.operationName.output
      extractData """
      <xml>
        <requestId>12345-abcde</requestId>
      </xml>
      """
      expect(response.requestId).to.equal('12345-abcde')
      expect(response.data).to.eql({requestId: '12345-abcde'})

    it 'does not override RequestId if it is modeled', ->
      shape = AWS.Model.Shape.create(
        { type: 'string' },
        { api: {protocol: 'query'}},
        'foo')
      service.api.operations.operationName.output.members.RequestId = shape
      extractData """
      <xml>
        <requestId>12345-abcde</requestId>
        <foo>foo-bar</foo>
        <Data>
          <Name>abc</Name>
          <Count>123</Count>
        </Data>
      </xml>
      """
      expect(response.data).to.eql({Data:{Name:'abc',Count:123},RequestId:'foo-bar'})

    it 'does not override requestId if it is modeled', ->
      shape = AWS.Model.Shape.create(
        { type: 'string' },
        { api: {protocol: 'query'}},
        'foo')
      service.api.operations.operationName.output.members.requestId = shape
      extractData """
      <xml>
        <requestId>12345-abcde</requestId>
        <foo>foo-bar</foo>
        <Data>
          <Name>abc</Name>
          <Count>123</Count>
        </Data>
      </xml>
      """
      expect(response.data).to.eql({Data:{Name:'abc',Count:123},requestId:'foo-bar'})
