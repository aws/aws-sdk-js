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
require('./event_listeners');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Client = inherit({

  constructor: function Client(config) {
    var defaultConfig = new AWS.Config(AWS.config);
    if (config === undefined) {
      config = defaultConfig;
    } else {
      config = AWS.util.merge(defaultConfig, config);
    }
    this.config = config;
    this.setEndpoint(this.config.endpoint);
  },

  defaultRetryCount: 3,

  makeRequest: function makeRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }

    var request =  new AWS.AWSRequest(this, operation, params);
    this.addAllRequestListeners(request);

    if (callback) {
      request.on('complete', function (req, resp) {
        callback.call(resp, resp.error, resp.data);
      });
      request.send();
    }

    return request;
  },

  addAllRequestListeners: function addAllRequestListeners(request) {
    request.addListeners(AWS.EventListeners.Core);
    request.addListeners(AWS.EventListeners.Http);
    this.setupRequestListeners(request);
  },

  setupRequestListeners: function setupRequestListeners() {
  },

  successfulResponse: function successfulResponse(req, resp) {
    return resp.httpResponse.statusCode < 300;
  },

  /**
   * How many times a failed request should be retried before giving up.
   * the defaultRetryCount can be overriden by client classes.
   */
  numRetries: function numRetries() {
    if (this.config.maxRetries !== undefined) {
      return this.config.maxRetries;
    } else {
      return this.defaultRetryCount;
    }
  },

  retryDelays: function retryDelays() {
    var retryCount = this.numRetries();
    var delays = [];
    for (var i = 0; i < retryCount; ++i) {
      delays[i] = Math.pow(2, i) * 30;
    }
    return delays;
  },

  retryableError: function retryableError(error) {
    if (this.networkingError(error)) return true;
    if (this.expiredCredentialsError(error)) return true;
    if (this.throttledError(error)) return true;
    if (error.statusCode >= 500) return true;
    return false;
  },

  networkingError: function networkingError(error) {
    return error.code == 'NetworkingError';
  },

  expiredCredentialsError: function expiredCredentialsError(error) {
    // TODO : this only handles *one* of the expired credential codes
    return (error.code === 'ExpiredTokenException');
  },

  throttledError: function throttledError(error) {
    // this logic varies between clients
    return (error.code == 'ProvisionedThroughputExceededException');
  },

  setEndpoint: function setEndpoint(endpoint) {
    if (endpoint) {
      this.endpoint = new AWS.Endpoint(endpoint, this.config);
    } else {
      var host = this.serviceName + '.' + this.config.region + '.amazonaws.com';
      this.endpoint = new AWS.Endpoint(host, this.config);
    }
  }

});

AWS.util.update(AWS.Client, {

  // adds one method for each operation described in the api configuration
  defineMethods: function defineMethods(svc) {
    AWS.util.each(svc.prototype.api.operations, function iterator(method) {
      svc.prototype[method] = function (params, callback) {
        return this.makeRequest(method, params, callback);
      };
    });
  }

});

module.exports = AWS.Client;
