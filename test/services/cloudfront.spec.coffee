helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.CloudFront', ->

  cf = null
  beforeEach ->
    cf = new AWS.CloudFront()

  describe 'signing', ->
    it 'signs with us-east-1 region', ->
      helpers.mockHttpResponse 200, {}, ''
      cf.listDistributions ->
        auth = @request.httpRequest.headers['Authorization']
        expect(auth).toMatch(/\/us-east-1\/cloudfront\/aws4_request/)

  describe 'createInvalidation', ->
    it 'correctly builds the request', ->
      helpers.mockHttpResponse 200, {}, ''
      api = cf.api.apiVersion
      xml =
        """
        <InvalidationBatch xmlns="http://cloudfront.amazonaws.com/doc/#{api}/">
          <Paths>
            <Quantity>2</Quantity>
            <Items>
              <Path>path1</Path>
              <Path>path2</Path>
            </Items>
          </Paths>
          <CallerReference>abc</CallerReference>
        </InvalidationBatch>
        """
      params =
        DistributionId: 'ID'
        InvalidationBatch:
          Paths:
            Quantity: 2
            Items: ['path1', 'path2']
          CallerReference: 'abc'
      cf.createInvalidation params, (err, data) ->
        req = this.request.httpRequest
        expect(req.path).toEqual("/#{api}/distribution/ID/invalidation")
        helpers.matchXML(req.body, xml)
