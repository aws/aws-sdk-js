module.exports = function() {
  this.Before("@redshift", function (callback) {
    this.service = new this.AWS.Redshift();
    callback();
  });

  this.Given(/^I create a Redshift cluster security group with prefix name "([^"]*)"$/, function(prefix, callback) {
    this.clusterGroupName = this.uniqueName(prefix);
    var params = { Description: 'Description', ClusterSecurityGroupName: this.clusterGroupName };
    this.request(null, 'createClusterSecurityGroup', params, callback, false);
  });

  this.Given(/^the Redshift cluster security group name is in the result$/, function(callback) {
    var name = this.data.ClusterSecurityGroup.ClusterSecurityGroupName;
    this.assert.equal(name, this.clusterGroupName);
    callback();
  });
  this.Given(/^I describe Redshift cluster security groups$/, function(callback) {
    var params = {ClusterSecurityGroupName: this.clusterGroupName};
    this.request(null, 'describeClusterSecurityGroups', params, callback);
  });

  this.Then(/^the Redshift cluster security group should be in the list$/, function(callback) {
    var item = this.data.ClusterSecurityGroups[0];
    this.assert.equal(item.ClusterSecurityGroupName, this.clusterGroupName);
    callback();
  });

  this.Then(/^I delete the Redshift cluster security group$/, function(callback) {
    var params = {ClusterSecurityGroupName: this.clusterGroupName};
    this.request(null, 'deleteClusterSecurityGroup', params, callback);
  });
};
