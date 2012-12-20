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
 * The endpoint that a service will talk to, for example,
 * <tt>https://ec2.ap-southeast-1.amazonaws.com</tt>. If
 * you need to override an endpoint for a service, you can
 * set the endpoint on a service by passing the endpoint
 * object with the +endpoint+ option key:
 *
 *   var ep = new AWS.Endpoint('awsproxy.example.com');
 *   var s3 = new AWS.S3({endpoint: ep});
 *   s3.client.endpoint.hostname == 'awsproxy.example.com'
 *
 * Note that if you do not specify a protocol, the protocol will
 * be selected based on your current {AWS.config} configuration.
 *
 * @!attribute protocol
 *   @return [String] the protocol (http or https) of the endpoint
 *     URL
 * @!attribute hostname
 *   @return [String] the host portion of the endpoint, e.g.,
 *     example.com
 * @!attribute host
 *   @return [String] the host portion of the endpoint including
 *     the port, e.g., example.com:80
 * @!attribute port
 *   @return [Integer] the port of the endpoint
 * @!attribute href
 *   @return [String] the full URL of the endpoint
 */
AWS.Endpoint = inherit({

  /**
   * @overload Endpoint(endpoint)
   *   Constructs a new endpoint given an endpoint URL. If the
   *   URL omits a protocol (http or https), the default protocol
   *   set in the global {AWS.config} will be used.
   *   @param endpoint [String] the URL to construct an endpoint from
   */
  constructor: function Endpoint(endpoint, config) {
    if (!endpoint.match(/^http/)) {
      var useSSL = config && config.sslEnabled !== undefined ?
        config.sslEnabled : AWS.config.sslEnabled;
      endpoint = (useSSL ? 'https' : 'http') + '://' + endpoint;
    }

    AWS.util.update(this, AWS.util.urlParse(endpoint));

    // Ensure the port property is set as an integer
    if (this.port) {
      this.port = parseInt(this.port, 10);
    } else {
      this.port = this.protocol === 'https:' ? 443 : 80;
    }
  }

});

/**
 * The low level HTTP request object, encapsulating all HTTP header
 * and body data sent by a service request.
 *
 * @!attribute method
 *   @return [String] the HTTP method of the request
 * @!attribute path
 *   @return [String] the path portion of the URI, e.g.,
 *     "/list/?start=5&num=10"
 * @!attribute headers
 *   @return [map<String,String>]
 *     a map of header keys and their respective values
 * @!attribute body
 *   @return [String] the request body payload
 * @!attribute endpoint
 *   @return [AWS.Endpoint] the endpoint for the request
 * @!attribute region
 *   @api private
 *   @return [String] the region, for signing purposes only.
 */
AWS.HttpRequest = inherit({

  /**
   * @api private
   */
  constructor: function HttpRequest() {
    this.method = 'POST';
    this.path = '/';
    this.headers = {};
    this.headers['User-Agent'] = AWS.util.userAgent();
    this.body = undefined;
    this.endpoint = undefined;
    this.region = undefined;
  },

  /**
   * @return [String] the part of the {path} excluding the
   *   query string
   */
  pathname: function pathname() {
    return this.path.split('?', 1)[0];
  },

  /**
   * @return [String] the query string portion of the {path}
   */
  search: function search() {
    return this.path.split('?', 2)[1] || '';
  }

});

/**
 * The low level HTTP response object, encapsulating all HTTP header
 * and body data returned from the request.
 *
 * @!attribute statusCode
 *   @return [Integer] the HTTP status code of the response (e.g., 200, 404)
 * @!attribute headers
 *   @return [map<String,String>]
 *      a map of response header keys and their respective values
 * @!attribute body
 *   @return [String] the response body payload
 */
AWS.HttpResponse = inherit({

  /**
   * @api private
   */
  constructor: function HttpResponse() {
    this.statusCode = null;
    this.headers = {};
    this.body = null;
  }
});

/**
 * @api private
 */
AWS.RequestHandler = inherit({

  constructor: function RequestHandler(awsRequest) {
    this.awsRequest = awsRequest;
    this.awsResponse = awsRequest.awsResponse;
    this.client = awsRequest.client;
    this.operation = awsRequest.operation;
    this.params = awsRequest.params;
  },

  makeRequest: function makeRequest() {
    if (!this.client.config.credentials.accessKeyId ||
        !this.client.config.credentials.secretAccessKey) {
      return this.handleError(AWS.util.error(new Error(), {
        code: 'SigningError', message: 'Missing credentials in config'
      }));
    }
    else if (!this.client.config.region) {
      return this.handleError(AWS.util.error(new Error(), {
        code: 'SigningError', message: 'Missing region in config'
      }));
    }
    this.emit('build', this, this.awsResponse);
    this.emit('sign', this, this.awsResponse);

    var httpRequest = this.client.buildRequest(this.operation, this.params);
    httpRequest.sign();
    this.sendRequest(httpRequest);
  },

  sendRequest: function sendRequest(httpRequest) {
    this.emit('send', this, this.awsResponse);

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
        this.emit('extractError', this, this.awsResponse);
        this.emit('extractData', this, this.awsResponse);

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
    this.client.parseResponse(httpResponse, this.operation, function (error, data) {
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

    var delays = this.client.retryDelays();
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
 * @api private
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
    var useSSL = request.endpoint.protocol === 'https:';
    var client = useSSL ? require('https') : require('http');

    if (useSSL) {
      options.rejectUnauthorized = true;
      options.cert = AWS.util.readFileSync(__dirname + '/../ca-bundle.crt');
      options.agent = new client.Agent(options);
    }

    var req = client.request(options, function onResponse(resp) {
      callbacks.onHeaders(resp.statusCode, resp.headers);
      resp.on('data', callbacks.onData);
      resp.on('end', callbacks.onEnd);
    });

    if (request.body) req.write(request.body);

    req.end();
    req.on('error', function (e) {
      callbacks.onError(AWS.util.error(
        new Error(e.message), {code: 'NetworkingError'}));
    });
  }

});

/**
 * @api private
 */
AWS.HttpClient = AWS.NodeHttpClient;

/**
 * @api private
 */
AWS.HttpClient.getInstance = function getInstance() {
  /*jshint newcap:false */
  if (this.singleton === undefined) {
    this.singleton = new this();
  }
  return this.singleton;
};
