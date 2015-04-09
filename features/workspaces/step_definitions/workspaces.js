module.exports = function() {
  this.Before("@workspaces", function (callback) {
    this.service = new this.AWS.WorkSpaces();
    callback();
  });

  // Add step definitions
};
