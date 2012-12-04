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
 * == Asynchronous Promise Objects
 *
 * All requests made through the SDK are asynchronous and use an
 * event-based promise callback interface. Each service method
 * that kicks off a request returns an +AWS.AWSRequest+ promise
 * object that you can use to register callbacks.
 *
 * For example, the following service method returns the request
 * object as "request", which can be used to register callbacks:
 *
 *   // request is an AWS.AWSRequest object
 *   var request = ec2.client.describeInstances();
 *
 *   // register callbacks on request to retrieve response data
 *   request.done(function(response) {
 *     console.log(resp.data);
 *   });
 *
 * == Multiple Callbacks and Chaining
 *
 * You can register multiple callbacks on any request object. The
 * callbacks can be registered for different events, or all for the
 * same event. In addition, you can chain callback registration, for
 * example:
 *
 *   request.
 *     done(function(response) {
 *       console.log("Success!");
 *     }).
 *     fail(function(response) {
 *       console.log("Error!");
 *     }).
 *     always(function(response) {
 *       console.log("Always!");
 *     });
 *
 * The above example will print either "Success! Always!", or "Error! Always!",
 * depending on whether the request succeeded or not.
 *
 * == Binding Custom Context Data on a Callback
 *
 * By default, the +this+ context of a callback function registered on an
 * event will be the {AWS.AWSResponse} object returned from the service.
 * In some cases, it may be necessary to pass extra custom context to these
 * functions; in these cases, you can bind a custom value to be used as the
 * +this+ context object when the callbacks are executed. To do so, pass
 * the +bind+ option to the asynchronous registration method:
 *
 *   var myContext = new Object();
 *   request.always(function(response) {
 *     console.log(this === myContext);
 *   }, {bind: myContext});
 *
 * The above callback will print +true+ when the callback function is executed.
 */
AWS.AWSRequest = inherit({
  /**
   * @api private
   */
  constructor: function AWSRequest(awsResponse) {
    this.state = null;
    this.awsResponse = awsResponse;
    this.callbacks = { data: [], done: [], fail: [], always: [] };

    AWS.util.each.call(this, this.callbacks, function (name) {
      this.addConfigCallback(name);
    });
  },

  /**
   * This event is used to stream response data from the
   * service packet-by-packet. This event is mostly used for large responses,
   * when it is inefficient (or impossible) to load the entire response into
   * memory.
   *
   * === Example: Registering a +data+ callback
   *
   *   s3.client.getObject({Bucket: b, Key: k}).data(function(resp) {
   *     console.log(resp.data);
   *   });
   *
   * Prints:
   *
   *   <Buffer 50 4b 03 04 0a 00 00 00 ...>
   *   <Buffer 2c 70 96 ac 92 2e ca e7 ...>
   *   ...
   *
   * @note If you register a +data+ callback,
   *   +response.data+ will not contain serialized output
   *   for the entire request. Instead, it will be your responsibility
   *   to stream the output and de-serialize the result on your own.
   * @callback callback function(response)
   *   @param response [AWS.AWSResponse] the response object containing the
   *     current packet in the +data+ property.
   * @option options bind [Object] (response object) an object to bind
   *   the callback function to. Defaults to the response object.
   * @return [AWS.AWSRequest] The same object, for chaining.
   */
  data: function data(callback, options) {
    if (this.awsResponse.data !== null) {
      this.call(callback, options);
    }
    this.callbacks.data.push([callback, options]);
    return this;
  },

  /**
   * This event registers a callback to be called when a successful response
   * from the server is returned. The response contains a
   * {AWS.AWSResponse.data data} field with the serialized response data
   * from the service.
   *
   * === Example: Registering a +done+ callback
   *
   *   s3.client.listBuckets().done(function(response) {
   *     console.log(response.data);
   *   });
   *
   * Prints:
   *
   *   { Owner: { ID: '...', DisplayName: '...' },
   *     Buckets:
   *      [ { Name: 'someBucketName', CreationDate: someCreationDate },
   *        { Name: 'otherBucketName', CreationDate: otherCreationDate } ],
   *     RequestId: '...' }
   *
   * @option options bind [Object] (response object) an object to bind
   *   the callback function to. Defaults to the response object.
   * @callback callback function(response)
   *   @param response [AWS.AWSResponse] the response object containing the
   *     de-serialized response contents in the +data+ property.
   *   @note The +response.error+ property will be +null+ when this callback
   *     is called.
   * @return [AWS.AWSRequest] The same object, for chaining.
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
   * This event registers a callback to be called when a failure response
   * from the server is returned, or if a networking error occurs.
   * The response contains a {AWS.AWSResponse.error data} field with the
   * error data from the service.
   *
   * === Example: Registering a +fail+ callback
   *
   *   s3.config.credentials.accessKeyId = 'invalid';
   *   s3.client.listBuckets().fail(function(response) {
   *     console.log(response.error);
   *   });
   *
   * Prints:
   *
   *   { code: 'Forbidden', message: 403 }
   *
   * @option options bind [Object] (response object) an object to bind
   *   the callback function to. Defaults to the response object.
   * @callback callback function(response)
   *   @param response [AWS.AWSResponse] the response object containing the
   *     service error details in the +error+ property.
   *   @note The +response.data+ property will be +null+ when this callback
   *     is called.
   * @return [AWS.AWSRequest] The same object, for chaining.
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
   * This event registers a callback to be called in any final state of a
   * request, i.e., both {done} and {fail}. Use this callback to handle any
   * request cleanup that must be executed regardless of the success state.
   *
   * Note that if you do intend to use response data inside of this callback,
   * you must check for the presence of +response.data+ or +response.error+
   * before attempting to access either property. For example:
   *
   *   request.always(function(response) {
   *     if (response.error) {
   *       // an error occurred, handle it
   *     } else {
   *       // we can use response.data here
   *     }
   *   });
   *
   * @option options bind [Object] (response object) an object to bind
   *   the callback function to. Defaults to the response object.
   * @callback callback function(response)
   *   @param response [AWS.AWSResponse] the response object containing the
   *     de-serialized response contents in the +data+ property or the
   *     error information in the +error+ property, depending on the result.
   * @return [AWS.AWSRequest] The same object, for chaining.
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
