module.exports = function() {
  this.Before('@autoscaling', function (callback) {
    this.service = new this.AWS.AutoScaling();
    callback();
  });

  this.Given(/^I create a launch configuration with name "([^"]*)"$/, function(name, callback) {
    var params = {
      ImageId: 'ami-1624987f',
      InstanceType: 'm1.small',
      LaunchConfigurationName: name
    };
    this.request(null, 'createLaunchConfiguration', params, callback, false);
  });

  this.Given(/^I describe launch configurations$/, function(callback) {
    this.request(null, 'describeLaunchConfigurations', {}, callback);
  });

  this.Then(/^the list should contain the launch configuration "([^"]*)"$/, function(name, callback) {
    this.assert.contains(this.data.LaunchConfigurations, function(configuration) {
      return configuration.LaunchConfigurationName === name;
    });
    callback();
  });

  this.Then(/^I delete the launch configuration "([^"]*)"$/, function(name, callback) {
    var params = {LaunchConfigurationName: name};
    this.request(null, 'deleteLaunchConfiguration', params, callback);
  });
};
