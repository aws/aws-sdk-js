module.exports = function() {
  this.Before("@cloudhsm", function (callback) {
    this.service = new this.AWS.CloudHSM();
    callback();
  });

  // Add step definitions
};
