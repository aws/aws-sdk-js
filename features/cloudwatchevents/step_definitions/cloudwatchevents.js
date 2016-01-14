module.exports = function() {
  this.Before("@cloudwatchevents", function (callback) {
    this.service = new this.AWS.CloudWatchEvents();
    callback();
  });

  // Add step definitions
};
