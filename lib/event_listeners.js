var AWS = require('./core');
require('./sequential_executor');
require('./service_interface/json');
require('./service_interface/query');
require('./service_interface/rest');
require('./service_interface/rest_json');
require('./service_interface/rest_xml');

/**
 * The namespace used to register global event listeners for request building
 * and sending.
 */
AWS.EventListeners = {
  /**
   * @!attribute VALIDATE_CREDENTIALS
   *   A request listener that validates whether the request is being
   *   sent with credentials.
   *   Handles the {AWS.Request~validate 'validate' Request event}
   *   @example Sending a request without validating credentials
   *     var listener = AWS.EventListeners.Core.VALIDATE_CREDENTIALS;
   *     request.removeListener('validate', listener);
   *   @readonly
   *   @return [Function]
   * @!attribute VALIDATE_REGION
   *   A request listener that validates whether the region is set
   *   for a request.
   *   Handles the {AWS.Request~validate 'validate' Request event}
   *   @example Sending a request without validating region configuration
   *     var listener = AWS.EventListeners.Core.VALIDATE_REGION;
   *     request.removeListener('validate', listener);
   *   @readonly
   *   @return [Function]
   * @!attribute VALIDATE_PARAMETERS
   *   A request listener that validates input parameters in a request.
   *   Handles the {AWS.Request~validate 'validate' Request event}
   *   @example Sending a request without validating parameters
   *     var listener = AWS.EventListeners.Core.VALIDATE_PARAMETERS;
   *     request.removeListener('validate', listener);
   *   @example Disable parameter validation globally
   *     AWS.EventListeners.Core.removeListener('validate',
   *       AWS.EventListeners.Core.VALIDATE_REGION);
   *   @readonly
   *   @return [Function]
   * @!attribute SEND
   *   A request listener that initiates the HTTP connection for a
   *   request being sent. Handles the {AWS.Request~send 'send' Request event}
   *   @example Replacing the HTTP handler
   *     var listener = AWS.EventListeners.Core.SEND;
   *     request.removeListener('send', listener);
   *     request.on('send', function(response) {
   *       customHandler.send(response);
   *     });
   *   @return [Function]
   *   @readonly
   * @!attribute HTTP_DATA
   *   A request listener that reads data from the HTTP connection in order
   *   to build the response data.
   *   Handles the {AWS.Request~httpData 'httpData' Request event}.
   *   Remove this handler if you are overriding the 'httpData' event and
   *   do not want extra data processing and buffering overhead.
   *   @example Disabling default data processing
   *     var listener = AWS.EventListeners.Core.HTTP_DATA;
   *     request.removeListener('httpData', listener);
   *   @return [Function]
   *   @readonly
   */
  Core: {} /* doc hack */
};

