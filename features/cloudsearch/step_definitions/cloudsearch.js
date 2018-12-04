module.exports = function() {
  this.Before("@cloudsearch", function (callback) {
    this.service = new this.AWS.CloudSearch();
    callback();
  });

  this.Given(/^I create a domain with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.domainName = this.uniqueName(prefix);
    this.request(null, 'createDomain', {DomainName: this.domainName}, callback, false);
  });
};
