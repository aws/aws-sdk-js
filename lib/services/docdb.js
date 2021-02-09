var AWS = require('../core');
var rdsutil = require('./rdsutil');

/**
* @api private
*/
var crossRegionOperations = ['createDBCluster', 'copyDBClusterSnapshot'];

AWS.util.update(AWS.DocDB.prototype, {
  /**
  * @api private
  */
  setupRequestListeners: function setupRequestListeners(request) {
    rdsutil.setupRequestListeners(this, request, crossRegionOperations);
  },
});
