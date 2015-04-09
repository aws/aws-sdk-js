module.exports = function() {
  this.Before("@machinelearning", function (callback) {
    this.service = new this.AWS.MachineLearning();
    callback();
  });

  // Add step definitions
};
