AWS = require('../../lib/aws')

describe 'AWS.DynamoDB.HttpRequest', ->
  describe 'constructor', ->
    request = new AWS.DynamoDB.HttpRequest('operationName', {foo: 'bar'})

    it 'should use POST method requests', ->
      expect(request.method).toEqual('POST')

    it 'should perform all operations on root (/)', ->
      expect(request.uri).toEqual('/')

    it 'should set serviceName to dynamodb', ->
      expect(request.serviceName).toEqual('dynamodb')

    it 'should set Content-Type header', ->
      type = 'application/x-amz-json-1.0'
      expect(request.headers['Content-Type']).toEqual(type)

    it 'should set User-Agent', ->
      agent = AWS.HttpRequest.prototype.userAgent
      expect(request.headers['User-Agent']).toEqual(agent)

    it 'should set X-Amz-Target header', ->
      parts = request.headers['X-Amz-Target'].split('.')
      expect(parts[0]).toEqual(request.targetPrefix)
      expect(parts[1]).toEqual('OperationName')

    it 'should set Content-Length to body length', ->
      expect(request.headers['Content-Length']).toEqual(13)

    it 'should serialize params input object to string', ->
      expect(request.body).toEqual('{"foo":"bar"}')
