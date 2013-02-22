/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

module.exports = function() {
  this.Before("@simpledb", function (callback) {
    this.client = new this.AWS.SimpleDB.Client();
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
