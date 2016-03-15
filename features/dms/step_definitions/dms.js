module.exports = function() {
  this.Before("@dms", function (callback) {
    this.service = new this.AWS.DMS();
    callback();
  });

  // Add step definitions
};
