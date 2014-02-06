module.exports = function() {
  this.Before("@ses", function (callback) {
    this.service = new this.AWS.SES();
    callback();
  });

  this.When(/^I check quota$/, function(next) {
    this.request(null, 'getSendQuota', {}, next);
  });

  this.Then(/^the result should include (\S+) "([^"]*)"$/, function(type, attr, next) {
    if (this.data[attr] === undefined) next.fail("Missing " + attr);
    if (typeof this.data[attr] !== type) next.fail("Incorrect type " + attr);
    next();
  });

  this.When(/^I ask to verify the email address "([^"]*)"$/, function(email, next) {
    this.request(null, 'verifyEmailAddress', {EmailAddress: email}, next, function() {
      // do nothing
    });
  });
};
