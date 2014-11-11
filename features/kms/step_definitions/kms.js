module.exports = function() {
  this.Before("@kms", function (callback) {
    this.service = new this.AWS.KMS();
    callback();
  });

  // Add step definitions
};
