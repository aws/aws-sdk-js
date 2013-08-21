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
var url = require('url');
var domain = require('domain');
var builder = require('./browser-builder');
var _ = require('underscore');
var express = require('express');

var port = process.argv[2] || process.env.PORT || 8080;

function domainHandler(request, response, callback) {
  var dom = domain.create();
  dom.add(request);
  dom.add(response);
  dom.on('error', function (err) {
    response.writeHead(400, err.message, {'content-type': 'text/plain'});
    response.end(err.message);
  }).run(function() { callback(dom) });
}

function buildSDK(request, response, options) {
  domainHandler(request, response, function(dom) {
    var query = url.parse(request.url).query;
    if (query) query = query.replace(/=?&/g, ',').replace(/=/, '-');
    options = _.defaults(options || {}, { stream: null, minify: true });

    builder(query, options, function (err, stream) {
      if (err) return dom.emit('error', err);

      response.setHeader('content-type', 'text/javascript');
      response.writeHead(200);
      stream.pipe(response);
    });
  });
}

function buildUnminifiedSDK(req, res) {
  buildSDK(req, res, { minify: false });
}

var app = express();
app.use(express.compress());
app.use(express.favicon());
if (require.main === module) {
  app.use(express.logger()); // enable logging only for executable
}
app.get('/', buildSDK);
app.get('/aws-sdk.min.js', buildSDK);
app.get('/aws-sdk.js', buildUnminifiedSDK);

module.exports = app;

// run if we called this tool directly
if (require.main === module) {
  app.listen(port);
  console.log('* aws-sdk builder listening on http://localhost:' + port);
}
