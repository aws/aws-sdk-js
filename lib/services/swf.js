var AWS = require('../core');

module.exports = function addReferenceTo(SWF) {
  AWS.util.hideProperties(AWS, ['SimpleWorkflow']);

  /**
   * @constant
   * @readonly
   * Backwards compatibility for access to the {AWS.SWF} service class.
   */
  Object.defineProperty(AWS, 'SimpleWorkflow', {
    get: function get() {
      return SWF;
    },
    enumerable: false,
    configurable: true
  });
};