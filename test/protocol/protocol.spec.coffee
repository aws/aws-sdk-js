helpers = require('../helpers')
AWS = helpers.AWS

sortQS = (body) ->
  AWS.util.queryParamsToString(AWS.util.queryStringParse(body))

protocols =
  ec2:
    input:  require('../fixtures/protocol/input/ec2')
    output: require('../fixtures/protocol/output/ec2')
  json:
    input:  require('../fixtures/protocol/input/json')
    output: require('../fixtures/protocol/output/json')
  query:
    input:  require('../fixtures/protocol/input/query')
    output: require('../fixtures/protocol/output/query')
  'rest-json':
    input:  require('../fixtures/protocol/input/rest-json')
    output: require('../fixtures/protocol/output/rest-json')
  'rest-xml':
    input:  require('../fixtures/protocol/input/rest-xml')
    output: require('../fixtures/protocol/output/rest-xml')

tests = (svcName) ->
  setupTests svcName, 'input'
  setupTests svcName, 'output'

setupTests = (svcName, type) ->
  describe svcName, ->
    describe type, ->
      values = protocols[svcName][type]
      values.forEach (group) ->
        describe group.description, ->
          # setup API
          api =
            metadata: group.metadata
            operations: []
            shapes: group.shapes
          group.cases.forEach (_case, i) ->
            _case.op = "case" + (i+1)
            api.operations[_case.op] = _case.given

          # create service
          svc = new AWS.Service endpoint: 'http://localhost', apiConfig: api

          group.cases.forEach (_case, i) ->
            it _case.op, ->
              if type == 'input'
                inputCase(svc, _case, i)
              else
                outputCase(svc, _case, i)

inputCase = (svc, _case, i, done) ->
  req = svc[_case.op](_case.params)
  req.build()

  data = _case.serialized
  expect(req.httpRequest.path).to.equal(data.uri)

  if svc.api.protocol == 'query' or svc.api.protocol == 'ec2'
    expect(sortQS(req.httpRequest.body)).to.equal(sortQS(data.body))
  else if svc.api.protocol.match(/json/)
    expect(req.httpRequest.body.replace(/\s+/g, '')).to.equal(
      data.body.replace(/\s+/g, ''))
  else
    expect(req.httpRequest.body).to.equal(data.body)

  if data.headers
    for k, v of data.headers
      expect(req.httpRequest.headers[k]).to.eql(v)

outputCase = (svc, _case, i, done) ->
  resp = _case.response
  helpers.mockHttpResponse resp.status_code, resp.headers, resp.body

  req = svc[_case.op](_case.params)
  req.send()
  for k, v of _case.result
    if k.match('Blob')
      expect(req.response.data[k].toString()).to.equal(v.toString())
    else
      expect(req.response.data[k]).to.eql(v)

describe 'AWS protocol support', ->
  tests 'ec2'
  tests 'query'
