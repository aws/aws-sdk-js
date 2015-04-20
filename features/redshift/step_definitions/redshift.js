module.exports = function() {
  this.Before("@redshift", function (callback) {
    this.service = new this.AWS.Redshift();
    callback();
  });

  this.Given(/^I create a Redshift cluster parameter group with prefix name "([^"]*)"$/, function(prefix, callback) {
    this.parameterGroupName = this.uniqueName(prefix);
    var params = {
      Description: 'Description',
      ParameterGroupName: this.parameterGroupName,
      ParameterGroupFamily: 'redshift-1.0'
    };
    this.request(null, 'createClusterParameterGroup', params, callback, false);
  });

  this.Given(/^the Redshift cluster parameter group name is in the result$/, function(callback) {
    this.assert.equal(this.data.ClusterParameterGroup.ParameterGroupName, this.parameterGroupName);
    callback();
  });

  this.Given(/^I describe Redshift cluster parameter groups$/, function(callback) {
    this.request(null, 'describeClusterParameterGroups', {}, callback);
  });

  this.Then(/^the Redshift cluster parameter group should be in the list$/, function(callback) {
    var name = this.parameterGroupName;
    this.assert.contains(this.data.ParameterGroups, function(parameterGroup) {
      return parameterGroup.ParameterGroupName === name;
    });
    callback();
  });

  this.Then(/^I delete the Redshift cluster parameter group$/, function(callback) {
    var params = {ParameterGroupName: this.parameterGroupName};
    this.request(null, 'deleteClusterParameterGroup', params, callback);
  });
};
