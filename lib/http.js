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

  constructor: function Endpoint(endpoint, config) {
    if (!config) config = {};
    if (!endpoint.match(/^http/)) {
      var sslEnabled = (config.sslEnabled !== undefined) ?
        config.sslEnabled : AWS.config.sslEnabled;
      endpoint = (sslEnabled ? 'https' : 'http') + '://' + endpoint;
    }
    AWS.util.update(this, AWS.util.urlParse(endpoint));
    if (!this.port) this.port = (this.protocol === 'https:' ? 443 : 80);
  }

});

AWS.HttpRequest = inherit({

  constructor: function HttpRequest() {
    this.method = 'POST';
    this.path = '/';
    this.headers = {};
    this.headers['User-Agent'] = 'aws-sdk-js/' + AWS.VERSION;
    this.body = undefined;
    this.endpoint = undefined;
    this.region = undefined;
  },

  pathname: function pathname() {
    return this.path.split('?', 1)[0];
  },

  search: function search() {
    return this.path.split('?', 2)[1] || '';
  }

});

/**
 * @constructor
 */
AWS.HttpResponse = inherit({
  constructor: function HttpResponse() {
    this.statusCode = null;
    this.headers = {};
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
    var httpRequest = this.service.buildRequest(this.method, this.params);
    httpRequest.sign();
    this.sendRequest(httpRequest);
  },

  sendRequest: function sendRequest(httpRequest) {

    var httpResponse = new AWS.HttpResponse();

    this.awsResponse.httpResponse = httpResponse;
    this.awsResponse.httpRequest = httpRequest;

    var self = this;
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
        self.handleHttpData(httpResponse);
      },

      onEnd: function onEnd() {

        if (httpResponse.body) {
          httpResponse.body = httpResponse.body.toString();
        }

        if (httpResponse.statusCode == 307) {
          self.redirect(httpRequest, httpResponse);
        } else {
          self.handleHttpResponse(httpResponse);
        }

      },

      onError: function onError(error) {
        self.retryRequest(error);
      }

    });

  },

  handleHttpData: function handleHttpData(httpResponse) {
    if (this.awsRequest.callbacks.data.length === 0) return;
    this.awsRequest.notifyData(httpResponse.body);
    httpResponse.body = null;
  },

  // Called when the http client returns a response.  Successfull http requests
  // may still contain an error (e.g. 400, 500, etc)
  redirect: function redirect(httpRequest, httpResponse) {
    /*jshint sub:true */
    httpRequest.endpoint = new AWS.Endpoint(httpResponse.headers['location']);
    this.sendRequest(httpRequest);
  },

  handleHttpResponse: function handleHttpResponse(httpResponse) {
    var self = this;
    this.service.parseResponse(httpResponse, this.method, function (error, data) {
      if (error)
        self.handleError(error);
      else
        self.awsRequest.notifyDone(data);
    });
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

      var self = this;
      setTimeout(function delayRetry() {
        self.makeRequest();
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
      host: request.endpoint.hostname,
      port: request.endpoint.port,
      method: request.method,
      headers: request.headers,
      path: request.path
    };

    var client = request.endpoint.protocol === 'https:' ?
      require('https') : require('http');

    var req = client.request(options, function onResponse(resp) {
      callbacks.onHeaders(resp.statusCode, resp.headers);
      resp.on('data', callbacks.onData);
      resp.on('end', callbacks.onEnd);
    });

    if (request.body) req.write(request.body);

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
