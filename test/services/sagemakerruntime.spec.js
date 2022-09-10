(function () {
  const helpers = require('../helpers');
  const { AWS, spyOn } = helpers;

  return describe('SageMakerRuntime.invokeEndpointAsync', function () {
    it('should call api with an empty body', async () => {
      const httpClient = AWS.HttpClient.getInstance();
      spyOn(httpClient, 'handleRequest').andCallFake(function (
        httpReq,
        httpOp,
        cb,
        errCb
      ) {
        expect(httpReq.body).to.equal('');
        helpers.mockHttpSuccessfulResponse(
          200,
          {},
          JSON.stringify({ success: true }),
          cb
        );
      });
      await new AWS.SageMakerRuntime()
        .invokeEndpointAsync({
          InputLocation: 's3://mock',
          EndpointName: 'mock',
        })
        .promise();
    });
  });
}.call(this));
