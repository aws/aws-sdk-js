(function() {
  var AWS;

  if (typeof window === 'undefined') {
    AWS = require('../lib/aws_core_loader');
  } else {
    AWS = window.AWS;
  }

  describe('Loading only core and util, no services', function() {
    describe('AWS.Endpoint', function() {
      it('can construct', function() {
        const endpoint = new AWS.Endpoint('http://localhost');
        return expect(endpoint.host).to.equal('localhost');
      });
    });
  });

}).call(this);
