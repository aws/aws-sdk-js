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
