module.exports = function() {
  this.Before("@acm", function (callback) {
    this.service = new this.AWS.ACM();
    callback();
  });

  // Add step definitions
};
