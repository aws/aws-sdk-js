module.exports = function() {
  this.Before("@lambda", function (callback) {
    this.service = new this.AWS.Lambda();
    callback();
  });

  // Add step definitions
};
