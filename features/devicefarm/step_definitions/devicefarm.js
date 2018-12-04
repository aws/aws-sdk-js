module.exports = function() {
  this.Before('@devicefarm', function (callback) {
    this.service = new this.AWS.DeviceFarm({region: 'us-west-2'});
    callback();
  });

  // Add step definitions
};
