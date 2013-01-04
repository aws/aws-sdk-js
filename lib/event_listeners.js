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
require('./event_emitter');
require('./service_interface/json');
require('./service_interface/query');
require('./service_interface/rest');
require('./service_interface/rest_xml');

/**
 * @api private
 */
AWS.EventListeners = {
  Core: new AWS.EventEmitter().addNamedListeners(function(add) {
    add('VALIDATE_CREDENTIALS', 'validate', function VALIDATE_CREDENTIALS(req) {
      if (!req.client.config.credentials.accessKeyId ||
          !req.client.config.credentials.secretAccessKey) {
        throw AWS.util.error(new Error(),
          {code: 'SigningError', message: 'Missing credentials in config'});
      }
    });

    add('VALIDATE_REGION', 'validate', function VALIDATE_REGION(req) {
      if (!req.client.config.region) {
        throw AWS.util.error(new Error(),
          {code: 'SigningError', message: 'Missing region in config'});
      }
    });

    add('SIGN', 'sign', function SIGN(req) {
      var date = AWS.util.date.getDate();
      var credentials = AWS.util.copy(req.client.config.credentials);
      var SignerClass = AWS.RequestSigner.getVersion(req.client.api.signatureVersion);
      var signer = new SignerClass(req.httpRequest,
        req.client.api.signingName || req.client.api.serviceName);

      // clear old authorization headers
      delete req.httpRequest.headers['Authorization'];
      delete req.httpRequest.headers['Date'];
      delete req.httpRequest.headers['X-Amz-Date'];

      // add new authorization
      signer.addAuthorization(credentials, date);
    });

    add('SETUP_ERROR', 'extractError', function SETUP_ERROR(resp) {
      if (this.client.successfulResponse(resp, this)) {
        // throwing null will stop the error extraction chain
        // but will not set an error for data extraction
        throw null;
      }

      resp.error = AWS.util.error(new Error(),
        {code: 'UnknownError', message: 'An unknown error occurred.'});
      resp.data = null;
    });

    add('SETUP_DATA', 'extractData', function SETUP_DATA(resp) {
      resp.data = {};
      resp.error = null;
    });
  }),

  Http: new AWS.EventEmitter().addNamedListeners(function(add) {
    add('SEND', 'send', function SEND(resp) {
      AWS.HttpClient.getInstance().handleRequest(this, resp);
    });

    add('HTTP_HEADERS', 'httpHeaders',
        function HTTP_HEADERS(statusCode, headers, resp) {
      resp.httpResponse.statusCode = statusCode;
      resp.httpResponse.headers = headers;
      resp.httpResponse.body = new Buffer('');
      resp.httpResponse.buffers = [];
    });

    add('HTTP_DATA', 'httpData', function HTTP_DONE(chunk, resp) {
      resp.httpResponse.buffers.push(chunk);
    });

    add('HTTP_DONE', 'httpDone', function HTTP_DONE(resp) {
      // convert buffers array into single buffer
      resp.httpResponse.body = Buffer.concat(resp.httpResponse.buffers);
      delete resp.httpResponse.buffers;

      this.completeRequest(resp);
    });

    add('HTTP_ERROR', 'httpError', function HTTP_ERROR(error, resp) {
      resp.error = error;
      this.completeRequest(resp);
    });

    add('FINALIZE_ERROR', 'retry', function FINALIZE_ERROR(resp) {
      resp.error.statusCode = resp.httpResponse.statusCode;
      if (resp.error.retryable === undefined) {
        resp.error.retryable = this.client.retryableError(resp.error, this);
      }
    });

    add('REDIRECT', 'retry', function REDIRECT(resp) {
      if (resp.error && resp.error.statusCode == 307) {
        this.httpRequest.endpoint =
          new AWS.Endpoint(resp.httpResponse.headers['location']);
        resp.error.retryable = true;
      }
    });

    add('RETRY_CHECK', 'retry', function RETRY_CHECK(resp) {
      if (resp.error) {
        if (!resp.error.retryable)
          throw resp.error;
        if (resp.retryCount >= this.client.numRetries())
          throw resp.error;

        resp.retryCount++;
      }
    });

    add('RETRY_SIGN', 'retry', function RETRY_SIGN(resp) {
      this.emitEvents(resp, 'sign');
    });

    add('RETRY_DELAY_SEND', 'retry', function RETRY_DELAY_SEND(resp) {
      var delay = 0;
      if (resp.error) {
        delay = this.client.retryDelays()[resp.retryCount-1] || 0;
      }

      resp.error = null;
      resp.data = null;

      setTimeout(function() { resp.request.emitEvents(resp, 'send'); }, delay);
    });

    // Allow streaming by disabling HTTP_DATA callback if
    // any httpData event is added
    add('DISABLE_HTTP_DATA', 'newListener', function DISABLE_HTTP_DATA(event) {
      if (event === 'httpData') {
        this.removeListener('httpData', AWS.EventListeners.Http.HTTP_DATA);
      }
    });
  }),

  Json: new AWS.EventEmitter().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.Json;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Rest: new AWS.EventEmitter().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.Rest;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestXml: new AWS.EventEmitter().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.RestXml;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Query: new AWS.EventEmitter().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.Query;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  })
};
