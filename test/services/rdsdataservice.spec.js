var AWS, helpers;

helpers = require('../helpers');

AWS = helpers.AWS;

describe('AWS.RDSDataService', function() {
  var service;
  beforeEach(function() {
    service = new AWS.RDSDataService();
  });
  return describe('retryableError', function() {
    it('retryableError returns true for Communications link failure errors', function() {
      var err;
      err = {
        message: 'Communications link failure\n' +
          '\n' +
          'The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.',
        code: 'BadRequestException',
        statusCode: 400
      };
      return expect(service.retryableError(err)).to.be['true'];
    });
    return it('retryableError returns false for other 400 errors', function() {
      var err;
      err = {
        code: 'SomeErrorCode',
        statusCode: 400
      };
      return expect(service.retryableError(err)).to.be['false'];
    });
  });
});
