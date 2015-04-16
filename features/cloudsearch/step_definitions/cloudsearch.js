module.exports = function() {
  this.Before("@cloudsearch", function (callback) {
    this.service = new this.AWS.CloudSearch();
    callback();
  });

  this.Given(/^I create a domain with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.domainName = this.uniqueName(prefix);
    this.request(null, 'createDomain', {DomainName: this.domainName}, callback, false);
  });

  this.Given(/^I define a CloudSearch index field$/, function(callback) {
    var params = {
      DomainName: this.domainName,
      IndexField: {
        IndexFieldName: 'fieldname',
        IndexFieldType: 'text'
      }
    };
    this.request(null, 'defineIndexField', params, callback);
  });

  this.Then(/^DomainStatus should show that Created is true$/, function(callback) {
    this.assert.equal(this.data.DomainStatus.Created, true);
    callback();
  });
};
