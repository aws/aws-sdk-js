module.exports = function() {
  this.Before("@datapipeline", function (callback) {
    this.service = new this.AWS.DataPipeline();
    callback();
  });

  var sortObjects = function sortObjects(objects) {
    this.AWS.util.arrayEach(objects, function(item) {
      item.fields.sort(function (field1, field2) {
        return field1.key < field2.key ? -1 : 1;
      });
    });
  };

  this.Given(/^I create a Data Pipeline with name prefix "([^"]*)"$/, function(prefix, callback) {
    var params = {
      name: this.uniqueName(prefix), uniqueId: this.uniqueName('aws-js-sdk')
    };
    this.request(null, 'createPipeline', params, callback, false);
  });
};
