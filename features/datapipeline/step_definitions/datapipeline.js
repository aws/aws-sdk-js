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
  this.Before("@datapipeline", function (callback) {
    this.service = new this.AWS.DataPipeline.Client();
    callback();
  });

  var sortObjects = function sortObjects(objects) {
    this.AWS.util.arrayEach(objects, function(item) {
      item.fields.sort(function (field1, field2) {
        return field1.key < field2.key ? -1 : 1;
      });
    });
  };

  this.Given(/^I create a Data Pipeline with name prefix "([^"]*)"$/, function(prefix, callback) {
    var params = {
      name: this.uniqueName(prefix), uniqueId: this.uniqueName('aws-js-sdk')
    };
    this.request(null, 'createPipeline', params, callback, false);
  });

  this.Then(/^the response should contain the pipeline ID$/, function(callback) {
    this.pipelineId = this.data.pipelineId;
    callback();
  });

  this.When(/^I describe the Data Pipelines$/, function(callback) {
    var params = {pipelineIds: [this.pipelineId]};
    this.request(null, 'describePipelines', params, callback);
  });

  this.Then(/^the pipeline should be in the list$/, function(callback) {
    var id = this.data.pipelineDescriptionList[0].pipelineId;
    this.assert.equal(id, this.pipelineId);
    callback();
  });

  this.Then(/^I put a Data Pipeline definition$/, function(callback) {
    this.pipelineDefinition = {
      pipelineId: this.pipelineId,
      pipelineObjects: [
        {id: 'Schedule', name: 'Schedule', fields: [
          {key: 'type', stringValue: 'Schedule'},
          {key: 'period', stringValue: '1 hour'},
          {key: 'startDateTime', stringValue: '2012-12-12T00:00:00'},
          {key: 'endDateTime', stringValue: '2012-12-21T18:00:00'}
        ]},
        {id: 'Default', name: 'Default', fields: [
          {key: 'workerGroup', stringValue: 'workerGroup'}
        ]},
        {id: 'SayHello', name: 'SayHello', fields: [
          {key: 'type', stringValue: 'ShellCommandActivity'},
          {key: 'command', stringValue: 'echo hello'},
          {key: 'parent', refValue: 'Default'},
          {key: 'schedule', refValue: 'Schedule'}
        ]}
      ]
    };
    sortObjects.call(this, this.pipelineDefinition.pipelineObjects);
    this.request(null, 'putPipelineDefinition', this.pipelineDefinition, callback);
  });

  this.Then(/^I get the Data Pipeline definition$/, function(callback) {
    var params = {pipelineId:this.pipelineId};
    this.request(null, 'getPipelineDefinition', params, callback);
  });

  this.Then(/^the the objects should be in the Data Pipeline definition$/, function(callback) {
    var objects = this.pipelineDefinition.pipelineObjects;
    sortObjects.call(this, this.data.pipelineObjects);
    this.assert.deepEqual(this.data.pipelineObjects, objects);
    callback();
  });

  this.Then(/^I delete the Data Pipeline$/, function(callback) {
    var params = {pipelineId: this.pipelineId};
    this.request(null, 'deletePipeline', params, callback);
  });
};
