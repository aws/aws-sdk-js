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
 * == Asynchronous Requests
 *
 * All requests made through the SDK are asynchronous and use a
 * callback interface. Each service method that kicks off a request
 * returns an +AWS.Request+ object that you can use to register
 * callbacks.
 *
 * For example, the following service method returns the request
 * object as "request", which can be used to register callbacks:
 *
 *   // request is an AWS.Request object
 *   var request = ec2.client.describeInstances();
 *
 *   // register callbacks on request to retrieve response data
 *   request.on('success', function(response) {
 *     console.log(response.data);
 *   });
 *
 * When a request is ready to be sent, the {send} method should
 * be called:
 *
 *   request.send();
 *
 * == Multiple Callbacks and Chaining
 *
 * You can register multiple callbacks on any request object. The
 * callbacks can be registered for different events, or all for the
 * same event. In addition, you can chain callback registration, for
 * example:
 *
 *   request.
 *     on('success', function(response) {
 *       console.log("Success!");
 *     }).
 *     on('error', function(response) {
 *       console.log("Error!");
 *     }).
 *     on('complete', function(response) {
 *       console.log("Always!");
 *     }).
 *     send();
 *
 * The above example will print either "Success! Always!", or "Error! Always!",
 * depending on whether the request succeeded or not.
 *
 * == Binding Custom Context Data on a Callback
 *
 * By default, the +this+ context of a callback function registered on an
 * event will be the {AWS.Response} object returned from the service.
 * In some cases, it may be necessary to pass extra custom context to these
 * functions; in these cases, you can bind a custom value to be used as the
 * +this+ context object when the callbacks are executed. To do so, pass
 * the +bind+ option to the asynchronous registration method:
 *
 *   var myContext = new Object();
 *   request.always(function(response) {
 *     console.log(this === myContext);
 *   }, {bind: myContext}).send();
 *
 * The above callback will print +true+ when the callback function is executed.
 *
 * @see AWS.Response
 */
AWS.Request = inherit({

  /**
   * @api private
   */
  constructor: function Request(client, operation, params) {
    var endpoint = client.endpoint;
    var region = client.config.region;

    this.client = client;
    this.operation = operation;
    this.params = params || {};
    this.httpRequest = new AWS.HttpRequest(endpoint, region);
  },

  /**
   * @!group Sending a Request
   */

  /**
   * @overload send()
   *   Initiates sending of the given request object.
   *
   *   @example Sending a request
   *     request = s3.client.putObject({Bucket: 'bucket', Key: 'key'});
   *     request.on('complete', function(req, resp) { ... }); // register a callback
   *     request.send();
   */
  send: function send(response) {
    response = response || new AWS.Response(this);
    this.emitEvents(response, 'validate', 'build', 'afterBuild', 'sign', 'send');
    if (response.error) this.completeRequest(response);
    return response;
  },

  /**
   * @api private
   */
  completeRequest: function completeRequest(response) {
    this.emitEvents(response, 'extractError', 'extractData');

    if (response.error) {
      this.emitEventsAlways(response, 'retry');
      if (!response.error) return;
      this.emitEventsAlways(response, 'error');
    } else {
      this.emitEvents(response, 'success');
    }
    this.emitEventsAlways(response, 'complete');
  },

  /**
   * @api private
   */
  emitEventsAlways: function emitEventsAlways() {
    var response = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      var eventName = arguments[i];
      if (this.listeners(eventName).length > 0) {
        this.emitEvent(eventName, response);
      }
    }
  },

  /**
   * @api private
   */
  emitEvents: function emitEvents() {
    var response = arguments[0];
    if (response.error) return;
    for (var i = 1; i < arguments.length; i++) {
      var eventName = arguments[i];
      if (response.error) return AWS.util.abort;
      if (this.listeners(eventName).length > 0) {
        this.emitEvent(eventName, response);
      }
    }
  },

  /**
   * @api private
   */
  emitEvent: function emitEvent(eventName, response) {
    try {
      this.emit(eventName, this.eventParameters(eventName, response));
    } catch (err) {
      response.error = err;
    }
  },

  eventParameters: function eventParameters(eventName, response) {
    switch (eventName) {
      case 'validate': case 'sign':
      case 'build': case 'afterBuild':
        return this;
      default:
        return response;
    }
  }
});

/*jshint forin:false*/
for (var prop in AWS.EventEmitter.prototype) {
  var fn = AWS.EventEmitter.prototype[prop];
  if (fn instanceof Function && prop != 'constructor') {
    AWS.Request.prototype[prop] = fn;
  }
}

/**
 * This class encapsulates the the response information
 * from a service request operation sent through {AWS.Request}.
 * The response object has two main properties for getting information
 * back from a request:
 *
 * == The +data+ property
 *
 * The +response.data+ property contains the serialized object data
 * retrieved from the service request. For instance, for an
 * Amazon DynamoDB +listTables+ method call, the response data might
 * look like:
 *
 *   > resp.data
 *   { TableNames:
 *      [ 'table1', 'table2', ... ] }
 *
 * The +data+ property can be null if an error occurs (see below).
 *
 * == The +error+ property
 *
 * In the event of a service error (or transfer error), the
 * +response.error+ property will be filled with the given
 * error data in the form:
 *
 *   { code: 'SHORT_UNIQUE_ERROR_CODE',
 *     message: 'Some human readable error message' }
 *
 * In the case of an error, the +data+ property will be +null+.
 * Note that if you handle events that can be in a failure state,
 * you should always check whether +response.error+ is set
 * before attempting to access the +response.data+ property.
 *
 * @!attribute data
 *   @readonly
 *   @group Data Properties
 *   @note Inside of a {AWS.Request.data} event, this
 *     property contains a single raw packet instead of the
 *     full de-serialized service response.
 *   @return [Object] the de-serialized response data
 *     from the service.
 *
 * @!attribute error
 *   An structure containing information about a service
 *   or networking error.
 *   @readonly
 *   @group Data Properties
 *   @note This attribute is only filled if a service or
 *     networking error occurs.
 *   @return [Object]
 *     * code [String] a unique short code representing the
 *       error that was emitted.
 *     * message [String] a longer human readable error message
 *     * retryable [Boolean] whether the error message is
 *       retryable.
 *
 * @!attribute client
 *   @readonly
 *   @group Operation Properties
 *   @return [AWS.Client] The low-level service client object
 *     that initiated the request.
 *
 * @!attribute operation
 *   @readonly
 *   @group Operation Properties
 *   @return [String] the name of the operation executed on
 *     the service.
 *
 * @!attribute params
 *   @readonly
 *   @group Operation Properties
 *   @return [Object] the parameters sent in the request to
 *     the service.
 *
 * @!attribute retryCount
 *   @readonly
 *   @group Operation Properties
 *   @return [Integer] the number of retries that have were
 *     attempted before the request was completed.
 *
 * @!attribute httpRequest
 *   @readonly
 *   @group HTTP Properties
 *   @return [AWS.HttpRequest] the raw HTTP request object
 *     containing request headers and body information
 *     sent by the client.
 *
 * @!attribute httpResponse
 *   @readonly
 *   @group HTTP Properties
 *   @return [AWS.HttpResponse] the raw HTTP response object
 *     containing the response headers and body information
 *     from the server.
 *
 * @see AWS.Request
 */
AWS.Response = inherit({

  /**
   * @api private
   */
  constructor: function Response(request) {
    this.request = request;
    this.data = null;
    this.error = null;
    this.retryCount = 0;
    this.httpResponse = new AWS.HttpResponse();
  }

});
