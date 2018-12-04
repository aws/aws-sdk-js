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

};
