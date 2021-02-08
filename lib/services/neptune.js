var AWS = require('../core');
var rdsutil = require('./rdsutil');
require('../rds/signer');
 /**
  * @api private
  */
 var crossRegionOperations = ['createDBCluster', 'copyDBClusterSnapshot'];

 AWS.util.update(AWS.Neptune.prototype, {
   /**
    * @api private
    */
   setupRequestListeners: function setupRequestListeners(request) {
    rdsutil.setupRequestListeners(this, request, crossRegionOperations);
   },
 });
