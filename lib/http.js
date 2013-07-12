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
var Stream = require('stream').Stream;
var inherit = AWS.util.inherit;

/**
 * The endpoint that a service will talk to, for example,
 * `'https://ec2.ap-southeast-1.amazonaws.com'`. If
 * you need to override an endpoint for a service, you can
 * set the endpoint on a service by passing the endpoint
 * object with the `endpoint` option key:
 *
 * ```js
 * var ep = new AWS.Endpoint('awsproxy.example.com');
 * var s3 = new AWS.S3({endpoint: ep});
 * s3.service.endpoint.hostname == 'awsproxy.example.com'
 * ```
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
    if (typeof endpoint === 'undefined' || endpoint === null) {
      throw new Error('Invalid endpoint: ' + endpoint);
    } else if (typeof endpoint !== 'string') {
      return AWS.util.copy(endpoint);
    }

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
  constructor: function HttpRequest(endpoint, region) {
    endpoint = new AWS.Endpoint(endpoint);
    this.method = 'POST';
    this.path = endpoint.path || '/';
    this.headers = {};
    this.headers['User-Agent'] = AWS.util.userAgent();
    this.body = '';
    this.endpoint = endpoint;
    this.region = region;
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
    this.statusCode = undefined;
    this.headers = {};
    this.body = undefined;
  }
});

/**
 * @api private
 */
AWS.NodeHttpClient = inherit({
  handleRequest: function handleRequest(httpRequest, httpOptions, callback, errCallback) {
    var endpoint = httpRequest.endpoint;
    var pathPrefix = '';
    if (!httpOptions) httpOptions = {};
    if (httpOptions.proxy) {
      pathPrefix = endpoint.protocol + '//' + endpoint.hostname;
      if (endpoint.port != 80 && endpoint.port != 443) {
        pathPrefix += ':' + endpoint.port;
      }
      endpoint = new AWS.Endpoint(httpOptions.proxy);
    }

    var useSSL = endpoint.protocol === 'https:';
    var http = useSSL ? require('https') : require('http');
    var options = {
      host: endpoint.hostname,
      port: endpoint.port,
      method: httpRequest.method,
      headers: httpRequest.headers,
      path: pathPrefix + httpRequest.path
    };

    if (useSSL && !httpOptions.agent) {
      options.agent = this.sslAgent(http);
    }

    AWS.util.update(options, httpOptions);
    delete options.proxy; // proxy isn't an HTTP option
    delete options.timeout; // timeout isn't an HTTP option

    var stream = http.request(options, callback);
    httpRequest.stream = stream; // attach stream to httpRequest

    // timeout support
    stream.setTimeout(httpOptions.timeout || 0);
    stream.once('timeout', function() {
      var msg = 'Connection timed out after ' + httpOptions.timeout + 'ms';
      errCallback(AWS.util.error(new Error(msg), {code: 'TimeoutError'}));

      // HACK - abort the connection without tripping our error handler
      // since we already raised our TimeoutError. Otherwise the connection
      // comes back with ECONNRESET, which is not a helpful error message
      stream.removeListener('error', errCallback);
      stream.on('error', function() { });
      stream.abort();
    });

    stream.on('error', errCallback);
    this.writeBody(stream, httpRequest);
    return stream;
  },

  writeBody: function writeBody(stream, httpRequest) {
    if (httpRequest.body instanceof Stream) {
      httpRequest.body.pipe(stream);
    } else if (httpRequest.body) {
      stream.end(httpRequest.body);
    } else {
      stream.end();
    }
  },

  sslAgent: function sslAgent(http) {
    if (!AWS.NodeHttpClient.sslAgent) {
      AWS.NodeHttpClient.sslAgent = new http.Agent({
        rejectUnauthorized: true
      });
    }
    return AWS.NodeHttpClient.sslAgent;
  }
});

/**
 * @api private
 */
AWS.HttpClient = AWS.NodeHttpClient;

/**
 * @api private
 */
AWS.HttpClient.streamsApiVersion = require('stream').Readable ? 2 : 1;

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
