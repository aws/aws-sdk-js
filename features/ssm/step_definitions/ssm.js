module.exports = function() {
  this.Before("@ssm", function (callback) {
    this.service = new this.AWS.SSM();
    callback();
  });

  // Add step definitions
};
