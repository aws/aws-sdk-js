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

module.exports = function() {
  this.Before("@storagegateway", function (callback) {
    this.service = new this.AWS.StorageGateway.Client();
    callback();
  });

  this.When(/^I try to activate a Storage Gateway$/, function(callback) {
    var params = {
      ActivationKey: 'INVALIDKEY',
      GatewayName: this.uniqueName('aws-sdk-js'),
      GatewayTimezone: 'GMT-5:00',
      GatewayRegion: 'us-east-1'
    };
    this.request(null, 'activateGateway', params, callback, false);
  });
};
