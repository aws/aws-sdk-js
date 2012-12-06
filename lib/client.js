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

  makeRequest: function makeRequest(operation, params, options, callback) {
    var client = options === undefined ? this :
      new this.constructor(AWS.util.merge(this.config, options));

    var request =  new AWS.AWSRequest(client, operation, params);
    if (callback) {
      request.always(function (resp) {
        callback.call(resp, resp.error, resp.data);
      });
    }
    request.send();
    return request;
  },

  parseResponse: function parseResponse(httpResponse, method, callback) {
    var error = null, data = null;
    try {
      if (this.successfulResponse(httpResponse, method)) {
        data = this.extractData(httpResponse, method);
      } else {
        error = this.extractError(httpResponse, method);
        error.statusCode = httpResponse.statusCode;
        error.retryable = this.retryableError(error, method);
      }
    } catch (err) {
      // unrecoverable error trying to parse the response data/error
      error = err;
    }
    callback.call(this, error, data);
  },

  successfulResponse: function successfulResponse(httpResponse) {
    return httpResponse.statusCode < 300;
  },

  newHttpRequest: function newHttpRequest() {

    var serviceName = this.serviceName;
    var credentials = AWS.util.copy(this.config.credentials);
    var signatureVersion = this.signatureVersion;

    var httpRequest = new AWS.HttpRequest();
    httpRequest.endpoint = AWS.util.copy(this.endpoint);
    httpRequest.region = this.config.region;
    httpRequest.sign = function sign() {
      /*jshint newcap:false*/
      var signer = new signatureVersion(httpRequest, serviceName);
      signer.addAuthorization(credentials);
    };

    return httpRequest;

  },

  retryableError: function retryableError(error) {
    if (this.expiredCredentialsError(error)) return true;
    if (this.throttledError(error)) return true;
    if (error.statusCode >= 500) return true;
    return false;
  },

  // How many times a failed request should be retried before giving up.
  // the defaultRetryCount can be overriden by client classes.
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
      svc.prototype[method] = function (params, options, callback) {
        return this.makeRequest(method, params, options, callback);
      };
    });
  }

});

module.exports = AWS.Client;
