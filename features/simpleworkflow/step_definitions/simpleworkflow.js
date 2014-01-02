module.exports = function() {
  this.Before("@simpleworkflow", function (callback) {
    this.service = new this.AWS.SimpleWorkflow.Client();
    callback();
  });

  this.Given(/^I register a SimpleWorkFlow domain with prefix "([^"]*)"$/, function(prefix, callback) {
    this.swfDomain = prefix + '-' + new Date().getTime();
    var params = {name:this.swfDomain, workflowExecutionRetentionPeriodInDays:'7'};
    this.request(null, 'registerDomain', params, callback);
  });

  this.Given(/^I list SimpleWorkFlow domains with status "([^"]*)"$/, function(status, callback) {
    this.request(null, 'listDomains', {registrationStatus: status}, callback);
  });

  this.Then(/^the SimpleWorkFlow domain should be in the list$/, function(callback) {
    var items = {};
    this.data.domainInfos.forEach(function (info) {
      items[info.name] = info;
    });
    this.assert.ok(items[this.swfDomain]);
    callback();
  });

  this.Then(/^I delete the SimpleWorkFlow domain$/, function(callback) {
    this.request(null, 'deprecateDomain', {name: this.swfDomain}, callback);
  });

  this.Given(/^I try to create a SimpleWorkFlowDomain with an empty name$/, function(callback) {
    var params = {name: '', workflowExecutionRetentionPeriodInDays:'7'};
    this.request(null, 'registerDomain', params, callback, false);
  });
};
