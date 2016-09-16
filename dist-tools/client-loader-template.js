require('../lib/node_loader');
var AWS = require('../lib/core');

/*eachService*/
var $serviceName = null;
Object.defineProperty(AWS, '$className', {
  get: function get() {
    return $serviceName || require('./$serviceName');
  },
  set: function set(svc) {
    $serviceName = svc;
  },
  enumerable: true,
  configurable: true
});
/*eachService*//**/

module.exports = AWS;
