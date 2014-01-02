module.exports = function() {
  this.Given(/^I create a CloudFront distribution with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.cfName = this.uniqueName(prefix);
    this.cfCreateParams.CallerReference = this.cfName;
    this.cfCreateParams.Origins.Items[0].Id = (this.cfName === '' ? 'origin' : 'InvalidOrigin');
    this.request(null, 'createDistribution', { DistributionConfig: this.cfCreateParams }, callback, false);
  });

  this.Given(/^I list CloudFront distributions$/, function(callback) {
    this.request(null, 'listDistributions', {}, callback);
  });

  this.Then(/^the result should contain a property (\w+) with an? (\w+)$/, function(property, type, callback) {
    if (type === 'Array' || type === 'Date') {
      this.assert.equal(this.AWS.util.isType(this.data[property], type), true);
    } else {
      this.assert.equal(typeof this.data[property], type);
    }
    callback();
  });
};
