helpers = require('./helpers')
EventEmitter = require('events').EventEmitter
AWS = helpers.AWS

describe 'AWS.Response', ->
  service = null; response = null

  beforeEach ->
    service = new AWS.Service apiConfig: new AWS.Model.Api operations: op: {}
    response = new AWS.Response(service.makeRequest('op'))

  makePageable = ->
    service.api.paginators.op = new AWS.Model.Paginator 'op',
      limit_key: 'Limit'
      input_token: 'Marker'
      output_token: 'Marker'
      result_key: 'Result'

  fill = (err, data, pageable) ->
    makePageable() if pageable
    response.error = err
    response.data = data

  describe 'hasNextPage', ->
    it 'returns undefined if the request is not pageable', ->
      fill(null, Marker: 'next_page')
      expect(response.hasNextPage()).to.equal(undefined)

    it 'returns false if there is no marker in the response', ->
      fill(null, {}, true)
      expect(response.hasNextPage()).to.equal(false)

    it 'returns false if the response returned an error', ->
      fill(new Error, null, true)
      expect(response.hasNextPage()).to.equal(false)

    it 'returns true if there is a marker in the response', ->
      fill(null, Marker: 'next_page', true)
      expect(response.hasNextPage()).to.equal(true)

  describe 'nextPage', ->
    it 'throws an exception if the operation has no pagination information', ->
      service.api.pagination = {}
      expect(-> response.nextPage()).to.throw('No pagination configuration for op')

    it 'returns null if there are no more pages', ->
      fill(null, {}, true)
      expect(response.nextPage()).to.equal(null)

    it 'returns a request object with the next page marker filled in params', ->
      fill(null, Marker: 'next_page', true)
      req = response.nextPage()
      expect(req.params.Marker).to.equal('next_page')
      expect(req.operation).to.equal(response.request.operation)

    it 'throws error if response returned an error and there is no callback', ->
      fill(new Error('error!'), null, true)
      expect(-> response.nextPage()).to.throw('error!')

    it 'sends the request if passed with a callback', (done) ->
      helpers.mockHttpResponse 200, {}, ['']
      fill(null, Marker: 'next_page', true)
      response.nextPage (err, data) ->
        expect(err).to.equal(null)
        expect(data).to.eql({})
        done()

    it 'passes null to callback if there are no more pages', ->
      fill(null, {}, true)
      response.nextPage (err, data) ->
        expect(err).to.equal(null)
        expect(data).to.equal(null)

    it 'passes error through if original response returned an error', ->
      fill('error!', null, true)
      response.nextPage (err, data) ->
        expect(err).to.equal('error!')
        expect(data).to.equal(null)
