helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.MachineLearning', ->
  machinelearning = null
  beforeEach ->
    machinelearning = new AWS.MachineLearning

  describe 'predict', ->
    it 'should set correct endpoint from PredictEndpoint parameter', ->
      helpers.mockHttpResponse 200, {}, ''
      req = machinelearning.predict(
        MLModelId: 'foo',
        Record: {},
        PredictEndpoint: 'https://foo.bar.com/'
      )
      req.build()
      expect(req.httpRequest.endpoint.host).to.equal('foo.bar.com')
