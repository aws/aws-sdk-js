# Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

AWS = require('../lib/core')

describe 'AWS.EventEmitter', ->
  beforeEach -> @emitter = new AWS.EventEmitter()

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
      expect(triggers).toEqual([0, 0, 0])

      @emitter.emit('eventName')
      expect(triggers).toEqual([1, 1, 0])

      @emitter.emit('otherEventName')
      expect(triggers).toEqual([1, 1, 1])

    it 'accepts an EventEmitter object', ->
      triggers = [0, 0, 0]
      listeners = new AWS.EventEmitter()
      listeners.on 'eventName', -> triggers[0] = 1
      listeners.on 'eventName', -> triggers[1] = 1
      listeners.on 'otherEventName', -> triggers[2] = 1

      @emitter.addListeners(listeners)
      expect(triggers).toEqual([0, 0, 0])

      @emitter.emit('eventName')
      expect(triggers).toEqual([1, 1, 0])

      @emitter.emit('otherEventName')
      expect(triggers).toEqual([1, 1, 1])

  describe 'addNamedListener', ->
    it 'defines a constant with the callback', ->
      spy = createSpy()
      @emitter.addNamedListener('CONSTNAME', 'eventName', spy)
      expect(@emitter.CONSTNAME).toBe(spy)

      # also verify that event is hooked up like normal
      @emitter.emit('eventName', ['argument'])
      expect(spy).toHaveBeenCalledWith('argument')

    it 'is chainable', ->
      r = @emitter.addNamedListener('CONSTNAME', 'eventName', ->)
      expect(r).toBe(@emitter)

  describe 'addNamedListeners', ->
    it 'is chainable', ->
      r = @emitter.addNamedListeners(->)
      expect(r).toBe(@emitter)

    it 'provides an add function in callback to call addNamedListener', ->
      spy1 = createSpy(); spy2 = createSpy()
      @emitter.addNamedListeners (add) ->
        add('CONST1', 'event1', spy1)
        add('CONST2', 'event2', spy2)

      expect(@emitter.CONST1).toBe(spy1)
      expect(@emitter.CONST2).toBe(spy2)

      @emitter.emit('event1', ['arg1'])
      @emitter.emit('event2', ['arg2'])

      expect(spy1).toHaveBeenCalledWith('arg1')
      expect(spy2).toHaveBeenCalledWith('arg2')
