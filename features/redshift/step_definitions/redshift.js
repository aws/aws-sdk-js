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

  this.When(/^I describe Redshift cluster parameter groups$/, function(callback) {
    this.request(null, 'describeClusterParameterGroups', {}, callback);
  });

  this.Then(/^the response should be type of "([^"]*)"$/, function(array, callback) {
    this.assert.equal(this.data.ParameterGroups.constructor.name, array);
    callback();
  });

};
