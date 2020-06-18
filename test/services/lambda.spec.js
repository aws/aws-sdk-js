var helpers = require('../helpers');
var AWS = helpers.AWS;
var Buffer = AWS.util.Buffer;

describe('AWS.IotData', function() {
  describe('invoke', function() {
    it('converts the body to a string', function(done) {
      var client = new AWS.Lambda();
      var payload = JSON.stringify({foo: 'bar', fizz: ['buzz', 'pop']});
      var body = AWS.util.buffer.toBuffer(payload);
      helpers.mockHttpResponse(200, {}, body);
      client.invoke({FunctionName: 'function'}, function(err, data) {
        expect(Buffer.isBuffer(data.Payload)).to.be.false;
        expect(data.Payload).to.eql(payload);
        done();
      });
    });
  });
});
