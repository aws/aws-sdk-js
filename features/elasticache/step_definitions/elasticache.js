module.exports = function() {
  this.Before("@elasticache", function (callback) {
    this.service = new this.AWS.ElastiCache();
    callback();
  });

  this.Given(/^I create a cache parameter group with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.cacheGroupName = this.uniqueName(prefix);
    var params = {
      Description: 'Description',
      CacheParameterGroupName: this.cacheGroupName,
      CacheParameterGroupFamily: 'memcached1.4'
    };
    this.request(null, 'createCacheParameterGroup', params, callback, false);
  });

  this.Given(/^the cache parameter group name is in the result$/, function(callback) {
    var name = this.data.CacheParameterGroup.CacheParameterGroupName;
    this.assert.equal(name, this.cacheGroupName);
    callback();
  });

  this.Given(/^I describe the cache parameter groups$/, function(callback) {
    var params = {CacheParameterGroupName: this.cacheGroupName};
    this.request(null, 'describeCacheParameterGroups', params, callback);
  });

  this.Then(/^the cache parameter group should be described$/, function(callback) {
    var item = this.data.CacheParameterGroups[0];
    this.assert.equal(item.CacheParameterGroupName, this.cacheGroupName);
    callback();
  });

  this.Then(/^I delete the cache parameter group$/, function(callback) {
    var params = {CacheParameterGroupName: this.cacheGroupName};
    this.request(null, 'deleteCacheParameterGroup', params, callback);
  });
};
