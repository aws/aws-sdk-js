/**
 * Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

var AWS = require('./core');
var EventEmitter = require('events').EventEmitter;

AWS.EventEmitter = AWS.util.inherit(EventEmitter, {
  constructor: function AWSEventEmitter() {
    EventEmitter.call(this);
  },

  addListeners: function addListeners(listeners) {
    var self = this;

    // extract listeners if parameter is an EventEmitter object
    if (listeners._events) listeners = listeners._events;

    AWS.util.each(listeners, function(event, callbacks) {
      if (callbacks instanceof Function) callbacks = [callbacks];
      AWS.util.arrayEach(callbacks, function(callback) {
        self.on(event, callback);
      });
    });
  },

  addNamedListener: function addNamedListener(name, eventName, callback) {
    this[name] = callback;
    this.addListener(eventName, callback);
    return this;
  },

  addNamedListeners: function addNamedListeners(callback) {
    var self = this;
    callback(function() {
      self.addNamedListener.apply(self, arguments);
    });
    return this;
  }
});
