module.exports = function() {
  this.Before("@support", function (callback) {
    this.service = new this.AWS.Support();
    callback();
  });

  this.Given(/^I describe Support services$/, function(callback) {
    this.request(null, 'describeServices', {}, callback);
  });

  this.Then(/^the Supported services list should contain a service with code "([^"]*)"$/, function(code, callback) {
    this.assert.contains(this.data.services, function (svc) {
      return svc.code == code;
    });
    callback();
  });

  this.Then(/^the Supported services list should contain a service with name "([^"]*)"$/, function(name, callback) {
    this.assert.contains(this.data.services, function (svc) {
      return svc.name == name;
    });
    callback();
  });

  this.Given(/^I create a case with an invalid category$/, function(callback) {
    var params = {
      subject: "Subject",
      serviceCode: "INVALID-CODE",
      categoryCode: "INVALID-CATEGORY",
      communicationBody: "Communication"
    };

    this.request(null, 'createCase', params, callback, false);
  });
};
