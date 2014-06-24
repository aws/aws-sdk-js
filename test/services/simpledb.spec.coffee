helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.SimpleDB', ->
  describe 'setEndpoint', ->
    it 'uses global endpoint if region is us-east-1', ->
      service = new AWS.SimpleDB(region: 'us-east-1')
      expect(service.endpoint.host).toEqual('sdb.amazonaws.com')

    it 'uses normal setEndpoint functionality if region is not us-east-1', ->
      service = new AWS.SimpleDB(region: 'us-west-2')
      expect(service.endpoint.host).toEqual('sdb.us-west-2.amazonaws.com')
