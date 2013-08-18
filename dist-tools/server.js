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

var zlib = require('zlib');
var http = require('http');
var url = require('url');
var domain = require('domain');
var builder = require('./browser-builder');
var _ = require('underscore');
var express = require('express');

function domainHandler(request, response, callback) {
  domain.create().on('error', function (err) {
    response.writeHead(400, err.message, {'content-type': 'text/plain'});
    response.end(err.message);
  }).run(callback);
}

function encodedStream(request, response, initialStream) {
  var acceptEncoding = request.headers['accept-encoding'] || '';
  var encodings = {deflate: zlib.createDeflate, gzip: zlib.createGzip};
  var stream = initialStream;

  _.each(encodings, function (fn, type) {
    var headerName = 'content-encoding';
    if (response.getHeader(headerName)) return;

    // Note: this is not a conformant accept-encoding parser.
    // See http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3
    if (acceptEncoding.match('\\b' + type + '\\b')) {
      response.setHeader(headerName, type);
      stream = stream.pipe(fn());
    }
  });

  return stream;
}

function buildSDK(request, response, options) {
  domainHandler(request, response, function() {
    var query = url.parse(request.url).query;
    options = _.defaults(options || {}, { stream: null, minify: true });

    var stream = builder(query, options);
    stream = encodedStream(request, response, stream);
    response.setHeader('content-type', 'text/javascript');
    response.writeHead(200);
    stream.pipe(response);
  });
}

var app = express();
app.use(express.logger());
app.get('/', function (req, res) { buildSDK(req, res) });
app.get('/debug', function (req, res) { buildSDK(req, res, { minify: false }); });
app.listen(1337);
console.log("* aws-sdk builder listening on http://localhost:1337");
