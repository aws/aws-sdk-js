module.exports = function() {
  this.Before('@codecommit', function (callback) {
    this.service = new this.AWS.CodeCommit({region: 'us-east-1'});
    callback();
  });

  // Add step definitions
};
