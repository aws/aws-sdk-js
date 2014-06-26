helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.CloudSearchDomain', ->
  describe 'constructor', ->
    it 'fails if there is no provided endpoint', ->
      err = {}
      try
        new AWS.CloudSearchDomain
      catch e
        err = e
      expect(err.name).toEqual('InvalidEndpoint')

    it 'fails if the endpoint is a template', ->
      err = {}
      try
        new AWS.CloudSearchDomain endpoint: '{region}.domain'
      catch e
        err = e
      expect(err.name).toEqual('InvalidEndpoint')

    it 'allows explicit endpoint', ->
      expect(-> new AWS.CloudSearchDomain endpoint: 'host.domain').not.toThrow()
