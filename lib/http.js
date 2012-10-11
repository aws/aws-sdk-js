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
 * @constructor
 */
AWS.Endpoint = inherit({

  constructor: function Endpoint(config, serviceName) {
    this.region = config.region;
    this.scheme = config.useSSL ? 'https' : 'http';
    this.host = serviceName + '.' + config.region + '.amazonaws.com';
    this.port = config.useSSL ? 443 : 80;
  }

});

AWS.HttpRequest = inherit({

  constructor: function HttpRequest() {
    this.method = 'POST';
    this.uri = '/';
    this.headers = {};
    this.headers['User-Agent'] = 'aws-sdk-js/0.1';
    this.body = undefined;
    this.endpoint = undefined;
  },

  pathname: function pathname() {
    return this.uri.split('?', 1)[0];
  },

  search: function search() {
    return this.uri.split('?', 2)[1] || '';
  }

});

/**
 * @constructor
 */
AWS.HttpResponse = inherit({
  constructor: function HttpResponse() {
    this.statusCode = null;
    this.headers = null;
    this.body = null;
  }
});

/**
 * @constructor
 */
AWS.RequestHandler = inherit({

  constructor: function RequestHandler(awsRequest) {
    this.awsRequest = awsRequest;
    this.awsResponse = awsRequest.awsResponse;
    this.service = this.awsResponse.service;
    this.method = this.awsResponse.method;
    this.params = this.awsResponse.params;
  },

  makeRequest: function makeRequest() {

    var requestHandler = this;
    var httpResponse = new AWS.HttpResponse();
    var httpRequest = this.service.buildRequest(this.method, this.params);
    httpRequest.sign();

    this.awsResponse.httpResponse = httpResponse;
    this.awsResponse.httpRequest = httpRequest;

    AWS.HttpClient.getInstance().handleRequest(httpRequest, {

      onHeaders: function onHeaders(statusCode, headers) {
        httpResponse.statusCode = statusCode;
        httpResponse.headers = headers;
      },

      onData: function onData(data) {
        if (httpResponse.body === null) {
          httpResponse.body = data;
        } else {
          httpResponse.body += data;
        }
      },

      onEnd: function onEnd() {
        if (httpResponse.body) {
          httpResponse.body = httpResponse.body.toString();
        }
        requestHandler.handleHttpResponse(httpResponse);
      },

      onError: function onError(error) {
        requestHandler.retryRequest(error);
      }

    });

  },

  // Called when the http client returns a response.  Successfull http requests
  // may still contain an error (e.g. 400, 500, etc)
  handleHttpResponse: function handleHttpResponse(httpResponse) {
    try {
      var self = this;
      this.service.parseResponse(httpResponse, this.method, function (error, data) {
        if (error)
          self.handleError(error);
        else
          self.awsRequest.notifyDone(data);
      });
    } catch (error) {
      // unrecoverable error trying to parse the response
      this.awsRequest.notifyFail(error);
    }
  },

  handleError: function handleError(error) {
    if (error.retryable) {
      this.retryRequest(error);
    } else {
      this.awsRequest.notifyFail(error);
    }
  },

  retryRequest: function retryRequest(error) {

    var delays = this.service.retryDelays();
    var delay = delays[this.awsResponse.retryCount];

    this.awsResponse.retryCount += 1;

    if (delay !== undefined) {

      var requestHandler = this;
      setTimeout(function delayRetry() {
        requestHandler.makeRequest();
      }, delay);

    } else {

      this.awsRequest.notifyFail(error); // retried too many times

    }
  }
});

/**
 * @constructor
 */
AWS.NodeHttpClient = inherit({
  constructor: function NodeHttpClient() {},

  handleRequest: function handleRequest(request, callbacks) {

    var options = {
      host: request.endpoint.host,
      port: request.endpoint.port,
      method: request.method,
      headers: request.headers,
      path: request.uri
    };

    var client = request.endpoint.scheme === 'https' ?
      require('https') : require('http');

    var req = client.request(options, function onResponse(resp) {
      callbacks.onHeaders(resp.statusCode, resp.headers);
      resp.on('data', callbacks.onData);
      resp.on('end', callbacks.onEnd);
    });

    req.write(request.body);
    req.end();
    req.on('error', function (e) {
      callbacks.onError({ code: 'NetworkingError', message: e.toString() });
    });
  }
});

AWS.HttpClient = AWS.NodeHttpClient;

AWS.HttpClient.getInstance = function getInstance() {
  /*jshint newcap:false */
  if (this.singleton === undefined) {
    this.singleton = new this();
  }
  return this.singleton;
};
