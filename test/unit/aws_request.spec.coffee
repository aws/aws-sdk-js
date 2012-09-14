AWS = require('../../lib/core')

describe 'AWS.AWSRequest', ->
  request = null
  response = null
  beforeEach ->
    response = new AWS.AWSResponse(service: null, method: 'POST', params: {})
    request = new AWS.AWSRequest(response)

  sharedBehaviour = (cbMethod, notifyMethod) ->
    it 'can register callback', ->
      spy = jasmine.createSpy()
      request[cbMethod](spy)
      request[notifyMethod]()
      expect(spy).toHaveBeenCalled()

    it 'will trigger even if registered after notification', ->
      spy = jasmine.createSpy()
      request[notifyMethod]()
      request[cbMethod](spy)
      expect(spy).toHaveBeenCalled()

    it 'can register multiple callbacks', ->
      spies = [jasmine.createSpy(), jasmine.createSpy()]
      request[notifyMethod]()
      for index of spies
        request[cbMethod](spies[index])
        expect(spies[index]).toHaveBeenCalled()

    it 'can chain callbacks', ->
      spy1 = jasmine.createSpy()
      spy2 = jasmine.createSpy()
      retVal = request[cbMethod](spy1)[cbMethod](spy2)
      request[notifyMethod]()
      expect(retVal).toBe(request)
      expect(spy1).toHaveBeenCalled()
      expect(spy2).toHaveBeenCalled()

    it 'should be triggered in default binding of response object', ->
      request[cbMethod] ->
        expect(this).toBe(response)
      request[notifyMethod]()

    it 'should be triggered with response object as param', ->
      request[cbMethod] (context) ->
        expect(context).toBe(response)
      request[notifyMethod]()

    it 'should allow overriding of binding', ->
      request[cbMethod]((-> expect(this).toEqual('foo')), bind: 'foo')
      request[notifyMethod]()

  describe 'done', ->
    sharedBehaviour('done', 'notifyDone')

  describe 'fail', ->
    sharedBehaviour('fail', 'notifyFail')

  describe 'always', ->
    describe 'with notifyDone', ->
      sharedBehaviour('always', 'notifyDone')

    describe 'with notifyFail', ->
    sharedBehaviour('always', 'notifyFail')
