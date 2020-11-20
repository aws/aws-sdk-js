module.exports = function() {
  this.Before("@cloudwatchlogs", function (callback) {
    this.service = new this.AWS.CloudWatchLogs();
    callback();
  });

  this.Given(/^I create a CloudWatch logGroup with prefix "([^"]*)"$/, function (prefix, callback) {
    var expectErr = prefix === "" ? false : undefined;
    this.logGroupName = this.uniqueName(prefix);
    this.request(null, 'createLogGroup', {logGroupName: this.logGroupName}, callback, expectErr);
  });

  this.Given(/^I list the CloudWatch logGroups$/, function (callback) {
    this.request(null, 'describeLogGroups', {logGroupNamePrefix: this.logGroupName}, callback);
  });

  this.Then(/^the list should contain the CloudWatch logGroup$/, function (callback) {
    var name = this.logGroupName;
    this.assert.contains(this.data.logGroups, function(alarm) {
      return alarm.logGroupName === name;
    });
    callback();
  });

  this.Then(/^I delete the CloudWatch logGroup$/, function (callback) {
    this.request(null, 'deleteLogGroup', {logGroupName: this.logGroupName}, callback);
  });
};
