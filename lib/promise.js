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
var inherit = AWS.util.inherit;

/**
 * @class AWS.AWSRequest
 * @constructor
 */
AWS.AWSRequest = inherit({

  constructor: function AWSRequest(awsResponse) {
    this.state = null;
    this.awsResponse = awsResponse;
    this.callbacks = { data: [], done: [], fail: [], always: [] };
  },

  /**
   * @method data
   * @param {Function} callback This function is called when the service
   *   returns any data
   * @param {Object} [options]
   *   @param {Object} [options.bind] An object to bind the callback
   *     function to.  Defaults to the response object.
   * @chainable
   */
  data: function data(callback, options) {
    if (this.awsResponse.data !== null) {
      this.call(callback, options);
    }
    this.callbacks.data.push([callback, options]);
    return this;
  },

  /**
   * @method done
   * @param {Function} callback This function is called when the service
   *   returns a successful response.
   * @param {Object} [options]
   *   @param {Object} [options.bind] An object to bind the callback
   *     function to.  Defaults to the response object.
   * @chainable
   */
  done: function done(callback, options) {
    if (this.state === 'done') {
      this.call(callback, options);
    } else if (this.state === null) {
      this.callbacks.done.push([callback, options]);
    }
    return this;
  },

  /**
   * @method fail
   * @param {Function} callback This function is called when the service
   *   responds with an error or if a request could not be made.
   * @param {Object} [options]
   *   @param {Object} [options.bind] An object to bind the callback
   *     function to.  Defaults to the response object.
   * @chainable
   */
  fail: function fail(callback, options) {
    if (this.state === 'fail') {
      this.call(callback, options);
    } else if (this.state === null) {
      this.callbacks.fail.push([callback, options]);
    }
    return this;
  },

  /**
   * @method fail
   * @param {Function} callback This function is called after after
   *   the service returns with a successful response or an error.
   *   It is also called when the request could not be completed.
   * @param {Object} [options]
   *   @param {Object} [options.bind] An object to bind the callback
   *     function to.  Defaults to the response object.
   * @chainable
   */
  always: function always(callback, options) {
    if (this.state) {
      this.call(callback, options);
    } else {
      this.callbacks.always.push([callback, options]);
    }
    return this;
  },

  notifyData: function notifyData(data) {
    this.awsResponse.data = data;
    this.notify('data', this.callbacks.data);
  },

  notifyDone: function notifyDone(data) {
    this.awsResponse.data = data;
    this.notify('done', this.callbacks.done.concat(this.callbacks.always));
  },

  notifyFail: function notifyFail(error) {
    this.awsResponse.error = error;
    this.notify('fail', this.callbacks.fail.concat(this.callbacks.always));
  },

  notify: function notify(state, callbacks) {
    AWS.util.arrayEach.call(this, callbacks, function iterator(cb) {
      this.call(cb[0], cb[1]);
    });
    this.state = state;
  },

  call: function call(callback, options) {
    var binding = this.awsResponse;
    if (options && options.bind) {
      binding = options.bind;
    }
    callback.call(binding, this.awsResponse);
  }

});

/**
 * @constructor
 */
AWS.AWSResponse = inherit({

  constructor: function AWSResponse(options) {

    // the request "context"
    this.service = options.service;
    this.method = options.method;
    this.params = options.params;

    this.data = null;
    this.error = null;
    this.retryCount = 0;

    this.httpRequest = null;
    this.httpResponse = null;

  }

});
