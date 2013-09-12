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

AWS.EC2 = AWS.Service.defineService('ec2', ['2013-08-15'], {
  setupRequestListeners: function setupRequestListeners(request) {
    request.removeListener('extractError', AWS.EventListeners.Query.EXTRACT_ERROR);
    request.addListener('extractError', this.extractError);
  },

  /**
   * @api private
   */
  extractError: function extractError(resp) {
    // EC2 nests the error code and message deeper than other AWS Query services.
    var httpResponse = resp.httpResponse;
    var data = new AWS.XML.Parser({}).parse(httpResponse.body.toString() || '');
    if (data.Errors)
      resp.error = AWS.util.error(new Error(), {
        code: data.Errors.Error.Code,
        message: data.Errors.Error.Message
      });
    else
      resp.error = AWS.util.error(new Error(), {
        code: httpResponse.statusCode,
        message: null
      });
  }
});

module.exports = AWS.EC2;
