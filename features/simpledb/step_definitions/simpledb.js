module.exports = function() {
  this.Before("@simpledb", function (callback) {
    this.service = new this.AWS.SimpleDB.Client();
    this.domainName = 'aws-sdk-js-integration-' + new Date().getTime();
    callback();
  });

  this.Given(/^I create a SimpleDB domain$/, function(callback) {
    this.request(null, 'createDomain', {DomainName: this.domainName}, callback);
  });

  this.Given(/^I put an item "([^"]*)" with attributes:$/, function(item, string, callback) {
    this.item = {Name: item, Attributes: JSON.parse(string)};
    var params = {DomainName: this.domainName, ItemName: item, Attributes: this.item.Attributes};
    this.request(null, 'putAttributes', params, callback);
  });

  this.Given(/^I get the item "([^"]*)"$/, function(item, callback) {
    var params = {DomainName: this.domainName, ItemName: item, ConsistentRead: true};
    this.request(null, 'getAttributes', params, callback);
  });

  this.Given(/^I select "([^"]*)" from the domain$/, function(expr, callback) {
    var params = {SelectExpression: 'SELECT ' + expr + ' FROM `' + this.domainName + '`', ConsistentRead: true};
    this.request(null, 'select', params, callback);
  });

  this.Then(/^the select result should contain the item$/, function(callback) {
    this.assert.deepEqual(this.data.Items, [this.item]);
    callback();
  });

  this.Then(/^the result should have attribute "([^"]*)" with "([^"]*)"$/, function(name, value, callback) {
    this.assert.equal(this.data.Attributes[0].Name, name);
    this.assert.equal(this.data.Attributes[0].Value, value);
    callback();
  });

  this.Then(/^I delete the domain$/, function(callback) {
    this.request(null, 'deleteDomain', {DomainName: this.domainName}, callback);
  });

  this.Given(/^I create a domain with no name$/, function(callback) {
    this.request(null, 'createDomain', {DomainName: ''}, callback, false);
  });
};
