/**
 * Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

var AWS = require('./core');
var inherit = AWS.util.inherit;

/**
 * The main configuration class used by all service objects to set
 * the region, credentials, and other options for requests.
 *
 * By default, credentials and region settings are left unconfigured.
 * This should be configured by the application before using any
 * AWS service APIs.
 *
 * In order to set global configuration options, properties should
 * be assigned to the global {AWS.config} object.
 *
 * @see AWS.config
 *
 * @!attribute credentials
 *   @return [AWS.Credentials] the AWS credentials to sign requests with.
 *
 * @!attribute region
 *   @example Set the global region setting to us-west-2
 *     AWS.config.update({region: 'us-west-2'});
 *   @return [AWS.Credentials] The region to send service requests to.
 *   @see http://docs.amazonwebservices.com/general/latest/gr/rande.html
 *     A list of available endpoints for each AWS service
 *
 * @!attribute maxRetries
 *   @return [Integer] the maximum amount of retries to perform for a
 *     service request. By default this value is calculated by the specific
 *     service object that the request is being made to.
 *
 * @!attribute sslEnabled
 *   @return [Boolean] whether SSL is enabled for requests
 *
 * @!attribute s3ForcePathStyle
 *   @return [Boolean] whether to force path style URLs for S3 objects
 */
AWS.Config = inherit({

  /**
   * Creates a new configuration object. This is the object that passes
   * option data along to service requests, including credentials, security,
   * region information, and some service specific settings.
   *
   * @example Creating a new configuration object with credentials and region
   *   var config = new AWS.Config({
   *     accessKeyId: 'AKID', secretAccessKey: 'SECRET', region: 'us-west-2'
   *   });
   * @option options accessKeyId [String] your AWS access key ID.
   * @option options secretAccessKey [String] your AWS secret access key.
   * @option options sessionToken [AWS.Credentials] the optional AWS
   *   session token to sign requests with.
   * @option options credentials [AWS.Credentials] the AWS credentials
   *   to sign requests with. You can either specify this object, or
   *   specify the accessKeyId and secretAccessKey options directly.
   * @option options region [String] the region to send service requests to.
   *   See {region} for more information.
   * @option options maxRetries [Integer] the maximum amount of retries to
   *   attempt with a request. See {maxRetries} for more information.
   * @option options sslEnabled [Boolean] whether to enable SSL for
   *   requests.
   * @option options s3ForcePathStyle [Booelan] whether to force path
   *   style URLs for S3 objects.
   */
  constructor: function Config(options) {
    if (options === undefined) options = {};
    options = this.extractCredentials(options);

    AWS.util.each.call(this, this.keys, function (key, value) {
      this.set(key, options[key], value);
    });
  },

  /**
   * Updates the current configuration object with new options.
   *
   * @example Update maxRetries property of a configuration object
   *   config.update({maxRetries: 10});
   * @param [Object] options a map of option keys and values.
   * @see constructor
   */
  update: function update(options) {
    options = this.extractCredentials(options);
    AWS.util.each.call(this, options, function (key, value) {
      if (this.keys.hasOwnProperty(key)) this[key] = value;
    });
  },

  /**
   * Loads configuration data from a JSON file into this config object.
   * @note Loading configuration will reset all existing configuration
   *   on the object.
   * @param path [String] the path to load configuration from
   * @return [AWS.Config] the same configuration object
   */
  loadFromPath: function loadFromPath(path) {
    this.clear();

    var options = JSON.parse(AWS.util.readFileSync(path));
    var fileSystemCreds = new AWS.FileSystemCredentials(path, this);
    var chain = new AWS.CredentialProviderChain();
    chain.providers.unshift(fileSystemCreds);
    options.credentials = chain.resolve();

    this.constructor(options);

    return this;
  },

  /**
   * Clears configuration data on this object
   *
   * @api private
   */
  clear: function clear() {
    /*jshint forin:false */
    AWS.util.each.call(this, this.keys, function (key) {
      delete this[key];
    });

    // reset credential provider
    this.set('credentials', undefined);
  },

  /**
   * Sets a property on the configuration object, allowing for a
   * default value
   * @api private
   */
  set: function set(property, value, defaultValue) {
    if (value === undefined) {
      if (defaultValue === undefined) {
        defaultValue = this.keys[property];
      }
      if (defaultValue instanceof Function) {
        this[property] = defaultValue.call(this);
      } else {
        this[property] = defaultValue;
      }
    } else {
      this[property] = value;
    }
  },

  /**
   * All of the keys with their default values.
   *
   * @constant
   * @api private
   */
  keys: {
    credentials: function () {
      return new AWS.CredentialProviderChain().resolve();
    },
    region: undefined,
    maxRetries: undefined,
    sslEnabled: true,
    s3ForcePathStyle: false
  },

  /**
   * Extracts accessKeyId, secretAccessKey and sessionToken
   * from a configuration hash.
   *
   * @api private
   */
  extractCredentials: function extractCredentials(options) {
    if (options.accessKeyId && options.secretAccessKey) {
      options = AWS.util.copy(options);
      options.credentials = new AWS.Credentials(options);
    }
    return options;
  }
});

