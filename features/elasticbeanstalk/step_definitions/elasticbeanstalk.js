module.exports = function() {
  this.Before("@elasticbeanstalk", function (callback) {
    this.service = new this.AWS.ElasticBeanstalk();
    callback();
  });

  this.Given(/^I create an Elastic Beanstalk application with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.appName = this.uniqueName(prefix);
    var params = { ApplicationName: this.appName };
    this.request(null, 'createApplication', params, callback, false);
  });

  this.Given(/^I create an Elastic Beanstalk application version with label "([^"]*)"$/, function(label, callback) {
    this.appVersion = label;
    var params = { ApplicationName: this.appName, VersionLabel: this.appVersion };
    this.request(null, 'createApplicationVersion', params, callback);
  });

  this.Given(/^I describe the Elastic Beanstalk application$/, function(callback) {
    var params = { ApplicationNames: [this.appName] };
    this.request(null, 'describeApplications', params, callback);
  });

  this.Then(/^the result should contain the Elastic Beanstalk application version$/, function(callback) {
    this.assert.deepEqual(this.data.Applications[0].Versions, [this.appVersion]);
    callback();
  });

  this.Then(/^the result should contain the Elastic Beanstalk application name$/, function(callback) {
    this.assert.equal(this.data.Applications[0].ApplicationName, this.appName);
    callback();
  });

  this.Then(/^I delete the Elastic Beanstalk application$/, function(callback) {
    var params = { ApplicationName: this.appName };
    this.request(null, 'deleteApplication', params, callback);
  });
};
