module.exports = function() {
  this.Before("@ecs", function (callback) {
    this.service = new this.AWS.ECS({region: 'us-east-1'});
    callback();
  });

  // Add step definitions
};
