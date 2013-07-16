/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.ResourceWaiter = inherit({
  constructor: function constructor(service, state) {
    this.service = service;
    this.state = state;

    if (typeof this.state === 'object') {
      AWS.util.each.call(this, this.state, function (key, value) {
        this.state = key;
        this.expectedValue = value;
      });
    }

    this.loadWaiterConfig(this.state);
    if (!this.expectedValue) {
      this.expectedValue = this.config.dataValue;
    }
  },

  service: null,

  state: null,

  expectedValue: null,

  config: {},

  /**
   * @return [AWS.Request]
   */
  wait: function wait(params, callback) {
    if (typeof params === 'function') {
      callback = params; params = undefined;
    }

    var request = this.service.makeRequest(this.config.operation, params);
    this.setupRequest(request);

    if (callback) request.send(callback);
    return request;
  },

  setupRequest: function setupRequest(request) {
    var waiter = this;

    var retryDelay = request.retryDelay;
    request.retryDelay = function(resp) {
      if (resp.error.code === 'ResourceNotReady') {
        return waiter.config.delay * 1000;
      } else {
        return retryDelay(resp);
      }
    };

    request.removeAllListeners('extractError');
    request.on('extractData', function (resp) {
      if (!waiter.handlers.checkSuccess(waiter, resp)) {
        resp.data = null;
        resp.error = AWS.util.error(new Error(), {
          code: 'ResourceNotReady',
          message: 'Resource is not in the state ' + waiter.state,
          originalError: resp.error,
          retryable: true
        });
      }
    });

    var retryCheck = AWS.EventListeners.Core.RETRY_CHECK;
    var index = request._events['retry'].indexOf(retryCheck);
    request._events['retry'][index] = function newRetryCheck(resp) {
      resp.waiterRetryCount = resp.waiterRetryCount || 0;
      if (resp.error && resp.error.code === 'ResourceNotReady') {
        if (resp.waiterRetryCount < waiter.config.maxRetries) {
          resp.waiterRetryCount++;
        } else {
          throw resp.error;
        }
      } else {
        retryCheck(resp);
      }
    };
  },

  handlers: {
    data: function dataStateHandler(waiter, resp) {
      if (!waiter.config.dataPath) return false;
      if (waiter.config.dataPath === '*' && resp.data) return true;
      var result = AWS.util.jamespath.find(waiter.config.dataPath, resp.data);
      if (waiter.expectedValue) return result === waiter.expectedValue;
      else return result ? true : false;
    },

    error: function errorStateHandler(waiter, resp) {
      return resp.error && resp.error.code === waiter.config.errorCode;
    },

    statusCode: function statusCodeStateHandler(waiter, resp) {
      return resp.httpResponse.statusCode === waiter.config.statusCode;
    },

    checkSuccess: function checkSuccess(waiter, resp) {
      return waiter.handlers.statusCode(waiter, resp) ||
             waiter.handlers.error(waiter, resp) ||
             waiter.handlers.data(waiter, resp);
    }
  },

  loadWaiterConfig: function loadWaiterConfig(state, noException) {
    if (!this.service.api.waiters[state]) {
      if (noException) return;
      throw new AWS.util.error(new Error(), {
        code: 'StateNotFoundError',
        message: 'State ' + state + ' not found.'
      });
    }

    if (state !== '__default__') {
      var superState = this.service.api.waiters[state]['extends'];
      superState = superState || '__default__';
      this.loadWaiterConfig(superState, true);
    }

    AWS.util.update(this.config, this.service.api.waiters[state]);
  }
});
