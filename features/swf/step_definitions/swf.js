module.exports = function() {
  this.Before('@swf', function (callback) {
    this.service = new this.AWS.SWF();
    callback();
  });
};
