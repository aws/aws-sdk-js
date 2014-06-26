var AWS = require('../core');

/**
 * Constructs a service interface object. Each API operation is exposed as a
 * function on service.
 *
 * ### Sending a Request Using CloudSearchDomain
 *
 * ```javascript
 * var csd = new AWS.CloudSearchDomain({endpoint: 'my.host.tld'});
 * csd.search(params, function (err, data) {
 *   if (err) console.log(err, err.stack); // an error occurred
 *   else     console.log(data);           // successful response
 * });
 * ```
 *
 * ### Locking the API Version
 *
 * In order to ensure that the CloudSearchDomain object uses this specific API,
 * you can construct the object by passing the `apiVersion` option to the
 * constructor:
 *
 * ```javascript
 * var csd = new AWS.CloudSearchDomain({
 *   endpoint: 'my.host.tld',
 *   apiVersion: '2013-01-01'
 * });
 * ```
 *
 * You can also set the API version globally in `AWS.config.apiVersions` using
 * the **cloudsearchdomain** service identifier:
 *
 * ```javascript
 * AWS.config.apiVersions = {
 *   cloudsearchdomain: '2013-01-01',
 *   // other service API versions
 * };
 *
 * var csd = new AWS.CloudSearchDomain({endpoint: 'my.host.tld'});
 * ```
 *
 * @note You *must* provide an `endpoint` configuration parameter when
 *   constructing this service. See {constructor} for more information.
 *
 * @!method constructor(options = {})
 *   Constructs a service object. This object has one method for each
 *   API operation.
 *
 *   @example Constructing a CloudSearchDomain object
 *     var csd = new AWS.CloudSearchDomain({endpoint: 'my.host.tld'});
 *   @note You *must* provide an `endpoint` when constructing this service.
 *   @option (see AWS.Config.constructor)
 *
 * @service cloudsearchdomain
 * @version 2013-01-01
 */
AWS.util.update(AWS.CloudSearchDomain.prototype, {
  /**
   * @api private
   */
  validateService: function validateService() {
    if (!this.config.endpoint || this.config.endpoint.indexOf('{') >= 0) {
      var msg = 'AWS.CloudSearchDomain requires an explicit ' +
                '`endpoint\' configuration option.';
      throw AWS.util.error(new Error(),
        {name: 'InvalidEndpoint', message: msg});
    }
  }
});
