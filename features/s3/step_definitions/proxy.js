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

var url = require('url');
var http = require('http');

module.exports = function() {
  this.Before("@s3", "@proxy", function(callback) {
    setupProxyServer.call(this);

    this.service = this.s3 = new this.AWS.S3.Client({
      httpOptions: { proxy: 'http://localhost:' + this.proxyPort }
    });

    callback();
  });

  this.Then(/^I teardown the local proxy server$/, function(callback) {
    this.service = this.s3 = new this.AWS.S3.Client();
    this.proxyServer.close(callback);
  });

  function setupProxyServer() {
    if (this.proxyServer) return;
    this.proxyPort = 8000 + parseInt(Math.random() * 100);
    this.proxyServer = http.createServer(function (req, res) {
      var uri = url.parse(req.url);
      var options = {
        host: uri.hostname,
        port: uri.port || 80,
        method: req.method,
        path: uri.path,
        headers: req.headers
      };
      options.headers.host = uri.hostname;

      var s = http.request(options, function (res2) {
        res.writeHead(res2.statusCode, res2.headers);
        res2.on('data', function(ch) {
          res.write(ch);
        }).on('end', function() { res.end(); });
      });
      req.pipe(s);
    });
    this.proxyServer.listen(this.proxyPort);
  }
};
