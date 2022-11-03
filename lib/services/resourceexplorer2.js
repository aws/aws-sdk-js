var AWS = require('../core');

AWS.util.update(AWS.ResourceExplorer2.prototype, {
  validateService: function () {
    var config = this.config;
    if (config.useDualStackEndpoint === false || config.useDualStack === false) {
      throw new Error('Resource Explorer 2 only supports DualStack');
    }
    config.useDualStackEndpoint = true;
    config.useDualStack = true;
  }
});
