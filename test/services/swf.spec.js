(function() {
  var AWS, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  describe('AWS.SWF', function() {
    return it('is also AWS.SimpleWorkflow', function() {
      return expect(AWS.SWF).to.equal(AWS.SimpleWorkflow);
    });
  });

}).call(this);
