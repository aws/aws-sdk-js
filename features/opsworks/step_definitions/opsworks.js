module.exports = function() {
  this.Before("@opsworks", function (callback) {
    this.iam = new this.AWS.IAM({region: 'us-west-2'});
    this.service = new this.AWS.OpsWorks({region: 'us-west-2'});
    callback();
  });

  this.Given(/^I create an OpsWorks user profile with the IAM user ARN$/, function(callback) {
    var params = {IamUserArn: this.iamUserArn};
    this.request(null, 'createUserProfile', params, callback, false);
  });

  this.Given(/^the IAM user ARN is in the result$/, function(callback) {
    this.assert.equal(this.data.IamUserArn, this.iamUserArn);
    callback();
  });

  this.Given(/^I describe the OpsWorks user profiles$/, function(callback) {
    var params = {IamUserArns: [this.iamUserArn]};
    this.request(null, 'describeUserProfiles', params, callback);
  });

  this.Then(/^the IAM user ARN should be in the result$/, function(callback) {
    this.assert.equal(this.data.UserProfiles[0].IamUserArn, this.iamUserArn);
    callback();
  });

  this.Then(/^the name should be equal to the IAM username$/, function(callback) {
    this.assert.equal(this.data.UserProfiles[0].Name, this.iamUser);
    callback();
  });

  this.Then(/^the SSH username should be equal to the IAM username$/, function(callback) {
    this.assert.equal(this.data.UserProfiles[0].SshUsername, this.iamUser);
    callback();
  });

  this.Then(/^I delete the OpsWorks user profile$/, function(callback) {
    var params = {IamUserArn: this.iamUserArn};
    this.request(null, 'deleteUserProfile', params, callback, false);
  });
};