/**
 * Represents your AWS security credentials, specifically the
 * {accessKeyId}, {secretAccessKey}, and optional {sessionToken}.
 * Creating a +Credentials+ object allows you to pass around your
 * security information to configuration and service objects.
 *
 * Note that this class typically does not need to be constructed manually,
 * as the {AWS.Config} and {AWS.Client} classes both accept simple
 * options hashes with the three keys. These structures will be converted
 * into Credentials objects automatically.
 *
 * == Expiring and Refreshing Credentials
 *
 * Occasionally credentials can expire in the middle of a long-running
 * application. In this case, the SDK will automatically attempt to
 * refresh the credentials from the storage location if the Credentials
 * class implements the {refresh} method.
 *
 * If you are implementing a credential storage location, you
 * will want to create a subclass of the +Credentials+ class and
 * override the {refresh} method. This method allows credentials to be
 * retrieved from the backing store, be it a file system, database, or
 * some network storage. The method should reset the credential attributes
 * on the object.
 *
 * @!attribute accessKeyId
 *   @return [String] the AWS access key ID
 * @!attribute secretAccessKey
 *   @return [String] the AWS secret access key
 * @!attribute sessionToken
 *   @return [String] an optional AWS session token
 */
AWS.Credentials = inherit({

  /**
   * A credentials object can be created using positional arguments or an options
   * hash.
   *
   * @overload AWS.Credentials(accessKeyId, secretAccessKey, sessionToken=null)
   *   Creates a Credentials object with a given set of credential information
   *   as positional arguments.
   *   @param accessKeyId [String] the AWS access key ID
   *   @param secretAccessKey [String] the AWS secret access key
   *   @param sessionToken [String] the optional AWS session token
   *   @example Create a credentials object with AWS credentials
   *     var creds = new AWS.Credentials('akid', 'secret', 'session');
   * @overload AWS.Credentials(options)
   *   Creates a Credentials object with a given set of credential information
   *   as an options hash.
   *   @option options accessKeyId [String] the AWS access key ID
   *   @option options secretAccessKey [String] the AWS secret access key
   *   @option options sessionToken [String] the optional AWS session token
   *   @example Create a credentials object with AWS credentials
   *     var creds = new AWS.Credentials({
   *       accessKeyId: 'akid', secretAccessKey: 'secret', sessionToken: 'session'
   *     });
   */
  constructor: function Credentials() {
    if (arguments.length == 1 && typeof arguments[0] === 'object') {
      var creds = arguments[0].credentials || arguments[0];
      this.accessKeyId = creds.accessKeyId;
      this.secretAccessKey = creds.secretAccessKey;
      this.sessionToken = creds.sessionToken;
    } else {
      this.accessKeyId = arguments[0];
      this.secretAccessKey = arguments[1];
      this.sessionToken = arguments[2];
    }
  },

  /**
   * Refreshes the credentials.
   *
   * @note Subclasses should override this class to reset the
   *   {accessKeyId}, {secretAccessKey} and optional {sessionToken}
   *   on the credentials object.
   */
  refresh: function refresh() { }

});

AWS.FileSystemCredentials = inherit(AWS.Credentials, {

  constructor: function FileSystemCredentials(filename, initialCredentials) {
    this.filename = filename;
    AWS.Credentials.call(this, initialCredentials);
    if (!this.accessKeyId) this.refresh();
  },

  refresh: function refresh() {
    AWS.Credentials.call(this, JSON.parse(AWS.util.readFileSync(this.filename)));
  }

});

AWS.EnvironmentCredentials = inherit(AWS.Credentials, {

  constructor: function EnvironmentCredentials(envPrefix) {
    this.envPrefix = envPrefix;
    this.refresh();
  },

  refresh: function refresh() {
    if (process === undefined) return;

    var keys = ['ACCESS_KEY_ID', 'SECRET_ACCESS_KEY', 'SESSION_TOKEN'];
    var values = [];

    /*jshint forin:false*/
    for (var i in keys) {
      var prefix = '';
      if (this.envPrefix) prefix = this.envPrefix + '_';
      values[i] = process.env[prefix + keys[i]];
    }

    AWS.Credentials.apply(this, values);
  }

});

AWS.CredentialProviderChain = inherit({

  constructor: function CredentialProviderChain() {
    this.providers = AWS.CredentialProviderChain.defaultProviders.slice(0);
  },

  resolve: function resolve() {
    var finalCreds;
    AWS.util.arrayEach(this.providers, function (provider) {
      var creds;
      if (provider instanceof Function) {
        creds = provider.call();
      } else {
        creds = provider;
      }

      if (creds.accessKeyId) {
        finalCreds = creds;
        return AWS.util.abort;
      }
    });
    return finalCreds ? finalCreds : new AWS.Credentials();
  }

});

AWS.CredentialProviderChain.defaultProviders = [
  function () { return new AWS.EnvironmentCredentials('AWS'); },
  function () { return new AWS.EnvironmentCredentials('AMAZON'); }
];

/**
 * @return [AWS.Config] The global configuration object singleton instance
 * @readonly
 */
AWS.config = new AWS.Config();
