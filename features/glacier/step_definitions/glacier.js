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
  this.Before("@glacier", function (callback) {
    this.client = new this.AWS.Glacier.Client();
    callback();
  });

  this.Given(/^I create a Glacier vault with name "([^"]*)"$/, function(name, callback) {
    this.vaultName = name;
    var params = {vaultName: this.vaultName};
    this.request(null, 'createVault', params, callback, false);
  });

  this.Given(/^I upload a (\d+(?:\.\d+)?)MB Glacier archive to the vault( with (?:invalid|incorrect) checksum)?$/, function(size, invalid, callback) {
    var data = new Buffer(parseFloat(size) * 1024 * 1024);
    data.fill('0');
    var params = {vaultName: this.vaultName, body: data};
    if (invalid) {
      if (invalid.match("invalid")) params.checksum = '000';
      else params.checksum = '00000000000000000000000000000000';
    }
    this.request(null, 'uploadArchive', params, callback, false);
  });

  this.Then(/^the result should contain the Glacier archive ID$/, function(callback) {
    this.archiveId = this.data.archiveId;
    callback();
  });

  this.Then(/^the result should contain the same tree hash checksum$/, function(callback) {
    var hash = this.response.request.httpRequest.headers['x-amz-sha256-tree-hash'];
    this.assert.equal(this.data.checksum, hash);
    callback();
  });

  this.When(/^I describe the Glacier vault$/, function(callback) {
    var params = {vaultName: this.vaultName};
    this.request(null, 'describeVault', params, callback);
  });

  this.Then(/^I delete the Glacier archive$/, function(callback) {
    var params = {vaultName: this.vaultName, archiveId: this.archiveId};
    this.request(null, 'deleteArchive', params, callback);
  });

  this.Then(/^I delete the Glacier vault$/, function(callback) {
    var params = {vaultName: this.vaultName};
    this.eventually(callback, function(next) {
      this.request(null, 'deleteVault', params, next);
    });
  });
};
