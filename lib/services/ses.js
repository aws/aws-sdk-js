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

AWS.SES = AWS.Service.defineService('ses', ['2010-12-01'], {
  /**
   * @api private
   */
  initialize: function initialize(options) {
    options = options || {};
    options.region = options.region || 'us-east-1';
    AWS.Service.prototype.initialize.call(this, options);
  },

  /**
   * @api private
   */
  defaultEndpoint: 'us-east-1',

  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.removeListener('validate',
      AWS.EventListeners.Core.VALIDATE_REGION);
  }
});

module.exports = AWS.SES;
