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
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.RequestSigner = inherit({
  constructor: function RequestSigner(request) {
    this.request = request;
  }
});

AWS.RequestSigner.getVersion = function getVersion(version) {
  switch (version) {
    case 'v2': return AWS.SigV2;
    case 'v3': return AWS.SigV3;
    case 'v4': return AWS.SigV4;
    case 's3': return AWS.SigVS3;
  }
  throw new Error('Unknown signing version ' + version);
};

require('./sigv2');
require('./sigv3');
require('./sigv4');
require('./sigvs3');
