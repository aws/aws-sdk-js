module.exports = function() {
  this.Before("@cognitosync", function (callback) {
    this.service = new this.AWS.CognitoSync();
    callback();
  });

  this.Given(/^I list Cognito identity pool usage$/, function (callback) {
    this.request(null, 'listIdentityPoolUsage', {}, callback);
  });

  this.Given(/^I list Cognito data sets with identity pool id "([^"]*)" and identity id "([^"]*)"$/, function (idpid, idid, callback) {
    var params = {IdentityPoolId: idpid, IdentityId: idid};
    this.request(null, 'listDatasets', params, callback, false);
  });
};
