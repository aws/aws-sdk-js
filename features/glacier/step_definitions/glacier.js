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

  this.Given(/^I have a Glacier vault$/, function(callback) {
    this.vaultName = 'aws-sdk-js-integration';
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

  this.When(/^I initiate a Glacier multi-part upload on a (\d+(?:\.\d+)?)MB archive in (\d+)MB chunks$/, function(totalSize, chunkSize, callback) {
    // setup multi-part upload
    this.uploadData = new Buffer(totalSize * 1024 * 1024);
    this.uploadData.fill('0');
    this.checksums = this.client.computeChecksums(this.uploadData);
    this.partCounter = 0;
    this.chunkSize = chunkSize * 1024 * 1024;

    var params = {vaultName: this.vaultName, partSize: this.chunkSize.toString()};
    this.request(null, 'initiateMultipartUpload', params, callback);
  });

  this.Then(/^the result should contain the Glacier multi-part upload ID$/, function(callback) {
    this.uploadId = this.data.uploadId;
    callback();
  });

  this.Then(/^I send the next part$/, function(callback) {
    var start = this.partCounter;
    var end = this.AWS.util.min(start + this.chunkSize, this.uploadData.length);
    var buf = this.uploadData.slice(start, end);
    var range = 'bytes ' + start + '-' + (end-1) + '/*';
    var params = {
      vaultName: this.vaultName,
      uploadId: this.uploadId,
      range: range,
      body: buf
    };
    this.request(null, 'uploadMultipartPart', params, callback);
    this.partCounter += this.chunkSize;
  });

  this.Then(/^I complete the Glacier multi-part upload$/, function(callback) {
    var params = {
      vaultName: this.vaultName,
      uploadId: this.uploadId,
      archiveSize: this.uploadData.length.toString(),
      checksum: this.checksums.treeHash
    }
    this.request(null, 'completeMultipartUpload', params, callback);
  });

};
