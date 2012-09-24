AWS = require('../../lib/core')
require('../../lib/rpc')

describe 'AWS.HttpRequest', ->

  parser = new AWS.RPCErrorParser()

  extract = (response) ->
    return parser.extractError(response)

  resp = (options) ->
    r = new AWS.HttpResponse()
    r.statusCode = options.statusCode
    if (options.headers)
      r.headers = options.headers
    else
      r.headers = {}
    if (options.body)
      r.body = options.body
    return r

  describe 'extractError', ->

    it 'returns null for 200 status', ->
      expect(extract(resp({ statusCode: 200 }))).toEqual(null)

    describe 'code', ->

      it 'splits the error type on # to determine the error code', ->
        body = '{"__type":"com.amazon.coral.service#ErrorCode" }'
        error = extract(resp({ statusCode: 400,  body: body }))
        expect(error.code).toEqual('ErrorCode')

      it 'returns the full type when a # is not present', ->
        body = '{"__type":"ErrorCode" }'
        error = extract(resp({ statusCode: 400,  body: body }))
        expect(error.code).toEqual('ErrorCode')

      it 'returns the status code when the body is blank', ->
        error = extract(resp({ statusCode: 500,  body: null }))
        expect(error.code).toEqual('500')

    describe 'message', ->

      it 'returns null for the message when not present', ->
        body = '{"__type":"ErrorCode" }'
        error = extract(resp({ statusCode: 400,  body: body }))
        expect(error.message).toEqual(null)

      it 'returns the message when present', ->
        body = '{"__type":"ErrorCode", "message":"Error Message" }'
        error = extract(resp({ statusCode: 400,  body: body }))
        expect(error.message).toEqual('Error Message')

      # DynamoDB and SWF return error message properties with different case
      it 'returns the message when the message property is upper-cased', ->
        body = '{"__type":"ErrorCode", "Message":"Error Message" }'
        error = extract(resp({ statusCode: 400,  body: body }))
        expect(error.message).toEqual('Error Message')

      it 'returns a special message for RequestEntityToLarge errors', ->
        body = '{"__type":"RequestEntityTooLarge" }'
        error = extract(resp({ statusCode: 400,  body: body }))
        expect(error.message).toEqual('Request body must be less than 1 MB')

      it 'returns null when the body is blank', ->
        error = extract(resp({ statusCode: 500,  body: null }))
        expect(error.message).toEqual(null)

