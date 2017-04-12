helpers = require('../helpers')
AWS = helpers.AWS
Buffer = AWS.util.Buffer

describe 'AWS.APIGateway', ->
  apigateway = null
  request = (operation, params) -> apigateway.makeRequest(operation, params)

  beforeEach ->
    apigateway = new AWS.APIGateway()

  describe 'building a request', ->
    build = (operation, params) ->
      request(operation, params).build().httpRequest

    describe 'sets Accept: application/json', ->
      it 'always sets accept header', ->
        req = build('getApiKey', apiKey: 'apiKey')
        expect(req.headers['Accept']).to.equal('application/json')
        req = build('createApiKey', {})
        expect(req.headers['Accept']).to.equal('application/json')
        req = build('updateApiKey', apiKey: 'apiKey')
        expect(req.headers['Accept']).to.equal('application/json')

  describe 'response parsing', ->
    describe 'getSdk', ->
      it 'returns the raw payload as the body', (done) ->
        body = new Buffer('∂ƒ©∆')
        helpers.mockHttpResponse 200, {}, body
        apigateway.getSdk (err, data) ->
          expect(data.body).to.eql(body)
          done()

    describe 'getExport', ->
      it 'converts the body to a string when the exportType is "swagger"', (done) ->
        swaggerDoc = JSON.stringify({swagger: "2.0", host: "foo.amazonaws.com"})
        body = new Buffer(swaggerDoc)
        helpers.mockHttpResponse 200, {}, body
        apigateway.getExport {exportType: 'swagger'}, (err, data) ->
          expect(Buffer.isBuffer(data.body)).to.be.false
          expect(data.body).to.eql(swaggerDoc)
          done()

      it 'returns the raw payload when the exportType is not "swagger"', (done) ->
        swaggerDoc = JSON.stringify({notSwagger: "2.0", host: "foo.amazonaws.com"})
        body = new Buffer(swaggerDoc)
        helpers.mockHttpResponse 200, {}, body
        apigateway.getExport {exportType: 'notSwagger'}, (err, data) ->
          expect(Buffer.isBuffer(data.body)).to.be.true
          if typeof body.equals == 'function'
            expect(body.equals(data.body)).to.be.true
          else
            expect(body.toString()).to.equal(data.body.toString())
          expect(data.body.toString()).to.eql(swaggerDoc)
          done()
