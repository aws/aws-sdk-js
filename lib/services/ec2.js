/**
 * Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var inherit = AWS.util.inherit;

require('../query_client');
require('../sigv2');

AWS.EC2 = inherit({

  constructor: function EC2(config) {
    AWS.Service.call(this, config);
  }

});

AWS.EC2.Client = inherit(AWS.QueryClient, {

  constructor: function EC2Client(config) {
    this.serviceName = 'ec2';
    AWS.QueryClient.call(this, config);
  },

  signatureVersion: AWS.SigV2,

  // EC2 nests the error code and message deeper than other AWS Query services.
  extractError: function extractError(httpResponse) {
    var data = new AWS.XML.Parser({}).parse(httpResponse.body);
    if (data.Errors)
      return {
        code: data.Errors.Error.Code,
        message: data.Errors.Error.Message
      };
    else
      return {
        code: httpResponse.statusCode,
        message: null
      };
  }

});

require('./ec2.api');

AWS.Client.defineMethods(AWS.EC2.Client);
