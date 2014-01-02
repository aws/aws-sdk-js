helpers = require('../helpers')
AWS = helpers.AWS

require('../../lib/services/simpledb')

describe 'AWS.SimpleDB', ->
  describe 'setEndpoint', ->
    it 'uses global endpoint if region is us-east-1', ->
      service = new AWS.SimpleDB(region: 'us-east-1')
      service.setEndpoint()
      expect(service.endpoint.host).toEqual('sdb.amazonaws.com')

    it 'uses normal setEndpoint functionality if region is not us-east-1', ->
      setEndpoint = spyOn(AWS.Service.prototype, 'setEndpoint')
      service = new AWS.SimpleDB(region: 'us-west-2')
      service.setEndpoint()
      expect(setEndpoint).toHaveBeenCalled()
