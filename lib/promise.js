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

AWS.AWSRequest = inherit({
  constructor: function AWSRequest(awsResponse) {
    this.state = null;
    this.awsResponse = awsResponse;
    this.callbacks = { data: [], done: [], fail: [], always: [] };

    AWS.util.each.call(this, this.callbacks, function (name) {
      this.addConfigCallback(name);
    });
  },

  /**
   * @param callback [Function] this function is called when the client
   *   returns any data
   * @option options bind [Object] (response object) an object to bind
   *   the callback function to. Defaults to the response object.
   * @return [this]
   */
  data: function data(callback, options) {
    if (this.awsResponse.data !== null) {
      this.call(callback, options);
    }
    this.callbacks.data.push([callback, options]);
    return this;
  },

  /**
   * @param callback [Function] this function is called when the client
   *   returns a successful response.
   * @option options bind [Object] (response object) an object to bind
   *   the callback function to. Defaults to the response object.
   * @return [this]
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
   * @param callback [Function] this function is called when the client
   *   responds with an error or if a request could not be made.
   * @option options bind [Object] (response object) an object to bind
   *   the callback function to. Defaults to the response object.
   * @return [this]
   * @param {Function} callback This function is called when the client
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
   * @param callback [Function] this function is called after after
   *   the client returns with a successful response or an error.
   *   It is also called when the request could not be completed.
   * @option options bind [Object] (response object) an object to bind
   *   the callback function to. Defaults to the response object.
   * @return [this]
   */
  always: function always(callback, options) {
    if (this.state) {
      this.call(callback, options);
    } else {
      this.callbacks.always.push([callback, options]);
    }
    return this;
  },

  /**
   * @api private
   */
  notifyData: function notifyData(data) {
    this.awsResponse.data = data;
    this.notify('data', this.callbacks.data);
  },

  /**
   * @api private
   */
  notifyDone: function notifyDone(data) {
    this.awsResponse.data = data;
    this.notify('done', this.callbacks.done.concat(this.callbacks.always));
  },

  /**
   * @api private
   */
  notifyFail: function notifyFail(error) {
    this.awsResponse.error = error;
    this.notify('fail', this.callbacks.fail.concat(this.callbacks.always));
  },

  /**
   * @api private
   */
  notify: function notify(state, callbacks) {
    AWS.util.arrayEach.call(this, callbacks, function iterator(cb) {
      this.call(cb[0], cb[1]);
    });
    this.state = state;
  },

  /**
   * @api private
   */
  call: function call(callback, options) {
    var binding = this.awsResponse;
    if (options && options.bind) {
      binding = options.bind;
    }
    callback.call(binding, this.awsResponse);
  },

  /**
   * @api private
   */
  addConfigCallback: function addConfigCallback(cbMethod, configName) {
    if (!this.awsResponse.client) return;

    if (configName === undefined) {
      configName = 'on' + cbMethod.charAt(0).toUpperCase() + cbMethod.slice(1);
    }

    var callbacks = this.awsResponse.client.config[configName];
    if (!(callbacks instanceof Array) && callbacks !== undefined) {
      callbacks = [callbacks];
    }

    AWS.util.arrayEach.call(this, callbacks, function (callback) {
      if (callback instanceof Function) {
        this[cbMethod].call(this, callback);
      }
    });
  }

});

AWS.AWSResponse = inherit({

  constructor: function AWSResponse(options) {

    // the request "context"
    this.client = options.client;
    this.method = options.method;
    this.params = options.params;

    this.data = null;
    this.error = null;
    this.retryCount = 0;

    this.httpRequest = null;
    this.httpResponse = null;

  }

});
