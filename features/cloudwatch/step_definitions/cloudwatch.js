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
  this.Before("@cloudwatch", function (callback) {
    this.service = new this.AWS.CloudWatch.Client();
    callback();
  });

  this.Given(/^I create a CloudWatch alarm with (prefix|name) "([^"]*)"$/, function(prefix, name, callback) {
    var timestamp = new Date().getTime();
    this.cloudWatchAlarm = {
      AlarmName: name,
      MetricName: 'aws-sdk-js-metric-' + timestamp,
      Namespace: 'aws-sdk-js-namespace' + timestamp,
      ComparisonOperator: 'GreaterThanThreshold',
      EvaluationPeriods: 5,
      Period: 60,
      Statistic: 'Average',
      Threshold: 50.0
    };

    if (prefix === 'prefix') {
      this.cloudWatchAlarm.AlarmName += '-' + timestamp;
    }

    this.request(null, 'putMetricAlarm', this.cloudWatchAlarm,
      callback, prefix === 'name' ? false : undefined);
  });

  this.Given(/^I list the CloudWatch alarms$/, function(callback) {
    var params = {
      MetricName: this.cloudWatchAlarm.MetricName,
      Namespace: this.cloudWatchAlarm.Namespace
    };
    this.request(null, 'describeAlarmsForMetric', params, callback);
  });

  this.Then(/^the list should contain the CloudWatch alarm$/, function(callback) {
    var name = this.cloudWatchAlarm.AlarmName;
    this.assert.contains(this.data.MetricAlarms, function(alarm) {
      return alarm.AlarmName === name;
    });
    callback();
  });

  this.Then(/^I delete the CloudWatch alarm$/, function(callback) {
    this.request(null, 'deleteAlarms',
      {AlarmNames: [this.cloudWatchAlarm.AlarmName]}, callback);
  });
};
