module.exports = function() {
  this.Before("@swf", function (callback) {
    this.service = new this.AWS.SWF();
    callback();
  });

  this.Given(/^I register a SWF domain with prefix "([^"]*)"$/, function(prefix, callback) {
    this.swfDomain = prefix + '-' + new Date().getTime();
    var params = {name:this.swfDomain, workflowExecutionRetentionPeriodInDays:'7'};
    this.request(null, 'registerDomain', params, callback, false);
  });

  this.Given(/^I list SWF domains with status "([^"]*)"$/, function(status, callback) {
    if (this.error.name === 'LimitExceededFault') return callback();
    this.request(null, 'listDomains', {registrationStatus: status}, callback);
  });

  this.Then(/^the SWF domain should be in the list$/, function(callback) {
    if (this.error.name === 'LimitExceededFault') return callback();

    var items = {};
    this.data.domainInfos.forEach(function (info) {
      items[info.name] = info;
    });
    this.assert.ok(items[this.swfDomain]);
    callback();
  });

  this.Then(/^I delete the SWF domain$/, function(callback) {
    if (this.error.name === 'LimitExceededFault') return callback();
    this.request(null, 'deprecateDomain', {name: this.swfDomain}, callback);
  });

  this.Given(/^I try to create a SWF domain with an empty name$/, function(callback) {
    var params = {name: '', workflowExecutionRetentionPeriodInDays:'7'};
    this.request(null, 'registerDomain', params, callback, false);
  });
};
