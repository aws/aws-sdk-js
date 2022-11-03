var AWS = require('../core');

AWS.util.update(AWS.ResourceExplorer2.prototype, {
  validateService: function () {
    var config = this.config;
    if (config.useDualstackEndpoint === false || config.useDualstack === false) {
      throw new Error('Resource Explorer 2 only supports Dualstack');
    }
    config.useDualstackEndpoint = true;
    config.useDualstack = true;
  }
});
