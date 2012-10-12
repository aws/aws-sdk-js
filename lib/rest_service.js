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

var AWS = require('./core');
var inherit = AWS.util.inherit;

AWS.RESTService = inherit(AWS.Service, {

  constructor: function RESTService(config) {
    AWS.Service.call(this, config);
  },

  buildRequest: function buildRequest(method) {

    var httpRequest = this.newHttpRequest();

    httpRequest.method = this.api.operations[method].m;

    // 1. validate params
    // 2. apply uri params
    // 3. apply headers

    return httpRequest;

  }

});
