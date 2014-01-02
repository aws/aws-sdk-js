module.exports = function() {
  this.Before("@elasticache", function (callback) {
    this.service = new this.AWS.ElastiCache.Client();
    callback();
  });

  this.Given(/^I create a ElastiCache security group with prefix name "([^"]*)"$/, function(prefix, callback) {
    this.cacheGroupName = this.uniqueName(prefix);
    var params = { Description: 'Description', CacheSecurityGroupName: this.cacheGroupName };
    this.request(null, 'createCacheSecurityGroup', params, callback, false);
  });

  this.Given(/^the ElastiCache security group name is in the result$/, function(callback) {
    var name = this.data.CacheSecurityGroupName;
    this.assert.equal(name, this.cacheGroupName);
    callback();
  });

  this.Given(/^I describe the ElastiCache security group$/, function(callback) {
    var params = {CacheSecurityGroupName: this.cacheGroupName};
    this.request(null, 'describeCacheSecurityGroups', params, callback);
  });

  this.Then(/^the ElastiCache security group should be described$/, function(callback) {
    var item = this.data.CacheSecurityGroups[0];
    this.assert.equal(item.CacheSecurityGroupName, this.cacheGroupName);
    callback();
  });

  this.Then(/^I delete the ElastiCache security group$/, function(callback) {
    var params = {CacheSecurityGroupName: this.cacheGroupName};
    this.request(null, 'deleteCacheSecurityGroup', params, callback);
  });
};
