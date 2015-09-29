helpers = require('../helpers')
AWS = helpers.AWS
util = AWS.util

sortQS = (body) ->
  util.queryParamsToString(AWS.util.queryStringParse(body))

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
  params = formatData(_case.params, svc.api.operations[_case.op].input)
  req = svc[_case.op](params)
  req.build()

  data = _case.serialized
  reqUrl = util.urlParse(req.httpRequest.path)
  dataUrl = util.urlParse(data.uri)
  expect(reqUrl.pathname).to.equal(dataUrl.pathname)
  expect(util.queryStringParse(reqUrl.query)).to.eql(util.queryStringParse(dataUrl.query))


  if svc.api.protocol == 'query' or svc.api.protocol == 'ec2'
    expect(sortQS(req.httpRequest.body)).to.equal(sortQS(data.body))
  else if svc.api.protocol.match(/(json|xml)/)
    if req.httpRequest.body == '{}' then req.httpRequest.body = ''
    expect(req.httpRequest.body.replace(/\s+/g, '')).to
      .equal(data.body.replace(/\s+/g, ''))
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
  expectedData = formatData(_case.result, svc.api.operations[_case.op].output)
  resultData = formatData(req.response.data, svc.api.operations[_case.op].output)
  for k, v of expectedData
    expect(resultData[k]).to.eql(v)

formatData = (data, shape) ->
  if shape.type == 'structure'
    params = {}
    for key,value of data
      member = shape.members[key]
      if member
        result = formatData(value, member)
        if result != undefined
          params[key] = result
    return params
  else if shape.type == 'list'
    params = []
    for item in data
      result = formatData(item, shape.member)
      if result != undefined
        params.push(result)
    return params
  else if shape.type == 'map'
    params = {}
    for key of data
      result = formatData(data[key], shape.value)
      if result != undefined
        params[key] = result
    return params
  else if shape.type == 'binary'
    return data.toString()
  else if shape.type == 'timestamp'
    return shape.toType(data)
  else if shape.type == 'integer'
    return shape.toType(data)
  else if shape.type == 'float'
    return shape.toType(data)
  else if shape.type == 'boolean'
    return shape.toType(data)
  else
    return data

   
describe 'AWS protocol support', ->
  tests 'ec2'
  tests 'query'
  tests 'json'
  tests 'rest-json'
  tests 'rest-xml'
