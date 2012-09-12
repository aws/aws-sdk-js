var AWS = require('./core');

/**
 * @class AWS.AWSRequest
 * @constructor
 */
AWS.AWSRequest = function AWSRequest(awsResponse) {
  this.state = null;
  this.awsResponse = awsResponse;
  this.callbacks = { done: [], fail: [], always: [] };
};

AWS.AWSRequest.prototype = {

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
  },

  notifyDone: function notifyDone() {
    this.notify('done', this.callbacks.done.concat(this.callbacks.always));
  },

  notifyFail: function notifyFail() {
    this.notify('fail', this.callbacks.fail.concat(this.callbacks.always));
  },

  notify: function notify(state, callbacks) {
    for (var i in callbacks) {
      this.call(callbacks[i][0], callbacks[i][1]);
    }
    this.state = state;
  },

  call: function call(callback, options) {
    var binding = this.awsResponse;
    if (options && options.bind) {
      binding = options.bind;
    }
    callback.apply(binding, [this.awsResponse]);
  }

};

/**
 * @constructor
 */
AWS.AWSResponse = function AWSResponse(options) {
  this.data = null;
  this.error = null;
  this.retryCount = 0;
  this.service = options.service;
  this.method = options.method;
  this.params = options.params;
  this.httpRequest = null;
  this.httpResponse = null;
};
