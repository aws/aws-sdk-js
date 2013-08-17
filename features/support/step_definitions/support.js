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
  this.Before("@support", function (callback) {
    this.service = new this.AWS.Support();
    callback();
  });

  this.Given(/^I describe Support services$/, function(callback) {
    this.request(null, 'describeServices', {}, callback);
  });

  this.Then(/^the Supported services list should contain a service with code "([^"]*)"$/, function(code, callback) {
    this.assert.contains(this.data.services, function (svc) {
      return svc.code == code;
    });
    callback();
  });

  this.Then(/^the Supported services list should contain a service with name "([^"]*)"$/, function(name, callback) {
    this.assert.contains(this.data.services, function (svc) {
      return svc.name == name;
    });
    callback();
  });

  this.Given(/^I create a case with an invalid category$/, function(callback) {
    var params = {
      subject: "Subject",
      serviceCode: "INVALID-CODE",
      categoryCode: "INVALID-CATEGORY",
      communicationBody: "Communication"
    };

    this.request(null, 'createCase', params, callback, false);
  });
};
