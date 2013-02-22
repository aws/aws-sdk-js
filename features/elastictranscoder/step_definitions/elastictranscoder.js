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
  this.Before("@elastictranscoder", function (callback) {
    this.iam = new this.AWS.IAM.Client();
    this.s3 = new this.AWS.S3.Client();
    this.client = new this.AWS.ElasticTranscoder.Client();
    callback();
  });

  this.Given(/^I create an Elastic Transcoder pipeline with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.pipelineName = this.uniqueName(prefix);
    var params = {
      Name: this.pipelineName,
      InputBucket: this.bucket,
      OutputBucket: this.bucket,
      Role: this.iamRoleArn,
      Notifications: {"Progressing":"","Completed":"","Warning":"","Error":""}
    };

    var world = this;
    var next = function() {
      if (world.data) world.pipelineId = world.data.Pipeline.Id;
      callback();
    }

    this.request(null, 'createPipeline', params, next, false);
  });

  this.Given(/^I list pipelines$/, function(callback) {
    this.request(null, 'listPipelines', {}, callback);
  });

  this.Then(/^the list should contain the pipeline$/, function(callback) {
    var id = this.pipelineId;
    this.assert.contains(this.data.Pipelines, function (pipeline) {
      return pipeline.Id === id;
    });
    callback();
  });

  this.Then(/^I pause the pipeline$/, function(callback) {
    this.request(null, 'updatePipelineStatus', {Id:this.pipelineId, Status: 'Paused'}, callback);
  });

  this.Then(/^I read the pipeline$/, function(callback) {
    this.request(null, 'readPipeline', {Id: this.pipelineId}, callback);
  });

  this.Then(/^the pipeline status should be "([^"]*)"$/, function(status, callback) {
    this.assert.equal(this.data.Pipeline.Status, status);
    callback();
  });

  this.Then(/^I delete the pipeline$/, function(callback) {
    this.request(null, 'deletePipeline', {Id: this.pipelineId}, callback);
  });
};
