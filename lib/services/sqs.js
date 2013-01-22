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

var AWS = require('../core');

AWS.SQS = AWS.Service.defineService('./services/sqs.api', {
  Client: {
    setupRequestListeners: function setupRequestListeners(request) {
      request.addListener('build', this.buildEndpoint);
    },

    buildEndpoint: function buildEndpoint(request) {
      var url = request.httpRequest.params.getValue('QueueUrl');
      if (url) {
        request.httpRequest.endpoint = new AWS.Endpoint(url);
      }
    }
  }
});

module.exports = AWS.SQS;
