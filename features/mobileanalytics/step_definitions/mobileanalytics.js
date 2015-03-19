module.exports = function() {
  this.Before("@mobileanalytics", function (callback) {
    this.service = new this.AWS.MobileAnalytics();
    callback();
  });

  // Add step definitions
};
