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
require('./http');
var inherit = AWS.util.inherit;

AWS.MetadataService = inherit({
  host: '169.254.169.254',
  httpOptions: { timeout: 1000 },

  constructor: function MetadataService(options) {
    AWS.util.update(this, options);
  },

  request: function request(path, callback) {
    path = path || '/';

    var data = '';
    var http = AWS.HttpClient.getInstance();
    var httpRequest = new AWS.HttpRequest('http://' + this.host + path);
    httpRequest.method = 'GET';

    http.handleRequest(httpRequest, this.httpOptions, function(httpResponse) {
      httpResponse.on('data', function(chunk) { data += chunk.toString(); });
      httpResponse.on('end', function() { callback(null, data); });
    }, callback);
  },

  loadCredentials: function loadCredentials(callback) {
    var self = this;
    var basePath = '/latest/meta-data/iam/security-credentials/';
    self.request(basePath, function (err, roleName) {
      if (err) callback(err);
      else {
        roleName = roleName.split('\n')[0]; // grab first (and only) role
        self.request(basePath + roleName, function (credErr, credData) {
          if (credErr) callback(credErr);
          else {
            try {
              var credentials = JSON.parse(credData);
              callback(null, credentials);
            } catch (parseError) {
              callback(parseError);
            }
          }
        });
      }
    });
  }
});

module.exports = AWS.MetadataService;
