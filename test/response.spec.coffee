helpers = require('./helpers')
EventEmitter = require('events').EventEmitter
AWS = helpers.AWS

describe 'AWS.Response', ->
  service = null; response = null

  beforeEach ->
    service = new AWS.Service apiConfig: operations: op: input: {}, output: {}
    response = new AWS.Response(service.makeRequest('op'))

  makePageable = ->
    service.api.pagination = op:
      limitKey: 'Limit'
      inputToken: 'Marker'
      outputToken: 'Marker'
      resultKey: 'Result'

  fill = (err, data, pageable) ->
    makePageable() if pageable
    response.error = err
    response.data = data

  describe 'hasNextPage', ->
    it 'returns undefined if the request is not pageable', ->
      fill(null, Marker: 'next_page')
      expect(response.hasNextPage()).toEqual(undefined)

    it 'returns false if there is no marker in the response', ->
      fill(null, {}, true)
      expect(response.hasNextPage()).toEqual(false)

    it 'returns false if the response returned an error', ->
      fill(new Error, null, true)
      expect(response.hasNextPage()).toEqual(false)

    it 'returns true if there is a marker in the response', ->
      fill(null, Marker: 'next_page', true)
      expect(response.hasNextPage()).toEqual(true)

  describe 'nextPage', ->
    it 'throws an exception if the service has no pagination information', ->
      expect(-> response.nextPage()).toThrow('No pagination configuration for service')

    it 'throws an exception if the operation has no pagination information', ->
      service.api.pagination = {}
      expect(-> response.nextPage()).toThrow('No pagination configuration for op')

    it 'returns null if there are no more pages', ->
      fill(null, {}, true)
      expect(response.nextPage()).toEqual(null)

    it 'returns a request object with the next page marker filled in params', ->
      fill(null, Marker: 'next_page', true)
      req = response.nextPage()
      expect(req.params.Marker).toEqual('next_page')
      expect(req.operation).toEqual(response.request.operation)

    it 'throws error if response returned an error and there is no callback', ->
      fill(new Error('error!'), null, true)
      expect(-> response.nextPage()).toThrow('error!')

    it 'sends the request if passed with a callback', ->
      err = null; data = null
      helpers.mockHttpResponse 200, {}, ['']
      fill(null, Marker: 'next_page', true)
      runs ->
        response.nextPage (e, d) -> err = e; data = d
      waitsFor -> err || data
      runs ->
        expect(err).toEqual(null)
        expect(data).toEqual({})

    it 'passes null to callback if there are no more pages', ->
      fill(null, {}, true)
      response.nextPage (err, data) ->
        expect(err).toEqual(null)
        expect(data).toEqual(null)

    it 'passes error through if original response returned an error', ->
      fill('error!', null, true)
      response.nextPage (err, data) ->
        expect(err).toEqual('error!')
        expect(data).toEqual(null)
