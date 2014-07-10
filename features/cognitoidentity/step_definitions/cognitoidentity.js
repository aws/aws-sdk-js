module.exports = function() {
  this.Before("@cognitoidentity", function (callback) {
    this.service = new this.AWS.CognitoIdentity();
    callback();
  });

  this.Given(/^I create a Cognito identity pool with prefix "([^"]*)"$/, function (prefix, callback) {
    var expectError = prefix === "" ? false : undefined;
    var params = {IdentityPoolName: this.uniqueName(prefix, ''), AllowUnauthenticatedIdentities: true};
    this.request(null, 'createIdentityPool', params, callback, expectError);
  });

  this.Given(/^I describe the Cognito identity pool ID$/, function (callback) {
    this.identityPoolId = this.data.IdentityPoolId;
    this.request(null, 'describeIdentityPool', {IdentityPoolId: this.data.IdentityPoolId}, callback);
  });

  this.Then(/^I delete the Cognito identity pool$/, function (callback) {
    this.request(null, 'deleteIdentityPool', {IdentityPoolId: this.identityPoolId}, callback);
  });
};