AWS.EventListeners = {
  Core: new AWS.SequentialExecutor().addNamedListeners(function(add, addAsync) {
    addAsync('VALIDATE_CREDENTIALS', 'validate',
        function VALIDATE_CREDENTIALS(req, doneCallback) {
      req.service.config.getCredentials(function(err) {
        if (err) {
          err = AWS.util.error(err,
            {code: 'SigningError', message: 'Missing credentials in config'});
        }
        doneCallback(err);
      });
    });

    add('VALIDATE_REGION', 'validate', function VALIDATE_REGION(req) {
      if (!req.service.config.region && !req.service.hasGlobalEndpoint()) {
        throw AWS.util.error(new Error(),
          {code: 'SigningError', message: 'Missing region in config'});
      }
    });

    add('VALIDATE_PARAMETERS', 'validate', function VALIDATE_PARAMETERS(req) {
      var rules = req.service.api.operations[req.operation].input;
      new AWS.ParamValidator().validate(rules, req.params);
    });

    add('SET_CONTENT_LENGTH', 'afterBuild', function SET_CONTENT_LENGTH(req) {
      if (req.httpRequest.headers['Content-Length'] === undefined) {
        var length = AWS.util.string.byteLength(req.httpRequest.body);
        req.httpRequest.headers['Content-Length'] = length;
      }
    });

    add('SET_HTTP_HOST', 'afterBuild', function SET_HTTP_HOST(req) {
      req.httpRequest.headers['Host'] = req.httpRequest.endpoint.host;
    });

    addAsync('SIGN', 'sign', function SIGN(req, doneCallback) {
      if (!req.service.api.signatureVersion) return doneCallback(); // none

      req.service.config.getCredentials(function (err, credentials) {
        try {
          if (err) return doneCallback(err);

          var date = AWS.util.date.getDate();
          var SignerClass = req.service.getSignerClass(req);
          var signer = new SignerClass(req.httpRequest,
            req.service.api.signingName || req.service.api.endpointPrefix);

          // clear old authorization headers
          delete req.httpRequest.headers['Authorization'];
          delete req.httpRequest.headers['Date'];
          delete req.httpRequest.headers['X-Amz-Date'];

          // add new authorization
          signer.addAuthorization(credentials, date);
          doneCallback();
        } catch (e) {
          doneCallback(e);
        }
      });
    });

    add('SETUP_ERROR', 'extractError', function SETUP_ERROR(resp) {
      if (this.service.successfulResponse(resp, this)) {
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

    add('SEND', 'send', function SEND(resp) {
      function callback(httpResp) {
        resp.httpResponse.stream = httpResp;

        httpResp.on('headers', function onHeaders(statusCode, headers) {
          resp.request.emitEvent('httpHeaders', [statusCode, headers, resp]);

          if (!resp.request.httpRequest._streaming) {
            if (AWS.HttpClient.streamsApiVersion === 2) { // streams2 API check
              httpResp.on('readable', function onReadable() {
                var data = httpResp.read();
                if (data !== null) {
                  resp.request.emitEvent('httpData', [data, resp]);
                }
              });
            } else { // legacy streams API
              httpResp.on('data', function onData(data) {
                resp.request.emitEvent('httpData', [data, resp]);
              });
            }
          }
        });

        httpResp.on('end', function onEnd() {
          resp.request.emitEvent('httpDone', [resp]);
        });
      }

      function progress(httpResp) {
        httpResp.on('sendProgress', function onSendProgress(progress) {
          resp.request.emitEvent('httpUploadProgress', [progress, resp]);
        });

        httpResp.on('receiveProgress', function onReceiveProgress(progress) {
          resp.request.emitEvent('httpDownloadProgress', [progress, resp]);
        });
      }

      function error(err) {
        err = AWS.util.error(err, {
          code: 'NetworkingError',
          region: resp.request.httpRequest.region,
          hostname: resp.request.httpRequest.endpoint.hostname,
          retryable: true
        });
        resp.request.emitEvent('httpError', [err, resp]);
      }

      var http = AWS.HttpClient.getInstance();
      var httpOptions = resp.request.service.config.httpOptions || {};
      var s = http.handleRequest(this.httpRequest, httpOptions, callback, error);
      progress(s);
    });

    add('HTTP_HEADERS', 'httpHeaders',
        function HTTP_HEADERS(statusCode, headers, resp) {
      resp.httpResponse.statusCode = statusCode;
      resp.httpResponse.headers = headers;
      resp.httpResponse.body = new AWS.util.Buffer('');
      resp.httpResponse.buffers = [];
      resp.httpResponse.numBytes = 0;
    });

    add('HTTP_DATA', 'httpData', function HTTP_DATA(chunk, resp) {
      if (chunk) {
        if (AWS.util.isNode()) {
          resp.httpResponse.numBytes += chunk.length;

          var total = resp.httpResponse.headers['content-length'];
          var progress = { loaded: resp.httpResponse.numBytes, total: total };
          resp.request.emitEvent('httpDownloadProgress', [progress, resp]);
        }

        resp.httpResponse.buffers.push(new AWS.util.Buffer(chunk));
      }
    });

    add('HTTP_DONE', 'httpDone', function HTTP_DONE(resp) {
      // convert buffers array into single buffer
      if (resp.httpResponse.buffers && resp.httpResponse.buffers.length > 0) {
        var body = AWS.util.buffer.concat(resp.httpResponse.buffers);
        resp.httpResponse.body = body;
      }
      delete resp.httpResponse.numBytes;
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
        resp.error.retryable = this.service.retryableError(resp.error, this);
      }
    });

    add('INVALIDATE_CREDENTIALS', 'retry', function INVALIDATE_CREDENTIALS(resp) {
      switch (resp.error.code) {
        case 'RequestExpired': // EC2 only
        case 'ExpiredTokenException':
        case 'ExpiredToken':
          resp.error.retryable = true;
          resp.request.service.config.credentials.expired = true;
      }
    });

    add('REDIRECT', 'retry', function REDIRECT(resp) {
      if (resp.error && resp.error.statusCode >= 300 &&
          resp.error.statusCode < 400 && resp.httpResponse.headers['location']) {
        this.httpRequest.endpoint =
          new AWS.Endpoint(resp.httpResponse.headers['location']);
        resp.error.redirect = true;
        resp.error.retryable = true;
      }
    });

    add('RETRY_CHECK', 'retry', function RETRY_CHECK(resp) {
      if (resp.error) {
        if (resp.error.redirect && resp.redirectCount < this.service.config.maxRedirects) {
          resp.redirectCount++;
        } else if (resp.error.retryable && resp.retryCount < this.service.numRetries()) {
          resp.retryCount++;
        } else {
          throw resp.error;
        }
      }
    });

    addAsync('RETRY_SIGN', 'retry', function RETRY_SIGN(resp, doneCallback) {
      this.emitEvent('sign', resp, doneCallback);
    });

    addAsync('RETRY_DELAY_SEND', 'retry', function RETRY_DELAY_SEND(resp, doneCallback) {
      var delay = 0;
      if (!resp.error.redirect) {
        delay = this.service.retryDelays()[resp.retryCount-1] || 0;
      }

      resp.error = null;
      resp.data = null;

      setTimeout(function() {
        resp.request.emitEvent('send', resp, doneCallback);
      }, delay);

    });

  }),

  Logger: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    add('LOG_REQUEST', 'complete', function LOG_REQUEST(resp) {
      var req = resp.request;
      var logger = req.service.config.logger;
      if (!logger) return;

      function buildMessage() {
        var time = AWS.util.date.getDate().getTime();
        var delta = (time - req.startTime.getTime()) / 1000;
        var ansi = logger.isTTY ? true : false;
        var status = resp.httpResponse.statusCode;
        var params = require('util').inspect(req.params, true, true);

        var message = '';
        if (ansi) message += '\x1B[33m';
        message += '[AWS ' + req.service.serviceIdentifier + ' ' + status;
        message += ' ' + delta.toString() + 's ' + resp.retryCount + ' retries]';
        if (ansi) message += '\x1B[0;1m';
        message += ' ' + req.operation + '(' + params + ')';
        if (ansi) message += '\x1B[0m';
        return message;
      }

      var message = buildMessage();
      if (typeof logger.log === 'function') {
        logger.log(message);
      } else if (typeof logger.write === 'function') {
        logger.write(message + '\n');
      }
    });
  }),

  Json: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.Json;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Rest: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.Rest;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestJson: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.RestJson;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestXml: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.RestXml;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Query: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.Query;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  })
};
