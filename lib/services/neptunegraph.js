var AWS = require('../core');

if (AWS.NeptuneGraph) {
  AWS.util.update(AWS.NeptuneGraph.prototype, {
  /**
   * @api private
   */
    validateService: function validateService() {
      var msg = 'AWS Neptune Graph is not available in the AWS SDK for JavaScript v2, consider using the AWS SDK for JavaScript v3: https://www.npmjs.com/package/@aws-sdk/client-neptune-graph';
      throw AWS.util.error(new Error(),
        {name: 'ServiceExcludedFromV2', message: msg});
    },
  });
};
