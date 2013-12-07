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
  /**
   * Waits for a given state on a service object
   * @param service [Service] the service object to wait on
   * @param state [String] the state (defined in waiter configuration) to wait
   *   for.
   * @example Create a waiter for running EC2 instances
   *   var ec2 = new AWS.EC2;
   *   var waiter = new AWS.ResourceWaiter(ec2, 'instanceRunning');
   */
  constructor: function constructor(service, state) {
    this.service = service;
    this.state = state;
    this.config = {};

    if (typeof this.state === 'object') {
      AWS.util.each.call(this, this.state, function (key, value) {
        this.state = key;
        this.expectedValue = value;
      });
    }

    this.loadWaiterConfig(this.state);
    if (!this.expectedValue) {
      this.expectedValue = this.config.successValue;
    }
  },

  service: null,

  state: null,

  expectedValue: null,

  config: null,

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
        return waiter.config.interval * 1000;
      } else {
        return retryDelay.call(request, resp);
      }
    };

    request.removeListener('extractError', AWS.EventListeners.Core.SETUP_ERROR);
    if (waiter.config.successType === 'error') {
      request.on('extractError', function (resp) {
        var success = waiter.checkError(waiter, resp);
        if (!success) {
          resp.data = null;
          resp.error = AWS.util.error(new Error(), {
            code: 'ResourceNotReady',
            message: 'Resource is not in the state ' + waiter.state,
            originalError: resp.error,
            retryable: success === null ? false : true
          });
        } else {
          resp.error = null;
        }
      });      
    } else {
      request.removeAllListeners('extractError');
      request.on('extractData', function (resp) {
        var success = waiter.checkSuccess(waiter, resp);
        if (!success) {
          resp.data = null;
          resp.error = AWS.util.error(new Error(), {
            code: 'ResourceNotReady',
            message: 'Resource is not in the state ' + waiter.state,
            originalError: resp.error,
            retryable: success === null ? false : true
          });
        }
      });      
    }

    var retryCheck = AWS.EventListeners.Core.RETRY_CHECK;
    var index = request._events['retry'].indexOf(retryCheck);
    request._events['retry'][index] = function newRetryCheck(resp) {
      var e = resp.error;
      resp.waiterRetryCount = resp.waiterRetryCount || 0;
      if (e && e.retryable && e.code === 'ResourceNotReady') {
        if (resp.waiterRetryCount < waiter.config.maxAttempts) {
          resp.waiterRetryCount++;
        } else {
          throw e;
        }
      } else {
        retryCheck.call(resp.request, resp);
      }
    };
  },

  /**
   * Checks if the terminal expected success state has been met
   * @return [Boolean]
   */
  checkSuccess: function checkSuccess(waiter, resp) {
    if (!waiter.config.successPath) {
      return resp.httpResponse.statusCode < 300;
    }

    var r = AWS.util.jamespath.find(waiter.config.successPath, resp.data);

    if (waiter.config.failureValue &&
        waiter.config.failureValue.indexOf(r) >= 0) {
      return null; // fast fail
    }

    if (waiter.expectedValue) {
      return r === waiter.expectedValue;
    } else {
      return r ? true : false;
    }
  },

  /**
   * Checks if the terminal expected error state has been met
   * @return [Boolean]
   */
  checkError: function checkError(waiter, resp) {
    return resp.httpResponse.statusCode === waiter.config.successValue;
  },

  /**
   * Loads waiter configuration from API configuration and deals with inherited
   * properties.
   *
   * @api private
   */
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

    var config = this.config;
    AWS.util.update(config, this.service.api.waiters[state]);

    // inherit acceptor data
    (function () { // anonymous function to avoid max complexity count
      config.successType = config.successType || config.acceptorType;
      config.successPath = config.successPath || config.acceptorPath;
      config.successValue = config.successValue || config.acceptorValue;
      config.failureType = config.failureType || config.acceptorType;
      config.failurePath = config.failurePath || config.acceptorPath;
      config.failureValue = config.failureValue || config.acceptorValue;
    })();
  }
});
