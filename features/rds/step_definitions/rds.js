module.exports = function() {
  this.Before("@rds", function (callback) {
    this.service = new this.AWS.RDS.Client();
    callback();
  });

  this.Given(/^I create a RDS security group with prefix name "([^"]*)"$/, function(prefix, callback) {
    this.dbGroupName = this.uniqueName(prefix);
    var params = { DBSecurityGroupDescription: 'Description', DBSecurityGroupName: this.dbGroupName };
    this.request(null, 'createDBSecurityGroup', params, callback, false);
  });

  this.Given(/^the RDS security group name is in the result$/, function(callback) {
    var name = this.data.DBSecurityGroupName;
    this.assert.equal(name, this.dbGroupName);
    callback();
  });

  this.Given(/^I describe the RDS security group$/, function(callback) {
    var params = {DBSecurityGroupName: this.dbGroupName};
    this.request(null, 'describeDBSecurityGroups', params, callback);
  });

  this.Then(/^the RDS security group should be described$/, function(callback) {
    var item = this.data.DBSecurityGroups[0];
    this.assert.equal(item.DBSecurityGroupName, this.dbGroupName);
    callback();
  });

  this.Then(/^I delete the RDS security group$/, function(callback) {
    var params = {DBSecurityGroupName: this.dbGroupName};
    this.request(null, 'deleteDBSecurityGroup', params, callback);
  });
};
