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
    add('VALIDATE_CREDENTIALS', 'validate',
        function VALIDATE_CREDENTIALS(req) {
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

    add('SIGN', 'sign', function SIGN(req, resp) {
      var date = AWS.util.date.getDate();
      var credentials = AWS.util.copy(req.client.config.credentials);
      var SignerClass = req.client.signatureVersion;
      var signer = new SignerClass(resp.httpRequest, req.client.serviceName);

      // clear old authorization headers
      delete resp.httpRequest.headers['Authorization'];
      delete resp.httpRequest.headers['Date'];
      delete resp.httpRequest.headers['X-Amz-Date'];

      // add new authorization
      signer.addAuthorization(credentials, date);
    });

    add('SETUP_ERROR', 'extractError', function SETUP_ERROR(req, resp) {
      if (req.client.successfulResponse(req, resp)) {
        // throwing null will stop the error extraction chain
        // but will not set an error for data extraction
        throw null;
      }

      resp.data = null;
    });

    add('SETUP_DATA', 'extractData', function SETUP_DATA(req, resp) {
      resp.data = {};
      resp.error = null;
    });

    add('FINALIZE_ERROR', 'retry', function FINALIZE_ERROR(req, resp) {
      resp.error.statusCode = resp.httpResponse.statusCode;
      resp.error.retryable = req.client.retryableError(resp.error, req);
    });
  }),

  Http: new AWS.EventEmitter().addNamedListeners(function(add) {
    add('SEND', 'send', function SEND(req, resp) {
      AWS.HttpClient.getInstance().handleRequest(req, resp);
    });

    add('HTTP_HEADERS', 'httpHeaders',
        function HTTP_HEADERS(req, resp, statusCode, headers) {
      resp.httpResponse.statusCode = statusCode;
      resp.httpResponse.headers = headers;
      resp.httpResponse.body = '';
    });

    add('HTTP_DATA', 'httpData', function HTTP_DONE(req, resp, chunk) {
      resp.httpResponse.body += chunk;
    });

    add('HTTP_DONE', 'httpDone', function HTTP_DONE(req) {
      req.completeRequest();
    });

    add('HTTP_ERROR', 'httpError', function HTTP_ERROR(req, error) {
      req.response.error = error;
      req.completeRequest();
    });

    add('REDIRECT', 'retry', function REDIRECT(req, resp) {
      if (resp.error && resp.error.statusCode == 307) {
        /*jshint sub:true */
        resp.httpRequest.endpoint =
          new AWS.Endpoint(resp.httpResponse.headers['location']);
        resp.error = null;
      }
    });

    add('RETRY_CHECK', 'retry', function RETRY_CHECK(req, resp) {
      if (resp.error) {
        if (!resp.error.retryable)
          throw resp.error;
        if (resp.retryCount >= req.client.numRetries())
          throw resp.error;

        resp.retryCount++;
      }
    });

    add('RETRY_SIGN', 'retry', function RETRY_SIGN(req) {
      req.emitEvents('sign');
    });

    add('RETRY_DELAY_SEND', 'retry', function RETRY_DELAY_SEND(req, resp) {
      var delay = 0;
      if (resp.error) {
        delay = req.client.retryDelays()[resp.retryCount] || 0;
      }
      setTimeout(function() {
        resp.error = null;
        resp.data = null;
        req.emitEvents('send');
      }, delay);
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
