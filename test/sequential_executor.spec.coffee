helpers = require('./helpers')
AWS = helpers.AWS

describe 'AWS.SequentialExecutor', ->
  beforeEach -> @emitter = new AWS.SequentialExecutor()

  describe 'addListeners', ->
    it 'accepts a hash of events and functions', ->
      triggers = [0, 0, 0]
      listeners =
        eventName:
          ConstantName1: -> triggers[0] = 1
          ConstantName2: -> triggers[1] = 1
        otherEventName:
          ConstantName3: -> triggers[2] = 1

      @emitter.addListeners(listeners)
      expect(triggers).to.eql([0, 0, 0])

      @emitter.emit('eventName')
      expect(triggers).to.eql([1, 1, 0])

      @emitter.emit('otherEventName')
      expect(triggers).to.eql([1, 1, 1])

    it 'accepts a SequentialExecutor object', ->
      triggers = [0, 0, 0]
      listeners = new AWS.SequentialExecutor()
      listeners.on 'eventName', -> triggers[0] = 1
      listeners.on 'eventName', -> triggers[1] = 1
      listeners.on 'otherEventName', -> triggers[2] = 1

      @emitter.addListeners(listeners)
      expect(triggers).to.eql([0, 0, 0])

      @emitter.emit('eventName')
      expect(triggers).to.eql([1, 1, 0])

      @emitter.emit('otherEventName')
      expect(triggers).to.eql([1, 1, 1])

  describe 'addNamedListener', ->
    it 'defines a constant with the callback', ->
      spy = helpers.createSpy()
      @emitter.addNamedListener('CONSTNAME', 'eventName', spy)
      expect(@emitter.CONSTNAME).to.equal(spy)

      # also verify that event is hooked up like normal
      @emitter.emit('eventName', ['argument'])
      expect(spy.calls[0].arguments).to.eql(['argument'])

    it 'is chainable', ->
      r = @emitter.addNamedListener('CONSTNAME', 'eventName', ->)
      expect(r).to.equal(@emitter)

  describe 'addNamedListeners', ->
    it 'is chainable', ->
      r = @emitter.addNamedListeners(->)
      expect(r).to.equal(@emitter)

    it 'provides an add function in callback to call addNamedListener', ->
      spy1 = helpers.createSpy(); spy2 = helpers.createSpy()
      @emitter.addNamedListeners (add) ->
        add('CONST1', 'event1', spy1)
        add('CONST2', 'event2', spy2)

      expect(@emitter.CONST1).to.equal(spy1)
      expect(@emitter.CONST2).to.equal(spy2)

      @emitter.emit('event1', ['arg1'])
      @emitter.emit('event2', ['arg2'])

      expect(spy1.calls[0].arguments).to.eql(['arg1'])
      expect(spy2.calls[0].arguments).to.eql(['arg2'])

  describe 'emit', ->
    it 'emits to all listeners', ->
      list = []
      @emitter.on 'event1', -> list.push(1)
      @emitter.on 'event1', -> list.push(2)
      @emitter.on 'event1', -> list.push(3)
      @emitter.emit('event1')
      expect(list).to.eql([1,2,3])

    it 'stops emitting if error is returned', ->
      list = []
      @emitter.on 'event1', -> list.push(1)
      @emitter.on 'event1', -> list.push(2); throw new Error('error')
      @emitter.on 'event1', -> list.push(3)
      expect(=> @emitter.emit 'event1').to.throw('error')
      expect(list).to.eql([1,2])

    it 'stops emitting if error is returned (async)', ->
      list = []
      @emitter.on 'event1', -> list.push(1)
      @emitter.onAsync 'event1', (err, done) -> list.push(2); done('ERROR')
      @emitter.on 'event1', -> list.push(3)
      @emitter.emit 'event1', [null], (err) ->
        expect(err).to.equal('ERROR')
        expect(list).to.eql([1,2])

  if AWS.util.isNode()
    describe 'domain support', ->
      domain = null
      beforeEach -> domain = require('domain').create()
      afterEach -> domain.dispose()

      it 'supports domains', ->
        helpers.mockHttpResponse 200, {}, 'Success!'

        thrown = null
        domain.on 'error', (err) -> thrown = err
        domain.run ->
          service = new helpers.MockService()
          service.makeRequest 'operationName', ->
            invalidCode

        expect(thrown.name).to.equal('ReferenceError')
