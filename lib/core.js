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

/**
 * The main AWS namespace
 */
var AWS = {};
module.exports = AWS;
require('./util');

AWS.util.update(AWS, {

  /**
   * @constant
   */
  VERSION: '0.9.1-pre.2',

  /**
   * @api private
   */
  RequestSigner: AWS.util.inherit({
    constructor: function RequestSigner(request) {
      this.request = request;
    }
  }),

  /**
   * @api private
   */
  XML: {}

});

require('./config');
require('./http');
require('./promise');
require('./client');
require('./service');
