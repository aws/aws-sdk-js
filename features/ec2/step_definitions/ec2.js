module.exports = function() {
  this.Before("@ec2", function (callback) {
    this.service = new this.AWS.EC2.Client();
    callback();
  });

  this.Given(/^I describe EC2 regions "([^"]*)"$/, function(regions, callback) {
    regions = regions.split(/\s*,\s*/);
    this.request(null, 'describeRegions', {RegionNames: regions}, callback);
  });

  this.Then(/^the EC2 endpoint for "([^"]*)" should be "([^"]*)"$/, function(region, endpoint, callback) {
    this.assert.contains(this.data.Regions, function(region) {
      return region.Endpoint === endpoint;
    });
    callback();
  });

  this.Given(/^I describe the EC2 instance "([^"]*)"$/, function(instanceId, callback) {
    this.request(null, 'describeInstances', {InstanceIds: [instanceId]}, callback, false);
  });
};
