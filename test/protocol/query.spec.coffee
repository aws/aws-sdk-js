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
      expect(request.httpRequest.method).toEqual('POST')

    it 'should perform all operations on root (/)', ->
      buildRequest()
      expect(request.httpRequest.path).toEqual('/')

    it 'allows mounted path to be specified', ->
      service.setEndpoint('https://localhost/foo/bar')
      request = new AWS.Request(service, 'operationName')
      buildRequest()
      expect(request.httpRequest.path).toEqual('/foo/bar')

    it 'should set Content-Type header', ->
      buildRequest()
      expect(request.httpRequest.headers['Content-Type']).
        toEqual('application/x-www-form-urlencoded; charset=utf-8')

    it 'should add the api version param', ->
      buildRequest()
      expect(stringify(request.httpRequest.params)).
        toMatch(/Version=2012-01-01/)

    it 'should add the operation name as Action', ->
      buildRequest()
      expect(stringify(request.httpRequest.params)).
        toMatch(/Action=OperationName/)

    it 'should uri encode params properly', ->
      buildRequest()
      expect(stringify(request.httpRequest.params)).
        toMatch(/foo%2Bbar%3A%20yuck%2Fbaz%3D~/);

    it 'encodes empty string values properly', ->
      buildRequest('')
      expect(stringify(request.httpRequest.params)).
        toMatch(/Input=($|&)/);

    it 'serializes empty lists', ->
      buildRequest(null, [])
      expect(stringify(request.httpRequest.params)).toMatch(/[?&]List(&|$)/)

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
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual('UnknownOperation')
      expect(response.error.message).toEqual('Unknown operation operationName')
      expect(response.data).toEqual(null)

    it 'extracts the error code and message', ->
      extractError()
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual('InvalidArgument')
      expect(response.error.message).toEqual('Provided param is bad')
      expect(response.data).toEqual(null)

    it 'returns an empty error when the body is blank', ->
      extractError('')
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

    it 'parses the response using the operation output rules', ->
      extractData """
      <xml>
        <Data>
          <Name>abc</Name>
          <Count>123</Count>
        </Data>
      </xml>
      """
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({Data:{Name:'abc',Count:123}})

    it 'performs default xml parsing when output rule is missing', ->
      delete service.api.operations.operationName.output
      extractData """
      <xml>
        <Data>
          <Name>abc</Name>
          <Count>123</Count>
        </Data>
      </xml>
      """
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({Data:{Name:'abc',Count:'123'}})

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
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({Data:{Name:'abc',Count:12345.5}})
