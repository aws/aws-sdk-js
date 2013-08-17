;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  require("./test/config.spec.coffee");

  require("./test/credential_provider_chain.spec.coffee");

  require("./test/credentials.spec.coffee");

  require("./test/endpoint.spec.coffee");

  require("./test/event_listeners.spec.coffee");

  require("./test/helpers.coffee");

  require("./test/http_request.spec.coffee");

  require("./test/json/builder.spec.coffee");

  require("./test/metadata_service.spec.coffee");

  require("./test/node_http_client.spec.coffee");

  require("./test/param_validator.spec.coffee");

  require("./test/request.spec.coffee");

  require("./test/response.spec.coffee");

  require("./test/sequential_executor.spec.coffee");

  require("./test/service.spec.coffee");

  require("./test/service_interface/json.spec.coffee");

  require("./test/service_interface/query.spec.coffee");

  require("./test/service_interface/query_param_serializer.spec.coffee");

  require("./test/service_interface/rest.spec.coffee");

  require("./test/service_interface/rest_json.spec.coffee");

  require("./test/service_interface/rest_xml.spec.coffee");

  require("./test/services/cloudfront.spec.coffee");

  require("./test/services/dynamodb.spec.coffee");

  require("./test/services/ec2.spec.coffee");

  require("./test/services/elastictranscoder.spec.coffee");

  require("./test/services/glacier.spec.coffee");

  require("./test/services/route53.spec.coffee");

  require("./test/services/s3.spec.coffee");

  require("./test/services/simpledb.spec.coffee");

  require("./test/services/sqs.spec.coffee");

  require("./test/signers/s3.spec.coffee");

  require("./test/signers/v2.spec.coffee");

  require("./test/signers/v4.spec.coffee");

  require("./test/util.spec.coffee");

  require("./test/xml/builder.spec.coffee");

  require("./test/xml/parser.spec.coffee");

}).call(this);

},{"./test/config.spec.coffee":88,"./test/credential_provider_chain.spec.coffee":89,"./test/credentials.spec.coffee":90,"./test/endpoint.spec.coffee":91,"./test/event_listeners.spec.coffee":92,"./test/helpers.coffee":93,"./test/http_request.spec.coffee":94,"./test/json/builder.spec.coffee":95,"./test/metadata_service.spec.coffee":96,"./test/node_http_client.spec.coffee":97,"./test/param_validator.spec.coffee":98,"./test/request.spec.coffee":99,"./test/response.spec.coffee":100,"./test/sequential_executor.spec.coffee":101,"./test/service.spec.coffee":102,"./test/service_interface/json.spec.coffee":103,"./test/service_interface/query.spec.coffee":104,"./test/service_interface/query_param_serializer.spec.coffee":105,"./test/service_interface/rest.spec.coffee":106,"./test/service_interface/rest_json.spec.coffee":107,"./test/service_interface/rest_xml.spec.coffee":108,"./test/services/cloudfront.spec.coffee":109,"./test/services/dynamodb.spec.coffee":110,"./test/services/ec2.spec.coffee":111,"./test/services/elastictranscoder.spec.coffee":112,"./test/services/glacier.spec.coffee":113,"./test/services/route53.spec.coffee":114,"./test/services/s3.spec.coffee":115,"./test/services/simpledb.spec.coffee":116,"./test/services/sqs.spec.coffee":117,"./test/signers/s3.spec.coffee":118,"./test/signers/v2.spec.coffee":119,"./test/signers/v4.spec.coffee":120,"./test/util.spec.coffee":121,"./test/xml/builder.spec.coffee":122,"./test/xml/parser.spec.coffee":123}],2:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
module.exports = AWS;

require('./services/autoscaling');
require('./services/cloudformation');
require('./services/cloudfront');
require('./services/cloudsearch');
require('./services/cloudwatch');
require('./services/datapipeline');
require('./services/directconnect');
require('./services/dynamodb');
require('./services/ec2');
require('./services/elasticache');
require('./services/elasticbeanstalk');
require('./services/elastictranscoder');
require('./services/elb');
require('./services/emr');
require('./services/glacier');
require('./services/iam');
require('./services/importexport');
require('./services/opsworks');
require('./services/rds');
require('./services/redshift');
require('./services/route53');
require('./services/s3');
require('./services/ses');
require('./services/simpledb');
require('./services/simpleworkflow');
require('./services/sns');
require('./services/sqs');
require('./services/storagegateway');
require('./services/sts');
require('./services/support');

},{"./core":4,"./services/autoscaling":20,"./services/cloudformation":21,"./services/cloudfront":22,"./services/cloudsearch":23,"./services/cloudwatch":24,"./services/datapipeline":25,"./services/directconnect":26,"./services/dynamodb":27,"./services/ec2":28,"./services/elasticache":29,"./services/elasticbeanstalk":30,"./services/elastictranscoder":31,"./services/elb":32,"./services/emr":33,"./services/glacier":34,"./services/iam":35,"./services/importexport":36,"./services/opsworks":37,"./services/rds":38,"./services/redshift":39,"./services/route53":40,"./services/s3":41,"./services/ses":42,"./services/simpledb":43,"./services/simpleworkflow":44,"./services/sns":45,"./services/sqs":46,"./services/storagegateway":47,"./services/sts":48,"./services/support":49}],3:[function(require,module,exports){
var process=require("__browserify_process");/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
require('./event_listeners');
require('./sequential_executor');
require('./metadata_service');
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
 * @!attribute maxRedirects
 *   @return [Integer] the maximum amount of redirects to follow for a
 *     service request. Defaults to 10.
 *
 * @!attribute paramValidation
 *   @return [Boolean] whether input parameters should be validated against
 *     the operation description before sending the request. Defaults to true.
 *
 * @!attribute computeChecksums
 *   @return [Boolean] whether to compute checksums for payload bodies when
 *     the service accepts it (currently supported in S3 only).
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
   * @option options credentialProvider [AWS.CredentialProviderChain] the
   *   provider chain used to resolve credentials if no static `credentials`
   *   property is set.
   * @option options region [String] the region to send service requests to.
   *   See {region} for more information.
   * @option options maxRetries [Integer] the maximum amount of retries to
   *   attempt with a request. See {maxRetries} for more information.
   * @option options maxRedirects [Integer] the maximum amount of redirects to
   *   follow with a request. See {maxRedirects} for more information.
   * @option options sslEnabled [Boolean] whether to enable SSL for
   *   requests.
   * @option options paramValidation [Boolean] whether parameter validation
   *   is on.
   * @option options computeChecksums [Boolean] whether to compute checksums
   *   for payload bodies when the service accepts it (currently supported
   *   in S3 only)
   * @option options s3ForcePathStyle [Boolean] whether to force path
   *   style URLs for S3 objects.
   * @option options httpOptions [map] A set of options to pass to the low-level
   *   HTTP request. Currently supported options are:
   *
   *   * **proxy** [String] &mdash; the URL to proxy requests through
   *   * **agent** [http.Agent, https.Agent] &mdash; the Agent object to perform
   *     HTTP requests with. Used for connection pooling. Defaults to the global
   *     agent (`http.globalAgent`) for non-SSL connections. Note that for
   *     SSL connections, a special Agent object is used in order to enable
   *     peer certificate verification.
   *   * **timeout** [Integer] &mdash; The number of milliseconds to wait before
   *     giving up on a connection attempt. Defaults to no timeout.
   * @option options apiVersion [String, Date] a String in YYYY-MM-DD format
   *   (or a date) that represents the latest possible API version that can be
   *   used in all services (unless overridden by `apiVersions`). Specify
   *   'latest' to use the latest possible version.
   * @option options apiVersions [map<String, String|Date>] a map of service
   *   identifiers (the lowercase service class name) with the API version to
   *   use when instantiating a service. Specify 'latest' for each individual
   *   that can use the latest available version.
   */
  constructor: function Config(options) {
    if (options === undefined) options = {};
    options = this.extractCredentials(options);

    AWS.util.each.call(this, this.keys, function (key, value) {
      this.set(key, options[key], value);
    });
  },

  /**
   * @overload update(options, allowUnknownKeys = false)
   *   Updates the current configuration object with new options.
   *
   *   @example Update maxRetries property of a configuration object
   *     config.update({maxRetries: 10});
   *   @param [Object] options a map of option keys and values.
   *   @param [Boolean] allowUnknownKeys whether unknown keys can be set on
   *     the configuration object. Defaults to `false`.
   *   @see constructor
   */
  update: function update(options, allowUnknownKeys) {
    allowUnknownKeys = allowUnknownKeys || false;
    options = this.extractCredentials(options);
    AWS.util.each.call(this, options, function (key, value) {
      if (allowUnknownKeys || this.keys.hasOwnProperty(key)) this[key] = value;
    });
  },

  /**
   * @api private
   */
  getCredentials: function getCredentials(callback) {
    var self = this;

    function finish(err) {
      callback(err, err ? null : self.credentials);
    }

    function credError(msg, err) {
      return new AWS.util.error(err || new Error(), {
        code: 'CredentialsError', message: msg
      });
    }

    function getAsyncCredentials() {
      self.credentials.get(function(err) {
        if (err) {
          var msg = 'Could not load credentials from ' +
            self.credentials.constructor.name;
          err = credError(msg, err);
        }
        finish(err);
      });
    }

    function getStaticCredentials() {
      var err = null;
      if (!self.credentials.accessKeyId || !self.credentials.secretAccessKey) {
        err = credError('Missing credentials');
      }
      finish(err);
    }

    if (self.credentials) {
      if (typeof self.credentials.get === 'function') {
        getAsyncCredentials();
      } else { // static credentials
        getStaticCredentials();
      }
    } else if (self.credentialProvider) {
      self.credentialProvider.resolve(function(err, creds) {
        if (err) {
          err = credError('Could not load credentials from any providers', err);
        }
        self.credentials = creds;
        finish(err);
      });
    } else {
      finish(credError('No credentials to load'));
    }
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
    var fileSystemCreds = new AWS.FileSystemCredentials(path);
    var chain = new AWS.CredentialProviderChain();
    chain.providers.unshift(fileSystemCreds);
    chain.resolve(function (err, creds) {
      if (err) throw err;
      else options.credentials = creds;
    });

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
    this.set('credentialProvider', undefined);
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
      if (typeof defaultValue === 'function') {
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
      var credentials = null;
      new AWS.CredentialProviderChain([
        function () { return new AWS.EnvironmentCredentials('AWS'); },
        function () { return new AWS.EnvironmentCredentials('AMAZON'); }
      ]).resolve(function(err, creds) {
        if (!err) credentials = creds;
      });
      return credentials;
    },
    credentialProvider: function() {
      return new AWS.CredentialProviderChain([
        function() { return new AWS.EC2MetadataCredentials(); }
      ]);
    },
    region: function() {
      return process.env.AWS_REGION || process.env.AMAZON_REGION;
    },
    apiVersions: {},
    apiVersion: null,
    endpoint: undefined,
    httpOptions: {},
    maxRetries: undefined,
    maxRedirects: 10,
    paramValidation: true,
    sslEnabled: true,
    s3ForcePathStyle: false,
    computeChecksums: true,
    dynamoDbCrc32: true
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
 * Creating a `Credentials` object allows you to pass around your
 * security information to configuration and service objects.
 *
 * Note that this class typically does not need to be constructed manually,
 * as the {AWS.Config} and {AWS.Service} classes both accept simple
 * options hashes with the three keys. These structures will be converted
 * into Credentials objects automatically.
 *
 * ## Expiring and Refreshing Credentials
 *
 * Occasionally credentials can expire in the middle of a long-running
 * application. In this case, the SDK will automatically attempt to
 * refresh the credentials from the storage location if the Credentials
 * class implements the {refresh} method.
 *
 * If you are implementing a credential storage location, you
 * will want to create a subclass of the `Credentials` class and
 * override the {refresh} method. This method allows credentials to be
 * retrieved from the backing store, be it a file system, database, or
 * some network storage. The method should reset the credential attributes
 * on the object.
 *
 * @!attribute expired
 *   @return [Boolean] whether the credentials have been expired and
 *     require a refresh
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
    this.expired = false;
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
   * @return [Boolean] whether the credentials object should call {refresh}
   * @note Subclasses should override this method to provide custom refresh
   *   logic.
   */
  needsRefresh: function needsRefresh() {
    return this.expired || !this.accessKeyId || !this.secretAccessKey;
  },

  /**
   * Gets the existing credentials, refreshing them if they are not yet loaded
   * or have expired. Users should call this method before using {refresh},
   * as this will not attempt to reload credentials when they are already
   * loaded into the object.
   *
   * @callback callback function(err)
   *   Called when the instance metadata service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   */
  get: function get(callback) {
    var self = this;
    if (this.needsRefresh()) {
      this.refresh(function(err) {
        if (!err) self.expired = false; // reset expired flag
        callback(err);
      });
    } else {
      callback();
    }
  },

  /**
   * Refreshes the credentials. Users should call {get} before attempting
   * to forcibly refresh credentials.
   *
   * @callback callback function(err)
   *   Called when the instance metadata service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @note Subclasses should override this class to reset the
   *   {accessKeyId}, {secretAccessKey} and optional {sessionToken}
   *   on the credentials object and then call the callback with
   *   any error information.
   * @see get
   */
  refresh: function refresh(callback) {
    this.expired = false;
    callback();
  }
});

/**
 * Represents credentials from a JSON file on disk.
 * If the credentials expire, the SDK can {refresh} the credentials
 * from the file.
 *
 * The format of the file should be similar to the options passed to
 * {AWS.Config}:
 *
 * ```js
 * {accessKeyId: 'akid', secretAccessKey: 'secret', sessionToken: 'optional'}
 * ```
 *
 * @example Loading credentials from disk
 *   var creds = new AWS.FileSystemCredentials('./configuration.json');
 *   creds.accessKeyId == 'AKID'
 *
 * @!attribute filename
 *   @readonly
 *   @return [String] the path to the JSON file on disk containing the
 *     credentials.
 */
AWS.FileSystemCredentials = inherit(AWS.Credentials, {

  /**
   * @overload AWS.FileSystemCredentials(filename)
   *   Creates a new FileSystemCredentials object from a filename
   *
   *   @param filename [String] the path on disk to the JSON file to load.
   */
  constructor: function FileSystemCredentials(filename) {
    AWS.Credentials.call(this);
    this.filename = filename;
    this.get(function() {});
  },

  /**
   * Loads the credentials from the {filename} on disk.
   *
   * @callback callback function(err)
   *   Called when the instance metadata service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    if (!callback) callback = function(err) { if (err) throw err; };
    try {
      var creds = JSON.parse(AWS.util.readFileSync(this.filename));
      AWS.Credentials.call(this, creds);
      if (!this.accessKeyId || !this.secretAccessKey) {
        throw new Error('Credentials not set in ' + this.filename);
      }
      this.expired = false;
      callback();
    } catch (err) {
      callback(err);
    }
  }

});

/**
 * Represents credentials from the environment.
 *
 * By default, this class will look for the matching environment variables
 * prefixed by a given {envPrefix}. The un-prefixed environment variable names
 * for each credential value is listed below:
 *
 * ```js
 * accessKeyId: ACCESS_KEY_ID
 * secretAccessKey: SECRET_ACCESS_KEY
 * sessionToken: SESSION_TOKEN
 * ```
 *
 * With the default prefix of 'AWS', the environment variables would be:
 *
 *     AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN
 *
 * @!attribute envPrefix
 *   @readonly
 *   @return [String] the prefix for the environment variable names excluding
 *     the separating underscore ('_').
 */
AWS.EnvironmentCredentials = inherit(AWS.Credentials, {

  /**
   * Creates a new EnvironmentCredentials class with a given variable
   * prefix {envPrefix}. For example, to load credentials using the 'AWS'
   * prefix:
   *
   * ```js
   * var creds = new AWS.EnvironmentCredentials('AWS');
   * creds.accessKeyId == 'AKID' // from AWS_ACCESS_KEY_ID env var
   * ```
   *
   * @param envPrefix [String] the prefix to use (e.g., 'AWS') for environment
   *   variables. Do not include the separating underscore.
   */
  constructor: function EnvironmentCredentials(envPrefix) {
    this.envPrefix = envPrefix;
    this.get(function() {});
  },

  /**
   * Loads credentials from the environment using the prefixed
   * environment variables.
   *
   * @callback callback function(err)
   *   Called when the instance metadata service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    /*jshint maxcomplexity:10*/
    if (!callback) callback = function(err) { if (err) throw err; };

    if (process === undefined) {
      callback(new Error('No process info available'));
      return;
    }

    var keys = ['ACCESS_KEY_ID', 'SECRET_ACCESS_KEY', 'SESSION_TOKEN'];
    var values = [];

    for (var i = 0; i < keys.length; i++) {
      var prefix = '';
      if (this.envPrefix) prefix = this.envPrefix + '_';
      values[i] = process.env[prefix + keys[i]];
      if (!values[i] && keys[i] !== 'SESSION_TOKEN') {
        callback(new Error('Variable ' + prefix + keys[i] + ' not set.'));
        return;
      }
    }

    this.expired = false;
    AWS.Credentials.apply(this, values);
    callback();
  }

});

/**
 * Represents credentials recieved from the metadata service on an EC2 instance.
 *
 * By default, this class will connect to the metadata service using
 * {AWS.MetadataService} and attempt to load any available credentials. If it
 * can connect, and credentials are available, these will be used with zero
 * configuration.
 */
AWS.EC2MetadataCredentials = inherit(AWS.Credentials, {
  constructor: function EC2MetadataCredentials(options) {
    this.serviceError = null;
    this.metadataService = new AWS.MetadataService(options);
    this.metadata = {};
  },

  /**
   * Loads the credentials from the instance metadata service
   *
   * @callback callback function(err)
   *   Called when the instance metadata service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    var self = this;
    if (!callback) callback = function(err) { if (err) throw err; };
    if (self.serviceError) {
      callback(self.serviceError);
      return;
    }

    self.metadataService.loadCredentials(function (err, creds) {
      if (err) {
        self.serviceError = err;
      } else {
        self.expired = false;
        self.metadata = creds;
        self.accessKeyId = creds.AccessKeyId;
        self.secretAccessKey = creds.SecretAccessKey;
        self.sessionToken = creds.Token;
      }
      callback(err);
    });
  }
});

/**
 * Creates a credential provider chain that searches for AWS credentials
 * in a list of credential providers specified by the {providers} property.
 *
 * By default, the chain will use the {defaultProviders} to resolve credentials.
 * These providers will look in the environment using the
 * {AWS.EnvironmentCredentials} class with the 'AWS' and 'AMAZON' prefixes.
 *
 * ## Setting Providers
 *
 * Each provider in the {providers} list should be a function that returns
 * a {AWS.Credentials} object, or a hardcoded credentials object. The function
 * form allows for delayed execution of the credential construction.
 *
 * ## Resolving Credentials from a Chain
 *
 * Call {resolve} to return the first valid credential object that can be
 * loaded by the provider chain.
 *
 * For example, to resolve a chain with a custom provider that checks a file
 * on disk after the set of {defaultProviders}:
 *
 * ```js
 * var diskProvider = new AWS.FileSystemCredentials('./creds.json');
 * var chain = new AWS.CredentialProviderChain();
 * chain.providers.push(diskProvider);
 * chain.resolve();
 * ```
 *
 * The above code will return the `diskProvider` object if the
 * file contains credentials and the `defaultProviders` do not contain
 * any credential settings.
 *
 * @!attribute providers
 *   @return [Array<AWS.Credentials, Function>]
 *     a list of credentials objects or functions that return credentials
 *     objects. If the provider is a function, the function will be
 *     executed lazily when the provider needs to be checked for valid
 *     credentials. By default, this object will be set to the
 *     {defaultProviders}.
 *   @see defaultProviders
 */
AWS.CredentialProviderChain = inherit(AWS.Credentials, {

  /**
   * Creates a new CredentialProviderChain with a default set of providers
   * specified by {defaultProviders}.
   */
  constructor: function CredentialProviderChain(providers) {
    if (providers) {
      this.providers = providers;
    } else {
      this.providers = AWS.CredentialProviderChain.defaultProviders.slice(0);
    }
  },

  /**
   * Resolves the provider chain by searching for the first set of
   * credentials in {providers}.
   *
   * @callback callback function(err, credentials)
   *   Called when the provider resolves the chain to a credentials object
   *   or null if no credentials can be found.
   *
   *   @param err [Error] the error object returned if no credentials are
   *     found.
   *   @param credentials [AWS.Credentials] the credentials object resolved
   *     by the provider chain.
   * @return [AWS.CredentialProviderChain] the provider, for chaining.
   */
  resolve: function resolve(callback) {
    if (this.providers.length === 0) {
      callback(new Error('No providers'));
      return;
    }

    var index = 0;
    var providers = this.providers.slice(0);

    function resolveNext(err, creds) {
      if ((!err && creds) || index === providers.length) {
        callback(err, creds);
        return;
      }

      var provider = providers[index++];
      if (typeof provider === 'function') {
        creds = provider.call();
      } else {
        creds = provider;
      }

      if (creds.get) {
        creds.get(function(err) {
          resolveNext(err, err ? null : creds);
        });
      } else {
        resolveNext(null, creds);
      }
    }

    resolveNext();
    return this;
  }

});

/**
 * The default set of providers used by a vanilla CredentialProviderChain.
 */
AWS.CredentialProviderChain.defaultProviders = [
  function () { return new AWS.EnvironmentCredentials('AWS'); },
  function () { return new AWS.EnvironmentCredentials('AMAZON'); },
  function () { return new AWS.EC2MetadataCredentials(); }
];

/**
 * @return [AWS.Config] The global configuration object singleton instance
 * @readonly
 * @see AWS.Config
 */
AWS.config = new AWS.Config();

},{"./core":4,"./event_listeners":5,"./metadata_service":8,"./sequential_executor":11,"__browserify_process":82}],4:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

/**
 * The main AWS namespace
 */
var AWS = {};
module.exports = AWS;
require('./util');

AWS.util.update(AWS, {

  /**
   * @constant
   */
  VERSION: 'v1.5.0',

  /**
   * @api private
   */
  ServiceInterface: {},

  /**
   * @api private
   */
  Signers: {},

  /**
   * @api private
   */
  XML: {}

});

require('./config');
require('./http');
require('./sequential_executor');
require('./event_listeners');
require('./request');
require('./service');
require('./signers/request_signer');
require('./param_validator');
require('./metadata_service');

/**
 * @readonly
 * @return [AWS.SequentialExecutor] a collection of global event listeners that
 *   are attached to every sent request.
 * @see AWS.Request AWS.Request for a list of events to listen for
 * @example Logging the time taken to send a request
 *   AWS.events.on('send', function startSend(resp) {
 *     resp.startTime = new Date().getTime();
 *   }).on('complete', function calculateTime(resp) {
 *     var time = (new Date().getTime() - resp.startTime) / 1000;
 *     console.log('Request took ' + time + ' seconds');
 *   });
 *
 *   new AWS.S3().listBuckets(); // prints 'Request took 0.285 seconds'
 */
AWS.events = new AWS.SequentialExecutor();

if (typeof window !== 'undefined') window.AWS = AWS;

},{"./config":3,"./event_listeners":5,"./http":6,"./metadata_service":8,"./param_validator":9,"./request":10,"./sequential_executor":11,"./service":12,"./signers/request_signer":51,"./util":57}],5:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var Buffer = require('buffer').Buffer;
require('./sequential_executor');
require('./service_interface/json');
require('./service_interface/query');
require('./service_interface/rest');
require('./service_interface/rest_json');
require('./service_interface/rest_xml');

/**
 * The namespace used to register global event listeners for request building
 * and sending.
 */
AWS.EventListeners = {
  /**
   * @!attribute VALIDATE_CREDENTIALS
   *   A request listener that validates whether the request is being
   *   sent with credentials.
   *   Handles the {AWS.Request~validate 'validate' Request event}
   *   @example Sending a request without validating credentials
   *     var listener = AWS.EventListeners.Core.VALIDATE_CREDENTIALS;
   *     request.removeListener('validate', listener);
   *   @readonly
   *   @return [Function]
   * @!attribute VALIDATE_REGION
   *   A request listener that validates whether the region is set
   *   for a request.
   *   Handles the {AWS.Request~validate 'validate' Request event}
   *   @example Sending a request without validating region configuration
   *     var listener = AWS.EventListeners.Core.VALIDATE_REGION;
   *     request.removeListener('validate', listener);
   *   @readonly
   *   @return [Function]
   * @!attribute VALIDATE_PARAMETERS
   *   A request listener that validates input parameters in a request.
   *   Handles the {AWS.Request~validate 'validate' Request event}
   *   @example Sending a request without validating parameters
   *     var listener = AWS.EventListeners.Core.VALIDATE_PARAMETERS;
   *     request.removeListener('validate', listener);
   *   @example Disable parameter validation globally
   *     AWS.EventListeners.Core.removeListener('validate',
   *       AWS.EventListeners.Core.VALIDATE_REGION);
   *   @readonly
   *   @return [Function]
   * @!attribute SEND
   *   A request listener that initiates the HTTP connection for a
   *   request being sent. Handles the {AWS.Request~send 'send' Request event}
   *   @example Replacing the HTTP handler
   *     var listener = AWS.EventListeners.Core.SEND;
   *     request.removeListener('send', listener);
   *     request.on('send', function(response) {
   *       customHandler.send(response);
   *     });
   *   @return [Function]
   *   @readonly
   * @!attribute HTTP_DATA
   *   A request listener that reads data from the HTTP connection in order
   *   to build the response data.
   *   Handles the {AWS.Request~httpData 'httpData' Request event}.
   *   Remove this handler if you are overriding the 'httpData' event and
   *   do not want extra data processing and buffering overhead.
   *   @example Disabling default data processing
   *     var listener = AWS.EventListeners.Core.HTTP_DATA;
   *     request.removeListener('httpData', listener);
   *   @return [Function]
   *   @readonly
   */
  Core: {} /* doc hack */
};

AWS.EventListeners = {
  Core: new AWS.SequentialExecutor().addNamedListeners(function(add, addAsync) {
    addAsync('VALIDATE_CREDENTIALS', 'validate',
        function VALIDATE_CREDENTIALS(req, doneCallback) {
      req.service.config.getCredentials(function(err) {
        if (err) {
          err = AWS.util.error(err,
            {code: 'SigningError', message: 'Missing credentials in config'});
        }
        doneCallback(err);
      });
    });

    add('VALIDATE_REGION', 'validate', function VALIDATE_REGION(req) {
      if (!req.service.config.region) {
        throw AWS.util.error(new Error(),
          {code: 'SigningError', message: 'Missing region in config'});
      }
    });

    add('VALIDATE_PARAMETERS', 'validate', function VALIDATE_PARAMETERS(req) {
      var rules = req.service.api.operations[req.operation].input;
      new AWS.ParamValidator().validate(rules, req.params);
    });

    add('SET_CONTENT_LENGTH', 'afterBuild', function SET_CONTENT_LENGTH(req) {
      if (req.httpRequest.headers['Content-Length'] === undefined) {
        var length = AWS.util.string.byteLength(req.httpRequest.body);
        req.httpRequest.headers['Content-Length'] = length;
      }
    });

    add('SET_HTTP_HOST', 'afterBuild', function SET_HTTP_HOST(req) {
      req.httpRequest.headers['Host'] = req.httpRequest.endpoint.hostname;
    });

    addAsync('SIGN', 'sign', function SIGN(req, doneCallback) {
      if (!req.service.api.signatureVersion) return doneCallback(); // none

      req.service.config.getCredentials(function (err, credentials) {
        try {
          if (err) return doneCallback(err);

          var date = AWS.util.date.getDate();
          var sigVersion = req.service.api.signatureVersion;
          var SignerClass = AWS.Signers.RequestSigner.getVersion(sigVersion);
          var signer = new SignerClass(req.httpRequest,
            req.service.api.signingName || req.service.api.endpointPrefix);

          // clear old authorization headers
          delete req.httpRequest.headers['Authorization'];
          delete req.httpRequest.headers['Date'];
          delete req.httpRequest.headers['X-Amz-Date'];

          // add new authorization
          signer.addAuthorization(credentials, date);
          doneCallback();
        } catch (e) {
          doneCallback(e);
        }
      });
    });

    add('SETUP_ERROR', 'extractError', function SETUP_ERROR(resp) {
      if (this.service.successfulResponse(resp, this)) {
        // throwing null will stop the error extraction chain
        // but will not set an error for data extraction
        throw null;
      }

      resp.error = AWS.util.error(new Error(),
        {code: 'UnknownError', message: 'An unknown error occurred.'});
      resp.data = null;
    });

    add('SETUP_DATA', 'extractData', function SETUP_DATA(resp) {
      resp.data = {};
      resp.error = null;
    });

    add('SEND', 'send', function SEND(resp) {
      function callback(httpResp) {
        resp.httpStream = httpResp;

        var headers = [httpResp.statusCode, httpResp.headers, resp];
        resp.request.emitEvent('httpHeaders', headers);

        if (resp.httpStream) {
          if (AWS.HttpClient.streamsApiVersion === 2) { // streams2 API check
            httpResp.on('readable', function onReadable() {
              resp.request.emitEvent('httpData', [httpResp.read(), resp]);
            });
          } else { // legacy streams API
            httpResp.on('data', function onData(data) {
              resp.request.emitEvent('httpData', [data, resp]);
            });
          }

          httpResp.on('end', function onEnd() {
            resp.request.emitEvent('httpDone', [resp]);
          });
        }
      }

      function error(err) {
        err = AWS.util.error(err, {
          code: 'NetworkingError',
          region: resp.request.httpRequest.region,
          hostname: resp.request.httpRequest.endpoint.hostname,
          retryable: true
        });
        resp.request.emitEvent('httpError', [err, resp]);
      }

      var http = AWS.HttpClient.getInstance();
      var httpOptions = resp.request.service.config.httpOptions || {};
      http.handleRequest(this.httpRequest, httpOptions, callback, error);
    });

    add('HTTP_HEADERS', 'httpHeaders',
        function HTTP_HEADERS(statusCode, headers, resp) {
      resp.httpResponse.statusCode = statusCode;
      resp.httpResponse.headers = headers;
      resp.httpResponse.body = new Buffer('');
      resp.httpResponse.buffers = [];
    });

    add('HTTP_DATA', 'httpData', function HTTP_DATA(chunk, resp) {
      resp.httpResponse.buffers.push(new Buffer(chunk));
    });

    add('HTTP_DONE', 'httpDone', function HTTP_DONE(resp) {
      // convert buffers array into single buffer
      if (resp.httpResponse.buffers && resp.httpResponse.buffers.length > 0) {
        var body = AWS.util.buffer.concat(resp.httpResponse.buffers);
        resp.httpResponse.body = body;
      }
      delete resp.httpResponse.buffers;

      this.completeRequest(resp);
    });

    add('HTTP_ERROR', 'httpError', function HTTP_ERROR(error, resp) {
      resp.error = error;
      this.completeRequest(resp);
    });

    add('FINALIZE_ERROR', 'retry', function FINALIZE_ERROR(resp) {
      resp.error.statusCode = resp.httpResponse.statusCode;
      if (resp.error.retryable === undefined) {
        resp.error.retryable = this.service.retryableError(resp.error, this);
      }
    });

    add('INVALIDATE_CREDENTIALS', 'retry', function INVALIDATE_CREDENTIALS(resp) {
      switch (resp.error.code) {
        case 'RequestExpired': // EC2 only
        case 'ExpiredTokenException':
        case 'ExpiredToken':
          resp.error.retryable = true;
          resp.request.service.config.credentials.expired = true;
      }
    });

    add('REDIRECT', 'retry', function REDIRECT(resp) {
      if (resp.error && resp.error.statusCode >= 300 &&
          resp.error.statusCode < 400 && resp.httpResponse.headers['location']) {
        this.httpRequest.endpoint =
          new AWS.Endpoint(resp.httpResponse.headers['location']);
        resp.error.redirect = true;
        resp.error.retryable = true;
      }
    });

    add('RETRY_CHECK', 'retry', function RETRY_CHECK(resp) {
      if (resp.error) {
        if (resp.error.redirect && resp.redirectCount < this.service.config.maxRedirects) {
          resp.redirectCount++;
        } else if (resp.error.retryable && resp.retryCount < this.service.numRetries()) {
          resp.retryCount++;
        } else {
          throw resp.error;
        }
      }
    });

    addAsync('RETRY_SIGN', 'retry', function RETRY_SIGN(resp, doneCallback) {
      this.emitEvent('sign', resp, doneCallback);
    });

    addAsync('RETRY_DELAY_SEND', 'retry', function RETRY_DELAY_SEND(resp, doneCallback) {
      var delay = 0;
      if (!resp.error.redirect) {
        delay = this.service.retryDelays()[resp.retryCount-1] || 0;
      }

      resp.error = null;
      resp.data = null;

      setTimeout(function() {
        resp.request.emitEvent('send', resp, doneCallback);
      }, delay);

    });

  }),

  Json: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.Json;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Rest: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.Rest;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestJson: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.RestJson;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestXml: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.RestXml;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Query: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    var svc = AWS.ServiceInterface.Query;
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  })
};

},{"./core":4,"./sequential_executor":11,"./service_interface/json":13,"./service_interface/query":14,"./service_interface/rest":15,"./service_interface/rest_json":16,"./service_interface/rest_xml":17,"buffer":70}],6:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var Stream = require('stream').Stream;
var inherit = AWS.util.inherit;

/**
 * The endpoint that a service will talk to, for example,
 * `'https://ec2.ap-southeast-1.amazonaws.com'`. If
 * you need to override an endpoint for a service, you can
 * set the endpoint on a service by passing the endpoint
 * object with the `endpoint` option key:
 *
 * ```js
 * var ep = new AWS.Endpoint('awsproxy.example.com');
 * var s3 = new AWS.S3({endpoint: ep});
 * s3.service.endpoint.hostname == 'awsproxy.example.com'
 * ```
 *
 * Note that if you do not specify a protocol, the protocol will
 * be selected based on your current {AWS.config} configuration.
 *
 * @!attribute protocol
 *   @return [String] the protocol (http or https) of the endpoint
 *     URL
 * @!attribute hostname
 *   @return [String] the host portion of the endpoint, e.g.,
 *     example.com
 * @!attribute host
 *   @return [String] the host portion of the endpoint including
 *     the port, e.g., example.com:80
 * @!attribute port
 *   @return [Integer] the port of the endpoint
 * @!attribute href
 *   @return [String] the full URL of the endpoint
 */
AWS.Endpoint = inherit({

  /**
   * @overload Endpoint(endpoint)
   *   Constructs a new endpoint given an endpoint URL. If the
   *   URL omits a protocol (http or https), the default protocol
   *   set in the global {AWS.config} will be used.
   *   @param endpoint [String] the URL to construct an endpoint from
   */
  constructor: function Endpoint(endpoint, config) {
    if (typeof endpoint === 'undefined' || endpoint === null) {
      throw new Error('Invalid endpoint: ' + endpoint);
    } else if (typeof endpoint !== 'string') {
      return AWS.util.copy(endpoint);
    }

    if (!endpoint.match(/^http/)) {
      var useSSL = config && config.sslEnabled !== undefined ?
        config.sslEnabled : AWS.config.sslEnabled;
      endpoint = (useSSL ? 'https' : 'http') + '://' + endpoint;
    }

    AWS.util.update(this, AWS.util.urlParse(endpoint));

    // Ensure the port property is set as an integer
    if (this.port) {
      this.port = parseInt(this.port, 10);
    } else {
      this.port = this.protocol === 'https:' ? 443 : 80;
    }
  }

});

/**
 * The low level HTTP request object, encapsulating all HTTP header
 * and body data sent by a service request.
 *
 * @!attribute method
 *   @return [String] the HTTP method of the request
 * @!attribute path
 *   @return [String] the path portion of the URI, e.g.,
 *     "/list/?start=5&num=10"
 * @!attribute headers
 *   @return [map<String,String>]
 *     a map of header keys and their respective values
 * @!attribute body
 *   @return [String] the request body payload
 * @!attribute endpoint
 *   @return [AWS.Endpoint] the endpoint for the request
 * @!attribute region
 *   @api private
 *   @return [String] the region, for signing purposes only.
 */
AWS.HttpRequest = inherit({

  /**
   * @api private
   */
  constructor: function HttpRequest(endpoint, region) {
    endpoint = new AWS.Endpoint(endpoint);
    this.method = 'POST';
    this.path = endpoint.path || '/';
    this.headers = {};
    this.headers['User-Agent'] = AWS.util.userAgent();
    this.body = '';
    this.endpoint = endpoint;
    this.region = region;
  },

  /**
   * @return [String] the part of the {path} excluding the
   *   query string
   */
  pathname: function pathname() {
    return this.path.split('?', 1)[0];
  },

  /**
   * @return [String] the query string portion of the {path}
   */
  search: function search() {
    return this.path.split('?', 2)[1] || '';
  }

});

/**
 * The low level HTTP response object, encapsulating all HTTP header
 * and body data returned from the request.
 *
 * @!attribute statusCode
 *   @return [Integer] the HTTP status code of the response (e.g., 200, 404)
 * @!attribute headers
 *   @return [map<String,String>]
 *      a map of response header keys and their respective values
 * @!attribute body
 *   @return [String] the response body payload
 */
AWS.HttpResponse = inherit({

  /**
   * @api private
   */
  constructor: function HttpResponse() {
    this.statusCode = undefined;
    this.headers = {};
    this.body = undefined;
  }
});

/**
 * @api private
 */
AWS.NodeHttpClient = inherit({
  handleRequest: function handleRequest(httpRequest, httpOptions, callback, errCallback) {
    var endpoint = httpRequest.endpoint;
    var pathPrefix = '';
    if (!httpOptions) httpOptions = {};
    if (httpOptions.proxy) {
      pathPrefix = endpoint.protocol + '//' + endpoint.hostname;
      if (endpoint.port != 80 && endpoint.port != 443) {
        pathPrefix += ':' + endpoint.port;
      }
      endpoint = new AWS.Endpoint(httpOptions.proxy);
    }

    var useSSL = endpoint.protocol === 'https:';
    var http = useSSL ? require('https') : require('http');
    var options = {
      host: endpoint.hostname,
      port: endpoint.port,
      method: httpRequest.method,
      headers: httpRequest.headers,
      path: pathPrefix + httpRequest.path
    };

    if (useSSL && !httpOptions.agent) {
      options.agent = this.sslAgent(http);
    }

    AWS.util.update(options, httpOptions);
    delete options.proxy; // proxy isn't an HTTP option
    delete options.timeout; // timeout isn't an HTTP option

    var stream = http.request(options, callback);
    httpRequest.stream = stream; // attach stream to httpRequest

    // timeout support
    if (stream.setTimeout) {
      stream.setTimeout(httpOptions.timeout || 0);
      stream.once('timeout', function() {
        var msg = 'Connection timed out after ' + httpOptions.timeout + 'ms';
        errCallback(AWS.util.error(new Error(msg), {code: 'TimeoutError'}));

        // HACK - abort the connection without tripping our error handler
        // since we already raised our TimeoutError. Otherwise the connection
        // comes back with ECONNRESET, which is not a helpful error message
        stream.removeListener('error', errCallback);
        stream.on('error', function() { });
        stream.abort();
      });      
    }

    stream.on('error', errCallback);
    this.writeBody(stream, httpRequest);
    return stream;
  },

  writeBody: function writeBody(stream, httpRequest) {
    if (httpRequest.body instanceof Stream) {
      httpRequest.body.pipe(stream);
    } else if (httpRequest.body) {
      stream.end(httpRequest.body);
    } else {
      stream.end();
    }
  },

  sslAgent: function sslAgent(http) {
    if (!AWS.NodeHttpClient.sslAgent) {
      AWS.NodeHttpClient.sslAgent = new http.Agent({
        rejectUnauthorized: true
      });
    }
    return AWS.NodeHttpClient.sslAgent;
  }
});

/**
 * @api private
 */
AWS.HttpClient = AWS.NodeHttpClient;

/**
 * @api private
 */
AWS.HttpClient.streamsApiVersion = require('stream').Readable ? 2 : 1;

/**
 * @api private
 */
AWS.HttpClient.getInstance = function getInstance() {
  /*jshint newcap:false */
  if (this.singleton === undefined) {
    this.singleton = new this();
  }
  return this.singleton;
};

},{"./core":4,"http":77,"https":64,"stream":66}],7:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.JSON = {};

/**
 * @api private
 */
AWS.JSON.Builder = inherit({

  constructor: function XMLBuilder(rules, options) {
    this.rules = rules;
    this.timestampFormat = options.timestampFormat;
  },

  toJSON: function toJSON(params) {
    return JSON.stringify(this.translate(this.rules, params));
  },

  translate: function translate(rules, value) {
    if (rules.type == 'structure') {

      // translate structures (hashes with pre-defined keys)
      var struct = {};
      AWS.util.each.call(this, value, function (memberName, memberValue) {
        var memberRules = rules[memberName] || {};
        struct[memberName] = this.translate(memberRules, memberValue);
      });
      return struct;

    } else if (rules.type == 'list') {

      // translate each member of the list
      var list = [];
      AWS.util.arrayEach.call(this, value, function (memberValue) {
        var memberRules = rules.members || {};
        list.push(this.translate(memberRules, memberValue));
      });
      return list;

    } else if (rules.type == 'map') {

      // translate maps (hashes with user supplied keys)
      var map = {};
      AWS.util.each.call(this, value, function (memberName, memberValue) {
        var memberRules = rules.members || {};
        map[memberName] = translate(memberRules, memberValue);
      });
      return map;

    } else if (rules.type == 'timestamp') {

      var timestampFormat = rules.format || this.timestampFormat;
      return AWS.util.date.format(value, timestampFormat);

    } else {

      // all other shapes
      return value;

    }
  }

});

},{"../core":4}],8:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
require('./http');
var inherit = AWS.util.inherit;

/**
 * Represents a metadata service available on EC2 instances. Using the
 * {request} method, you can receieve metadata about any available resource
 * on the metadata service.
 *
 * @!attribute [r] httpOptions
 *   @return [map] a map of options to pass to the underlying HTTP request
 */
AWS.MetadataService = inherit({
  /**
   * @return [String] the hostname of the instance metadata service
   */
  host: '169.254.169.254',

  /**
   * @!ignore
   */

  /**
   * Options
   */
  httpOptions: { timeout: 1000 },

  /**
   * Creates a new MetadataService object with a given set of options.
   *
   * @option options host [String] the hostname of the instance metadata
   *   service
   * @option options httpOptions [map] a map of options to pass to the
   *   underlying HTTP request
   */
  constructor: function MetadataService(options) {
    AWS.util.update(this, options);
  },

  /**
   * Sends a request to the instance metadata service for a given resource.
   *
   * @param path [String] the path of the resource to get
   * @callback callback function(err, data)
   *   Called when a response is available from the service.
   *   @param err [Error, null] if an error occurred, this value will be set
   *   @param data [String, null] if the request was successful, the body of
   *     the response
   */
  request: function request(path, callback) {
    path = path || '/';

    var data = '';
    var http = AWS.HttpClient.getInstance();
    var httpRequest = new AWS.HttpRequest('http://' + this.host + path);
    httpRequest.method = 'GET';

    http.handleRequest(httpRequest, this.httpOptions, function(httpResponse) {
      httpResponse.on('data', function(chunk) { data += chunk.toString(); });
      httpResponse.on('end', function() { callback(null, data); });
    }, callback);
  },

  /**
   * Loads a set of credentials stored in the instance metadata service
   *
   * @api private
   * @callback callback function(err, credentials)
   *   Called when credentials are loaded from the resource
   *   @param err [Error] if an error occurred, this value will be set
   *   @param credentials [Object] the raw JSON object containing all
   *     metadata from the credentials resource
   */
  loadCredentials: function loadCredentials(callback) {
    var self = this;
    var basePath = '/latest/meta-data/iam/security-credentials/';
    self.request(basePath, function (err, roleName) {
      if (err) callback(err);
      else {
        roleName = roleName.split('\n')[0]; // grab first (and only) role
        self.request(basePath + roleName, function (credErr, credData) {
          if (credErr) callback(credErr);
          else {
            try {
              var credentials = JSON.parse(credData);
              callback(null, credentials);
            } catch (parseError) {
              callback(parseError);
            }
          }
        });
      }
    });
  }
});

module.exports = AWS.MetadataService;

},{"./core":4,"./http":6}],9:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var Stream = require('stream').Stream;
var Buffer = require('buffer').Buffer;

/**
 * @api private
 */
AWS.ParamValidator = AWS.util.inherit({
  validate: function validate(rules, params, context) {
    var cRules = (rules || {}).members || {};
    var payload = rules ? rules.xml : null;
    if (payload) {
      cRules = AWS.util.merge(cRules, (cRules[payload] || {}).members || {});
      delete cRules[payload];
    }

    return this.validateStructure(cRules, params || {}, context || 'params');
  },

  validateStructure: function validateStructure(rules, params, context) {
    /*jshint maxcomplexity:12*/
    this.validateType(context, params, ['object'], 'structure');

    /*jshint forin:false*/
    for (var paramName in rules) {
      if (!rules.hasOwnProperty(paramName)) continue;
      if (rules[paramName].required && params[paramName] === undefined) {
        this.fail('MissingRequiredParameter',
          'Missing required key \'' + paramName + '\' in ' + context);
      }
    }

    // validate hash members
    for (paramName in params) {
      var paramValue = params[paramName],
          paramRules = rules[paramName];

      if (paramRules !== undefined) {
        var memberContext = [context, paramName].join('.');
        this.validateMember(paramRules, paramValue, memberContext);
      } else {
        this.fail('UnexpectedParameter',
          'Unexpected key \'' + paramName + '\' found in ' + context);
      }
    }

    return true;
  },

  validateMember: function validateMember(rules, param, context) {
    var memberRules = rules.members || {};
    switch(rules.type) {
      case 'structure':
        return this.validateStructure(memberRules, param, context);
      case 'list':
        return this.validateList(memberRules, param, context);
      case 'map':
        return this.validateMap(memberRules, param, context);
      default:
        return this.validateScalar(rules, param, context);
    }
  },

  validateList: function validateList(rules, params, context) {
    this.validateType(context, params, [Array]);

    // validate array members
    for (var i = 0; i < params.length; i++) {
      this.validateMember(rules, params[i], context + '[' + i + ']');
    }
  },

  validateMap: function validateMap(rules, params, context) {
    this.validateType(context, params, ['object'], 'map');

    /*jshint forin:false*/
    for (var param in params) {
      if (!params.hasOwnProperty(param)) continue;
      this.validateMember(rules, params[param],
                          context + '[\'' +  param + '\']');
    }
  },

  validateScalar: function validateScalar(rules, value, context) {
    /*jshint maxcomplexity:12*/
    switch (rules.type) {
      case null:
      case undefined:
      case 'string':
        return this.validateType(context, value, ['string']);
      case 'base64':
      case 'binary':
        return this.validateType(context, value, ['string', Buffer, Stream]);
      case 'integer':
      case 'float':
        return this.validateType(context, value, ['number']);
      case 'boolean':
        return this.validateType(context, value, ['boolean']);
      case 'timestamp':
        return this.validateType(context, value, [Date,
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/, 'number'],
          'Date object, ISO-8601 string, or a UNIX timestamp');
      default:
        return this.fail('UnkownType', 'Unhandled type ' +
                         rules.type + ' for ' + context);
    }
  },

  fail: function fail(code, message) {
    throw AWS.util.error(new Error(message), {code: code});
  },

  validateType: function validateType(context, value, acceptedTypes, type) {
    /*jshint maxcomplexity:12*/
    var foundInvalidType = false;
    for (var i = 0; i < acceptedTypes.length; i++) {
      if (typeof acceptedTypes[i] === 'string') {
        if (typeof value === acceptedTypes[i]) return;
      } else if (acceptedTypes[i] instanceof RegExp) {
        if ((value || '').toString().match(acceptedTypes[i])) return;
      } else {
        if (value instanceof acceptedTypes[i]) return;
        if (AWS.util.isType(value, acceptedTypes[i].name)) return;
        if (!type && !foundInvalidType) acceptedTypes = acceptedTypes.slice();
        acceptedTypes[i] = acceptedTypes[i].name;
      }
      foundInvalidType = true;
    }

    var acceptedType = type;
    if (!acceptedType) {
      /*jshint regexp:false*/
      acceptedType = acceptedTypes.join(', ').replace(/,([^,]+)$/, ', or$1');
    }

    var vowel = acceptedType.match(/^[aeiou]/i) ? 'n' : '';
    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a' +
              vowel + ' ' + acceptedType);
  }
});

},{"./core":4,"buffer":70,"stream":66}],10:[function(require,module,exports){
var process=require("__browserify_process");/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var streams = require('stream');

/**
 * ## Asynchronous Requests
 *
 * All requests made through the SDK are asynchronous and use a
 * callback interface. Each service method that kicks off a request
 * returns an `AWS.Request` object that you can use to register
 * callbacks.
 *
 * For example, the following service method returns the request
 * object as "request", which can be used to register callbacks:
 *
 * ```js
 * // request is an AWS.Request object
 * var request = ec2.describeInstances();
 *
 * // register callbacks on request to retrieve response data
 * request.on('success', function(response) {
 *   console.log(response.data);
 * });
 * ```
 *
 * When a request is ready to be sent, the {send} method should
 * be called:
 *
 * ```js
 * request.send();
 * ```
 *
 * ## Removing Default Listeners for Events
 *
 * Request objects are built with default listeners for the various events,
 * depending on the service type. In some cases, you may want to remove
 * some built-in listeners to customize behaviour. Doing this requires
 * access to the built-in listener functions, which are exposed through
 * the {AWS.EventListeners.Core} namespace. For instance, you may
 * want to customize the HTTP handler used when sending a request. In this
 * case, you can remove the built-in listener associated with the 'send'
 * event, the {AWS.EventListeners.Core.SEND} listener and add your own.
 *
 * ## Multiple Callbacks and Chaining
 *
 * You can register multiple callbacks on any request object. The
 * callbacks can be registered for different events, or all for the
 * same event. In addition, you can chain callback registration, for
 * example:
 *
 * ```js
 * request.
 *   on('success', function(response) {
 *     console.log("Success!");
 *   }).
 *   on('error', function(response) {
 *     console.log("Error!");
 *   }).
 *   on('complete', function(response) {
 *     console.log("Always!");
 *   }).
 *   send();
 * ```
 *
 * The above example will print either "Success! Always!", or "Error! Always!",
 * depending on whether the request succeeded or not.
 *
 * @!attribute httpRequest
 *   @readonly
 *   @!group HTTP Properties
 *   @return [AWS.HttpRequest] the raw HTTP request object
 *     containing request headers and body information
 *     sent by the service.
 *
 * @!group Request Building Events
 *
 * @!event validate(request)
 *   Triggered when a request is being validated. Listeners
 *   should throw an error if the request should not be sent.
 *   @param request [Request] the request object being sent
 *   @see AWS.EventListeners.Core.VALIDATE_CREDENTIALS
 *   @see AWS.EventListeners.Core.VALIDATE_REGION
 *
 * @!event build(request)
 *   Triggered when the request payload is being built. Listeners
 *   should fill the necessary information to send the request
 *   over HTTP.
 *   @param (see AWS.Request~validate)
 *
 * @!event sign(request)
 *   Triggered when the request is being signed. Listeners should
 *   add the correct authentication headers and/or adjust the body,
 *   depending on the authentication mechanism being used.
 *   @param (see AWS.Request~validate)
 *
 * @!group Request Sending Events
 *
 * @!event send(response)
 *   Triggered when the request is ready to be sent. Listeners
 *   should call the underlying transport layer to initiate
 *   the sending of the request.
 *   @param response [Response] the response object
 *   @context [Request] the request object that was sent
 *   @see AWS.EventListeners.Core.SEND
 *
 * @!event retry(response)
 *   Triggered when a request failed and might need to be retried.
 *   Listeners are responsible for checking to see if the request
 *   is retryable, and if so, re-signing and re-sending the request.
 *   Information about the failure is set in the `response.error`
 *   property.
 *
 *   If a listener decides that a request should not be retried,
 *   that listener should `throw` an error to cancel the event chain.
 *   Unsetting `response.error` will have no effect.
 *
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!group Data Parsing Events
 *
 * @!event extractError(response)
 *   Triggered on all non-2xx requests so that listeners can extract
 *   error details from the response body. Listeners to this event
 *   should set the `response.error` property.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event extractData(response)
 *   Triggered in successful requests to allow listeners to
 *   de-serialize the response body into `response.data`.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!group Completion Events
 *
 * @!event success(response)
 *   Triggered when the request completed successfully.
 *   `response.data` will contain the response data and
 *   `response.error` will be null.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event error(error, response)
 *   Triggered when an error occurs at any point during the
 *   request. `response.error` will contain details about the error
 *   that occurred. `response.data` will be null.
 *   @param error [Error] the error object containing details about
 *     the error that occurred.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event complete(response)
 *   Triggered whenever a request cycle completes. `response.error`
 *   should be checked, since the request may have failed.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!group HTTP Events
 *
 * @!event httpHeaders(statusCode, headers, response)
 *   Triggered when headers are sent by the remote server
 *   @param statusCode [Integer] the HTTP response code
 *   @param headers [map<String,String>] the response headers
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event httpData(chunk, response)
 *   Triggered when data is sent by the remote server
 *   @param chunk [Buffer] the buffer data containing the next data chunk
 *     from the server
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *   @see AWS.EventListeners.Core.HTTP_DATA
 *
 * @!event httpError(error, response)
 *   Triggered when the HTTP request failed
 *   @param error [Error] the error object that was thrown
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event httpDone(response)
 *   Triggered when the server is finished sending data
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @see AWS.Response
 */
AWS.Request = inherit({

  /**
   * Creates a request for an operation on a given service with
   * a set of input parameters.
   *
   * @param service [AWS.Service] the service to perform the operation on
   * @param operation [String] the operation to perform on the service
   * @param params [Object] parameters to send to the operation.
   *   See the operation's documentation for the format of the
   *   parameters.
   */
  constructor: function Request(service, operation, params) {
    var endpoint = service.endpoint;
    var region = service.config.region;

    this.service = service;
    this.operation = operation;
    this.params = params || {};
    this.httpRequest = new AWS.HttpRequest(endpoint, region);

    AWS.SequentialExecutor.call(this);
  },

  /**
   * @!group Sending a Request
   */

  /**
   * @overload send(callback = null)
   *   Sends the request object.
   *
   *   @callback callback function(err, data)
   *     If a callback is supplied, it is called when a response is returned
   *     from the service.
   *     @param err [Error] the error object returned from the request.
   *       Set to `null` if the request is successful.
   *     @param data [Object] the de-serialized data returned from
   *       the request. Set to `null` if a request error occurs.
   *   @example Sending a request with a callback
   *     request = s3.putObject({Bucket: 'bucket', Key: 'key'});
   *     request.send(function(err, data) { console.log(err, data); });
   *   @example Sending a request with no callback (using event handlers)
   *     request = s3.putObject({Bucket: 'bucket', Key: 'key'});
   *     request.on('complete', function(response) { ... }); // register a callback
   *     request.send();
   */
  send: function send(callback, response) {
    if (callback) {
      this.on('complete', function (resp) {
        callback.call(resp, resp.error, resp.data);
      });
    }

    if (!response) response = new AWS.Response(this);
    var eventNames = ['validate', 'build', 'afterBuild', 'sign', 'send'];
    this.emitEvents(eventNames, response, function(err) {
      if (err) {
        // calling failRequest instead of completeRequest because errors
        // raised before we have finished sending the request should never
        // get retried
        this.failRequest(response);
      }
    });
    return response;
  },

  /**
   * Aborts a request, emitting the error and complete events.
   *
   * @example Aborting a request after sending
   *   var params = {
   *     Bucket: 'bucket', Key: 'key',
   *     Body: new Buffer(1024 * 1024 * 5) // 5MB payload
   *   };
   *   var request = s3.putObject(params);
   *   request.send(function (err, data) {
   *     if (err) console.log("Error:", err.code, err.message);
   *     else console.log(data);
   *   });
   *
   *   // abort request in 1 second
   *   setTimeout(request.abort.bind(request), 1000);
   *
   *   // prints "Error: RequestAbortedError Request aborted by user"
   * @return [AWS.Request] the same request object, for chaining.
   * @since v1.4.0
   */
  abort: function abort() {
    this._events = { // reset events
      error: this._events.error,
      complete: this._events.complete
    };

    if (this.httpRequest.stream) { // abort HTTP stream
      this.httpRequest.stream.abort();
    }

    // emit only error and complete callbacks
    var response = new AWS.Response(this);
    response.error = AWS.util.error(new Error('Request aborted by user'), {
      code: 'RequestAbortedError', retryable: false
    });
    this.failRequest(response);

    return this;
  },

  /**
   * Iterates over each page of results given a pageable request, calling
   * the provided callback with each page of data. After all pages have been
   * retrieved, the callback is called with `null` data.
   *
   * @note This operation can generate multiple requests to a service.
   * @example Iterating over multiple pages of objects in an S3 bucket
   *   var pages = 1;
   *   s3.listObjects().eachPage(function(err, data) {
   *     if (err) return;
   *     console.log("Page", pages++);
   *     console.log(data);
   *   });
   * @callback callback function(err, data)
   *   Called with each page of resulting data from the request.
   *
   *   @param err [Error] an error object, if an error occurred.
   *   @param data [Object] a single page of response data. If there is no
   *     more data, this object will be `null`.
   *   @return [Boolean] if the callback returns `false`, pagination will
   *     stop.
   *
   * @api experimental
   * @see AWS.Request.eachItem
   * @see AWS.Response.nextPage
   * @since v1.4.0
   */
  eachPage: function eachPage(callback) {
    function wrappedCallback(response) {
      var result = callback.call(response, response.error, response.data);
      if (result === false) return;

      if (response.hasNextPage()) {
        response.nextPage().on('complete', wrappedCallback).send();
      } else {
        callback.call(response, null, null);
      }
    }

    this.on('complete', wrappedCallback).send();
  },

  /**
   * Enumerates over individual items of a request, paging the responses if
   * necessary.
   *
   * @api experimental
   * @since v1.4.0
   */
  eachItem: function eachItem(callback) {
    function wrappedCallback(err, data) {
      if (err) return callback(err, null);
      if (data === null) return callback(null, null);

      var config = this.request.service.paginationConfig(this.request.operation);
      var resultKey = config.resultKey;
      if (AWS.util.isType(resultKey, Array)) resultKey = resultKey[0];
      var results = AWS.util.jamespath.query(resultKey, data);
      AWS.util.arrayEach(results, function(result) {
        AWS.util.arrayEach(result, function(item) { callback(null, item); });
      });
    }

    this.eachPage(wrappedCallback);
  },

  /**
   * @return [Boolean] whether the operation can return multiple pages of
   *   response data.
   * @api experimental
   * @see AWS.Response.eachPage
   * @since v1.4.0
   */
  isPageable: function isPageable() {
    return this.service.paginationConfig(this.operation) ? true : false;
  },

  /**
   * Converts the request object into a readable stream that
   * can be read from or piped into a writable stream.
   *
   * @note The data read from a readable stream contains only
   *   the raw HTTP body contents.
   * @example Manually reading from a stream
   *   request.createReadStream().on('data', function(data) {
   *     console.log("Got data:", data.toString());
   *   });
   * @example Piping a request body into a file
   *   var out = fs.createWriteStream('/path/to/outfile.jpg');
   *   s3.service.getObject(params).createReadStream().pipe(out);
   * @return [Stream] the readable stream object that can be piped
   *   or read from (by registering 'data' event listeners).
   */
  createReadStream: function createReadStream() {
    var req = this;
    var stream = null;
    var legacyStreams = false;

    if (AWS.HttpClient.streamsApiVersion === 2) {
      stream = new streams.Readable();
      stream._read = function() { stream.push(''); };
    } else {
      stream = new streams.Stream();
      stream.readable = true;
    }

    stream.sent = false;
    stream.on('newListener', function(event) {
      if (!stream.sent && (event === 'data' || event === 'readable')) {
        if (event === 'data') legacyStreams = true;
        stream.sent = true;
        process.nextTick(function() { req.send(); });
      }
    });

    this.on('httpHeaders', function streamHeaders(statusCode, headers, resp) {
      if (statusCode < 300) {
        req.removeListener('httpData', AWS.EventListeners.Core.HTTP_DATA);
        req.removeListener('httpError', AWS.EventListeners.Core.HTTP_ERROR);
        req.on('httpError', function streamHttpError(error, resp) {
          resp.error = error;
          resp.error.retryable = false;
          this.completeRequest(resp);
        });

        var httpStream = resp.httpStream;
        stream.response = resp;
        stream._read = function() {
          var data;
          /*jshint boss:true*/
          while (data = httpStream.read()) {
            stream.push(data);
          }
          stream.push('');
        };

        var events = ['end', 'error', (legacyStreams ? 'data' : 'readable')];
        AWS.util.arrayEach(events, function(event) {
          httpStream.on(event, function(arg) {
            stream.emit(event, arg);
          });
        });

        resp.httpStream = null; // take ownership of the stream object
      }
    });

    this.on('error', function(err) {
      stream.emit('error', err);
    });

    return stream;
  },

  /**
   * @api private
   */
  completeRequest: function completeRequest(response) {
    this.emitEvents(['extractError', 'extractData'], response, function(err) {
      if (err) {
        this.emitEvent('retry', response, function(retryError) {
          if (retryError) this.failRequest(response);
        });
      } else {
        this.emitEvent('success', [response], this.unhandledErrorCallback);
        this.emitEvent('complete', [response], this.unhandledErrorCallback);
      }
    });
  },

  /**
   * @api private
   */
  failRequest: function failRequest(response) {
    this.emitEvent('error', [response.error, response], this.unhandledErrorCallback);
    this.emitEvent('complete', [response], this.unhandledErrorCallback);
  },

  /**
   * @api private
   */
  emitEvents: function emitEvents(eventNames, response, doneCallback) {
    if (!doneCallback) doneCallback = this.unhandledErrorCallback;
    if (response.error) {
      doneCallback.call(this, response.error);
    } else if (eventNames.length === 0) {
      doneCallback.call(this);
    } else {
      this.emitEvent(eventNames[0], response, function(err) {
        if (err) {
          doneCallback.call(this, err);
        } else {
          // next event (eventNames is a reducing set)
          this.emitEvents(eventNames.slice(1), response, doneCallback);
        }
      });
    }
  },

  /**
   * @param [Array,Response] args This should be the response object,
   *   or an array of args to send to the event.
   * @api private
   */
  emitEvent: function emitEvent(eventName, args, doneCallback) {
    if (!doneCallback) doneCallback = this.unhandledErrorCallback;
    var response = null;
    if (AWS.util.isType(args, Array)) {
      response = args[args.length - 1];
    } else {
      response = args;
      args = this.eventParameters(eventName, response);
    }

    this.emit(eventName, args, function (err) {
      if (err) {
        response.error = err;
      }
      doneCallback.call(this, err);
    });
  },

  /**
   * @api private
   */
  eventParameters: function eventParameters(eventName, response) {
    /*jshint maxcomplexity:8*/
    switch (eventName) {
      case 'validate':
      case 'sign':
      case 'build':
      case 'afterBuild':
        return [this];
      default:
        return [response];
    }
  }
});

AWS.util.mixin(AWS.Request, AWS.SequentialExecutor);

/**
 * This class encapsulates the the response information
 * from a service request operation sent through {AWS.Request}.
 * The response object has two main properties for getting information
 * back from a request:
 *
 * ## The `data` property
 *
 * The `response.data` property contains the serialized object data
 * retrieved from the service request. For instance, for an
 * Amazon DynamoDB `listTables` method call, the response data might
 * look like:
 *
 * ```
 * > resp.data
 * { TableNames:
 *    [ 'table1', 'table2', ... ] }
 * ```
 *
 * The `data` property can be null if an error occurs (see below).
 *
 * ## The `error` property
 *
 * In the event of a service error (or transfer error), the
 * `response.error` property will be filled with the given
 * error data in the form:
 *
 * ```
 * { code: 'SHORT_UNIQUE_ERROR_CODE',
 *   message: 'Some human readable error message' }
 * ```
 *
 * In the case of an error, the `data` property will be `null`.
 * Note that if you handle events that can be in a failure state,
 * you should always check whether `response.error` is set
 * before attempting to access the `response.data` property.
 *
 * @!attribute data
 *   @readonly
 *   @!group Data Properties
 *   @note Inside of a {AWS.Request~httpData} event, this
 *     property contains a single raw packet instead of the
 *     full de-serialized service response.
 *   @return [Object] the de-serialized response data
 *     from the service.
 *
 * @!attribute error
 *   An structure containing information about a service
 *   or networking error.
 *   @readonly
 *   @!group Data Properties
 *   @note This attribute is only filled if a service or
 *     networking error occurs.
 *   @return [Object]
 *     * code [String] a unique short code representing the
 *       error that was emitted.
 *     * message [String] a longer human readable error message
 *     * retryable [Boolean] whether the error message is
 *       retryable.
 *
 * @!attribute service
 *   @readonly
 *   @!group Operation Properties
 *   @return [AWS.Service] The service object that initiated the request.
 *
 * @!attribute operation
 *   @readonly
 *   @!group Operation Properties
 *   @return [String] the name of the operation executed on
 *     the service.
 *
 * @!attribute params
 *   @readonly
 *   @!group Operation Properties
 *   @return [Object] the parameters sent in the request to
 *     the service.
 *
 * @!attribute retryCount
 *   @readonly
 *   @!group Operation Properties
 *   @return [Integer] the number of retries that were
 *     attempted before the request was completed.
 *
 * @!attribute redirectCount
 *   @readonly
 *   @!group Operation Properties
 *   @return [Integer] the number of redirects that were
 *     followed before the request was completed.
 *
 * @!attribute httpResponse
 *   @readonly
 *   @!group HTTP Properties
 *   @return [AWS.HttpResponse] the raw HTTP response object
 *     containing the response headers and body information
 *     from the server.
 *
 * @see AWS.Request
 */
AWS.Response = inherit({

  /**
   * @api private
   */
  constructor: function Response(request) {
    this.request = request;
    this.data = null;
    this.error = null;
    this.retryCount = 0;
    this.redirectCount = 0;
    this.httpResponse = new AWS.HttpResponse();
  },

  /**
   * Creates a new request for the next page of response data, calling the
   * callback with the page data if a callback is provided.
   *
   * @callback callback function(err, data)
   *   Called when a page of data is returned from the next request.
   *
   *   @param err [Error] an error object, if an error occurred in the request
   *   @param data [Object] the next page of data, or null, if there are no
   *     more pages left.
   * @return [AWS.Request] the request object for the next page of data
   * @return [null] if no callback is provided and there are no pages left
   *   to retrieve.
   * @api experimental
   * @since v1.4.0
   */
  nextPage: function nextPage(callback) {
    /*jshint maxcomplexity:10*/
    var config;
    var service = this.request.service;
    var operation = this.request.operation;
    try {
      config = service.paginationConfig(operation, true);
    } catch (e) { this.error = e; }

    if (!this.hasNextPage()) {
      if (callback) callback(this.error, null);
      else if (this.error) throw this.error;
      return null;
    }

    var params = AWS.util.copy(this.request.params);
    if (!this.nextPageTokens) {
      return callback ? callback(null, null) : null;
    } else {
      var inputTokens = config.inputToken;
      if (typeof inputTokens === 'string') inputTokens = [inputTokens];
      for (var i = 0; i < inputTokens.length; i++) {
        params[inputTokens[i]] = this.nextPageTokens[i];
      }
      return service.makeRequest(this.request.operation, params, callback);
    }
  },

  /**
   * @return [Boolean] whether more pages of data can be returned by further
   *   requests
   * @api experimental
   * @since v1.4.0
   */
  hasNextPage: function hasNextPage() {
    this.cacheNextPageTokens();
    if (this.nextPageTokens) return true;
    if (this.nextPageTokens === undefined) return undefined;
    else return false;
  },

  /**
   * @api private
   */
  cacheNextPageTokens: function cacheNextPageTokens() {
    /*jshint maxcomplexity:10*/
    if (this.hasOwnProperty('nextPageTokens')) return this.nextPageTokens;
    this.nextPageTokens = undefined;

    var config = this.request.service.paginationConfig(this.request.operation);
    if (!config) return this.nextPageTokens;

    this.nextPageTokens = null;
    if (config.moreResults) {
      if (!AWS.util.jamespath.find(config.moreResults, this.data)) {
        return this.nextPageTokens;
      }
    }

    var exprs = config.outputToken;
    if (typeof exprs === 'string') exprs = [exprs];
    AWS.util.arrayEach.call(this, exprs, function (expr) {
      var output = AWS.util.jamespath.find(expr, this.data);
      if (output) {
        this.nextPageTokens = this.nextPageTokens || [];
        this.nextPageTokens.push(output);
      }
    });

    return this.nextPageTokens;
  }

});

},{"./core":4,"__browserify_process":82,"stream":66}],11:[function(require,module,exports){
var process=require("__browserify_process");/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var domain;

/**
 * @!method on(eventName, callback)
 *   Registers an event listener callback for the event given by `eventName`.
 *   Parameters passed to the callback function depend on the individual event
 *   being triggered. See the event documentation for those parameters.
 *
 *   @param eventName [String] the event name to register the listener for
 *   @param callback [Function] the listener callback function
 *   @return [AWS.SequentialExecutor] the same object for chaining
 */
AWS.SequentialExecutor = AWS.util.inherit({

  constructor: function SequentialExecutor() {
    this.domain = null;
    if (require('events').usingDomains) {
      domain = require('domain');
      if (domain.active) this.domain = domain.active;
    }
    this._events = {};
  },

  /**
   * @api private
   */
  listeners: function listeners(eventName) {
    return this._events[eventName] ? this._events[eventName].slice(0) : [];
  },

  on: function on(eventName, listener) {
    if (this._events[eventName]) {
      this._events[eventName].push(listener);
    } else {
      this._events[eventName] = [listener];
    }
    return this;
  },

  /**
   * @api private
   */
  onAsync: function onAsync(eventName, listener) {
    listener.async = true;
    return this.on(eventName, listener);
  },

  removeListener: function removeListener(eventName, listener) {
    var listeners = this._events[eventName];
    if (listeners) {
      var length = listeners.length;
      var position = -1;
      for (var i = 0; i < length; ++i) {
        if (listeners[i] === listener) {
          position = i;
        }
      }
      if (position > -1) {
        listeners.splice(position, 1);
      }
    }
    return this;
  },

  removeAllListeners: function removeAllListeners(eventName) {
    if (eventName) {
      delete this._events[eventName];
    } else {
      this._events = {};
    }
    return this;
  },

  /**
   * @api private
   */
  emit: function emit(eventName, eventArgs, doneCallback) {
    if (!doneCallback) doneCallback = this.unhandledErrorCallback;
    if (domain && this.domain instanceof domain.Domain)
      this.domain.enter();

    var listeners = this.listeners(eventName);
    var count = listeners.length;
    this.callListeners(listeners, eventArgs, doneCallback);
    return count > 0;
  },

  /**
   * @api private
   */
  callListeners: function callListeners(listeners, args, doneCallback) {
    if (listeners.length === 0) {
      doneCallback.call(this);
      if (domain && this.domain instanceof domain.Domain)
        this.domain.exit();
    } else {
      var listener = listeners.shift();
      if (listener.async) {

        // asynchronous listener
        var callNextListener = function(err) {
          if (err) {
            doneCallback.call(this, err);
            if (domain && this.domain instanceof domain.Domain)
              this.domain.exit();
          } else {
            this.callListeners(listeners, args, doneCallback);
          }
        }.bind(this);
        listener.apply(this, args.concat([callNextListener]));

      } else {

        // synchronous listener
        try {
          listener.apply(this, args);
          this.callListeners(listeners, args, doneCallback);
        } catch (err) {
          doneCallback.call(this, err);
          if (domain && this.domain instanceof domain.Domain)
            this.domain.exit();
        }

      }
    }
  },

  /**
   * Adds or copies a set of listeners from another list of
   * listeners or SequentialExecutor object.
   *
   * @param listeners [map<String,Array<Function>>, AWS.SequentialExecutor]
   *   a list of events and callbacks, or an event emitter object
   *   containing listeners to add to this emitter object.
   * @return [AWS.SequentialExecutor] the emitter object, for chaining.
   * @example Adding listeners from a map of listeners
   *   emitter.addListeners({
   *     event1: [function() { ... }, function() { ... }],
   *     event2: [function() { ... }]
   *   });
   *   emitter.emit('event1'); // emitter has event1
   *   emitter.emit('event2'); // emitter has event2
   * @example Adding listeners from another emitter object
   *   var emitter1 = new AWS.SequentialExecutor();
   *   emitter1.on('event1', function() { ... });
   *   emitter1.on('event2', function() { ... });
   *   var emitter2 = new AWS.SequentialExecutor();
   *   emitter2.addListeners(emitter1);
   *   emitter2.emit('event1'); // emitter2 has event1
   *   emitter2.emit('event2'); // emitter2 has event2
   */
  addListeners: function addListeners(listeners) {
    var self = this;

    // extract listeners if parameter is an SequentialExecutor object
    if (listeners._events) listeners = listeners._events;

    AWS.util.each(listeners, function(event, callbacks) {
      if (typeof callbacks === 'function') callbacks = [callbacks];
      AWS.util.arrayEach(callbacks, function(callback) {
        self.on(event, callback);
      });
    });

    return self;
  },

  /**
   * Registers an event with {on} and saves the callback handle function
   * as a property on the emitter object using a given `name`.
   *
   * @param name [String] the property name to set on this object containing
   *   the callback function handle so that the listener can be removed in
   *   the future.
   * @param (see on)
   * @return (see on)
   * @example Adding a named listener DATA_CALLBACK
   *   var listener = function() { doSomething(); };
   *   emitter.addNamedListener('DATA_CALLBACK', 'data', listener);
   *
   *   // the following prints: true
   *   console.log(emitter.DATA_CALLBACK == listener);
   */
  addNamedListener: function addNamedListener(name, eventName, callback) {
    this[name] = callback;
    this.addListener(eventName, callback);
    return this;
  },

  /**
   * @api private
   */
  addNamedAsyncListener: function addNamedAsyncListener(name, eventName, callback) {
    callback.async = true;
    return this.addNamedListener(name, eventName, callback);
  },

  /**
   * Helper method to add a set of named listeners using
   * {addNamedListener}. The callback contains a parameter
   * with a handle to the `addNamedListener` method.
   *
   * @callback callback function(add)
   *   The callback function is called immediately in order to provide
   *   the `add` function to the block. This simplifies the addition of
   *   a large group of named listeners.
   *   @param add [Function] the {addNamedListener} function to call
   *     when registering listeners.
   * @example Adding a set of named listeners
   *   emitter.addNamedListeners(function(add) {
   *     add('DATA_CALLBACK', 'data', function() { ... });
   *     add('OTHER', 'otherEvent', function() { ... });
   *     add('LAST', 'lastEvent', function() { ... });
   *   });
   *
   *   // these properties are now set:
   *   emitter.DATA_CALLBACK;
   *   emitter.OTHER;
   *   emitter.LAST;
   */
  addNamedListeners: function addNamedListeners(callback) {
    var self = this;
    callback(
      function() {
        self.addNamedListener.apply(self, arguments);
      },
      function() {
        self.addNamedAsyncListener.apply(self, arguments);
      }
    );
    return this;
  },

  /**
   * @api private
   */
  unhandledErrorCallback: function unhandledErrorCallback(err) {
    if (err) {
      if (domain && this.domain instanceof domain.Domain) {
        err.domainEmitter = this;
        err.domain = this.domain;
        err.domainThrown = false;
        this.domain.emit('error', err);
      } else if (process.exit) {
        console.error(err.stack ? err.stack : err);
        process.exit(1);
      } else {
        throw err;
      }
    }
  }
});

/**
 * {on} is the prefered method.
 * @api private
 */
AWS.SequentialExecutor.prototype.addListener = AWS.SequentialExecutor.prototype.on;

},{"./core":4,"__browserify_process":82,"domain":60,"events":62}],12:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
 * @api private
 */
AWS.Service = inherit({

  constructor: function Service(config) {
    if (!this.loadServiceClass) {
      throw AWS.util.error(new Error(),
        'Service must be constructed with `new\' operator');
    }
    var ServiceClass = this.loadServiceClass(config || {});
    if (ServiceClass) return new ServiceClass(config);
    this.initialize(config);
  },

  initialize: function initialize(config) {
    this.client = this; // backward compatibility with client property
    this.config = new AWS.Config(AWS.config);
    if (config) this.config.update(config, true);
    this.setEndpoint(this.config.endpoint);
  },

  loadServiceClass: function loadServiceClass(serviceConfig) {
    var config = serviceConfig;
    if (!AWS.util.isEmpty(this.api)) {
      return;
    } else if (config.apiConfig) {
      return AWS.Service.defineServiceApi(this.constructor, config.apiConfig);
    } else if (!this.constructor.services) {
      return;
    } else {
      config = new AWS.Config(AWS.config);
      config.update(serviceConfig, true);
      var version = config.apiVersions[this.constructor.serviceIdentifier];
      version = version || config.apiVersion;
      return this.getLatestServiceClass(version);
    }
  },

  getLatestServiceClass: function getLatestServiceClass(version) {
    version = this.getLatestServiceVersion(version);
    if (this.constructor.services[version] === null) {
      AWS.Service.defineServiceApi(this.constructor, version);
    }

    return this.constructor.services[version];
  },

  getLatestServiceVersion: function getLatestServiceVersion(version) {
    /*jshint maxcomplexity:10*/
    if (!this.constructor.services || this.constructor.services.length === 0) {
      throw new Error('No services defined on ' +
                      this.constructor.serviceIdentifier);
    }

    if (!version) {
      version = 'latest';
    } else if (AWS.util.isType(version, Date)) {
      version = AWS.util.date.iso8601(version).split('T')[0];
    }

    if (Object.hasOwnProperty(this.constructor.services, version)) {
      return version;
    }

    var keys = Object.keys(this.constructor.services).sort();
    for (var i = keys.length - 1; i >= 0; i--) {
      if (keys[i] <= version) return keys[i];
    }

    throw new Error('Could not find ' + this.constructor.serviceIdentifier +
                    ' API to satisfy version constraint `' + version + '\'');
  },

  api: {},

  defaultRetryCount: 3,

  makeRequest: function makeRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = null;
    }

    params = params || {};
    if (this.config.params) { // copy only toplevel bound params
      var rules = this.api.operations[operation];
      if (rules) {
        params = AWS.util.copy(params);
        AWS.util.each(this.config.params, function(key, value) {
          if (rules.input.members[key]) {
            if (params[key] === undefined || params[key] === null) {
              params[key] = value;
            }
          }
        });
      }
    }

    var request = new AWS.Request(this, operation, params);
    this.addAllRequestListeners(request);

    if (callback) request.send(callback);
    return request;
  },

  addAllRequestListeners: function addAllRequestListeners(request) {
    var list = [AWS.events, AWS.EventListeners.Core,
                this.serviceInterface()];
    for (var i = 0; i < list.length; i++) {
      if (list[i]) request.addListeners(list[i]);
    }

    // disable parameter validation
    if (!this.config.paramValidation) {
      request.removeListener('validate',
        AWS.EventListeners.Core.VALIDATE_PARAMETERS);
    }

    this.setupRequestListeners(request);
  },

  setupRequestListeners: function setupRequestListeners() {
  },

  serviceInterface: function serviceInterface() {
    /*jshint maxcomplexity:8*/
    switch (this.api.format) {
      case 'query': return AWS.EventListeners.Query;
      case 'json': return AWS.EventListeners.Json;
      case 'rest-json': return AWS.EventListeners.RestJson;
      case 'rest-xml': return AWS.EventListeners.RestXml;
    }
    if (this.api.format) {
      throw new Error('Invalid service `format\' ' +
        this.api.format + ' in API config');
    }
  },

  successfulResponse: function successfulResponse(resp) {
    return resp.httpResponse.statusCode < 300;
  },

  /**
   * How many times a failed request should be retried before giving up.
   * the defaultRetryCount can be overriden by service classes.
   */
  numRetries: function numRetries() {
    if (this.config.maxRetries !== undefined) {
      return this.config.maxRetries;
    } else {
      return this.defaultRetryCount;
    }
  },

  retryDelays: function retryDelays() {
    var retryCount = this.numRetries();
    var delays = [];
    for (var i = 0; i < retryCount; ++i) {
      delays[i] = Math.pow(2, i) * 30;
    }
    return delays;
  },

  retryableError: function retryableError(error) {
    if (this.networkingError(error)) return true;
    if (this.expiredCredentialsError(error)) return true;
    if (this.throttledError(error)) return true;
    if (error.statusCode >= 500) return true;
    return false;
  },

  networkingError: function networkingError(error) {
    return error.code == 'NetworkingError';
  },

  expiredCredentialsError: function expiredCredentialsError(error) {
    // TODO : this only handles *one* of the expired credential codes
    return (error.code === 'ExpiredTokenException');
  },

  throttledError: function throttledError(error) {
    // this logic varies between services
    return (error.code == 'ProvisionedThroughputExceededException');
  },

  setEndpoint: function setEndpoint(endpoint) {
    if (endpoint) {
      this.endpoint = new AWS.Endpoint(endpoint, this.config);
    } else if (this.api.globalEndpoint) {
      this.endpoint = new AWS.Endpoint(this.api.globalEndpoint, this.config);
    } else {
      var host = this.api.endpointPrefix + '.' + this.config.region + '.amazonaws.com';
      this.endpoint = new AWS.Endpoint(host, this.config);
    }
  },

  paginationConfig: function paginationConfig(operation, throwException) {
    function fail(name) {
      if (throwException) {
        var e = new Error();
        throw AWS.util.error(e, 'No pagination configuration for ' + name);
      }
      return null;
    }

    if (!this.api.pagination) return fail('service');
    if (!this.api.pagination[operation]) return fail(operation);
    return this.api.pagination[operation];
  }
});

AWS.util.update(AWS.Service, {

  /**
   * Adds one method for each operation described in the api configuration
   */
  defineMethods: function defineMethods(svc) {
    AWS.util.each(svc.prototype.api.operations, function iterator(method) {
      if (svc.prototype[method]) return;
      svc.prototype[method] = function (params, callback) {
        return this.makeRequest(method, params, callback);
      };
    });
  },

  defineService: function defineService(serviceIdentifier, versions, features) {
    if (!AWS.util.isType(versions, Array)) {
      features = versions;
      versions = [];
    }

    var svc = inherit(AWS.Service, features || {});
    svc.Client = svc; // backward compatibility for Client class

    if (typeof serviceIdentifier === 'string') {
      // create versions hash
      var services = {};
      for (var i = 0; i < versions.length; i++) {
        services[versions[i]] = null;
      }

      svc.services = svc.services || services;
      svc.serviceIdentifier = svc.serviceIdentifier || serviceIdentifier;
    } else { // defineService called with an API
      svc.prototype.api = serviceIdentifier;
      AWS.Service.defineMethods(svc);
    }

    return svc;
  },

  defineServiceApi: function defineServiceApi(superclass, version) {
    var svc = inherit(superclass, {
      serviceIdentifier: superclass.serviceIdentifier
    });

    if (typeof version === 'string') {
      var apiFile = superclass.serviceIdentifier + '-' + version;
      try {
        svc.prototype.api = require('./services/api/' + apiFile);
      } catch (err) {
        throw AWS.util.error(err, {
          message: 'Could not find API configuration ' + apiFile
        });
      }
      superclass.services[version] = svc;
    } else {
      svc.prototype.api = version;
    }

    AWS.Service.defineMethods(svc);
    return svc;
  }
});


require("./services/api/dynamodb-2012-08-10");
require("./services/api/s3-2006-03-01");
},{"./core":4,"./services/api/dynamodb-2012-08-10":18,"./services/api/s3-2006-03-01":19}],13:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
require('../json/builder');

/**
 * @api private
 */
AWS.ServiceInterface.Json = {
  buildRequest: function buildRequest(req) {
    var httpRequest = req.httpRequest;
    var api = req.service.api;
    var target = api.targetPrefix + '.' + api.operations[req.operation].name;
    var version = api.jsonVersion || '1.0';

    var rules = api.operations[req.operation].input;
    var builder = new AWS.JSON.Builder(rules, api);

    httpRequest.path = '/';
    httpRequest.body = builder.toJSON(req.params || {});
    httpRequest.headers['Content-Type'] = 'application/x-amz-json-' + version;
    httpRequest.headers['X-Amz-Target'] = target;
  },

  extractError: function extractError(resp) {
    var error = {};
    var httpResponse = resp.httpResponse;

    if (httpResponse.body.length > 0) {
      var e = JSON.parse(httpResponse.body.toString());
      if (e.__type || e.code) {
        error.code = (e.__type || e.code).split('#').pop();
      } else {
        error.code = 'UnknownError';
      }
      if (error.code === 'RequestEntityTooLarge') {
        error.message = 'Request body must be less than 1 MB';
      } else {
        error.message = (e.message || e.Message || null);
      }
    } else {
      error.code = httpResponse.statusCode;
      error.message = null;
    }

    resp.error = AWS.util.error(new Error(), error);
  },

  extractData: function extractData(resp) {
    resp.data = JSON.parse(resp.httpResponse.body.toString() || '{}');
  }

};

},{"../core":4,"../json/builder":7}],14:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
var inherit = AWS.util.inherit;

require('../xml/parser');

/**
 * @api private
 */
AWS.ServiceInterface.Query = {
  buildRequest: function buildRequest(req) {
    var operation = req.service.api.operations[req.operation];
    var httpRequest = req.httpRequest;
    httpRequest.path = '/';
    httpRequest.headers['Content-Type'] =
      'application/x-www-form-urlencoded; charset=utf-8';
    httpRequest.params = {
      Version: req.service.api.apiVersion,
      Action: operation.name
    };

    // convert the request parameters into a list of query params,
    // e.g. Deeply.NestedParam.0.Name=value
    var rules = operation.input;
    if (rules) rules = rules.members;
    var builder = new AWS.QueryParamSerializer(rules, req.service.api);
    builder.serialize(req.params, function(name, value) {
      httpRequest.params[name] = value;
    });
    httpRequest.body = AWS.util.queryParamsToString(httpRequest.params);
  },

  extractError: function extractError(resp) {
    var data, body = resp.httpResponse.body.toString();
    if (body.match('<UnknownOperationException')) {
      data = {
        Code: 'UnknownOperation',
        Message: 'Unknown operation ' + resp.request.operation
      };
    } else {
      data = new AWS.XML.Parser({}).parse(body);
    }

    if (data.Errors) data = data.Errors;
    if (data.Error) data = data.Error;
    if (data.Code) {
      resp.error = AWS.util.error(new Error(), {
        code: data.Code,
        message: data.Message
      });
    } else {
      resp.error = AWS.util.error(new Error(), {
        code: resp.httpResponse.statusCode,
        message: null
      });
    }
  },

  extractData: function extractData(resp) {
    var req = resp.request;
    var operation = req.service.api.operations[req.operation];
    var wrapperKey = operation.name + 'Result';
    var rules = operation.output || {};

    if (req.service.api.resultWrapped) {
      var tmp = {
        type: 'structure',
        members: {}
      };
      tmp.members[wrapperKey] = rules;
      rules = tmp;
    }

    var parser = new AWS.XML.Parser(rules);
    var data = parser.parse(resp.httpResponse.body.toString());

    if (req.service.api.resultWrapped) {
      if (data[wrapperKey]) {
        AWS.util.update(data, data[wrapperKey]);
        delete data[wrapperKey];
      }
    }

    AWS.util.each((operation.output || {}).members || {}, function (memberName, memberRules) {
      if (memberRules.wrapper && data[memberName]) {
        AWS.util.update(data, data[memberName]);
        delete data[memberName];
      }
    });

    resp.data = data;
  }
};

/**
 * @api private
 */
AWS.QueryParamSerializer = inherit({

  constructor: function QueryParamSerializer(rules, options) {
    this.rules = rules;
    this.timestampFormat = options ? options.timestampFormat : 'iso8601';
  },

  serialize: function serialize(params, fn) {
    this.serializeStructure('', params, this.rules, fn);
  },

  serializeStructure: function serializeStructure(prefix, struct, rules, fn) {
    var that = this;
    AWS.util.each(struct, function (name, member) {
      var n = rules[name].name || name;
      var memberName = prefix ? prefix + '.' + n : n;
      that.serializeMember(memberName, member, rules[name], fn);
    });
  },

  serializeMap: function serialzeMap(name, map, rules, fn) {
    var i = 1;
    var that = this;
    AWS.util.each(map, function (key, value) {
      var prefix = rules.flattened ? '.' : '.entry.';
      var position = prefix + (i++) + '.';
      var keyName = position + (rules.keys.name || 'key');
      var valueName = position + (rules.members.name || 'value');
      that.serializeMember(name + keyName, key, rules.keys, fn);
      that.serializeMember(name + valueName, value, rules.members, fn);
    });
  },

  serializeList: function serializeList(name, list, rules, fn) {
    var that = this;
    var memberRules = rules.members || {};
    AWS.util.arrayEach(list, function (v, n) {
      var suffix = '.' + (n + 1);
      if (rules.flattened) {
        if (memberRules.name) {
          var parts = name.split('.');
          parts.pop();
          parts.push(memberRules.name);
          name = parts.join('.');
        }
      } else {
        suffix = '.member' + suffix;
      }
      that.serializeMember(name + suffix, v, memberRules, fn);
    });
  },

  serializeMember: function serializeMember(name, value, rules, fn) {
    if (rules.type === 'structure') {
      this.serializeStructure(name, value, rules.members, fn);
    } else if (rules.type === 'list') {
      this.serializeList(name, value, rules, fn);
    } else if (rules.type === 'map') {
      this.serializeMap(name, value, rules, fn);
    } else if (rules.type === 'timestamp') {
      var timestampFormat = rules.format || this.timestampFormat;
      fn.call(this, name, AWS.util.date.format(value, timestampFormat));
    } else {
      fn.call(this, name, String(value));
    }
  }

});

},{"../core":4,"../xml/parser":59}],15:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

/**
 * @api private
 */
AWS.ServiceInterface.Rest = {
  buildRequest: function buildRequest(req) {
    AWS.ServiceInterface.Rest.populateMethod(req);
    AWS.ServiceInterface.Rest.populateURI(req);
    AWS.ServiceInterface.Rest.populateHeaders(req);
  },

  extractError: function extractError() {
  },

  extractData: function extractData(resp) {
    var req = resp.request;
    var data = {};
    var r = resp.httpResponse;
    var operation = req.service.api.operations[req.operation];
    var rules = (operation.output || {}).members || {};

    // normalize headers names to lower-cased keys for matching
    var headers = {};
    AWS.util.each(r.headers, function (k, v) {
      headers[k.toLowerCase()] = v;
    });

    AWS.util.each(rules, function (name, rule) {
      if (rule.location === 'header') {
        var header = (rule.name || name).toLowerCase();
        if (rule.type == 'map') {
          data[name] = {};
          AWS.util.each(r.headers, function (k, v) {
            var result = k.match(new RegExp('^' + rule.name + '(.+)', 'i'));
            if (result !== null) {
              data[name][result[1]] = v;
            }
          });
        }
        if (headers[header] !== undefined) {
          data[name] = headers[header];
        }
      }
      if (rule.location === 'status') {
        data[name] = parseInt(r.statusCode, 10);
      }
    });

    resp.data = data;
  },

  populateMethod: function populateMethod(req) {
    req.httpRequest.method = req.service.api.operations[req.operation].http.method;
  },

  populateURI: function populateURI(req) {
    var operation = req.service.api.operations[req.operation];
    var uri = operation.http.uri;
    var pathPattern = uri.split(/\?/)[0];
    var rules = (operation.input || {}).members || {};

    var escapePathParam = req.service.escapePathParam ||
      AWS.ServiceInterface.Rest.escapePathParam;
    var escapeQuerystringParam = req.service.escapeQuerystringParam ||
      AWS.ServiceInterface.Rest.escapeQuerystringParam;

    AWS.util.each.call(this, rules, function (name, rule) {
      if (rule.location == 'uri' && req.params[name]) {
        // if the value is being inserted into the path portion of the
        // URI, then we need to use a different (potentially) escaping
        // pattern, this is especially true for S3 path params like Key.
        var value = pathPattern.match('{' + name + '}') ?
          escapePathParam(req.params[name]) :
          escapeQuerystringParam(req.params[name]);

        uri = uri.replace('{' + name + '}', value);
      }
    });

    var path = uri.split('?')[0];
    var querystring = uri.split('?')[1];

    if (querystring) {
      var parts = [];
      AWS.util.arrayEach(querystring.split('&'), function (part) {
        if (!part.match('{\\w+}')) parts.push(part);
      });
      uri = (parts.length > 0 ? path + '?' + parts.join('&') : path);
    } else {
      uri = path;
    }

    req.httpRequest.path = uri;
  },

  escapePathParam: function escapePathParam(value) {
    return AWS.util.uriEscape(String(value));
  },

  escapeQuerystringParam: function escapeQuerystringParam(value) {
    return AWS.util.uriEscape(String(value));
  },

  populateHeaders: function populateHeaders(req) {
    var operation = req.service.api.operations[req.operation];
    var rules = (operation.input || {}).members || {};

    AWS.util.each.call(this, rules, function (name, rule) {
      if (rule.location === 'header' && req.params[name]) {
        if (rule.type === 'map') {
          AWS.util.each(req.params[name], function (key, value) {
            req.httpRequest.headers[rule.name + key] = value;
          });
        } else {
          var value = req.params[name];
          if (rule.type === 'timestamp') {
            var timestampFormat = rule.format || req.service.api.timestampFormat;
            value = AWS.util.date.format(value, timestampFormat);
          }
          req.httpRequest.headers[rule.name || name] = value;
        }
      }
    });

  }
};

},{"../core":4}],16:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
require('./rest');
require('./json');

/**
 * @api private
 */
AWS.ServiceInterface.RestJson = {
  buildRequest: function buildRequest(req) {
    AWS.ServiceInterface.Rest.buildRequest(req);
    AWS.ServiceInterface.RestJson.populateBody(req);
  },

  extractError: function extractError(resp) {
    AWS.ServiceInterface.Json.extractError(resp);
  },

  extractData: function extractData(resp) {
    AWS.ServiceInterface.Rest.extractData(resp);

    var req = resp.request;
    var rules = req.service.api.operations[req.operation].output || {};
    if (rules.payload && rules.members[rules.payload]) {
      if (rules.members[rules.payload].streaming) {
        resp.data[rules.payload] = resp.httpResponse.body;
      } else {
        resp.data[rules.payload] = resp.httpResponse.body.toString();
      }
    } else {
      var data = resp.data;
      AWS.ServiceInterface.Json.extractData(resp);
      resp.data = AWS.util.merge(data, resp.data);
    }

    // extract request id
    resp.data.RequestId = resp.httpResponse.headers['x-amz-request-id'] ||
                          resp.httpResponse.headers['x-amzn-requestid'];
  },

  populateBody: function populateBody(req) {
    /*jshint maxcomplexity:10*/
    var input = req.service.api.operations[req.operation].input;
    var payload = input.payload;
    var params = {};

    if (typeof payload === 'string') {

      var rules = input.members[payload];
      params = req.params[payload];

      if (params === undefined) return;

      if (rules.type === 'structure') {
        req.httpRequest.body = this.toJSON(params, input, req.service.api);
      } else {
        // non-xml paylaod
        req.httpRequest.body = params;
      }

    } else if (payload) {

      AWS.util.arrayEach(payload, function (param) {
        if (req.params[param] !== undefined) {
          params[param] = req.params[param];
        }
      });
      req.httpRequest.body = this.toJSON(params, input, req.service.api);

    }
  },

  toJSON: function toJSON(params, rules, api) {
    var builder = new AWS.JSON.Builder(rules, api);
    return builder.toJSON(params);
  }

};

},{"../core":4,"./json":13,"./rest":15}],17:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
require('../xml/builder');
require('./rest');

/**
 * @api private
 */
AWS.ServiceInterface.RestXml = {
  buildRequest: function buildRequest(req) {
    AWS.ServiceInterface.Rest.buildRequest(req);
    AWS.ServiceInterface.RestXml.populateBody(req);
  },

  extractError: function extractError(resp) {
    AWS.ServiceInterface.Rest.extractError(resp);

    var data = new AWS.XML.Parser({}).parse(resp.httpResponse.body.toString());
    if (data.Errors) data = data.Errors;
    if (data.Error) data = data.Error;
    if (data.Code) {
      resp.error = AWS.util.error(new Error(), {
        code: data.Code,
        message: data.Message
      });
    } else {
      resp.error = AWS.util.error(new Error(), {
        code: resp.httpResponse.statusCode,
        message: null
      });
    }
  },

  extractData: function extractData(resp) {
    AWS.ServiceInterface.Rest.extractData(resp);

    var req = resp.request;
    var httpResponse = resp.httpResponse;
    var operation = req.service.api.operations[req.operation];
    var rules = operation.output.members;

    var output = operation.output;
    var payload = output.payload;

    if (payload) {
      if (rules[payload].streaming) {
        resp.data[payload] = httpResponse.body;
      } else {
        resp.data[payload] = httpResponse.body.toString();
      }
    } else if (httpResponse.body.length > 0) {
      var parser = new AWS.XML.Parser(operation.output || {});
      AWS.util.update(resp.data, parser.parse(httpResponse.body.toString()));
    }

    // extract request id
    resp.data.RequestId = httpResponse.headers['x-amz-request-id'] ||
                          httpResponse.headers['x-amzn-requestid'];
  },

  populateBody: function populateBody(req) {
    /*jshint maxcomplexity:10*/
    var input = req.service.api.operations[req.operation].input;
    var payload = input.payload;
    var rules = {};
    var builder = null;
    var params = req.params;

    if (typeof payload === 'string') {

      rules = input.members[payload];
      params = params[payload];

      if (params === undefined) return;

      if (rules.type === 'structure') {
        builder = new AWS.XML.Builder(payload, rules.members, req.service.api);
        req.httpRequest.body = builder.toXML(params);
      } else {
        // non-xml paylaod
        req.httpRequest.body = params;
      }

    } else if (payload) {

      AWS.util.arrayEach(payload, function (member) {
        rules[member] = input.members[member];
      });

      builder = new AWS.XML.Builder(input.wrapper, rules, req.service.api);
      req.httpRequest.body = builder.toXML(params);

    }

  }
};

},{"../core":4,"../xml/builder":58,"./rest":15}],18:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

module.exports = {
  format: 'json',
  apiVersion: '2012-08-10',
  endpointPrefix: 'dynamodb',
  jsonVersion: '1.0',
  serviceAbbreviation: 'DynamoDB',
  serviceFullName: 'Amazon DynamoDB',
  signatureVersion: 'v4',
  targetPrefix: 'DynamoDB_20120810',
  timestampFormat: 'iso8601',
  operations: {
    batchGetItem: {
      name: 'BatchGetItem',
      input: {
        type: 'structure',
        members: {
          RequestItems: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                Keys: {
                  type: 'list',
                  members: {
                    type: 'map',
                    keys: {
                    },
                    members: {
                      type: 'structure',
                      members: {
                        S: {
                        },
                        N: {
                        },
                        B: {
                          type: 'base64'
                        },
                        SS: {
                          type: 'list',
                          members: {
                          }
                        },
                        NS: {
                          type: 'list',
                          members: {
                          }
                        },
                        BS: {
                          type: 'list',
                          members: {
                            type: 'base64'
                          }
                        }
                      }
                    }
                  },
                  required: true
                },
                AttributesToGet: {
                  type: 'list',
                  members: {
                  }
                },
                ConsistentRead: {
                  type: 'boolean'
                }
              }
            },
            required: true
          },
          ReturnConsumedCapacity: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Responses: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'list',
              members: {
                type: 'map',
                keys: {
                },
                members: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list',
                      members: {
                      }
                    },
                    NS: {
                      type: 'list',
                      members: {
                      }
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                }
              }
            }
          },
          UnprocessedKeys: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                Keys: {
                  type: 'list',
                  members: {
                    type: 'map',
                    keys: {
                    },
                    members: {
                      type: 'structure',
                      members: {
                        S: {
                        },
                        N: {
                        },
                        B: {
                          type: 'base64'
                        },
                        SS: {
                          type: 'list',
                          members: {
                          }
                        },
                        NS: {
                          type: 'list',
                          members: {
                          }
                        },
                        BS: {
                          type: 'list',
                          members: {
                            type: 'base64'
                          }
                        }
                      }
                    }
                  }
                },
                AttributesToGet: {
                  type: 'list',
                  members: {
                  }
                },
                ConsistentRead: {
                  type: 'boolean'
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                TableName: {
                },
                CapacityUnits: {
                  type: 'float'
                }
              }
            }
          }
        }
      }
    },
    batchWriteItem: {
      name: 'BatchWriteItem',
      input: {
        type: 'structure',
        members: {
          RequestItems: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'list',
              members: {
                type: 'structure',
                members: {
                  PutRequest: {
                    type: 'structure',
                    members: {
                      Item: {
                        type: 'map',
                        keys: {
                        },
                        members: {
                          type: 'structure',
                          members: {
                            S: {
                            },
                            N: {
                            },
                            B: {
                              type: 'base64'
                            },
                            SS: {
                              type: 'list',
                              members: {
                              }
                            },
                            NS: {
                              type: 'list',
                              members: {
                              }
                            },
                            BS: {
                              type: 'list',
                              members: {
                                type: 'base64'
                              }
                            }
                          }
                        },
                        required: true
                      }
                    }
                  },
                  DeleteRequest: {
                    type: 'structure',
                    members: {
                      Key: {
                        type: 'map',
                        keys: {
                        },
                        members: {
                          type: 'structure',
                          members: {
                            S: {
                            },
                            N: {
                            },
                            B: {
                              type: 'base64'
                            },
                            SS: {
                              type: 'list',
                              members: {
                              }
                            },
                            NS: {
                              type: 'list',
                              members: {
                              }
                            },
                            BS: {
                              type: 'list',
                              members: {
                                type: 'base64'
                              }
                            }
                          }
                        },
                        required: true
                      }
                    }
                  }
                }
              }
            },
            required: true
          },
          ReturnConsumedCapacity: {
          },
          ReturnItemCollectionMetrics: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          UnprocessedItems: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'list',
              members: {
                type: 'structure',
                members: {
                  PutRequest: {
                    type: 'structure',
                    members: {
                      Item: {
                        type: 'map',
                        keys: {
                        },
                        members: {
                          type: 'structure',
                          members: {
                            S: {
                            },
                            N: {
                            },
                            B: {
                              type: 'base64'
                            },
                            SS: {
                              type: 'list',
                              members: {
                              }
                            },
                            NS: {
                              type: 'list',
                              members: {
                              }
                            },
                            BS: {
                              type: 'list',
                              members: {
                                type: 'base64'
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  DeleteRequest: {
                    type: 'structure',
                    members: {
                      Key: {
                        type: 'map',
                        keys: {
                        },
                        members: {
                          type: 'structure',
                          members: {
                            S: {
                            },
                            N: {
                            },
                            B: {
                              type: 'base64'
                            },
                            SS: {
                              type: 'list',
                              members: {
                              }
                            },
                            NS: {
                              type: 'list',
                              members: {
                              }
                            },
                            BS: {
                              type: 'list',
                              members: {
                                type: 'base64'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ItemCollectionMetrics: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'list',
              members: {
                type: 'structure',
                members: {
                  ItemCollectionKey: {
                    type: 'map',
                    keys: {
                    },
                    members: {
                      type: 'structure',
                      members: {
                        S: {
                        },
                        N: {
                        },
                        B: {
                          type: 'base64'
                        },
                        SS: {
                          type: 'list',
                          members: {
                          }
                        },
                        NS: {
                          type: 'list',
                          members: {
                          }
                        },
                        BS: {
                          type: 'list',
                          members: {
                            type: 'base64'
                          }
                        }
                      }
                    }
                  },
                  SizeEstimateRangeGB: {
                    type: 'list',
                    members: {
                      type: 'float'
                    }
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                TableName: {
                },
                CapacityUnits: {
                  type: 'float'
                }
              }
            }
          }
        }
      }
    },
    createTable: {
      name: 'CreateTable',
      input: {
        type: 'structure',
        members: {
          AttributeDefinitions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                AttributeName: {
                  required: true
                },
                AttributeType: {
                  required: true
                }
              }
            },
            required: true
          },
          TableName: {
            required: true
          },
          KeySchema: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                AttributeName: {
                  required: true
                },
                KeyType: {
                  required: true
                }
              }
            },
            required: true
          },
          LocalSecondaryIndexes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                IndexName: {
                  required: true
                },
                KeySchema: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                        required: true
                      },
                      KeyType: {
                        required: true
                      }
                    }
                  },
                  required: true
                },
                Projection: {
                  type: 'structure',
                  members: {
                    ProjectionType: {
                    },
                    NonKeyAttributes: {
                      type: 'list',
                      members: {
                      }
                    }
                  },
                  required: true
                }
              }
            }
          },
          ProvisionedThroughput: {
            type: 'structure',
            members: {
              ReadCapacityUnits: {
                type: 'integer',
                required: true
              },
              WriteCapacityUnits: {
                type: 'integer',
                required: true
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TableDescription: {
            type: 'structure',
            members: {
              AttributeDefinitions: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    AttributeType: {
                    }
                  }
                }
              },
              TableName: {
              },
              KeySchema: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    KeyType: {
                    }
                  }
                }
              },
              TableStatus: {
              },
              CreationDateTime: {
                type: 'timestamp'
              },
              ProvisionedThroughput: {
                type: 'structure',
                members: {
                  LastIncreaseDateTime: {
                    type: 'timestamp'
                  },
                  LastDecreaseDateTime: {
                    type: 'timestamp'
                  },
                  NumberOfDecreasesToday: {
                    type: 'integer'
                  },
                  ReadCapacityUnits: {
                    type: 'integer'
                  },
                  WriteCapacityUnits: {
                    type: 'integer'
                  }
                }
              },
              TableSizeBytes: {
                type: 'integer'
              },
              ItemCount: {
                type: 'integer'
              },
              LocalSecondaryIndexes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    IndexName: {
                    },
                    KeySchema: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          AttributeName: {
                          },
                          KeyType: {
                          }
                        }
                      }
                    },
                    Projection: {
                      type: 'structure',
                      members: {
                        ProjectionType: {
                        },
                        NonKeyAttributes: {
                          type: 'list',
                          members: {
                          }
                        }
                      }
                    },
                    IndexSizeBytes: {
                      type: 'integer'
                    },
                    ItemCount: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    deleteItem: {
      name: 'DeleteItem',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          Key: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list',
                  members: {
                  }
                },
                NS: {
                  type: 'list',
                  members: {
                  }
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            },
            required: true
          },
          Expected: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                Value: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list',
                      members: {
                      }
                    },
                    NS: {
                      type: 'list',
                      members: {
                      }
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                },
                Exists: {
                  type: 'boolean'
                }
              }
            }
          },
          ReturnValues: {
          },
          ReturnConsumedCapacity: {
          },
          ReturnItemCollectionMetrics: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Attributes: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list',
                  members: {
                  }
                },
                NS: {
                  type: 'list',
                  members: {
                  }
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'structure',
            members: {
              TableName: {
              },
              CapacityUnits: {
                type: 'float'
              }
            }
          },
          ItemCollectionMetrics: {
            type: 'structure',
            members: {
              ItemCollectionKey: {
                type: 'map',
                keys: {
                },
                members: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list',
                      members: {
                      }
                    },
                    NS: {
                      type: 'list',
                      members: {
                      }
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                }
              },
              SizeEstimateRangeGB: {
                type: 'list',
                members: {
                  type: 'float'
                }
              }
            }
          }
        }
      }
    },
    deleteTable: {
      name: 'DeleteTable',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TableDescription: {
            type: 'structure',
            members: {
              AttributeDefinitions: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    AttributeType: {
                    }
                  }
                }
              },
              TableName: {
              },
              KeySchema: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    KeyType: {
                    }
                  }
                }
              },
              TableStatus: {
              },
              CreationDateTime: {
                type: 'timestamp'
              },
              ProvisionedThroughput: {
                type: 'structure',
                members: {
                  LastIncreaseDateTime: {
                    type: 'timestamp'
                  },
                  LastDecreaseDateTime: {
                    type: 'timestamp'
                  },
                  NumberOfDecreasesToday: {
                    type: 'integer'
                  },
                  ReadCapacityUnits: {
                    type: 'integer'
                  },
                  WriteCapacityUnits: {
                    type: 'integer'
                  }
                }
              },
              TableSizeBytes: {
                type: 'integer'
              },
              ItemCount: {
                type: 'integer'
              },
              LocalSecondaryIndexes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    IndexName: {
                    },
                    KeySchema: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          AttributeName: {
                          },
                          KeyType: {
                          }
                        }
                      }
                    },
                    Projection: {
                      type: 'structure',
                      members: {
                        ProjectionType: {
                        },
                        NonKeyAttributes: {
                          type: 'list',
                          members: {
                          }
                        }
                      }
                    },
                    IndexSizeBytes: {
                      type: 'integer'
                    },
                    ItemCount: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeTable: {
      name: 'DescribeTable',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Table: {
            type: 'structure',
            members: {
              AttributeDefinitions: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    AttributeType: {
                    }
                  }
                }
              },
              TableName: {
              },
              KeySchema: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    KeyType: {
                    }
                  }
                }
              },
              TableStatus: {
              },
              CreationDateTime: {
                type: 'timestamp'
              },
              ProvisionedThroughput: {
                type: 'structure',
                members: {
                  LastIncreaseDateTime: {
                    type: 'timestamp'
                  },
                  LastDecreaseDateTime: {
                    type: 'timestamp'
                  },
                  NumberOfDecreasesToday: {
                    type: 'integer'
                  },
                  ReadCapacityUnits: {
                    type: 'integer'
                  },
                  WriteCapacityUnits: {
                    type: 'integer'
                  }
                }
              },
              TableSizeBytes: {
                type: 'integer'
              },
              ItemCount: {
                type: 'integer'
              },
              LocalSecondaryIndexes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    IndexName: {
                    },
                    KeySchema: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          AttributeName: {
                          },
                          KeyType: {
                          }
                        }
                      }
                    },
                    Projection: {
                      type: 'structure',
                      members: {
                        ProjectionType: {
                        },
                        NonKeyAttributes: {
                          type: 'list',
                          members: {
                          }
                        }
                      }
                    },
                    IndexSizeBytes: {
                      type: 'integer'
                    },
                    ItemCount: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    getItem: {
      name: 'GetItem',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          Key: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list',
                  members: {
                  }
                },
                NS: {
                  type: 'list',
                  members: {
                  }
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            },
            required: true
          },
          AttributesToGet: {
            type: 'list',
            members: {
            }
          },
          ConsistentRead: {
            type: 'boolean'
          },
          ReturnConsumedCapacity: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Item: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list',
                  members: {
                  }
                },
                NS: {
                  type: 'list',
                  members: {
                  }
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'structure',
            members: {
              TableName: {
              },
              CapacityUnits: {
                type: 'float'
              }
            }
          }
        }
      }
    },
    listTables: {
      name: 'ListTables',
      input: {
        type: 'structure',
        members: {
          ExclusiveStartTableName: {
          },
          Limit: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TableNames: {
            type: 'list',
            members: {
            }
          },
          LastEvaluatedTableName: {
          }
        }
      }
    },
    putItem: {
      name: 'PutItem',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          Item: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list',
                  members: {
                  }
                },
                NS: {
                  type: 'list',
                  members: {
                  }
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            },
            required: true
          },
          Expected: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                Value: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list',
                      members: {
                      }
                    },
                    NS: {
                      type: 'list',
                      members: {
                      }
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                },
                Exists: {
                  type: 'boolean'
                }
              }
            }
          },
          ReturnValues: {
          },
          ReturnConsumedCapacity: {
          },
          ReturnItemCollectionMetrics: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Attributes: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list',
                  members: {
                  }
                },
                NS: {
                  type: 'list',
                  members: {
                  }
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'structure',
            members: {
              TableName: {
              },
              CapacityUnits: {
                type: 'float'
              }
            }
          },
          ItemCollectionMetrics: {
            type: 'structure',
            members: {
              ItemCollectionKey: {
                type: 'map',
                keys: {
                },
                members: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list',
                      members: {
                      }
                    },
                    NS: {
                      type: 'list',
                      members: {
                      }
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                }
              },
              SizeEstimateRangeGB: {
                type: 'list',
                members: {
                  type: 'float'
                }
              }
            }
          }
        }
      }
    },
    query: {
      name: 'Query',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          IndexName: {
          },
          Select: {
          },
          AttributesToGet: {
            type: 'list',
            members: {
            }
          },
          Limit: {
            type: 'integer'
          },
          ConsistentRead: {
            type: 'boolean'
          },
          KeyConditions: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                AttributeValueList: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      S: {
                      },
                      N: {
                      },
                      B: {
                        type: 'base64'
                      },
                      SS: {
                        type: 'list',
                        members: {
                        }
                      },
                      NS: {
                        type: 'list',
                        members: {
                        }
                      },
                      BS: {
                        type: 'list',
                        members: {
                          type: 'base64'
                        }
                      }
                    }
                  }
                },
                ComparisonOperator: {
                  required: true
                }
              }
            }
          },
          ScanIndexForward: {
            type: 'boolean'
          },
          ExclusiveStartKey: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list',
                  members: {
                  }
                },
                NS: {
                  type: 'list',
                  members: {
                  }
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ReturnConsumedCapacity: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Items: {
            type: 'list',
            members: {
              type: 'map',
              keys: {
              },
              members: {
                type: 'structure',
                members: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    type: 'base64'
                  },
                  SS: {
                    type: 'list',
                    members: {
                    }
                  },
                  NS: {
                    type: 'list',
                    members: {
                    }
                  },
                  BS: {
                    type: 'list',
                    members: {
                      type: 'base64'
                    }
                  }
                }
              }
            }
          },
          Count: {
            type: 'integer'
          },
          LastEvaluatedKey: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list',
                  members: {
                  }
                },
                NS: {
                  type: 'list',
                  members: {
                  }
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'structure',
            members: {
              TableName: {
              },
              CapacityUnits: {
                type: 'float'
              }
            }
          }
        }
      }
    },
    scan: {
      name: 'Scan',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          AttributesToGet: {
            type: 'list',
            members: {
            }
          },
          Limit: {
            type: 'integer'
          },
          Select: {
          },
          ScanFilter: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                AttributeValueList: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      S: {
                      },
                      N: {
                      },
                      B: {
                        type: 'base64'
                      },
                      SS: {
                        type: 'list',
                        members: {
                        }
                      },
                      NS: {
                        type: 'list',
                        members: {
                        }
                      },
                      BS: {
                        type: 'list',
                        members: {
                          type: 'base64'
                        }
                      }
                    }
                  }
                },
                ComparisonOperator: {
                  required: true
                }
              }
            }
          },
          ExclusiveStartKey: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list',
                  members: {
                  }
                },
                NS: {
                  type: 'list',
                  members: {
                  }
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ReturnConsumedCapacity: {
          },
          TotalSegments: {
            type: 'integer'
          },
          Segment: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Items: {
            type: 'list',
            members: {
              type: 'map',
              keys: {
              },
              members: {
                type: 'structure',
                members: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    type: 'base64'
                  },
                  SS: {
                    type: 'list',
                    members: {
                    }
                  },
                  NS: {
                    type: 'list',
                    members: {
                    }
                  },
                  BS: {
                    type: 'list',
                    members: {
                      type: 'base64'
                    }
                  }
                }
              }
            }
          },
          Count: {
            type: 'integer'
          },
          ScannedCount: {
            type: 'integer'
          },
          LastEvaluatedKey: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list',
                  members: {
                  }
                },
                NS: {
                  type: 'list',
                  members: {
                  }
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'structure',
            members: {
              TableName: {
              },
              CapacityUnits: {
                type: 'float'
              }
            }
          }
        }
      }
    },
    updateItem: {
      name: 'UpdateItem',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          Key: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list',
                  members: {
                  }
                },
                NS: {
                  type: 'list',
                  members: {
                  }
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            },
            required: true
          },
          AttributeUpdates: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                Value: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list',
                      members: {
                      }
                    },
                    NS: {
                      type: 'list',
                      members: {
                      }
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                },
                Action: {
                }
              }
            }
          },
          Expected: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                Value: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list',
                      members: {
                      }
                    },
                    NS: {
                      type: 'list',
                      members: {
                      }
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                },
                Exists: {
                  type: 'boolean'
                }
              }
            }
          },
          ReturnValues: {
          },
          ReturnConsumedCapacity: {
          },
          ReturnItemCollectionMetrics: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Attributes: {
            type: 'map',
            keys: {
            },
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list',
                  members: {
                  }
                },
                NS: {
                  type: 'list',
                  members: {
                  }
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'structure',
            members: {
              TableName: {
              },
              CapacityUnits: {
                type: 'float'
              }
            }
          },
          ItemCollectionMetrics: {
            type: 'structure',
            members: {
              ItemCollectionKey: {
                type: 'map',
                keys: {
                },
                members: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list',
                      members: {
                      }
                    },
                    NS: {
                      type: 'list',
                      members: {
                      }
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                }
              },
              SizeEstimateRangeGB: {
                type: 'list',
                members: {
                  type: 'float'
                }
              }
            }
          }
        }
      }
    },
    updateTable: {
      name: 'UpdateTable',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          ProvisionedThroughput: {
            type: 'structure',
            members: {
              ReadCapacityUnits: {
                type: 'integer',
                required: true
              },
              WriteCapacityUnits: {
                type: 'integer',
                required: true
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TableDescription: {
            type: 'structure',
            members: {
              AttributeDefinitions: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    AttributeType: {
                    }
                  }
                }
              },
              TableName: {
              },
              KeySchema: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    KeyType: {
                    }
                  }
                }
              },
              TableStatus: {
              },
              CreationDateTime: {
                type: 'timestamp'
              },
              ProvisionedThroughput: {
                type: 'structure',
                members: {
                  LastIncreaseDateTime: {
                    type: 'timestamp'
                  },
                  LastDecreaseDateTime: {
                    type: 'timestamp'
                  },
                  NumberOfDecreasesToday: {
                    type: 'integer'
                  },
                  ReadCapacityUnits: {
                    type: 'integer'
                  },
                  WriteCapacityUnits: {
                    type: 'integer'
                  }
                }
              },
              TableSizeBytes: {
                type: 'integer'
              },
              ItemCount: {
                type: 'integer'
              },
              LocalSecondaryIndexes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    IndexName: {
                    },
                    KeySchema: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          AttributeName: {
                          },
                          KeyType: {
                          }
                        }
                      }
                    },
                    Projection: {
                      type: 'structure',
                      members: {
                        ProjectionType: {
                        },
                        NonKeyAttributes: {
                          type: 'list',
                          members: {
                          }
                        }
                      }
                    },
                    IndexSizeBytes: {
                      type: 'integer'
                    },
                    ItemCount: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  pagination: {
    batchGetItem: {
      inputToken: 'RequestItems',
      outputToken: 'UnprocessedKeys',
      resultKey: 'Items'
    },
    listTables: {
      inputToken: 'ExclusiveStartTableName',
      outputToken: 'LastEvaluatedTableName',
      resultKey: 'TableNames'
    },
    query: {
      inputToken: 'ExclusiveStartKey',
      outputToken: 'LastEvaluatedKey',
      resultKey: 'Items'
    },
    scan: {
      inputToken: 'ExclusiveStartKey',
      outputToken: 'LastEvaluatedKey',
      resultKey: 'Items'
    }
  }
};

},{}],19:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

module.exports = {
  format: 'rest-xml',
  apiVersion: '2006-03-01',
  checksumFormat: 'md5',
  endpointPrefix: 's3',
  globalEndpoint: 's3.amazonaws.com',
  serviceAbbreviation: 'Amazon S3',
  serviceFullName: 'Amazon Simple Storage Service',
  signatureVersion: 's3',
  timestampFormat: 'rfc822',
  xmlnamespace: 'http://s3.amazonaws.com/doc/2006-03-01/',
  operations: {
    abortMultipartUpload: {
      name: 'AbortMultipartUpload',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}/{Key}?uploadId={UploadId}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          UploadId: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    completeMultipartUpload: {
      name: 'CompleteMultipartUpload',
      http: {
        method: 'POST',
        uri: '/{Bucket}/{Key}?uploadId={UploadId}'
      },
      input: {
        payload: 'MultipartUpload',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          MultipartUpload: {
            type: 'structure',
            name: 'CompleteMultipartUpload',
            members: {
              Parts: {
                type: 'list',
                flattened: true,
                name: 'Part',
                members: {
                  type: 'structure',
                  members: {
                    ETag: {
                    },
                    PartNumber: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          UploadId: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Location: {
          },
          Bucket: {
          },
          Key: {
          },
          Expiration: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-expiration'
          },
          ETag: {
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          VersionId: {
            location: 'header',
            name: 'x-amz-version-id'
          }
        }
      }
    },
    copyObject: {
      name: 'CopyObject',
      alias: 'PutObjectCopy',
      http: {
        method: 'PUT',
        uri: '/{Bucket}/{Key}'
      },
      input: {
        type: 'structure',
        members: {
          ACL: {
            location: 'header',
            name: 'x-amz-acl'
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          CacheControl: {
            location: 'header',
            name: 'Cache-Control'
          },
          ContentDisposition: {
            location: 'header',
            name: 'Content-Disposition'
          },
          ContentEncoding: {
            location: 'header',
            name: 'Content-Encoding'
          },
          ContentLanguage: {
            location: 'header',
            name: 'Content-Language'
          },
          ContentType: {
            location: 'header',
            name: 'Content-Type'
          },
          CopySource: {
            location: 'header',
            name: 'x-amz-copy-source',
            required: true
          },
          CopySourceIfMatch: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-match'
          },
          CopySourceIfModifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-modified-since'
          },
          CopySourceIfNoneMatch: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-none-match'
          },
          CopySourceIfUnmodifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-unmodified-since'
          },
          Expires: {
            type: 'timestamp',
            location: 'header',
            name: 'Expires'
          },
          GrantFullControl: {
            location: 'header',
            name: 'x-amz-grant-full-control'
          },
          GrantRead: {
            location: 'header',
            name: 'x-amz-grant-read'
          },
          GrantReadACP: {
            location: 'header',
            name: 'x-amz-grant-read-acp'
          },
          GrantWriteACP: {
            location: 'header',
            name: 'x-amz-grant-write-acp'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          Metadata: {
            type: 'map',
            location: 'header',
            name: 'x-amz-meta-',
            keys: {
            },
            members: {
            }
          },
          MetadataDirective: {
            location: 'header',
            name: 'x-amz-metadata-directive'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          StorageClass: {
            location: 'header',
            name: 'x-amz-storage-class'
          },
          WebsiteRedirectLocation: {
            location: 'header',
            name: 'x-amz-website-redirect-location'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Expiration: {
            location: 'header',
            name: 'x-amz-expiration'
          },
          CopySourceVersionId: {
            location: 'header',
            name: 'x-amz-copy-source-version-id'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          ETag: {
          },
          LastModified: {
          }
        }
      }
    },
    createBucket: {
      name: 'CreateBucket',
      alias: 'PutBucket',
      http: {
        method: 'PUT',
        uri: '/{Bucket}'
      },
      input: {
        payload: 'CreateBucketConfiguration',
        type: 'structure',
        members: {
          ACL: {
            location: 'header',
            name: 'x-amz-acl'
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          CreateBucketConfiguration: {
            type: 'structure',
            members: {
              LocationConstraint: {
              }
            }
          },
          GrantFullControl: {
            location: 'header',
            name: 'x-amz-grant-full-control'
          },
          GrantRead: {
            location: 'header',
            name: 'x-amz-grant-read'
          },
          GrantReadACP: {
            location: 'header',
            name: 'x-amz-grant-read-acp'
          },
          GrantWrite: {
            location: 'header',
            name: 'x-amz-grant-write'
          },
          GrantWriteACP: {
            location: 'header',
            name: 'x-amz-grant-write-acp'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Location: {
            location: 'header',
            name: 'Location'
          }
        }
      }
    },
    createMultipartUpload: {
      name: 'CreateMultipartUpload',
      alias: 'InitiateMultipartUpload',
      http: {
        method: 'POST',
        uri: '/{Bucket}/{Key}?uploads'
      },
      input: {
        type: 'structure',
        members: {
          ACL: {
            location: 'header',
            name: 'x-amz-acl'
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          CacheControl: {
            location: 'header',
            name: 'Cache-Control'
          },
          ContentDisposition: {
            location: 'header',
            name: 'Content-Disposition'
          },
          ContentEncoding: {
            location: 'header',
            name: 'Content-Encoding'
          },
          ContentLanguage: {
            location: 'header',
            name: 'Content-Language'
          },
          ContentType: {
            location: 'header',
            name: 'Content-Type'
          },
          Expires: {
            type: 'timestamp',
            location: 'header',
            name: 'Expires'
          },
          GrantFullControl: {
            location: 'header',
            name: 'x-amz-grant-full-control'
          },
          GrantRead: {
            location: 'header',
            name: 'x-amz-grant-read'
          },
          GrantReadACP: {
            location: 'header',
            name: 'x-amz-grant-read-acp'
          },
          GrantWriteACP: {
            location: 'header',
            name: 'x-amz-grant-write-acp'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          Metadata: {
            type: 'map',
            location: 'header',
            name: 'x-amz-meta-',
            keys: {
            },
            members: {
            }
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          StorageClass: {
            location: 'header',
            name: 'x-amz-storage-class'
          },
          WebsiteRedirectLocation: {
            location: 'header',
            name: 'x-amz-website-redirect-location'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Bucket: {
            name: 'Bucket'
          },
          Key: {
          },
          UploadId: {
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          }
        }
      }
    },
    deleteBucket: {
      name: 'DeleteBucket',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteBucketCors: {
      name: 'DeleteBucketCors',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}?cors'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteBucketLifecycle: {
      name: 'DeleteBucketLifecycle',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}?lifecycle'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteBucketPolicy: {
      name: 'DeleteBucketPolicy',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}?policy'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteBucketTagging: {
      name: 'DeleteBucketTagging',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}?tagging'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteBucketWebsite: {
      name: 'DeleteBucketWebsite',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}?website'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteObject: {
      name: 'DeleteObject',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}/{Key}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DeleteMarker: {
            location: 'header',
            name: 'x-amz-delete-marker'
          },
          VersionId: {
            location: 'header',
            name: 'x-amz-version-id'
          }
        }
      }
    },
    deleteObjects: {
      name: 'DeleteObjects',
      alias: 'DeleteMultipleObjects',
      http: {
        method: 'POST',
        uri: '/{Bucket}?delete'
      },
      input: {
        payload: 'Delete',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Delete: {
            type: 'structure',
            required: true,
            members: {
              Objects: {
                type: 'list',
                flattened: true,
                name: 'Object',
                required: true,
                members: {
                  type: 'structure',
                  members: {
                    Key: {
                      required: true
                    },
                    VersionId: {
                    }
                  }
                }
              },
              Quiet: {
                type: 'boolean'
              }
            }
          },
          MFA: {
            location: 'header',
            name: 'x-amz-mfa'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Deleted: {
            type: 'list',
            flattened: true,
            members: {
              type: 'structure',
              members: {
                Key: {
                },
                VersionId: {
                },
                DeleteMarker: {
                  type: 'boolean'
                },
                DeleteMarkerVersionId: {
                }
              }
            }
          },
          Error: {
            type: 'list',
            flattened: true,
            name: 'Errors',
            members: {
              type: 'structure',
              members: {
                Key: {
                },
                VersionId: {
                },
                Code: {
                },
                Message: {
                }
              }
            }
          }
        }
      }
    },
    getBucketAcl: {
      name: 'GetBucketAcl',
      http: {
        method: 'GET',
        uri: '/{Bucket}?acl'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Owner: {
            type: 'structure',
            members: {
              ID: {
              },
              DisplayName: {
              }
            }
          },
          AccessControlList: {
            type: 'list',
            name: 'Grants',
            members: {
              type: 'structure',
              name: 'Grant',
              members: {
                Grantee: {
                  type: 'structure',
                  xmlns: {
                    prefix: 'xsi',
                    uri: 'http://www.w3.org/2001/XMLSchema-instance'
                  },
                  members: {
                    'xsi:type': {
                      attribute: true,
                      name: 'Type'
                    },
                    ID: {
                    },
                    DisplayName: {
                    },
                    EmailAddress: {
                    },
                    URI: {
                    }
                  }
                },
                Permission: {
                }
              }
            }
          }
        }
      }
    },
    getBucketCors: {
      name: 'GetBucketCors',
      http: {
        method: 'GET',
        uri: '/{Bucket}?cors'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CORSRule: {
            type: 'list',
            flattened: true,
            name: 'CORSRules',
            members: {
              type: 'structure',
              members: {
                AllowedHeader: {
                  type: 'list',
                  flattened: true,
                  name: 'AllowedHeaders',
                  members: {
                  }
                },
                AllowedOrigin: {
                  type: 'list',
                  flattened: true,
                  name: 'AllowedOrigins',
                  members: {
                  }
                },
                AllowedMethod: {
                  type: 'list',
                  flattened: true,
                  name: 'AllowedMethods',
                  members: {
                  }
                },
                MaxAgeSeconds: {
                  type: 'integer'
                },
                ExposeHeader: {
                  type: 'list',
                  flattened: true,
                  name: 'ExposeHeaders',
                  members: {
                  }
                }
              }
            }
          }
        }
      }
    },
    getBucketLifecycle: {
      name: 'GetBucketLifecycle',
      http: {
        method: 'GET',
        uri: '/{Bucket}?lifecycle'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Rule: {
            type: 'list',
            flattened: true,
            name: 'Rules',
            members: {
              type: 'structure',
              members: {
                ID: {
                },
                Prefix: {
                },
                Status: {
                },
                Transition: {
                  type: 'structure',
                  members: {
                    Days: {
                      type: 'integer'
                    },
                    Date: {
                      type: 'timestamp',
                      format: 'iso8601'
                    },
                    StorageClass: {
                    }
                  }
                },
                Expiration: {
                  type: 'structure',
                  members: {
                    Days: {
                      type: 'integer'
                    },
                    Date: {
                      type: 'timestamp',
                      format: 'iso8601'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    getBucketLocation: {
      name: 'GetBucketLocation',
      http: {
        method: 'GET',
        uri: '/{Bucket}?location'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          LocationConstraint: {
          }
        }
      }
    },
    getBucketLogging: {
      name: 'GetBucketLogging',
      http: {
        method: 'GET',
        uri: '/{Bucket}?logging'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          LoggingEnabled: {
            type: 'structure',
            members: {
              TargetBucket: {
              },
              TargetPrefix: {
              },
              TargetGrants: {
                type: 'list',
                members: {
                  type: 'structure',
                  name: 'Grant',
                  members: {
                    Grantee: {
                      type: 'structure',
                      xmlns: {
                        prefix: 'xsi',
                        uri: 'http://www.w3.org/2001/XMLSchema-instance'
                      },
                      members: {
                        'xsi:type': {
                          attribute: true,
                          name: 'Type'
                        },
                        ID: {
                        },
                        DisplayName: {
                        },
                        EmailAddress: {
                        },
                        URI: {
                        }
                      }
                    },
                    Permission: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    getBucketNotification: {
      name: 'GetBucketNotification',
      http: {
        method: 'GET',
        uri: '/{Bucket}?notification'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TopicConfiguration: {
            type: 'structure',
            members: {
              Topic: {
              },
              Event: {
              }
            }
          }
        }
      }
    },
    getBucketPolicy: {
      name: 'GetBucketPolicy',
      http: {
        method: 'GET',
        uri: '/{Bucket}?policy'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Policy: {
          }
        },
        payload: 'Policy'
      }
    },
    getBucketRequestPayment: {
      name: 'GetBucketRequestPayment',
      http: {
        method: 'GET',
        uri: '/{Bucket}?requestPayment'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Payer: {
          }
        }
      }
    },
    getBucketTagging: {
      name: 'GetBucketTagging',
      http: {
        method: 'GET',
        uri: '/{Bucket}?tagging'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TagSet: {
            type: 'list',
            members: {
              type: 'structure',
              name: 'Tag',
              members: {
                Key: {
                },
                Value: {
                }
              }
            }
          }
        }
      }
    },
    getBucketVersioning: {
      name: 'GetBucketVersioning',
      http: {
        method: 'GET',
        uri: '/{Bucket}?versioning'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Status: {
          },
          MFADelete: {
          }
        }
      }
    },
    getBucketWebsite: {
      name: 'GetBucketWebsite',
      http: {
        method: 'GET',
        uri: '/{Bucket}?website'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          RedirectAllRequestsTo: {
            type: 'structure',
            members: {
              HostName: {
              },
              Protocol: {
              }
            }
          },
          IndexDocument: {
            type: 'structure',
            members: {
              Suffix: {
              }
            }
          },
          ErrorDocument: {
            type: 'structure',
            members: {
              Key: {
              }
            }
          },
          RoutingRules: {
            type: 'list',
            members: {
              type: 'structure',
              name: 'RoutingRule',
              members: {
                Condition: {
                  type: 'structure',
                  members: {
                    KeyPrefixEquals: {
                    },
                    HttpErrorCodeReturnedEquals: {
                    }
                  }
                },
                Redirect: {
                  type: 'structure',
                  members: {
                    HostName: {
                    },
                    ReplaceKeyPrefixWith: {
                    },
                    ReplaceKeyWith: {
                    },
                    HttpRedirectCode: {
                    },
                    Protocol: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    getObject: {
      name: 'GetObject',
      http: {
        method: 'GET',
        uri: '/{Bucket}/{Key}?versionId={VersionId}&response-content-type={ResponseContentType}&response-content-language={ResponseContentLanguage}&response-expires={ResponseExpires}&response-cache-control={ResponseCacheControl}&response-content-disposition={ResponseContentDisposition}&response-content-encoding={ResponseContentEncoding}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          IfMatch: {
            location: 'header',
            name: 'If-Match'
          },
          IfModifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'If-Modified-Since'
          },
          IfNoneMatch: {
            location: 'header',
            name: 'If-None-Match'
          },
          IfUnmodifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'If-Unmodified-Since'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          Range: {
            location: 'header',
            name: 'Range'
          },
          ResponseCacheControl: {
            location: 'uri'
          },
          ResponseContentDisposition: {
            location: 'uri'
          },
          ResponseContentEncoding: {
            location: 'uri'
          },
          ResponseContentLanguage: {
            location: 'uri'
          },
          ResponseContentType: {
            location: 'uri'
          },
          ResponseExpires: {
            type: 'timestamp',
            location: 'uri'
          },
          VersionId: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Body: {
            type: 'binary',
            streaming: true
          },
          DeleteMarker: {
            location: 'header',
            name: 'x-amz-delete-marker'
          },
          AcceptRanges: {
            location: 'header',
            name: 'accept-ranges'
          },
          Expiration: {
            location: 'header',
            name: 'x-amz-expiration'
          },
          Restore: {
            location: 'header',
            name: 'x-amz-restore'
          },
          LastModified: {
            type: 'timestamp',
            location: 'header',
            name: 'Last-Modified'
          },
          ContentLength: {
            type: 'integer',
            location: 'header',
            name: 'Content-Length'
          },
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          MissingMeta: {
            type: 'integer',
            location: 'header',
            name: 'x-amz-missing-meta'
          },
          VersionId: {
            location: 'header',
            name: 'x-amz-version-id'
          },
          CacheControl: {
            location: 'header',
            name: 'Cache-Control'
          },
          ContentDisposition: {
            location: 'header',
            name: 'Content-Disposition'
          },
          ContentEncoding: {
            location: 'header',
            name: 'Content-Encoding'
          },
          ContentLanguage: {
            location: 'header',
            name: 'Content-Language'
          },
          ContentType: {
            location: 'header',
            name: 'Content-Type'
          },
          Expires: {
            type: 'timestamp',
            location: 'header',
            name: 'Expires'
          },
          WebsiteRedirectLocation: {
            location: 'header',
            name: 'x-amz-website-redirect-location'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          Metadata: {
            type: 'map',
            location: 'header',
            name: 'x-amz-meta-',
            keys: {
            },
            members: {
            }
          }
        },
        payload: 'Body'
      }
    },
    getObjectAcl: {
      name: 'GetObjectAcl',
      http: {
        method: 'GET',
        uri: '/{Bucket}/{Key}?acl&versionId={VersionId}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          VersionId: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Owner: {
            type: 'structure',
            members: {
              ID: {
              },
              DisplayName: {
              }
            }
          },
          AccessControlList: {
            type: 'list',
            name: 'Grants',
            members: {
              type: 'structure',
              name: 'Grant',
              members: {
                Grantee: {
                  type: 'structure',
                  xmlns: {
                    prefix: 'xsi',
                    uri: 'http://www.w3.org/2001/XMLSchema-instance'
                  },
                  members: {
                    'xsi:type': {
                      attribute: true,
                      name: 'Type'
                    },
                    ID: {
                    },
                    DisplayName: {
                    },
                    EmailAddress: {
                    },
                    URI: {
                    }
                  }
                },
                Permission: {
                }
              }
            }
          }
        }
      }
    },
    getObjectTorrent: {
      name: 'GetObjectTorrent',
      http: {
        method: 'GET',
        uri: '/{Bucket}/{Key}?torrent'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Body: {
            type: 'binary',
            streaming: true
          }
        },
        payload: 'Body'
      }
    },
    headBucket: {
      name: 'HeadBucket',
      http: {
        method: 'HEAD',
        uri: '/{Bucket}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    headObject: {
      name: 'HeadObject',
      http: {
        method: 'HEAD',
        uri: '/{Bucket}/{Key}?versionId={VersionId}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          IfMatch: {
            location: 'header',
            name: 'If-Match'
          },
          IfModifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'If-Modified-Since'
          },
          IfNoneMatch: {
            location: 'header',
            name: 'If-None-Match'
          },
          IfUnmodifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'If-Unmodified-Since'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          Range: {
            location: 'header',
            name: 'Range'
          },
          VersionId: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DeleteMarker: {
            location: 'header',
            name: 'x-amz-delete-marker'
          },
          AcceptRanges: {
            location: 'header',
            name: 'accept-ranges'
          },
          Expiration: {
            location: 'header',
            name: 'x-amz-expiration'
          },
          Restore: {
            location: 'header',
            name: 'x-amz-restore'
          },
          LastModified: {
            type: 'timestamp',
            location: 'header',
            name: 'Last-Modified'
          },
          ContentLength: {
            type: 'integer',
            location: 'header',
            name: 'Content-Length'
          },
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          MissingMeta: {
            type: 'integer',
            location: 'header',
            name: 'x-amz-missing-meta'
          },
          VersionId: {
            location: 'header',
            name: 'x-amz-version-id'
          },
          CacheControl: {
            location: 'header',
            name: 'Cache-Control'
          },
          ContentDisposition: {
            location: 'header',
            name: 'Content-Disposition'
          },
          ContentEncoding: {
            location: 'header',
            name: 'Content-Encoding'
          },
          ContentLanguage: {
            location: 'header',
            name: 'Content-Language'
          },
          ContentType: {
            location: 'header',
            name: 'Content-Type'
          },
          Expires: {
            type: 'timestamp',
            location: 'header',
            name: 'Expires'
          },
          WebsiteRedirectLocation: {
            location: 'header',
            name: 'x-amz-website-redirect-location'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          Metadata: {
            type: 'map',
            location: 'header',
            name: 'x-amz-meta-',
            keys: {
            },
            members: {
            }
          }
        }
      }
    },
    listBuckets: {
      name: 'ListBuckets',
      alias: 'GetService',
      http: {
        method: 'GET',
        uri: '/'
      },
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          Buckets: {
            type: 'list',
            members: {
              type: 'structure',
              name: 'Bucket',
              members: {
                Name: {
                },
                CreationDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          Owner: {
            type: 'structure',
            members: {
              ID: {
              },
              DisplayName: {
              }
            }
          }
        }
      }
    },
    listMultipartUploads: {
      name: 'ListMultipartUploads',
      http: {
        method: 'GET',
        uri: '/{Bucket}?uploads&prefix={Prefix}&delimiter={Delimiter}&max-uploads={MaxUploads}&key-marker={KeyMarker}&upload-id-marker={UploadIdMarker}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Delimiter: {
            location: 'uri'
          },
          KeyMarker: {
            location: 'uri'
          },
          MaxUploads: {
            type: 'integer',
            location: 'uri'
          },
          Prefix: {
            location: 'uri'
          },
          UploadIdMarker: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Bucket: {
          },
          KeyMarker: {
          },
          UploadIdMarker: {
          },
          NextKeyMarker: {
          },
          NextUploadIdMarker: {
          },
          MaxUploads: {
            type: 'integer'
          },
          IsTruncated: {
            type: 'boolean'
          },
          Upload: {
            type: 'list',
            flattened: true,
            name: 'Uploads',
            members: {
              type: 'structure',
              members: {
                UploadId: {
                },
                Key: {
                },
                Initiated: {
                  type: 'timestamp'
                },
                StorageClass: {
                },
                Owner: {
                  type: 'structure',
                  members: {
                    ID: {
                    },
                    DisplayName: {
                    }
                  }
                },
                Initiator: {
                  type: 'structure',
                  members: {
                    ID: {
                    },
                    DisplayName: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    listObjectVersions: {
      name: 'ListObjectVersions',
      alias: 'GetBucketObjectVersions',
      http: {
        method: 'GET',
        uri: '/{Bucket}?versions&delimiter={Delimiter}&key-marker={KeyMarker}&max-keys={MaxKeys}&prefix={Prefix}&version-id-marker={VersionIdMarker}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Delimiter: {
            location: 'uri'
          },
          KeyMarker: {
            location: 'uri'
          },
          MaxKeys: {
            type: 'integer',
            location: 'uri'
          },
          Prefix: {
            location: 'uri'
          },
          VersionIdMarker: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          IsTruncated: {
            type: 'boolean'
          },
          KeyMarker: {
          },
          VersionIdMarker: {
          },
          NextKeyMarker: {
          },
          NextVersionIdMarker: {
          },
          Version: {
            type: 'list',
            flattened: true,
            name: 'Versions',
            members: {
              type: 'structure',
              members: {
                ETag: {
                },
                Size: {
                },
                StorageClass: {
                },
                Key: {
                },
                VersionId: {
                },
                IsLatest: {
                  type: 'boolean'
                },
                LastModified: {
                  type: 'timestamp'
                },
                Owner: {
                  type: 'structure',
                  members: {
                    ID: {
                    },
                    DisplayName: {
                    }
                  }
                }
              }
            }
          },
          DeleteMarker: {
            type: 'list',
            flattened: true,
            name: 'DeleteMarkers',
            members: {
              type: 'structure',
              members: {
                Owner: {
                  type: 'structure',
                  members: {
                    ID: {
                    },
                    DisplayName: {
                    }
                  }
                },
                Key: {
                },
                VersionId: {
                },
                IsLatest: {
                  type: 'boolean'
                },
                LastModified: {
                  type: 'timestamp'
                }
              }
            }
          },
          Name: {
          },
          Prefix: {
          },
          MaxKeys: {
            type: 'integer'
          },
          CommonPrefixes: {
            type: 'list',
            flattened: true,
            members: {
              type: 'structure',
              members: {
                Prefix: {
                }
              }
            }
          }
        }
      }
    },
    listObjects: {
      name: 'ListObjects',
      alias: 'GetBucket',
      http: {
        method: 'GET',
        uri: '/{Bucket}?delimiter={Delimiter}&marker={Marker}&max-keys={MaxKeys}&prefix={Prefix}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Delimiter: {
            location: 'uri'
          },
          Marker: {
            location: 'uri'
          },
          MaxKeys: {
            type: 'integer',
            location: 'uri'
          },
          Prefix: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          IsTruncated: {
            type: 'boolean'
          },
          Marker: {
          },
          Contents: {
            type: 'list',
            flattened: true,
            members: {
              type: 'structure',
              members: {
                Key: {
                },
                LastModified: {
                  type: 'timestamp'
                },
                ETag: {
                },
                Size: {
                  type: 'integer'
                },
                StorageClass: {
                },
                Owner: {
                  type: 'structure',
                  members: {
                    ID: {
                    },
                    DisplayName: {
                    }
                  }
                }
              }
            }
          },
          Name: {
          },
          Prefix: {
          },
          MaxKeys: {
            type: 'integer'
          },
          CommonPrefixes: {
            type: 'list',
            flattened: true,
            members: {
              type: 'structure',
              members: {
                Prefix: {
                }
              }
            }
          }
        }
      }
    },
    listParts: {
      name: 'ListParts',
      http: {
        method: 'GET',
        uri: '/{Bucket}/{Key}?uploadId={UploadId}&max-parts={MaxParts}&part-number-marker={PartNumberMarker}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          MaxParts: {
            type: 'integer',
            location: 'uri'
          },
          PartNumberMarker: {
            location: 'uri'
          },
          UploadId: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Bucket: {
          },
          Key: {
          },
          UploadId: {
          },
          PartNumberMarker: {
            type: 'integer'
          },
          NextPartNumberMarker: {
            type: 'integer'
          },
          MaxParts: {
            type: 'integer'
          },
          IsTruncated: {
            type: 'boolean'
          },
          Part: {
            type: 'list',
            flattened: true,
            name: 'Parts',
            members: {
              type: 'structure',
              members: {
                PartNumber: {
                  type: 'integer'
                },
                LastModified: {
                  type: 'timestamp'
                },
                ETag: {
                },
                Size: {
                  type: 'integer'
                }
              }
            }
          },
          Initiator: {
            type: 'structure',
            members: {
              ID: {
              },
              DisplayName: {
              }
            }
          },
          Owner: {
            type: 'structure',
            members: {
              ID: {
              },
              DisplayName: {
              }
            }
          },
          StorageClass: {
          }
        }
      }
    },
    putBucketAcl: {
      name: 'PutBucketAcl',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?acl'
      },
      input: {
        payload: 'AccessControlPolicy',
        type: 'structure',
        members: {
          ACL: {
            location: 'header',
            name: 'x-amz-acl'
          },
          AccessControlPolicy: {
            type: 'structure',
            members: {
              Grants: {
                type: 'list',
                name: 'AccessControlList',
                members: {
                  type: 'structure',
                  name: 'Grant',
                  members: {
                    Grantee: {
                      type: 'structure',
                      xmlns: {
                        prefix: 'xsi',
                        uri: 'http://www.w3.org/2001/XMLSchema-instance'
                      },
                      members: {
                        DisplayName: {
                        },
                        EmailAddress: {
                        },
                        ID: {
                        },
                        Type: {
                          required: true,
                          attribute: true,
                          name: 'xsi:type'
                        },
                        URI: {
                        }
                      }
                    },
                    Permission: {
                    }
                  }
                }
              },
              Owner: {
                type: 'structure',
                members: {
                  DisplayName: {
                  },
                  ID: {
                  }
                }
              }
            }
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          GrantFullControl: {
            location: 'header',
            name: 'x-amz-grant-full-control'
          },
          GrantRead: {
            location: 'header',
            name: 'x-amz-grant-read'
          },
          GrantReadACP: {
            location: 'header',
            name: 'x-amz-grant-read-acp'
          },
          GrantWrite: {
            location: 'header',
            name: 'x-amz-grant-write'
          },
          GrantWriteACP: {
            location: 'header',
            name: 'x-amz-grant-write-acp'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketCors: {
      name: 'PutBucketCors',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?cors'
      },
      input: {
        payload: 'CORSConfiguration',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          CORSConfiguration: {
            type: 'structure',
            members: {
              CORSRules: {
                type: 'list',
                flattened: true,
                name: 'CORSRule',
                members: {
                  type: 'structure',
                  members: {
                    AllowedHeaders: {
                      type: 'list',
                      flattened: true,
                      name: 'AllowedHeader',
                      members: {
                      }
                    },
                    AllowedMethods: {
                      type: 'list',
                      flattened: true,
                      name: 'AllowedMethod',
                      members: {
                      }
                    },
                    AllowedOrigins: {
                      type: 'list',
                      flattened: true,
                      name: 'AllowedOrigin',
                      members: {
                      }
                    },
                    ExposeHeaders: {
                      type: 'list',
                      flattened: true,
                      name: 'ExposeHeader',
                      members: {
                      }
                    },
                    MaxAgeSeconds: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketLifecycle: {
      name: 'PutBucketLifecycle',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?lifecycle'
      },
      input: {
        payload: 'LifecycleConfiguration',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          LifecycleConfiguration: {
            type: 'structure',
            members: {
              Rules: {
                type: 'list',
                flattened: true,
                name: 'Rule',
                required: true,
                members: {
                  type: 'structure',
                  members: {
                    Expiration: {
                      type: 'structure',
                      members: {
                        Date: {
                          type: 'timestamp',
                          format: 'iso8601'
                        },
                        Days: {
                          type: 'integer'
                        }
                      }
                    },
                    ID: {
                    },
                    Prefix: {
                      required: true
                    },
                    Status: {
                      required: true
                    },
                    Transition: {
                      type: 'structure',
                      members: {
                        Date: {
                          type: 'timestamp',
                          format: 'iso8601'
                        },
                        Days: {
                          type: 'integer'
                        },
                        StorageClass: {
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketLogging: {
      name: 'PutBucketLogging',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?logging'
      },
      input: {
        payload: 'BucketLoggingStatus',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          BucketLoggingStatus: {
            type: 'structure',
            required: true,
            members: {
              LoggingEnabled: {
                type: 'structure',
                required: true,
                members: {
                  TargetBucket: {
                  },
                  TargetGrants: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      name: 'Grant',
                      members: {
                        Grantee: {
                          type: 'structure',
                          xmlns: {
                            prefix: 'xsi',
                            uri: 'http://www.w3.org/2001/XMLSchema-instance'
                          },
                          members: {
                            DisplayName: {
                            },
                            EmailAddress: {
                            },
                            ID: {
                            },
                            Type: {
                              required: true,
                              attribute: true,
                              name: 'xsi:type'
                            },
                            URI: {
                            }
                          }
                        },
                        Permission: {
                        }
                      }
                    }
                  },
                  TargetPrefix: {
                  }
                }
              }
            }
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketNotification: {
      name: 'PutBucketNotification',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?notification'
      },
      input: {
        payload: 'NotificationConfiguration',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          NotificationConfiguration: {
            type: 'structure',
            required: true,
            members: {
              TopicConfiguration: {
                type: 'structure',
                required: true,
                members: {
                  Event: {
                  },
                  Topic: {
                  }
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketPolicy: {
      name: 'PutBucketPolicy',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?policy'
      },
      input: {
        payload: 'Policy',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          Policy: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketRequestPayment: {
      name: 'PutBucketRequestPayment',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?requestPayment'
      },
      input: {
        payload: 'RequestPaymentConfiguration',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          RequestPaymentConfiguration: {
            type: 'structure',
            required: true,
            members: {
              Payer: {
                required: true
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketTagging: {
      name: 'PutBucketTagging',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?tagging'
      },
      input: {
        payload: 'Tagging',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          Tagging: {
            type: 'structure',
            required: true,
            members: {
              TagSet: {
                type: 'list',
                required: true,
                members: {
                  type: 'structure',
                  name: 'Tag',
                  required: true,
                  members: {
                    Key: {
                      required: true
                    },
                    Value: {
                      required: true
                    }
                  }
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketVersioning: {
      name: 'PutBucketVersioning',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?versioning'
      },
      input: {
        payload: 'VersioningConfiguration',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          MFA: {
            location: 'header',
            name: 'x-amz-mfa'
          },
          VersioningConfiguration: {
            type: 'structure',
            required: true,
            members: {
              MFADelete: {
              },
              Status: {
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketWebsite: {
      name: 'PutBucketWebsite',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?website'
      },
      input: {
        payload: 'WebsiteConfiguration',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          WebsiteConfiguration: {
            type: 'structure',
            required: true,
            members: {
              ErrorDocument: {
                type: 'structure',
                members: {
                  Key: {
                    required: true
                  }
                }
              },
              IndexDocument: {
                type: 'structure',
                members: {
                  Suffix: {
                    required: true
                  }
                }
              },
              RedirectAllRequestsTo: {
                type: 'structure',
                members: {
                  HostName: {
                    required: true
                  },
                  Protocol: {
                  }
                }
              },
              RoutingRules: {
                type: 'list',
                members: {
                  type: 'structure',
                  name: 'RoutingRule',
                  members: {
                    Condition: {
                      type: 'structure',
                      members: {
                        HttpErrorCodeReturnedEquals: {
                        },
                        KeyPrefixEquals: {
                        }
                      }
                    },
                    Redirect: {
                      type: 'structure',
                      required: true,
                      members: {
                        HostName: {
                        },
                        HttpRedirectCode: {
                        },
                        Protocol: {
                        },
                        ReplaceKeyPrefixWith: {
                        },
                        ReplaceKeyWith: {
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putObject: {
      name: 'PutObject',
      http: {
        method: 'PUT',
        uri: '/{Bucket}/{Key}'
      },
      input: {
        payload: 'Body',
        type: 'structure',
        members: {
          ACL: {
            location: 'header',
            name: 'x-amz-acl'
          },
          Body: {
            type: 'binary',
            streaming: true
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          CacheControl: {
            location: 'header',
            name: 'Cache-Control'
          },
          ContentDisposition: {
            location: 'header',
            name: 'Content-Disposition'
          },
          ContentEncoding: {
            location: 'header',
            name: 'Content-Encoding'
          },
          ContentLanguage: {
            location: 'header',
            name: 'Content-Language'
          },
          ContentLength: {
            type: 'integer',
            location: 'header',
            name: 'Content-Length'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          ContentType: {
            location: 'header',
            name: 'Content-Type'
          },
          Expires: {
            type: 'timestamp',
            location: 'header',
            name: 'Expires'
          },
          GrantFullControl: {
            location: 'header',
            name: 'x-amz-grant-full-control'
          },
          GrantRead: {
            location: 'header',
            name: 'x-amz-grant-read'
          },
          GrantReadACP: {
            location: 'header',
            name: 'x-amz-grant-read-acp'
          },
          GrantWriteACP: {
            location: 'header',
            name: 'x-amz-grant-write-acp'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          Metadata: {
            type: 'map',
            location: 'header',
            name: 'x-amz-meta-',
            keys: {
            },
            members: {
            }
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          StorageClass: {
            location: 'header',
            name: 'x-amz-storage-class'
          },
          WebsiteRedirectLocation: {
            location: 'header',
            name: 'x-amz-website-redirect-location'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Expiration: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-expiration'
          },
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          VersionId: {
            location: 'header',
            name: 'x-amz-version-id'
          }
        }
      }
    },
    putObjectAcl: {
      name: 'PutObjectAcl',
      http: {
        method: 'PUT',
        uri: '/{Bucket}/{Key}?acl'
      },
      input: {
        payload: 'AccessControlPolicy',
        type: 'structure',
        members: {
          ACL: {
            location: 'header',
            name: 'x-amz-acl'
          },
          AccessControlPolicy: {
            type: 'structure',
            members: {
              Grants: {
                type: 'list',
                name: 'AccessControlList',
                members: {
                  type: 'structure',
                  name: 'Grant',
                  members: {
                    Grantee: {
                      type: 'structure',
                      xmlns: {
                        prefix: 'xsi',
                        uri: 'http://www.w3.org/2001/XMLSchema-instance'
                      },
                      members: {
                        DisplayName: {
                        },
                        EmailAddress: {
                        },
                        ID: {
                        },
                        Type: {
                          required: true,
                          attribute: true,
                          name: 'xsi:type'
                        },
                        URI: {
                        }
                      }
                    },
                    Permission: {
                    }
                  }
                }
              },
              Owner: {
                type: 'structure',
                members: {
                  DisplayName: {
                  },
                  ID: {
                  }
                }
              }
            }
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          GrantFullControl: {
            location: 'header',
            name: 'x-amz-grant-full-control'
          },
          GrantRead: {
            location: 'header',
            name: 'x-amz-grant-read'
          },
          GrantReadACP: {
            location: 'header',
            name: 'x-amz-grant-read-acp'
          },
          GrantWrite: {
            location: 'header',
            name: 'x-amz-grant-write'
          },
          GrantWriteACP: {
            location: 'header',
            name: 'x-amz-grant-write-acp'
          },
          Key: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    restoreObject: {
      name: 'RestoreObject',
      alias: 'PostObjectRestore',
      http: {
        method: 'POST',
        uri: '/{Bucket}/{Key}?restore'
      },
      input: {
        payload: 'RestoreRequest',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          RestoreRequest: {
            type: 'structure',
            members: {
              Days: {
                type: 'integer',
                required: true
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    uploadPart: {
      name: 'UploadPart',
      http: {
        method: 'PUT',
        uri: '/{Bucket}/{Key}?partNumber={PartNumber}&uploadId={UploadId}'
      },
      input: {
        payload: 'Body',
        type: 'structure',
        members: {
          Body: {
            type: 'binary',
            streaming: true
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentLength: {
            type: 'integer',
            location: 'header',
            name: 'Content-Length'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          PartNumber: {
            required: true,
            location: 'uri'
          },
          UploadId: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          ETag: {
            location: 'header',
            name: 'ETag'
          }
        }
      }
    },
    uploadPartCopy: {
      name: 'UploadPartCopy',
      http: {
        method: 'PUT',
        uri: '/{Bucket}/{Key}?partNumber={PartNumber}&uploadId={UploadId}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          CopySource: {
            location: 'header',
            name: 'x-amz-copy-source',
            required: true
          },
          CopySourceIfMatch: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-match'
          },
          CopySourceIfModifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-modified-since'
          },
          CopySourceIfNoneMatch: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-none-match'
          },
          CopySourceIfUnmodifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-unmodified-since'
          },
          CopySourceRange: {
            location: 'header',
            name: 'x-amz-copy-source-range'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          PartNumber: {
            required: true,
            location: 'uri'
          },
          UploadId: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CopySourceVersionId: {
            location: 'header',
            name: 'x-amz-copy-source-version-id'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          ETag: {
          },
          LastModified: {
            type: 'timestamp'
          }
        }
      }
    }
  },
  pagination: {
    listMultipartUploads: {
      limitKey: 'MaxUploads',
      moreResults: 'IsTruncated',
      outputToken: [
        'NextKeyMarker',
        'NextUploadIdMarker'
      ],
      inputToken: [
        'KeyMarker',
        'UploadIdMarker'
      ],
      resultKey: 'Uploads'
    },
    listObjectVersions: {
      moreResults: 'IsTruncated',
      limitKey: 'MaxKeys',
      outputToken: [
        'NextKeyMarker',
        'NextVersionIdMarker'
      ],
      inputToken: [
        'KeyMarker',
        'VersionIdMarker'
      ],
      resultKey: 'Versions'
    },
    listObjects: {
      moreResults: 'IsTruncated',
      limitKey: 'MaxKeys',
      outputToken: 'NextMarker or Contents[-1].Key',
      inputToken: 'Marker',
      resultKey: [
        'Contents',
        'CommonPrefixes'
      ]
    },
    listParts: {
      limitKey: 'IsTruncated',
      outputTokens: 'NextPartNumberMarker',
      inputToken: 'PartNumberMarker',
      resultKey: 'Parts'
    }
  }
};

},{}],20:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.AutoScaling = AWS.Service.defineService('autoscaling', ['2011-01-01']);

module.exports = AWS.AutoScaling;

},{"../core":4}],21:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.CloudFormation = AWS.Service.defineService('cloudformation', ['2010-05-15']);

module.exports = AWS.CloudFormation;

},{"../core":4}],22:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.CloudFront = AWS.Service.defineService('cloudfront', ['2013-05-12', '2012-05-05']);

module.exports = AWS.CloudFront;

},{"../core":4}],23:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.CloudSearch = AWS.Service.defineService('cloudsearch', ['2011-02-01']);

module.exports = AWS.CloudSearch;

},{"../core":4}],24:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.CloudWatch = AWS.Service.defineService('cloudwatch', ['2010-08-01']);

module.exports = AWS.CloudWatch;

},{"../core":4}],25:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.DataPipeline = AWS.Service.defineService('datapipeline', ['2012-10-29']);

module.exports = AWS.DataPipeline;

},{"../core":4}],26:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.DirectConnect = AWS.Service.defineService('directconnect', ['2012-10-25']);

module.exports = AWS.DirectConnect;

},{"../core":4}],27:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.DynamoDB = AWS.Service.defineService('dynamodb', ['2012-08-10', '2011-12-05'], {
  setupRequestListeners: function setupRequestListeners(request) {
    if (request.service.config.dynamoDbCrc32) {
      request.addListener('extractData', this.checkCrc32);
    }
  },

  /**
   * @api private
   */
  checkCrc32: function checkCrc32(resp) {
    if (!resp.request.service.crc32IsValid(resp)) {
      resp.error = AWS.util.error(new Error(), {
        code: 'CRC32CheckFailed',
        message: 'CRC32 integrity check failed',
        retryable: true
      });
    }
  },

  /**
   * @api private
   */
  crc32IsValid: function crc32IsValid(resp) {
    var crc = resp.httpResponse.headers['x-amz-crc32'];
    if (!crc) return true; // no (valid) CRC32 header
    return parseInt(crc, 10) == AWS.util.crypto.crc32(resp.httpResponse.body);
  },

  /**
   * @api private
   */
  defaultRetryCount: 10,

  /**
   * @api private
   */
  retryDelays: function retryDelays() {
    var retryCount = this.numRetries();
    var delays = [];
    for (var i = 0; i < retryCount; ++i) {
      if (i === 0) {
        delays.push(0);
      } else {
        delays.push(50 * Math.pow(2, i - 1));
      }
    }
    return delays;
  }
});

module.exports = AWS.DynamoDB;

},{"../core":4}],28:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.EC2 = AWS.Service.defineService('ec2', ['2013-06-15'], {
  setupRequestListeners: function setupRequestListeners(request) {
    request.removeListener('extractError', AWS.EventListeners.Query.EXTRACT_ERROR);
    request.addListener('extractError', this.extractError);
  },

  /**
   * @api private
   */
  extractError: function extractError(resp) {
    // EC2 nests the error code and message deeper than other AWS Query services.
    var httpResponse = resp.httpResponse;
    var data = new AWS.XML.Parser({}).parse(httpResponse.body.toString() || '');
    if (data.Errors)
      resp.error = AWS.util.error(new Error(), {
        code: data.Errors.Error.Code,
        message: data.Errors.Error.Message
      });
    else
      resp.error = AWS.util.error(new Error(), {
        code: httpResponse.statusCode,
        message: null
      });
  }
});

module.exports = AWS.EC2;

},{"../core":4}],29:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.ElastiCache = AWS.Service.defineService('elasticache', ['2012-11-15']);

module.exports = AWS.ElastiCache;

},{"../core":4}],30:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.ElasticBeanstalk = AWS.Service.defineService('elasticbeanstalk', ['2010-12-01']);

module.exports = AWS.ElasticBeanstalk;

},{"../core":4}],31:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.ElasticTranscoder = AWS.Service.defineService('elastictranscoder', ['2012-09-25'], {
  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('extractError', this.extractErrorCode);
  },

  /**
   * @api private
   */
  extractErrorCode: function extractErrorCode(resp) {
    // ETS stores error type in the header
    var errorType = resp.httpResponse.headers['x-amzn-errortype'];
    if (errorType) {
      resp.error.name = resp.error.code = errorType.split(':')[0];
    }
  }
});

module.exports = AWS.ElasticTranscoder;

},{"../core":4}],32:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.ELB = AWS.Service.defineService('elb', ['2012-06-01']);

module.exports = AWS.ELB;

},{"../core":4}],33:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.EMR = AWS.Service.defineService('emr', ['2009-03-31']);

module.exports = AWS.EMR;

},{"../core":4}],34:[function(require,module,exports){
var Buffer=require("__browserify_Buffer").Buffer;/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.Glacier = AWS.Service.defineService('glacier', ['2012-06-01'], {
  setupRequestListeners: function setupRequestListeners(request) {
    request.on('validate', this.validateAccountId);
    request.on('build', this.addGlacierApiVersion);
    request.on('build', this.addTreeHashHeaders);
  },

  validateAccountId: function validateAccountId(request) {
    if (request.params.accountId !== undefined) return;
    request.params = AWS.util.copy(request.params);
    request.params.accountId = '-';
  },

  addGlacierApiVersion: function addGlacierApiVersion(request) {
    var version = request.service.api.apiVersion;
    request.httpRequest.headers['x-amz-glacier-version'] = version;
  },

  addTreeHashHeaders: function addTreeHashHeaders(request) {
    if (request.params.body === undefined) return;

    var hashes = request.service.computeChecksums(request.params.body);
    request.httpRequest.headers['x-amz-content-sha256'] = hashes.linearHash;

    if (!request.httpRequest.headers['x-amz-sha256-tree-hash']) {
      request.httpRequest.headers['x-amz-sha256-tree-hash'] = hashes.treeHash;
    }
  }
});

AWS.util.update(AWS.Glacier.prototype, {
  /**
   * @!group Computing Checksums
   */

  /**
   * Computes the SHA-256 linear and tree hash checksums for a given
   * block of Buffer data. Pass the tree hash of the computed checksums
   * as the checksum input to the {completeMultipartUpload} when performing
   * a multi-part upload.
   *
   * @example Calculate checksum of 5.5MB data chunk
   *   var glacier = new AWS.Glacier();
   *   var data = new Buffer(5.5 * 1024 * 1024);
   *   data.fill('0'); // fill with zeros
   *   var results = glacier.computeChecksums(data);
   *   // Result: { linearHash: '68aff0c5a9...', treeHash: '154e26c78f...' }
   * @param data [Buffer, String] data to calculate the checksum for
   * @return [map<linearHash:String,treeHash:String>] a map containing
   *   the linearHash and treeHash properties representing hex based digests
   *   of the respective checksums.
   * @see completeMultipartUpload
   */
  computeChecksums: function computeChecksums(data) {
    if (!(data instanceof Buffer)) data = new Buffer(data);

    var mb = 1024 * 1024;
    var hashes = [];
    var hash = AWS.util.crypto.createHash('sha256');

    // build leaf nodes in 1mb chunks
    for (var i = 0; i < data.length; i += mb) {
      var chunk = data.slice(i, Math.min(i + mb, data.length));
      hash.update(chunk);
      hashes.push(AWS.util.crypto.sha256(chunk));
    }

    return {
      linearHash: hash.digest('hex'),
      treeHash: this.buildHashTree(hashes)
    };
  },

  /**
   * @api private
   */
  buildHashTree: function buildHashTree(hashes) {
    // merge leaf nodes
    while (hashes.length > 1) {
      var tmpHashes = [];
      for (var i = 0; i < hashes.length; i += 2) {
        if (hashes[i+1]) {
          var tmpHash = new Buffer(64);
          tmpHash.write(hashes[i], 0, 32, 'binary');
          tmpHash.write(hashes[i+1], 32, 32, 'binary');
          tmpHashes.push(AWS.util.crypto.sha256(tmpHash));
        } else {
          tmpHashes.push(hashes[i]);
        }
      }
      hashes = tmpHashes;
    }

    return AWS.util.crypto.toHex(hashes[0]);
  }
});

module.exports = AWS.Glacier;

},{"../core":4,"__browserify_Buffer":81}],35:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.IAM = AWS.Service.defineService('iam', ['2010-05-08']);

module.exports = AWS.IAM;

},{"../core":4}],36:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.ImportExport = AWS.Service.defineService('importexport', ['2010-06-01']);

module.exports = AWS.ImportExport;

},{"../core":4}],37:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.OpsWorks = AWS.Service.defineService('opsworks', ['2013-02-18']);

module.exports = AWS.OpsWorks;

},{"../core":4}],38:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.RDS = AWS.Service.defineService('rds', ['2013-05-15', '2013-02-12', '2013-01-10']);

module.exports = AWS.RDS;

},{"../core":4}],39:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.Redshift = AWS.Service.defineService('redshift', ['2012-12-01']);

module.exports = AWS.Redshift;

},{"../core":4}],40:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.Route53 = AWS.Service.defineService('route53', ['2012-12-12'], {
  setupRequestListeners: function setupRequestListeners(request) {
    request.on('build', this.sanitizeUrl);
  },

  sanitizeUrl: function sanitizeUrl(request) {
    var path = request.httpRequest.path;
    request.httpRequest.path = path.replace(/\/%2F\w+%2F/, '/');
  },

  setEndpoint: function setEndpoint(endpoint) {
    if (endpoint) {
      AWS.Service.prototype.setEndpoint(endpoint);
    } else {
      var opts = {sslEnabled: true}; // SSL is always enabled for Route53
      this.endpoint = new AWS.Endpoint(this.api.globalEndpoint, opts);
    }
  }
});

module.exports = AWS.Route53;

},{"../core":4}],41:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
var Stream = require('stream').Stream;

AWS.S3 = AWS.Service.defineService('s3', ['2006-03-01'], {
  /**
   * @api private
   */
  initialize: function initialize(options) {
    AWS.Service.prototype.initialize.call(this, options);
    this.setEndpoint((options || {}).endpoint, options);
  },

  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('build', this.populateURI);
    request.addListener('build', this.computeContentMd5);
    request.removeListener('validate',
      AWS.EventListeners.Core.VALIDATE_REGION);
    request.addListener('extractError', this.extractError);
    request.addListener('extractData', this.extractData);
  },

  /**
   * S3 prefers dns-compatible bucket names to be moved from the uri path
   * to the hostname as a sub-domain.  This is not possible, even for dns-compat
   * buckets when using SSL and the bucket name contains a dot ('.').  The
   * ssl wildcard certificate is only 1-level deep.
   *
   * @api private
   */
  populateURI: function populateURI(req) {
    var httpRequest = req.httpRequest;
    var b = req.params.Bucket;

    if (b) {
      if (!req.service.pathStyleBucketName(b)) {
        httpRequest.endpoint.host = httpRequest.endpoint.hostname = b + '.' +
          httpRequest.endpoint.hostname;

        httpRequest.virtualHostedBucket = b; // needed for signing the request
        httpRequest.path = httpRequest.path.replace(new RegExp('^/' + b), '');
        if (httpRequest.path[0] !== '/') {
          httpRequest.path = '/' + httpRequest.path;
        }
      }
    }
  },

  /**
   * @api private
   */
  computableChecksumOperations: {
    putBucketCors: true,
    putBucketLifecycle: true,
    putBucketTagging: true,
    deleteObjects: true
  },

  /**
   * Checks whether checksums should be computed for the request.
   * If the request requires checksums to be computed, this will always
   * return true, otherwise it depends on whether {AWS.Config.computeChecksums}
   * is set.
   *
   * @param req [AWS.Request] the request to check against
   * @return [Boolean] whether to compute checksums for a request.
   * @api private
   */
  willComputeChecksums: function willComputeChecksums(req) {
    if (this.computableChecksumOperations[req.operation]) return true;
    if (!this.config.computeChecksums) return false;

    // TODO: compute checksums for Stream objects
    if (req.httpRequest.body instanceof Stream) return false;

    var rules = req.service.api.operations[req.operation].input.members;
    if (rules.ContentMD5 && !req.params.ContentMD5) return true;
  },

  /**
   * A listener that computes the Content-MD5 and sets it in the header.
   * @see AWS.S3.willComputeChecksums
   * @api private
   */
  computeContentMd5: function computeContentMd5(req) {
    if (req.service.willComputeChecksums(req)) {
      var md5 = AWS.util.crypto.md5(req.httpRequest.body, 'base64');
      req.httpRequest.headers['Content-MD5'] = md5;
    }
  },

  /**
   * Returns true if the bucket name should be left in the URI path for
   * a request to S3.  This function takes into account the current
   * endpoint protocol (e.g. http or https).
   *
   * @api private
   */
  pathStyleBucketName: function pathStyleBucketName(bucketName) {
    // user can force path style requests via the configuration
    if (this.config.s3ForcePathStyle) return true;

    if (this.dnsCompatibleBucketName(bucketName)) {
      return (this.config.sslEnabled && bucketName.match(/\./)) ? true : false;
    } else {
      return true; // not dns compatible names must always use path style
    }
  },

  /**
   * Returns true if the bucket name is DNS compatible.  Buckets created
   * outside of the classic region MUST be DNS compatible.
   *
   * @api private
   */
  dnsCompatibleBucketName: function dnsCompatibleBucketName(bucketName) {
    var b = bucketName;
    var domain = new RegExp(/^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/);
    var ipAddress = new RegExp(/(\d+\.){3}\d+/);
    var dots = new RegExp(/\.\./);
    return (b.match(domain) && !b.match(ipAddress) && !b.match(dots)) ? true : false;
  },

  /**
   * S3 requires that path params not escape forward slashes.
   *
   * @api private
   */
  escapePathParam: function escapePathParam(value) {
    return AWS.util.uriEscapePath(String(value));
  },

  /**
   * @return [Boolean] whether response contains an error
   * @api private
   */
  successfulResponse: function successfulResponse(resp) {
    var req = resp.request;
    var httpResponse = resp.httpResponse;
    if (req.operation === 'completeMultipartUpload' &&
        httpResponse.body.toString().match('<Error>'))
      return false;
    else
      return httpResponse.statusCode < 300;
  },

  /**
   * @return [Boolean] whether the error can be retried
   * @api private
   */
  retryableError: function retryableError(error, request) {
    if (request.operation == 'completeMultipartUpload' &&
        error.statusCode === 200) {
      return true;
    } else {
      var _super = AWS.Service.prototype.retryableError;
      return _super.call(this, error, request);
    }
  },

  /**
   * Provides a specialized parser for getBucketLocation -- all other
   * operations are parsed by the super class.
   *
   * @api private
   */
  extractData: function extractData(resp) {
    var req = resp.request;
    if (req.operation === 'getBucketLocation') {
      /*jshint regexp:false*/
      var match = resp.httpResponse.body.toString().match(/>(.+)<\/Location/);
      if (match) {
        delete resp.data['_'];
        resp.data.LocationConstraint = match[1];
      }
    }
  },

  /**
   * Extracts an error object from the http response.
   *
   * @api private
   */
  extractError: function extractError(resp) {
    var codes = {
      304: 'NotModified',
      403: 'Forbidden',
      400: 'BadRequest',
      404: 'NotFound'
    };

    var code = resp.httpResponse.statusCode;
    var body = resp.httpResponse.body;
    if (codes[code] && body.length === 0) {
      resp.error = AWS.util.error(new Error(), {
        code: codes[resp.httpResponse.statusCode],
        message: null
      });
    } else {
      var data = new AWS.XML.Parser({}).parse(body.toString());
      resp.error = AWS.util.error(new Error(), {
        code: data.Code || code,
        message: data.Message || null
      });
    }
  },

  /**
   * @api private
   */
  setEndpoint: function setEndpoint(endpoint) {
    if (endpoint) {
      this.endpoint = new AWS.Endpoint(endpoint, this.config);
    } else if (this.config.region && this.config.region !== 'us-east-1') {
      var hostname = 's3-' + this.config.region + '.amazonaws.com';
      this.endpoint = new AWS.Endpoint(hostname);
    } else {
      this.endpoint = new AWS.Endpoint(this.api.globalEndpoint, this.config);
    }
  },

  /**
   * Get a pre-signed URL for a given operation name.
   *
   * @note You must ensure that you have static or previously resolved
   *   credentials if you call this method synchronously (with no callback),
   *   otherwise it may not properly sign the request. If you cannot guarantee
   *   this (you are using an asynchronous credential provider, i.e., EC2
   *   IAM roles), you should always call this method with an asynchronous
   *   callback.
   * @param operation [String] the name of the operation to call
   * @param params [map] parameters to pass to the operation. See the given
   *   operation for the expected operation parameters. In addition, you can
   *   also pass the "Expires" parameter to inform S3 how long the URL should
   *   work for.
   * @option params Expires [Integer] (900) the number of seconds to expire
   *   the pre-signed URL operation in. Defaults to 15 minutes.
   * @param callback [Function] if a callback is provided, this function will
   *   pass the URL as the second parameter (after the error parameter) to
   *   the callback function.
   * @return [String] if called synchronously (with no callback), returns the
   *   signed URL.
   * @return [null] nothing is returned if a callback is provided.
   * @example Pre-signing a getObject operation (synchronously)
   *   var params = {Bucket: 'bucket', Key: 'key'};
   *   var url = s3.getSignedUrl('getObject', params);
   *   console.log('The URL is', url);
   * @example Pre-signing a putObject (asynchronously)
   *   var params = {Bucket: 'bucket', Key: 'key'};
   *   s3.getSignedUrl('putObject', params, function (err, url) {
   *     console.log('The URL is', url);
   *   });
   * @example Pre-signing a putObject operation with a specific payload
   *   var params = {Bucket: 'bucket', Key: 'key', Body: 'body'};
   *   var url = s3.getSignedUrl('putObject', params);
   *   console.log('The URL is', url);
   * @example Passing in a 1-minute expiry time for a pre-signed URL
   *   var params = {Bucket: 'bucket', Key: 'key', Expires: 60};
   *   var url = s3.getSignedUrl('getObject', params);
   *   console.log('The URL is', url); // expires in 60 seconds
   */
  getSignedUrl: function getSignedUrl(operation, params, callback) {
    var expires = params.Expires || 900;
    delete params.Expires; // we can't validate this
    var url = require('url');
    var events = ['validate', 'build', 'sign'];
    var request = this.makeRequest(operation, params);

    var expiresHeader = 'presigned-expires';

    function signedUrlBuilder() {
      delete request.httpRequest.headers['User-Agent'];
      request.httpRequest.headers[expiresHeader] = parseInt(
        AWS.util.date.unixTimestamp() + expires, 10).toString();
    }

    function signedUrlSigner() {
      var queryParams = {};

      AWS.util.each(request.httpRequest.headers, function (key, value) {
        if (key === expiresHeader) key = 'Expires';
        queryParams[key] = value;
      });
      delete request.httpRequest.headers[expiresHeader];

      var auth = queryParams['Authorization'].split(':');
      delete queryParams['Authorization'];
      delete queryParams['Host'];
      queryParams['AWSAccessKeyId'] = auth[0].split(' ')[1];
      queryParams['Signature'] = auth[1];

      // build URL
      var endpoint = request.httpRequest.endpoint;
      var parsedUrl = url.parse(request.httpRequest.path);
      var querystring = AWS.util.queryParamsToString(queryParams);
      endpoint.pathname = parsedUrl.pathname;
      endpoint.search = !parsedUrl.search ? querystring :
                        parsedUrl.search + '&' + querystring;
    }

    request.on('build', signedUrlBuilder);
    request.on('sign', signedUrlSigner);
    if (!params.Body) { // no Content-MD5 signing if body is not provided
      request.removeListener('build', this.computeContentMd5);
    }

    if (callback) {
      request.emitEvents(events, new AWS.Response(request), function (err) {
        if (err) callback(err, null);
        else callback(null, url.format(request.httpRequest.endpoint));
      });
    } else {
      AWS.util.arrayEach(events, function (item) {
        request.emitEvent(item, [request]);
      });
      return url.format(request.httpRequest.endpoint);
    }
  }
});

AWS.S3.prototype.createBucket = function createBucket(params, callback) {
  // When creating a bucket *outside* the classic region, the location
  // constraint must be set for the bucket and it must match the endpoint.
  // This chunk of code will set the location constraint param based
  // on the region (when possible), but it will not override a passed-in
  // location constraint.
  if (!params) params = {};
  var hostname = this.endpoint.hostname;
  if (hostname != this.api.globalEndpoint && !params.CreateBucketConfiguration) {
    params.CreateBucketConfiguration = { LocationConstraint: this.config.region };
  }
  return this.makeRequest('createBucket', params, callback);
};

module.exports = AWS.S3;

},{"../core":4,"stream":66,"url":67}],42:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.SES = AWS.Service.defineService('ses', ['2010-12-01'], {
  /**
   * @api private
   */
  initialize: function initialize(options) {
    options = options || {};
    options.region = options.region || 'us-east-1';
    AWS.Service.prototype.initialize.call(this, options);
  },

  /**
   * @api private
   */
  defaultEndpoint: 'us-east-1',

  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.removeListener('validate',
      AWS.EventListeners.Core.VALIDATE_REGION);
  }
});

module.exports = AWS.SES;

},{"../core":4}],43:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.SimpleDB = AWS.Service.defineService('simpledb', ['2009-04-15'], {
  /**
   * @api private
   */
  setEndpoint: function setEndpoint(endpoint) {
    if (this.config.region === 'us-east-1') {
      var prefix = this.api.endpointPrefix;
      this.endpoint = new AWS.Endpoint(prefix + '.amazonaws.com');
    } else {
      AWS.Service.prototype.setEndpoint.call(this, endpoint);
    }
  }
});

module.exports = AWS.SimpleDB;

},{"../core":4}],44:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.SimpleWorkflow = AWS.Service.defineService('simpleworkflow', ['2012-01-25']);

module.exports = AWS.SimpleWorkflow;

},{"../core":4}],45:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.SNS = AWS.Service.defineService('sns', ['2010-03-31']);

module.exports = AWS.SNS;

},{"../core":4}],46:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.SQS = AWS.Service.defineService('sqs', ['2012-11-05'], {
  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('build', this.buildEndpoint);

    if (request.service.config.computeChecksums) {
      if (request.operation === 'sendMessage') {
        request.addListener('extractData', this.verifySendMessageChecksum);
      } else if (request.operation === 'sendMessageBatch') {
        request.addListener('extractData', this.verifySendMessageBatchChecksum);
      } else if (request.operation === 'receiveMessage') {
        request.addListener('extractData', this.verifyReceiveMessageChecksum);
      }
    }
  },

  verifySendMessageChecksum: function verifySendMessageChecksum(response) {
    if (!response.data) return;

    var md5 = response.data.MD5OfMessageBody;
    var body = this.params.MessageBody;
    var calculatedMd5 = this.service.calculateChecksum(body);
    if (calculatedMd5 !== md5) {
      var msg = 'Got "' + response.data.MD5OfMessageBody +
        '", expecting "' + calculatedMd5 + '".';
      this.service.throwInvalidChecksumError(response,
        [response.data.MessageId], msg);
    }
  },

  verifySendMessageBatchChecksum: function verifySendMessageBatchChecksum(response) {
    if (!response.data) return;

    var service = this.service;
    var entries = {};
    var errors = [];
    var messageIds = [];
    AWS.util.arrayEach(response.data.Successful, function (entry) {
      entries[entry.Id] = entry;
    });
    AWS.util.arrayEach(this.params.Entries, function (entry) {
      if (entries[entry.Id]) {
        var md5 = entries[entry.Id].MD5OfMessageBody;
        var body = entry.MessageBody;
        if (!service.isChecksumValid(md5, body)) {
          errors.push(entry.Id);
          messageIds.push(entries[entry.Id].MessageId);
        }
      }
    });

    if (errors.length > 0) {
      service.throwInvalidChecksumError(response, messageIds,
        'Invalid messages: ' + errors.join(', '));
    }
  },

  verifyReceiveMessageChecksum: function verifyReceiveMessageChecksum(response) {
    if (!response.data) return;

    var service = this.service;
    var messageIds = [];
    AWS.util.arrayEach(response.data.Messages, function(message) {
      var md5 = message.MD5OfBody;
      var body = message.Body;
      if (!service.isChecksumValid(md5, body)) {
        messageIds.push(message.MessageId);
      }
    });

    if (messageIds.length > 0) {
      service.throwInvalidChecksumError(response, messageIds,
        'Invalid messages: ' + messageIds.join(', '));
    }
  },

  throwInvalidChecksumError: function throwInvalidChecksumError(response, ids, message) {
    response.error = AWS.util.error(new Error(), {
      retryable: true,
      code: 'InvalidChecksum',
      messageIds: ids,
      message: response.request.operation +
               ' returned an invalid MD5 response. ' + message
    });
  },

  isChecksumValid: function isChecksumValid(checksum, data) {
    return this.calculateChecksum(data) === checksum;
  },

  calculateChecksum: function calculateChecksum(data) {
    return AWS.util.crypto.md5(data, 'hex');
  },

  buildEndpoint: function buildEndpoint(request) {
    var url = request.httpRequest.params.QueueUrl;
    if (url) {
      request.httpRequest.endpoint = new AWS.Endpoint(url);

      // signature version 4 requires the region name to be set,
      // sqs queue urls contain the region name
      /*jshint regexp:false*/
      var matches = request.httpRequest.endpoint.host.match(/^sqs\.(.+?)\./);
      if (matches) request.httpRequest.region = matches[1];
    }
  }
});

module.exports = AWS.SQS;

},{"../core":4}],47:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.StorageGateway = AWS.Service.defineService('storagegateway', ['2012-06-30']);

module.exports = AWS.StorageGateway;

},{"../core":4}],48:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.STS = AWS.Service.defineService('sts', ['2011-06-15']);

module.exports = AWS.STS;

},{"../core":4}],49:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.Support = AWS.Service.defineService('support', ['2013-04-15']);

module.exports = AWS.Support;

},{"../core":4}],50:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
require('./v3');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.CloudFront = inherit(AWS.Signers.S3, {
  /**
   * The canonical string for CloudFront is simply the Date header
   */
  stringToSign: function stringToSign() {
    return this.request.headers['X-Amz-Date'];
  }
});

module.exports = AWS.Signers.CloudFront;

},{"../core":4,"./v3":54}],51:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.RequestSigner = inherit({
  constructor: function RequestSigner(request) {
    this.request = request;
  }
});

AWS.Signers.RequestSigner.getVersion = function getVersion(version) {
  /*jshint maxcomplexity:8*/
  switch (version) {
    case 'v2': return AWS.Signers.V2;
    case 'v3': return AWS.Signers.V3;
    case 'v4': return AWS.Signers.V4;
    case 's3': return AWS.Signers.S3;
    case 'v3https': return AWS.Signers.V3Https;
    case 'cloudfront': return AWS.Signers.CloudFront;
  }
  throw new Error('Unknown signing version ' + version);
};

require('./v2');
require('./v3');
require('./v3https');
require('./v4');
require('./s3');
require('./cloudfront');

},{"../core":4,"./cloudfront":50,"./s3":52,"./v2":53,"./v3":54,"./v3https":55,"./v4":56}],52:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.S3 = inherit(AWS.Signers.RequestSigner, {
  /**
   * When building the stringToSign, these sub resource params should be
   * part of the canonical resource string with their NON-decoded values
   */
  subResources: {
    'acl': 1,
    'cors': 1,
    'lifecycle': 1,
    'delete': 1,
    'location': 1,
    'logging': 1,
    'notification': 1,
    'partNumber': 1,
    'policy': 1,
    'requestPayment': 1,
    'tagging': 1,
    'torrent': 1,
    'uploadId': 1,
    'uploads': 1,
    'versionId': 1,
    'versioning': 1,
    'versions': 1,
    'website': 1
  },

  // when building the stringToSign, these querystring params should be
  // part of the canonical resource string with their NON-encoded values
  responseHeaders: {
    'response-content-type': 1,
    'response-content-language': 1,
    'response-expires': 1,
    'response-cache-control': 1,
    'response-content-disposition': 1,
    'response-content-encoding': 1
  },

  addAuthorization: function addAuthorization(credentials, date) {
    if (!this.request.headers['presigned-expires']) {
    this.request.headers['X-Amz-Date'] = AWS.util.date.rfc822(date);
    }

    if (credentials.sessionToken) {
      // presigned URLs require this header to be lowercased
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }

    var signature = this.sign(credentials.secretAccessKey, this.stringToSign());
    var auth = 'AWS ' + credentials.accessKeyId + ':' + signature;

    this.request.headers['Authorization'] = auth;
  },

  stringToSign: function stringToSign() {
    var r = this.request;

    var parts = [];
    parts.push(r.method);
    parts.push(r.headers['Content-MD5'] || '');
    parts.push(r.headers['Content-Type'] || '');
    parts.push(''); // This is the "Date" header, but we use X-Amz-Date.
                    // The S3 signing mechanism requires us to pass an empty
                    // string for this Date header regardless.
    var headers = this.canonicalizedAmzHeaders();
    if (headers) parts.push(headers);
    parts.push(this.canonicalizedResource());

    return parts.join('\n');

  },

  canonicalizedAmzHeaders: function canonicalizedAmzHeaders() {

    var amzHeaders = [];

    AWS.util.each(this.request.headers, function (name) {
      if (name.match(/^x-amz-/i))
        amzHeaders.push(name);
    });

    amzHeaders.sort(function (a, b) {
      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
    });

    var parts = [];
    AWS.util.arrayEach.call(this, amzHeaders, function (name) {
      parts.push(name.toLowerCase() + ':' + String(this.request.headers[name]));
    });

    return parts.join('\n');

  },

  canonicalizedResource: function canonicalizedResource() {

    var r = this.request;

    var parts = r.path.split('?');
    var path = parts[0];
    var querystring = parts[1];

    var resource = '';

    if (r.virtualHostedBucket)
      resource += '/' + r.virtualHostedBucket;

    resource += path;

    if (querystring) {

      // collect a list of sub resources and query params that need to be signed
      var resources = [];

      AWS.util.arrayEach.call(this, querystring.split('&'), function (param) {
        var name = param.split('=')[0];
        var value = param.split('=')[1];
        /*jshint undef:false */
        if (this.subResources[name] || this.responseHeaders[name]) {
          var resource = { name: name };
          if (value !== undefined) {
            if (this.subResources[name]) {
              resource.value = value;
            } else {
              resource.value = decodeURIComponent(value);
            }
          }
          resources.push(resource);
        }
      });

      resources.sort(function (a, b) { return a.name < b.name ? -1 : 1; });

      if (resources.length) {

        querystring = [];
        AWS.util.arrayEach(resources, function (resource) {
          if (resource.value === undefined)
            querystring.push(resource.name);
          else
            querystring.push(resource.name + '=' + resource.value);
        });

        resource += '?' + querystring.join('&');
      }

    }

    return resource;

  },

  sign: function sign(secret, string) {
    return AWS.util.crypto.hmac(secret, string, 'base64', 'sha1');
  }
});

module.exports = AWS.Signers.S3;

},{"../core":4}],53:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.V2 = inherit(AWS.Signers.RequestSigner, {
  addAuthorization: function addAuthorization(credentials, date) {

    if (!date) date = AWS.util.date.getDate();

    var r = this.request;

    r.params.Timestamp = AWS.util.date.iso8601(date);
    r.params.SignatureVersion = '2';
    r.params.SignatureMethod = 'HmacSHA256';
    r.params.AWSAccessKeyId = credentials.accessKeyId;

    if (credentials.sessionToken) {
      r.params.SecurityToken = credentials.sessionToken;
    }

    delete r.params.Signature; // delete old Signature for re-signing
    r.params.Signature = this.signature(credentials);

    r.body = AWS.util.queryParamsToString(r.params);
    r.headers['Content-Length'] = r.body.length;
  },

  signature: function signature(credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
  },

  stringToSign: function stringToSign() {
    var parts = [];
    parts.push(this.request.method);
    parts.push(this.request.endpoint.host.toLowerCase());
    parts.push(this.request.pathname());
    parts.push(AWS.util.queryParamsToString(this.request.params));
    return parts.join('\n');
  }

});

module.exports = AWS.Signers.V2;

},{"../core":4}],54:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.V3 = inherit(AWS.Signers.RequestSigner, {
  addAuthorization: function addAuthorization(credentials, date) {

    var datetime = AWS.util.date.rfc822(date);

    this.request.headers['X-Amz-Date'] = datetime;

    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }

    this.request.headers['X-Amzn-Authorization'] =
      this.authorization(credentials, datetime);

  },

  authorization: function authorization(credentials) {
    return 'AWS3 ' +
      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
      'Algorithm=HmacSHA256,' +
      'SignedHeaders=' + this.signedHeaders() + ',' +
      'Signature=' + this.signature(credentials);
  },

  signedHeaders: function signedHeaders() {
    var headers = [];
    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
      headers.push(h.toLowerCase());
    });
    return headers.sort().join(';');
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = this.request.headers;
    var parts = [];
    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
      parts.push(h.toLowerCase().trim() + ':' + String(headers[h]).trim());
    });
    return parts.sort().join('\n') + '\n';
  },

  headersToSign: function headersToSign() {
    var headers = [];
    AWS.util.each(this.request.headers, function iterator(k) {
      if (k === 'Host' || k === 'Content-Encoding' || k.match(/^X-Amz/i)) {
        headers.push(k);
      }
    });
    return headers;
  },

  signature: function signature(credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
  },

  stringToSign: function stringToSign() {
    var parts = [];
    parts.push(this.request.method);
    parts.push('/');
    parts.push('');
    parts.push(this.canonicalHeaders());
    parts.push(this.request.body);
    return AWS.util.crypto.sha256(parts.join('\n'));
  }

});

module.exports = AWS.Signers.V3;

},{"../core":4}],55:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
var inherit = AWS.util.inherit;

require('./v3');

/**
 * @api private
 */
AWS.Signers.V3Https = inherit(AWS.Signers.V3, {
  authorization: function authorization(credentials) {
    return 'AWS3-HTTPS ' +
      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
      'Algorithm=HmacSHA256,' +
      'Signature=' + this.signature(credentials);
  },

  stringToSign: function stringToSign() {
    return this.request.headers['X-Amz-Date'];
  }
});

module.exports = AWS.Signers.V3Https;

},{"../core":4,"./v3":54}],56:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
var Buffer = require('buffer').Buffer;
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.V4 = inherit(AWS.Signers.RequestSigner, {
  constructor: function V4(request, serviceName) {
    AWS.Signers.RequestSigner.call(this, request);
    this.serviceName = serviceName;
  },

  addAuthorization: function addAuthorization(credentials, date) {
    var datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '');
    this.addHeaders(credentials, datetime);
    this.request.headers['Authorization'] =
      this.authorization(credentials, datetime);
  },

  addHeaders: function addHeaders(credentials, datetime) {
    this.request.headers['X-Amz-Date'] = datetime;
    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }
  },

  authorization: function authorization(credentials, datetime) {
    var parts = [];
    var credString = this.credentialString(datetime);
    parts.push('AWS4-HMAC-SHA256 Credential=' +
      credentials.accessKeyId + '/' + credString);
    parts.push('SignedHeaders=' + this.signedHeaders());
    parts.push('Signature=' + this.signature(credentials, datetime));
    return parts.join(', ');
  },

  signature: function signature(credentials, datetime) {
    var kSecret = credentials.secretAccessKey;
    var kDate = AWS.util.crypto.hmac('AWS4' + kSecret, datetime.substr(0, 8));
    var kRegion = AWS.util.crypto.hmac(kDate, this.request.region);
    var kService = AWS.util.crypto.hmac(kRegion, this.serviceName);
    var kCredentials = AWS.util.crypto.hmac(kService, 'aws4_request');
    return AWS.util.crypto.hmac(kCredentials, this.stringToSign(datetime), 'hex');
  },

  stringToSign: function stringToSign(datetime) {
    var parts = [];
    parts.push('AWS4-HMAC-SHA256');
    parts.push(datetime);
    parts.push(this.credentialString(datetime));
    parts.push(this.hexEncodedHash(this.canonicalString()));
    return parts.join('\n');
  },

  canonicalString: function canonicalString() {
    var parts = [];
    parts.push(this.request.method);
    parts.push(this.request.pathname());
    parts.push(this.request.search());
    parts.push(this.canonicalHeaders() + '\n');
    parts.push(this.signedHeaders());
    parts.push(this.hexEncodedHash(this.request.body));
    return parts.join('\n');
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = [];
    AWS.util.each.call(this, this.request.headers, function (key, item) {
      headers.push([key, item]);
    });
    headers.sort(function (a, b) {
      return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
    });
    var parts = [];
    AWS.util.arrayEach.call(this, headers, function (item) {
      if (item[0] !== 'Authorization' && item[0] !== 'User-Agent' && item[0] !== 'Content-Type') {
        parts.push(item[0].toLowerCase() + ':' +
          this.canonicalHeaderValues(item[1].toString()));
      }
    });
    return parts.join('\n');
  },

  canonicalHeaderValues: function canonicalHeaderValues(values) {
    return values.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
  },

  signedHeaders: function signedHeaders() {
    var keys = [];
    AWS.util.each.call(this, this.request.headers, function (key) {
      key = key.toLowerCase();
      if (key !== 'authorization' && key !== 'user-agent' && key !== 'content-type') keys.push(key);
    });
    return keys.sort().join(';');
  },

  credentialString: function credentialString(datetime) {
    var parts = [];
    parts.push(datetime.substr(0, 8));
    parts.push(this.request.region);
    parts.push(this.serviceName);
    parts.push('aws4_request');
    return parts.join('/');
  },

  hexEncodedHash: function hash(string) {
    return AWS.util.crypto.sha256(string, 'hex');
  }

});

module.exports = AWS.Signers.V4;

},{"../core":4,"buffer":70}],57:[function(require,module,exports){
var process=require("__browserify_process");/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var cryptoLib = require('crypto');
var Buffer = require('buffer').Buffer;

/**
 * A set of utility methods for use with the AWS SDK.
 *
 * @!attribute abort
 *   Return this value from an iterator function ({each} or {arrayEach})
 *   to break out of the iteration.
 *   @example Breaking out of an iterator function
 *     AWS.util.each({a: 1, b: 2, c: 3}, function(key, value) {
 *       if (key == 'b') return AWS.util.abort;
 *     });
 *   @see each
 *   @see arrayEach
 * @api private
 */
AWS.util = {

  engine: function enc() {
    return process.platform + '/' + process.version;
  },

  userAgent: function userAgent() {
    return 'aws-sdk-nodejs/' + AWS.VERSION + ' ' + AWS.util.engine();
  },

  uriEscape: function uriEscape(string) {
    /*jshint undef:false */
    var output = encodeURIComponent(string);
    output = output.replace(/[^A-Za-z0-9_.~\-%]+/g, encodeURIComponent);

    // AWS percent-encodes some extra non-standard characters in a URI
    output = output.replace(/[*]/g, function(ch) {
      return '%' + ch.charCodeAt(0).toString(16).toUpperCase();
    });

    return output;
  },

  uriEscapePath: function uriEscapePath(string) {
    var parts = [];
    AWS.util.arrayEach(string.split('/'), function (part) {
      parts.push(AWS.util.uriEscape(part));
    });
    return parts.join('/');
  },

  urlParse: function urlParse(url) {
    return require('url').parse(url);
  },

  queryParamsToString: function queryParamsToString(params) {
    var items = [];
    var escape = AWS.util.uriEscape;
    var sortedKeys = Object.keys(params).sort();

    AWS.util.arrayEach(sortedKeys, function(name) {
      var value = params[name];
      var ename = escape(name);
      var result = ename;
      if (Array.isArray(value)) {
        var vals = [];
        AWS.util.arrayEach(value, function(item) { vals.push(escape(item)); });
        result = ename + '=' + vals.sort().join('&' + ename + '=');
      } else if (value !== undefined && value !== null) {
        result = ename + '=' + escape(value);
      }
      items.push(result);
    });

    return items.join('&');
  },

  readFileSync: function readFileSync(path) {
    if (typeof window !== 'undefined') return null;
    return require('fs').readFileSync(path, 'utf-8');
  },

  base64: {

    encode: function encode64(string) {
      return new Buffer(string).toString('base64');
    },

    decode: function decode64(string) {
      return new Buffer(string, 'base64').toString();
    }

  },

  buffer: {
    /**
     * Concatenates a list of Buffer objects.
     */
    concat: function(buffers) {
      var length = 0,
          offset = 0,
          buffer = null, i;

      for (i = 0; i < buffers.length; i++) {
        length += buffers[i].length;
      }

      buffer = new Buffer(length);

      for (i = 0; i < buffers.length; i++) {
        buffers[i].copy(buffer, offset);
        offset += buffers[i].length;
      }

      return buffer;
    }
  },

  string: {
    byteLength: function byteLength(string) {
      if (string === null || string === undefined) return 0;
      if (typeof string === 'string') string = new Buffer(string);

      if (string.length !== undefined) {
        return string.length;
      } else if (typeof(string.path) === 'string') {
        return require('fs').lstatSync(string.path).size;
      } else {
        throw AWS.util.error(new Error(), {
          message: 'Cannot determine length of ' + string, object: string
        });
      }
    }
  },

  jamespath: {
    query: function query(expression, data) {
      if (!data) return [];

      var results = [];
      var expressions = expression.split(/\s+or\s+/);
      AWS.util.arrayEach.call(this, expressions, function (expr) {
        var objects = [data];
        var tokens = expr.split('.');
        AWS.util.arrayEach.call(this, tokens, function (token) {
          var match = token.match('^(.+?)(?:\\[(-?\\d+|\\*)\\])?$');
          var newObjects = [];
          AWS.util.arrayEach.call(this, objects, function (obj) {
            if (match[1] === '*') {
              AWS.util.arrayEach.call(this, obj, function (value) {
                newObjects.push(value);
              });
            } else if (obj.hasOwnProperty(match[1])) {
              newObjects.push(obj[match[1]]);
            }
          });
          objects = newObjects;

          // handle indexing (token[0], token[-1])
          if (match[2]) {
            newObjects = [];
            AWS.util.arrayEach.call(this, objects, function (obj) {
              if (AWS.util.isType(obj, Array)) {
                if (match[2] === '*') {
                  newObjects = newObjects.concat(obj);
                } else {
                  var idx = parseInt(match[2], 10);
                  if (idx < 0) idx = obj.length + idx; // negative indexing
                  newObjects.push(obj[idx]);
                }
              }
            });
            objects = newObjects;
          }

          if (objects.length === 0) return AWS.util.abort;
        });

        if (objects.length > 0) {
          results = objects;
          return AWS.util.abort;
        }
      });

      return results;
    },

    find: function find(expression, data) {
      return AWS.util.jamespath.query(expression, data)[0];
    }
  },

  /**
   * Date and time utility functions.
   */
  date: {

    /**
     * @return [Date] the current JavaScript date object. Since all
     *   AWS services rely on this date object, you can override
     *   this function to provide a special time value to AWS service
     *   requests.
     */
    getDate: function getDate() { return new Date(); },

    /**
     * @return [String] the date in ISO-8601 format
     */
    iso8601: function iso8601(date) {
      if (date === undefined) { date = AWS.util.date.getDate(); }
      return date.toISOString();
    },

    /**
     * @return [String] the date in RFC 822 format
     */
    rfc822: function rfc822(date) {
      if (date === undefined) { date = AWS.util.date.getDate(); }
      return date.toUTCString();
    },

    /**
     * @return [Integer] the UNIX timestamp value for the current time
     */
    unixTimestamp: function unixTimestamp(date) {
      if (date === undefined) { date = AWS.util.date.getDate(); }
      return date.getTime() / 1000;
    },

    /**
     * @param [String,number,Date] date
     * @return [Date]
     */
    from: function format(date) {
      if (typeof date === 'number') {
        return new Date(date * 1000); // unix timestamp
      } else {
        return new Date(date);
      }
    },

    /**
     * Given a Date or date-like value, this function formats the
     * date into a string of the requested value.
     * @param [String,number,Date] date
     * @param [String] formatter Valid formats are:
     #   * 'iso8601'
     #   * 'rfc822'
     #   * 'unixTimestamp'
     * @return [String]
     */
    format: function format(date, formatter) {
      if (!formatter) formatter = 'iso8601';
      return AWS.util.date[formatter](AWS.util.date.from(date));
    }

  },

  crypto: {
    crc32Table: [
     0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419,
     0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4,
     0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07,
     0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
     0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856,
     0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9,
     0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4,
     0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
     0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3,
     0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A,
     0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599,
     0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
     0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190,
     0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F,
     0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E,
     0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
     0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED,
     0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950,
     0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3,
     0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
     0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A,
     0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5,
     0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010,
     0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
     0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17,
     0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6,
     0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615,
     0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
     0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344,
     0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB,
     0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A,
     0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
     0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1,
     0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C,
     0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF,
     0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
     0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE,
     0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31,
     0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C,
     0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
     0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B,
     0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242,
     0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1,
     0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
     0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278,
     0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7,
     0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66,
     0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
     0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605,
     0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8,
     0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B,
     0x2D02EF8D],

    crc32: function crc32(data) {
      /*jshint bitwise:false*/
      var tbl = AWS.util.crypto.crc32Table;
      var crc = 0 ^ -1;

      if (typeof data === 'string') {
        data = new Buffer(data);
      }

      for (var i = 0; i < data.length; i++) {
        var code = data.readUInt8(i);
        crc = (crc>>>8) ^ tbl[(crc^code)&0xFF];
      }
      return (crc ^ -1) >>> 0;
    },

    hmac: function hmac(key, string, digest, fn) {
      if (!digest) digest = 'binary';
      if (!fn) fn = 'sha256';
      return cryptoLib.createHmac(fn, key).update(string).digest(digest);
    },

    md5: function md5(data, digest) {
      if (!digest) { digest = 'binary'; }
      if (typeof data === 'string') data = new Buffer(data);
      return AWS.util.crypto.createHash('md5').update(data).digest(digest);
    },

    sha256: function sha256(string, digest) {
      if (!digest) { digest = 'binary'; }
      if (typeof string === 'string') string = new Buffer(string);
      return AWS.util.crypto.createHash('sha256').update(string).digest(digest);
    },

    toHex: function toHex(data) {
      var out = [];
      for (var i = 0; i < data.length; i++) {
        out.push(('0' + data.charCodeAt(i).toString(16)).substr(-2, 2));
      }
      return out.join('');
    },

    createHash: function createHash(algorithm) {
      return cryptoLib.createHash(algorithm);
    }

  },

  /** @!ignore */

  /* Abort constant */
  abort: {},

  each: function each(object, iterFunction) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        var ret = iterFunction.call(this, key, object[key]);
        if (ret === AWS.util.abort) break;
      }
    }
  },

  arrayEach: function arrayEach(array, iterFunction) {
    for (var idx in array) {
      if (array.hasOwnProperty(idx)) {
        var ret = iterFunction.call(this, array[idx], parseInt(idx, 10));
        if (ret === AWS.util.abort) break;
      }
    }
  },

  update: function update(obj1, obj2) {
    AWS.util.each(obj2, function iterator(key, item) {
      obj1[key] = item;
    });
    return obj1;
  },

  merge: function merge(obj1, obj2) {
    return AWS.util.update(AWS.util.copy(obj1), obj2);
  },

  copy: function copy(object) {
    if (object === null || object === undefined) return object;
    var dupe = {};
    /*jshint forin:false */
    for (var key in object) {
      dupe[key] = object[key];
    }
    return dupe;
  },

  isEmpty: function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  },

  isType: function isType(obj, type) {
    // handle cross-"frame" objects
    if (typeof type === 'function') type = type.name;
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  },

  error: function error(err, options) {
    err.message = err.message || null;

    if (typeof options === 'string') {
      err.message = options;
    } else {
      AWS.util.update(err, options);
    }

    err.name = err.code || 'Error';
    return err;
  },

  /**
   * @api private
   */
  inherit: function inherit(klass, features) {
    var newObject = null;
    if (features === undefined) {
      features = klass;
      klass = Object;
      newObject = {};
    } else {
      /*jshint newcap:false */
      /*jshint camelcase:false */
      var ctor = function __ctor_wrapper__() {};
      ctor.prototype = klass.prototype;
      newObject = new ctor();
    }

    // constructor not supplied, create pass-through ctor
    if (features.constructor === Object) {
      features.constructor = function() {
        if (klass !== Object) {
          return klass.apply(this, arguments);
        }
      };
    }

    features.constructor.prototype = newObject;
    AWS.util.update(features.constructor.prototype, features);
    features.constructor.__super__ = klass;
    return features.constructor;
  },

  /**
   * @api private
   */
  mixin: function mixin() {
    var klass = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      /*jshint forin:false*/
      for (var prop in arguments[i].prototype) {
        var fn = arguments[i].prototype[prop];
        if (prop != 'constructor') {
          klass.prototype[prop] = fn;
        }
      }
    }
    return klass;
  }

};

module.exports = AWS.util;

},{"./core":4,"__browserify_process":82,"buffer":70,"crypto":72,"fs":63,"url":67}],58:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
var builder = require('xmlbuilder');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.XML.Builder = inherit({

  constructor: function XMLBuilder(root, rules, options) {
    this.root = root;
    this.rules = rules;
    this.xmlns = options.xmlnamespace;
    this.timestampFormat = options.timestampFormat;
  },

  toXML: function toXML(params) {
    var xml = builder.create(this.root);
    if (this.xmlns) xml.att('xmlns', this.xmlns);
    this.serializeStructure(this.rules, params, xml);
    return xml.root().toString();
  },

  serializeStructure: function serializeStructure(rules, params, xml) {

    AWS.util.each.call(this, rules || {}, function (memberName, memberRules) {
      var value = params[memberName];
      if (value !== undefined) {
        if (memberRules.attribute) {
          xml.att(memberRules.name, value);
        } else {
          this.serializeMember(memberName, memberRules, value, xml);
        }
      }
    });
  },

  serializeList: function serializeList(name, rules, list, xml) {
    if (rules.flattened) {
      AWS.util.arrayEach.call(this, list, function (value) {
        this.serializeMember(rules.name || name, rules.members, value, xml);
      });
    } else {
      xml = xml.ele(rules.name || name);
      AWS.util.arrayEach.call(this, list, function (value) {
        var memberName = rules.members.name || 'member';
        this.serializeMember(memberName, rules.members, value, xml);
      });
    }
  },

  serializeMember: function serializeMember(memberName, rules, params, xml) {
    var name = memberName;
    if (rules.type === 'structure') {
      xml = xml.ele(name);
      this.serializeStructure(rules.members, params, xml);
    } else if (rules.type === 'list') {
      this.serializeList(name, rules, params, xml);
    } else if (rules.type === 'timestamp') {
      var timestampFormat = rules.format || this.timestampFormat;
      var date = AWS.util.date.format(params, timestampFormat);
      xml = xml.ele(name, String(date));
    } else {
      xml = xml.ele(name, String(params));
    }
    this.applyNamespaces(xml, rules);
  },

  applyNamespaces: function applyNamespaces(xml, rules) {
    if (rules.xmlns) {
      var attr = 'xmlns';
      if (rules.xmlns.prefix) attr += ':' + rules.xmlns.prefix;
      xml.att(attr, rules.xmlns.uri);
    }
  }


});

},{"../core":4,"xmlbuilder":87}],59:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');
var inherit = AWS.util.inherit;
var xml2js = require('xml2js');

/**
 * @api private
 */
AWS.XML.Parser = inherit({

  constructor: function XMLParser(rules) {
    this.rules = (rules || {}).members || {};
  },

  // options passed to xml2js parser
  options: {
    explicitCharkey: false, // undocumented
    trim: false,            // trim the leading/trailing whitespace from text nodes
    normalize: false,       // trim interior whitespace inside text nodes
    explicitRoot: false,    // return the root node in the resulting object?
    emptyTag: null,         // the default value for empty nodes
    explicitArray: true,    // always put child nodes in an array
    ignoreAttrs: false,     // ignore attributes, only create text nodes
    mergeAttrs: false,      // merge attributes and child elements
    validator: null         // a callable validator
  },

  parse: function parse(xml) {

    var result = null;
    var error = null;
    var parser = new xml2js.Parser(this.options);
    parser.parseString(xml, function (e, r) {
      error = e;
      result = r;
    });

    if (result) {
      delete result.xmlns;
      return this.parseStructure(result, this.rules);
    } else if (error) {
      throw AWS.util.error(error, {code: 'XMLParserError'});
    } else { // empty xml document
      return this.parseStructure({}, this.rules);
    }

  },

  parseStructure: function parseStructure(structure, rules) {
    var data = {};

    // force array members to always be present
    AWS.util.each.call(this, rules, function(memberName, memberRules) {
      if (memberRules.type == 'list') {
        data[memberRules.name || memberName] = [];
      }
    });

    AWS.util.each.call(this, structure, function (xmlName, value) {
      if (xmlName == '$') {
        AWS.util.each.call(this, value, function (attrName, attrValue) {
          if (rules[attrName]) {
            var rule = rules[attrName];
            data[rule.name || xmlName] = this.parseMember([attrValue], rule);
          }
        });
      } else {
        var rule = rules[xmlName] || {};
        data[rule.name || xmlName] = this.parseMember(value, rule);
      }
    });

    return data;
  },

  parseMap: function parseMap(map, rules) {
    var data = {};
    var keyRules = rules.keys || {};
    var valueRules = rules.members || {};
    var keyName = keyRules.name || 'key';
    var valueName = valueRules.name || 'value';
    if (!rules.flattened) {
      map = map[0].entry;
    }
    AWS.util.arrayEach.call(this, map, function (entry) {
      var value = this.parseMember(entry[valueName], valueRules);
      data[entry[keyName][0]] = value;
    });
    return data;
  },

  parseList: function parseList(list, rules) {
    var data = [];
    var memberRules = rules.members || {};
    var memberName = memberRules.name || 'member';
    if (rules.flattened) {
      AWS.util.arrayEach.call(this, list, function (value) {
        data.push(this.parseMember([value], memberRules));
      });
    } else {
      AWS.util.arrayEach.call(this, list, function (member) {
        AWS.util.arrayEach.call(this, member[memberName], function (value) {
          data.push(this.parseMember([value], memberRules));
        });
      });
    }
    return data;
  },

  parseMember: function parseMember(values, rules) {
    /*jshint maxcomplexity:20*/

    if (values[0] === null) {
      if (rules.type === 'structure') return {};
      if (rules.type === 'list') return [];
      if (rules.type === 'map') return {};
      return null;
    }

    if (values[0]['$'] && values[0]['$'].encoding == 'base64') {
      return AWS.util.base64.decode(values[0]['_']);
    }

    if (!rules.type) {
      if (typeof values[0] === 'string') {
        rules.type = 'string';
      } else if (values[0]['_']) {
        rules.type = 'string';
        values = [values[0]['_']];
      } else {
        rules.type = 'structure';
      }
    }

    if (rules.type === 'string') {

      return values[0];

    } else if (rules.type === 'structure') {

      return this.parseStructure(values[0], rules.members || {});

    } else if (rules.type === 'list') {

      return this.parseList(values, rules);

    } else if (rules.type === 'map') {

      return this.parseMap(values, rules);

    } else if (rules.type === 'integer') {

      return parseInt(values[0], 10);

    } else if (rules.type === 'float') {

      return parseFloat(values[0]);

    } else if (rules.type === 'timestamp') {

      return this.parseTimestamp(values[0]);

    } else if (rules.type === 'boolean') {

      return values[0] === 'true';

    } else {

      var msg = 'unhandled type: ' + rules.type;
      throw AWS.util.error(new Error(msg), {code: 'XMLParserError'});

    }

  },

  parseTimestamp: function parseTimestamp(value) {

    if (value.match(/^\d+$/)) { // unix timestamp

      return new Date(value * 1000);

    } else if (value.match(/^\d{4}/)) { // iso8601

      return new Date(value);

    } else if (value.match(/^\w{3},/)) { // rfc822

      return new Date(value);

    } else {

      throw AWS.util.error(
        new Error('unhandled timestamp format: ' + value),
        {code: 'TimestampParserError'});

    }

  }

});

},{"../core":4,"xml2js":83}],60:[function(require,module,exports){

},{}],61:[function(require,module,exports){
// UTILITY
var util = require('util');
var Buffer = require("buffer").Buffer;
var pSlice = Array.prototype.slice;

function objectKeys(object) {
  if (Object.keys) return Object.keys(object);
  var result = [];
  for (var name in object) {
    if (Object.prototype.hasOwnProperty.call(object, name)) {
      result.push(name);
    }
  }
  return result;
}

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.message = options.message;
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (value === undefined) {
    return '' + value;
  }
  if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
    return value.toString();
  }
  if (typeof value === 'function' || value instanceof RegExp) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (typeof s == 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

assert.AssertionError.prototype.toString = function() {
  if (this.message) {
    return [this.name + ':', this.message].join(' ');
  } else {
    return [
      this.name + ':',
      truncate(JSON.stringify(this.actual, replacer), 128),
      this.operator,
      truncate(JSON.stringify(this.expected, replacer), 128)
    ].join(' ');
  }
};

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!!!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (Buffer.isBuffer(actual) && Buffer.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (typeof actual != 'object' && typeof expected != 'object') {
    return actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b),
        key, i;
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (expected instanceof RegExp) {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail('Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail('Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

},{"buffer":70,"util":68}],62:[function(require,module,exports){
var process=require("__browserify_process");if (!process.EventEmitter) process.EventEmitter = function () {};

var EventEmitter = exports.EventEmitter = process.EventEmitter;
var isArray = typeof Array.isArray === 'function'
    ? Array.isArray
    : function (xs) {
        return Object.prototype.toString.call(xs) === '[object Array]'
    }
;
function indexOf (xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for (var i = 0; i < xs.length; i++) {
        if (x === xs[i]) return i;
    }
    return -1;
}

// By default EventEmitters will print a warning if more than
// 10 listeners are added to it. This is a useful default which
// helps finding memory leaks.
//
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
var defaultMaxListeners = 10;
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!this._events) this._events = {};
  this._events.maxListeners = n;
};


EventEmitter.prototype.emit = function(type) {
  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events || !this._events.error ||
        (isArray(this._events.error) && !this._events.error.length))
    {
      if (arguments[1] instanceof Error) {
        throw arguments[1]; // Unhandled 'error' event
      } else {
        throw new Error("Uncaught, unspecified 'error' event.");
      }
      return false;
    }
  }

  if (!this._events) return false;
  var handler = this._events[type];
  if (!handler) return false;

  if (typeof handler == 'function') {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        var args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
    return true;

  } else if (isArray(handler)) {
    var args = Array.prototype.slice.call(arguments, 1);

    var listeners = handler.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i].apply(this, args);
    }
    return true;

  } else {
    return false;
  }
};

// EventEmitter is defined in src/node_events.cc
// EventEmitter.prototype.emit() is also defined there.
EventEmitter.prototype.addListener = function(type, listener) {
  if ('function' !== typeof listener) {
    throw new Error('addListener only takes instances of Function');
  }

  if (!this._events) this._events = {};

  // To avoid recursion in the case that type == "newListeners"! Before
  // adding it to the listeners, first emit "newListeners".
  this.emit('newListener', type, listener);

  if (!this._events[type]) {
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  } else if (isArray(this._events[type])) {

    // Check for listener leak
    if (!this._events[type].warned) {
      var m;
      if (this._events.maxListeners !== undefined) {
        m = this._events.maxListeners;
      } else {
        m = defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' +
                      'leak detected. %d listeners added. ' +
                      'Use emitter.setMaxListeners() to increase limit.',
                      this._events[type].length);
        console.trace();
      }
    }

    // If we've already got an array, just append.
    this._events[type].push(listener);
  } else {
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  var self = this;
  self.on(type, function g() {
    self.removeListener(type, g);
    listener.apply(this, arguments);
  });

  return this;
};

EventEmitter.prototype.removeListener = function(type, listener) {
  if ('function' !== typeof listener) {
    throw new Error('removeListener only takes instances of Function');
  }

  // does not use listeners(), so no side effect of creating _events[type]
  if (!this._events || !this._events[type]) return this;

  var list = this._events[type];

  if (isArray(list)) {
    var i = indexOf(list, listener);
    if (i < 0) return this;
    list.splice(i, 1);
    if (list.length == 0)
      delete this._events[type];
  } else if (this._events[type] === listener) {
    delete this._events[type];
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  if (arguments.length === 0) {
    this._events = {};
    return this;
  }

  // does not use listeners(), so no side effect of creating _events[type]
  if (type && this._events && this._events[type]) this._events[type] = null;
  return this;
};

EventEmitter.prototype.listeners = function(type) {
  if (!this._events) this._events = {};
  if (!this._events[type]) this._events[type] = [];
  if (!isArray(this._events[type])) {
    this._events[type] = [this._events[type]];
  }
  return this._events[type];
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (typeof emitter._events[type] === 'function')
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

},{"__browserify_process":82}],63:[function(require,module,exports){
// nothing to see here... no file methods for the browser

},{}],64:[function(require,module,exports){
var http = require('http');

var https = module.exports;

for (var key in http) {
    if (http.hasOwnProperty(key)) https[key] = http[key];
};

https.request = function (params, cb) {
    if (!params) params = {};
    params.scheme = 'https';
    return http.request.call(this, params, cb);
}
},{"http":77}],65:[function(require,module,exports){

/**
 * Object#toString() ref for stringify().
 */

var toString = Object.prototype.toString;

/**
 * Array#indexOf shim.
 */

var indexOf = typeof Array.prototype.indexOf === 'function'
  ? function(arr, el) { return arr.indexOf(el); }
  : function(arr, el) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) return i;
      }
      return -1;
    };

/**
 * Array.isArray shim.
 */

var isArray = Array.isArray || function(arr) {
  return toString.call(arr) == '[object Array]';
};

/**
 * Object.keys shim.
 */

var objectKeys = Object.keys || function(obj) {
  var ret = [];
  for (var key in obj) ret.push(key);
  return ret;
};

/**
 * Array#forEach shim.
 */

var forEach = typeof Array.prototype.forEach === 'function'
  ? function(arr, fn) { return arr.forEach(fn); }
  : function(arr, fn) {
      for (var i = 0; i < arr.length; i++) fn(arr[i]);
    };

/**
 * Array#reduce shim.
 */

var reduce = function(arr, fn, initial) {
  if (typeof arr.reduce === 'function') return arr.reduce(fn, initial);
  var res = initial;
  for (var i = 0; i < arr.length; i++) res = fn(res, arr[i]);
  return res;
};

/**
 * Cache non-integer test regexp.
 */

var isint = /^[0-9]+$/;

function promote(parent, key) {
  if (parent[key].length == 0) return parent[key] = {};
  var t = {};
  for (var i in parent[key]) t[i] = parent[key][i];
  parent[key] = t;
  return t;
}

function parse(parts, parent, key, val) {
  var part = parts.shift();
  // end
  if (!part) {
    if (isArray(parent[key])) {
      parent[key].push(val);
    } else if ('object' == typeof parent[key]) {
      parent[key] = val;
    } else if ('undefined' == typeof parent[key]) {
      parent[key] = val;
    } else {
      parent[key] = [parent[key], val];
    }
    // array
  } else {
    var obj = parent[key] = parent[key] || [];
    if (']' == part) {
      if (isArray(obj)) {
        if ('' != val) obj.push(val);
      } else if ('object' == typeof obj) {
        obj[objectKeys(obj).length] = val;
      } else {
        obj = parent[key] = [parent[key], val];
      }
      // prop
    } else if (~indexOf(part, ']')) {
      part = part.substr(0, part.length - 1);
      if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
      parse(parts, obj, part, val);
      // key
    } else {
      if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
      parse(parts, obj, part, val);
    }
  }
}

/**
 * Merge parent key/val pair.
 */

function merge(parent, key, val){
  if (~indexOf(key, ']')) {
    var parts = key.split('[')
      , len = parts.length
      , last = len - 1;
    parse(parts, parent, 'base', val);
    // optimize
  } else {
    if (!isint.test(key) && isArray(parent.base)) {
      var t = {};
      for (var k in parent.base) t[k] = parent.base[k];
      parent.base = t;
    }
    set(parent.base, key, val);
  }

  return parent;
}

/**
 * Parse the given obj.
 */

function parseObject(obj){
  var ret = { base: {} };
  forEach(objectKeys(obj), function(name){
    merge(ret, name, obj[name]);
  });
  return ret.base;
}

/**
 * Parse the given str.
 */

function parseString(str){
  return reduce(String(str).split('&'), function(ret, pair){
    var eql = indexOf(pair, '=')
      , brace = lastBraceInKey(pair)
      , key = pair.substr(0, brace || eql)
      , val = pair.substr(brace || eql, pair.length)
      , val = val.substr(indexOf(val, '=') + 1, val.length);

    // ?foo
    if ('' == key) key = pair, val = '';
    if ('' == key) return ret;

    return merge(ret, decode(key), decode(val));
  }, { base: {} }).base;
}

/**
 * Parse the given query `str` or `obj`, returning an object.
 *
 * @param {String} str | {Object} obj
 * @return {Object}
 * @api public
 */

exports.parse = function(str){
  if (null == str || '' == str) return {};
  return 'object' == typeof str
    ? parseObject(str)
    : parseString(str);
};

/**
 * Turn the given `obj` into a query string
 *
 * @param {Object} obj
 * @return {String}
 * @api public
 */

var stringify = exports.stringify = function(obj, prefix) {
  if (isArray(obj)) {
    return stringifyArray(obj, prefix);
  } else if ('[object Object]' == toString.call(obj)) {
    return stringifyObject(obj, prefix);
  } else if ('string' == typeof obj) {
    return stringifyString(obj, prefix);
  } else {
    return prefix + '=' + encodeURIComponent(String(obj));
  }
};

/**
 * Stringify the given `str`.
 *
 * @param {String} str
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyString(str, prefix) {
  if (!prefix) throw new TypeError('stringify expects an object');
  return prefix + '=' + encodeURIComponent(str);
}

/**
 * Stringify the given `arr`.
 *
 * @param {Array} arr
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyArray(arr, prefix) {
  var ret = [];
  if (!prefix) throw new TypeError('stringify expects an object');
  for (var i = 0; i < arr.length; i++) {
    ret.push(stringify(arr[i], prefix + '[' + i + ']'));
  }
  return ret.join('&');
}

/**
 * Stringify the given `obj`.
 *
 * @param {Object} obj
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyObject(obj, prefix) {
  var ret = []
    , keys = objectKeys(obj)
    , key;

  for (var i = 0, len = keys.length; i < len; ++i) {
    key = keys[i];
    if (null == obj[key]) {
      ret.push(encodeURIComponent(key) + '=');
    } else {
      ret.push(stringify(obj[key], prefix
        ? prefix + '[' + encodeURIComponent(key) + ']'
        : encodeURIComponent(key)));
    }
  }

  return ret.join('&');
}

/**
 * Set `obj`'s `key` to `val` respecting
 * the weird and wonderful syntax of a qs,
 * where "foo=bar&foo=baz" becomes an array.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {String} val
 * @api private
 */

function set(obj, key, val) {
  var v = obj[key];
  if (undefined === v) {
    obj[key] = val;
  } else if (isArray(v)) {
    v.push(val);
  } else {
    obj[key] = [v, val];
  }
}

/**
 * Locate last brace in `str` within the key.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function lastBraceInKey(str) {
  var len = str.length
    , brace
    , c;
  for (var i = 0; i < len; ++i) {
    c = str[i];
    if (']' == c) brace = false;
    if ('[' == c) brace = true;
    if ('=' == c && !brace) return i;
  }
}

/**
 * Decode `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function decode(str) {
  try {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  } catch (err) {
    return str;
  }
}

},{}],66:[function(require,module,exports){
var events = require('events');
var util = require('util');

function Stream() {
  events.EventEmitter.call(this);
}
util.inherits(Stream, events.EventEmitter);
module.exports = Stream;
// Backwards-compat with node 0.4.x
Stream.Stream = Stream;

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once, and
  // only when all sources have ended.
  if (!dest._isStdio && (!options || options.end !== false)) {
    dest._pipeCount = dest._pipeCount || 0;
    dest._pipeCount++;

    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest._pipeCount--;

    // remove the listeners
    cleanup();

    if (dest._pipeCount > 0) {
      // waiting for other incoming streams to end.
      return;
    }

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest._pipeCount--;

    // remove the listeners
    cleanup();

    if (dest._pipeCount > 0) {
      // waiting for other incoming streams to end.
      return;
    }

    dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (this.listeners('error').length === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('end', cleanup);
    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('end', cleanup);
  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":62,"util":68}],67:[function(require,module,exports){
var punycode = { encode : function (s) { return s } };

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

function arrayIndexOf(array, subject) {
    for (var i = 0, j = array.length; i < j; i++) {
        if(array[i] == subject) return i;
    }
    return -1;
}

var objectKeys = Object.keys || function objectKeys(object) {
    if (object !== Object(object)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in object) if (object.hasOwnProperty(key)) keys[keys.length] = key;
    return keys;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]+$/,
    // RFC 2396: characters reserved for delimiting URLs.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '~', '[', ']', '`'].concat(delims),
    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''],
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#']
      .concat(unwise).concat(autoEscape),
    nonAuthChars = ['/', '@', '?', '#'].concat(delims),
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[a-zA-Z0-9][a-z0-9A-Z_-]{0,62}$/,
    hostnamePartStart = /^([a-zA-Z0-9][a-z0-9A-Z_-]{0,62})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always have a path component.
    pathedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && typeof(url) === 'object' && url.href) return url;

  if (typeof url !== 'string') {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  var out = {},
      rest = url;

  // cut off any delimiters.
  // This is to support parse stuff like "<http://foo.com>"
  for (var i = 0, l = rest.length; i < l; i++) {
    if (arrayIndexOf(delims, rest.charAt(i)) === -1) break;
  }
  if (i !== 0) rest = rest.substr(i);


  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    out.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      out.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {
    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    // don't enforce full RFC correctness, just be unstupid about it.

    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the first @ sign, unless some non-auth character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    var atSign = arrayIndexOf(rest, '@');
    if (atSign !== -1) {
      // there *may be* an auth
      var hasAuth = true;
      for (var i = 0, l = nonAuthChars.length; i < l; i++) {
        var index = arrayIndexOf(rest, nonAuthChars[i]);
        if (index !== -1 && index < atSign) {
          // not a valid auth.  Something like http://foo.com/bar@baz/
          hasAuth = false;
          break;
        }
      }
      if (hasAuth) {
        // pluck off the auth portion.
        out.auth = rest.substr(0, atSign);
        rest = rest.substr(atSign + 1);
      }
    }

    var firstNonHost = -1;
    for (var i = 0, l = nonHostChars.length; i < l; i++) {
      var index = arrayIndexOf(rest, nonHostChars[i]);
      if (index !== -1 &&
          (firstNonHost < 0 || index < firstNonHost)) firstNonHost = index;
    }

    if (firstNonHost !== -1) {
      out.host = rest.substr(0, firstNonHost);
      rest = rest.substr(firstNonHost);
    } else {
      out.host = rest;
      rest = '';
    }

    // pull out port.
    var p = parseHost(out.host);
    var keys = objectKeys(p);
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      out[key] = p[key];
    }

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    out.hostname = out.hostname || '';

    // validate a little.
    if (out.hostname.length > hostnameMaxLen) {
      out.hostname = '';
    } else {
      var hostparts = out.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            out.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    // hostnames are always lower case.
    out.hostname = out.hostname.toLowerCase();

    // IDNA Support: Returns a puny coded representation of "domain".
    // It only converts the part of the domain name that
    // has non ASCII characters. I.e. it dosent matter if
    // you call it with a domain that already is in ASCII.
    var domainArray = out.hostname.split('.');
    var newOut = [];
    for (var i = 0; i < domainArray.length; ++i) {
      var s = domainArray[i];
      newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
          'xn--' + punycode.encode(s) : s);
    }
    out.hostname = newOut.join('.');

    out.host = (out.hostname || '') +
        ((out.port) ? ':' + out.port : '');
    out.href += out.host;
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }

    // Now make sure that delims never appear in a url.
    var chop = rest.length;
    for (var i = 0, l = delims.length; i < l; i++) {
      var c = arrayIndexOf(rest, delims[i]);
      if (c !== -1) {
        chop = Math.min(c, chop);
      }
    }
    rest = rest.substr(0, chop);
  }


  // chop off from the tail first.
  var hash = arrayIndexOf(rest, '#');
  if (hash !== -1) {
    // got a fragment string.
    out.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = arrayIndexOf(rest, '?');
  if (qm !== -1) {
    out.search = rest.substr(qm);
    out.query = rest.substr(qm + 1);
    if (parseQueryString) {
      out.query = querystring.parse(out.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    out.search = '';
    out.query = {};
  }
  if (rest) out.pathname = rest;
  if (slashedProtocol[proto] &&
      out.hostname && !out.pathname) {
    out.pathname = '/';
  }

  //to support http.request
  if (out.pathname || out.search) {
    out.path = (out.pathname ? out.pathname : '') +
               (out.search ? out.search : '');
  }

  // finally, reconstruct the href based on what has been validated.
  out.href = urlFormat(out);
  return out;
}

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (typeof(obj) === 'string') obj = urlParse(obj);

  var auth = obj.auth || '';
  if (auth) {
    auth = auth.split('@').join('%40');
    for (var i = 0, l = nonAuthChars.length; i < l; i++) {
      var nAC = nonAuthChars[i];
      auth = auth.split(nAC).join(encodeURIComponent(nAC));
    }
    auth += '@';
  }

  var protocol = obj.protocol || '',
      host = (obj.host !== undefined) ? auth + obj.host :
          obj.hostname !== undefined ? (
              auth + obj.hostname +
              (obj.port ? ':' + obj.port : '')
          ) :
          false,
      pathname = obj.pathname || '',
      query = obj.query &&
              ((typeof obj.query === 'object' &&
                objectKeys(obj.query).length) ?
                 querystring.stringify(obj.query) :
                 '') || '',
      search = obj.search || (query && ('?' + query)) || '',
      hash = obj.hash || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (obj.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  return protocol + host + pathname + search + hash;
}

function urlResolve(source, relative) {
  return urlFormat(urlResolveObject(source, relative));
}

function urlResolveObject(source, relative) {
  if (!source) return relative;

  source = urlParse(urlFormat(source), false, true);
  relative = urlParse(urlFormat(relative), false, true);

  // hash is always overridden, no matter what.
  source.hash = relative.hash;

  if (relative.href === '') {
    source.href = urlFormat(source);
    return source;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    relative.protocol = source.protocol;
    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[relative.protocol] &&
        relative.hostname && !relative.pathname) {
      relative.path = relative.pathname = '/';
    }
    relative.href = urlFormat(relative);
    return relative;
  }

  if (relative.protocol && relative.protocol !== source.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      relative.href = urlFormat(relative);
      return relative;
    }
    source.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      relative.pathname = relPath.join('/');
    }
    source.pathname = relative.pathname;
    source.search = relative.search;
    source.query = relative.query;
    source.host = relative.host || '';
    source.auth = relative.auth;
    source.hostname = relative.hostname || relative.host;
    source.port = relative.port;
    //to support http.request
    if (source.pathname !== undefined || source.search !== undefined) {
      source.path = (source.pathname ? source.pathname : '') +
                    (source.search ? source.search : '');
    }
    source.slashes = source.slashes || relative.slashes;
    source.href = urlFormat(source);
    return source;
  }

  var isSourceAbs = (source.pathname && source.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host !== undefined ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (source.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = source.pathname && source.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = source.protocol &&
          !slashedProtocol[source.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // source.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {

    delete source.hostname;
    delete source.port;
    if (source.host) {
      if (srcPath[0] === '') srcPath[0] = source.host;
      else srcPath.unshift(source.host);
    }
    delete source.host;
    if (relative.protocol) {
      delete relative.hostname;
      delete relative.port;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      delete relative.host;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    source.host = (relative.host || relative.host === '') ?
                      relative.host : source.host;
    source.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : source.hostname;
    source.search = relative.search;
    source.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    source.search = relative.search;
    source.query = relative.query;
  } else if ('search' in relative) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      source.hostname = source.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especialy happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = source.host && arrayIndexOf(source.host, '@') > 0 ?
                       source.host.split('@') : false;
      if (authInHost) {
        source.auth = authInHost.shift();
        source.host = source.hostname = authInHost.shift();
      }
    }
    source.search = relative.search;
    source.query = relative.query;
    //to support http.request
    if (source.pathname !== undefined || source.search !== undefined) {
      source.path = (source.pathname ? source.pathname : '') +
                    (source.search ? source.search : '');
    }
    source.href = urlFormat(source);
    return source;
  }
  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    delete source.pathname;
    //to support http.request
    if (!source.search) {
      source.path = '/' + source.search;
    } else {
      delete source.path;
    }
    source.href = urlFormat(source);
    return source;
  }
  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (source.host || relative.host) && (last === '.' || last === '..') ||
      last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last == '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    source.hostname = source.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especialy happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = source.host && arrayIndexOf(source.host, '@') > 0 ?
                     source.host.split('@') : false;
    if (authInHost) {
      source.auth = authInHost.shift();
      source.host = source.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (source.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  source.pathname = srcPath.join('/');
  //to support request.http
  if (source.pathname !== undefined || source.search !== undefined) {
    source.path = (source.pathname ? source.pathname : '') +
                  (source.search ? source.search : '');
  }
  source.auth = relative.auth || source.auth;
  source.slashes = source.slashes || relative.slashes;
  source.href = urlFormat(source);
  return source;
}

function parseHost(host) {
  var out = {};
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    out.port = port.substr(1);
    host = host.substr(0, host.length - port.length);
  }
  if (host) out.hostname = host;
  return out;
}

},{"querystring":65}],68:[function(require,module,exports){
var events = require('events');

exports.isArray = isArray;
exports.isDate = function(obj){return Object.prototype.toString.call(obj) === '[object Date]'};
exports.isRegExp = function(obj){return Object.prototype.toString.call(obj) === '[object RegExp]'};


exports.print = function () {};
exports.puts = function () {};
exports.debug = function() {};

exports.inspect = function(obj, showHidden, depth, colors) {
  var seen = [];

  var stylize = function(str, styleType) {
    // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
    var styles =
        { 'bold' : [1, 22],
          'italic' : [3, 23],
          'underline' : [4, 24],
          'inverse' : [7, 27],
          'white' : [37, 39],
          'grey' : [90, 39],
          'black' : [30, 39],
          'blue' : [34, 39],
          'cyan' : [36, 39],
          'green' : [32, 39],
          'magenta' : [35, 39],
          'red' : [31, 39],
          'yellow' : [33, 39] };

    var style =
        { 'special': 'cyan',
          'number': 'blue',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'date': 'magenta',
          // "name": intentionally not styling
          'regexp': 'red' }[styleType];

    if (style) {
      return '\u001b[' + styles[style][0] + 'm' + str +
             '\u001b[' + styles[style][1] + 'm';
    } else {
      return str;
    }
  };
  if (! colors) {
    stylize = function(str, styleType) { return str; };
  }

  function format(value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (value && typeof value.inspect === 'function' &&
        // Filter out the util module, it's inspect function is special
        value !== exports &&
        // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
      return value.inspect(recurseTimes);
    }

    // Primitive types cannot have properties
    switch (typeof value) {
      case 'undefined':
        return stylize('undefined', 'undefined');

      case 'string':
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                                 .replace(/'/g, "\\'")
                                                 .replace(/\\"/g, '"') + '\'';
        return stylize(simple, 'string');

      case 'number':
        return stylize('' + value, 'number');

      case 'boolean':
        return stylize('' + value, 'boolean');
    }
    // For some reason typeof null is "object", so special case here.
    if (value === null) {
      return stylize('null', 'null');
    }

    // Look up the keys of the object.
    var visible_keys = Object_keys(value);
    var keys = showHidden ? Object_getOwnPropertyNames(value) : visible_keys;

    // Functions without properties can be shortcutted.
    if (typeof value === 'function' && keys.length === 0) {
      if (isRegExp(value)) {
        return stylize('' + value, 'regexp');
      } else {
        var name = value.name ? ': ' + value.name : '';
        return stylize('[Function' + name + ']', 'special');
      }
    }

    // Dates without properties can be shortcutted
    if (isDate(value) && keys.length === 0) {
      return stylize(value.toUTCString(), 'date');
    }

    var base, type, braces;
    // Determine the object type
    if (isArray(value)) {
      type = 'Array';
      braces = ['[', ']'];
    } else {
      type = 'Object';
      braces = ['{', '}'];
    }

    // Make functions say that they are functions
    if (typeof value === 'function') {
      var n = value.name ? ': ' + value.name : '';
      base = (isRegExp(value)) ? ' ' + value : ' [Function' + n + ']';
    } else {
      base = '';
    }

    // Make dates with properties first say the date
    if (isDate(value)) {
      base = ' ' + value.toUTCString();
    }

    if (keys.length === 0) {
      return braces[0] + base + braces[1];
    }

    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return stylize('' + value, 'regexp');
      } else {
        return stylize('[Object]', 'special');
      }
    }

    seen.push(value);

    var output = keys.map(function(key) {
      var name, str;
      if (value.__lookupGetter__) {
        if (value.__lookupGetter__(key)) {
          if (value.__lookupSetter__(key)) {
            str = stylize('[Getter/Setter]', 'special');
          } else {
            str = stylize('[Getter]', 'special');
          }
        } else {
          if (value.__lookupSetter__(key)) {
            str = stylize('[Setter]', 'special');
          }
        }
      }
      if (visible_keys.indexOf(key) < 0) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (seen.indexOf(value[key]) < 0) {
          if (recurseTimes === null) {
            str = format(value[key]);
          } else {
            str = format(value[key], recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (isArray(value)) {
              str = str.split('\n').map(function(line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function(line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = stylize('[Circular]', 'special');
        }
      }
      if (typeof name === 'undefined') {
        if (type === 'Array' && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'")
                     .replace(/\\"/g, '"')
                     .replace(/(^"|"$)/g, "'");
          name = stylize(name, 'string');
        }
      }

      return name + ': ' + str;
    });

    seen.pop();

    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
      numLinesEst++;
      if (cur.indexOf('\n') >= 0) numLinesEst++;
      return prev + cur.length + 1;
    }, 0);

    if (length > 50) {
      output = braces[0] +
               (base === '' ? '' : base + '\n ') +
               ' ' +
               output.join(',\n  ') +
               ' ' +
               braces[1];

    } else {
      output = braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }

    return output;
  }
  return format(obj, (typeof depth === 'undefined' ? 2 : depth));
};


function isArray(ar) {
  return Array.isArray(ar) ||
         (typeof ar === 'object' && Object.prototype.toString.call(ar) === '[object Array]');
}


function isRegExp(re) {
  typeof re === 'object' && Object.prototype.toString.call(re) === '[object RegExp]';
}


function isDate(d) {
  return typeof d === 'object' && Object.prototype.toString.call(d) === '[object Date]';
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}

exports.log = function (msg) {};

exports.pump = null;

var Object_keys = Object.keys || function (obj) {
    var res = [];
    for (var key in obj) res.push(key);
    return res;
};

var Object_getOwnPropertyNames = Object.getOwnPropertyNames || function (obj) {
    var res = [];
    for (var key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) res.push(key);
    }
    return res;
};

var Object_create = Object.create || function (prototype, properties) {
    // from es5-shim
    var object;
    if (prototype === null) {
        object = { '__proto__' : null };
    }
    else {
        if (typeof prototype !== 'object') {
            throw new TypeError(
                'typeof prototype[' + (typeof prototype) + '] != \'object\''
            );
        }
        var Type = function () {};
        Type.prototype = prototype;
        object = new Type();
        object.__proto__ = prototype;
    }
    if (typeof properties !== 'undefined' && Object.defineProperties) {
        Object.defineProperties(object, properties);
    }
    return object;
};

exports.inherits = function(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object_create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (typeof f !== 'string') {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(exports.inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j': return JSON.stringify(args[i++]);
      default:
        return x;
    }
  });
  for(var x = args[i]; i < len; x = args[++i]){
    if (x === null || typeof x !== 'object') {
      str += ' ' + x;
    } else {
      str += ' ' + exports.inspect(x);
    }
  }
  return str;
};

},{"events":62}],69:[function(require,module,exports){
exports.readIEEE754 = function(buffer, offset, isBE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isBE ? 0 : (nBytes - 1),
      d = isBE ? 1 : -1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.writeIEEE754 = function(buffer, value, offset, isBE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isBE ? (nBytes - 1) : 0,
      d = isBE ? -1 : 1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],70:[function(require,module,exports){
var assert = require('assert');
exports.Buffer = Buffer;
exports.SlowBuffer = Buffer;
Buffer.poolSize = 8192;
exports.INSPECT_MAX_BYTES = 50;

function Buffer(subject, encoding, offset) {
  if (!(this instanceof Buffer)) {
    return new Buffer(subject, encoding, offset);
  }
  this.parent = this;
  this.offset = 0;

  var type;

  // Are we slicing?
  if (typeof offset === 'number') {
    this.length = coerce(encoding);
    this.offset = offset;
  } else {
    // Find the length
    switch (type = typeof subject) {
      case 'number':
        this.length = coerce(subject);
        break;

      case 'string':
        this.length = Buffer.byteLength(subject, encoding);
        break;

      case 'object': // Assume object is an array
        this.length = coerce(subject.length);
        break;

      default:
        throw new Error('First argument needs to be a number, ' +
                        'array or string.');
    }

    // Treat array-ish objects as a byte array.
    if (isArrayIsh(subject)) {
      for (var i = 0; i < this.length; i++) {
        if (subject instanceof Buffer) {
          this[i] = subject.readUInt8(i);
        }
        else {
          this[i] = subject[i];
        }
      }
    } else if (type == 'string') {
      // We are a string
      this.length = this.write(subject, 0, encoding);
    } else if (type === 'number') {
      for (var i = 0; i < this.length; i++) {
        this[i] = 0;
      }
    }
  }
}

Buffer.prototype.get = function get(i) {
  if (i < 0 || i >= this.length) throw new Error('oob');
  return this[i];
};

Buffer.prototype.set = function set(i, v) {
  if (i < 0 || i >= this.length) throw new Error('oob');
  return this[i] = v;
};

Buffer.byteLength = function (str, encoding) {
  switch (encoding || "utf8") {
    case 'hex':
      return str.length / 2;

    case 'utf8':
    case 'utf-8':
      return utf8ToBytes(str).length;

    case 'ascii':
    case 'binary':
      return str.length;

    case 'base64':
      return base64ToBytes(str).length;

    default:
      throw new Error('Unknown encoding');
  }
};

Buffer.prototype.utf8Write = function (string, offset, length) {
  var bytes, pos;
  return Buffer._charsWritten =  blitBuffer(utf8ToBytes(string), this, offset, length);
};

Buffer.prototype.asciiWrite = function (string, offset, length) {
  var bytes, pos;
  return Buffer._charsWritten =  blitBuffer(asciiToBytes(string), this, offset, length);
};

Buffer.prototype.binaryWrite = Buffer.prototype.asciiWrite;

Buffer.prototype.base64Write = function (string, offset, length) {
  var bytes, pos;
  return Buffer._charsWritten = blitBuffer(base64ToBytes(string), this, offset, length);
};

Buffer.prototype.base64Slice = function (start, end) {
  var bytes = Array.prototype.slice.apply(this, arguments)
  return require("base64-js").fromByteArray(bytes);
};

Buffer.prototype.utf8Slice = function () {
  var bytes = Array.prototype.slice.apply(this, arguments);
  var res = "";
  var tmp = "";
  var i = 0;
  while (i < bytes.length) {
    if (bytes[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(bytes[i]);
      tmp = "";
    } else
      tmp += "%" + bytes[i].toString(16);

    i++;
  }

  return res + decodeUtf8Char(tmp);
}

Buffer.prototype.asciiSlice = function () {
  var bytes = Array.prototype.slice.apply(this, arguments);
  var ret = "";
  for (var i = 0; i < bytes.length; i++)
    ret += String.fromCharCode(bytes[i]);
  return ret;
}

Buffer.prototype.binarySlice = Buffer.prototype.asciiSlice;

Buffer.prototype.inspect = function() {
  var out = [],
      len = this.length;
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i]);
    if (i == exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...';
      break;
    }
  }
  return '<Buffer ' + out.join(' ') + '>';
};


Buffer.prototype.hexSlice = function(start, end) {
  var len = this.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; i++) {
    out += toHex(this[i]);
  }
  return out;
};


Buffer.prototype.toString = function(encoding, start, end) {
  encoding = String(encoding || 'utf8').toLowerCase();
  start = +start || 0;
  if (typeof end == 'undefined') end = this.length;

  // Fastpath empty strings
  if (+end == start) {
    return '';
  }

  switch (encoding) {
    case 'hex':
      return this.hexSlice(start, end);

    case 'utf8':
    case 'utf-8':
      return this.utf8Slice(start, end);

    case 'ascii':
      return this.asciiSlice(start, end);

    case 'binary':
      return this.binarySlice(start, end);

    case 'base64':
      return this.base64Slice(start, end);

    case 'ucs2':
    case 'ucs-2':
      return this.ucs2Slice(start, end);

    default:
      throw new Error('Unknown encoding');
  }
};


Buffer.prototype.hexWrite = function(string, offset, length) {
  offset = +offset || 0;
  var remaining = this.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = +length;
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2) {
    throw new Error('Invalid hex string');
  }
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(byte)) throw new Error('Invalid hex string');
    this[offset + i] = byte;
  }
  Buffer._charsWritten = i * 2;
  return i;
};


Buffer.prototype.write = function(string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length;
      length = undefined;
    }
  } else {  // legacy
    var swap = encoding;
    encoding = offset;
    offset = length;
    length = swap;
  }

  offset = +offset || 0;
  var remaining = this.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = +length;
    if (length > remaining) {
      length = remaining;
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase();

  switch (encoding) {
    case 'hex':
      return this.hexWrite(string, offset, length);

    case 'utf8':
    case 'utf-8':
      return this.utf8Write(string, offset, length);

    case 'ascii':
      return this.asciiWrite(string, offset, length);

    case 'binary':
      return this.binaryWrite(string, offset, length);

    case 'base64':
      return this.base64Write(string, offset, length);

    case 'ucs2':
    case 'ucs-2':
      return this.ucs2Write(string, offset, length);

    default:
      throw new Error('Unknown encoding');
  }
};


// slice(start, end)
Buffer.prototype.slice = function(start, end) {
  if (end === undefined) end = this.length;

  if (end > this.length) {
    throw new Error('oob');
  }
  if (start > end) {
    throw new Error('oob');
  }

  return new Buffer(this, end - start, +start);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function(target, target_start, start, end) {
  var source = this;
  start || (start = 0);
  if (end === undefined || isNaN(end)) {
    end = this.length;
  }
  target_start || (target_start = 0);

  if (end < start) throw new Error('sourceEnd < sourceStart');

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length == 0 || source.length == 0) return 0;

  if (target_start < 0 || target_start >= target.length) {
    throw new Error('targetStart out of bounds');
  }

  if (start < 0 || start >= source.length) {
    throw new Error('sourceStart out of bounds');
  }

  if (end < 0 || end > source.length) {
    throw new Error('sourceEnd out of bounds');
  }

  // Are we oob?
  if (end > this.length) {
    end = this.length;
  }

  if (target.length - target_start < end - start) {
    end = target.length - target_start + start;
  }

  var temp = [];
  for (var i=start; i<end; i++) {
    assert.ok(typeof this[i] !== 'undefined', "copying undefined buffer bytes!");
    temp.push(this[i]);
  }

  for (var i=target_start; i<target_start+temp.length; i++) {
    target[i] = temp[i-target_start];
  }
};

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill(value, start, end) {
  value || (value = 0);
  start || (start = 0);
  end || (end = this.length);

  if (typeof value === 'string') {
    value = value.charCodeAt(0);
  }
  if (!(typeof value === 'number') || isNaN(value)) {
    throw new Error('value is not a number');
  }

  if (end < start) throw new Error('end < start');

  // Fill 0 bytes; we're done
  if (end === start) return 0;
  if (this.length == 0) return 0;

  if (start < 0 || start >= this.length) {
    throw new Error('start out of bounds');
  }

  if (end < 0 || end > this.length) {
    throw new Error('end out of bounds');
  }

  for (var i = start; i < end; i++) {
    this[i] = value;
  }
}

// Static methods
Buffer.isBuffer = function isBuffer(b) {
  return b instanceof Buffer || b instanceof Buffer;
};

Buffer.concat = function (list, totalLength) {
  if (!isArray(list)) {
    throw new Error("Usage: Buffer.concat(list, [totalLength])\n \
      list should be an Array.");
  }

  if (list.length === 0) {
    return new Buffer(0);
  } else if (list.length === 1) {
    return list[0];
  }

  if (typeof totalLength !== 'number') {
    totalLength = 0;
    for (var i = 0; i < list.length; i++) {
      var buf = list[i];
      totalLength += buf.length;
    }
  }

  var buffer = new Buffer(totalLength);
  var pos = 0;
  for (var i = 0; i < list.length; i++) {
    var buf = list[i];
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

// helpers

function coerce(length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length);
  return length < 0 ? 0 : length;
}

function isArray(subject) {
  return (Array.isArray ||
    function(subject){
      return {}.toString.apply(subject) == '[object Array]'
    })
    (subject)
}

function isArrayIsh(subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
         subject && typeof subject === 'object' &&
         typeof subject.length === 'number';
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; i++)
    if (str.charCodeAt(i) <= 0x7F)
      byteArray.push(str.charCodeAt(i));
    else {
      var h = encodeURIComponent(str.charAt(i)).substr(1).split('%');
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16));
    }

  return byteArray;
}

function asciiToBytes(str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++ )
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push( str.charCodeAt(i) & 0xFF );

  return byteArray;
}

function base64ToBytes(str) {
  return require("base64-js").toByteArray(str);
}

function blitBuffer(src, dst, offset, length) {
  var pos, i = 0;
  while (i < length) {
    if ((i+offset >= dst.length) || (i >= src.length))
      break;

    dst[i + offset] = src[i];
    i++;
  }
  return i;
}

function decodeUtf8Char(str) {
  try {
    return decodeURIComponent(str);
  } catch (err) {
    return String.fromCharCode(0xFFFD); // UTF 8 invalid char
  }
}

// read/write bit-twiddling

Buffer.prototype.readUInt8 = function(offset, noAssert) {
  var buffer = this;

  if (!noAssert) {
    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (offset >= buffer.length) return;

  return buffer[offset];
};

function readUInt16(buffer, offset, isBigEndian, noAssert) {
  var val = 0;


  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (offset >= buffer.length) return 0;

  if (isBigEndian) {
    val = buffer[offset] << 8;
    if (offset + 1 < buffer.length) {
      val |= buffer[offset + 1];
    }
  } else {
    val = buffer[offset];
    if (offset + 1 < buffer.length) {
      val |= buffer[offset + 1] << 8;
    }
  }

  return val;
}

Buffer.prototype.readUInt16LE = function(offset, noAssert) {
  return readUInt16(this, offset, false, noAssert);
};

Buffer.prototype.readUInt16BE = function(offset, noAssert) {
  return readUInt16(this, offset, true, noAssert);
};

function readUInt32(buffer, offset, isBigEndian, noAssert) {
  var val = 0;

  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (offset >= buffer.length) return 0;

  if (isBigEndian) {
    if (offset + 1 < buffer.length)
      val = buffer[offset + 1] << 16;
    if (offset + 2 < buffer.length)
      val |= buffer[offset + 2] << 8;
    if (offset + 3 < buffer.length)
      val |= buffer[offset + 3];
    val = val + (buffer[offset] << 24 >>> 0);
  } else {
    if (offset + 2 < buffer.length)
      val = buffer[offset + 2] << 16;
    if (offset + 1 < buffer.length)
      val |= buffer[offset + 1] << 8;
    val |= buffer[offset];
    if (offset + 3 < buffer.length)
      val = val + (buffer[offset + 3] << 24 >>> 0);
  }

  return val;
}

Buffer.prototype.readUInt32LE = function(offset, noAssert) {
  return readUInt32(this, offset, false, noAssert);
};

Buffer.prototype.readUInt32BE = function(offset, noAssert) {
  return readUInt32(this, offset, true, noAssert);
};


/*
 * Signed integer types, yay team! A reminder on how two's complement actually
 * works. The first bit is the signed bit, i.e. tells us whether or not the
 * number should be positive or negative. If the two's complement value is
 * positive, then we're done, as it's equivalent to the unsigned representation.
 *
 * Now if the number is positive, you're pretty much done, you can just leverage
 * the unsigned translations and return those. Unfortunately, negative numbers
 * aren't quite that straightforward.
 *
 * At first glance, one might be inclined to use the traditional formula to
 * translate binary numbers between the positive and negative values in two's
 * complement. (Though it doesn't quite work for the most negative value)
 * Mainly:
 *  - invert all the bits
 *  - add one to the result
 *
 * Of course, this doesn't quite work in Javascript. Take for example the value
 * of -128. This could be represented in 16 bits (big-endian) as 0xff80. But of
 * course, Javascript will do the following:
 *
 * > ~0xff80
 * -65409
 *
 * Whoh there, Javascript, that's not quite right. But wait, according to
 * Javascript that's perfectly correct. When Javascript ends up seeing the
 * constant 0xff80, it has no notion that it is actually a signed number. It
 * assumes that we've input the unsigned value 0xff80. Thus, when it does the
 * binary negation, it casts it into a signed value, (positive 0xff80). Then
 * when you perform binary negation on that, it turns it into a negative number.
 *
 * Instead, we're going to have to use the following general formula, that works
 * in a rather Javascript friendly way. I'm glad we don't support this kind of
 * weird numbering scheme in the kernel.
 *
 * (BIT-MAX - (unsigned)val + 1) * -1
 *
 * The astute observer, may think that this doesn't make sense for 8-bit numbers
 * (really it isn't necessary for them). However, when you get 16-bit numbers,
 * you do. Let's go back to our prior example and see how this will look:
 *
 * (0xffff - 0xff80 + 1) * -1
 * (0x007f + 1) * -1
 * (0x0080) * -1
 */
Buffer.prototype.readInt8 = function(offset, noAssert) {
  var buffer = this;
  var neg;

  if (!noAssert) {
    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (offset >= buffer.length) return;

  neg = buffer[offset] & 0x80;
  if (!neg) {
    return (buffer[offset]);
  }

  return ((0xff - buffer[offset] + 1) * -1);
};

function readInt16(buffer, offset, isBigEndian, noAssert) {
  var neg, val;

  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'Trying to read beyond buffer length');
  }

  val = readUInt16(buffer, offset, isBigEndian, noAssert);
  neg = val & 0x8000;
  if (!neg) {
    return val;
  }

  return (0xffff - val + 1) * -1;
}

Buffer.prototype.readInt16LE = function(offset, noAssert) {
  return readInt16(this, offset, false, noAssert);
};

Buffer.prototype.readInt16BE = function(offset, noAssert) {
  return readInt16(this, offset, true, noAssert);
};

function readInt32(buffer, offset, isBigEndian, noAssert) {
  var neg, val;

  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to read beyond buffer length');
  }

  val = readUInt32(buffer, offset, isBigEndian, noAssert);
  neg = val & 0x80000000;
  if (!neg) {
    return (val);
  }

  return (0xffffffff - val + 1) * -1;
}

Buffer.prototype.readInt32LE = function(offset, noAssert) {
  return readInt32(this, offset, false, noAssert);
};

Buffer.prototype.readInt32BE = function(offset, noAssert) {
  return readInt32(this, offset, true, noAssert);
};

function readFloat(buffer, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset + 3 < buffer.length,
        'Trying to read beyond buffer length');
  }

  return require('./buffer_ieee754').readIEEE754(buffer, offset, isBigEndian,
      23, 4);
}

Buffer.prototype.readFloatLE = function(offset, noAssert) {
  return readFloat(this, offset, false, noAssert);
};

Buffer.prototype.readFloatBE = function(offset, noAssert) {
  return readFloat(this, offset, true, noAssert);
};

function readDouble(buffer, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset + 7 < buffer.length,
        'Trying to read beyond buffer length');
  }

  return require('./buffer_ieee754').readIEEE754(buffer, offset, isBigEndian,
      52, 8);
}

Buffer.prototype.readDoubleLE = function(offset, noAssert) {
  return readDouble(this, offset, false, noAssert);
};

Buffer.prototype.readDoubleBE = function(offset, noAssert) {
  return readDouble(this, offset, true, noAssert);
};


/*
 * We have to make sure that the value is a valid integer. This means that it is
 * non-negative. It has no fractional component and that it does not exceed the
 * maximum allowed value.
 *
 *      value           The number to check for validity
 *
 *      max             The maximum value
 */
function verifuint(value, max) {
  assert.ok(typeof (value) == 'number',
      'cannot write a non-number as a number');

  assert.ok(value >= 0,
      'specified a negative value for writing an unsigned value');

  assert.ok(value <= max, 'value is larger than maximum value for type');

  assert.ok(Math.floor(value) === value, 'value has a fractional component');
}

Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {
  var buffer = this;

  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'trying to write beyond buffer length');

    verifuint(value, 0xff);
  }

  if (offset < buffer.length) {
    buffer[offset] = value;
  }
};

function writeUInt16(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'trying to write beyond buffer length');

    verifuint(value, 0xffff);
  }

  for (var i = 0; i < Math.min(buffer.length - offset, 2); i++) {
    buffer[offset + i] =
        (value & (0xff << (8 * (isBigEndian ? 1 - i : i)))) >>>
            (isBigEndian ? 1 - i : i) * 8;
  }

}

Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
  writeUInt16(this, value, offset, false, noAssert);
};

Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
  writeUInt16(this, value, offset, true, noAssert);
};

function writeUInt32(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'trying to write beyond buffer length');

    verifuint(value, 0xffffffff);
  }

  for (var i = 0; i < Math.min(buffer.length - offset, 4); i++) {
    buffer[offset + i] =
        (value >>> (isBigEndian ? 3 - i : i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
  writeUInt32(this, value, offset, false, noAssert);
};

Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
  writeUInt32(this, value, offset, true, noAssert);
};


/*
 * We now move onto our friends in the signed number category. Unlike unsigned
 * numbers, we're going to have to worry a bit more about how we put values into
 * arrays. Since we are only worrying about signed 32-bit values, we're in
 * slightly better shape. Unfortunately, we really can't do our favorite binary
 * & in this system. It really seems to do the wrong thing. For example:
 *
 * > -32 & 0xff
 * 224
 *
 * What's happening above is really: 0xe0 & 0xff = 0xe0. However, the results of
 * this aren't treated as a signed number. Ultimately a bad thing.
 *
 * What we're going to want to do is basically create the unsigned equivalent of
 * our representation and pass that off to the wuint* functions. To do that
 * we're going to do the following:
 *
 *  - if the value is positive
 *      we can pass it directly off to the equivalent wuint
 *  - if the value is negative
 *      we do the following computation:
 *         mb + val + 1, where
 *         mb   is the maximum unsigned value in that byte size
 *         val  is the Javascript negative integer
 *
 *
 * As a concrete value, take -128. In signed 16 bits this would be 0xff80. If
 * you do out the computations:
 *
 * 0xffff - 128 + 1
 * 0xffff - 127
 * 0xff80
 *
 * You can then encode this value as the signed version. This is really rather
 * hacky, but it should work and get the job done which is our goal here.
 */

/*
 * A series of checks to make sure we actually have a signed 32-bit number
 */
function verifsint(value, max, min) {
  assert.ok(typeof (value) == 'number',
      'cannot write a non-number as a number');

  assert.ok(value <= max, 'value larger than maximum allowed value');

  assert.ok(value >= min, 'value smaller than minimum allowed value');

  assert.ok(Math.floor(value) === value, 'value has a fractional component');
}

function verifIEEE754(value, max, min) {
  assert.ok(typeof (value) == 'number',
      'cannot write a non-number as a number');

  assert.ok(value <= max, 'value larger than maximum allowed value');

  assert.ok(value >= min, 'value smaller than minimum allowed value');
}

Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
  var buffer = this;

  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'Trying to write beyond buffer length');

    verifsint(value, 0x7f, -0x80);
  }

  if (value >= 0) {
    buffer.writeUInt8(value, offset, noAssert);
  } else {
    buffer.writeUInt8(0xff + value + 1, offset, noAssert);
  }
};

function writeInt16(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'Trying to write beyond buffer length');

    verifsint(value, 0x7fff, -0x8000);
  }

  if (value >= 0) {
    writeUInt16(buffer, value, offset, isBigEndian, noAssert);
  } else {
    writeUInt16(buffer, 0xffff + value + 1, offset, isBigEndian, noAssert);
  }
}

Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
  writeInt16(this, value, offset, false, noAssert);
};

Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
  writeInt16(this, value, offset, true, noAssert);
};

function writeInt32(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to write beyond buffer length');

    verifsint(value, 0x7fffffff, -0x80000000);
  }

  if (value >= 0) {
    writeUInt32(buffer, value, offset, isBigEndian, noAssert);
  } else {
    writeUInt32(buffer, 0xffffffff + value + 1, offset, isBigEndian, noAssert);
  }
}

Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
  writeInt32(this, value, offset, false, noAssert);
};

Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
  writeInt32(this, value, offset, true, noAssert);
};

function writeFloat(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to write beyond buffer length');

    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  require('./buffer_ieee754').writeIEEE754(buffer, value, offset, isBigEndian,
      23, 4);
}

Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {
  writeFloat(this, value, offset, false, noAssert);
};

Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {
  writeFloat(this, value, offset, true, noAssert);
};

function writeDouble(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 7 < buffer.length,
        'Trying to write beyond buffer length');

    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  require('./buffer_ieee754').writeIEEE754(buffer, value, offset, isBigEndian,
      52, 8);
}

Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
  writeDouble(this, value, offset, false, noAssert);
};

Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
  writeDouble(this, value, offset, true, noAssert);
};

},{"./buffer_ieee754":69,"assert":61,"base64-js":71}],71:[function(require,module,exports){
(function (exports) {
	'use strict';

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	function b64ToByteArray(b64) {
		var i, j, l, tmp, placeHolders, arr;
	
		if (b64.length % 4 > 0) {
			throw 'Invalid string. Length must be a multiple of 4';
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		placeHolders = b64.indexOf('=');
		placeHolders = placeHolders > 0 ? b64.length - placeHolders : 0;

		// base64 is 4/3 + up to two characters of the original data
		arr = [];//new Uint8Array(b64.length * 3 / 4 - placeHolders);

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length;

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (lookup.indexOf(b64[i]) << 18) | (lookup.indexOf(b64[i + 1]) << 12) | (lookup.indexOf(b64[i + 2]) << 6) | lookup.indexOf(b64[i + 3]);
			arr.push((tmp & 0xFF0000) >> 16);
			arr.push((tmp & 0xFF00) >> 8);
			arr.push(tmp & 0xFF);
		}

		if (placeHolders === 2) {
			tmp = (lookup.indexOf(b64[i]) << 2) | (lookup.indexOf(b64[i + 1]) >> 4);
			arr.push(tmp & 0xFF);
		} else if (placeHolders === 1) {
			tmp = (lookup.indexOf(b64[i]) << 10) | (lookup.indexOf(b64[i + 1]) << 4) | (lookup.indexOf(b64[i + 2]) >> 2);
			arr.push((tmp >> 8) & 0xFF);
			arr.push(tmp & 0xFF);
		}

		return arr;
	}

	function uint8ToBase64(uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length;

		function tripletToBase64 (num) {
			return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
		};

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
			output += tripletToBase64(temp);
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1];
				output += lookup[temp >> 2];
				output += lookup[(temp << 4) & 0x3F];
				output += '==';
				break;
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
				output += lookup[temp >> 10];
				output += lookup[(temp >> 4) & 0x3F];
				output += lookup[(temp << 2) & 0x3F];
				output += '=';
				break;
		}

		return output;
	}

	module.exports.toByteArray = b64ToByteArray;
	module.exports.fromByteArray = uint8ToBase64;
}());

},{}],72:[function(require,module,exports){
var Buffer = require('buffer').Buffer
var sha = require('./sha')
var sha256 = require('./sha256')
var rng = require('./rng')
var md5 = require('./md5')

var algorithms = {
  sha1: {
    hex: sha.hex_sha1,
    base64: sha.b64_sha1,
    binary: sha.str_sha1
  },
  sha256: {
    hex: sha256.hex_sha256,
    base64: sha256.b64_sha256,
    binary: sha256.str_sha256
  },
  md5: {
    hex: md5.hex_md5,
    base64: md5.b64_md5,
    binary: md5.bin_md5
  }
}

var algorithmsHmac = {
  sha1: {
    hex: sha.hex_hmac_sha1,
    base64: sha.b64_hmac_sha1,
    binary: sha.str_hmac_sha1
  },
  sha256: {
    hex: sha256.hex_hmac_sha256,
    base64: sha256.b64_hmac_sha256,
    binary: sha256.str_hmac_sha256
  },
  md5: {
    hex: md5.hex_hmac_md5,
    base64: md5.b64_hmac_md5,
    binary: md5.bin_hmac_md5
  }
}


function error () {
  var m = [].slice.call(arguments).join(' ')
  throw new Error([
    m,
    'we accept pull requests',
    'http://github.com/dominictarr/crypto-browserify'
    ].join('\n'))
}

exports.createHash = function (alg) {
  alg = alg || 'sha1'
  if(!algorithms[alg])
    error('algorithm:', alg, 'is not yet supported')
  var s = ''
  var _alg = algorithms[alg]
  return {
    update: function (data) {
      s += data
      return this
    },
    digest: function (enc) {
      enc = enc || 'binary'
      var fn
      if(!(fn = _alg[enc]))
        error('encoding:', enc , 'is not yet supported for algorithm', alg)
      var r = fn(s)
      s = null //not meant to use the hash after you've called digest.
      return r
    }
  }
}

exports.createHmac = function (alg, key) {
  if (!algorithmsHmac[alg])
    error('algorithm:', alg, 'is not yet supported')
  if (typeof key != 'string')
    key = key.toString('binary')
  var s = ''
  var _alg = algorithmsHmac[alg]
  return {
    update: function (data) {
      s += data
      return this
    },
    digest: function (enc) {
      enc = enc || 'binary'
      var fn
      if (!(fn = _alg[enc]))
        error('encoding:', enc, 'is not yet support for algorithm', alg)
      var r = fn(key, s)
      s = null
      return r
    }
  }
}

exports.randomBytes = function(size, callback) {
  if (callback && callback.call) {
    try {
      callback.call(this, undefined, new Buffer(rng(size)));
    } catch (err) { callback(err); }
  } else {
    return new Buffer(rng(size));
  }
}

function each(a, f) {
  for(var i in a)
    f(a[i], i)
}

// the least I can do is make error messages for the rest of the node.js/crypto api.
each(['createCredentials'
, 'createCipher'
, 'createCipheriv'
, 'createDecipher'
, 'createDecipheriv'
, 'createSign'
, 'createVerify'
, 'createDiffieHellman'
, 'pbkdf2'], function (name) {
  exports[name] = function () {
    error('sorry,', name, 'is not implemented yet')
  }
})

},{"./md5":73,"./rng":74,"./sha":75,"./sha256":76,"buffer":70}],73:[function(require,module,exports){
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;   /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = "="; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;   /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
  return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}

exports.hex_md5 = hex_md5;
exports.b64_md5 = b64_md5;
exports.bin_md5 = str_md5;
exports.hex_hmac_md5 = hex_hmac_md5;
exports.b64_hmac_md5 = b64_hmac_md5;
exports.bin_hmac_md5 = str_hmac_md5;

},{}],74:[function(require,module,exports){
// Original code adapted from Robert Kieffer.
// details at https://github.com/broofa/node-uuid
(function() {
  var _global = this;

  var mathRNG, whatwgRNG;

  // NOTE: Math.random() does not guarantee "cryptographic quality"
  mathRNG = function(size) {
    var bytes = new Array(size);
    var r;

    for (var i = 0, r; i < size; i++) {
      if ((i & 0x03) == 0) r = Math.random() * 0x100000000;
      bytes[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return bytes;
  }

  if (_global.crypto && crypto.getRandomValues) {
    var _rnds = new Uint32Array(4);
    whatwgRNG = function(size) {
      var bytes = new Array(size);
      crypto.getRandomValues(_rnds);

      for (var c = 0 ; c < size; c++) {
        bytes[c] = _rnds[c >> 2] >>> ((c & 0x03) * 8) & 0xff;
      }
      return bytes;
    }
  }

  module.exports = whatwgRNG || mathRNG;

}())

},{}],75:[function(require,module,exports){
/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

exports.hex_sha1 = hex_sha1;
exports.b64_sha1 = b64_sha1;
exports.str_sha1 = str_sha1;
exports.hex_hmac_sha1 = hex_hmac_sha1;
exports.b64_hmac_sha1 = b64_hmac_sha1;
exports.str_hmac_sha1 = str_hmac_sha1;

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;   /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = "="; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;   /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_sha1(s){return binb2hex(core_sha1(str2binb(s),s.length * chrsz));}
function b64_sha1(s){return binb2b64(core_sha1(str2binb(s),s.length * chrsz));}
function str_sha1(s){return binb2str(core_sha1(str2binb(s),s.length * chrsz));}
function hex_hmac_sha1(key, data){ return binb2hex(core_hmac_sha1(key, data));}
function b64_hmac_sha1(key, data){ return binb2b64(core_hmac_sha1(key, data));}
function str_hmac_sha1(key, data){ return binb2str(core_hmac_sha1(key, data));}

/*
 * Perform a simple self-test to see if the VM is working
 */
function sha1_vm_test()
{
  return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}

/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
function core_sha1(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << (24 - len % 32);
  x[((len + 64 >> 9) << 4) + 15] = len;

  var w = Array(80);
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;
  var e = -1009589776;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    var olde = e;

    for(var j = 0; j < 80; j++)
    {
      if(j < 16) w[j] = x[i + j];
      else w[j] = rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
      var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
                       safe_add(safe_add(e, w[j]), sha1_kt(j)));
      e = d;
      d = c;
      c = rol(b, 30);
      b = a;
      a = t;
    }

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
    e = safe_add(e, olde);
  }
  return Array(a, b, c, d, e);

}

/*
 * Perform the appropriate triplet combination function for the current
 * iteration
 */
function sha1_ft(t, b, c, d)
{
  if(t < 20) return (b & c) | ((~b) & d);
  if(t < 40) return b ^ c ^ d;
  if(t < 60) return (b & c) | (b & d) | (c & d);
  return b ^ c ^ d;
}

/*
 * Determine the appropriate additive constant for the current iteration
 */
function sha1_kt(t)
{
  return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
         (t < 60) ? -1894007588 : -899497514;
}

/*
 * Calculate the HMAC-SHA1 of a key and some data
 */
function core_hmac_sha1(key, data)
{
  var bkey = str2binb(key);
  if(bkey.length > 16) bkey = core_sha1(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
  return core_sha1(opad.concat(hash), 512 + 160);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert an 8-bit or 16-bit string to an array of big-endian words
 * In 8-bit function, characters >255 have their hi-byte silently ignored.
 */
function str2binb(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (32 - chrsz - i%32);
  return bin;
}

/*
 * Convert an array of big-endian words to a string
 */
function binb2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (32 - chrsz - i%32)) & mask);
  return str;
}

/*
 * Convert an array of big-endian words to a hex string.
 */
function binb2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of big-endian words to a base-64 string
 */
function binb2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * (3 -  i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * (3 - (i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * (3 - (i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}


},{}],76:[function(require,module,exports){

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

exports.hex_sha256 = hex_sha256;
exports.b64_sha256 = b64_sha256;
exports.str_sha256 = str_sha256;
exports.hex_hmac_sha256 = hex_hmac_sha256;
exports.b64_hmac_sha256 = b64_hmac_sha256;
exports.str_hmac_sha256 = str_hmac_sha256;

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;   /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = "="; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;   /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_sha256(s){return binb2hex(core_sha256(str2binb(s),s.length * chrsz));}
function b64_sha256(s){return binb2b64(core_sha256(str2binb(s),s.length * chrsz));}
function str_sha256(s){return binb2str(core_sha256(str2binb(s),s.length * chrsz));}
function hex_hmac_sha256(key, data){ return binb2hex(core_hmac_sha256(key, data));}
function b64_hmac_sha256(key, data){ return binb2b64(core_hmac_sha256(key, data));}
function str_hmac_sha256(key, data){ return binb2str(core_hmac_sha256(key, data));}

var safe_add = function(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
};

var S = function(X, n) {
  return (X >>> n) | (X << (32 - n));
};

var R = function(X, n) {
  return (X >>> n);
};

var Ch = function(x, y, z) {
  return ((x & y) ^ ((~x) & z));
};

var Maj = function(x, y, z) {
  return ((x & y) ^ (x & z) ^ (y & z));
};

var Sigma0256 = function(x) {
  return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
};

var Sigma1256 = function(x) {
  return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
};

var Gamma0256 = function(x) {
  return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
};

var Gamma1256 = function(x) {
  return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
};

var core_sha256 = function(m, l) {
  var K = new Array(0x428A2F98,0x71374491,0xB5C0FBCF,0xE9B5DBA5,0x3956C25B,0x59F111F1,0x923F82A4,0xAB1C5ED5,0xD807AA98,0x12835B01,0x243185BE,0x550C7DC3,0x72BE5D74,0x80DEB1FE,0x9BDC06A7,0xC19BF174,0xE49B69C1,0xEFBE4786,0xFC19DC6,0x240CA1CC,0x2DE92C6F,0x4A7484AA,0x5CB0A9DC,0x76F988DA,0x983E5152,0xA831C66D,0xB00327C8,0xBF597FC7,0xC6E00BF3,0xD5A79147,0x6CA6351,0x14292967,0x27B70A85,0x2E1B2138,0x4D2C6DFC,0x53380D13,0x650A7354,0x766A0ABB,0x81C2C92E,0x92722C85,0xA2BFE8A1,0xA81A664B,0xC24B8B70,0xC76C51A3,0xD192E819,0xD6990624,0xF40E3585,0x106AA070,0x19A4C116,0x1E376C08,0x2748774C,0x34B0BCB5,0x391C0CB3,0x4ED8AA4A,0x5B9CCA4F,0x682E6FF3,0x748F82EE,0x78A5636F,0x84C87814,0x8CC70208,0x90BEFFFA,0xA4506CEB,0xBEF9A3F7,0xC67178F2);
  var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
    var W = new Array(64);
    var a, b, c, d, e, f, g, h, i, j;
    var T1, T2;
  /* append padding */
  m[l >> 5] |= 0x80 << (24 - l % 32);
  m[((l + 64 >> 9) << 4) + 15] = l;
  for (var i = 0; i < m.length; i += 16) {
    a = HASH[0]; b = HASH[1]; c = HASH[2]; d = HASH[3]; e = HASH[4]; f = HASH[5]; g = HASH[6]; h = HASH[7];
    for (var j = 0; j < 64; j++) {
      if (j < 16) {
        W[j] = m[j + i];
      } else {
        W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
      }
      T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
      T2 = safe_add(Sigma0256(a), Maj(a, b, c));
      h = g; g = f; f = e; e = safe_add(d, T1); d = c; c = b; b = a; a = safe_add(T1, T2);
    }
    HASH[0] = safe_add(a, HASH[0]); HASH[1] = safe_add(b, HASH[1]); HASH[2] = safe_add(c, HASH[2]); HASH[3] = safe_add(d, HASH[3]);
    HASH[4] = safe_add(e, HASH[4]); HASH[5] = safe_add(f, HASH[5]); HASH[6] = safe_add(g, HASH[6]); HASH[7] = safe_add(h, HASH[7]);
  }
  return HASH;
};

var str2binb = function(str) {
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for (var i = 0; i < str.length * chrsz; i += chrsz) {
    bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
  }
  return bin;
};

/*
 * Convert an array of big-endian words to a string
 */
function binb2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for (var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i >> 5] >>> (32 - chrsz - i % 32)) & mask);
  return str;
}

var hex2binb = function(a) {
  var b = [], length = a.length, i, num;
  for (i = 0; i < length; i += 2) {
    num = parseInt(a.substr(i, 2), 16);
    if (!isNaN(num)) {
      b[i >> 3] |= num << (24 - (4 * (i % 8)));
    } else {
      return "INVALID HEX STRING";
    }
  }
  return b;
};

var binb2hex = function(binarray) {
  //var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase */
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i++) {
    str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) + hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
  }
  return str;
};

var binb2b64 = function(a) {
  var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" + "0123456789+/", str = "", length = a.length * 4, i, j, triplet;
  var b64pad = "=";
  for (i = 0; i < length; i += 3) {
    triplet = (((a[i >> 2] >> 8 * (3 - i % 4)) & 0xFF) << 16) | (((a[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) & 0xFF) << 8) | ((a[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4)) & 0xFF);
    for (j = 0; j < 4; j += 1) {
      if (i * 8 + j * 6 <= a.length * 32) {
        str += b.charAt((triplet >> 6 * (3 - j)) & 0x3F);
      } else {
        str += b64pad;
      }
    }
}
  return str;
};

var core_hmac_sha256 = function(key, data) {
  var bkey = str2binb(key);
  if (bkey.length > 16) {
    bkey = core_sha256(bkey, key.length * chrsz);
  }
  var ipad = Array(16), opad = Array(16);
  for (var i = 0; i < 16; i++) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }
  var hash = core_sha256(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
  return core_sha256(opad.concat(hash), 512 + 256);
};


},{}],77:[function(require,module,exports){
var http = module.exports;
var EventEmitter = require('events').EventEmitter;
var Request = require('./lib/request');

http.request = function (params, cb) {
    if (!params) params = {};
    if (!params.host) params.host = window.location.host.split(':')[0];
    if (!params.port) params.port = window.location.port;
    if (!params.scheme) params.scheme = window.location.protocol.split(':')[0];
    
    var req = new Request(new xhrHttp, params);
    if (cb) req.on('response', cb);
    return req;
};

http.get = function (params, cb) {
    params.method = 'GET';
    var req = http.request(params, cb);
    req.end();
    return req;
};

http.Agent = function () {};
http.Agent.defaultMaxSockets = 4;

var xhrHttp = (function () {
    if (typeof window === 'undefined') {
        throw new Error('no window object present');
    }
    else if (window.XMLHttpRequest) {
        return window.XMLHttpRequest;
    }
    else if (window.ActiveXObject) {
        var axs = [
            'Msxml2.XMLHTTP.6.0',
            'Msxml2.XMLHTTP.3.0',
            'Microsoft.XMLHTTP'
        ];
        for (var i = 0; i < axs.length; i++) {
            try {
                var ax = new(window.ActiveXObject)(axs[i]);
                return function () {
                    if (ax) {
                        var ax_ = ax;
                        ax = null;
                        return ax_;
                    }
                    else {
                        return new(window.ActiveXObject)(axs[i]);
                    }
                };
            }
            catch (e) {}
        }
        throw new Error('ajax not supported in this browser')
    }
    else {
        throw new Error('ajax not supported in this browser');
    }
})();

},{"./lib/request":78,"events":62}],78:[function(require,module,exports){
var Stream = require('stream');
var Response = require('./response');
var concatStream = require('concat-stream')
var Buffer = require('buffer')

var Request = module.exports = function (xhr, params) {
    var self = this;
    self.writable = true;
    self.xhr = xhr;
    self.body = concatStream()
    
    var uri = params.host
        + (params.port ? ':' + params.port : '')
        + (params.path || '/')
    ;
    
    xhr.open(
        params.method || 'GET',
        (params.scheme || 'http') + '://' + uri,
        true
    );
    
    if (params.headers) {
        var keys = objectKeys(params.headers);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!self.isSafeRequestHeader(key)) continue;
            var value = params.headers[key];
            if (isArray(value)) {
                for (var j = 0; j < value.length; j++) {
                    xhr.setRequestHeader(key, value[j]);
                }
            }
            else xhr.setRequestHeader(key, value)
        }
    }
    
    if (params.auth) {
        //basic auth
        this.setHeader('Authorization', 'Basic ' + new Buffer(params.auth).toString('base64'));
    }

    var res = new Response;
    res.on('close', function () {
        self.emit('close');
    });
    
    res.on('ready', function () {
        self.emit('response', res);
    });
    
    xhr.onreadystatechange = function () {
        res.handle(xhr);
    };
};

Request.prototype = new Stream;

Request.prototype.setHeader = function (key, value) {
    if (isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            this.xhr.setRequestHeader(key, value[i]);
        }
    }
    else {
        this.xhr.setRequestHeader(key, value);
    }
};

Request.prototype.write = function (s) {
    this.body.write(s);
};

Request.prototype.destroy = function (s) {
    this.xhr.abort();
    this.emit('close');
};

Request.prototype.end = function (s) {
    if (s !== undefined) this.body.write(s);
    this.body.end()
    this.xhr.send(this.body.getBody());
};

// Taken from http://dxr.mozilla.org/mozilla/mozilla-central/content/base/src/nsXMLHttpRequest.cpp.html
Request.unsafeHeaders = [
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "cookie",
    "cookie2",
    "content-transfer-encoding",
    "date",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "user-agent",
    "via"
];

Request.prototype.isSafeRequestHeader = function (headerName) {
    if (!headerName) return false;
    return indexOf(Request.unsafeHeaders, headerName.toLowerCase()) === -1;
};

var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

var indexOf = function (xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for (var i = 0; i < xs.length; i++) {
        if (xs[i] === x) return i;
    }
    return -1;
};

},{"./response":79,"buffer":70,"concat-stream":80,"stream":66}],79:[function(require,module,exports){
var Stream = require('stream');

var Response = module.exports = function (res) {
    this.offset = 0;
    this.readable = true;
};

Response.prototype = new Stream;

var capable = {
    streaming : true,
    status2 : true
};

function parseHeaders (res) {
    var lines = res.getAllResponseHeaders().split(/\r?\n/);
    var headers = {};
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line === '') continue;
        
        var m = line.match(/^([^:]+):\s*(.*)/);
        if (m) {
            var key = m[1].toLowerCase(), value = m[2];
            
            if (headers[key] !== undefined) {
            
                if (isArray(headers[key])) {
                    headers[key].push(value);
                }
                else {
                    headers[key] = [ headers[key], value ];
                }
            }
            else {
                headers[key] = value;
            }
        }
        else {
            headers[line] = true;
        }
    }
    return headers;
}

Response.prototype.getResponse = function (xhr) {
    var respType = String(xhr.responseType).toLowerCase();
    if (respType === 'blob') return xhr.responseBlob || xhr.response;
    if (respType === 'arraybuffer') return xhr.response;
    return xhr.responseText;
}

Response.prototype.getHeader = function (key) {
    return this.headers[key.toLowerCase()];
};

Response.prototype.handle = function (res) {
    if (res.readyState === 2 && capable.status2) {
        try {
            this.statusCode = res.status;
            this.headers = parseHeaders(res);
        }
        catch (err) {
            capable.status2 = false;
        }
        
        if (capable.status2) {
            this.emit('ready');
        }
    }
    else if (capable.streaming && res.readyState === 3) {
        try {
            if (!this.statusCode) {
                this.statusCode = res.status;
                this.headers = parseHeaders(res);
                this.emit('ready');
            }
        }
        catch (err) {}
        
        try {
            this._emitData(res);
        }
        catch (err) {
            capable.streaming = false;
        }
    }
    else if (res.readyState === 4) {
        if (!this.statusCode) {
            this.statusCode = res.status;
            this.emit('ready');
        }
        this._emitData(res);
        
        if (res.error) {
            this.emit('error', this.getResponse(res));
        }
        else this.emit('end');
        
        this.emit('close');
    }
};

Response.prototype._emitData = function (res) {
    var respBody = this.getResponse(res);
    if (respBody.toString().match(/ArrayBuffer/)) {
        this.emit('data', new Uint8Array(respBody, this.offset));
        this.offset = respBody.byteLength;
        return;
    }
    if (respBody.length > this.offset) {
        this.emit('data', respBody.slice(this.offset));
        this.offset = respBody.length;
    }
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

},{"stream":66}],80:[function(require,module,exports){
var Buffer=require("__browserify_Buffer").Buffer;var stream = require('stream')
var util = require('util')

function ConcatStream(cb) {
  stream.Stream.call(this)
  this.writable = true
  if (cb) this.cb = cb
  this.body = []
  if (this.cb) this.on('error', cb)
}

util.inherits(ConcatStream, stream.Stream)

ConcatStream.prototype.write = function(chunk) {
  this.body.push(chunk)
}

ConcatStream.prototype.arrayConcat = function(arrs) {
  if (arrs.length === 0) return []
  if (arrs.length === 1) return arrs[0]
  return arrs.reduce(function (a, b) { return a.concat(b) })
}

ConcatStream.prototype.isArray = function(arr) {
  var isArray = Array.isArray(arr)
  var isTypedArray = arr.toString().match(/Array/)
  return isArray || isTypedArray
}

ConcatStream.prototype.getBody = function () {
  if (this.body.length === 0) return
  if (typeof(this.body[0]) === "string") return this.body.join('')
  if (this.isArray(this.body[0])) return this.arrayConcat(this.body)
  if (typeof(Buffer) !== "undefined" && Buffer.isBuffer(this.body[0])) {
    return Buffer.concat(this.body)
  }
  return this.body
}

ConcatStream.prototype.end = function() {
  if (this.cb) this.cb(false, this.getBody())
}

module.exports = function(cb) {
  return new ConcatStream(cb)
}

module.exports.ConcatStream = ConcatStream

},{"__browserify_Buffer":81,"stream":66,"util":68}],81:[function(require,module,exports){
require=(function(e,t,n,r){function i(r){if(!n[r]){if(!t[r]){if(e)return e(r);throw new Error("Cannot find module '"+r+"'")}var s=n[r]={exports:{}};t[r][0](function(e){var n=t[r][1][e];return i(n?n:e)},s,s.exports)}return n[r].exports}for(var s=0;s<r.length;s++)i(r[s]);return i})(typeof require!=="undefined"&&require,{1:[function(require,module,exports){
// UTILITY
var util = require('util');
var Buffer = require("buffer").Buffer;
var pSlice = Array.prototype.slice;

function objectKeys(object) {
  if (Object.keys) return Object.keys(object);
  var result = [];
  for (var name in object) {
    if (Object.prototype.hasOwnProperty.call(object, name)) {
      result.push(name);
    }
  }
  return result;
}

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.message = options.message;
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
};
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (value === undefined) {
    return '' + value;
  }
  if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
    return value.toString();
  }
  if (typeof value === 'function' || value instanceof RegExp) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (typeof s == 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

assert.AssertionError.prototype.toString = function() {
  if (this.message) {
    return [this.name + ':', this.message].join(' ');
  } else {
    return [
      this.name + ':',
      truncate(JSON.stringify(this.actual, replacer), 128),
      this.operator,
      truncate(JSON.stringify(this.expected, replacer), 128)
    ].join(' ');
  }
};

// assert.AssertionError instanceof Error

assert.AssertionError.__proto__ = Error.prototype;

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!!!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (Buffer.isBuffer(actual) && Buffer.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (typeof actual != 'object' && typeof expected != 'object') {
    return actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b),
        key, i;
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (expected instanceof RegExp) {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail('Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail('Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

},{"util":2,"buffer":3}],2:[function(require,module,exports){
var events = require('events');

exports.isArray = isArray;
exports.isDate = function(obj){return Object.prototype.toString.call(obj) === '[object Date]'};
exports.isRegExp = function(obj){return Object.prototype.toString.call(obj) === '[object RegExp]'};


exports.print = function () {};
exports.puts = function () {};
exports.debug = function() {};

exports.inspect = function(obj, showHidden, depth, colors) {
  var seen = [];

  var stylize = function(str, styleType) {
    // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
    var styles =
        { 'bold' : [1, 22],
          'italic' : [3, 23],
          'underline' : [4, 24],
          'inverse' : [7, 27],
          'white' : [37, 39],
          'grey' : [90, 39],
          'black' : [30, 39],
          'blue' : [34, 39],
          'cyan' : [36, 39],
          'green' : [32, 39],
          'magenta' : [35, 39],
          'red' : [31, 39],
          'yellow' : [33, 39] };

    var style =
        { 'special': 'cyan',
          'number': 'blue',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'date': 'magenta',
          // "name": intentionally not styling
          'regexp': 'red' }[styleType];

    if (style) {
      return '\033[' + styles[style][0] + 'm' + str +
             '\033[' + styles[style][1] + 'm';
    } else {
      return str;
    }
  };
  if (! colors) {
    stylize = function(str, styleType) { return str; };
  }

  function format(value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (value && typeof value.inspect === 'function' &&
        // Filter out the util module, it's inspect function is special
        value !== exports &&
        // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
      return value.inspect(recurseTimes);
    }

    // Primitive types cannot have properties
    switch (typeof value) {
      case 'undefined':
        return stylize('undefined', 'undefined');

      case 'string':
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                                 .replace(/'/g, "\\'")
                                                 .replace(/\\"/g, '"') + '\'';
        return stylize(simple, 'string');

      case 'number':
        return stylize('' + value, 'number');

      case 'boolean':
        return stylize('' + value, 'boolean');
    }
    // For some reason typeof null is "object", so special case here.
    if (value === null) {
      return stylize('null', 'null');
    }

    // Look up the keys of the object.
    var visible_keys = Object_keys(value);
    var keys = showHidden ? Object_getOwnPropertyNames(value) : visible_keys;

    // Functions without properties can be shortcutted.
    if (typeof value === 'function' && keys.length === 0) {
      if (isRegExp(value)) {
        return stylize('' + value, 'regexp');
      } else {
        var name = value.name ? ': ' + value.name : '';
        return stylize('[Function' + name + ']', 'special');
      }
    }

    // Dates without properties can be shortcutted
    if (isDate(value) && keys.length === 0) {
      return stylize(value.toUTCString(), 'date');
    }

    var base, type, braces;
    // Determine the object type
    if (isArray(value)) {
      type = 'Array';
      braces = ['[', ']'];
    } else {
      type = 'Object';
      braces = ['{', '}'];
    }

    // Make functions say that they are functions
    if (typeof value === 'function') {
      var n = value.name ? ': ' + value.name : '';
      base = (isRegExp(value)) ? ' ' + value : ' [Function' + n + ']';
    } else {
      base = '';
    }

    // Make dates with properties first say the date
    if (isDate(value)) {
      base = ' ' + value.toUTCString();
    }

    if (keys.length === 0) {
      return braces[0] + base + braces[1];
    }

    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return stylize('' + value, 'regexp');
      } else {
        return stylize('[Object]', 'special');
      }
    }

    seen.push(value);

    var output = keys.map(function(key) {
      var name, str;
      if (value.__lookupGetter__) {
        if (value.__lookupGetter__(key)) {
          if (value.__lookupSetter__(key)) {
            str = stylize('[Getter/Setter]', 'special');
          } else {
            str = stylize('[Getter]', 'special');
          }
        } else {
          if (value.__lookupSetter__(key)) {
            str = stylize('[Setter]', 'special');
          }
        }
      }
      if (visible_keys.indexOf(key) < 0) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (seen.indexOf(value[key]) < 0) {
          if (recurseTimes === null) {
            str = format(value[key]);
          } else {
            str = format(value[key], recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (isArray(value)) {
              str = str.split('\n').map(function(line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function(line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = stylize('[Circular]', 'special');
        }
      }
      if (typeof name === 'undefined') {
        if (type === 'Array' && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'")
                     .replace(/\\"/g, '"')
                     .replace(/(^"|"$)/g, "'");
          name = stylize(name, 'string');
        }
      }

      return name + ': ' + str;
    });

    seen.pop();

    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
      numLinesEst++;
      if (cur.indexOf('\n') >= 0) numLinesEst++;
      return prev + cur.length + 1;
    }, 0);

    if (length > 50) {
      output = braces[0] +
               (base === '' ? '' : base + '\n ') +
               ' ' +
               output.join(',\n  ') +
               ' ' +
               braces[1];

    } else {
      output = braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }

    return output;
  }
  return format(obj, (typeof depth === 'undefined' ? 2 : depth));
};


function isArray(ar) {
  return ar instanceof Array ||
         Array.isArray(ar) ||
         (ar && ar !== Object.prototype && isArray(ar.__proto__));
}


function isRegExp(re) {
  return re instanceof RegExp ||
    (typeof re === 'object' && Object.prototype.toString.call(re) === '[object RegExp]');
}


function isDate(d) {
  if (d instanceof Date) return true;
  if (typeof d !== 'object') return false;
  var properties = Date.prototype && Object_getOwnPropertyNames(Date.prototype);
  var proto = d.__proto__ && Object_getOwnPropertyNames(d.__proto__);
  return JSON.stringify(proto) === JSON.stringify(properties);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}

exports.log = function (msg) {};

exports.pump = null;

var Object_keys = Object.keys || function (obj) {
    var res = [];
    for (var key in obj) res.push(key);
    return res;
};

var Object_getOwnPropertyNames = Object.getOwnPropertyNames || function (obj) {
    var res = [];
    for (var key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) res.push(key);
    }
    return res;
};

var Object_create = Object.create || function (prototype, properties) {
    // from es5-shim
    var object;
    if (prototype === null) {
        object = { '__proto__' : null };
    }
    else {
        if (typeof prototype !== 'object') {
            throw new TypeError(
                'typeof prototype[' + (typeof prototype) + '] != \'object\''
            );
        }
        var Type = function () {};
        Type.prototype = prototype;
        object = new Type();
        object.__proto__ = prototype;
    }
    if (typeof properties !== 'undefined' && Object.defineProperties) {
        Object.defineProperties(object, properties);
    }
    return object;
};

exports.inherits = function(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object_create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (typeof f !== 'string') {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(exports.inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j': return JSON.stringify(args[i++]);
      default:
        return x;
    }
  });
  for(var x = args[i]; i < len; x = args[++i]){
    if (x === null || typeof x !== 'object') {
      str += ' ' + x;
    } else {
      str += ' ' + exports.inspect(x);
    }
  }
  return str;
};

},{"events":4}],5:[function(require,module,exports){
exports.readIEEE754 = function(buffer, offset, isBE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isBE ? 0 : (nBytes - 1),
      d = isBE ? 1 : -1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.writeIEEE754 = function(buffer, value, offset, isBE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isBE ? (nBytes - 1) : 0,
      d = isBE ? -1 : 1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],6:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],4:[function(require,module,exports){
(function(process){if (!process.EventEmitter) process.EventEmitter = function () {};

var EventEmitter = exports.EventEmitter = process.EventEmitter;
var isArray = typeof Array.isArray === 'function'
    ? Array.isArray
    : function (xs) {
        return Object.prototype.toString.call(xs) === '[object Array]'
    }
;
function indexOf (xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for (var i = 0; i < xs.length; i++) {
        if (x === xs[i]) return i;
    }
    return -1;
}

// By default EventEmitters will print a warning if more than
// 10 listeners are added to it. This is a useful default which
// helps finding memory leaks.
//
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
var defaultMaxListeners = 10;
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!this._events) this._events = {};
  this._events.maxListeners = n;
};


EventEmitter.prototype.emit = function(type) {
  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events || !this._events.error ||
        (isArray(this._events.error) && !this._events.error.length))
    {
      if (arguments[1] instanceof Error) {
        throw arguments[1]; // Unhandled 'error' event
      } else {
        throw new Error("Uncaught, unspecified 'error' event.");
      }
      return false;
    }
  }

  if (!this._events) return false;
  var handler = this._events[type];
  if (!handler) return false;

  if (typeof handler == 'function') {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        var args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
    return true;

  } else if (isArray(handler)) {
    var args = Array.prototype.slice.call(arguments, 1);

    var listeners = handler.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i].apply(this, args);
    }
    return true;

  } else {
    return false;
  }
};

// EventEmitter is defined in src/node_events.cc
// EventEmitter.prototype.emit() is also defined there.
EventEmitter.prototype.addListener = function(type, listener) {
  if ('function' !== typeof listener) {
    throw new Error('addListener only takes instances of Function');
  }

  if (!this._events) this._events = {};

  // To avoid recursion in the case that type == "newListeners"! Before
  // adding it to the listeners, first emit "newListeners".
  this.emit('newListener', type, listener);

  if (!this._events[type]) {
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  } else if (isArray(this._events[type])) {

    // Check for listener leak
    if (!this._events[type].warned) {
      var m;
      if (this._events.maxListeners !== undefined) {
        m = this._events.maxListeners;
      } else {
        m = defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' +
                      'leak detected. %d listeners added. ' +
                      'Use emitter.setMaxListeners() to increase limit.',
                      this._events[type].length);
        console.trace();
      }
    }

    // If we've already got an array, just append.
    this._events[type].push(listener);
  } else {
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  var self = this;
  self.on(type, function g() {
    self.removeListener(type, g);
    listener.apply(this, arguments);
  });

  return this;
};

EventEmitter.prototype.removeListener = function(type, listener) {
  if ('function' !== typeof listener) {
    throw new Error('removeListener only takes instances of Function');
  }

  // does not use listeners(), so no side effect of creating _events[type]
  if (!this._events || !this._events[type]) return this;

  var list = this._events[type];

  if (isArray(list)) {
    var i = indexOf(list, listener);
    if (i < 0) return this;
    list.splice(i, 1);
    if (list.length == 0)
      delete this._events[type];
  } else if (this._events[type] === listener) {
    delete this._events[type];
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  if (arguments.length === 0) {
    this._events = {};
    return this;
  }

  // does not use listeners(), so no side effect of creating _events[type]
  if (type && this._events && this._events[type]) this._events[type] = null;
  return this;
};

EventEmitter.prototype.listeners = function(type) {
  if (!this._events) this._events = {};
  if (!this._events[type]) this._events[type] = [];
  if (!isArray(this._events[type])) {
    this._events[type] = [this._events[type]];
  }
  return this._events[type];
};

})(require("__browserify_process"))
},{"__browserify_process":6}],"buffer-browserify":[function(require,module,exports){
module.exports=require('q9TxCC');
},{}],"q9TxCC":[function(require,module,exports){
function SlowBuffer (size) {
    this.length = size;
};

var assert = require('assert');

exports.INSPECT_MAX_BYTES = 50;


function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; i++)
    if (str.charCodeAt(i) <= 0x7F)
      byteArray.push(str.charCodeAt(i));
    else {
      var h = encodeURIComponent(str.charAt(i)).substr(1).split('%');
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16));
    }

  return byteArray;
}

function asciiToBytes(str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++ )
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push( str.charCodeAt(i) & 0xFF );

  return byteArray;
}

function base64ToBytes(str) {
  return require("base64-js").toByteArray(str);
}

SlowBuffer.byteLength = function (str, encoding) {
  switch (encoding || "utf8") {
    case 'hex':
      return str.length / 2;

    case 'utf8':
    case 'utf-8':
      return utf8ToBytes(str).length;

    case 'ascii':
    case 'binary':
      return str.length;

    case 'base64':
      return base64ToBytes(str).length;

    default:
      throw new Error('Unknown encoding');
  }
};

function blitBuffer(src, dst, offset, length) {
  var pos, i = 0;
  while (i < length) {
    if ((i+offset >= dst.length) || (i >= src.length))
      break;

    dst[i + offset] = src[i];
    i++;
  }
  return i;
}

SlowBuffer.prototype.utf8Write = function (string, offset, length) {
  var bytes, pos;
  return SlowBuffer._charsWritten =  blitBuffer(utf8ToBytes(string), this, offset, length);
};

SlowBuffer.prototype.asciiWrite = function (string, offset, length) {
  var bytes, pos;
  return SlowBuffer._charsWritten =  blitBuffer(asciiToBytes(string), this, offset, length);
};

SlowBuffer.prototype.binaryWrite = SlowBuffer.prototype.asciiWrite;

SlowBuffer.prototype.base64Write = function (string, offset, length) {
  var bytes, pos;
  return SlowBuffer._charsWritten = blitBuffer(base64ToBytes(string), this, offset, length);
};

SlowBuffer.prototype.base64Slice = function (start, end) {
  var bytes = Array.prototype.slice.apply(this, arguments)
  return require("base64-js").fromByteArray(bytes);
}

function decodeUtf8Char(str) {
  try {
    return decodeURIComponent(str);
  } catch (err) {
    return String.fromCharCode(0xFFFD); // UTF 8 invalid char
  }
}

SlowBuffer.prototype.utf8Slice = function () {
  var bytes = Array.prototype.slice.apply(this, arguments);
  var res = "";
  var tmp = "";
  var i = 0;
  while (i < bytes.length) {
    if (bytes[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(bytes[i]);
      tmp = "";
    } else
      tmp += "%" + bytes[i].toString(16);

    i++;
  }

  return res + decodeUtf8Char(tmp);
}

SlowBuffer.prototype.asciiSlice = function () {
  var bytes = Array.prototype.slice.apply(this, arguments);
  var ret = "";
  for (var i = 0; i < bytes.length; i++)
    ret += String.fromCharCode(bytes[i]);
  return ret;
}

SlowBuffer.prototype.binarySlice = SlowBuffer.prototype.asciiSlice;

SlowBuffer.prototype.inspect = function() {
  var out = [],
      len = this.length;
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i]);
    if (i == exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...';
      break;
    }
  }
  return '<SlowBuffer ' + out.join(' ') + '>';
};


SlowBuffer.prototype.hexSlice = function(start, end) {
  var len = this.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; i++) {
    out += toHex(this[i]);
  }
  return out;
};


SlowBuffer.prototype.toString = function(encoding, start, end) {
  encoding = String(encoding || 'utf8').toLowerCase();
  start = +start || 0;
  if (typeof end == 'undefined') end = this.length;

  // Fastpath empty strings
  if (+end == start) {
    return '';
  }

  switch (encoding) {
    case 'hex':
      return this.hexSlice(start, end);

    case 'utf8':
    case 'utf-8':
      return this.utf8Slice(start, end);

    case 'ascii':
      return this.asciiSlice(start, end);

    case 'binary':
      return this.binarySlice(start, end);

    case 'base64':
      return this.base64Slice(start, end);

    case 'ucs2':
    case 'ucs-2':
      return this.ucs2Slice(start, end);

    default:
      throw new Error('Unknown encoding');
  }
};


SlowBuffer.prototype.hexWrite = function(string, offset, length) {
  offset = +offset || 0;
  var remaining = this.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = +length;
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2) {
    throw new Error('Invalid hex string');
  }
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(byte)) throw new Error('Invalid hex string');
    this[offset + i] = byte;
  }
  SlowBuffer._charsWritten = i * 2;
  return i;
};


SlowBuffer.prototype.write = function(string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length;
      length = undefined;
    }
  } else {  // legacy
    var swap = encoding;
    encoding = offset;
    offset = length;
    length = swap;
  }

  offset = +offset || 0;
  var remaining = this.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = +length;
    if (length > remaining) {
      length = remaining;
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase();

  switch (encoding) {
    case 'hex':
      return this.hexWrite(string, offset, length);

    case 'utf8':
    case 'utf-8':
      return this.utf8Write(string, offset, length);

    case 'ascii':
      return this.asciiWrite(string, offset, length);

    case 'binary':
      return this.binaryWrite(string, offset, length);

    case 'base64':
      return this.base64Write(string, offset, length);

    case 'ucs2':
    case 'ucs-2':
      return this.ucs2Write(string, offset, length);

    default:
      throw new Error('Unknown encoding');
  }
};


// slice(start, end)
SlowBuffer.prototype.slice = function(start, end) {
  if (end === undefined) end = this.length;

  if (end > this.length) {
    throw new Error('oob');
  }
  if (start > end) {
    throw new Error('oob');
  }

  return new Buffer(this, end - start, +start);
};

SlowBuffer.prototype.copy = function(target, targetstart, sourcestart, sourceend) {
  var temp = [];
  for (var i=sourcestart; i<sourceend; i++) {
    assert.ok(typeof this[i] !== 'undefined', "copying undefined buffer bytes!");
    temp.push(this[i]);
  }

  for (var i=targetstart; i<targetstart+temp.length; i++) {
    target[i] = temp[i-targetstart];
  }
};

SlowBuffer.prototype.fill = function(value, start, end) {
  if (end > this.length) {
    throw new Error('oob');
  }
  if (start > end) {
    throw new Error('oob');
  }

  for (var i = start; i < end; i++) {
    this[i] = value;
  }
}

function coerce(length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length);
  return length < 0 ? 0 : length;
}


// Buffer

function Buffer(subject, encoding, offset) {
  if (!(this instanceof Buffer)) {
    return new Buffer(subject, encoding, offset);
  }

  var type;

  // Are we slicing?
  if (typeof offset === 'number') {
    this.length = coerce(encoding);
    this.parent = subject;
    this.offset = offset;
  } else {
    // Find the length
    switch (type = typeof subject) {
      case 'number':
        this.length = coerce(subject);
        break;

      case 'string':
        this.length = Buffer.byteLength(subject, encoding);
        break;

      case 'object': // Assume object is an array
        this.length = coerce(subject.length);
        break;

      default:
        throw new Error('First argument needs to be a number, ' +
                        'array or string.');
    }

    if (this.length > Buffer.poolSize) {
      // Big buffer, just alloc one.
      this.parent = new SlowBuffer(this.length);
      this.offset = 0;

    } else {
      // Small buffer.
      if (!pool || pool.length - pool.used < this.length) allocPool();
      this.parent = pool;
      this.offset = pool.used;
      pool.used += this.length;
    }

    // Treat array-ish objects as a byte array.
    if (isArrayIsh(subject)) {
      for (var i = 0; i < this.length; i++) {
        if (subject instanceof Buffer) {
          this.parent[i + this.offset] = subject.readUInt8(i);
        }
        else {
          this.parent[i + this.offset] = subject[i];
        }
      }
    } else if (type == 'string') {
      // We are a string
      this.length = this.write(subject, 0, encoding);
    }
  }

}

function isArrayIsh(subject) {
  return Array.isArray(subject) || Buffer.isBuffer(subject) ||
         subject && typeof subject === 'object' &&
         typeof subject.length === 'number';
}

exports.SlowBuffer = SlowBuffer;
exports.Buffer = Buffer;

Buffer.poolSize = 8 * 1024;
var pool;

function allocPool() {
  pool = new SlowBuffer(Buffer.poolSize);
  pool.used = 0;
}


// Static methods
Buffer.isBuffer = function isBuffer(b) {
  return b instanceof Buffer || b instanceof SlowBuffer;
};

Buffer.concat = function (list, totalLength) {
  if (!Array.isArray(list)) {
    throw new Error("Usage: Buffer.concat(list, [totalLength])\n \
      list should be an Array.");
  }

  if (list.length === 0) {
    return new Buffer(0);
  } else if (list.length === 1) {
    return list[0];
  }

  if (typeof totalLength !== 'number') {
    totalLength = 0;
    for (var i = 0; i < list.length; i++) {
      var buf = list[i];
      totalLength += buf.length;
    }
  }

  var buffer = new Buffer(totalLength);
  var pos = 0;
  for (var i = 0; i < list.length; i++) {
    var buf = list[i];
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

// Inspect
Buffer.prototype.inspect = function inspect() {
  var out = [],
      len = this.length;

  for (var i = 0; i < len; i++) {
    out[i] = toHex(this.parent[i + this.offset]);
    if (i == exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...';
      break;
    }
  }

  return '<Buffer ' + out.join(' ') + '>';
};


Buffer.prototype.get = function get(i) {
  if (i < 0 || i >= this.length) throw new Error('oob');
  return this.parent[this.offset + i];
};


Buffer.prototype.set = function set(i, v) {
  if (i < 0 || i >= this.length) throw new Error('oob');
  return this.parent[this.offset + i] = v;
};


// write(string, offset = 0, length = buffer.length-offset, encoding = 'utf8')
Buffer.prototype.write = function(string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length;
      length = undefined;
    }
  } else {  // legacy
    var swap = encoding;
    encoding = offset;
    offset = length;
    length = swap;
  }

  offset = +offset || 0;
  var remaining = this.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = +length;
    if (length > remaining) {
      length = remaining;
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase();

  var ret;
  switch (encoding) {
    case 'hex':
      ret = this.parent.hexWrite(string, this.offset + offset, length);
      break;

    case 'utf8':
    case 'utf-8':
      ret = this.parent.utf8Write(string, this.offset + offset, length);
      break;

    case 'ascii':
      ret = this.parent.asciiWrite(string, this.offset + offset, length);
      break;

    case 'binary':
      ret = this.parent.binaryWrite(string, this.offset + offset, length);
      break;

    case 'base64':
      // Warning: maxLength not taken into account in base64Write
      ret = this.parent.base64Write(string, this.offset + offset, length);
      break;

    case 'ucs2':
    case 'ucs-2':
      ret = this.parent.ucs2Write(string, this.offset + offset, length);
      break;

    default:
      throw new Error('Unknown encoding');
  }

  Buffer._charsWritten = SlowBuffer._charsWritten;

  return ret;
};


// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function(encoding, start, end) {
  encoding = String(encoding || 'utf8').toLowerCase();

  if (typeof start == 'undefined' || start < 0) {
    start = 0;
  } else if (start > this.length) {
    start = this.length;
  }

  if (typeof end == 'undefined' || end > this.length) {
    end = this.length;
  } else if (end < 0) {
    end = 0;
  }

  start = start + this.offset;
  end = end + this.offset;

  switch (encoding) {
    case 'hex':
      return this.parent.hexSlice(start, end);

    case 'utf8':
    case 'utf-8':
      return this.parent.utf8Slice(start, end);

    case 'ascii':
      return this.parent.asciiSlice(start, end);

    case 'binary':
      return this.parent.binarySlice(start, end);

    case 'base64':
      return this.parent.base64Slice(start, end);

    case 'ucs2':
    case 'ucs-2':
      return this.parent.ucs2Slice(start, end);

    default:
      throw new Error('Unknown encoding');
  }
};


// byteLength
Buffer.byteLength = SlowBuffer.byteLength;


// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill(value, start, end) {
  value || (value = 0);
  start || (start = 0);
  end || (end = this.length);

  if (typeof value === 'string') {
    value = value.charCodeAt(0);
  }
  if (!(typeof value === 'number') || isNaN(value)) {
    throw new Error('value is not a number');
  }

  if (end < start) throw new Error('end < start');

  // Fill 0 bytes; we're done
  if (end === start) return 0;
  if (this.length == 0) return 0;

  if (start < 0 || start >= this.length) {
    throw new Error('start out of bounds');
  }

  if (end < 0 || end > this.length) {
    throw new Error('end out of bounds');
  }

  return this.parent.fill(value,
                          start + this.offset,
                          end + this.offset);
};


// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function(target, target_start, start, end) {
  var source = this;
  start || (start = 0);
  end || (end = this.length);
  target_start || (target_start = 0);

  if (end < start) throw new Error('sourceEnd < sourceStart');

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length == 0 || source.length == 0) return 0;

  if (target_start < 0 || target_start >= target.length) {
    throw new Error('targetStart out of bounds');
  }

  if (start < 0 || start >= source.length) {
    throw new Error('sourceStart out of bounds');
  }

  if (end < 0 || end > source.length) {
    throw new Error('sourceEnd out of bounds');
  }

  // Are we oob?
  if (end > this.length) {
    end = this.length;
  }

  if (target.length - target_start < end - start) {
    end = target.length - target_start + start;
  }

  return this.parent.copy(target.parent,
                          target_start + target.offset,
                          start + this.offset,
                          end + this.offset);
};


// slice(start, end)
Buffer.prototype.slice = function(start, end) {
  if (end === undefined) end = this.length;
  if (end > this.length) throw new Error('oob');
  if (start > end) throw new Error('oob');

  return new Buffer(this.parent, end - start, +start + this.offset);
};


// Legacy methods for backwards compatibility.

Buffer.prototype.utf8Slice = function(start, end) {
  return this.toString('utf8', start, end);
};

Buffer.prototype.binarySlice = function(start, end) {
  return this.toString('binary', start, end);
};

Buffer.prototype.asciiSlice = function(start, end) {
  return this.toString('ascii', start, end);
};

Buffer.prototype.utf8Write = function(string, offset) {
  return this.write(string, offset, 'utf8');
};

Buffer.prototype.binaryWrite = function(string, offset) {
  return this.write(string, offset, 'binary');
};

Buffer.prototype.asciiWrite = function(string, offset) {
  return this.write(string, offset, 'ascii');
};

Buffer.prototype.readUInt8 = function(offset, noAssert) {
  var buffer = this;

  if (!noAssert) {
    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (offset >= buffer.length) return;

  return buffer.parent[buffer.offset + offset];
};

function readUInt16(buffer, offset, isBigEndian, noAssert) {
  var val = 0;


  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (offset >= buffer.length) return 0;

  if (isBigEndian) {
    val = buffer.parent[buffer.offset + offset] << 8;
    if (offset + 1 < buffer.length) {
      val |= buffer.parent[buffer.offset + offset + 1];
    }
  } else {
    val = buffer.parent[buffer.offset + offset];
    if (offset + 1 < buffer.length) {
      val |= buffer.parent[buffer.offset + offset + 1] << 8;
    }
  }

  return val;
}

Buffer.prototype.readUInt16LE = function(offset, noAssert) {
  return readUInt16(this, offset, false, noAssert);
};

Buffer.prototype.readUInt16BE = function(offset, noAssert) {
  return readUInt16(this, offset, true, noAssert);
};

function readUInt32(buffer, offset, isBigEndian, noAssert) {
  var val = 0;

  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (offset >= buffer.length) return 0;

  if (isBigEndian) {
    if (offset + 1 < buffer.length)
      val = buffer.parent[buffer.offset + offset + 1] << 16;
    if (offset + 2 < buffer.length)
      val |= buffer.parent[buffer.offset + offset + 2] << 8;
    if (offset + 3 < buffer.length)
      val |= buffer.parent[buffer.offset + offset + 3];
    val = val + (buffer.parent[buffer.offset + offset] << 24 >>> 0);
  } else {
    if (offset + 2 < buffer.length)
      val = buffer.parent[buffer.offset + offset + 2] << 16;
    if (offset + 1 < buffer.length)
      val |= buffer.parent[buffer.offset + offset + 1] << 8;
    val |= buffer.parent[buffer.offset + offset];
    if (offset + 3 < buffer.length)
      val = val + (buffer.parent[buffer.offset + offset + 3] << 24 >>> 0);
  }

  return val;
}

Buffer.prototype.readUInt32LE = function(offset, noAssert) {
  return readUInt32(this, offset, false, noAssert);
};

Buffer.prototype.readUInt32BE = function(offset, noAssert) {
  return readUInt32(this, offset, true, noAssert);
};


/*
 * Signed integer types, yay team! A reminder on how two's complement actually
 * works. The first bit is the signed bit, i.e. tells us whether or not the
 * number should be positive or negative. If the two's complement value is
 * positive, then we're done, as it's equivalent to the unsigned representation.
 *
 * Now if the number is positive, you're pretty much done, you can just leverage
 * the unsigned translations and return those. Unfortunately, negative numbers
 * aren't quite that straightforward.
 *
 * At first glance, one might be inclined to use the traditional formula to
 * translate binary numbers between the positive and negative values in two's
 * complement. (Though it doesn't quite work for the most negative value)
 * Mainly:
 *  - invert all the bits
 *  - add one to the result
 *
 * Of course, this doesn't quite work in Javascript. Take for example the value
 * of -128. This could be represented in 16 bits (big-endian) as 0xff80. But of
 * course, Javascript will do the following:
 *
 * > ~0xff80
 * -65409
 *
 * Whoh there, Javascript, that's not quite right. But wait, according to
 * Javascript that's perfectly correct. When Javascript ends up seeing the
 * constant 0xff80, it has no notion that it is actually a signed number. It
 * assumes that we've input the unsigned value 0xff80. Thus, when it does the
 * binary negation, it casts it into a signed value, (positive 0xff80). Then
 * when you perform binary negation on that, it turns it into a negative number.
 *
 * Instead, we're going to have to use the following general formula, that works
 * in a rather Javascript friendly way. I'm glad we don't support this kind of
 * weird numbering scheme in the kernel.
 *
 * (BIT-MAX - (unsigned)val + 1) * -1
 *
 * The astute observer, may think that this doesn't make sense for 8-bit numbers
 * (really it isn't necessary for them). However, when you get 16-bit numbers,
 * you do. Let's go back to our prior example and see how this will look:
 *
 * (0xffff - 0xff80 + 1) * -1
 * (0x007f + 1) * -1
 * (0x0080) * -1
 */
Buffer.prototype.readInt8 = function(offset, noAssert) {
  var buffer = this;
  var neg;

  if (!noAssert) {
    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (offset >= buffer.length) return;

  neg = buffer.parent[buffer.offset + offset] & 0x80;
  if (!neg) {
    return (buffer.parent[buffer.offset + offset]);
  }

  return ((0xff - buffer.parent[buffer.offset + offset] + 1) * -1);
};

function readInt16(buffer, offset, isBigEndian, noAssert) {
  var neg, val;

  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'Trying to read beyond buffer length');
  }

  val = readUInt16(buffer, offset, isBigEndian, noAssert);
  neg = val & 0x8000;
  if (!neg) {
    return val;
  }

  return (0xffff - val + 1) * -1;
}

Buffer.prototype.readInt16LE = function(offset, noAssert) {
  return readInt16(this, offset, false, noAssert);
};

Buffer.prototype.readInt16BE = function(offset, noAssert) {
  return readInt16(this, offset, true, noAssert);
};

function readInt32(buffer, offset, isBigEndian, noAssert) {
  var neg, val;

  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to read beyond buffer length');
  }

  val = readUInt32(buffer, offset, isBigEndian, noAssert);
  neg = val & 0x80000000;
  if (!neg) {
    return (val);
  }

  return (0xffffffff - val + 1) * -1;
}

Buffer.prototype.readInt32LE = function(offset, noAssert) {
  return readInt32(this, offset, false, noAssert);
};

Buffer.prototype.readInt32BE = function(offset, noAssert) {
  return readInt32(this, offset, true, noAssert);
};

function readFloat(buffer, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset + 3 < buffer.length,
        'Trying to read beyond buffer length');
  }

  return require('./buffer_ieee754').readIEEE754(buffer, offset, isBigEndian,
      23, 4);
}

Buffer.prototype.readFloatLE = function(offset, noAssert) {
  return readFloat(this, offset, false, noAssert);
};

Buffer.prototype.readFloatBE = function(offset, noAssert) {
  return readFloat(this, offset, true, noAssert);
};

function readDouble(buffer, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset + 7 < buffer.length,
        'Trying to read beyond buffer length');
  }

  return require('./buffer_ieee754').readIEEE754(buffer, offset, isBigEndian,
      52, 8);
}

Buffer.prototype.readDoubleLE = function(offset, noAssert) {
  return readDouble(this, offset, false, noAssert);
};

Buffer.prototype.readDoubleBE = function(offset, noAssert) {
  return readDouble(this, offset, true, noAssert);
};


/*
 * We have to make sure that the value is a valid integer. This means that it is
 * non-negative. It has no fractional component and that it does not exceed the
 * maximum allowed value.
 *
 *      value           The number to check for validity
 *
 *      max             The maximum value
 */
function verifuint(value, max) {
  assert.ok(typeof (value) == 'number',
      'cannot write a non-number as a number');

  assert.ok(value >= 0,
      'specified a negative value for writing an unsigned value');

  assert.ok(value <= max, 'value is larger than maximum value for type');

  assert.ok(Math.floor(value) === value, 'value has a fractional component');
}

Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {
  var buffer = this;

  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'trying to write beyond buffer length');

    verifuint(value, 0xff);
  }

  if (offset < buffer.length) {
    buffer.parent[buffer.offset + offset] = value;
  }
};

function writeUInt16(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'trying to write beyond buffer length');

    verifuint(value, 0xffff);
  }

  for (var i = 0; i < Math.min(buffer.length - offset, 2); i++) {
    buffer.parent[buffer.offset + offset + i] =
        (value & (0xff << (8 * (isBigEndian ? 1 - i : i)))) >>>
            (isBigEndian ? 1 - i : i) * 8;
  }

}

Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
  writeUInt16(this, value, offset, false, noAssert);
};

Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
  writeUInt16(this, value, offset, true, noAssert);
};

function writeUInt32(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'trying to write beyond buffer length');

    verifuint(value, 0xffffffff);
  }

  for (var i = 0; i < Math.min(buffer.length - offset, 4); i++) {
    buffer.parent[buffer.offset + offset + i] =
        (value >>> (isBigEndian ? 3 - i : i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
  writeUInt32(this, value, offset, false, noAssert);
};

Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
  writeUInt32(this, value, offset, true, noAssert);
};


/*
 * We now move onto our friends in the signed number category. Unlike unsigned
 * numbers, we're going to have to worry a bit more about how we put values into
 * arrays. Since we are only worrying about signed 32-bit values, we're in
 * slightly better shape. Unfortunately, we really can't do our favorite binary
 * & in this system. It really seems to do the wrong thing. For example:
 *
 * > -32 & 0xff
 * 224
 *
 * What's happening above is really: 0xe0 & 0xff = 0xe0. However, the results of
 * this aren't treated as a signed number. Ultimately a bad thing.
 *
 * What we're going to want to do is basically create the unsigned equivalent of
 * our representation and pass that off to the wuint* functions. To do that
 * we're going to do the following:
 *
 *  - if the value is positive
 *      we can pass it directly off to the equivalent wuint
 *  - if the value is negative
 *      we do the following computation:
 *         mb + val + 1, where
 *         mb   is the maximum unsigned value in that byte size
 *         val  is the Javascript negative integer
 *
 *
 * As a concrete value, take -128. In signed 16 bits this would be 0xff80. If
 * you do out the computations:
 *
 * 0xffff - 128 + 1
 * 0xffff - 127
 * 0xff80
 *
 * You can then encode this value as the signed version. This is really rather
 * hacky, but it should work and get the job done which is our goal here.
 */

/*
 * A series of checks to make sure we actually have a signed 32-bit number
 */
function verifsint(value, max, min) {
  assert.ok(typeof (value) == 'number',
      'cannot write a non-number as a number');

  assert.ok(value <= max, 'value larger than maximum allowed value');

  assert.ok(value >= min, 'value smaller than minimum allowed value');

  assert.ok(Math.floor(value) === value, 'value has a fractional component');
}

function verifIEEE754(value, max, min) {
  assert.ok(typeof (value) == 'number',
      'cannot write a non-number as a number');

  assert.ok(value <= max, 'value larger than maximum allowed value');

  assert.ok(value >= min, 'value smaller than minimum allowed value');
}

Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
  var buffer = this;

  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'Trying to write beyond buffer length');

    verifsint(value, 0x7f, -0x80);
  }

  if (value >= 0) {
    buffer.writeUInt8(value, offset, noAssert);
  } else {
    buffer.writeUInt8(0xff + value + 1, offset, noAssert);
  }
};

function writeInt16(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'Trying to write beyond buffer length');

    verifsint(value, 0x7fff, -0x8000);
  }

  if (value >= 0) {
    writeUInt16(buffer, value, offset, isBigEndian, noAssert);
  } else {
    writeUInt16(buffer, 0xffff + value + 1, offset, isBigEndian, noAssert);
  }
}

Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
  writeInt16(this, value, offset, false, noAssert);
};

Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
  writeInt16(this, value, offset, true, noAssert);
};

function writeInt32(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to write beyond buffer length');

    verifsint(value, 0x7fffffff, -0x80000000);
  }

  if (value >= 0) {
    writeUInt32(buffer, value, offset, isBigEndian, noAssert);
  } else {
    writeUInt32(buffer, 0xffffffff + value + 1, offset, isBigEndian, noAssert);
  }
}

Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
  writeInt32(this, value, offset, false, noAssert);
};

Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
  writeInt32(this, value, offset, true, noAssert);
};

function writeFloat(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to write beyond buffer length');

    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  require('./buffer_ieee754').writeIEEE754(buffer, value, offset, isBigEndian,
      23, 4);
}

Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {
  writeFloat(this, value, offset, false, noAssert);
};

Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {
  writeFloat(this, value, offset, true, noAssert);
};

function writeDouble(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 7 < buffer.length,
        'Trying to write beyond buffer length');

    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  require('./buffer_ieee754').writeIEEE754(buffer, value, offset, isBigEndian,
      52, 8);
}

Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
  writeDouble(this, value, offset, false, noAssert);
};

Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
  writeDouble(this, value, offset, true, noAssert);
};

SlowBuffer.prototype.readUInt8 = Buffer.prototype.readUInt8;
SlowBuffer.prototype.readUInt16LE = Buffer.prototype.readUInt16LE;
SlowBuffer.prototype.readUInt16BE = Buffer.prototype.readUInt16BE;
SlowBuffer.prototype.readUInt32LE = Buffer.prototype.readUInt32LE;
SlowBuffer.prototype.readUInt32BE = Buffer.prototype.readUInt32BE;
SlowBuffer.prototype.readInt8 = Buffer.prototype.readInt8;
SlowBuffer.prototype.readInt16LE = Buffer.prototype.readInt16LE;
SlowBuffer.prototype.readInt16BE = Buffer.prototype.readInt16BE;
SlowBuffer.prototype.readInt32LE = Buffer.prototype.readInt32LE;
SlowBuffer.prototype.readInt32BE = Buffer.prototype.readInt32BE;
SlowBuffer.prototype.readFloatLE = Buffer.prototype.readFloatLE;
SlowBuffer.prototype.readFloatBE = Buffer.prototype.readFloatBE;
SlowBuffer.prototype.readDoubleLE = Buffer.prototype.readDoubleLE;
SlowBuffer.prototype.readDoubleBE = Buffer.prototype.readDoubleBE;
SlowBuffer.prototype.writeUInt8 = Buffer.prototype.writeUInt8;
SlowBuffer.prototype.writeUInt16LE = Buffer.prototype.writeUInt16LE;
SlowBuffer.prototype.writeUInt16BE = Buffer.prototype.writeUInt16BE;
SlowBuffer.prototype.writeUInt32LE = Buffer.prototype.writeUInt32LE;
SlowBuffer.prototype.writeUInt32BE = Buffer.prototype.writeUInt32BE;
SlowBuffer.prototype.writeInt8 = Buffer.prototype.writeInt8;
SlowBuffer.prototype.writeInt16LE = Buffer.prototype.writeInt16LE;
SlowBuffer.prototype.writeInt16BE = Buffer.prototype.writeInt16BE;
SlowBuffer.prototype.writeInt32LE = Buffer.prototype.writeInt32LE;
SlowBuffer.prototype.writeInt32BE = Buffer.prototype.writeInt32BE;
SlowBuffer.prototype.writeFloatLE = Buffer.prototype.writeFloatLE;
SlowBuffer.prototype.writeFloatBE = Buffer.prototype.writeFloatBE;
SlowBuffer.prototype.writeDoubleLE = Buffer.prototype.writeDoubleLE;
SlowBuffer.prototype.writeDoubleBE = Buffer.prototype.writeDoubleBE;

},{"assert":1,"./buffer_ieee754":5,"base64-js":7}],7:[function(require,module,exports){
(function (exports) {
	'use strict';

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	function b64ToByteArray(b64) {
		var i, j, l, tmp, placeHolders, arr;
	
		if (b64.length % 4 > 0) {
			throw 'Invalid string. Length must be a multiple of 4';
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		placeHolders = b64.indexOf('=');
		placeHolders = placeHolders > 0 ? b64.length - placeHolders : 0;

		// base64 is 4/3 + up to two characters of the original data
		arr = [];//new Uint8Array(b64.length * 3 / 4 - placeHolders);

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length;

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (lookup.indexOf(b64[i]) << 18) | (lookup.indexOf(b64[i + 1]) << 12) | (lookup.indexOf(b64[i + 2]) << 6) | lookup.indexOf(b64[i + 3]);
			arr.push((tmp & 0xFF0000) >> 16);
			arr.push((tmp & 0xFF00) >> 8);
			arr.push(tmp & 0xFF);
		}

		if (placeHolders === 2) {
			tmp = (lookup.indexOf(b64[i]) << 2) | (lookup.indexOf(b64[i + 1]) >> 4);
			arr.push(tmp & 0xFF);
		} else if (placeHolders === 1) {
			tmp = (lookup.indexOf(b64[i]) << 10) | (lookup.indexOf(b64[i + 1]) << 4) | (lookup.indexOf(b64[i + 2]) >> 2);
			arr.push((tmp >> 8) & 0xFF);
			arr.push(tmp & 0xFF);
		}

		return arr;
	}

	function uint8ToBase64(uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length;

		function tripletToBase64 (num) {
			return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
		};

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
			output += tripletToBase64(temp);
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1];
				output += lookup[temp >> 2];
				output += lookup[(temp << 4) & 0x3F];
				output += '==';
				break;
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
				output += lookup[temp >> 10];
				output += lookup[(temp >> 4) & 0x3F];
				output += lookup[(temp << 2) & 0x3F];
				output += '=';
				break;
		}

		return output;
	}

	module.exports.toByteArray = b64ToByteArray;
	module.exports.fromByteArray = uint8ToBase64;
}());

},{}],8:[function(require,module,exports){
exports.readIEEE754 = function(buffer, offset, isBE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isBE ? 0 : (nBytes - 1),
      d = isBE ? 1 : -1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.writeIEEE754 = function(buffer, value, offset, isBE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isBE ? (nBytes - 1) : 0,
      d = isBE ? -1 : 1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],3:[function(require,module,exports){
function SlowBuffer (size) {
    this.length = size;
};

var assert = require('assert');

exports.INSPECT_MAX_BYTES = 50;


function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; i++)
    if (str.charCodeAt(i) <= 0x7F)
      byteArray.push(str.charCodeAt(i));
    else {
      var h = encodeURIComponent(str.charAt(i)).substr(1).split('%');
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16));
    }

  return byteArray;
}

function asciiToBytes(str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++ )
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push( str.charCodeAt(i) & 0xFF );

  return byteArray;
}

function base64ToBytes(str) {
  return require("base64-js").toByteArray(str);
}

SlowBuffer.byteLength = function (str, encoding) {
  switch (encoding || "utf8") {
    case 'hex':
      return str.length / 2;

    case 'utf8':
    case 'utf-8':
      return utf8ToBytes(str).length;

    case 'ascii':
      return str.length;

    case 'base64':
      return base64ToBytes(str).length;

    default:
      throw new Error('Unknown encoding');
  }
};

function blitBuffer(src, dst, offset, length) {
  var pos, i = 0;
  while (i < length) {
    if ((i+offset >= dst.length) || (i >= src.length))
      break;

    dst[i + offset] = src[i];
    i++;
  }
  return i;
}

SlowBuffer.prototype.utf8Write = function (string, offset, length) {
  var bytes, pos;
  return SlowBuffer._charsWritten =  blitBuffer(utf8ToBytes(string), this, offset, length);
};

SlowBuffer.prototype.asciiWrite = function (string, offset, length) {
  var bytes, pos;
  return SlowBuffer._charsWritten =  blitBuffer(asciiToBytes(string), this, offset, length);
};

SlowBuffer.prototype.base64Write = function (string, offset, length) {
  var bytes, pos;
  return SlowBuffer._charsWritten = blitBuffer(base64ToBytes(string), this, offset, length);
};

SlowBuffer.prototype.base64Slice = function (start, end) {
  var bytes = Array.prototype.slice.apply(this, arguments)
  return require("base64-js").fromByteArray(bytes);
}

function decodeUtf8Char(str) {
  try {
    return decodeURIComponent(str);
  } catch (err) {
    return String.fromCharCode(0xFFFD); // UTF 8 invalid char
  }
}

SlowBuffer.prototype.utf8Slice = function () {
  var bytes = Array.prototype.slice.apply(this, arguments);
  var res = "";
  var tmp = "";
  var i = 0;
  while (i < bytes.length) {
    if (bytes[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(bytes[i]);
      tmp = "";
    } else
      tmp += "%" + bytes[i].toString(16);

    i++;
  }

  return res + decodeUtf8Char(tmp);
}

SlowBuffer.prototype.asciiSlice = function () {
  var bytes = Array.prototype.slice.apply(this, arguments);
  var ret = "";
  for (var i = 0; i < bytes.length; i++)
    ret += String.fromCharCode(bytes[i]);
  return ret;
}

SlowBuffer.prototype.inspect = function() {
  var out = [],
      len = this.length;
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i]);
    if (i == exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...';
      break;
    }
  }
  return '<SlowBuffer ' + out.join(' ') + '>';
};


SlowBuffer.prototype.hexSlice = function(start, end) {
  var len = this.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; i++) {
    out += toHex(this[i]);
  }
  return out;
};


SlowBuffer.prototype.toString = function(encoding, start, end) {
  encoding = String(encoding || 'utf8').toLowerCase();
  start = +start || 0;
  if (typeof end == 'undefined') end = this.length;

  // Fastpath empty strings
  if (+end == start) {
    return '';
  }

  switch (encoding) {
    case 'hex':
      return this.hexSlice(start, end);

    case 'utf8':
    case 'utf-8':
      return this.utf8Slice(start, end);

    case 'ascii':
      return this.asciiSlice(start, end);

    case 'binary':
      return this.binarySlice(start, end);

    case 'base64':
      return this.base64Slice(start, end);

    case 'ucs2':
    case 'ucs-2':
      return this.ucs2Slice(start, end);

    default:
      throw new Error('Unknown encoding');
  }
};


SlowBuffer.prototype.hexWrite = function(string, offset, length) {
  offset = +offset || 0;
  var remaining = this.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = +length;
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2) {
    throw new Error('Invalid hex string');
  }
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(byte)) throw new Error('Invalid hex string');
    this[offset + i] = byte;
  }
  SlowBuffer._charsWritten = i * 2;
  return i;
};


SlowBuffer.prototype.write = function(string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length;
      length = undefined;
    }
  } else {  // legacy
    var swap = encoding;
    encoding = offset;
    offset = length;
    length = swap;
  }

  offset = +offset || 0;
  var remaining = this.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = +length;
    if (length > remaining) {
      length = remaining;
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase();

  switch (encoding) {
    case 'hex':
      return this.hexWrite(string, offset, length);

    case 'utf8':
    case 'utf-8':
      return this.utf8Write(string, offset, length);

    case 'ascii':
      return this.asciiWrite(string, offset, length);

    case 'binary':
      return this.binaryWrite(string, offset, length);

    case 'base64':
      return this.base64Write(string, offset, length);

    case 'ucs2':
    case 'ucs-2':
      return this.ucs2Write(string, offset, length);

    default:
      throw new Error('Unknown encoding');
  }
};


// slice(start, end)
SlowBuffer.prototype.slice = function(start, end) {
  if (end === undefined) end = this.length;

  if (end > this.length) {
    throw new Error('oob');
  }
  if (start > end) {
    throw new Error('oob');
  }

  return new Buffer(this, end - start, +start);
};

SlowBuffer.prototype.copy = function(target, targetstart, sourcestart, sourceend) {
  var temp = [];
  for (var i=sourcestart; i<sourceend; i++) {
    assert.ok(typeof this[i] !== 'undefined', "copying undefined buffer bytes!");
    temp.push(this[i]);
  }

  for (var i=targetstart; i<targetstart+temp.length; i++) {
    target[i] = temp[i-targetstart];
  }
};

function coerce(length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length);
  return length < 0 ? 0 : length;
}


// Buffer

function Buffer(subject, encoding, offset) {
  if (!(this instanceof Buffer)) {
    return new Buffer(subject, encoding, offset);
  }

  var type;

  // Are we slicing?
  if (typeof offset === 'number') {
    this.length = coerce(encoding);
    this.parent = subject;
    this.offset = offset;
  } else {
    // Find the length
    switch (type = typeof subject) {
      case 'number':
        this.length = coerce(subject);
        break;

      case 'string':
        this.length = Buffer.byteLength(subject, encoding);
        break;

      case 'object': // Assume object is an array
        this.length = coerce(subject.length);
        break;

      default:
        throw new Error('First argument needs to be a number, ' +
                        'array or string.');
    }

    if (this.length > Buffer.poolSize) {
      // Big buffer, just alloc one.
      this.parent = new SlowBuffer(this.length);
      this.offset = 0;

    } else {
      // Small buffer.
      if (!pool || pool.length - pool.used < this.length) allocPool();
      this.parent = pool;
      this.offset = pool.used;
      pool.used += this.length;
    }

    // Treat array-ish objects as a byte array.
    if (isArrayIsh(subject)) {
      for (var i = 0; i < this.length; i++) {
        this.parent[i + this.offset] = subject[i];
      }
    } else if (type == 'string') {
      // We are a string
      this.length = this.write(subject, 0, encoding);
    }
  }

}

function isArrayIsh(subject) {
  return Array.isArray(subject) || Buffer.isBuffer(subject) ||
         subject && typeof subject === 'object' &&
         typeof subject.length === 'number';
}

exports.SlowBuffer = SlowBuffer;
exports.Buffer = Buffer;

Buffer.poolSize = 8 * 1024;
var pool;

function allocPool() {
  pool = new SlowBuffer(Buffer.poolSize);
  pool.used = 0;
}


// Static methods
Buffer.isBuffer = function isBuffer(b) {
  return b instanceof Buffer || b instanceof SlowBuffer;
};

Buffer.concat = function (list, totalLength) {
  if (!Array.isArray(list)) {
    throw new Error("Usage: Buffer.concat(list, [totalLength])\n \
      list should be an Array.");
  }

  if (list.length === 0) {
    return new Buffer(0);
  } else if (list.length === 1) {
    return list[0];
  }

  if (typeof totalLength !== 'number') {
    totalLength = 0;
    for (var i = 0; i < list.length; i++) {
      var buf = list[i];
      totalLength += buf.length;
    }
  }

  var buffer = new Buffer(totalLength);
  var pos = 0;
  for (var i = 0; i < list.length; i++) {
    var buf = list[i];
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

// Inspect
Buffer.prototype.inspect = function inspect() {
  var out = [],
      len = this.length;

  for (var i = 0; i < len; i++) {
    out[i] = toHex(this.parent[i + this.offset]);
    if (i == exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...';
      break;
    }
  }

  return '<Buffer ' + out.join(' ') + '>';
};


Buffer.prototype.get = function get(i) {
  if (i < 0 || i >= this.length) throw new Error('oob');
  return this.parent[this.offset + i];
};


Buffer.prototype.set = function set(i, v) {
  if (i < 0 || i >= this.length) throw new Error('oob');
  return this.parent[this.offset + i] = v;
};


// write(string, offset = 0, length = buffer.length-offset, encoding = 'utf8')
Buffer.prototype.write = function(string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length;
      length = undefined;
    }
  } else {  // legacy
    var swap = encoding;
    encoding = offset;
    offset = length;
    length = swap;
  }

  offset = +offset || 0;
  var remaining = this.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = +length;
    if (length > remaining) {
      length = remaining;
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase();

  var ret;
  switch (encoding) {
    case 'hex':
      ret = this.parent.hexWrite(string, this.offset + offset, length);
      break;

    case 'utf8':
    case 'utf-8':
      ret = this.parent.utf8Write(string, this.offset + offset, length);
      break;

    case 'ascii':
      ret = this.parent.asciiWrite(string, this.offset + offset, length);
      break;

    case 'binary':
      ret = this.parent.binaryWrite(string, this.offset + offset, length);
      break;

    case 'base64':
      // Warning: maxLength not taken into account in base64Write
      ret = this.parent.base64Write(string, this.offset + offset, length);
      break;

    case 'ucs2':
    case 'ucs-2':
      ret = this.parent.ucs2Write(string, this.offset + offset, length);
      break;

    default:
      throw new Error('Unknown encoding');
  }

  Buffer._charsWritten = SlowBuffer._charsWritten;

  return ret;
};


// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function(encoding, start, end) {
  encoding = String(encoding || 'utf8').toLowerCase();

  if (typeof start == 'undefined' || start < 0) {
    start = 0;
  } else if (start > this.length) {
    start = this.length;
  }

  if (typeof end == 'undefined' || end > this.length) {
    end = this.length;
  } else if (end < 0) {
    end = 0;
  }

  start = start + this.offset;
  end = end + this.offset;

  switch (encoding) {
    case 'hex':
      return this.parent.hexSlice(start, end);

    case 'utf8':
    case 'utf-8':
      return this.parent.utf8Slice(start, end);

    case 'ascii':
      return this.parent.asciiSlice(start, end);

    case 'binary':
      return this.parent.binarySlice(start, end);

    case 'base64':
      return this.parent.base64Slice(start, end);

    case 'ucs2':
    case 'ucs-2':
      return this.parent.ucs2Slice(start, end);

    default:
      throw new Error('Unknown encoding');
  }
};


// byteLength
Buffer.byteLength = SlowBuffer.byteLength;


// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill(value, start, end) {
  value || (value = 0);
  start || (start = 0);
  end || (end = this.length);

  if (typeof value === 'string') {
    value = value.charCodeAt(0);
  }
  if (!(typeof value === 'number') || isNaN(value)) {
    throw new Error('value is not a number');
  }

  if (end < start) throw new Error('end < start');

  // Fill 0 bytes; we're done
  if (end === start) return 0;
  if (this.length == 0) return 0;

  if (start < 0 || start >= this.length) {
    throw new Error('start out of bounds');
  }

  if (end < 0 || end > this.length) {
    throw new Error('end out of bounds');
  }

  return this.parent.fill(value,
                          start + this.offset,
                          end + this.offset);
};


// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function(target, target_start, start, end) {
  var source = this;
  start || (start = 0);
  end || (end = this.length);
  target_start || (target_start = 0);

  if (end < start) throw new Error('sourceEnd < sourceStart');

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length == 0 || source.length == 0) return 0;

  if (target_start < 0 || target_start >= target.length) {
    throw new Error('targetStart out of bounds');
  }

  if (start < 0 || start >= source.length) {
    throw new Error('sourceStart out of bounds');
  }

  if (end < 0 || end > source.length) {
    throw new Error('sourceEnd out of bounds');
  }

  // Are we oob?
  if (end > this.length) {
    end = this.length;
  }

  if (target.length - target_start < end - start) {
    end = target.length - target_start + start;
  }

  return this.parent.copy(target.parent,
                          target_start + target.offset,
                          start + this.offset,
                          end + this.offset);
};


// slice(start, end)
Buffer.prototype.slice = function(start, end) {
  if (end === undefined) end = this.length;
  if (end > this.length) throw new Error('oob');
  if (start > end) throw new Error('oob');

  return new Buffer(this.parent, end - start, +start + this.offset);
};


// Legacy methods for backwards compatibility.

Buffer.prototype.utf8Slice = function(start, end) {
  return this.toString('utf8', start, end);
};

Buffer.prototype.binarySlice = function(start, end) {
  return this.toString('binary', start, end);
};

Buffer.prototype.asciiSlice = function(start, end) {
  return this.toString('ascii', start, end);
};

Buffer.prototype.utf8Write = function(string, offset) {
  return this.write(string, offset, 'utf8');
};

Buffer.prototype.binaryWrite = function(string, offset) {
  return this.write(string, offset, 'binary');
};

Buffer.prototype.asciiWrite = function(string, offset) {
  return this.write(string, offset, 'ascii');
};

Buffer.prototype.readUInt8 = function(offset, noAssert) {
  var buffer = this;

  if (!noAssert) {
    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'Trying to read beyond buffer length');
  }

  return buffer.parent[buffer.offset + offset];
};

function readUInt16(buffer, offset, isBigEndian, noAssert) {
  var val = 0;


  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (isBigEndian) {
    val = buffer.parent[buffer.offset + offset] << 8;
    val |= buffer.parent[buffer.offset + offset + 1];
  } else {
    val = buffer.parent[buffer.offset + offset];
    val |= buffer.parent[buffer.offset + offset + 1] << 8;
  }

  return val;
}

Buffer.prototype.readUInt16LE = function(offset, noAssert) {
  return readUInt16(this, offset, false, noAssert);
};

Buffer.prototype.readUInt16BE = function(offset, noAssert) {
  return readUInt16(this, offset, true, noAssert);
};

function readUInt32(buffer, offset, isBigEndian, noAssert) {
  var val = 0;

  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (isBigEndian) {
    val = buffer.parent[buffer.offset + offset + 1] << 16;
    val |= buffer.parent[buffer.offset + offset + 2] << 8;
    val |= buffer.parent[buffer.offset + offset + 3];
    val = val + (buffer.parent[buffer.offset + offset] << 24 >>> 0);
  } else {
    val = buffer.parent[buffer.offset + offset + 2] << 16;
    val |= buffer.parent[buffer.offset + offset + 1] << 8;
    val |= buffer.parent[buffer.offset + offset];
    val = val + (buffer.parent[buffer.offset + offset + 3] << 24 >>> 0);
  }

  return val;
}

Buffer.prototype.readUInt32LE = function(offset, noAssert) {
  return readUInt32(this, offset, false, noAssert);
};

Buffer.prototype.readUInt32BE = function(offset, noAssert) {
  return readUInt32(this, offset, true, noAssert);
};


/*
 * Signed integer types, yay team! A reminder on how two's complement actually
 * works. The first bit is the signed bit, i.e. tells us whether or not the
 * number should be positive or negative. If the two's complement value is
 * positive, then we're done, as it's equivalent to the unsigned representation.
 *
 * Now if the number is positive, you're pretty much done, you can just leverage
 * the unsigned translations and return those. Unfortunately, negative numbers
 * aren't quite that straightforward.
 *
 * At first glance, one might be inclined to use the traditional formula to
 * translate binary numbers between the positive and negative values in two's
 * complement. (Though it doesn't quite work for the most negative value)
 * Mainly:
 *  - invert all the bits
 *  - add one to the result
 *
 * Of course, this doesn't quite work in Javascript. Take for example the value
 * of -128. This could be represented in 16 bits (big-endian) as 0xff80. But of
 * course, Javascript will do the following:
 *
 * > ~0xff80
 * -65409
 *
 * Whoh there, Javascript, that's not quite right. But wait, according to
 * Javascript that's perfectly correct. When Javascript ends up seeing the
 * constant 0xff80, it has no notion that it is actually a signed number. It
 * assumes that we've input the unsigned value 0xff80. Thus, when it does the
 * binary negation, it casts it into a signed value, (positive 0xff80). Then
 * when you perform binary negation on that, it turns it into a negative number.
 *
 * Instead, we're going to have to use the following general formula, that works
 * in a rather Javascript friendly way. I'm glad we don't support this kind of
 * weird numbering scheme in the kernel.
 *
 * (BIT-MAX - (unsigned)val + 1) * -1
 *
 * The astute observer, may think that this doesn't make sense for 8-bit numbers
 * (really it isn't necessary for them). However, when you get 16-bit numbers,
 * you do. Let's go back to our prior example and see how this will look:
 *
 * (0xffff - 0xff80 + 1) * -1
 * (0x007f + 1) * -1
 * (0x0080) * -1
 */
Buffer.prototype.readInt8 = function(offset, noAssert) {
  var buffer = this;
  var neg;

  if (!noAssert) {
    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'Trying to read beyond buffer length');
  }

  neg = buffer.parent[buffer.offset + offset] & 0x80;
  if (!neg) {
    return (buffer.parent[buffer.offset + offset]);
  }

  return ((0xff - buffer.parent[buffer.offset + offset] + 1) * -1);
};

function readInt16(buffer, offset, isBigEndian, noAssert) {
  var neg, val;

  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'Trying to read beyond buffer length');
  }

  val = readUInt16(buffer, offset, isBigEndian, noAssert);
  neg = val & 0x8000;
  if (!neg) {
    return val;
  }

  return (0xffff - val + 1) * -1;
}

Buffer.prototype.readInt16LE = function(offset, noAssert) {
  return readInt16(this, offset, false, noAssert);
};

Buffer.prototype.readInt16BE = function(offset, noAssert) {
  return readInt16(this, offset, true, noAssert);
};

function readInt32(buffer, offset, isBigEndian, noAssert) {
  var neg, val;

  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to read beyond buffer length');
  }

  val = readUInt32(buffer, offset, isBigEndian, noAssert);
  neg = val & 0x80000000;
  if (!neg) {
    return (val);
  }

  return (0xffffffff - val + 1) * -1;
}

Buffer.prototype.readInt32LE = function(offset, noAssert) {
  return readInt32(this, offset, false, noAssert);
};

Buffer.prototype.readInt32BE = function(offset, noAssert) {
  return readInt32(this, offset, true, noAssert);
};

function readFloat(buffer, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset + 3 < buffer.length,
        'Trying to read beyond buffer length');
  }

  return require('./buffer_ieee754').readIEEE754(buffer, offset, isBigEndian,
      23, 4);
}

Buffer.prototype.readFloatLE = function(offset, noAssert) {
  return readFloat(this, offset, false, noAssert);
};

Buffer.prototype.readFloatBE = function(offset, noAssert) {
  return readFloat(this, offset, true, noAssert);
};

function readDouble(buffer, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset + 7 < buffer.length,
        'Trying to read beyond buffer length');
  }

  return require('./buffer_ieee754').readIEEE754(buffer, offset, isBigEndian,
      52, 8);
}

Buffer.prototype.readDoubleLE = function(offset, noAssert) {
  return readDouble(this, offset, false, noAssert);
};

Buffer.prototype.readDoubleBE = function(offset, noAssert) {
  return readDouble(this, offset, true, noAssert);
};


/*
 * We have to make sure that the value is a valid integer. This means that it is
 * non-negative. It has no fractional component and that it does not exceed the
 * maximum allowed value.
 *
 *      value           The number to check for validity
 *
 *      max             The maximum value
 */
function verifuint(value, max) {
  assert.ok(typeof (value) == 'number',
      'cannot write a non-number as a number');

  assert.ok(value >= 0,
      'specified a negative value for writing an unsigned value');

  assert.ok(value <= max, 'value is larger than maximum value for type');

  assert.ok(Math.floor(value) === value, 'value has a fractional component');
}

Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {
  var buffer = this;

  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'trying to write beyond buffer length');

    verifuint(value, 0xff);
  }

  buffer.parent[buffer.offset + offset] = value;
};

function writeUInt16(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'trying to write beyond buffer length');

    verifuint(value, 0xffff);
  }

  if (isBigEndian) {
    buffer.parent[buffer.offset + offset] = (value & 0xff00) >>> 8;
    buffer.parent[buffer.offset + offset + 1] = value & 0x00ff;
  } else {
    buffer.parent[buffer.offset + offset + 1] = (value & 0xff00) >>> 8;
    buffer.parent[buffer.offset + offset] = value & 0x00ff;
  }
}

Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
  writeUInt16(this, value, offset, false, noAssert);
};

Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
  writeUInt16(this, value, offset, true, noAssert);
};

function writeUInt32(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'trying to write beyond buffer length');

    verifuint(value, 0xffffffff);
  }

  if (isBigEndian) {
    buffer.parent[buffer.offset + offset] = (value >>> 24) & 0xff;
    buffer.parent[buffer.offset + offset + 1] = (value >>> 16) & 0xff;
    buffer.parent[buffer.offset + offset + 2] = (value >>> 8) & 0xff;
    buffer.parent[buffer.offset + offset + 3] = value & 0xff;
  } else {
    buffer.parent[buffer.offset + offset + 3] = (value >>> 24) & 0xff;
    buffer.parent[buffer.offset + offset + 2] = (value >>> 16) & 0xff;
    buffer.parent[buffer.offset + offset + 1] = (value >>> 8) & 0xff;
    buffer.parent[buffer.offset + offset] = value & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
  writeUInt32(this, value, offset, false, noAssert);
};

Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
  writeUInt32(this, value, offset, true, noAssert);
};


/*
 * We now move onto our friends in the signed number category. Unlike unsigned
 * numbers, we're going to have to worry a bit more about how we put values into
 * arrays. Since we are only worrying about signed 32-bit values, we're in
 * slightly better shape. Unfortunately, we really can't do our favorite binary
 * & in this system. It really seems to do the wrong thing. For example:
 *
 * > -32 & 0xff
 * 224
 *
 * What's happening above is really: 0xe0 & 0xff = 0xe0. However, the results of
 * this aren't treated as a signed number. Ultimately a bad thing.
 *
 * What we're going to want to do is basically create the unsigned equivalent of
 * our representation and pass that off to the wuint* functions. To do that
 * we're going to do the following:
 *
 *  - if the value is positive
 *      we can pass it directly off to the equivalent wuint
 *  - if the value is negative
 *      we do the following computation:
 *         mb + val + 1, where
 *         mb   is the maximum unsigned value in that byte size
 *         val  is the Javascript negative integer
 *
 *
 * As a concrete value, take -128. In signed 16 bits this would be 0xff80. If
 * you do out the computations:
 *
 * 0xffff - 128 + 1
 * 0xffff - 127
 * 0xff80
 *
 * You can then encode this value as the signed version. This is really rather
 * hacky, but it should work and get the job done which is our goal here.
 */

/*
 * A series of checks to make sure we actually have a signed 32-bit number
 */
function verifsint(value, max, min) {
  assert.ok(typeof (value) == 'number',
      'cannot write a non-number as a number');

  assert.ok(value <= max, 'value larger than maximum allowed value');

  assert.ok(value >= min, 'value smaller than minimum allowed value');

  assert.ok(Math.floor(value) === value, 'value has a fractional component');
}

function verifIEEE754(value, max, min) {
  assert.ok(typeof (value) == 'number',
      'cannot write a non-number as a number');

  assert.ok(value <= max, 'value larger than maximum allowed value');

  assert.ok(value >= min, 'value smaller than minimum allowed value');
}

Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
  var buffer = this;

  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'Trying to write beyond buffer length');

    verifsint(value, 0x7f, -0x80);
  }

  if (value >= 0) {
    buffer.writeUInt8(value, offset, noAssert);
  } else {
    buffer.writeUInt8(0xff + value + 1, offset, noAssert);
  }
};

function writeInt16(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'Trying to write beyond buffer length');

    verifsint(value, 0x7fff, -0x8000);
  }

  if (value >= 0) {
    writeUInt16(buffer, value, offset, isBigEndian, noAssert);
  } else {
    writeUInt16(buffer, 0xffff + value + 1, offset, isBigEndian, noAssert);
  }
}

Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
  writeInt16(this, value, offset, false, noAssert);
};

Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
  writeInt16(this, value, offset, true, noAssert);
};

function writeInt32(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to write beyond buffer length');

    verifsint(value, 0x7fffffff, -0x80000000);
  }

  if (value >= 0) {
    writeUInt32(buffer, value, offset, isBigEndian, noAssert);
  } else {
    writeUInt32(buffer, 0xffffffff + value + 1, offset, isBigEndian, noAssert);
  }
}

Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
  writeInt32(this, value, offset, false, noAssert);
};

Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
  writeInt32(this, value, offset, true, noAssert);
};

function writeFloat(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to write beyond buffer length');

    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  require('./buffer_ieee754').writeIEEE754(buffer, value, offset, isBigEndian,
      23, 4);
}

Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {
  writeFloat(this, value, offset, false, noAssert);
};

Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {
  writeFloat(this, value, offset, true, noAssert);
};

function writeDouble(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 7 < buffer.length,
        'Trying to write beyond buffer length');

    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  require('./buffer_ieee754').writeIEEE754(buffer, value, offset, isBigEndian,
      52, 8);
}

Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
  writeDouble(this, value, offset, false, noAssert);
};

Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
  writeDouble(this, value, offset, true, noAssert);
};

SlowBuffer.prototype.readUInt8 = Buffer.prototype.readUInt8;
SlowBuffer.prototype.readUInt16LE = Buffer.prototype.readUInt16LE;
SlowBuffer.prototype.readUInt16BE = Buffer.prototype.readUInt16BE;
SlowBuffer.prototype.readUInt32LE = Buffer.prototype.readUInt32LE;
SlowBuffer.prototype.readUInt32BE = Buffer.prototype.readUInt32BE;
SlowBuffer.prototype.readInt8 = Buffer.prototype.readInt8;
SlowBuffer.prototype.readInt16LE = Buffer.prototype.readInt16LE;
SlowBuffer.prototype.readInt16BE = Buffer.prototype.readInt16BE;
SlowBuffer.prototype.readInt32LE = Buffer.prototype.readInt32LE;
SlowBuffer.prototype.readInt32BE = Buffer.prototype.readInt32BE;
SlowBuffer.prototype.readFloatLE = Buffer.prototype.readFloatLE;
SlowBuffer.prototype.readFloatBE = Buffer.prototype.readFloatBE;
SlowBuffer.prototype.readDoubleLE = Buffer.prototype.readDoubleLE;
SlowBuffer.prototype.readDoubleBE = Buffer.prototype.readDoubleBE;
SlowBuffer.prototype.writeUInt8 = Buffer.prototype.writeUInt8;
SlowBuffer.prototype.writeUInt16LE = Buffer.prototype.writeUInt16LE;
SlowBuffer.prototype.writeUInt16BE = Buffer.prototype.writeUInt16BE;
SlowBuffer.prototype.writeUInt32LE = Buffer.prototype.writeUInt32LE;
SlowBuffer.prototype.writeUInt32BE = Buffer.prototype.writeUInt32BE;
SlowBuffer.prototype.writeInt8 = Buffer.prototype.writeInt8;
SlowBuffer.prototype.writeInt16LE = Buffer.prototype.writeInt16LE;
SlowBuffer.prototype.writeInt16BE = Buffer.prototype.writeInt16BE;
SlowBuffer.prototype.writeInt32LE = Buffer.prototype.writeInt32LE;
SlowBuffer.prototype.writeInt32BE = Buffer.prototype.writeInt32BE;
SlowBuffer.prototype.writeFloatLE = Buffer.prototype.writeFloatLE;
SlowBuffer.prototype.writeFloatBE = Buffer.prototype.writeFloatBE;
SlowBuffer.prototype.writeDoubleLE = Buffer.prototype.writeDoubleLE;
SlowBuffer.prototype.writeDoubleBE = Buffer.prototype.writeDoubleBE;

},{"assert":1,"./buffer_ieee754":8,"base64-js":9}],9:[function(require,module,exports){
(function (exports) {
	'use strict';

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	function b64ToByteArray(b64) {
		var i, j, l, tmp, placeHolders, arr;
	
		if (b64.length % 4 > 0) {
			throw 'Invalid string. Length must be a multiple of 4';
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		placeHolders = b64.indexOf('=');
		placeHolders = placeHolders > 0 ? b64.length - placeHolders : 0;

		// base64 is 4/3 + up to two characters of the original data
		arr = [];//new Uint8Array(b64.length * 3 / 4 - placeHolders);

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length;

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (lookup.indexOf(b64[i]) << 18) | (lookup.indexOf(b64[i + 1]) << 12) | (lookup.indexOf(b64[i + 2]) << 6) | lookup.indexOf(b64[i + 3]);
			arr.push((tmp & 0xFF0000) >> 16);
			arr.push((tmp & 0xFF00) >> 8);
			arr.push(tmp & 0xFF);
		}

		if (placeHolders === 2) {
			tmp = (lookup.indexOf(b64[i]) << 2) | (lookup.indexOf(b64[i + 1]) >> 4);
			arr.push(tmp & 0xFF);
		} else if (placeHolders === 1) {
			tmp = (lookup.indexOf(b64[i]) << 10) | (lookup.indexOf(b64[i + 1]) << 4) | (lookup.indexOf(b64[i + 2]) >> 2);
			arr.push((tmp >> 8) & 0xFF);
			arr.push(tmp & 0xFF);
		}

		return arr;
	}

	function uint8ToBase64(uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length;

		function tripletToBase64 (num) {
			return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
		};

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
			output += tripletToBase64(temp);
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1];
				output += lookup[temp >> 2];
				output += lookup[(temp << 4) & 0x3F];
				output += '==';
				break;
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
				output += lookup[temp >> 10];
				output += lookup[(temp >> 4) & 0x3F];
				output += lookup[(temp << 2) & 0x3F];
				output += '=';
				break;
		}

		return output;
	}

	module.exports.toByteArray = b64ToByteArray;
	module.exports.fromByteArray = uint8ToBase64;
}());

},{}]},{},[])
;;module.exports=require("buffer-browserify")

},{}],82:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],83:[function(require,module,exports){
// Generated by CoffeeScript 1.4.0
(function() {
  var events, isEmpty, sax,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  sax = require('sax');

  events = require('events');

  isEmpty = function(thing) {
    return typeof thing === "object" && (thing != null) && Object.keys(thing).length === 0;
  };

  exports.defaults = {
    "0.1": {
      explicitCharkey: false,
      trim: true,
      normalize: true,
      normalizeTags: false,
      attrkey: "@",
      charkey: "#",
      explicitArray: false,
      ignoreAttrs: false,
      mergeAttrs: false,
      explicitRoot: false,
      validator: null,
      xmlns: false
    },
    "0.2": {
      explicitCharkey: false,
      trim: false,
      normalize: false,
      normalizeTags: false,
      attrkey: "$",
      charkey: "_",
      explicitArray: true,
      ignoreAttrs: false,
      mergeAttrs: false,
      explicitRoot: true,
      validator: null,
      xmlns: false
    }
  };

  exports.ValidationError = (function(_super) {

    __extends(ValidationError, _super);

    function ValidationError(message) {
      this.message = message;
    }

    return ValidationError;

  })(Error);

  exports.Parser = (function(_super) {

    __extends(Parser, _super);

    function Parser(opts) {
      this.parseString = __bind(this.parseString, this);

      this.reset = __bind(this.reset, this);

      var key, value, _ref;
      this.options = {};
      _ref = exports.defaults["0.2"];
      for (key in _ref) {
        if (!__hasProp.call(_ref, key)) continue;
        value = _ref[key];
        this.options[key] = value;
      }
      for (key in opts) {
        if (!__hasProp.call(opts, key)) continue;
        value = opts[key];
        this.options[key] = value;
      }
      if (this.options.xmlns) {
        this.options.xmlnskey = this.options.attrkey + "ns";
      }
      this.reset();
    }

    Parser.prototype.reset = function() {
      var attrkey, charkey, err, stack,
        _this = this;
      this.removeAllListeners();
      this.saxParser = sax.parser(true, {
        trim: false,
        normalize: false,
        xmlns: this.options.xmlns
      });
      err = false;
      this.saxParser.onerror = function(error) {
        if (!err) {
          err = true;
          return _this.emit("error", error);
        }
      };
      this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
      this.resultObject = null;
      stack = [];
      attrkey = this.options.attrkey;
      charkey = this.options.charkey;
      this.saxParser.onopentag = function(node) {
        var key, obj, _ref;
        obj = {};
        obj[charkey] = "";
        if (!_this.options.ignoreAttrs) {
          _ref = node.attributes;
          for (key in _ref) {
            if (!__hasProp.call(_ref, key)) continue;
            if (!(attrkey in obj) && !_this.options.mergeAttrs) {
              obj[attrkey] = {};
            }
            if (_this.options.mergeAttrs) {
              obj[key] = node.attributes[key];
            } else {
              obj[attrkey][key] = node.attributes[key];
            }
          }
        }
        obj["#name"] = _this.options.normalizeTags ? node.name.toLowerCase() : node.name;
        if (_this.options.xmlns) {
          obj[_this.options.xmlnskey] = {
            uri: node.uri,
            local: node.local
          };
        }
        return stack.push(obj);
      };
      this.saxParser.onclosetag = function() {
        var node, nodeName, obj, old, s, xpath;
        obj = stack.pop();
        nodeName = obj["#name"];
        delete obj["#name"];
        s = stack[stack.length - 1];
        if (obj[charkey].match(/^\s*$/)) {
          delete obj[charkey];
        } else {
          if (_this.options.trim) {
            obj[charkey] = obj[charkey].trim();
          }
          if (_this.options.normalize) {
            obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
          }
          if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
            obj = obj[charkey];
          }
        }
        if (_this.options.emptyTag !== void 0 && isEmpty(obj)) {
          obj = _this.options.emptyTag;
        }
        if (_this.options.validator != null) {
          xpath = "/" + ((function() {
            var _i, _len, _results;
            _results = [];
            for (_i = 0, _len = stack.length; _i < _len; _i++) {
              node = stack[_i];
              _results.push(node["#name"]);
            }
            return _results;
          })()).concat(nodeName).join("/");
          obj = _this.options.validator(xpath, s && s[nodeName], obj);
        }
        if (stack.length > 0) {
          if (!_this.options.explicitArray) {
            if (!(nodeName in s)) {
              return s[nodeName] = obj;
            } else if (s[nodeName] instanceof Array) {
              return s[nodeName].push(obj);
            } else {
              old = s[nodeName];
              s[nodeName] = [old];
              return s[nodeName].push(obj);
            }
          } else {
            if (!(s[nodeName] instanceof Array)) {
              s[nodeName] = [];
            }
            return s[nodeName].push(obj);
          }
        } else {
          if (_this.options.explicitRoot) {
            old = obj;
            obj = {};
            obj[nodeName] = old;
          }
          _this.resultObject = obj;
          return _this.emit("end", _this.resultObject);
        }
      };
      return this.saxParser.ontext = this.saxParser.oncdata = function(text) {
        var s;
        s = stack[stack.length - 1];
        if (s) {
          return s[charkey] += text;
        }
      };
    };

    Parser.prototype.parseString = function(str, cb) {
      if ((cb != null) && typeof cb === "function") {
        this.on("end", function(result) {
          this.reset();
          return cb(null, result);
        });
        this.on("error", function(err) {
          this.reset();
          return cb(err);
        });
      }
      if (str.toString().trim() === '') {
        this.emit("end", null);
        return true;
      }
      try {
        return this.saxParser.write(str.toString());
      } catch (ex) {
        return this.emit("error", ex.message);
      }
    };

    return Parser;

  })(events.EventEmitter);

  exports.parseString = function(str, a, b) {
    var cb, options, parser;
    if (b != null) {
      if (typeof b === 'function') {
        cb = b;
      }
      if (typeof a === 'object') {
        options = a;
      }
    } else {
      if (typeof a === 'function') {
        cb = a;
      }
      options = {};
    }
    parser = new exports.Parser(options);
    return parser.parseString(str, cb);
  };

}).call(this);

},{"events":62,"sax":84}],84:[function(require,module,exports){
// wrapper for non-node envs
;(function (sax) {

sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }
sax.SAXParser = SAXParser
sax.SAXStream = SAXStream
sax.createStream = createStream

// When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
// When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
// since that's the earliest that a buffer overrun could occur.  This way, checks are
// as rare as required, but as often as necessary to ensure never crossing this bound.
// Furthermore, buffers are only tested at most once per write(), so passing a very
// large string into write() might have undesirable effects, but this is manageable by
// the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
// edge case, result in creating at most one complete copy of the string passed in.
// Set to Infinity to have unlimited buffers.
sax.MAX_BUFFER_LENGTH = 64 * 1024

var buffers = [
  "comment", "sgmlDecl", "textNode", "tagName", "doctype",
  "procInstName", "procInstBody", "entity", "attribName",
  "attribValue", "cdata", "script"
]

sax.EVENTS = // for discoverability.
  [ "text"
  , "processinginstruction"
  , "sgmldeclaration"
  , "doctype"
  , "comment"
  , "attribute"
  , "opentag"
  , "closetag"
  , "opencdata"
  , "cdata"
  , "closecdata"
  , "error"
  , "end"
  , "ready"
  , "script"
  , "opennamespace"
  , "closenamespace"
  ]

function SAXParser (strict, opt) {
  if (!(this instanceof SAXParser)) return new SAXParser(strict, opt)

  var parser = this
  clearBuffers(parser)
  parser.q = parser.c = ""
  parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH
  parser.opt = opt || {}
  parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags
  parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase"
  parser.tags = []
  parser.closed = parser.closedRoot = parser.sawRoot = false
  parser.tag = parser.error = null
  parser.strict = !!strict
  parser.noscript = !!(strict || parser.opt.noscript)
  parser.state = S.BEGIN
  parser.ENTITIES = Object.create(sax.ENTITIES)
  parser.attribList = []

  // namespaces form a prototype chain.
  // it always points at the current tag,
  // which protos to its parent tag.
  if (parser.opt.xmlns) parser.ns = Object.create(rootNS)

  // mostly just for error reporting
  parser.trackPosition = parser.opt.position !== false
  if (parser.trackPosition) {
    parser.position = parser.line = parser.column = 0
  }
  emit(parser, "onready")
}

if (!Object.create) Object.create = function (o) {
  function f () { this.__proto__ = o }
  f.prototype = o
  return new f
}

if (!Object.getPrototypeOf) Object.getPrototypeOf = function (o) {
  return o.__proto__
}

if (!Object.keys) Object.keys = function (o) {
  var a = []
  for (var i in o) if (o.hasOwnProperty(i)) a.push(i)
  return a
}

function checkBufferLength (parser) {
  var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)
    , maxActual = 0
  for (var i = 0, l = buffers.length; i < l; i ++) {
    var len = parser[buffers[i]].length
    if (len > maxAllowed) {
      // Text/cdata nodes can get big, and since they're buffered,
      // we can get here under normal conditions.
      // Avoid issues by emitting the text node now,
      // so at least it won't get any bigger.
      switch (buffers[i]) {
        case "textNode":
          closeText(parser)
        break

        case "cdata":
          emitNode(parser, "oncdata", parser.cdata)
          parser.cdata = ""
        break

        case "script":
          emitNode(parser, "onscript", parser.script)
          parser.script = ""
        break

        default:
          error(parser, "Max buffer length exceeded: "+buffers[i])
      }
    }
    maxActual = Math.max(maxActual, len)
  }
  // schedule the next check for the earliest possible buffer overrun.
  parser.bufferCheckPosition = (sax.MAX_BUFFER_LENGTH - maxActual)
                             + parser.position
}

function clearBuffers (parser) {
  for (var i = 0, l = buffers.length; i < l; i ++) {
    parser[buffers[i]] = ""
  }
}

SAXParser.prototype =
  { end: function () { end(this) }
  , write: write
  , resume: function () { this.error = null; return this }
  , close: function () { return this.write(null) }
  }

try {
  var Stream = require("stream").Stream
} catch (ex) {
  var Stream = function () {}
}


var streamWraps = sax.EVENTS.filter(function (ev) {
  return ev !== "error" && ev !== "end"
})

function createStream (strict, opt) {
  return new SAXStream(strict, opt)
}

function SAXStream (strict, opt) {
  if (!(this instanceof SAXStream)) return new SAXStream(strict, opt)

  Stream.apply(this)

  this._parser = new SAXParser(strict, opt)
  this.writable = true
  this.readable = true


  var me = this

  this._parser.onend = function () {
    me.emit("end")
  }

  this._parser.onerror = function (er) {
    me.emit("error", er)

    // if didn't throw, then means error was handled.
    // go ahead and clear error, so we can write again.
    me._parser.error = null
  }

  streamWraps.forEach(function (ev) {
    Object.defineProperty(me, "on" + ev, {
      get: function () { return me._parser["on" + ev] },
      set: function (h) {
        if (!h) {
          me.removeAllListeners(ev)
          return me._parser["on"+ev] = h
        }
        me.on(ev, h)
      },
      enumerable: true,
      configurable: false
    })
  })
}

SAXStream.prototype = Object.create(Stream.prototype,
  { constructor: { value: SAXStream } })

SAXStream.prototype.write = function (data) {
  this._parser.write(data.toString())
  this.emit("data", data)
  return true
}

SAXStream.prototype.end = function (chunk) {
  if (chunk && chunk.length) this._parser.write(chunk.toString())
  this._parser.end()
  return true
}

SAXStream.prototype.on = function (ev, handler) {
  var me = this
  if (!me._parser["on"+ev] && streamWraps.indexOf(ev) !== -1) {
    me._parser["on"+ev] = function () {
      var args = arguments.length === 1 ? [arguments[0]]
               : Array.apply(null, arguments)
      args.splice(0, 0, ev)
      me.emit.apply(me, args)
    }
  }

  return Stream.prototype.on.call(me, ev, handler)
}



// character classes and tokens
var whitespace = "\r\n\t "
  // this really needs to be replaced with character classes.
  // XML allows all manner of ridiculous numbers and digits.
  , number = "0124356789"
  , letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // (Letter | "_" | ":")
  , quote = "'\""
  , entity = number+letter+"#"
  , attribEnd = whitespace + ">"
  , CDATA = "[CDATA["
  , DOCTYPE = "DOCTYPE"
  , XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace"
  , XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/"
  , rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }

// turn all the string character sets into character class objects.
whitespace = charClass(whitespace)
number = charClass(number)
letter = charClass(letter)

// http://www.w3.org/TR/REC-xml/#NT-NameStartChar
// This implementation works on strings, a single character at a time
// as such, it cannot ever support astral-plane characters (10000-EFFFF)
// without a significant breaking change to either this  parser, or the
// JavaScript language.  Implementation of an emoji-capable xml parser
// is left as an exercise for the reader.
var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/

var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/

quote = charClass(quote)
entity = charClass(entity)
attribEnd = charClass(attribEnd)

function charClass (str) {
  return str.split("").reduce(function (s, c) {
    s[c] = true
    return s
  }, {})
}

function isRegExp (c) {
  return Object.prototype.toString.call(c) === '[object RegExp]'
}

function is (charclass, c) {
  return isRegExp(charclass) ? !!c.match(charclass) : charclass[c]
}

function not (charclass, c) {
  return !is(charclass, c)
}

var S = 0
sax.STATE =
{ BEGIN                     : S++
, TEXT                      : S++ // general stuff
, TEXT_ENTITY               : S++ // &amp and such.
, OPEN_WAKA                 : S++ // <
, SGML_DECL                 : S++ // <!BLARG
, SGML_DECL_QUOTED          : S++ // <!BLARG foo "bar
, DOCTYPE                   : S++ // <!DOCTYPE
, DOCTYPE_QUOTED            : S++ // <!DOCTYPE "//blah
, DOCTYPE_DTD               : S++ // <!DOCTYPE "//blah" [ ...
, DOCTYPE_DTD_QUOTED        : S++ // <!DOCTYPE "//blah" [ "foo
, COMMENT_STARTING          : S++ // <!-
, COMMENT                   : S++ // <!--
, COMMENT_ENDING            : S++ // <!-- blah -
, COMMENT_ENDED             : S++ // <!-- blah --
, CDATA                     : S++ // <![CDATA[ something
, CDATA_ENDING              : S++ // ]
, CDATA_ENDING_2            : S++ // ]]
, PROC_INST                 : S++ // <?hi
, PROC_INST_BODY            : S++ // <?hi there
, PROC_INST_ENDING          : S++ // <?hi "there" ?
, OPEN_TAG                  : S++ // <strong
, OPEN_TAG_SLASH            : S++ // <strong /
, ATTRIB                    : S++ // <a
, ATTRIB_NAME               : S++ // <a foo
, ATTRIB_NAME_SAW_WHITE     : S++ // <a foo _
, ATTRIB_VALUE              : S++ // <a foo=
, ATTRIB_VALUE_QUOTED       : S++ // <a foo="bar
, ATTRIB_VALUE_UNQUOTED     : S++ // <a foo=bar
, ATTRIB_VALUE_ENTITY_Q     : S++ // <foo bar="&quot;"
, ATTRIB_VALUE_ENTITY_U     : S++ // <foo bar=&quot;
, CLOSE_TAG                 : S++ // </a
, CLOSE_TAG_SAW_WHITE       : S++ // </a   >
, SCRIPT                    : S++ // <script> ...
, SCRIPT_ENDING             : S++ // <script> ... <
}

sax.ENTITIES =
{ "amp" : "&"
, "gt" : ">"
, "lt" : "<"
, "quot" : "\""
, "apos" : "'"
, "AElig" : 198
, "Aacute" : 193
, "Acirc" : 194
, "Agrave" : 192
, "Aring" : 197
, "Atilde" : 195
, "Auml" : 196
, "Ccedil" : 199
, "ETH" : 208
, "Eacute" : 201
, "Ecirc" : 202
, "Egrave" : 200
, "Euml" : 203
, "Iacute" : 205
, "Icirc" : 206
, "Igrave" : 204
, "Iuml" : 207
, "Ntilde" : 209
, "Oacute" : 211
, "Ocirc" : 212
, "Ograve" : 210
, "Oslash" : 216
, "Otilde" : 213
, "Ouml" : 214
, "THORN" : 222
, "Uacute" : 218
, "Ucirc" : 219
, "Ugrave" : 217
, "Uuml" : 220
, "Yacute" : 221
, "aacute" : 225
, "acirc" : 226
, "aelig" : 230
, "agrave" : 224
, "aring" : 229
, "atilde" : 227
, "auml" : 228
, "ccedil" : 231
, "eacute" : 233
, "ecirc" : 234
, "egrave" : 232
, "eth" : 240
, "euml" : 235
, "iacute" : 237
, "icirc" : 238
, "igrave" : 236
, "iuml" : 239
, "ntilde" : 241
, "oacute" : 243
, "ocirc" : 244
, "ograve" : 242
, "oslash" : 248
, "otilde" : 245
, "ouml" : 246
, "szlig" : 223
, "thorn" : 254
, "uacute" : 250
, "ucirc" : 251
, "ugrave" : 249
, "uuml" : 252
, "yacute" : 253
, "yuml" : 255
, "copy" : 169
, "reg" : 174
, "nbsp" : 160
, "iexcl" : 161
, "cent" : 162
, "pound" : 163
, "curren" : 164
, "yen" : 165
, "brvbar" : 166
, "sect" : 167
, "uml" : 168
, "ordf" : 170
, "laquo" : 171
, "not" : 172
, "shy" : 173
, "macr" : 175
, "deg" : 176
, "plusmn" : 177
, "sup1" : 185
, "sup2" : 178
, "sup3" : 179
, "acute" : 180
, "micro" : 181
, "para" : 182
, "middot" : 183
, "cedil" : 184
, "ordm" : 186
, "raquo" : 187
, "frac14" : 188
, "frac12" : 189
, "frac34" : 190
, "iquest" : 191
, "times" : 215
, "divide" : 247
, "OElig" : 338
, "oelig" : 339
, "Scaron" : 352
, "scaron" : 353
, "Yuml" : 376
, "fnof" : 402
, "circ" : 710
, "tilde" : 732
, "Alpha" : 913
, "Beta" : 914
, "Gamma" : 915
, "Delta" : 916
, "Epsilon" : 917
, "Zeta" : 918
, "Eta" : 919
, "Theta" : 920
, "Iota" : 921
, "Kappa" : 922
, "Lambda" : 923
, "Mu" : 924
, "Nu" : 925
, "Xi" : 926
, "Omicron" : 927
, "Pi" : 928
, "Rho" : 929
, "Sigma" : 931
, "Tau" : 932
, "Upsilon" : 933
, "Phi" : 934
, "Chi" : 935
, "Psi" : 936
, "Omega" : 937
, "alpha" : 945
, "beta" : 946
, "gamma" : 947
, "delta" : 948
, "epsilon" : 949
, "zeta" : 950
, "eta" : 951
, "theta" : 952
, "iota" : 953
, "kappa" : 954
, "lambda" : 955
, "mu" : 956
, "nu" : 957
, "xi" : 958
, "omicron" : 959
, "pi" : 960
, "rho" : 961
, "sigmaf" : 962
, "sigma" : 963
, "tau" : 964
, "upsilon" : 965
, "phi" : 966
, "chi" : 967
, "psi" : 968
, "omega" : 969
, "thetasym" : 977
, "upsih" : 978
, "piv" : 982
, "ensp" : 8194
, "emsp" : 8195
, "thinsp" : 8201
, "zwnj" : 8204
, "zwj" : 8205
, "lrm" : 8206
, "rlm" : 8207
, "ndash" : 8211
, "mdash" : 8212
, "lsquo" : 8216
, "rsquo" : 8217
, "sbquo" : 8218
, "ldquo" : 8220
, "rdquo" : 8221
, "bdquo" : 8222
, "dagger" : 8224
, "Dagger" : 8225
, "bull" : 8226
, "hellip" : 8230
, "permil" : 8240
, "prime" : 8242
, "Prime" : 8243
, "lsaquo" : 8249
, "rsaquo" : 8250
, "oline" : 8254
, "frasl" : 8260
, "euro" : 8364
, "image" : 8465
, "weierp" : 8472
, "real" : 8476
, "trade" : 8482
, "alefsym" : 8501
, "larr" : 8592
, "uarr" : 8593
, "rarr" : 8594
, "darr" : 8595
, "harr" : 8596
, "crarr" : 8629
, "lArr" : 8656
, "uArr" : 8657
, "rArr" : 8658
, "dArr" : 8659
, "hArr" : 8660
, "forall" : 8704
, "part" : 8706
, "exist" : 8707
, "empty" : 8709
, "nabla" : 8711
, "isin" : 8712
, "notin" : 8713
, "ni" : 8715
, "prod" : 8719
, "sum" : 8721
, "minus" : 8722
, "lowast" : 8727
, "radic" : 8730
, "prop" : 8733
, "infin" : 8734
, "ang" : 8736
, "and" : 8743
, "or" : 8744
, "cap" : 8745
, "cup" : 8746
, "int" : 8747
, "there4" : 8756
, "sim" : 8764
, "cong" : 8773
, "asymp" : 8776
, "ne" : 8800
, "equiv" : 8801
, "le" : 8804
, "ge" : 8805
, "sub" : 8834
, "sup" : 8835
, "nsub" : 8836
, "sube" : 8838
, "supe" : 8839
, "oplus" : 8853
, "otimes" : 8855
, "perp" : 8869
, "sdot" : 8901
, "lceil" : 8968
, "rceil" : 8969
, "lfloor" : 8970
, "rfloor" : 8971
, "lang" : 9001
, "rang" : 9002
, "loz" : 9674
, "spades" : 9824
, "clubs" : 9827
, "hearts" : 9829
, "diams" : 9830
}

Object.keys(sax.ENTITIES).forEach(function (key) {
    var e = sax.ENTITIES[key]
    var s = typeof e === 'number' ? String.fromCharCode(e) : e
    sax.ENTITIES[key] = s
})

for (var S in sax.STATE) sax.STATE[sax.STATE[S]] = S

// shorthand
S = sax.STATE

function emit (parser, event, data) {
  parser[event] && parser[event](data)
}

function emitNode (parser, nodeType, data) {
  if (parser.textNode) closeText(parser)
  emit(parser, nodeType, data)
}

function closeText (parser) {
  parser.textNode = textopts(parser.opt, parser.textNode)
  if (parser.textNode) emit(parser, "ontext", parser.textNode)
  parser.textNode = ""
}

function textopts (opt, text) {
  if (opt.trim) text = text.trim()
  if (opt.normalize) text = text.replace(/\s+/g, " ")
  return text
}

function error (parser, er) {
  closeText(parser)
  if (parser.trackPosition) {
    er += "\nLine: "+parser.line+
          "\nColumn: "+parser.column+
          "\nChar: "+parser.c
  }
  er = new Error(er)
  parser.error = er
  emit(parser, "onerror", er)
  return parser
}

function end (parser) {
  if (!parser.closedRoot) strictFail(parser, "Unclosed root tag")
  if (parser.state !== S.TEXT) error(parser, "Unexpected end")
  closeText(parser)
  parser.c = ""
  parser.closed = true
  emit(parser, "onend")
  SAXParser.call(parser, parser.strict, parser.opt)
  return parser
}

function strictFail (parser, message) {
  if (typeof parser !== 'object' || !(parser instanceof SAXParser))
    throw new Error('bad call to strictFail');
  if (parser.strict) error(parser, message)
}

function newTag (parser) {
  if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()
  var parent = parser.tags[parser.tags.length - 1] || parser
    , tag = parser.tag = { name : parser.tagName, attributes : {} }

  // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
  if (parser.opt.xmlns) tag.ns = parent.ns
  parser.attribList.length = 0
}

function qname (name) {
  var i = name.indexOf(":")
    , qualName = i < 0 ? [ "", name ] : name.split(":")
    , prefix = qualName[0]
    , local = qualName[1]

  // <x "xmlns"="http://foo">
  if (name === "xmlns") {
    prefix = "xmlns"
    local = ""
  }

  return { prefix: prefix, local: local }
}

function attrib (parser) {
  if (!parser.strict) parser.attribName = parser.attribName[parser.looseCase]()

  if (parser.attribList.indexOf(parser.attribName) !== -1 ||
      parser.tag.attributes.hasOwnProperty(parser.attribName)) {
    return parser.attribName = parser.attribValue = ""
  }

  if (parser.opt.xmlns) {
    var qn = qname(parser.attribName)
      , prefix = qn.prefix
      , local = qn.local

    if (prefix === "xmlns") {
      // namespace binding attribute; push the binding into scope
      if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
        strictFail( parser
                  , "xml: prefix must be bound to " + XML_NAMESPACE + "\n"
                  + "Actual: " + parser.attribValue )
      } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
        strictFail( parser
                  , "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\n"
                  + "Actual: " + parser.attribValue )
      } else {
        var tag = parser.tag
          , parent = parser.tags[parser.tags.length - 1] || parser
        if (tag.ns === parent.ns) {
          tag.ns = Object.create(parent.ns)
        }
        tag.ns[local] = parser.attribValue
      }
    }

    // defer onattribute events until all attributes have been seen
    // so any new bindings can take effect; preserve attribute order
    // so deferred events can be emitted in document order
    parser.attribList.push([parser.attribName, parser.attribValue])
  } else {
    // in non-xmlns mode, we can emit the event right away
    parser.tag.attributes[parser.attribName] = parser.attribValue
    emitNode( parser
            , "onattribute"
            , { name: parser.attribName
              , value: parser.attribValue } )
  }

  parser.attribName = parser.attribValue = ""
}

function openTag (parser, selfClosing) {
  if (parser.opt.xmlns) {
    // emit namespace binding events
    var tag = parser.tag

    // add namespace info to tag
    var qn = qname(parser.tagName)
    tag.prefix = qn.prefix
    tag.local = qn.local
    tag.uri = tag.ns[qn.prefix] || ""

    if (tag.prefix && !tag.uri) {
      strictFail(parser, "Unbound namespace prefix: "
                       + JSON.stringify(parser.tagName))
      tag.uri = qn.prefix
    }

    var parent = parser.tags[parser.tags.length - 1] || parser
    if (tag.ns && parent.ns !== tag.ns) {
      Object.keys(tag.ns).forEach(function (p) {
        emitNode( parser
                , "onopennamespace"
                , { prefix: p , uri: tag.ns[p] } )
      })
    }

    // handle deferred onattribute events
    // Note: do not apply default ns to attributes:
    //   http://www.w3.org/TR/REC-xml-names/#defaulting
    for (var i = 0, l = parser.attribList.length; i < l; i ++) {
      var nv = parser.attribList[i]
      var name = nv[0]
        , value = nv[1]
        , qualName = qname(name)
        , prefix = qualName.prefix
        , local = qualName.local
        , uri = prefix == "" ? "" : (tag.ns[prefix] || "")
        , a = { name: name
              , value: value
              , prefix: prefix
              , local: local
              , uri: uri
              }

      // if there's any attributes with an undefined namespace,
      // then fail on them now.
      if (prefix && prefix != "xmlns" && !uri) {
        strictFail(parser, "Unbound namespace prefix: "
                         + JSON.stringify(prefix))
        a.uri = prefix
      }
      parser.tag.attributes[name] = a
      emitNode(parser, "onattribute", a)
    }
    parser.attribList.length = 0
  }

  parser.tag.isSelfClosing = !!selfClosing

  // process the tag
  parser.sawRoot = true
  parser.tags.push(parser.tag)
  emitNode(parser, "onopentag", parser.tag)
  if (!selfClosing) {
    // special case for <script> in non-strict mode.
    if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
      parser.state = S.SCRIPT
    } else {
      parser.state = S.TEXT
    }
    parser.tag = null
    parser.tagName = ""
  }
  parser.attribName = parser.attribValue = ""
  parser.attribList.length = 0
}

function closeTag (parser) {
  if (!parser.tagName) {
    strictFail(parser, "Weird empty close tag.")
    parser.textNode += "</>"
    parser.state = S.TEXT
    return
  }

  if (parser.script) {
    if (parser.tagName !== "script") {
      parser.script += "</" + parser.tagName + ">"
      parser.tagName = ""
      parser.state = S.SCRIPT
      return
    }
    emitNode(parser, "onscript", parser.script)
    parser.script = ""
  }

  // first make sure that the closing tag actually exists.
  // <a><b></c></b></a> will close everything, otherwise.
  var t = parser.tags.length
  var tagName = parser.tagName
  if (!parser.strict) tagName = tagName[parser.looseCase]()
  var closeTo = tagName
  while (t --) {
    var close = parser.tags[t]
    if (close.name !== closeTo) {
      // fail the first time in strict mode
      strictFail(parser, "Unexpected close tag")
    } else break
  }

  // didn't find it.  we already failed for strict, so just abort.
  if (t < 0) {
    strictFail(parser, "Unmatched closing tag: "+parser.tagName)
    parser.textNode += "</" + parser.tagName + ">"
    parser.state = S.TEXT
    return
  }
  parser.tagName = tagName
  var s = parser.tags.length
  while (s --> t) {
    var tag = parser.tag = parser.tags.pop()
    parser.tagName = parser.tag.name
    emitNode(parser, "onclosetag", parser.tagName)

    var x = {}
    for (var i in tag.ns) x[i] = tag.ns[i]

    var parent = parser.tags[parser.tags.length - 1] || parser
    if (parser.opt.xmlns && tag.ns !== parent.ns) {
      // remove namespace bindings introduced by tag
      Object.keys(tag.ns).forEach(function (p) {
        var n = tag.ns[p]
        emitNode(parser, "onclosenamespace", { prefix: p, uri: n })
      })
    }
  }
  if (t === 0) parser.closedRoot = true
  parser.tagName = parser.attribValue = parser.attribName = ""
  parser.attribList.length = 0
  parser.state = S.TEXT
}

function parseEntity (parser) {
  var entity = parser.entity
    , entityLC = entity.toLowerCase()
    , num
    , numStr = ""
  if (parser.ENTITIES[entity])
    return parser.ENTITIES[entity]
  if (parser.ENTITIES[entityLC])
    return parser.ENTITIES[entityLC]
  entity = entityLC
  if (entity.charAt(0) === "#") {
    if (entity.charAt(1) === "x") {
      entity = entity.slice(2)
      num = parseInt(entity, 16)
      numStr = num.toString(16)
    } else {
      entity = entity.slice(1)
      num = parseInt(entity, 10)
      numStr = num.toString(10)
    }
  }
  entity = entity.replace(/^0+/, "")
  if (numStr.toLowerCase() !== entity) {
    strictFail(parser, "Invalid character entity")
    return "&"+parser.entity + ";"
  }
  return String.fromCharCode(num)
}

function write (chunk) {
  var parser = this
  if (this.error) throw this.error
  if (parser.closed) return error(parser,
    "Cannot write after close. Assign an onready handler.")
  if (chunk === null) return end(parser)
  var i = 0, c = ""
  while (parser.c = c = chunk.charAt(i++)) {
    if (parser.trackPosition) {
      parser.position ++
      if (c === "\n") {
        parser.line ++
        parser.column = 0
      } else parser.column ++
    }
    switch (parser.state) {

      case S.BEGIN:
        if (c === "<") {
          parser.state = S.OPEN_WAKA
          parser.startTagPosition = parser.position
        } else if (not(whitespace,c)) {
          // have to process this as a text node.
          // weird, but happens.
          strictFail(parser, "Non-whitespace before first tag.")
          parser.textNode = c
          parser.state = S.TEXT
        }
      continue

      case S.TEXT:
        if (parser.sawRoot && !parser.closedRoot) {
          var starti = i-1
          while (c && c!=="<" && c!=="&") {
            c = chunk.charAt(i++)
            if (c && parser.trackPosition) {
              parser.position ++
              if (c === "\n") {
                parser.line ++
                parser.column = 0
              } else parser.column ++
            }
          }
          parser.textNode += chunk.substring(starti, i-1)
        }
        if (c === "<") {
          parser.state = S.OPEN_WAKA
          parser.startTagPosition = parser.position
        } else {
          if (not(whitespace, c) && (!parser.sawRoot || parser.closedRoot))
            strictFail(parser, "Text data outside of root node.")
          if (c === "&") parser.state = S.TEXT_ENTITY
          else parser.textNode += c
        }
      continue

      case S.SCRIPT:
        // only non-strict
        if (c === "<") {
          parser.state = S.SCRIPT_ENDING
        } else parser.script += c
      continue

      case S.SCRIPT_ENDING:
        if (c === "/") {
          parser.state = S.CLOSE_TAG
        } else {
          parser.script += "<" + c
          parser.state = S.SCRIPT
        }
      continue

      case S.OPEN_WAKA:
        // either a /, ?, !, or text is coming next.
        if (c === "!") {
          parser.state = S.SGML_DECL
          parser.sgmlDecl = ""
        } else if (is(whitespace, c)) {
          // wait for it...
        } else if (is(nameStart,c)) {
          parser.state = S.OPEN_TAG
          parser.tagName = c
        } else if (c === "/") {
          parser.state = S.CLOSE_TAG
          parser.tagName = ""
        } else if (c === "?") {
          parser.state = S.PROC_INST
          parser.procInstName = parser.procInstBody = ""
        } else {
          strictFail(parser, "Unencoded <")
          // if there was some whitespace, then add that in.
          if (parser.startTagPosition + 1 < parser.position) {
            var pad = parser.position - parser.startTagPosition
            c = new Array(pad).join(" ") + c
          }
          parser.textNode += "<" + c
          parser.state = S.TEXT
        }
      continue

      case S.SGML_DECL:
        if ((parser.sgmlDecl+c).toUpperCase() === CDATA) {
          emitNode(parser, "onopencdata")
          parser.state = S.CDATA
          parser.sgmlDecl = ""
          parser.cdata = ""
        } else if (parser.sgmlDecl+c === "--") {
          parser.state = S.COMMENT
          parser.comment = ""
          parser.sgmlDecl = ""
        } else if ((parser.sgmlDecl+c).toUpperCase() === DOCTYPE) {
          parser.state = S.DOCTYPE
          if (parser.doctype || parser.sawRoot) strictFail(parser,
            "Inappropriately located doctype declaration")
          parser.doctype = ""
          parser.sgmlDecl = ""
        } else if (c === ">") {
          emitNode(parser, "onsgmldeclaration", parser.sgmlDecl)
          parser.sgmlDecl = ""
          parser.state = S.TEXT
        } else if (is(quote, c)) {
          parser.state = S.SGML_DECL_QUOTED
          parser.sgmlDecl += c
        } else parser.sgmlDecl += c
      continue

      case S.SGML_DECL_QUOTED:
        if (c === parser.q) {
          parser.state = S.SGML_DECL
          parser.q = ""
        }
        parser.sgmlDecl += c
      continue

      case S.DOCTYPE:
        if (c === ">") {
          parser.state = S.TEXT
          emitNode(parser, "ondoctype", parser.doctype)
          parser.doctype = true // just remember that we saw it.
        } else {
          parser.doctype += c
          if (c === "[") parser.state = S.DOCTYPE_DTD
          else if (is(quote, c)) {
            parser.state = S.DOCTYPE_QUOTED
            parser.q = c
          }
        }
      continue

      case S.DOCTYPE_QUOTED:
        parser.doctype += c
        if (c === parser.q) {
          parser.q = ""
          parser.state = S.DOCTYPE
        }
      continue

      case S.DOCTYPE_DTD:
        parser.doctype += c
        if (c === "]") parser.state = S.DOCTYPE
        else if (is(quote,c)) {
          parser.state = S.DOCTYPE_DTD_QUOTED
          parser.q = c
        }
      continue

      case S.DOCTYPE_DTD_QUOTED:
        parser.doctype += c
        if (c === parser.q) {
          parser.state = S.DOCTYPE_DTD
          parser.q = ""
        }
      continue

      case S.COMMENT:
        if (c === "-") parser.state = S.COMMENT_ENDING
        else parser.comment += c
      continue

      case S.COMMENT_ENDING:
        if (c === "-") {
          parser.state = S.COMMENT_ENDED
          parser.comment = textopts(parser.opt, parser.comment)
          if (parser.comment) emitNode(parser, "oncomment", parser.comment)
          parser.comment = ""
        } else {
          parser.comment += "-" + c
          parser.state = S.COMMENT
        }
      continue

      case S.COMMENT_ENDED:
        if (c !== ">") {
          strictFail(parser, "Malformed comment")
          // allow <!-- blah -- bloo --> in non-strict mode,
          // which is a comment of " blah -- bloo "
          parser.comment += "--" + c
          parser.state = S.COMMENT
        } else parser.state = S.TEXT
      continue

      case S.CDATA:
        if (c === "]") parser.state = S.CDATA_ENDING
        else parser.cdata += c
      continue

      case S.CDATA_ENDING:
        if (c === "]") parser.state = S.CDATA_ENDING_2
        else {
          parser.cdata += "]" + c
          parser.state = S.CDATA
        }
      continue

      case S.CDATA_ENDING_2:
        if (c === ">") {
          if (parser.cdata) emitNode(parser, "oncdata", parser.cdata)
          emitNode(parser, "onclosecdata")
          parser.cdata = ""
          parser.state = S.TEXT
        } else if (c === "]") {
          parser.cdata += "]"
        } else {
          parser.cdata += "]]" + c
          parser.state = S.CDATA
        }
      continue

      case S.PROC_INST:
        if (c === "?") parser.state = S.PROC_INST_ENDING
        else if (is(whitespace, c)) parser.state = S.PROC_INST_BODY
        else parser.procInstName += c
      continue

      case S.PROC_INST_BODY:
        if (!parser.procInstBody && is(whitespace, c)) continue
        else if (c === "?") parser.state = S.PROC_INST_ENDING
        else parser.procInstBody += c
      continue

      case S.PROC_INST_ENDING:
        if (c === ">") {
          emitNode(parser, "onprocessinginstruction", {
            name : parser.procInstName,
            body : parser.procInstBody
          })
          parser.procInstName = parser.procInstBody = ""
          parser.state = S.TEXT
        } else {
          parser.procInstBody += "?" + c
          parser.state = S.PROC_INST_BODY
        }
      continue

      case S.OPEN_TAG:
        if (is(nameBody, c)) parser.tagName += c
        else {
          newTag(parser)
          if (c === ">") openTag(parser)
          else if (c === "/") parser.state = S.OPEN_TAG_SLASH
          else {
            if (not(whitespace, c)) strictFail(
              parser, "Invalid character in tag name")
            parser.state = S.ATTRIB
          }
        }
      continue

      case S.OPEN_TAG_SLASH:
        if (c === ">") {
          openTag(parser, true)
          closeTag(parser)
        } else {
          strictFail(parser, "Forward-slash in opening tag not followed by >")
          parser.state = S.ATTRIB
        }
      continue

      case S.ATTRIB:
        // haven't read the attribute name yet.
        if (is(whitespace, c)) continue
        else if (c === ">") openTag(parser)
        else if (c === "/") parser.state = S.OPEN_TAG_SLASH
        else if (is(nameStart, c)) {
          parser.attribName = c
          parser.attribValue = ""
          parser.state = S.ATTRIB_NAME
        } else strictFail(parser, "Invalid attribute name")
      continue

      case S.ATTRIB_NAME:
        if (c === "=") parser.state = S.ATTRIB_VALUE
        else if (c === ">") {
          strictFail(parser, "Attribute without value")
          parser.attribValue = parser.attribName
          attrib(parser)
          openTag(parser)
        }
        else if (is(whitespace, c)) parser.state = S.ATTRIB_NAME_SAW_WHITE
        else if (is(nameBody, c)) parser.attribName += c
        else strictFail(parser, "Invalid attribute name")
      continue

      case S.ATTRIB_NAME_SAW_WHITE:
        if (c === "=") parser.state = S.ATTRIB_VALUE
        else if (is(whitespace, c)) continue
        else {
          strictFail(parser, "Attribute without value")
          parser.tag.attributes[parser.attribName] = ""
          parser.attribValue = ""
          emitNode(parser, "onattribute",
                   { name : parser.attribName, value : "" })
          parser.attribName = ""
          if (c === ">") openTag(parser)
          else if (is(nameStart, c)) {
            parser.attribName = c
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, "Invalid attribute name")
            parser.state = S.ATTRIB
          }
        }
      continue

      case S.ATTRIB_VALUE:
        if (is(whitespace, c)) continue
        else if (is(quote, c)) {
          parser.q = c
          parser.state = S.ATTRIB_VALUE_QUOTED
        } else {
          strictFail(parser, "Unquoted attribute value")
          parser.state = S.ATTRIB_VALUE_UNQUOTED
          parser.attribValue = c
        }
      continue

      case S.ATTRIB_VALUE_QUOTED:
        if (c !== parser.q) {
          if (c === "&") parser.state = S.ATTRIB_VALUE_ENTITY_Q
          else parser.attribValue += c
          continue
        }
        attrib(parser)
        parser.q = ""
        parser.state = S.ATTRIB
      continue

      case S.ATTRIB_VALUE_UNQUOTED:
        if (not(attribEnd,c)) {
          if (c === "&") parser.state = S.ATTRIB_VALUE_ENTITY_U
          else parser.attribValue += c
          continue
        }
        attrib(parser)
        if (c === ">") openTag(parser)
        else parser.state = S.ATTRIB
      continue

      case S.CLOSE_TAG:
        if (!parser.tagName) {
          if (is(whitespace, c)) continue
          else if (not(nameStart, c)) {
            if (parser.script) {
              parser.script += "</" + c
              parser.state = S.SCRIPT
            } else {
              strictFail(parser, "Invalid tagname in closing tag.")
            }
          } else parser.tagName = c
        }
        else if (c === ">") closeTag(parser)
        else if (is(nameBody, c)) parser.tagName += c
        else if (parser.script) {
          parser.script += "</" + parser.tagName
          parser.tagName = ""
          parser.state = S.SCRIPT
        } else {
          if (not(whitespace, c)) strictFail(parser,
            "Invalid tagname in closing tag")
          parser.state = S.CLOSE_TAG_SAW_WHITE
        }
      continue

      case S.CLOSE_TAG_SAW_WHITE:
        if (is(whitespace, c)) continue
        if (c === ">") closeTag(parser)
        else strictFail(parser, "Invalid characters in closing tag")
      continue

      case S.TEXT_ENTITY:
      case S.ATTRIB_VALUE_ENTITY_Q:
      case S.ATTRIB_VALUE_ENTITY_U:
        switch(parser.state) {
          case S.TEXT_ENTITY:
            var returnState = S.TEXT, buffer = "textNode"
          break

          case S.ATTRIB_VALUE_ENTITY_Q:
            var returnState = S.ATTRIB_VALUE_QUOTED, buffer = "attribValue"
          break

          case S.ATTRIB_VALUE_ENTITY_U:
            var returnState = S.ATTRIB_VALUE_UNQUOTED, buffer = "attribValue"
          break
        }
        if (c === ";") {
          parser[buffer] += parseEntity(parser)
          parser.entity = ""
          parser.state = returnState
        }
        else if (is(entity, c)) parser.entity += c
        else {
          strictFail(parser, "Invalid character entity")
          parser[buffer] += "&" + parser.entity + c
          parser.entity = ""
          parser.state = returnState
        }
      continue

      default:
        throw new Error(parser, "Unknown state: " + parser.state)
    }
  } // while
  // cdata blocks can get very big under normal conditions. emit and move on.
  // if (parser.state === S.CDATA && parser.cdata) {
  //   emitNode(parser, "oncdata", parser.cdata)
  //   parser.cdata = ""
  // }
  if (parser.position >= parser.bufferCheckPosition) checkBufferLength(parser)
  return parser
}

})(typeof exports === "undefined" ? sax = {} : exports)

},{"stream":66}],85:[function(require,module,exports){
// Generated by CoffeeScript 1.3.3
(function() {
  var XMLBuilder, XMLFragment;

  XMLFragment = require('./XMLFragment');

  XMLBuilder = (function() {

    function XMLBuilder(name, xmldec, doctype) {
      var att, child, _ref;
      this.children = [];
      this.rootObject = null;
      if (this.is(name, 'Object')) {
        _ref = [name, xmldec], xmldec = _ref[0], doctype = _ref[1];
        name = null;
      }
      if (name != null) {
        name = '' + name || '';
        if (xmldec == null) {
          xmldec = {
            'version': '1.0'
          };
        }
      }
      if ((xmldec != null) && !(xmldec.version != null)) {
        throw new Error("Version number is required");
      }
      if (xmldec != null) {
        xmldec.version = '' + xmldec.version || '';
        if (!xmldec.version.match(/1\.[0-9]+/)) {
          throw new Error("Invalid version number: " + xmldec.version);
        }
        att = {
          version: xmldec.version
        };
        if (xmldec.encoding != null) {
          xmldec.encoding = '' + xmldec.encoding || '';
          if (!xmldec.encoding.match(/[A-Za-z](?:[A-Za-z0-9._-]|-)*/)) {
            throw new Error("Invalid encoding: " + xmldec.encoding);
          }
          att.encoding = xmldec.encoding;
        }
        if (xmldec.standalone != null) {
          att.standalone = xmldec.standalone ? "yes" : "no";
        }
        child = new XMLFragment(this, '?xml', att);
        this.children.push(child);
      }
      if (doctype != null) {
        att = {};
        if (name != null) {
          att.name = name;
        }
        if (doctype.ext != null) {
          doctype.ext = '' + doctype.ext || '';
          att.ext = doctype.ext;
        }
        child = new XMLFragment(this, '!DOCTYPE', att);
        this.children.push(child);
      }
      if (name != null) {
        this.begin(name);
      }
    }

    XMLBuilder.prototype.begin = function(name, xmldec, doctype) {
      var doc, root;
      if (!(name != null)) {
        throw new Error("Root element needs a name");
      }
      if (this.rootObject) {
        this.children = [];
        this.rootObject = null;
      }
      if (xmldec != null) {
        doc = new XMLBuilder(name, xmldec, doctype);
        return doc.root();
      }
      name = '' + name || '';
      root = new XMLFragment(this, name, {});
      root.isRoot = true;
      root.documentObject = this;
      this.children.push(root);
      this.rootObject = root;
      return root;
    };

    XMLBuilder.prototype.root = function() {
      return this.rootObject;
    };

    XMLBuilder.prototype.end = function(options) {
      return toString(options);
    };

    XMLBuilder.prototype.toString = function(options) {
      var child, r, _i, _len, _ref;
      r = '';
      _ref = this.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        r += child.toString(options);
      }
      return r;
    };

    XMLBuilder.prototype.is = function(obj, type) {
      var clas;
      clas = Object.prototype.toString.call(obj).slice(8, -1);
      return (obj != null) && clas === type;
    };

    return XMLBuilder;

  })();

  module.exports = XMLBuilder;

}).call(this);

},{"./XMLFragment":86}],86:[function(require,module,exports){
// Generated by CoffeeScript 1.3.3
(function() {
  var XMLFragment,
    __hasProp = {}.hasOwnProperty;

  XMLFragment = (function() {

    function XMLFragment(parent, name, attributes, text) {
      this.isRoot = false;
      this.documentObject = null;
      this.parent = parent;
      this.name = name;
      this.attributes = attributes;
      this.value = text;
      this.children = [];
    }

    XMLFragment.prototype.element = function(name, attributes, text) {
      var child, key, val, _ref, _ref1;
      if (!(name != null)) {
        throw new Error("Missing element name");
      }
      name = '' + name || '';
      this.assertLegalChar(name);
      if (attributes == null) {
        attributes = {};
      }
      if (this.is(attributes, 'String') && this.is(text, 'Object')) {
        _ref = [text, attributes], attributes = _ref[0], text = _ref[1];
      } else if (this.is(attributes, 'String')) {
        _ref1 = [{}, attributes], attributes = _ref1[0], text = _ref1[1];
      }
      for (key in attributes) {
        if (!__hasProp.call(attributes, key)) continue;
        val = attributes[key];
        val = '' + val || '';
        attributes[key] = this.escape(val);
      }
      child = new XMLFragment(this, name, attributes);
      if (text != null) {
        text = '' + text || '';
        text = this.escape(text);
        this.assertLegalChar(text);
        child.raw(text);
      }
      this.children.push(child);
      return child;
    };

    XMLFragment.prototype.insertBefore = function(name, attributes, text) {
      var child, i, key, val, _ref, _ref1;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      if (!(name != null)) {
        throw new Error("Missing element name");
      }
      name = '' + name || '';
      this.assertLegalChar(name);
      if (attributes == null) {
        attributes = {};
      }
      if (this.is(attributes, 'String') && this.is(text, 'Object')) {
        _ref = [text, attributes], attributes = _ref[0], text = _ref[1];
      } else if (this.is(attributes, 'String')) {
        _ref1 = [{}, attributes], attributes = _ref1[0], text = _ref1[1];
      }
      for (key in attributes) {
        if (!__hasProp.call(attributes, key)) continue;
        val = attributes[key];
        val = '' + val || '';
        attributes[key] = this.escape(val);
      }
      child = new XMLFragment(this.parent, name, attributes);
      if (text != null) {
        text = '' + text || '';
        text = this.escape(text);
        this.assertLegalChar(text);
        child.raw(text);
      }
      i = this.parent.children.indexOf(this);
      this.parent.children.splice(i, 0, child);
      return child;
    };

    XMLFragment.prototype.insertAfter = function(name, attributes, text) {
      var child, i, key, val, _ref, _ref1;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      if (!(name != null)) {
        throw new Error("Missing element name");
      }
      name = '' + name || '';
      this.assertLegalChar(name);
      if (attributes == null) {
        attributes = {};
      }
      if (this.is(attributes, 'String') && this.is(text, 'Object')) {
        _ref = [text, attributes], attributes = _ref[0], text = _ref[1];
      } else if (this.is(attributes, 'String')) {
        _ref1 = [{}, attributes], attributes = _ref1[0], text = _ref1[1];
      }
      for (key in attributes) {
        if (!__hasProp.call(attributes, key)) continue;
        val = attributes[key];
        val = '' + val || '';
        attributes[key] = this.escape(val);
      }
      child = new XMLFragment(this.parent, name, attributes);
      if (text != null) {
        text = '' + text || '';
        text = this.escape(text);
        this.assertLegalChar(text);
        child.raw(text);
      }
      i = this.parent.children.indexOf(this);
      this.parent.children.splice(i + 1, 0, child);
      return child;
    };

    XMLFragment.prototype.remove = function() {
      var i, _ref;
      if (this.isRoot) {
        throw new Error("Cannot remove the root element");
      }
      i = this.parent.children.indexOf(this);
      [].splice.apply(this.parent.children, [i, i - i + 1].concat(_ref = [])), _ref;
      return this.parent;
    };

    XMLFragment.prototype.text = function(value) {
      var child;
      if (!(value != null)) {
        throw new Error("Missing element text");
      }
      value = '' + value || '';
      value = this.escape(value);
      this.assertLegalChar(value);
      child = new XMLFragment(this, '', {}, value);
      this.children.push(child);
      return this;
    };

    XMLFragment.prototype.cdata = function(value) {
      var child;
      if (!(value != null)) {
        throw new Error("Missing CDATA text");
      }
      value = '' + value || '';
      this.assertLegalChar(value);
      if (value.match(/]]>/)) {
        throw new Error("Invalid CDATA text: " + value);
      }
      child = new XMLFragment(this, '', {}, '<![CDATA[' + value + ']]>');
      this.children.push(child);
      return this;
    };

    XMLFragment.prototype.comment = function(value) {
      var child;
      if (!(value != null)) {
        throw new Error("Missing comment text");
      }
      value = '' + value || '';
      value = this.escape(value);
      this.assertLegalChar(value);
      if (value.match(/--/)) {
        throw new Error("Comment text cannot contain double-hypen: " + value);
      }
      child = new XMLFragment(this, '', {}, '<!-- ' + value + ' -->');
      this.children.push(child);
      return this;
    };

    XMLFragment.prototype.raw = function(value) {
      var child;
      if (!(value != null)) {
        throw new Error("Missing raw text");
      }
      value = '' + value || '';
      child = new XMLFragment(this, '', {}, value);
      this.children.push(child);
      return this;
    };

    XMLFragment.prototype.up = function() {
      if (this.isRoot) {
        throw new Error("This node has no parent. Use doc() if you need to get the document object.");
      }
      return this.parent;
    };

    XMLFragment.prototype.root = function() {
      var child;
      if (this.isRoot) {
        return this;
      }
      child = this.parent;
      while (!child.isRoot) {
        child = child.parent;
      }
      return child;
    };

    XMLFragment.prototype.document = function() {
      return this.root().documentObject;
    };

    XMLFragment.prototype.end = function(options) {
      return this.document().toString(options);
    };

    XMLFragment.prototype.prev = function() {
      var i;
      if (this.isRoot) {
        throw new Error("Root node has no siblings");
      }
      i = this.parent.children.indexOf(this);
      if (i < 1) {
        throw new Error("Already at the first node");
      }
      return this.parent.children[i - 1];
    };

    XMLFragment.prototype.next = function() {
      var i;
      if (this.isRoot) {
        throw new Error("Root node has no siblings");
      }
      i = this.parent.children.indexOf(this);
      if (i === -1 || i === this.parent.children.length - 1) {
        throw new Error("Already at the last node");
      }
      return this.parent.children[i + 1];
    };

    XMLFragment.prototype.clone = function(deep) {
      var clonedSelf;
      clonedSelf = new XMLFragment(this.parent, this.name, this.attributes, this.value);
      if (deep) {
        this.children.forEach(function(child) {
          var clonedChild;
          clonedChild = child.clone(deep);
          clonedChild.parent = clonedSelf;
          return clonedSelf.children.push(clonedChild);
        });
      }
      return clonedSelf;
    };

    XMLFragment.prototype.importXMLBuilder = function(xmlbuilder) {
      var clonedRoot;
      clonedRoot = xmlbuilder.root().clone(true);
      clonedRoot.parent = this;
      this.children.push(clonedRoot);
      clonedRoot.isRoot = false;
      return this;
    };

    XMLFragment.prototype.attribute = function(name, value) {
      var _ref;
      if (!(name != null)) {
        throw new Error("Missing attribute name");
      }
      if (!(value != null)) {
        throw new Error("Missing attribute value");
      }
      name = '' + name || '';
      value = '' + value || '';
      if ((_ref = this.attributes) == null) {
        this.attributes = {};
      }
      this.attributes[name] = this.escape(value);
      return this;
    };

    XMLFragment.prototype.removeAttribute = function(name) {
      if (!(name != null)) {
        throw new Error("Missing attribute name");
      }
      name = '' + name || '';
      delete this.attributes[name];
      return this;
    };

    XMLFragment.prototype.toString = function(options, level) {
      var attName, attValue, child, indent, newline, pretty, r, space, _i, _len, _ref, _ref1;
      pretty = (options != null) && options.pretty || false;
      indent = (options != null) && options.indent || '  ';
      newline = (options != null) && options.newline || '\n';
      level || (level = 0);
      space = new Array(level + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      if (!(this.value != null)) {
        r += '<' + this.name;
      } else {
        r += '' + this.value;
      }
      _ref = this.attributes;
      for (attName in _ref) {
        attValue = _ref[attName];
        if (this.name === '!DOCTYPE') {
          r += ' ' + attValue;
        } else {
          r += ' ' + attName + '="' + attValue + '"';
        }
      }
      if (this.children.length === 0) {
        if (!(this.value != null)) {
          r += this.name === '?xml' ? '?>' : this.name === '!DOCTYPE' ? '>' : '/>';
        }
        if (pretty) {
          r += newline;
        }
      } else if (pretty && this.children.length === 1 && this.children[0].value) {
        r += '>';
        r += this.children[0].value;
        r += '</' + this.name + '>';
        r += newline;
      } else {
        r += '>';
        if (pretty) {
          r += newline;
        }
        _ref1 = this.children;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          child = _ref1[_i];
          r += child.toString(options, level + 1);
        }
        if (pretty) {
          r += space;
        }
        r += '</' + this.name + '>';
        if (pretty) {
          r += newline;
        }
      }
      return r;
    };

    XMLFragment.prototype.escape = function(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
    };

    XMLFragment.prototype.assertLegalChar = function(str) {
      var chars, chr;
      chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/;
      chr = str.match(chars);
      if (chr) {
        throw new Error("Invalid character (" + chr + ") in string: " + str);
      }
    };

    XMLFragment.prototype.is = function(obj, type) {
      var clas;
      clas = Object.prototype.toString.call(obj).slice(8, -1);
      return (obj != null) && clas === type;
    };

    XMLFragment.prototype.ele = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLFragment.prototype.txt = function(value) {
      return this.text(value);
    };

    XMLFragment.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLFragment.prototype.att = function(name, value) {
      return this.attribute(name, value);
    };

    XMLFragment.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLFragment.prototype.doc = function() {
      return this.document();
    };

    XMLFragment.prototype.e = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLFragment.prototype.t = function(value) {
      return this.text(value);
    };

    XMLFragment.prototype.d = function(value) {
      return this.cdata(value);
    };

    XMLFragment.prototype.a = function(name, value) {
      return this.attribute(name, value);
    };

    XMLFragment.prototype.c = function(value) {
      return this.comment(value);
    };

    XMLFragment.prototype.r = function(value) {
      return this.raw(value);
    };

    XMLFragment.prototype.u = function() {
      return this.up();
    };

    return XMLFragment;

  })();

  module.exports = XMLFragment;

}).call(this);

},{}],87:[function(require,module,exports){
// Generated by CoffeeScript 1.3.3
(function() {
  var XMLBuilder;

  XMLBuilder = require('./XMLBuilder');

  module.exports.create = function(name, xmldec, doctype) {
    if (name != null) {
      return new XMLBuilder(name, xmldec, doctype).root();
    } else {
      return new XMLBuilder();
    }
  };

}).call(this);

},{"./XMLBuilder":85}],88:[function(require,module,exports){
var process=require("__browserify_process");(function() {
  var AWS, configure, helpers;

  helpers = require('./helpers');

  AWS = helpers.AWS;

  configure = function(options) {
    return new AWS.Config(options);
  };

  describe('AWS.Config', function() {
    describe('constructor', function() {
      it('should be able to pass in a Config object as parameter', function() {
        var config, copyConfig;
        config = new AWS.Config({
          sslEnabled: false,
          maxRetries: 0
        });
        copyConfig = new AWS.Config(config);
        expect(copyConfig).not.toBe(config);
        expect(copyConfig.sslEnabled).toEqual(false);
        return expect(copyConfig.maxRetries).toEqual(0);
      });
      return it('should be able to pass credential values directly', function() {
        var config;
        config = new AWS.Config({
          accessKeyId: 'akid',
          secretAccessKey: 'secret',
          sessionToken: 'session'
        });
        expect(config.credentials.accessKeyId).toEqual('akid');
        expect(config.credentials.secretAccessKey).toEqual('secret');
        return expect(config.credentials.sessionToken).toEqual('session');
      });
    });
    describe('region', function() {
      var oldEnv;
      oldEnv = process.env;
      beforeEach(function() {
        return process.env = {};
      });
      afterEach(function() {
        return process.env = oldEnv;
      });
      it('defaults to undefined', function() {
        return expect(configure().region).toEqual(void 0);
      });
      it('grabs AWS_REGION from the env', function() {
        var config;
        process.env.AWS_REGION = 'us-west-2';
        config = new AWS.Config();
        return expect(config.region).toEqual('us-west-2');
      });
      it('also grabs AMAZON_REGION from the env', function() {
        var config;
        process.env.AMAZON_REGION = 'us-west-1';
        config = new AWS.Config();
        return expect(config.region).toEqual('us-west-1');
      });
      it('prefers AWS_REGION to AMAZON_REGION', function() {
        var config;
        process.env.AWS_REGION = 'us-west-2';
        process.env.AMAZON_REGION = 'us-west-1';
        config = new AWS.Config();
        return expect(config.region).toEqual('us-west-2');
      });
      return it('can be set to a string', function() {
        return expect(configure({
          region: 'us-west-1'
        }).region).toEqual('us-west-1');
      });
    });
    describe('maxRetries', function() {
      it('defaults to unefined', function() {
        return expect(configure().maxRetries).toEqual(void 0);
      });
      return it('can be set to an integer', function() {
        return expect(configure({
          maxRetries: 2
        }).maxRetries).toEqual(2);
      });
    });
    describe('paramValidation', function() {
      return it('defaults to true', function() {
        return expect(configure().paramValidation).toEqual(true);
      });
    });
    describe('computeChecksums', function() {
      return it('defaults to true', function() {
        return expect(configure().computeChecksums).toEqual(true);
      });
    });
    describe('sslEnabled', function() {
      it('defaults to true', function() {
        return expect(configure().sslEnabled).toEqual(true);
      });
      return it('can be set to false', function() {
        return expect(configure({
          sslEnabled: false
        }).sslEnabled).toEqual(false);
      });
    });
    describe('httpOptions', function() {
      return it('defaults to {}', function() {
        return expect(configure().httpOptions).toEqual({});
      });
    });
    describe('set', function() {
      it('should set a default value for a key', function() {
        var config;
        config = new AWS.Config();
        config.set('maxRetries', void 0, 'DEFAULT');
        return expect(config.maxRetries).toEqual('DEFAULT');
      });
      it('should execute default value if it is a function', function() {
        var config, mock;
        mock = jasmine.createSpy();
        config = new AWS.Config();
        config.set('maxRetries', void 0, mock);
        return expect(mock).toHaveBeenCalled();
      });
      return it('should not expand default value function if value is present', function() {
        var config, mock;
        mock = jasmine.createSpy();
        config = new AWS.Config();
        config.set('maxRetries', 'VALUE', mock);
        return expect(mock).not.toHaveBeenCalled();
      });
    });
    describe('clear', function() {
      return it('should be able to clear all key values from a config object', function() {
        var config;
        config = new AWS.Config({
          credentials: {},
          maxRetries: 300,
          sslEnabled: 'foo'
        });
        expect(config.maxRetries).toEqual(300);
        expect(config.sslEnabled).toEqual('foo');
        expect(config.credentials).not.toEqual(void 0);
        config.clear();
        expect(config.maxRetries).toEqual(void 0);
        expect(config.sslEnabled).toEqual(void 0);
        expect(config.credentials).not.toBe(void 0);
        return expect(config.credentialProvider).not.toEqual(void 0);
      });
    });
    describe('update', function() {
      it('should be able to update keyed values', function() {
        var config;
        config = new AWS.Config();
        expect(config.maxRetries).toEqual(void 0);
        config.update({
          maxRetries: 10
        });
        return expect(config.maxRetries).toEqual(10);
      });
      it('should ignore non-keyed values', function() {
        var config;
        config = new AWS.Config();
        config.update({
          foo: 10
        });
        return expect(config.foo).toEqual(void 0);
      });
      it('allows unknown keys if allowUnknownKeys is set', function() {
        var config;
        config = new AWS.Config();
        config.update({
          foo: 10
        }, true);
        return expect(config.foo).toEqual(10);
      });
      return it('should be able to update literal credentials', function() {
        var config;
        config = new AWS.Config();
        config.update({
          accessKeyId: 'akid',
          secretAccessKey: 'secret',
          sessionToken: 'session'
        });
        expect(config.credentials.accessKeyId).toEqual('akid');
        expect(config.credentials.secretAccessKey).toEqual('secret');
        return expect(config.credentials.sessionToken).toEqual('session');
      });
    });
    return describe('getCredentials', function() {
      var config, expectError, expectValid, spy;
      spy = null;
      config = null;
      beforeEach(function() {
        return spy = jasmine.createSpy('getCredentials callback');
      });
      expectValid = function(options, key) {
        if (options instanceof AWS.Config) {
          config = options;
        } else {
          config = new AWS.Config(options);
        }
        config.getCredentials(spy);
        expect(spy).toHaveBeenCalled();
        expect(spy.argsForCall[0][0]).toEqual(null);
        if (key) {
          return expect(config.credentials.accessKeyId).toEqual(key);
        }
      };
      expectError = function(options, message) {
        if (options instanceof AWS.Config) {
          config = options;
        } else {
          config = new AWS.Config(options);
        }
        config.getCredentials(spy);
        expect(spy).toHaveBeenCalled();
        expect(spy.argsForCall[0][0].code).toEqual('CredentialsError');
        return expect(spy.argsForCall[0][0].message).toEqual(message);
      };
      it('should check credentials for static object first', function() {
        return expectValid({
          credentials: {
            accessKeyId: '123',
            secretAccessKey: '456'
          }
        });
      });
      it('should error if static credentials are not available', function() {
        return expectError({
          credentials: {}
        }, 'Missing credentials');
      });
      it('should check credentials for async get() method', function() {
        return expectValid({
          credentials: {
            get: function(cb) {
              return cb();
            }
          }
        });
      });
      it('should error if credentials.get() cannot resolve', function() {
        var options;
        options = {
          credentials: {
            constructor: {
              name: 'CustomCredentials'
            },
            get: function(cb) {
              return cb(new Error('Error!'), null);
            }
          }
        };
        return expectError(options, 'Could not load credentials from CustomCredentials');
      });
      it('should check credentialProvider if no credentials', function() {
        return expectValid({
          credentials: null,
          credentialProvider: {
            resolve: function(cb) {
              return cb(null, {
                accessKeyId: 'key',
                secretAccessKey: 'secret'
              });
            }
          }
        });
      });
      it('should error if credentialProvider fails to resolve', function() {
        var options;
        options = {
          credentials: null,
          credentialProvider: {
            resolve: function(cb) {
              return cb(new Error('Error!'), null);
            }
          }
        };
        return expectError(options, 'Could not load credentials from any providers');
      });
      return it('should error if no credentials or credentialProvider', function() {
        var options;
        options = {
          credentials: null,
          credentialProvider: null
        };
        return expectError(options, 'No credentials to load');
      });
    });
  });

  describe('AWS.config', function() {
    it('should be a default Config object', function() {
      expect(AWS.config.sslEnabled).toEqual(true);
      return expect(AWS.config.maxRetries).toEqual(void 0);
    });
    return it('can set default config to an object literal', function() {
      var oldConfig;
      oldConfig = AWS.config;
      AWS.config = {};
      expect(AWS.config).toEqual({});
      return AWS.config = oldConfig;
    });
  });

}).call(this);

},{"./helpers":93,"__browserify_process":82}],89:[function(require,module,exports){
var process=require("__browserify_process");(function() {
  var AWS;

  AWS = require('../lib/core');

  describe('AWS.CredentialProviderChain', function() {
    return describe('resolve', function() {
      var chain, defaultProviders;
      chain = null;
      defaultProviders = AWS.CredentialProviderChain.defaultProviders;
      beforeEach(function() {
        process.env = {};
        return chain = new AWS.CredentialProviderChain([
          function() {
            return new AWS.EnvironmentCredentials('AWS');
          }, function() {
            return new AWS.EnvironmentCredentials('AMAZON');
          }
        ]);
      });
      afterEach(function() {
        return AWS.CredentialProviderChain.defaultProviders = defaultProviders;
      });
      it('returns an error by default', function() {
        return chain.resolve(function(err) {
          return expect(err.message).toEqual('Variable AMAZON_ACCESS_KEY_ID not set.');
        });
      });
      it('returns AWS-prefixed credentials found in ENV', function() {
        process.env['AWS_ACCESS_KEY_ID'] = 'akid';
        process.env['AWS_SECRET_ACCESS_KEY'] = 'secret';
        process.env['AWS_SESSION_TOKEN'] = 'session';
        return chain.resolve(function(err, creds) {
          expect(creds.accessKeyId).toEqual('akid');
          expect(creds.secretAccessKey).toEqual('secret');
          return expect(creds.sessionToken).toEqual('session');
        });
      });
      it('returns AMAZON-prefixed credentials found in ENV', function() {
        process.env['AMAZON_ACCESS_KEY_ID'] = 'akid';
        process.env['AMAZON_SECRET_ACCESS_KEY'] = 'secret';
        process.env['AMAZON_SESSION_TOKEN'] = 'session';
        return chain.resolve(function(err, creds) {
          expect(creds.accessKeyId).toEqual('akid');
          expect(creds.secretAccessKey).toEqual('secret');
          return expect(creds.sessionToken).toEqual('session');
        });
      });
      it('prefers AWS credentials to AMAZON credentials', function() {
        process.env['AWS_ACCESS_KEY_ID'] = 'akid';
        process.env['AWS_SECRET_ACCESS_KEY'] = 'secret';
        process.env['AWS_SESSION_TOKEN'] = 'session';
        process.env['AMAZON_ACCESS_KEY_ID'] = 'akid2';
        process.env['AMAZON_SECRET_ACCESS_KEY'] = 'secret2';
        process.env['AMAZON_SESSION_TOKEN'] = 'session2';
        return chain.resolve(function(err, creds) {
          expect(creds.accessKeyId).toEqual('akid');
          expect(creds.secretAccessKey).toEqual('secret');
          return expect(creds.sessionToken).toEqual('session');
        });
      });
      it('uses the defaultProviders property on the constructor', function() {
        AWS.CredentialProviderChain.defaultProviders = [];
        process.env['AWS_ACCESS_KEY_ID'] = 'akid';
        process.env['AWS_SECRET_ACCESS_KEY'] = 'secret';
        process.env['AWS_SESSION_TOKEN'] = 'session';
        chain = new AWS.CredentialProviderChain();
        return chain.resolve(function(err) {
          return expect(err.message).toEqual('No providers');
        });
      });
      it('calls resolve on each provider in the chain, stopping for akid', function() {
        var staticCreds;
        staticCreds = {
          accessKeyId: 'abc',
          secretAccessKey: 'xyz'
        };
        chain = new AWS.CredentialProviderChain([staticCreds]);
        return chain.resolve(function(err, creds) {
          expect(creds.accessKeyId).toEqual('abc');
          expect(creds.secretAccessKey).toEqual('xyz');
          return expect(creds.sessionToken).toEqual(void 0);
        });
      });
      return it('accepts providers as functions, elavuating them during resolution', function() {
        var provider;
        provider = function() {
          return {
            accessKeyId: 'abc',
            secretAccessKey: 'xyz'
          };
        };
        chain = new AWS.CredentialProviderChain([provider]);
        return chain.resolve(function(err, creds) {
          expect(creds.accessKeyId).toEqual('abc');
          expect(creds.secretAccessKey).toEqual('xyz');
          return expect(creds.sessionToken).toEqual(void 0);
        });
      });
    });
  });

}).call(this);

},{"../lib/core":4,"__browserify_process":82}],90:[function(require,module,exports){
var process=require("__browserify_process");(function() {
  var AWS, validateCredentials;

  AWS = require('../lib/core');

  validateCredentials = function(creds, key, secret, session) {
    expect(creds.accessKeyId).toEqual(key || 'akid');
    expect(creds.secretAccessKey).toEqual(secret || 'secret');
    return expect(creds.sessionToken).toEqual(session || 'session');
  };

  describe('AWS.Credentials', function() {
    describe('constructor', function() {
      it('should allow setting of credentials with keys', function() {
        var config;
        config = new AWS.Config({
          accessKeyId: 'akid',
          secretAccessKey: 'secret',
          sessionToken: 'session'
        });
        return validateCredentials(config.credentials);
      });
      it('should allow setting of credentials as object', function() {
        var creds;
        creds = {
          accessKeyId: 'akid',
          secretAccessKey: 'secret',
          sessionToken: 'session'
        };
        return validateCredentials(new AWS.Credentials(creds));
      });
      return it('defaults credentials to undefined when not passed', function() {
        var creds;
        creds = new AWS.Credentials();
        expect(creds.accessKeyId).toBe(void 0);
        expect(creds.secretAccessKey).toBe(void 0);
        return expect(creds.sessionToken).toBe(void 0);
      });
    });
    describe('needsRefresh', function() {
      it('needs refresh if credentials are not set', function() {
        var creds;
        creds = new AWS.Credentials();
        expect(creds.needsRefresh()).toEqual(true);
        creds = new AWS.Credentials('akid');
        return expect(creds.needsRefresh()).toEqual(true);
      });
      it('does not need refresh if credentials are set', function() {
        var creds;
        creds = new AWS.Credentials('akid', 'secret');
        return expect(creds.needsRefresh()).toEqual(false);
      });
      return it('needs refresh if creds are expired', function() {
        var creds;
        creds = new AWS.Credentials('akid', 'secret');
        creds.expired = true;
        return expect(creds.needsRefresh()).toEqual(true);
      });
    });
    return describe('get', function() {
      it('does not call refresh if not needsRefresh', function() {
        var creds, refresh, spy;
        spy = jasmine.createSpy('done callback');
        creds = new AWS.Credentials('akid', 'secret');
        refresh = spyOn(creds, 'refresh');
        creds.get(spy);
        expect(refresh).not.toHaveBeenCalled();
        expect(spy).toHaveBeenCalled();
        expect(spy.argsForCall[0][0]).toEqual(null);
        return expect(creds.expired).toEqual(false);
      });
      return it('calls refresh only if needsRefresh', function() {
        var creds, refresh, spy;
        spy = jasmine.createSpy('done callback');
        creds = new AWS.Credentials('akid', 'secret');
        creds.expired = true;
        refresh = spyOn(creds, 'refresh').andCallThrough();
        creds.get(spy);
        expect(refresh).toHaveBeenCalled();
        expect(spy).toHaveBeenCalled();
        expect(spy.argsForCall[0][0]).toEqual(null);
        return expect(creds.expired).toEqual(false);
      });
    });
  });

  describe('AWS.EnvironmentCredentials', function() {
    beforeEach(function() {
      return process.env = {};
    });
    describe('constructor', function() {
      it('should be able to read credentials from env with a prefix', function() {
        var creds;
        process.env.AWS_ACCESS_KEY_ID = 'akid';
        process.env.AWS_SECRET_ACCESS_KEY = 'secret';
        process.env.AWS_SESSION_TOKEN = 'session';
        creds = new AWS.EnvironmentCredentials('AWS');
        return validateCredentials(creds);
      });
      return it('should be able to read credentials from env without a prefix', function() {
        var creds;
        process.env.ACCESS_KEY_ID = 'akid';
        process.env.SECRET_ACCESS_KEY = 'secret';
        process.env.SESSION_TOKEN = 'session';
        creds = new AWS.EnvironmentCredentials();
        return validateCredentials(creds);
      });
    });
    return describe('refresh', function() {
      return it('can refresh credentials', function() {
        var creds;
        process.env.AWS_ACCESS_KEY_ID = 'akid';
        process.env.AWS_SECRET_ACCESS_KEY = 'secret';
        creds = new AWS.EnvironmentCredentials('AWS');
        expect(creds.accessKeyId).toEqual('akid');
        creds.accessKeyId = 'not_akid';
        expect(creds.accessKeyId).not.toEqual('akid');
        creds.refresh();
        return expect(creds.accessKeyId).toEqual('akid');
      });
    });
  });

  describe('AWS.FileSystemCredentials', function() {
    describe('constructor', function() {
      it('should accept filename and load credentials from root doc', function() {
        var creds, mock;
        mock = '{"accessKeyId":"akid", "secretAccessKey":"secret","sessionToken":"session"}';
        spyOn(AWS.util, 'readFileSync').andReturn(mock);
        creds = new AWS.FileSystemCredentials('foo');
        return validateCredentials(creds);
      });
      return it('should accept filename and load credentials from credentials block', function() {
        var creds, mock, spy;
        mock = '{"credentials":{"accessKeyId":"akid", "secretAccessKey":"secret","sessionToken":"session"}}';
        spy = spyOn(AWS.util, 'readFileSync').andReturn(mock);
        creds = new AWS.FileSystemCredentials('foo');
        return validateCredentials(creds);
      });
    });
    return describe('refresh', function() {
      it('should refresh from given filename', function() {
        var creds, mock;
        mock = '{"credentials":{"accessKeyId":"RELOADED", "secretAccessKey":"RELOADED","sessionToken":"RELOADED"}}';
        spyOn(AWS.util, 'readFileSync').andReturn(mock);
        creds = new AWS.FileSystemCredentials('foo');
        return validateCredentials(creds, 'RELOADED', 'RELOADED', 'RELOADED');
      });
      return it('fails if credentials are not in the file', function() {
        var mock;
        mock = '{"credentials":{}}';
        spyOn(AWS.util, 'readFileSync').andReturn(mock);
        new AWS.FileSystemCredentials('foo').refresh(function(err) {
          return expect(err.message).toEqual('Credentials not set in foo');
        });
        return expect(function() {
          return new AWS.FileSystemCredentials('foo').refresh();
        }).toThrow('Credentials not set in foo');
      });
    });
  });

  describe('AWS.EC2MetadataCredentials', function() {
    describe('constructor', function() {
      return it('allows passing of AWS.MetadataService options', function() {
        var creds;
        creds = new AWS.EC2MetadataCredentials({
          host: 'host'
        });
        return expect(creds.metadataService.host).toEqual('host');
      });
    });
    return describe('refresh', function() {
      it('loads credentials from EC2 Metadata service', function() {
        var creds, spy;
        creds = new AWS.EC2MetadataCredentials({
          host: 'host'
        });
        spy = spyOn(creds.metadataService, 'loadCredentials').andCallFake(function(cb) {
          return cb(null, {
            Code: "Success",
            AccessKeyId: "KEY",
            SecretAccessKey: "SECRET",
            Token: "TOKEN"
          });
        });
        creds.refresh(function() {});
        expect(creds.metadata.Code).toEqual('Success');
        expect(creds.accessKeyId).toEqual('KEY');
        expect(creds.secretAccessKey).toEqual('SECRET');
        return expect(creds.sessionToken).toEqual('TOKEN');
      });
      return it('does not try to load creds second time if Metadata service failed', function() {
        var creds, spy;
        creds = new AWS.EC2MetadataCredentials({
          host: 'host'
        });
        spy = spyOn(creds.metadataService, 'loadCredentials').andCallFake(function(cb) {
          return cb(new Error('INVALID SERVICE'));
        });
        creds.refresh(function(err) {
          return expect(err.message).toEqual('INVALID SERVICE');
        });
        return creds.refresh(function() {
          return creds.refresh(function() {
            return creds.refresh(function() {
              return expect(spy.calls.length).toEqual(1);
            });
          });
        });
      });
    });
  });

}).call(this);

},{"../lib/core":4,"__browserify_process":82}],91:[function(require,module,exports){
(function() {
  var AWS;

  AWS = require('../lib/core');

  describe('AWS.Endpoint', function() {
    it('throws error if parameter is null/undefined', function() {
      expect(function() {
        return new AWS.Endpoint(null);
      }).toThrow('Invalid endpoint: null');
      return expect(function() {
        return new AWS.Endpoint(void 0);
      }).toThrow('Invalid endpoint: undefined');
    });
    it('copy constructs Endpoint', function() {
      var endpoint, origEndpoint;
      origEndpoint = new AWS.Endpoint('http://domain.com');
      endpoint = new AWS.Endpoint(origEndpoint);
      expect(endpoint).not.toBe(origEndpoint);
      return expect(endpoint.host).toEqual('domain.com');
    });
    it('retains the entire endpoint as the endpoint href', function() {
      var endpoint, href;
      href = 'http://domain.com/';
      endpoint = new AWS.Endpoint(href);
      return expect(endpoint.href).toEqual(href);
    });
    it('populates the endpoint properites from the endpoint href', function() {
      var endpoint, href;
      href = 'http://domain.com/';
      endpoint = new AWS.Endpoint(href);
      expect(endpoint.href).toEqual(href);
      expect(endpoint.protocol).toEqual('http:');
      expect(endpoint.host).toEqual('domain.com');
      expect(endpoint.hostname).toEqual('domain.com');
      return expect(endpoint.port).toEqual(80);
    });
    it('keeps port in host when non-standard', function() {
      var endpoint, href;
      href = 'http://domain.com:123/';
      endpoint = new AWS.Endpoint(href);
      expect(endpoint.href).toEqual(href);
      expect(endpoint.protocol).toEqual('http:');
      expect(endpoint.host).toEqual('domain.com:123');
      expect(endpoint.hostname).toEqual('domain.com');
      return expect(endpoint.port).toEqual(123);
    });
    it('works with https endpoints', function() {
      var endpoint, href;
      href = 'https://secure.domain.com/';
      endpoint = new AWS.Endpoint(href);
      expect(endpoint.href).toEqual(href);
      expect(endpoint.protocol).toEqual('https:');
      expect(endpoint.host).toEqual('secure.domain.com');
      expect(endpoint.hostname).toEqual('secure.domain.com');
      return expect(endpoint.port).toEqual(443);
    });
    it('keeps port in host when non-standard for SSL', function() {
      var endpoint, href;
      href = 'https://secure.domain.com:123/';
      endpoint = new AWS.Endpoint(href);
      expect(endpoint.href).toEqual(href);
      expect(endpoint.protocol).toEqual('https:');
      expect(endpoint.host).toEqual('secure.domain.com:123');
      expect(endpoint.hostname).toEqual('secure.domain.com');
      return expect(endpoint.port).toEqual(123);
    });
    it('defaults the protocol to the current AWS.config.sslEnabled mode', function() {
      var endpoint;
      AWS.config.sslEnabled = false;
      endpoint = new AWS.Endpoint('domain.com');
      expect(endpoint.href).toEqual('http://domain.com/');
      expect(endpoint.protocol).toEqual('http:');
      expect(endpoint.host).toEqual('domain.com');
      expect(endpoint.hostname).toEqual('domain.com');
      return expect(endpoint.port).toEqual(80);
    });
    it('defaults the protocol to the current AWS.config.sslEnabled mode', function() {
      var endpoint;
      AWS.config.sslEnabled = true;
      endpoint = new AWS.Endpoint('domain.com');
      expect(endpoint.href).toEqual('https://domain.com/');
      expect(endpoint.protocol).toEqual('https:');
      expect(endpoint.host).toEqual('domain.com');
      expect(endpoint.hostname).toEqual('domain.com');
      return expect(endpoint.port).toEqual(443);
    });
    return it('accepts a configuration object that specifies the mode', function() {
      var endpoint;
      expect(AWS.config.sslEnabled).toEqual(true);
      endpoint = new AWS.Endpoint('domain.com', {
        sslEnabled: false
      });
      expect(endpoint.href).toEqual('http://domain.com/');
      expect(endpoint.protocol).toEqual('http:');
      expect(endpoint.host).toEqual('domain.com');
      expect(endpoint.hostname).toEqual('domain.com');
      return expect(endpoint.port).toEqual(80);
    });
  });

}).call(this);

},{"../lib/core":4}],92:[function(require,module,exports){
var process=require("__browserify_process"),__filename="/test/event_listeners.spec.coffee";(function() {
  var AWS, Buffer, MockService, helpers;

  helpers = require('./helpers');

  AWS = helpers.AWS;

  MockService = helpers.MockService;

  Buffer = require('buffer').Buffer;

  describe('AWS.EventListeners', function() {
    var completeHandler, config, delays, errorHandler, makeRequest, oldSetTimeout, retryHandler, service, successHandler, totalWaited;
    oldSetTimeout = setTimeout;
    config = null;
    service = null;
    totalWaited = null;
    delays = [];
    successHandler = null;
    errorHandler = null;
    completeHandler = null;
    retryHandler = null;
    beforeEach(function() {
      setTimeout = jasmine.createSpy('setTimeout');;
      setTimeout.andCallFake(function(callback, delay) {
        totalWaited += delay;
        delays.push(delay);
        return callback();
      });
      totalWaited = 0;
      delays = [];
      service = new MockService({
        maxRetries: 3
      });
      service.config.credentials = AWS.util.copy(service.config.credentials);
      successHandler = jasmine.createSpy('success');
      errorHandler = jasmine.createSpy('error');
      completeHandler = jasmine.createSpy('complete');
      return retryHandler = jasmine.createSpy('retry');
    });
    afterEach(function() {
      return setTimeout = oldSetTimeout;
    });
    makeRequest = function(callback) {
      var request;
      request = service.makeRequest('mockMethod', {
        foo: 'bar'
      });
      request.on('retry', retryHandler);
      request.on('error', errorHandler);
      request.on('success', successHandler);
      request.on('complete', completeHandler);
      if (callback) {
        request.on('complete', function(resp) {
          return callback.call(resp, resp.error, resp.data);
        });
        return request.send();
      } else {
        return request;
      }
    };
    describe('validate', function() {
      it('takes the request object as a parameter', function() {
        var request, response;
        request = makeRequest();
        request.on('validate', function(req) {
          expect(req).toBe(request);
          throw "ERROR";
        });
        response = request.send();
        return expect(response.error).toEqual("ERROR");
      });
      it('sends error event if credentials are not set', function() {
        var request;
        errorHandler = jasmine.createSpy('errorHandler');
        request = makeRequest();
        request.on('error', errorHandler);
        service.config.credentialProvider = null;
        service.config.credentials.accessKeyId = null;
        request.send();
        service.config.credentials.accessKeyId = 'akid';
        service.config.credentials.secretAccessKey = null;
        request.send();
        expect(errorHandler).toHaveBeenCalled();
        return AWS.util.arrayEach(errorHandler.calls, function(call) {
          expect(call.args[0] instanceof Error).toBeTruthy();
          expect(call.args[0].code).toEqual('SigningError');
          return expect(call.args[0].message).toMatch(/Missing credentials in config/);
        });
      });
      return it('sends error event if region is not set', function() {
        var call, request;
        service.config.region = null;
        request = makeRequest(function() {});
        call = errorHandler.calls[0];
        expect(errorHandler).toHaveBeenCalled();
        expect(call.args[0] instanceof Error).toBeTruthy();
        expect(call.args[0].code).toEqual('SigningError');
        return expect(call.args[0].message).toMatch(/Missing region in config/);
      });
    });
    describe('build', function() {
      return it('takes the request object as a parameter', function() {
        var request, response;
        request = makeRequest();
        request.on('build', function(req) {
          expect(req).toBe(request);
          throw "ERROR";
        });
        response = request.send();
        return expect(response.error).toEqual("ERROR");
      });
    });
    describe('afterBuild', function() {
      var contentLength, sendRequest;
      beforeEach(function() {
        return helpers.mockHttpResponse(200, {}, ['DATA']);
      });
      sendRequest = function(body) {
        var request;
        request = makeRequest();
        request.on('build', function(req) {
          return req.httpRequest.body = body;
        });
        request.send();
        return request;
      };
      contentLength = function(body) {
        return sendRequest(body).httpRequest.headers['Content-Length'];
      };
      it('builds Content-Length in the request headers for string content', function() {
        return expect(contentLength('FOOBAR')).toEqual(6);
      });
      it('builds Content-Length for string "0"', function() {
        return expect(contentLength('0')).toEqual(1);
      });
      it('builds Content-Length for utf-8 string body', function() {
        return expect(contentLength('tï№')).toEqual(6);
      });
      it('builds Content-Length for buffer body', function() {
        return expect(contentLength(new Buffer('tï№'))).toEqual(6);
      });
      return it('builds Content-Length for file body', function() {
        var file, fileLen, fs;
        fs = require('fs');
        file = fs.createReadStream(__filename);
        fileLen = fs.lstatSync(file.path).size;
        return expect(contentLength(file)).toEqual(fileLen);
      });
    });
    describe('sign', function() {
      it('takes the request object as a parameter', function() {
        var request, response;
        request = makeRequest();
        request.on('sign', function(req) {
          expect(req).toBe(request);
          throw "ERROR";
        });
        response = request.send();
        return expect(response.error).toEqual("ERROR");
      });
      it('uses the api.signingName if provided', function() {
        var request, response;
        service.api.signingName = 'SIGNING_NAME';
        spyOn(AWS.Signers.RequestSigner, 'getVersion').andCallFake(function() {
          return function(req, signingName) {
            throw signingName;
          };
        });
        request = makeRequest();
        response = request.send();
        expect(response.error).toEqual('SIGNING_NAME');
        return delete service.api.signingName;
      });
      return it('uses the api.endpointPrefix if signingName not provided', function() {
        var request, response;
        spyOn(AWS.Signers.RequestSigner, 'getVersion').andCallFake(function() {
          return function(req, signingName) {
            throw signingName;
          };
        });
        request = makeRequest();
        response = request.send();
        return expect(response.error).toEqual('mockservice');
      });
    });
    describe('send', function() {
      return it('passes httpOptions from config', function() {
        var options;
        options = {};
        spyOn(AWS.HttpClient, 'getInstance').andReturn({
          handleRequest: function(req, opts) {
            return options = opts;
          }
        });
        service.config.httpOptions = {
          timeout: 15
        };
        service.config.maxRetries = 0;
        makeRequest(function() {});
        return expect(options.timeout).toEqual(15);
      });
    });
    describe('httpData', function() {
      beforeEach(function() {
        return helpers.mockHttpResponse(200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']);
      });
      it('emits httpData event on each chunk', function() {
        var calls, request;
        calls = [];
        request = makeRequest();
        request.on('httpData', function(chunk) {
          return calls.push(chunk.toString());
        });
        request.send();
        return expect(calls).toEqual(['FOO', 'BAR', 'BAZ', 'QUX']);
      });
      return it('does not clear default httpData event if another is added', function() {
        var request, response;
        request = makeRequest();
        request.on('httpData', function() {});
        response = request.send();
        return expect(response.httpResponse.body.toString()).toEqual('FOOBARBAZQUX');
      });
    });
    describe('retry', function() {
      it('retries a request with a set maximum retries', function() {
        var request, response, sendHandler;
        sendHandler = jasmine.createSpy('send');
        service.config.maxRetries = 10;
        helpers.mockHttpResponse({
          code: 'NetworkingError',
          message: 'Cannot connect'
        });
        request = makeRequest();
        request.on('send', sendHandler);
        response = request.send();
        expect(retryHandler).toHaveBeenCalled();
        expect(errorHandler).toHaveBeenCalled();
        expect(completeHandler).toHaveBeenCalled();
        expect(successHandler).not.toHaveBeenCalled();
        expect(response.retryCount).toEqual(service.config.maxRetries);
        return expect(sendHandler.calls.length).toEqual(service.config.maxRetries + 1);
      });
      it('retries with falloff', function() {
        helpers.mockHttpResponse({
          code: 'NetworkingError',
          message: 'Cannot connect'
        });
        makeRequest(function() {});
        return expect(delays).toEqual([30, 60, 120]);
      });
      it('retries if status code is >= 500', function() {
        helpers.mockHttpResponse(500, {}, '');
        return makeRequest(function(err) {
          expect(err).toEqual({
            code: 500,
            message: null,
            statusCode: 500,
            retryable: true
          });
          return expect(this.retryCount).toEqual(service.config.maxRetries);
        });
      });
      it('should not emit error if retried fewer than maxRetries', function() {
        var response;
        helpers.mockIntermittentFailureResponse(2, 200, {}, 'foo');
        response = makeRequest(function() {});
        expect(totalWaited).toEqual(90);
        expect(response.retryCount).toBeLessThan(service.config.maxRetries);
        expect(response.data).toEqual('foo');
        return expect(errorHandler).not.toHaveBeenCalled();
      });
      ['ExpiredToken', 'ExpiredTokenException', 'RequestExpired'].forEach(function(name) {
        return it('invalidates expired credentials and retries', function() {
          var creds, response;
          spyOn(AWS.HttpClient, 'getInstance');
          AWS.HttpClient.getInstance.andReturn({
            handleRequest: function(req, opts, cb, errCb) {
              if (req.headers.Authorization.match('Credential=INVALIDKEY')) {
                return helpers.mockHttpSuccessfulResponse(403, {}, name, cb);
              } else {
                return helpers.mockHttpSuccessfulResponse(200, {}, 'DATA', cb);
              }
            }
          });
          creds = {
            numCalls: 0,
            expired: false,
            accessKeyId: 'INVALIDKEY',
            secretAccessKey: 'INVALIDSECRET',
            get: function(cb) {
              if (this.expired) {
                this.numCalls += 1;
                this.expired = false;
                this.accessKeyId = 'VALIDKEY' + this.numCalls;
                this.secretAccessKey = 'VALIDSECRET' + this.numCalls;
              }
              return cb();
            }
          };
          service.config.credentials = creds;
          response = makeRequest(function() {});
          expect(response.retryCount).toEqual(1);
          expect(creds.accessKeyId).toEqual('VALIDKEY1');
          return expect(creds.secretAccessKey).toEqual('VALIDSECRET1');
        });
      });
      [301, 307].forEach(function(code) {
        return it('attempts to redirect on ' + code + ' responses', function() {
          var response;
          helpers.mockHttpResponse(code, {
            location: 'http://redirected'
          }, '');
          service.config.maxRetries = 0;
          service.config.maxRedirects = 5;
          response = makeRequest(function() {});
          expect(response.request.httpRequest.endpoint.host).toEqual('redirected');
          expect(response.error.retryable).toEqual(true);
          expect(response.redirectCount).toEqual(service.config.maxRedirects);
          return expect(delays).toEqual([0, 0, 0, 0, 0]);
        });
      });
      return it('does not redirect if 3xx is missing location header', function() {
        var response;
        helpers.mockHttpResponse(304, {}, '');
        service.config.maxRetries = 0;
        response = makeRequest(function() {});
        expect(response.request.httpRequest.endpoint.host).not.toEqual('redirected');
        return expect(response.error.retryable).toEqual(false);
      });
    });
    describe('success', function() {
      return it('emits success on a successful response', function() {
        var response;
        helpers.mockHttpResponse(200, {}, 'Success!');
        response = makeRequest(function() {});
        expect(retryHandler).not.toHaveBeenCalled();
        expect(errorHandler).not.toHaveBeenCalled();
        expect(completeHandler).toHaveBeenCalled();
        expect(successHandler).toHaveBeenCalled();
        return expect(response.retryCount).toEqual(0);
      });
    });
    describe('error', function() {
      it('emits error if error found and should not be retrying', function() {
        var response;
        helpers.mockHttpResponse(400, {}, '');
        response = makeRequest(function() {});
        expect(retryHandler).not.toHaveBeenCalled();
        expect(errorHandler).toHaveBeenCalled();
        expect(completeHandler).toHaveBeenCalled();
        expect(successHandler).not.toHaveBeenCalled();
        return expect(response.retryCount).toEqual(0);
      });
      return it('emits error if an error is set in extractError', function() {
        var error, extractDataHandler, request, response;
        error = {
          code: 'ParseError',
          message: 'error message'
        };
        extractDataHandler = jasmine.createSpy('extractData');
        helpers.mockHttpResponse(400, {}, '');
        request = makeRequest();
        request.on('extractData', extractDataHandler);
        request.on('extractError', function(resp) {
          return resp.error = error;
        });
        response = request.send();
        expect(response.error).toBe(error);
        expect(extractDataHandler).not.toHaveBeenCalled();
        expect(retryHandler).not.toHaveBeenCalled();
        expect(errorHandler).toHaveBeenCalled();
        return expect(completeHandler).toHaveBeenCalled();
      });
    });
    return describe('terminal callback error handling', function() {
      var didError;
      beforeEach(function() {
        spyOn(process, 'exit');
        return spyOn(console, 'error');
      });
      didError = function() {
        expect(console.error).toHaveBeenCalledWith('ERROR');
        return expect(process.exit).toHaveBeenCalledWith(1);
      };
      describe('without domains', function() {
        it('logs exceptions raised from success event and exits process', function() {
          var request;
          helpers.mockHttpResponse(200, {}, []);
          request = makeRequest();
          request.on('success', function() {
            throw "ERROR";
          });
          expect(function() {
            return request.send();
          }).not.toThrow('ERROR');
          expect(completeHandler).toHaveBeenCalled();
          expect(retryHandler).not.toHaveBeenCalled();
          return didError();
        });
        it('logs exceptions raised from complete event and exits process', function() {
          var request;
          helpers.mockHttpResponse(200, {}, []);
          request = makeRequest();
          request.on('complete', function() {
            throw "ERROR";
          });
          expect(function() {
            return request.send();
          }).not.toThrow('ERROR');
          expect(completeHandler).toHaveBeenCalled();
          expect(retryHandler).not.toHaveBeenCalled();
          return didError();
        });
        return it('logs exceptions raised from error event and exits process', function() {
          var request;
          helpers.mockHttpResponse(500, {}, []);
          request = makeRequest();
          request.on('error', function() {
            throw "ERROR";
          });
          expect(function() {
            return request.send();
          }).not.toThrow('ERROR');
          expect(completeHandler).toHaveBeenCalled();
          return didError();
        });
      });
      return describe('with domains', function() {
        it('sends error raised from complete event to a domain', function() {
          var d, result;
          result = false;
          d = require('domain').create();
          if (d.run) {
            d.on('error', function(e) {
              return result = e;
            });
            return d.run(function() {
              var request;
              helpers.mockHttpResponse(200, {}, []);
              request = makeRequest();
              request.on('complete', function() {
                throw "ERROR";
              });
              expect(function() {
                return request.send();
              }).not.toThrow('ERROR');
              expect(completeHandler).toHaveBeenCalled();
              expect(retryHandler).not.toHaveBeenCalled();
              return expect(result).toEqual("ERROR");
            });
          }
        });
        return it('supports inner domains', function() {
          var Domain, done, err, gotInnerError, gotOuterError, outerDomain;
          helpers.mockHttpResponse(200, {}, []);
          done = false;
          err = new Error();
          gotOuterError = false;
          gotInnerError = false;
          Domain = require("domain");
          outerDomain = Domain.create();
          outerDomain.on('error', function(err) {
            return gotOuterError = true;
          });
          if (outerDomain.run) {
            return outerDomain.run(function() {
              var innerDomain, request;
              request = makeRequest();
              innerDomain = Domain.create();
              innerDomain.add(request);
              innerDomain.on('error', function() {
                return gotInnerError = true;
              });
              runs(function() {
                return request.send(function() {
                  return innerDomain.run(function() {
                    done = true;
                    throw err;
                  });
                });
              });
              waitsFor(function() {
                return done;
              });
              return runs(function() {
                expect(gotOuterError).toEqual(false);
                expect(gotInnerError).toEqual(true);
                expect(err.domainThrown).toEqual(false);
                return expect(err.domain).toEqual(innerDomain);
              });
            });
          }
        });
      });
    });
  });

}).call(this);

},{"./helpers":93,"__browserify_process":82,"buffer":70,"domain":60,"fs":63}],93:[function(require,module,exports){
(function() {
  var AWS, Buffer, EventEmitter, MockService, flattenXML, matchXML, mockHttpResponse, mockHttpSuccessfulResponse, mockIntermittentFailureResponse;

  AWS = require('../lib/aws');

  EventEmitter = require('events').EventEmitter;

  Buffer = require('buffer').Buffer;

  AWS.config.update({
    paramValidation: false,
    region: 'mock-region',
    credentials: {
      accessKeyId: 'akid',
      secretAccessKey: 'secret'
    }
  });

  setTimeout = function(fn, delay) { fn(); };

  flattenXML = function(xml) {
    if (!xml) {
      return xml;
    }
    return xml.split("\n").join('').replace(/>\s+</g, '><').replace(/^\s+|\s+$/g, '');
  };

  matchXML = function(xml1, xml2) {
    return expect(flattenXML(xml1)).toEqual(flattenXML(xml2));
  };

  MockService = AWS.Service.defineService('mockService', {
    initialize: function(config) {
      AWS.Service.prototype.initialize.call(this, config);
      this.config.credentials = {
        accessKeyId: 'akid',
        secretAccessKey: 'secret'
      };
      return this.config.region = 'mock-region';
    },
    setupRequestListeners: function(request) {
      request.on('extractData', function(resp) {
        return resp.data = resp.httpResponse.body.toString();
      });
      return request.on('extractError', function(resp) {
        return resp.error = {
          code: resp.httpResponse.body.toString() || resp.httpResponse.statusCode,
          message: null
        };
      });
    },
    api: {
      endpointPrefix: 'mockservice',
      signatureVersion: 'v4'
    }
  });

  mockHttpSuccessfulResponse = function(status, headers, data, cb) {
    var httpResp;
    if (!Array.isArray(data)) {
      data = [data];
    }
    httpResp = new EventEmitter();
    httpResp.statusCode = status;
    httpResp.headers = headers;
    httpResp.read = function() {
      var chunk;
      if (data.length > 0) {
        chunk = data.shift();
        if (chunk === null) {
          return null;
        } else {
          return new Buffer(chunk);
        }
      } else {
        return null;
      }
    };
    cb(httpResp);
    AWS.util.arrayEach(data.slice(), function(str) {
      if (httpResp._events.readable) {
        return httpResp.emit('readable');
      } else {
        return httpResp.emit('data', new Buffer(str));
      }
    });
    return httpResp.emit('end');
  };

  mockHttpResponse = function(status, headers, data) {
    var stream;
    stream = new EventEmitter();
    spyOn(AWS.HttpClient, 'getInstance');
    AWS.HttpClient.getInstance.andReturn({
      handleRequest: function(req, opts, cb, errCb) {
        if (typeof status === 'number') {
          return mockHttpSuccessfulResponse(status, headers, data, cb);
        } else {
          return errCb(status);
        }
      }
    });
    return stream;
  };

  mockIntermittentFailureResponse = function(numFailures, status, headers, data) {
    var retryCount;
    retryCount = 0;
    spyOn(AWS.HttpClient, 'getInstance');
    return AWS.HttpClient.getInstance.andReturn({
      handleRequest: function(req, opts, cb, errCb) {
        var statusCode, _ref;
        if (retryCount < numFailures) {
          retryCount += 1;
          return errCb({
            code: 'NetworkingError',
            message: 'FAIL!'
          });
        } else {
          statusCode = (_ref = retryCount < numFailures) != null ? _ref : {
            500: status
          };
          return mockHttpSuccessfulResponse(statusCode, headers, data, cb);
        }
      }
    });
  };

  module.exports = {
    AWS: AWS,
    matchXML: matchXML,
    mockHttpResponse: mockHttpResponse,
    mockIntermittentFailureResponse: mockIntermittentFailureResponse,
    mockHttpSuccessfulResponse: mockHttpSuccessfulResponse,
    MockService: MockService
  };

}).call(this);

},{"../lib/aws":2,"buffer":70,"events":62}],94:[function(require,module,exports){
(function() {
  var AWS;

  AWS = require('../lib/core');

  describe('AWS.HttpRequest', function() {
    var request;
    request = null;
    beforeEach(function() {
      return request = new AWS.HttpRequest('http://domain.com');
    });
    describe('constructor', function() {
      it('defaults to POST method requests', function() {
        return expect(request.method).toEqual('POST');
      });
      it('defaults the uri to /', function() {
        return expect(request.path).toEqual('/');
      });
      it('provides headers with a default user agent', function() {
        return expect(request.headers).toEqual({
          'User-Agent': AWS.util.userAgent()
        });
      });
      it('defaults body to empty string', function() {
        return expect(request.body).toEqual('');
      });
      it('defaults endpointPrefix to undefined', function() {
        return expect(request.endpointPrefix).toEqual(void 0);
      });
      return it('uses the path from the endpoint if provided', function() {
        request = new AWS.HttpRequest('http://domain.com/path');
        return expect(request.path).toEqual('/path');
      });
    });
    describe('pathname', function() {
      it('defaults to /', function() {
        return expect(request.pathname()).toEqual('/');
      });
      return it('returns the path portion of the uri', function() {
        request.path = '/abc/xyz?mno=hjk';
        return expect(request.pathname()).toEqual('/abc/xyz');
      });
    });
    return describe('search', function() {
      it('defaults to an empty string', function() {
        return expect(request.search()).toEqual('');
      });
      return it('returns the querystring portion of the uri', function() {
        request.path = '/abc/xyz?mno=hjk';
        return expect(request.search()).toEqual('mno=hjk');
      });
    });
  });

}).call(this);

},{"../lib/core":4}],95:[function(require,module,exports){
(function() {
  var AWS, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  describe('AWS.JSON.Builder', function() {
    var timestampFormat, toJSON;
    timestampFormat = 'iso8601';
    toJSON = function(rules, params, options) {
      var builder;
      if (!options) {
        options = {};
      }
      options.timestampFormat = timestampFormat;
      builder = new AWS.JSON.Builder(rules, options);
      return builder.toJSON(params);
    };
    return describe('toJSON', function() {
      it('returns an empty document when there are no params', function() {
        return expect(toJSON({}, {})).toEqual("{}");
      });
      it('translates strucutres', function() {
        var params, rules;
        rules = {
          type: 'structure',
          members: {
            Items: {
              type: 'structure',
              members: {
                A: {
                  type: 'string'
                },
                B: {
                  type: 'string'
                }
              }
            }
          }
        };
        params = {
          Items: {
            A: 'a',
            B: 'b'
          }
        };
        return expect(toJSON(rules, params)).toEqual('{"Items":{"A":"a","B":"b"}}');
      });
      it('translates lists', function() {
        var params, rules;
        rules = {
          type: 'structure',
          members: {
            Items: {
              type: 'list',
              members: {
                type: 'string'
              }
            }
          }
        };
        params = {
          Items: ['a', 'b', 'c']
        };
        return expect(toJSON(rules, params)).toEqual('{"Items":["a","b","c"]}');
      });
      it('translates maps', function() {
        var params, rules;
        rules = {
          type: 'structure',
          members: {
            Items: {
              type: 'map'
            }
          }
        };
        params = {
          Items: {
            A: 'a',
            B: 'b'
          }
        };
        return expect(toJSON(rules, params)).toEqual('{"Items":{"A":"a","B":"b"}}');
      });
      return it('traslates nested timestamps', function() {
        var formatted, now, params, rules;
        rules = {
          type: 'structure',
          members: {
            Build: {
              type: 'timestamp'
            }
          }
        };
        now = new Date();
        params = {
          Build: {
            When: now
          }
        };
        formatted = AWS.util.date.iso8601(now);
        return expect(toJSON(rules, params)).toEqual('{"Build":{"When":"' + formatted + '"}}');
      });
    });
  });

}).call(this);

},{"../helpers":93}],96:[function(require,module,exports){
(function() {
  var AWS, helpers, http, url;

  helpers = require('./helpers');

  url = require('url');

  http = require('http');

  AWS = helpers.AWS;

  describe('AWS.MetadataService', function() {
    return describe('loadCredentials', function() {
      var port, server, service, _ref;
      _ref = [null, 1024 + parseInt(Math.random() * 100), null], server = _ref[0], port = _ref[1], service = _ref[2];
      beforeEach(function() {
        service = new AWS.MetadataService({
          host: '127.0.0.1:' + port
        });
        server = http.createServer(function(req, res) {
          var data, match, re;
          re = new RegExp('^/latest/meta-data/iam/security-credentials/(.*)$');
          match = url.parse(req.url).pathname.match(re);
          if (match) {
            res.writeHead(200, {
              'Content-Type': 'text/plain'
            });
            if (match[1] === '') {
              res.write('TestingRole\n');
              res.write('TestingRole2\n');
            } else {
              data = '{"Code":"Success","AccessKeyId":"KEY","SecretAccessKey":"SECRET","Token":"TOKEN"}';
              res.write(data);
            }
          } else {
            res.writeHead(404, {});
          }
          return res.end();
        });
        return server.listen(port);
      });
      afterEach(function() {
        if (server) {
          return server.close();
        }
      });
      it('should load credentials from metadata service', function() {
        var data, err, _ref1;
        _ref1 = [null, null], err = _ref1[0], data = _ref1[1];
        runs(function() {
          return service.loadCredentials(function(e, d) {
            var _ref2;
            return _ref2 = [e, d], err = _ref2[0], data = _ref2[1], _ref2;
          });
        });
        waitsFor(function() {
          return err || data;
        });
        return runs(function() {
          expect(err).toBe(null);
          expect(data.Code).toEqual('Success');
          expect(data.AccessKeyId).toEqual('KEY');
          expect(data.SecretAccessKey).toEqual('SECRET');
          return expect(data.Token).toEqual('TOKEN');
        });
      });
      return it('should fail if server is not up', function() {
        var data, err, _ref1;
        server.close();
        server = null;
        service = new AWS.MetadataService({
          host: '255.255.255.255'
        });
        service.httpOptions.timeout = 10;
        _ref1 = [null, null], err = _ref1[0], data = _ref1[1];
        runs(function() {
          return service.loadCredentials(function(e, d) {
            var _ref2;
            return _ref2 = [e, d], err = _ref2[0], data = _ref2[1], _ref2;
          });
        });
        waitsFor(function() {
          return err || data;
        });
        return runs(function() {
          expect(err instanceof Error).toBe(true);
          return expect(data).toEqual(null);
        });
      });
    });
  });

}).call(this);

},{"./helpers":93,"http":77,"url":67}],97:[function(require,module,exports){
(function() {
  var AWS, helpers;

  helpers = require('./helpers');

  AWS = helpers.AWS;

  describe('AWS.NodeHttpClient', function() {
    var http;
    http = new AWS.NodeHttpClient();
    return describe('handleRequest', function() {
      it('emits error event', function() {
        var error, req;
        error = null;
        req = new AWS.HttpRequest('http://invalid');
        runs(function() {
          return http.handleRequest(req, {}, null, function(err) {
            return error = err;
          });
        });
        waitsFor(function() {
          return error;
        });
        return runs(function() {
          return expect(error.code).toEqual('ENOTFOUND');
        });
      });
      return it('supports timeout in httpOptions', function() {
        var error, numCalls, req;
        error = null;
        numCalls = 0;
        req = new AWS.HttpRequest('http://1.1.1.1');
        runs(function() {
          return http.handleRequest(req, {
            timeout: 1
          }, null, function(err) {
            error = err;
            return numCalls += 1;
          });
        });
        waitsFor((function() {
          return error;
        }), 'Timed out', 100);
        return runs(function() {
          expect(error.code).toEqual('TimeoutError');
          expect(error.message).toEqual('Connection timed out after 1ms');
          return expect(numCalls).toEqual(1);
        });
      });
    });
  });

}).call(this);

},{"./helpers":93}],98:[function(require,module,exports){
(function() {
  var AWS, Buffer, helpers;

  helpers = require('./helpers');

  AWS = helpers.AWS;

  Buffer = require('buffer').Buffer;

  describe('AWS.ParamValidator', function() {
    var expectError, expectValid, members, rules, validate, _ref;
    _ref = [{}, {}], members = _ref[0], rules = _ref[1];
    validate = function(params) {
      var r;
      r = rules;
      if (r && !r.xml && !r.payload) {
        r = {
          type: 'structure',
          members: rules
        };
      }
      return new AWS.ParamValidator().validate(r, params);
    };
    expectValid = function(params) {
      return expect(validate(params)).toEqual(true);
    };
    expectError = function(message, params) {
      var _ref1;
      if (params === void 0) {
        _ref1 = [void 0, message], message = _ref1[0], params = _ref1[1];
      }
      return expect(function() {
        return validate(params);
      }).toThrow(message);
    };
    describe('empty rules', function() {
      beforeEach(function() {
        return rules = {};
      });
      it('accepts an empty hash when the rules are nil', function() {
        rules = null;
        return expectValid({});
      });
      it('accepts an empty hash when the rules are an empty hash', function() {
        return expectValid({});
      });
      return it('does not accept params in the given hash', function() {
        return expectError({
          foo: 'bar'
        });
      });
    });
    describe('param keys', function() {
      beforeEach(function() {
        return rules = {
          foo: {},
          bar: {
            type: 'string'
          }
        };
      });
      it('accepts string keys', function() {
        expectValid({
          foo: 'foo'
        });
        return expectValid({
          bar: 'bar'
        });
      });
      return it('rejects keys that do not match case', function() {
        expectError({
          Bar: 'bar'
        });
        return expectError({
          Foo: 'foo'
        });
      });
    });
    describe('unexpected params', function() {
      beforeEach(function() {
        return rules = {
          string1: {},
          string2: {},
          hash: {
            type: 'structure',
            members: {
              good: {}
            }
          }
        };
      });
      it('throws an ArgumentError for un-described params', function() {
        return expectError({
          string3: 'xyz'
        });
      });
      return it('rejects nested params that are not described in the rules', function() {
        expectValid({
          hash: {
            good: 'abc'
          }
        });
        return expectError({
          hash: {
            bad: 'abc'
          }
        });
      });
    });
    describe('required params', function() {
      beforeEach(function() {
        return rules = {
          req: {
            required: true
          },
          opt: {
            type: 'structure',
            members: {
              req: {
                required: true
              }
            }
          }
        };
      });
      it('throws an error if a top-level required param is omitted', function() {
        return expectError({});
      });
      it('optional params can be omitted, even if they have required params', function() {
        return expectValid({
          req: 'abc'
        });
      });
      it('requires nested required params when the parent is present', function() {
        return expectError({
          req: 'abc',
          opt: {}
        });
      });
      it('accepts nested required params', function() {
        return expectValid({
          req: 'abc',
          opt: {
            req: 'xyz'
          }
        });
      });
      it('accepts empty strings in required params', function() {
        return expectValid({
          req: ''
        });
      });
      it('accepts 0 in required params', function() {
        rules.req.type = 'integer';
        return expectValid({
          req: 0
        });
      });
      return it('accepts false in required params', function() {
        rules.req.type = 'boolean';
        return expectValid({
          req: false
        });
      });
    });
    describe('structure', function() {
      beforeEach(function() {
        return rules = {
          hash1: {
            type: 'structure',
            members: {
              param1: {},
              param2: {},
              hash2: {
                type: 'structure',
                members: {
                  param3: {
                    type: 'boolean'
                  },
                  param4: {
                    type: 'integer',
                    required: true
                  }
                }
              }
            }
          }
        };
      });
      it('accepts hashes', function() {
        return expectValid({
          hash1: {}
        });
      });
      it('accepts hashes with params', function() {
        return expectValid({
          hash1: {
            param1: 'a',
            param2: 'b'
          }
        });
      });
      it('throws an error for non hashes', function() {
        return expectError({
          hash1: 'oops'
        });
      });
      it('throws an error for unknown hash members', function() {
        return expectError({
          hash1: {
            param3: 'c'
          }
        });
      });
      it('allows nesting structures', function() {
        return expectValid({
          hash1: {
            hash2: {
              param3: true,
              param4: 123
            }
          }
        });
      });
      return it('rejects unknown members', function() {
        return expectError({
          hash1: {
            oops: 'abc'
          }
        });
      });
    });
    describe('list', function() {
      beforeEach(function() {
        members = {};
        return rules = {
          array: {
            type: 'list',
            members: members
          }
        };
      });
      it('accepts an array for list params', function() {
        return expectValid({
          array: []
        });
      });
      it('throws an error if list params are not arrays', function() {
        return expectError({
          array: {}
        });
      });
      return it('supports nested structures', function() {
        members.type = 'structure';
        members.members = {
          name: {}
        };
        expectValid({
          array: [
            {
              name: 'abc'
            }, {
              name: 'mno'
            }, {
              name: 'xyz'
            }
          ]
        });
        return expectError({
          array: [
            {
              badKey: 'abc'
            }
          ]
        });
      });
    });
    describe('map', function() {
      beforeEach(function() {
        members = {};
        return rules = {
          hash: {
            type: 'map',
            members: members
          }
        };
      });
      it('accepts maps', function() {
        return expectValid({
          hash: {}
        });
      });
      it('rejects non-maps', function() {
        return expectError({
          hash: 'oops'
        });
      });
      it('accepts user-supplied maps keys', function() {
        return expectValid({
          hash: {
            a: '1',
            b: '2',
            c: '3'
          }
        });
      });
      return it('supports nested params', function() {
        members.type = 'structure';
        members.members = {
          param1: {
            type: 'list'
          },
          param2: {
            type: 'integer'
          },
          param3: {
            type: 'structure',
            members: {
              param4: {}
            }
          }
        };
        expectValid({
          hash: {
            foo: {
              param1: ['a', 'b', 'c']
            },
            bar: {
              param2: 123
            },
            yuck: {
              param3: {
                param4: 'xyz'
              }
            }
          }
        });
        return expectError({
          hash: {
            foo: {
              param4: 'abc'
            }
          }
        });
      });
    });
    describe('boolean', function() {
      beforeEach(function() {
        return rules = {
          param: {
            type: 'boolean'
          }
        };
      });
      it('accepts true', function() {
        return expectValid({
          param: true
        });
      });
      it('accpets false', function() {
        return expectValid({
          param: false
        });
      });
      return it('rejects other values', function() {
        return expectError({
          param: 'true'
        });
      });
    });
    describe('timestamp', function() {
      beforeEach(function() {
        return rules = {
          param: {
            type: 'timestamp'
          }
        };
      });
      it('accepts Date objects', function() {
        return expectValid({
          param: new Date()
        });
      });
      it('accepts strings formatted like datetimes', function() {
        expectValid({
          param: '2012-01-02T10:11:12Z'
        });
        return expectValid({
          param: '2012-01-02T10:11:12.0001Z'
        });
      });
      it('accepts UNIX timestamps as number values', function() {
        return expectValid({
          param: 12345
        });
      });
      return it('rejects other param values', function() {
        return expectError({
          param: 'abc'
        });
      });
    });
    describe('string', function() {
      beforeEach(function() {
        return rules = {
          param: {
            type: 'string'
          }
        };
      });
      it('accepts strings', function() {
        return expectValid({
          param: 'abc'
        });
      });
      it('accepts empty string', function() {
        return expectValid({
          param: ''
        });
      });
      return it('rejects other objects', function() {
        expectError({
          param: 123
        });
        expectError({
          param: {}
        });
        return expectError({
          param: []
        });
      });
    });
    describe('float', function() {
      beforeEach(function() {
        return rules = {
          param: {
            type: 'float'
          }
        };
      });
      it('accepts floats', function() {
        return expectValid({
          param: 1.23
        });
      });
      it('accepts integers', function() {
        return expectValid({
          param: 123
        });
      });
      return it('rejects other objects', function() {
        return expectError({
          param: '123'
        });
      });
    });
    describe('integer', function() {
      beforeEach(function() {
        return rules = {
          param: {
            type: 'integer'
          }
        };
      });
      it('accepts integers', function() {
        return expectValid({
          param: 123
        });
      });
      return it('rejects other objects', function() {
        return expectError({
          param: '123'
        });
      });
    });
    describe('binary', function() {
      beforeEach(function() {
        return rules = {
          param: {
            type: 'base64'
          }
        };
      });
      it('accepts strings', function() {
        return expectValid({
          param: 'abc'
        });
      });
      it('accepts Buffers', function() {
        return expectValid({
          param: new Buffer(100)
        });
      });
      return it('rejects other objects', function() {
        return expectError({
          param: {}
        });
      });
    });
    describe('binary', function() {
      beforeEach(function() {
        return rules = {
          param: {
            type: 'binary'
          }
        };
      });
      it('accepts strings', function() {
        return expectValid({
          param: 'abc'
        });
      });
      it('accepts Buffers', function() {
        return expectValid({
          param: new Buffer(100)
        });
      });
      it('accepts Streams', function() {
        var Stream;
        Stream = require('stream').Stream;
        return expectValid({
          param: new Stream()
        });
      });
      return it('rejects other objects', function() {
        return expectError({
          param: {}
        });
      });
    });
    describe('payloads', function() {
      return it('validates from payload key if rules include an xml element', function() {
        rules = {
          xml: 'body',
          type: 'structure',
          members: {
            notbody: {
              type: 'string'
            },
            body: {
              required: true,
              type: 'structure',
              members: {
                enabled: {
                  type: 'boolean'
                }
              }
            }
          }
        };
        return expectValid({
          enabled: true,
          notbody: 'true'
        });
      });
    });
    return describe('error messages', function() {
      beforeEach(function() {
        return rules = {
          config: {
            type: 'structure',
            members: {
              settings: {
                type: 'structure',
                members: {
                  enabled: {
                    type: 'boolean'
                  }
                }
              }
            }
          }
        };
      });
      it('throws helpful messages for unknown params', function() {
        var msg;
        msg = 'Unexpected key \'fake\' found in params';
        return expectError(msg, {
          fake: 'value'
        });
      });
      it('throws helpful messages for nested unknown params', function() {
        var msg;
        msg = 'Unexpected key \'fake\' found in params.config.settings';
        return expectError(msg, {
          config: {
            settings: {
              fake: 'value'
            }
          }
        });
      });
      it('throws helpful messages for missing required params', function() {
        var msg;
        msg = 'Missing required key \'needed\' in params.config.settings';
        rules.config.members.settings.members.needed = {
          required: true
        };
        return expectError(msg, {
          config: {
            settings: {}
          }
        });
      });
      it('throws helpul messages for invalid structures', function() {
        var msg;
        msg = 'Expected params.config.settings to be a structure';
        return expectError(msg, {
          config: {
            settings: 'abc'
          }
        });
      });
      it('throws helpul messages for invalid lists', function() {
        var msg;
        msg = 'Expected params.config.settings.tags to be an Array';
        rules.config.members.settings.members.tags = {
          type: 'list',
          members: {}
        };
        return expectError(msg, {
          config: {
            settings: {
              tags: 123
            }
          }
        });
      });
      it('throws helpful messages for invalid list members', function() {
        var msg;
        msg = 'Expected params.config.items[1].value to be a number';
        rules['config']['members']['items'] = {
          type: 'list',
          members: {
            type: 'structure',
            members: {
              value: {
                type: 'integer'
              }
            }
          }
        };
        return expectError(msg, {
          config: {
            items: [
              {
                value: 123
              }, {
                value: 'abc'
              }, {
                value: 321
              }
            ]
          }
        });
      });
      it('throws helpful messages for invalid maps', function() {
        var msg;
        msg = 'Expected params.config.settings.tags to be a map';
        rules['config']['members']['settings']['members']['tags'] = {
          type: 'map',
          members: {}
        };
        return expectError(msg, {
          config: {
            settings: {
              tags: '123'
            }
          }
        });
      });
      it('throws helpful messages for invalid map members', function() {
        var msg;
        msg = 'Expected params.config.counts[\'red\'] to be a number';
        rules['config']['members']['counts'] = {
          type: 'map',
          members: {
            type: 'integer'
          }
        };
        return expectError(msg, {
          config: {
            counts: {
              red: true
            }
          }
        });
      });
      it('throws helpful messages for invalid strings', function() {
        var msg;
        msg = "Expected params.config.settings.name to be a string";
        rules['config']['members']['settings']['members']['name'] = {
          type: 'string'
        };
        return expectError(msg, {
          config: {
            settings: {
              name: null
            }
          }
        });
      });
      it('throws helpful messages for invalid integers', function() {
        var msg;
        msg = "Expected params.config.settings.count to be a number";
        rules['config']['members']['settings']['members']['count'] = {
          type: 'integer'
        };
        return expectError(msg, {
          config: {
            settings: {
              count: null
            }
          }
        });
      });
      it('throws helpful messages for invalid timestamps', function() {
        var msg;
        msg = "Expected params.config.settings.when to be a " + "Date object, ISO-8601 string, or a UNIX timestamp";
        rules['config']['members']['settings']['members']['when'] = {
          type: 'timestamp'
        };
        return expectError(msg, {
          config: {
            settings: {
              when: null
            }
          }
        });
      });
      it('throws helpful messages for invalid booleans', function() {
        var msg;
        msg = "Expected params.config.settings.enabled to be a boolean";
        return expectError(msg, {
          config: {
            settings: {
              enabled: null
            }
          }
        });
      });
      it('throws helpful messages for invalid floats', function() {
        var msg;
        msg = "Expected params.config.settings.value to be a number";
        rules.config.members.settings.members.value = {
          type: 'float'
        };
        return expectError(msg, {
          config: {
            settings: {
              value: null
            }
          }
        });
      });
      it('throws helpful messages for invalid base64 params', function() {
        var msg;
        msg = "Expected params.config.settings.data to be a " + "string, Buffer, or Stream";
        rules.config.members.settings.members.data = {
          type: 'base64'
        };
        return expectError(msg, {
          config: {
            settings: {
              data: null
            }
          }
        });
      });
      return it('throws helpful messages for invalid binary params', function() {
        var msg;
        msg = "Expected params.config.settings.data to be a " + "string, Buffer, or Stream";
        rules.config.members.settings.members.data = {
          type: 'binary'
        };
        return expectError(msg, {
          config: {
            settings: {
              data: null
            }
          }
        });
      });
    });
  });

}).call(this);

},{"./helpers":93,"buffer":70,"stream":66}],99:[function(require,module,exports){
var process=require("__browserify_process");(function() {
  var AWS, Buffer, EventEmitter, MockService, helpers;

  helpers = require('./helpers');

  EventEmitter = require('events').EventEmitter;

  AWS = helpers.AWS;

  MockService = helpers.MockService;

  Buffer = require('buffer').Buffer;

  describe('AWS.Request', function() {
    var service;
    service = null;
    beforeEach(function() {
      return service = new MockService;
    });
    describe('isPageable', function() {
      beforeEach(function() {
        return service = new AWS.Service({
          apiConfig: {
            operations: {
              mockMethod: {
                input: {},
                output: {}
              }
            }
          }
        });
      });
      it('is pageable if it has a pagination config for the operation', function() {
        var request;
        service.api.pagination = {
          mockMethod: {
            limitKey: 'Marker'
          }
        };
        request = service.makeRequest('mockMethod');
        return expect(request.isPageable()).toEqual(true);
      });
      it('is not pageable if the pagination config does not exist for the operation', function() {
        service.api.pagination = {};
        return expect(service.makeRequest('mockMethod').isPageable()).toEqual(false);
      });
      return it('is not pageable if the config does not exist for the service', function() {
        delete service.api.pagination;
        return expect(service.makeRequest('mockMethod').isPageable()).toEqual(false);
      });
    });
    describe('send', function() {
      return it('accepts an optional callback', function() {
        var data, error;
        error = null;
        data = null;
        helpers.mockHttpResponse(200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']);
        runs(function() {
          return service.makeRequest('mockMethod').send(function(e, d) {
            return data = d;
          });
        });
        waitsFor(function() {
          return data;
        });
        return runs(function() {
          return expect(data).toEqual('FOOBARBAZQUX');
        });
      });
    });
    describe('abort', function() {
      return it('allows aborting requests', function() {
        var data, error;
        error = null;
        data = null;
        helpers.mockHttpResponse(200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']);
        runs(function() {
          var req;
          req = service.makeRequest('mockMethod');
          req.send(function(e, d) {
            error = e;
            return data = d;
          });
          return req.abort();
        });
        waitsFor(function() {
          return error || data;
        });
        return runs(function() {
          expect(data).toEqual(null);
          expect(error.code).toEqual('RequestAbortedError');
          return expect(error.message).toMatch(/aborted by user/);
        });
      });
    });
    return describe('createReadStream', function() {
      it('streams data', function() {
        var data, done;
        data = '';
        done = false;
        helpers.mockHttpResponse(200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']);
        runs(function() {
          var request, s;
          request = service.makeRequest('mockMethod');
          s = request.createReadStream();
          s.on('end', function() {
            return done = true;
          });
          return s.on('data', function(c) {
            return data += c.toString();
          });
        });
        waitsFor(function() {
          return done === true;
        });
        return runs(function() {
          return expect(data).toEqual('FOOBARBAZQUX');
        });
      });
      it('streams2 data (readable event)', function() {
        var data, done;
        if (AWS.HttpClient.streamsApiVersion < 2) {
          return;
        }
        data = '';
        done = false;
        helpers.mockHttpResponse(200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']);
        runs(function() {
          var request, s;
          request = service.makeRequest('mockMethod');
          s = request.createReadStream();
          s.on('end', function() {
            return done = true;
          });
          return s.on('readable', function() {
            var chunk, e;
            try {
              chunk = s.read();
              if (chunk) {
                return data += chunk;
              }
            } catch (_error) {
              e = _error;
              return console.log(e.stack);
            }
          });
        });
        waitsFor(function() {
          return done === true;
        });
        return runs(function() {
          return expect(data).toEqual('FOOBARBAZQUX');
        });
      });
      it('streams2 data does not hang out while waiting response', function() {
        var data, done;
        if (AWS.HttpClient.streamsApiVersion < 2) {
          return;
        }
        data = '';
        done = false;
        helpers.mockHttpResponse(200, {}, ['FOO', 'BAR', null, null, 'BAZ', 'QUX']);
        runs(function() {
          var request, s;
          request = service.makeRequest('mockMethod');
          s = request.createReadStream();
          s.on('end', function() {
            return done = true;
          });
          return s.on('readable', function() {
            var chunk, e;
            try {
              chunk = s.read();
              if (chunk) {
                return data += chunk;
              }
            } catch (_error) {
              e = _error;
              return console.log(e.stack);
            }
          });
        });
        waitsFor(function() {
          return done === true;
        });
        return runs(function() {
          return expect(data).toEqual('FOOBARBAZQUX');
        });
      });
      it('does not stream data on failures', function() {
        var data, done, error;
        data = '';
        error = null;
        done = false;
        helpers.mockHttpResponse(404, {}, ['No such file']);
        runs(function() {
          var request, s;
          request = service.makeRequest('mockMethod');
          s = request.createReadStream();
          s.on('end', function() {
            return done = true;
          });
          s.on('error', function(e) {
            error = e;
            return done = true;
          });
          return s.on('data', function(c) {
            return data += c.toString();
          });
        });
        waitsFor(function() {
          return done === true;
        });
        return runs(function() {
          expect(data).toEqual('');
          return expect(error.statusCode).toEqual(404);
        });
      });
      it('retries temporal errors and streams resulting successful response', function() {
        var data, done, error;
        data = '';
        error = null;
        done = false;
        helpers.mockIntermittentFailureResponse(2, 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']);
        runs(function() {
          var request, s;
          request = service.makeRequest('mockMethod');
          s = request.createReadStream();
          s.on('end', function() {
            return done = true;
          });
          s.on('error', function(e) {
            error = e;
            return done = true;
          });
          return s.on('data', function(c) {
            return data += c.toString();
          });
        });
        waitsFor(function() {
          return done === true;
        });
        return runs(function() {
          expect(data).toEqual('FOOBARBAZQUX');
          return expect(error).toEqual(null);
        });
      });
      it('streams partial data and raises an error', function() {
        var data, done, error, reqError;
        data = '';
        error = null;
        reqError = null;
        done = false;
        spyOn(AWS.HttpClient, 'getInstance');
        AWS.HttpClient.getInstance.andReturn({
          handleRequest: function(req, opts, cb, errCb) {
            req = new EventEmitter();
            req.statusCode = 200;
            req.headers = {};
            cb(req);
            AWS.util.arrayEach(['FOO', 'BAR', 'BAZ'], function(str) {
              return req.emit('data', new Buffer(str));
            });
            return errCb(new Error('fail'));
          }
        });
        runs(function() {
          var request, s;
          request = service.makeRequest('mockMethod');
          request.on('error', function(e) {
            return reqError = e;
          });
          request.on('complete', function() {
            return done = true;
          });
          s = request.createReadStream();
          s.on('error', function(e) {
            return error = e;
          });
          return s.on('data', function(c) {
            return data += c.toString();
          });
        });
        waitsFor(function() {
          return done === true;
        });
        return runs(function() {
          expect(data).toEqual('FOOBARBAZ');
          expect(error.message).toEqual('fail');
          return expect(reqError.message).toEqual('fail');
        });
      });
      return it('fails if retry occurs in the middle of a failing stream', function() {
        var data, error, reqError, resp, retryCount;
        data = '';
        error = null;
        reqError = null;
        resp = null;
        retryCount = 0;
        spyOn(AWS.HttpClient, 'getInstance');
        AWS.HttpClient.getInstance.andReturn({
          handleRequest: function(req, opts, cb, errCb) {
            req = new EventEmitter();
            req.statusCode = 200;
            req.headers = {};
            return process.nextTick(function() {
              cb(req);
              AWS.util.arrayEach(['FOO', 'BAR', 'BAZ', 'QUX'], function(str) {
                if (str === 'BAZ' && retryCount < 1) {
                  process.nextTick(function() {
                    retryCount += 1;
                    return errCb({
                      code: 'NetworkingError',
                      message: 'FAIL!',
                      retryable: true
                    });
                  });
                  return AWS.util.abort;
                } else {
                  return process.nextTick(function() {
                    return req.emit('data', new Buffer(str));
                  });
                }
              });
              if (retryCount >= 1) {
                return process.nextTick(function() {
                  return req.emit('end');
                });
              }
            });
          }
        });
        runs(function() {
          var request, s;
          request = service.makeRequest('mockMethod');
          request.on('error', function(e) {
            return reqError = e;
          });
          request.on('complete', function(r) {
            return resp = r;
          });
          s = request.createReadStream();
          s.on('error', function(e) {
            return error = e;
          });
          return s.on('data', function(c) {
            return data += c.toString();
          });
        });
        waitsFor(function() {
          return resp !== null;
        });
        return runs(function() {
          expect(data).toEqual('FOOBAR');
          expect(error.code).toEqual('NetworkingError');
          expect(reqError.code).toEqual('NetworkingError');
          expect(reqError.hostname).toEqual('mockservice.mock-region.amazonaws.com');
          expect(reqError.region).toEqual('mock-region');
          return expect(resp.retryCount).toEqual(0);
        });
      });
    });
  });

}).call(this);

},{"./helpers":93,"__browserify_process":82,"buffer":70,"events":62}],100:[function(require,module,exports){
(function() {
  var AWS, EventEmitter, helpers;

  helpers = require('./helpers');

  EventEmitter = require('events').EventEmitter;

  AWS = helpers.AWS;

  describe('AWS.Response', function() {
    var fill, makePageable, response, service;
    service = null;
    response = null;
    beforeEach(function() {
      service = new AWS.Service({
        apiConfig: {
          operations: {
            op: {
              input: {},
              output: {}
            }
          }
        }
      });
      return response = new AWS.Response(service.makeRequest('op'));
    });
    makePageable = function() {
      return service.api.pagination = {
        op: {
          limitKey: 'Limit',
          inputToken: 'Marker',
          outputToken: 'Marker',
          resultKey: 'Result'
        }
      };
    };
    fill = function(err, data, pageable) {
      if (pageable) {
        makePageable();
      }
      response.error = err;
      return response.data = data;
    };
    describe('hasNextPage', function() {
      it('returns undefined if the request is not pageable', function() {
        fill(null, {
          Marker: 'next_page'
        });
        return expect(response.hasNextPage()).toEqual(void 0);
      });
      it('returns false if there is no marker in the response', function() {
        fill(null, {}, true);
        return expect(response.hasNextPage()).toEqual(false);
      });
      it('returns false if the response returned an error', function() {
        fill(new Error, null, true);
        return expect(response.hasNextPage()).toEqual(false);
      });
      return it('returns true if there is a marker in the response', function() {
        fill(null, {
          Marker: 'next_page'
        }, true);
        return expect(response.hasNextPage()).toEqual(true);
      });
    });
    return describe('nextPage', function() {
      it('throws an exception if the service has no pagination information', function() {
        return expect(function() {
          return response.nextPage();
        }).toThrow('No pagination configuration for service');
      });
      it('throws an exception if the operation has no pagination information', function() {
        service.api.pagination = {};
        return expect(function() {
          return response.nextPage();
        }).toThrow('No pagination configuration for op');
      });
      it('returns null if there are no more pages', function() {
        fill(null, {}, true);
        return expect(response.nextPage()).toEqual(null);
      });
      it('returns a request object with the next page marker filled in params', function() {
        var req;
        fill(null, {
          Marker: 'next_page'
        }, true);
        req = response.nextPage();
        expect(req.params.Marker).toEqual('next_page');
        return expect(req.operation).toEqual(response.request.operation);
      });
      it('throws error if response returned an error and there is no callback', function() {
        fill(new Error('error!'), null, true);
        return expect(function() {
          return response.nextPage();
        }).toThrow('error!');
      });
      it('sends the request if passed with a callback', function() {
        var data, err;
        err = null;
        data = null;
        helpers.mockHttpResponse(200, {}, ['']);
        fill(null, {
          Marker: 'next_page'
        }, true);
        runs(function() {
          return response.nextPage(function(e, d) {
            err = e;
            return data = d;
          });
        });
        waitsFor(function() {
          return err || data;
        });
        return runs(function() {
          expect(err).toEqual(null);
          return expect(data).toEqual({});
        });
      });
      it('passes null to callback if there are no more pages', function() {
        fill(null, {}, true);
        return response.nextPage(function(err, data) {
          expect(err).toEqual(null);
          return expect(data).toEqual(null);
        });
      });
      return it('passes error through if original response returned an error', function() {
        fill('error!', null, true);
        return response.nextPage(function(err, data) {
          expect(err).toEqual('error!');
          return expect(data).toEqual(null);
        });
      });
    });
  });

}).call(this);

},{"./helpers":93,"events":62}],101:[function(require,module,exports){
(function() {
  var AWS, helpers;

  helpers = require('./helpers');

  AWS = helpers.AWS;

  describe('AWS.SequentialExecutor', function() {
    beforeEach(function() {
      return this.emitter = new AWS.SequentialExecutor();
    });
    describe('addListeners', function() {
      it('accepts a hash of events and functions', function() {
        var listeners, triggers;
        triggers = [0, 0, 0];
        listeners = {
          eventName: {
            ConstantName1: function() {
              return triggers[0] = 1;
            },
            ConstantName2: function() {
              return triggers[1] = 1;
            }
          },
          otherEventName: {
            ConstantName3: function() {
              return triggers[2] = 1;
            }
          }
        };
        this.emitter.addListeners(listeners);
        expect(triggers).toEqual([0, 0, 0]);
        this.emitter.emit('eventName');
        expect(triggers).toEqual([1, 1, 0]);
        this.emitter.emit('otherEventName');
        return expect(triggers).toEqual([1, 1, 1]);
      });
      return it('accepts a SequentialExecutor object', function() {
        var listeners, triggers;
        triggers = [0, 0, 0];
        listeners = new AWS.SequentialExecutor();
        listeners.on('eventName', function() {
          return triggers[0] = 1;
        });
        listeners.on('eventName', function() {
          return triggers[1] = 1;
        });
        listeners.on('otherEventName', function() {
          return triggers[2] = 1;
        });
        this.emitter.addListeners(listeners);
        expect(triggers).toEqual([0, 0, 0]);
        this.emitter.emit('eventName');
        expect(triggers).toEqual([1, 1, 0]);
        this.emitter.emit('otherEventName');
        return expect(triggers).toEqual([1, 1, 1]);
      });
    });
    describe('addNamedListener', function() {
      it('defines a constant with the callback', function() {
        var spy;
        spy = jasmine.createSpy();
        this.emitter.addNamedListener('CONSTNAME', 'eventName', spy);
        expect(this.emitter.CONSTNAME).toBe(spy);
        this.emitter.emit('eventName', ['argument']);
        return expect(spy).toHaveBeenCalledWith('argument');
      });
      return it('is chainable', function() {
        var r;
        r = this.emitter.addNamedListener('CONSTNAME', 'eventName', function() {});
        return expect(r).toBe(this.emitter);
      });
    });
    describe('addNamedListeners', function() {
      it('is chainable', function() {
        var r;
        r = this.emitter.addNamedListeners(function() {});
        return expect(r).toBe(this.emitter);
      });
      return it('provides an add function in callback to call addNamedListener', function() {
        var spy1, spy2;
        spy1 = jasmine.createSpy();
        spy2 = jasmine.createSpy();
        this.emitter.addNamedListeners(function(add) {
          add('CONST1', 'event1', spy1);
          return add('CONST2', 'event2', spy2);
        });
        expect(this.emitter.CONST1).toBe(spy1);
        expect(this.emitter.CONST2).toBe(spy2);
        this.emitter.emit('event1', ['arg1']);
        this.emitter.emit('event2', ['arg2']);
        expect(spy1).toHaveBeenCalledWith('arg1');
        return expect(spy2).toHaveBeenCalledWith('arg2');
      });
    });
    return describe('domain support', function() {
      var domain;
      domain = null;
      beforeEach(function() {
        return domain = require('domain').create();
      });
      afterEach(function() {
        return domain.dispose();
      });
      return it('supports domains', function() {
        var thrown;
        helpers.mockHttpResponse(200, {}, 'Success!');
        thrown = null;
        domain.on('error', function(err) {
          return thrown = err;
        });
        domain.run(function() {
          var service;
          service = new MockService();
          return service.makeRequest('operationName', function() {
            throw 'ERROR';
          });
        });
        return expect(thrown).toEqual('ERROR');
      });
    });
  });

}).call(this);

},{"./helpers":93,"domain":60}],102:[function(require,module,exports){
(function() {
  var AWS, MockService, helpers;

  helpers = require('./helpers');

  AWS = helpers.AWS;

  MockService = helpers.MockService;

  describe('AWS.Service', function() {
    var config, retryableError, service;
    config = null;
    service = null;
    retryableError = function(error, result) {
      return expect(service.retryableError(error)).toEqual(result);
    };
    beforeEach(function() {
      config = new AWS.Config();
      return service = new AWS.Service(config);
    });
    describe('constructor', function() {
      it('should use AWS.config copy if no config is provided', function() {
        service = new AWS.Service();
        expect(service.config).not.toBe(AWS.config);
        return expect(service.config.sslEnabled).toEqual(true);
      });
      it('should merge custom options on top of global defaults if config provided', function() {
        service = new AWS.Service({
          maxRetries: 5
        });
        expect(service.config.sslEnabled).toEqual(true);
        return expect(service.config.maxRetries).toEqual(5);
      });
      it('merges credential data into config', function() {
        service = new AWS.Service({
          accessKeyId: 'foo',
          secretAccessKey: 'bar'
        });
        expect(service.config.credentials.accessKeyId).toEqual('foo');
        return expect(service.config.credentials.secretAccessKey).toEqual('bar');
      });
      it('should allow AWS.config to be object literal', function() {
        var cfg;
        cfg = AWS.config;
        AWS.config = {
          maxRetries: 20
        };
        service = new AWS.Service({});
        expect(service.config.maxRetries).toEqual(20);
        expect(service.config.sslEnabled).toEqual(true);
        return AWS.config = cfg;
      });
      it('tries to construct service with latest API version', function() {
        var CustomService, errmsg;
        CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05']);
        errmsg = "Could not find API configuration custom-2001-01-01";
        return expect(function() {
          return new CustomService();
        }).toThrow(errmsg);
      });
      it('tries to construct service with exact API version match', function() {
        var CustomService, errmsg;
        CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05']);
        errmsg = "Could not find API configuration custom-1999-05-05";
        return expect(function() {
          return new CustomService({
            apiVersion: '1999-05-05'
          });
        }).toThrow(errmsg);
      });
      it('tries to construct service with fuzzy API version match', function() {
        var CustomService, errmsg;
        CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05']);
        errmsg = "Could not find API configuration custom-1999-05-05";
        return expect(function() {
          return new CustomService({
            apiVersion: '2000-01-01'
          });
        }).toThrow(errmsg);
      });
      it('uses global apiVersion value when constructing versioned services', function() {
        var CustomService, errmsg;
        AWS.config.apiVersion = '2002-03-04';
        CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05']);
        errmsg = "Could not find API configuration custom-2001-01-01";
        expect(function() {
          return new CustomService;
        }).toThrow(errmsg);
        return AWS.config.apiVersion = null;
      });
      it('uses global apiVersions value when constructing versioned services', function() {
        var CustomService, errmsg;
        AWS.config.apiVersions = {
          custom: '2002-03-04'
        };
        CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05']);
        errmsg = "Could not find API configuration custom-2001-01-01";
        expect(function() {
          return new CustomService;
        }).toThrow(errmsg);
        return AWS.config.apiVersions = {};
      });
      it('uses service specific apiVersions before apiVersion', function() {
        var CustomService, errmsg;
        AWS.config.apiVersions = {
          custom: '2000-01-01'
        };
        AWS.config.apiVersion = '2002-03-04';
        CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05']);
        errmsg = "Could not find API configuration custom-1999-05-05";
        expect(function() {
          return new CustomService;
        }).toThrow(errmsg);
        AWS.config.apiVersion = null;
        return AWS.config.apiVersions = {};
      });
      it('tries to construct service with fuzzy API version match', function() {
        var CustomService, errmsg;
        CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05']);
        errmsg = "Could not find API configuration custom-1999-05-05";
        return expect(function() {
          return new CustomService({
            apiVersion: '2000-01-01'
          });
        }).toThrow(errmsg);
      });
      it('fails if apiVersion matches nothing', function() {
        var CustomService, errmsg;
        CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05']);
        errmsg = "Could not find custom API to satisfy version constraint `1998-01-01'";
        return expect(function() {
          return new CustomService({
            apiVersion: '1998-01-01'
          });
        }).toThrow(errmsg);
      });
      return it('allows construction of services from one-off apiConfig properties', function() {
        service = new AWS.Service({
          apiConfig: {
            operations: {
              operationName: {
                input: {},
                output: {}
              }
            }
          }
        });
        expect(typeof service.operationName).toEqual('function');
        return expect(service.operationName() instanceof AWS.Request).toEqual(true);
      });
    });
    describe('setEndpoint', function() {
      var FooService;
      FooService = null;
      beforeEach(function() {
        return FooService = AWS.util.inherit(AWS.Service, {
          api: {
            endpointPrefix: 'fooservice'
          }
        });
      });
      it('uses specified endpoint if provided', function() {
        service = new FooService();
        service.setEndpoint('notfooservice.amazonaws.com');
        return expect(service.endpoint.host).toEqual('notfooservice.amazonaws.com');
      });
      it('uses global endpoint if defined on service API', function() {
        FooService.prototype.api.globalEndpoint = 'fooservice.amazonaws.com';
        service = new FooService();
        service.setEndpoint();
        return expect(service.endpoint.host).toEqual('fooservice.amazonaws.com');
      });
      return it('generates endpoint based on region if no global endpoint / not provided', function() {
        service = new FooService({
          region: 'someregion'
        });
        service.setEndpoint();
        return expect(service.endpoint.host).toEqual('fooservice.someregion.amazonaws.com');
      });
    });
    describe('makeRequest', function() {
      it('it treats params as an optinal parameter', function() {
        helpers.mockHttpResponse(200, {}, ['FOO', 'BAR']);
        service = new MockService();
        return service.makeRequest('operationName', function(err, data) {
          return expect(data).toEqual('FOOBAR');
        });
      });
      it('yields data to the callback', function() {
        var req;
        helpers.mockHttpResponse(200, {}, ['FOO', 'BAR']);
        service = new MockService();
        return req = service.makeRequest('operation', function(err, data) {
          expect(err).toEqual(null);
          return expect(data).toEqual('FOOBAR');
        });
      });
      it('yields service errors to the callback', function() {
        var req;
        helpers.mockHttpResponse(500, {}, ['ServiceError']);
        service = new MockService({
          maxRetries: 0
        });
        return req = service.makeRequest('operation', {}, function(err, data) {
          expect(err).toEqual({
            code: 'ServiceError',
            message: null,
            retryable: true,
            statusCode: 500
          });
          return expect(data).toEqual(null);
        });
      });
      it('yields network errors to the callback', function() {
        var error, req;
        error = {
          code: 'NetworkingError'
        };
        helpers.mockHttpResponse(error);
        service = new MockService({
          maxRetries: 0
        });
        return req = service.makeRequest('operation', {}, function(err, data) {
          expect(err).toEqual(error);
          return expect(data).toEqual(null);
        });
      });
      it('does not send the request if a callback function is omitted', function() {
        var httpClient;
        helpers.mockHttpResponse(200, {}, ['FOO', 'BAR']);
        httpClient = AWS.HttpClient.getInstance();
        spyOn(httpClient, 'handleRequest');
        new MockService().makeRequest('operation');
        return expect(httpClient.handleRequest).not.toHaveBeenCalled();
      });
      it('allows parameter validation to be disabled in config', function() {
        var req;
        helpers.mockHttpResponse(200, {}, ['FOO', 'BAR']);
        service = new MockService({
          paramValidation: false
        });
        req = service.makeRequest('operation', {}, function(err, data) {
          expect(err).toEqual(null);
          return expect(data).toEqual('FOOBAR');
        });
        return describe('bound parameters', function() {
          it('accepts toplevel bound parameters on the service', function() {
            service = new AWS.S3({
              params: {
                Bucket: 'bucket',
                Key: 'key'
              }
            });
            req = service.makeRequest('getObject');
            return expect(req.params).toEqual({
              Bucket: 'bucket',
              Key: 'key'
            });
          });
          it('ignores bound parameters not in input members', function() {
            service = new AWS.S3({
              params: {
                Bucket: 'bucket',
                Key: 'key'
              }
            });
            req = service.makeRequest('listObjects');
            return expect(req.params).toEqual({
              Bucket: 'bucket'
            });
          });
          return it('can override bound parameters', function() {
            var params;
            service = new AWS.S3({
              params: {
                Bucket: 'bucket',
                Key: 'key'
              }
            });
            params = {
              Bucket: 'notBucket'
            };
            req = service.makeRequest('listObjects', params);
            expect(params).not.toBe(req.params);
            return expect(req.params).toEqual({
              Bucket: 'notBucket'
            });
          });
        });
      });
      return describe('global events', function() {
        return it('adds AWS.events listeners to requests', function() {
          var event;
          helpers.mockHttpResponse(200, {}, ['FOO', 'BAR']);
          event = jasmine.createSpy();
          AWS.events.on('complete', event);
          new MockService().makeRequest('operation').send();
          return expect(event).toHaveBeenCalled();
        });
      });
    });
    describe('retryableError', function() {
      it('should retry on throttle error', function() {
        return retryableError({
          code: 'ProvisionedThroughputExceededException',
          statusCode: 400
        }, true);
      });
      it('should retry on expired credentials error', function() {
        return retryableError({
          code: 'ExpiredTokenException',
          statusCode: 400
        }, true);
      });
      it('should retry on 500 or above regardless of error', function() {
        retryableError({
          code: 'Error',
          statusCode: 500
        }, true);
        return retryableError({
          code: 'RandomError',
          statusCode: 505
        }, true);
      });
      return it('should not retry when error is < 500 level status code', function() {
        retryableError({
          code: 'Error',
          statusCode: 200
        }, false);
        retryableError({
          code: 'Error',
          statusCode: 302
        }, false);
        return retryableError({
          code: 'Error',
          statusCode: 404
        }, false);
      });
    });
    return describe('numRetries', function() {
      it('should use config max retry value if defined', function() {
        service.config.maxRetries = 30;
        return expect(service.numRetries()).toEqual(30);
      });
      return it('should use defaultRetries defined on object if undefined on config', function() {
        service.defaultRetryCount = 13;
        service.config.maxRetries = void 0;
        return expect(service.numRetries()).toEqual(13);
      });
    });
  });

}).call(this);

},{"./helpers":93}],103:[function(require,module,exports){
(function() {
  var AWS, Buffer;

  AWS = require('../../lib/core');

  Buffer = require('buffer').Buffer;

  require('../../lib/service_interface/json');

  describe('AWS.ServiceInterface.Json', function() {
    var MockJSONClient, request, response, svc;
    MockJSONClient = AWS.util.inherit(AWS.Service, {
      endpointPrefix: 'mockservice',
      api: {
        targetPrefix: 'prefix',
        operations: {
          operationName: {
            name: 'OperationName',
            input: {
              type: 'structure',
              members: {}
            }
          }
        }
      }
    });
    AWS.Service.defineMethods(MockJSONClient);
    request = null;
    response = null;
    svc = eval(this.description);
    beforeEach(function() {
      var service;
      service = new MockJSONClient({
        region: 'region'
      });
      request = new AWS.Request(service, 'operationName');
      return response = new AWS.Response(request);
    });
    describe('buildRequest', function() {
      var buildRequest;
      buildRequest = function() {
        return svc.buildRequest(request);
      };
      it('should use POST method requests', function() {
        buildRequest();
        return expect(request.httpRequest.method).toEqual('POST');
      });
      it('should perform all operations on root (/)', function() {
        buildRequest();
        return expect(request.httpRequest.path).toEqual('/');
      });
      it('should set Content-Type header', function() {
        buildRequest();
        return expect(request.httpRequest.headers['Content-Type']).toEqual('application/x-amz-json-1.0');
      });
      it('should set X-Amz-Target header', function() {
        buildRequest();
        return expect(request.httpRequest.headers['X-Amz-Target']).toEqual('prefix.OperationName');
      });
      it('should set the body to JSON serialized params', function() {
        request.params = {
          foo: 'bar'
        };
        buildRequest();
        return expect(request.httpRequest.body).toEqual('{"foo":"bar"}');
      });
      return it('should preserve numeric types', function() {
        request.params = {
          count: 3
        };
        buildRequest();
        return expect(request.httpRequest.body).toEqual('{"count":3}');
      });
    });
    describe('extractError', function() {
      var extractError;
      extractError = function(body) {
        response.httpResponse.statusCode = 500;
        response.httpResponse.body = new Buffer(body);
        return svc.extractError(response);
      };
      it('removes prefixes from the error code', function() {
        extractError('{"__type":"com.amazon.coral.service#ErrorCode" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.code).toEqual('ErrorCode');
        return expect(response.data).toEqual(null);
      });
      it('returns the full code when a # is not present', function() {
        extractError('{"__type":"ErrorCode" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.code).toEqual('ErrorCode');
        return expect(response.data).toEqual(null);
      });
      it('returns the status code when the body is blank', function() {
        extractError('');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.code).toEqual(500);
        expect(response.error.message).toEqual(null);
        return expect(response.data).toEqual(null);
      });
      it('returns UnknownError when the error type is not set', function() {
        extractError('{"message":"Error Message" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.code).toEqual('UnknownError');
        expect(response.error.message).toEqual('Error Message');
        return expect(response.data).toEqual(null);
      });
      it('returns null for the message when not present', function() {
        extractError('{"__type":"ErrorCode" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.message).toEqual(null);
        return expect(response.data).toEqual(null);
      });
      it('returns the message when present', function() {
        extractError('{"__type":"ErrorCode", "message":"Error Message" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.message).toEqual('Error Message');
        return expect(response.data).toEqual(null);
      });
      it('returns the message when the message property is upper-cased', function() {
        extractError('{"__type":"ErrorCode", "Message":"Error Message" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.message).toEqual('Error Message');
        return expect(response.data).toEqual(null);
      });
      it('returns a special message for RequestEntityToLarge errors', function() {
        extractError('{"__type":"RequestEntityTooLarge" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.message).toEqual('Request body must be less than 1 MB');
        return expect(response.data).toEqual(null);
      });
      return it('extracts error type from "code" key (Glacier)', function() {
        extractError('{"code":"InvalidParameter"}');
        expect(response.error instanceof Error).toBeTruthy();
        return expect(response.error.code).toEqual('InvalidParameter');
      });
    });
    return describe('extractData', function() {
      var extractData;
      extractData = function(body) {
        response.httpResponse.statusCode = 200;
        response.httpResponse.body = new Buffer(body);
        return svc.extractData(response);
      };
      it('JSON parses http response bodies', function() {
        extractData('{"a":1, "b":"xyz"}');
        expect(response.error).toEqual(null);
        return expect(response.data).toEqual({
          a: 1,
          b: 'xyz'
        });
      });
      it('returns an empty object when the body is an empty string', function() {
        extractData('');
        expect(response.error).toEqual(null);
        return expect(response.data).toEqual({});
      });
      return it('returns an empty object when the body is null', function() {
        extractData('');
        expect(response.error).toEqual(null);
        return expect(response.data).toEqual({});
      });
    });
  });

}).call(this);

},{"../../lib/core":4,"../../lib/service_interface/json":13,"buffer":70}],104:[function(require,module,exports){
(function() {
  var AWS, Buffer;

  AWS = require('../../lib/core');

  Buffer = require('buffer').Buffer;

  require('../../lib/service_interface/query');

  describe('AWS.ServiceInterface.Query', function() {
    var request, response, service, svc;
    service = null;
    request = null;
    response = null;
    svc = eval(this.description);
    beforeEach(function() {
      service = new AWS.Service({
        apiConfig: {
          endpointPrefix: 'mockservice',
          apiVersion: '2012-01-01',
          operations: {
            operationName: {
              name: 'OperationName',
              input: {
                members: {
                  Input: {
                    members: {}
                  }
                }
              },
              output: {
                type: 'structure',
                members: {
                  Data: {
                    type: 'structure',
                    members: {
                      Name: {
                        type: 'string'
                      },
                      Count: {
                        type: 'float'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
      request = new AWS.Request(service, 'operationName');
      return response = new AWS.Response(request);
    });
    describe('buildRequest', function() {
      var buildRequest, stringify;
      stringify = function(params) {
        return AWS.util.queryParamsToString(params);
      };
      buildRequest = function(input) {
        if (input === void 0) {
          input = 'foo+bar: yuck/baz=~';
        }
        request.params = {
          Input: input
        };
        return svc.buildRequest(request);
      };
      it('should use POST method requests', function() {
        buildRequest();
        return expect(request.httpRequest.method).toEqual('POST');
      });
      it('should perform all operations on root (/)', function() {
        buildRequest();
        return expect(request.httpRequest.path).toEqual('/');
      });
      it('should set Content-Type header', function() {
        buildRequest();
        return expect(request.httpRequest.headers['Content-Type']).toEqual('application/x-www-form-urlencoded; charset=utf-8');
      });
      it('should add the api version param', function() {
        buildRequest();
        return expect(stringify(request.httpRequest.params)).toMatch(/Version=2012-01-01/);
      });
      it('should add the operation name as Action', function() {
        buildRequest();
        return expect(stringify(request.httpRequest.params)).toMatch(/Action=OperationName/);
      });
      it('should uri encode params properly', function() {
        buildRequest();
        return expect(stringify(request.httpRequest.params)).toMatch(/foo%2Bbar%3A%20yuck%2Fbaz%3D~/);
      });
      return it('encodes empty string values properly', function() {
        buildRequest('');
        return expect(stringify(request.httpRequest.params)).toMatch(/Input=($|&)/);
      });
    });
    describe('extractError', function() {
      var extractError;
      extractError = function(body) {
        if (body === void 0) {
          body = "<Error>\n  <Code>InvalidArgument</Code>\n  <Message>Provided param is bad</Message>\n</Error>";
        }
        response.httpResponse.statusCode = 400;
        response.httpResponse.body = new Buffer(body);
        return svc.extractError(response);
      };
      it('extracts error from UnknownOperationException', function() {
        extractError('<UnknownOperationException/>');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.code).toEqual('UnknownOperation');
        expect(response.error.message).toEqual('Unknown operation operationName');
        return expect(response.data).toEqual(null);
      });
      it('extracts the error code and message', function() {
        extractError();
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.code).toEqual('InvalidArgument');
        expect(response.error.message).toEqual('Provided param is bad');
        return expect(response.data).toEqual(null);
      });
      it('returns an empty error when the body is blank', function() {
        extractError('');
        expect(response.error.code).toEqual(400);
        expect(response.error.message).toEqual(null);
        return expect(response.data).toEqual(null);
      });
      it('extracts error when inside <Errors>', function() {
        extractError("<SomeResponse>\n  <Errors>\n    <Error>\n      <Code>code</Code><Message>msg</Message>\n    </Error>\n  </Errors>\n</SomeResponse>");
        expect(response.error.code).toEqual('code');
        return expect(response.error.message).toEqual('msg');
      });
      return it('extracts error when <Error> is nested', function() {
        extractError("<SomeResponse>\n  <Error>\n    <Code>code</Code><Message>msg</Message>\n  </Error>\n</SomeResponse>");
        expect(response.error.code).toEqual('code');
        return expect(response.error.message).toEqual('msg');
      });
    });
    return describe('extractData', function() {
      var extractData;
      extractData = function(body) {
        response.httpResponse.statusCode = 200;
        response.httpResponse.body = new Buffer(body);
        return svc.extractData(response);
      };
      it('parses the response using the operation output rules', function() {
        extractData("<xml>\n  <Data>\n    <Name>abc</Name>\n    <Count>123</Count>\n  </Data>\n</xml>");
        expect(response.error).toEqual(null);
        return expect(response.data).toEqual({
          Data: {
            Name: 'abc',
            Count: 123
          }
        });
      });
      it('performs default xml parsing when output rule is missing', function() {
        delete service.api.operations.operationName.output;
        extractData("<xml>\n  <Data>\n    <Name>abc</Name>\n    <Count>123</Count>\n  </Data>\n</xml>");
        expect(response.error).toEqual(null);
        return expect(response.data).toEqual({
          Data: {
            Name: 'abc',
            Count: '123'
          }
        });
      });
      it('removes wrapping result element if resultWrapped is set', function() {
        service.api.resultWrapped = true;
        extractData("<xml>\n  <OperationNameResult>\n    <Data>\n      <Name>abc</Name>\n      <Count>12345.5</Count>\n    </Data>\n  </OperationNameResult>\n</xml>");
        expect(response.error).toEqual(null);
        return expect(response.data).toEqual({
          Data: {
            Name: 'abc',
            Count: 12345.5
          }
        });
      });
      return it('does not fail if wrapping element is not present (resultWrapped=true)', function() {
        service.api.resultWrapped = true;
        extractData("<xml>\n  <NotWrapped><Data>abc</Data></NotWrapped>\n</xml>");
        expect(response.error).toEqual(null);
        return expect(response.data).toEqual({
          NotWrapped: {
            Data: 'abc'
          }
        });
      });
    });
  });

}).call(this);

},{"../../lib/core":4,"../../lib/service_interface/query":14,"buffer":70}],105:[function(require,module,exports){
(function() {
  var AWS;

  AWS = require('../../lib/core');

  require('../../lib/service_interface/query');

  describe('AWS.QueryParamSerializer', function() {
    var serialize;
    serialize = function(requestParams, rules) {
      var params, serializer;
      params = [];
      serializer = new AWS.QueryParamSerializer(rules);
      serializer.serialize(requestParams, function(name, value) {
        return params.push([name, value]);
      });
      return params;
    };
    describe('scalar params', function() {
      it('can serialize simple strings', function() {
        var params, rules;
        rules = {
          Name1: {
            type: 'string'
          },
          Name2: {
            type: 'string'
          }
        };
        params = serialize({
          Name1: 'abc',
          Name2: 'xyz'
        }, rules);
        return expect(params).toEqual([['Name1', 'abc'], ['Name2', 'xyz']]);
      });
      it('stringifies values', function() {
        var params, rules;
        rules = {
          Count: {
            type: 'string'
          }
        };
        params = serialize({
          Count: 1
        }, rules);
        return expect(params).toEqual([['Count', '1']]);
      });
      return it('defaults params to strings when type not specified', function() {
        var params, rules;
        rules = {
          ParamName: {}
        };
        params = serialize({
          ParamName: 'abc'
        }, rules);
        return expect(params).toEqual([['ParamName', 'abc']]);
      });
    });
    describe('structures', function() {
      it('works with deeply nested objects', function() {
        var params, rules;
        rules = {
          Aa: {
            type: 'structure',
            members: {
              Bb: {
                type: 'structure',
                members: {
                  Cc: {
                    type: 'structure',
                    members: {
                      Dd: {}
                    }
                  }
                }
              }
            }
          }
        };
        params = serialize({
          Aa: {
            Bb: {
              Cc: {
                Dd: 'value'
              }
            }
          }
        }, rules);
        return expect(params).toEqual([['Aa.Bb.Cc.Dd', 'value']]);
      });
      it('works with nested objects that have multiple properties', function() {
        var params, rules;
        rules = {
          Root: {
            type: 'structure',
            members: {
              Abc: {},
              Xyz: {}
            }
          },
          Root2: {}
        };
        params = serialize({
          Root: {
            Abc: '1',
            Xyz: '2'
          },
          Root2: '3'
        }, rules);
        return expect(params).toEqual([['Root.Abc', '1'], ['Root.Xyz', '2'], ['Root2', '3']]);
      });
      return it('applies structure member names', function() {
        var params, rules;
        rules = {
          Root: {
            type: 'structure',
            name: 'ROOT',
            members: {
              Leaf: {
                name: 'lEAF'
              }
            }
          }
        };
        params = serialize({
          Root: {
            Leaf: 'value'
          }
        }, rules);
        return expect(params).toEqual([['ROOT.lEAF', 'value']]);
      });
    });
    describe('lists', function() {
      describe('flattened', function() {
        it('numbers list members starting at 1', function() {
          var params, rules;
          rules = {
            Name: {
              type: 'list',
              flattened: true,
              members: {}
            }
          };
          params = serialize({
            Name: ['a', 'b', 'c']
          }, rules);
          return expect(params).toEqual([['Name.1', 'a'], ['Name.2', 'b'], ['Name.3', 'c']]);
        });
        it('Uses list-member names instead of the list name', function() {
          var params, rules;
          rules = {
            Root: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  flattened: true,
                  members: {
                    name: 'ListItem'
                  }
                }
              }
            }
          };
          params = serialize({
            Root: {
              Items: ['a', 'b', 'c']
            }
          }, rules);
          return expect(params).toEqual([['Root.ListItem.1', 'a'], ['Root.ListItem.2', 'b'], ['Root.ListItem.3', 'c']]);
        });
        it('accepts nested arrays', function() {
          var params, rules;
          rules = {
            Person: {
              type: 'structure',
              members: {
                Name: {
                  type: 'list',
                  flattened: true,
                  members: {}
                }
              }
            }
          };
          params = serialize({
            Person: {
              Name: ['a', 'b', 'c']
            }
          }, rules);
          return expect(params).toEqual([['Person.Name.1', 'a'], ['Person.Name.2', 'b'], ['Person.Name.3', 'c']]);
        });
        it('supports lists of complex types', function() {
          var params, rules;
          rules = {
            Root: {
              type: 'list',
              flattened: true,
              members: {
                type: 'structure',
                members: {
                  Aa: {},
                  Bb: {}
                }
              }
            }
          };
          params = serialize({
            Root: [
              {
                Aa: 'a1',
                Bb: 'b1'
              }, {
                Aa: 'a2',
                Bb: 'b2'
              }
            ]
          }, rules);
          return expect(params).toEqual([['Root.1.Aa', 'a1'], ['Root.1.Bb', 'b1'], ['Root.2.Aa', 'a2'], ['Root.2.Bb', 'b2']]);
        });
        return it('serialzes list members as strings when member rule not present', function() {
          var params, rules;
          rules = {
            Root: {
              type: 'list',
              flattened: true
            }
          };
          params = serialize({
            Root: ['a', 'b', 'c']
          }, rules);
          return expect(params).toEqual([['Root.1', 'a'], ['Root.2', 'b'], ['Root.3', 'c']]);
        });
      });
      return describe('non-flat', function() {
        it('adds a `.member` prefix to each list member', function() {
          var params, rules;
          rules = {
            Person: {
              type: 'list',
              members: {}
            }
          };
          params = serialize({
            Person: ['a', 'b', 'c']
          }, rules);
          return expect(params).toEqual([['Person.member.1', 'a'], ['Person.member.2', 'b'], ['Person.member.3', 'c']]);
        });
        it('ignores the list-member name', function() {
          var params, rules;
          rules = {
            Person: {
              type: 'list',
              members: {
                name: 'Name'
              }
            }
          };
          params = serialize({
            Person: ['a', 'b', 'c']
          }, rules);
          return expect(params).toEqual([['Person.member.1', 'a'], ['Person.member.2', 'b'], ['Person.member.3', 'c']]);
        });
        return it('observes both list name and list member name', function() {
          var params, rules;
          rules = {
            People: {
              type: 'list',
              name: 'Person',
              members: {
                name: 'Name'
              }
            }
          };
          params = serialize({
            People: ['a', 'b', 'c']
          }, rules);
          return expect(params).toEqual([['Person.member.1', 'a'], ['Person.member.2', 'b'], ['Person.member.3', 'c']]);
        });
      });
    });
    describe('maps', function() {
      it('accepts a hash (object) of arbitrary key/value pairs', function() {
        var data, params, rules;
        rules = {
          Attributes: {
            type: 'map',
            flattened: true,
            keys: {},
            members: {}
          }
        };
        data = {
          Attributes: {
            Color: 'red',
            Size: 'large',
            Value: 'low'
          }
        };
        params = serialize(data, rules);
        return expect(params).toEqual([['Attributes.1.key', 'Color'], ['Attributes.1.value', 'red'], ['Attributes.2.key', 'Size'], ['Attributes.2.value', 'large'], ['Attributes.3.key', 'Value'], ['Attributes.3.value', 'low']]);
      });
      return describe('non-flat', function() {
        return it('adds .entry. to name', function() {
          var data, params, rules;
          rules = {
            Attributes: {
              type: 'map',
              keys: {},
              members: {}
            }
          };
          data = {
            Attributes: {
              Color: 'red',
              Size: 'large',
              Value: 'low'
            }
          };
          params = serialize(data, rules);
          return expect(params).toEqual([['Attributes.entry.1.key', 'Color'], ['Attributes.entry.1.value', 'red'], ['Attributes.entry.2.key', 'Size'], ['Attributes.entry.2.value', 'large'], ['Attributes.entry.3.key', 'Value'], ['Attributes.entry.3.value', 'low']]);
        });
      });
    });
    describe('maps with member names', function() {
      return it('applies member name traits', function() {
        var data, params, rules;
        rules = {
          Attributes: {
            type: 'map',
            flattened: true,
            keys: {
              name: 'Name'
            },
            members: {
              name: 'Value'
            }
          }
        };
        data = {
          Attributes: {
            Color: 'red',
            Size: 'large',
            Value: 'low'
          }
        };
        params = serialize(data, rules);
        return expect(params).toEqual([['Attributes.1.Name', 'Color'], ['Attributes.1.Value', 'red'], ['Attributes.2.Name', 'Size'], ['Attributes.2.Value', 'large'], ['Attributes.3.Name', 'Value'], ['Attributes.3.Value', 'low']]);
      });
    });
    return describe('timestamps', function() {
      it('serializes timestamp to iso8601 strings by default', function() {
        var date, params, rules;
        date = new Date();
        rules = {
          Date: {
            type: 'timestamp'
          }
        };
        params = serialize({
          Date: date
        }, rules);
        return expect(params).toEqual([['Date', AWS.util.date.iso8601(date)]]);
      });
      return it('obeys format options in the rules', function() {
        var date, params, rules;
        date = new Date();
        rules = {
          Date: {
            type: 'timestamp',
            format: 'rfc822'
          }
        };
        params = serialize({
          Date: date
        }, rules);
        return expect(params).toEqual([['Date', AWS.util.date.rfc822(date)]]);
      });
    });
  });

}).call(this);

},{"../../lib/core":4,"../../lib/service_interface/query":14}],106:[function(require,module,exports){
(function() {
  var AWS;

  AWS = require('../../lib/core');

  require('../../lib/service_interface/rest');

  describe('AWS.ServiceInterface.Rest', function() {
    var MockRESTService, operation, request, response, service, svc;
    MockRESTService = AWS.util.inherit(AWS.Service, {
      endpointPrefix: 'mockservice'
    });
    operation = null;
    request = null;
    response = null;
    service = null;
    svc = eval(this.description);
    beforeEach(function() {
      MockRESTService.prototype.api = {
        operations: {
          sampleOperation: {
            http: {
              method: 'POST',
              uri: '/'
            },
            input: null,
            output: null
          }
        }
      };
      AWS.Service.defineMethods(MockRESTService);
      operation = MockRESTService.prototype.api.operations.sampleOperation;
      service = new MockRESTService({
        region: 'region'
      });
      request = new AWS.Request(service, 'sampleOperation');
      return response = new AWS.Response(request);
    });
    describe('buildRequest', function() {
      var buildRequest;
      buildRequest = function(callback) {
        if (callback) {
          callback();
        }
        return svc.buildRequest(request);
      };
      describe('method', function() {
        return it('populates method from the operation', function() {
          buildRequest(function() {
            return operation.http.method = 'GET';
          });
          return expect(request.httpRequest.method).toEqual('GET');
        });
      });
      describe('uri', function() {
        it('populates uri from the operation', function() {
          buildRequest(function() {
            return operation.http.uri = '/path';
          });
          return expect(request.httpRequest.path).toEqual('/path');
        });
        it('replaces param placeholders', function() {
          buildRequest(function() {
            operation.http.uri = '/Owner/{Id}';
            operation.input = {
              members: {
                Id: {
                  location: 'uri'
                }
              }
            };
            return request.params = {
              Id: 'abc'
            };
          });
          return expect(request.httpRequest.path).toEqual('/Owner/abc');
        });
        it('can replace multiple path placeholders', function() {
          buildRequest(function() {
            operation.http.uri = '/{Id}/{Count}';
            operation.input = {
              members: {
                Id: {
                  location: 'uri'
                },
                Count: {
                  ttype: 'integer',
                  location: 'uri'
                }
              }
            };
            return request.params = {
              Id: 'abc',
              Count: 123
            };
          });
          return expect(request.httpRequest.path).toEqual('/abc/123');
        });
        it('performs querystring param replacements', function() {
          buildRequest(function() {
            operation.http.uri = '/path?id-param={Id}';
            operation.input = {
              members: {
                Id: {
                  location: 'uri'
                }
              }
            };
            return request.params = {
              Id: 'abc'
            };
          });
          return expect(request.httpRequest.path).toEqual('/path?id-param=abc');
        });
        it('omits querystring when param is not provided', function() {
          buildRequest(function() {
            operation.http.uri = '/path?id-param={Id}';
            return operation.input = {
              members: {
                Id: {
                  location: 'uri'
                }
              }
            };
          });
          return expect(request.httpRequest.path).toEqual('/path');
        });
        it('accpets multiple query params with uri params', function() {
          buildRequest(function() {
            operation.http.uri = '/{Abc}/{Xyz}?foo={Foo}&bar={Bar}';
            operation.input = {
              members: {
                Abc: {
                  location: 'uri'
                },
                Xyz: {
                  location: 'uri'
                },
                Foo: {
                  location: 'uri'
                },
                Bar: {
                  location: 'uri'
                }
              }
            };
            return request.params = {
              Abc: 'abc',
              Xyz: 'xyz',
              Bar: 'bar'
            };
          });
          return expect(request.httpRequest.path).toEqual('/abc/xyz?bar=bar');
        });
        return it('uri escapes params in both path and querystring', function() {
          buildRequest(function() {
            operation.http.uri = '/{Path}?query={Query}';
            operation.input = {
              members: {
                Path: {
                  location: 'uri'
                },
                Query: {
                  location: 'uri'
                }
              }
            };
            return request.params = {
              Path: 'a b',
              Query: 'a/b'
            };
          });
          return expect(request.httpRequest.path).toEqual('/a%20b?query=a%2Fb');
        });
      });
      describe('headers', function() {
        it('populates the headers with present params', function() {
          buildRequest(function() {
            operation.input = {
              members: {
                ACL: {
                  location: 'header',
                  name: 'x-amz-acl'
                }
              }
            };
            return request.params = {
              ACL: 'public-read'
            };
          });
          return expect(request.httpRequest.headers['x-amz-acl']).toEqual('public-read');
        });
        it('uses default rule name if .n property is not present', function() {
          buildRequest(function() {
            operation.input = {
              members: {
                ACL: {
                  location: 'header'
                }
              }
            };
            return request.params = {
              ACL: 'public-read'
            };
          });
          return expect(request.httpRequest.headers['ACL']).toEqual('public-read');
        });
        return it('works with map types', function() {
          buildRequest(function() {
            operation.input = {
              members: {
                Metadata: {
                  type: 'map',
                  location: 'header',
                  name: 'x-amz-meta-'
                }
              }
            };
            return request.params = {
              Metadata: {
                foo: 'bar',
                abc: 'xyz'
              }
            };
          });
          expect(request.httpRequest.headers['x-amz-meta-foo']).toEqual('bar');
          return expect(request.httpRequest.headers['x-amz-meta-abc']).toEqual('xyz');
        });
      });
      describe('timestamp header with format', function() {
        return it('populates the header with correct timestamp formatting', function() {
          var date;
          date = new Date(Date.now());
          buildRequest(function() {
            operation.input = {
              members: {
                IfModifiedSince: {
                  location: 'header',
                  name: 'If-Modified-Since',
                  type: 'timestamp',
                  format: 'rfc822'
                }
              }
            };
            return request.params = {
              IfModifiedSince: date
            };
          });
          return expect(request.httpRequest.headers['If-Modified-Since']).toEqual(date.toUTCString());
        });
      });
      describe('timestamp header without format', function() {
        return it('populates the header using the api formatting', function() {
          var date;
          date = new Date(Date.now());
          buildRequest(function() {
            service.api.timestampFormat = 'rfc822';
            operation.input = {
              members: {
                IfModifiedSince: {
                  location: 'header',
                  name: 'If-Modified-Since',
                  type: 'timestamp'
                }
              }
            };
            return request.params = {
              IfModifiedSince: date
            };
          });
          return expect(request.httpRequest.headers['If-Modified-Since']).toEqual(date.toUTCString());
        });
      });
      describe('timestamp header with api formatting and parameter formatting', function() {
        return it('populates the header using the parameter formatting', function() {
          var date;
          date = new Date(Date.now());
          buildRequest(function() {
            service.api.timestampFormat = 'invalid';
            operation.input = {
              members: {
                IfModifiedSince: {
                  location: 'header',
                  name: 'If-Modified-Since',
                  type: 'timestamp',
                  format: 'rfc822'
                }
              }
            };
            return request.params = {
              IfModifiedSince: date
            };
          });
          return expect(request.httpRequest.headers['If-Modified-Since']).toEqual(date.toUTCString());
        });
      });
      return describe('timestamp header with iso formatting', function() {
        return it('populates the header using the parameter formatting', function() {
          var date;
          date = new Date(Date.now());
          buildRequest(function() {
            operation.input = {
              members: {
                IfModifiedSince: {
                  location: 'header',
                  name: 'If-Modified-Since',
                  type: 'timestamp',
                  format: 'iso8601'
                }
              }
            };
            return request.params = {
              IfModifiedSince: date
            };
          });
          return expect(request.httpRequest.headers['If-Modified-Since']).toEqual(date.toISOString());
        });
      });
    });
    return describe('extractData', function() {
      var extractData;
      extractData = function(callback) {
        if (callback) {
          callback();
        }
        return svc.extractData(response);
      };
      describe('headers', function() {
        it('extracts header values', function() {
          extractData(function() {
            operation.output = {
              type: 'structure',
              members: {
                ContentType: {
                  type: 'string',
                  location: 'header',
                  name: 'content-type'
                }
              }
            };
            return response.httpResponse.headers['content-type'] = 'text/plain';
          });
          return expect(response.data.ContentType).toEqual('text/plain');
        });
        it('extracts headers when the rule name is camel-cased', function() {
          extractData(function() {
            operation.output = {
              type: 'structure',
              members: {
                ContentType: {
                  type: 'string',
                  location: 'header',
                  name: 'Content-Type'
                }
              }
            };
            return response.httpResponse.headers['content-type'] = 'text/plain';
          });
          return expect(response.data.ContentType).toEqual('text/plain');
        });
        it('extracts headers when the header name is camel-cased', function() {
          extractData(function() {
            operation.output = {
              type: 'structure',
              members: {
                ContentType: {
                  type: 'string',
                  location: 'header',
                  name: 'content-type'
                }
              }
            };
            return response.httpResponse.headers['Content-Type'] = 'text/plain';
          });
          return expect(response.data.ContentType).toEqual('text/plain');
        });
        it('extracts map types from header', function() {
          extractData(function() {
            operation.output = {
              type: 'structure',
              members: {
                Metadata: {
                  type: 'map',
                  location: 'header',
                  name: 'x-amz-meta-'
                }
              }
            };
            response.httpResponse.headers['X-AMZ-META-FOO'] = 'foo';
            return response.httpResponse.headers['x-amz-meta-bar'] = 'bar';
          });
          expect(response.data.Metadata.FOO).toEqual('foo');
          return expect(response.data.Metadata.bar).toEqual('bar');
        });
        return it('adds empty map if no matching headers are found', function() {
          extractData(function() {
            return operation.output = {
              type: 'structure',
              members: {
                Metadata: {
                  type: 'map',
                  location: 'header',
                  name: 'x-amz-meta-'
                }
              }
            };
          });
          return expect(response.data.Metadata).toEqual({});
        });
      });
      return describe('status code', function() {
        it('extracts the http status when instructed to', function() {
          extractData(function() {
            operation.output = {
              type: 'structure',
              members: {
                Result: {
                  type: 'integer',
                  location: 'status'
                }
              }
            };
            return response.httpResponse.statusCode = 200;
          });
          return expect(response.data.Result).toEqual(200);
        });
        return it('casts string status codes to integers', function() {
          extractData(function() {
            operation.output = {
              type: 'structure',
              members: {
                Result: {
                  type: 'integer',
                  location: 'status'
                }
              }
            };
            return response.httpResponse.statusCode = '202';
          });
          return expect(response.data.Result).toEqual(202);
        });
      });
    });
  });

}).call(this);

},{"../../lib/core":4,"../../lib/service_interface/rest":15}],107:[function(require,module,exports){
(function() {
  var AWS, Buffer, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  Buffer = require('buffer').Buffer;

  require('../../lib/service_interface/rest_json');

  describe('AWS.ServiceInterface.RestJson', function() {
    var MockJSONRESTService, operation, request, response, svc;
    MockJSONRESTService = AWS.util.inherit(AWS.Service, {
      endpointPrefix: 'mockservice'
    });
    operation = null;
    request = null;
    response = null;
    svc = eval(this.description);
    beforeEach(function() {
      var service;
      MockJSONRESTService.prototype.api = {
        operations: {
          sampleOperation: {
            http: {
              method: 'POST',
              uri: '/'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        }
      };
      AWS.Service.defineMethods(MockJSONRESTService);
      operation = MockJSONRESTService.prototype.api.operations.sampleOperation;
      service = new MockJSONRESTService({
        region: 'region'
      });
      request = new AWS.Request(service, 'sampleOperation');
      return response = new AWS.Response(request);
    });
    describe('buildRequest', function() {
      var buildRequest;
      buildRequest = function(callback) {
        if (callback) {
          callback();
        }
        return svc.buildRequest(request);
      };
      describe('method', function() {
        return it('populates method from the operation', function() {
          buildRequest(function() {
            return operation.http.method = 'GET';
          });
          return expect(request.httpRequest.method).toEqual('GET');
        });
      });
      describe('uri', function() {
        it('populates uri from the operation', function() {
          buildRequest(function() {
            return operation.http.uri = '/path';
          });
          return expect(request.httpRequest.path).toEqual('/path');
        });
        it('replaces param placeholders', function() {
          buildRequest(function() {
            operation.http.uri = '/Owner/{Id}';
            operation.input = {
              members: {
                Id: {
                  location: 'uri'
                }
              }
            };
            return request.params = {
              Id: 'abc'
            };
          });
          return expect(request.httpRequest.path).toEqual('/Owner/abc');
        });
        it('can replace multiple path placeholders', function() {
          buildRequest(function() {
            operation.http.uri = '/{Id}/{Count}';
            operation.input = {
              members: {
                Id: {
                  location: 'uri'
                },
                Count: {
                  type: 'integer',
                  location: 'uri'
                }
              }
            };
            return request.params = {
              Id: 'abc',
              Count: 123
            };
          });
          return expect(request.httpRequest.path).toEqual('/abc/123');
        });
        it('performs querystring param replacements', function() {
          buildRequest(function() {
            operation.http.uri = '/path?id-param={Id}';
            operation.input = {
              members: {
                Id: {
                  location: 'uri'
                }
              }
            };
            return request.params = {
              Id: 'abc'
            };
          });
          return expect(request.httpRequest.path).toEqual('/path?id-param=abc');
        });
        it('omits querystring when param is not provided', function() {
          buildRequest(function() {
            operation.http.uri = '/path?id-param={Id}';
            return operation.input = {
              members: {
                Id: {
                  location: 'uri'
                }
              }
            };
          });
          return expect(request.httpRequest.path).toEqual('/path');
        });
        it('accpets multiple query params with uri params', function() {
          buildRequest(function() {
            operation.http.uri = '/{Abc}/{Xyz}?foo={Foo}&bar={Bar}';
            operation.input = {
              members: {
                Abc: {
                  location: 'uri'
                },
                Xyz: {
                  location: 'uri'
                },
                Foo: {
                  location: 'uri'
                },
                Bar: {
                  location: 'uri'
                }
              }
            };
            return request.params = {
              Abc: 'abc',
              Xyz: 'xyz',
              Bar: 'bar'
            };
          });
          return expect(request.httpRequest.path).toEqual('/abc/xyz?bar=bar');
        });
        return it('uri escapes params in both path and querystring', function() {
          buildRequest(function() {
            operation.http.uri = '/{Path}?query={Query}';
            operation.input = {
              members: {
                Path: {
                  location: 'uri'
                },
                Query: {
                  location: 'uri'
                }
              }
            };
            return request.params = {
              Path: 'a b',
              Query: 'a/b'
            };
          });
          return expect(request.httpRequest.path).toEqual('/a%20b?query=a%2Fb');
        });
      });
      describe('headers', function() {
        it('populates the headers with present params', function() {
          buildRequest(function() {
            operation.input = {
              members: {
                ACL: {
                  location: 'header',
                  name: 'x-amz-acl'
                }
              }
            };
            return request.params = {
              ACL: 'public-read'
            };
          });
          return expect(request.httpRequest.headers['x-amz-acl']).toEqual('public-read');
        });
        it('uses default rule name if .n property is not present', function() {
          buildRequest(function() {
            operation.input = {
              members: {
                ACL: {
                  location: 'header'
                }
              }
            };
            return request.params = {
              ACL: 'public-read'
            };
          });
          return expect(request.httpRequest.headers['ACL']).toEqual('public-read');
        });
        return it('works with map types', function() {
          buildRequest(function() {
            operation.input = {
              members: {
                Metadata: {
                  type: 'map',
                  location: 'header',
                  name: 'x-amz-meta-'
                }
              }
            };
            return request.params = {
              Metadata: {
                foo: 'bar',
                abc: 'xyz'
              }
            };
          });
          expect(request.httpRequest.headers['x-amz-meta-foo']).toEqual('bar');
          return expect(request.httpRequest.headers['x-amz-meta-abc']).toEqual('xyz');
        });
      });
      return describe('body', function() {
        it('builds root element if rules contains root', function() {
          buildRequest(function() {
            operation.input = {
              payload: 'Config',
              members: {
                Config: {
                  type: 'structure',
                  members: {
                    Name: {
                      type: 'string'
                    },
                    Type: {
                      type: 'string'
                    }
                  }
                }
              }
            };
            return request.params = {
              Config: {
                Name: 'foo',
                Type: 'bar'
              }
            };
          });
          return expect(request.httpRequest.body.toString()).toEqual('{"Name":"foo","Type":"bar"}');
        });
        return it('builds payload element as non JSON data if rules contains payload', function() {
          buildRequest(function() {
            operation.input = {
              payload: 'Body',
              members: {
                Body: {
                  type: 'binary',
                  location: 'body'
                }
              }
            };
            return request.params = {
              Body: 'foobar'
            };
          });
          return expect(request.httpRequest.body).toEqual('foobar');
        });
      });
    });
    describe('extractError', function() {
      var extractError;
      extractError = function(body) {
        response.httpResponse.statusCode = 500;
        response.httpResponse.body = new Buffer(body);
        return svc.extractError(response);
      };
      it('removes prefixes from the error code', function() {
        extractError('{"__type":"com.amazon.coral.service#ErrorCode" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.code).toEqual('ErrorCode');
        return expect(response.data).toEqual(null);
      });
      it('returns the full code when a # is not present', function() {
        extractError('{"__type":"ErrorCode" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.code).toEqual('ErrorCode');
        return expect(response.data).toEqual(null);
      });
      it('returns the status code when the body is blank', function() {
        extractError('');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.code).toEqual(500);
        expect(response.error.message).toEqual(null);
        return expect(response.data).toEqual(null);
      });
      it('returns null for the message when not present', function() {
        extractError('{"__type":"ErrorCode" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.message).toEqual(null);
        return expect(response.data).toEqual(null);
      });
      it('returns the message when present', function() {
        extractError('{"__type":"ErrorCode", "message":"Error Message" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.message).toEqual('Error Message');
        return expect(response.data).toEqual(null);
      });
      it('returns the message when the message property is upper-cased', function() {
        extractError('{"__type":"ErrorCode", "Message":"Error Message" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.message).toEqual('Error Message');
        return expect(response.data).toEqual(null);
      });
      return it('returns a special message for RequestEntityToLarge errors', function() {
        extractError('{"__type":"RequestEntityTooLarge" }');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.message).toEqual('Request body must be less than 1 MB');
        return expect(response.data).toEqual(null);
      });
    });
    return describe('extractData', function() {
      var extractData;
      extractData = function(body) {
        response.httpResponse.statusCode = 200;
        response.httpResponse.body = new Buffer(body);
        return svc.extractData(response);
      };
      it('JSON parses http response bodies', function() {
        extractData('{"a":1, "b":"xyz"}');
        expect(response.error).toEqual(null);
        return expect(response.data).toEqual({
          a: 1,
          b: 'xyz'
        });
      });
      it('pulls header data out of response', function() {
        response.httpResponse.headers['x-title'] = 'The title';
        operation.output = {
          type: 'structure',
          members: {
            Title: {
              location: 'header',
              name: 'x-title'
            }
          }
        };
        extractData('{}');
        expect(response.error).toEqual(null);
        return expect(response.data.Title).toEqual('The title');
      });
      it('pulls body out into data key if body is payload', function() {
        operation.output = {
          type: 'structure',
          payload: 'Body',
          members: {
            Body: {
              location: 'body',
              type: 'binary'
            }
          }
        };
        extractData('foobar');
        expect(response.error).toEqual(null);
        return expect(response.data.Body).toEqual('foobar');
      });
      it('pulls body out as Buffer if body is streaming payload', function() {
        operation.output = {
          type: 'structure',
          payload: 'Body',
          members: {
            Body: {
              location: 'body',
              type: 'binary',
              streaming: true
            }
          }
        };
        extractData('foobar');
        expect(response.error).toEqual(null);
        expect(response.data.Body instanceof Buffer).toEqual(true);
        return expect(response.data.Body.toString()).toEqual('foobar');
      });
      it('returns an empty object when the body is an empty string', function() {
        extractData('');
        expect(response.error).toEqual(null);
        return expect(response.data).toEqual({});
      });
      return it('returns an empty object when the body is null', function() {
        extractData('');
        expect(response.error).toEqual(null);
        return expect(response.data).toEqual({});
      });
    });
  });

}).call(this);

},{"../../lib/service_interface/rest_json":16,"../helpers":93,"buffer":70}],108:[function(require,module,exports){
(function() {
  var AWS, Buffer, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  Buffer = require('buffer').Buffer;

  require('../../lib/service_interface/rest_xml');

  describe('AWS.ServiceInterface.RestXml', function() {
    var MockRESTXMLService, operation, request, response, svc, xmlns;
    MockRESTXMLService = AWS.util.inherit(AWS.Service, {
      endpointPrefix: 'mockservice'
    });
    xmlns = 'http://mockservice.com/xmlns';
    operation = null;
    request = null;
    response = null;
    svc = eval(this.description);
    beforeEach(function() {
      var service;
      MockRESTXMLService.prototype.api = {
        xmlnamespace: xmlns,
        operations: {
          sampleOperation: {
            http: {
              method: 'POST',
              uri: '/'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        }
      };
      AWS.Service.defineMethods(MockRESTXMLService);
      operation = MockRESTXMLService.prototype.api.operations.sampleOperation;
      service = new MockRESTXMLService({
        region: 'region'
      });
      request = new AWS.Request(service, 'sampleOperation');
      return response = new AWS.Response(request);
    });
    describe('buildRequest', function() {
      var buildRequest;
      buildRequest = function(callback) {
        if (callback) {
          callback();
        }
        return svc.buildRequest(request);
      };
      describe('empty bodies', function() {
        it('defaults body to empty string when there are no inputs', function() {
          buildRequest(function() {
            return operation.input = {
              type: 'structure',
              members: {}
            };
          });
          return expect(request.httpRequest.body).toEqual('');
        });
        return it('defaults body to empty string when no body params are present', function() {
          buildRequest(function() {
            operation.http.uri = '/{Bucket}';
            operation.input = {
              members: {
                Bucket: {
                  location: 'uri',
                  required: true
                },
                ACL: {
                  name: 'x-amz-acl',
                  location: 'header'
                }
              }
            };
            return request.params = {
              Bucket: 'abc',
              ACL: 'canned-acl'
            };
          });
          expect(request.httpRequest.body).toEqual('');
          expect(request.httpRequest.path).toEqual('/abc');
          return expect(request.httpRequest.headers['x-amz-acl']).toEqual('canned-acl');
        });
      });
      describe('string bodies', function() {
        return it('populates the body with string types directly', function() {
          buildRequest(function() {
            operation.http.uri = '/{Bucket}';
            operation.input = {
              payload: 'Data',
              members: {
                Bucket: {
                  location: 'uri',
                  required: true
                },
                Data: {
                  type: 'string'
                }
              }
            };
            return request.params = {
              Bucket: 'bucket-name',
              Data: 'abc'
            };
          });
          return expect(request.httpRequest.body).toEqual('abc');
        });
      });
      return describe('xml bodies', function() {
        it('populates the body with XML from the params', function() {
          var xml;
          buildRequest(function() {
            operation.http.uri = '/{Bucket}?next-marker={Marker}&limit={Limit}';
            operation.input = {
              payload: 'Config',
              members: {
                Bucket: {
                  type: 'string',
                  location: 'uri',
                  required: true
                },
                Marker: {
                  type: 'string',
                  location: 'uri'
                },
                Limit: {
                  type: 'integer',
                  location: 'uri'
                },
                ACL: {
                  type: 'string',
                  location: 'header',
                  name: 'x-amz-acl'
                },
                Metadata: {
                  type: 'map',
                  location: 'header',
                  name: 'x-amz-meta-'
                },
                Config: {
                  type: 'structure',
                  required: true,
                  members: {
                    Abc: {},
                    Locations: {
                      type: 'list',
                      members: {
                        type: 'string',
                        name: 'Location'
                      }
                    },
                    Data: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          Foo: {},
                          Bar: {}
                        }
                      }
                    }
                  }
                }
              }
            };
            return request.params = {
              ACL: 'canned-acl',
              Config: {
                Abc: 'abc',
                Locations: ['a', 'b', 'c'],
                Data: [
                  {
                    Foo: 'foo1',
                    Bar: 'bar1'
                  }, {
                    Foo: 'foo2',
                    Bar: 'bar2'
                  }
                ]
              },
              Bucket: 'bucket-name',
              Marker: 'marker',
              Limit: 123,
              Metadata: {
                abc: 'xyz',
                mno: 'hjk'
              }
            };
          });
          xml = "<Config xmlns=\"http://mockservice.com/xmlns\">\n  <Abc>abc</Abc>\n  <Locations>\n    <Location>a</Location>\n    <Location>b</Location>\n    <Location>c</Location>\n  </Locations>\n  <Data>\n    <member>\n      <Foo>foo1</Foo>\n      <Bar>bar1</Bar>\n    </member>\n    <member>\n      <Foo>foo2</Foo>\n      <Bar>bar2</Bar>\n    </member>\n  </Data>\n</Config>";
          expect(request.httpRequest.method).toEqual('POST');
          expect(request.httpRequest.path).toEqual('/bucket-name?next-marker=marker&limit=123');
          expect(request.httpRequest.headers['x-amz-acl']).toEqual('canned-acl');
          expect(request.httpRequest.headers['x-amz-meta-abc']).toEqual('xyz');
          expect(request.httpRequest.headers['x-amz-meta-mno']).toEqual('hjk');
          return helpers.matchXML(request.httpRequest.body, xml);
        });
        return it('omits the body xml when body params are not present', function() {
          buildRequest(function() {
            operation.http.uri = '/{Bucket}';
            operation.input = {
              members: {
                Bucket: {
                  location: 'uri',
                  required: true
                },
                Config: {}
              }
            };
            return request.params = {
              Bucket: 'abc'
            };
          });
          expect(request.httpRequest.body).toEqual('');
          return expect(request.httpRequest.path).toEqual('/abc');
        });
      });
    });
    describe('extractError', function() {
      var extractError;
      extractError = function(body) {
        if (body === void 0) {
          body = "<Error>\n  <Code>InvalidArgument</Code>\n  <Message>Provided param is bad</Message>\n</Error>";
        }
        response.httpResponse.statusCode = 400;
        response.httpResponse.body = new Buffer(body);
        return svc.extractError(response);
      };
      it('extracts the error code and message', function() {
        extractError();
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.code).toEqual('InvalidArgument');
        expect(response.error.message).toEqual('Provided param is bad');
        return expect(response.data).toEqual(null);
      });
      it('returns an empty error when the body is blank', function() {
        extractError('');
        expect(response.error instanceof Error).toBeTruthy();
        expect(response.error.code).toEqual(400);
        expect(response.error.message).toEqual(null);
        return expect(response.data).toEqual(null);
      });
      it('extracts error when inside <Errors>', function() {
        extractError("<SomeResponse>\n  <Errors>\n    <Error>\n      <Code>code</Code><Message>msg</Message>\n    </Error>\n  </Errors>\n</SomeResponse>");
        expect(response.error.code).toEqual('code');
        return expect(response.error.message).toEqual('msg');
      });
      return it('extracts error when <Error> is nested', function() {
        extractError("<SomeResponse>\n  <Error>\n    <Code>code</Code><Message>msg</Message>\n  </Error>\n</SomeResponse>");
        expect(response.error.code).toEqual('code');
        return expect(response.error.message).toEqual('msg');
      });
    });
    return describe('extractData', function() {
      var extractData;
      extractData = function(body) {
        response.httpResponse.statusCode = 200;
        response.httpResponse.body = new Buffer(body);
        return svc.extractData(response);
      };
      it('parses the xml body', function() {
        operation.output = {
          type: 'structure',
          members: {
            Foo: {},
            Bar: {
              type: 'list',
              members: {
                name: 'Item'
              }
            }
          }
        };
        extractData("<xml>\n  <Foo>foo</Foo>\n  <Bar>\n    <Item>a</Item>\n    <Item>b</Item>\n    <Item>c</Item>\n  </Bar>\n</xml>");
        return expect(response.data).toEqual({
          Foo: 'foo',
          Bar: ['a', 'b', 'c']
        });
      });
      it('sets payload element to a Buffer object when it streams', function() {
        operation.output = {
          type: 'structure',
          payload: 'Body',
          members: {
            Body: {
              streaming: true
            }
          }
        };
        extractData('Buffer data');
        expect(response.data.Body instanceof Buffer).toBeTruthy();
        return expect(response.data.Body.toString()).toEqual('Buffer data');
      });
      it('sets payload element to String when it does not stream', function() {
        operation.output = {
          type: 'structure',
          payload: 'Body',
          members: {
            Body: {}
          }
        };
        extractData('Buffer data');
        expect(typeof response.data.Body).toEqual('string');
        return expect(response.data.Body).toEqual('Buffer data');
      });
      return it('sets payload element along with other outputs', function() {
        response.httpResponse.headers['x-amz-foo'] = 'foo';
        response.httpResponse.headers['x-amz-bar'] = 'bar';
        operation.output = {
          type: 'structure',
          payload: 'Baz',
          members: {
            Foo: {
              location: 'header',
              name: 'x-amz-foo'
            },
            Bar: {
              location: 'header',
              name: 'x-amz-bar'
            },
            Baz: {}
          }
        };
        extractData('Buffer data');
        expect(response.data.Foo).toEqual('foo');
        expect(response.data.Bar).toEqual('bar');
        return expect(response.data.Baz).toEqual('Buffer data');
      });
    });
  });

}).call(this);

},{"../../lib/service_interface/rest_xml":17,"../helpers":93,"buffer":70}],109:[function(require,module,exports){
(function() {
  var AWS, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  require('../../lib/services/route53');

  describe('AWS.Route53', function() {
    var cf;
    cf = null;
    beforeEach(function() {
      return cf = new AWS.CloudFront();
    });
    return describe('createInvalidation', function() {
      return it('correctly builds the request', function() {
        var api, params, xml;
        helpers.mockHttpResponse(200, {}, '');
        api = cf.api.apiVersion;
        xml = "<InvalidationBatch xmlns=\"http://cloudfront.amazonaws.com/doc/" + api + "/\">\n  <Paths>\n    <Quantity>2</Quantity>\n    <Items>\n      <Path>path1</Path>\n      <Path>path2</Path>\n    </Items>\n  </Paths>\n  <CallerReference>abc</CallerReference>\n</InvalidationBatch>";
        params = {
          DistributionId: 'ID',
          InvalidationBatch: {
            Paths: {
              Quantity: 2,
              Items: ['path1', 'path2']
            },
            CallerReference: 'abc'
          }
        };
        return cf.createInvalidation(params, function(err, data) {
          var req;
          req = this.request.httpRequest;
          expect(req.path).toEqual("/" + api + "/distribution/ID/invalidation");
          return helpers.matchXML(req.body, xml);
        });
      });
    });
  });

}).call(this);

},{"../../lib/services/route53":40,"../helpers":93}],110:[function(require,module,exports){
(function() {
  var AWS;

  AWS = require('../../lib/core');

  require('../../lib/services/dynamodb');

  describe('AWS.DynamoDB', function() {
    var configure, ddb;
    configure = function(options) {
      return new AWS.Config(options);
    };
    ddb = function(options) {
      return new AWS.DynamoDB(configure(options));
    };
    describe('config', function() {
      return it('returns the configuration object it was constructed with', function() {
        var config, dynamo;
        config = configure();
        dynamo = new AWS.DynamoDB(config);
        return expect(dynamo.config).toEqual(config);
      });
    });
    describe('numRetries', function() {
      it('defaults to 10', function() {
        return expect(ddb().numRetries()).toEqual(10);
      });
      return it('can be overridden in the config', function() {
        return expect(ddb({
          maxRetries: 2
        }).numRetries()).toEqual(2);
      });
    });
    return describe('retryDelays', function() {
      return it('has a custom backoff function', function() {
        var delays;
        delays = [0, 50, 100, 200, 400, 800, 1600, 3200, 6400, 12800];
        return expect(ddb().retryDelays()).toEqual(delays);
      });
    });
  });

}).call(this);

},{"../../lib/core":4,"../../lib/services/dynamodb":27}],111:[function(require,module,exports){
(function() {
  var AWS, helpers;

  AWS = require('../../lib/core');

  helpers = require('../helpers');

  require('../../lib/services/ec2');

  describe('AWS.EC2', function() {
    var ec2;
    ec2 = new AWS.EC2();
    describe('proxy support', function() {
      return it('always sets Host header to correct endpoint', function() {
        ec2 = new AWS.EC2({
          httpOptions: {
            proxy: 'http://__INVALID_HOSTNAME__:9999'
          }
        });
        return ec2.makeRequest('describeInstances', function() {
          return expect(this.request.httpRequest.headers.Host).toEqual('ec2.mock-region.amazonaws.com');
        });
      });
    });
    return describe('parseResponse', function() {
      var body, parse;
      body = '';
      parse = function(callback) {
        helpers.mockHttpResponse(400, {}, body);
        return ec2.makeRequest('describeInstances', function(error, data) {
          return callback.call(this, error, data);
        });
      };
      return describe('with error', function() {
        beforeEach(function() {
          return body = "<Response>\n  <Errors>\n    <Error>\n      <Code>InvalidInstanceID.Malformed</Code>\n      <Message>Invalid id: \"i-12345678\"</Message>\n    </Error>\n  </Errors>\n  <RequestID>ab123mno-6432-dceb-asdf-123mno543123</RequestID>\n</Response>";
        });
        it('extracts the error code', function() {
          return parse(function(error, data) {
            expect(error.code).toEqual('InvalidInstanceID.Malformed');
            return expect(data).toEqual(null);
          });
        });
        it('extracts the error message', function() {
          return parse(function(error, data) {
            expect(error.message).toEqual('Invalid id: "i-12345678"');
            return expect(data).toEqual(null);
          });
        });
        return it('returns an empty error when the body is blank', function() {
          body = '';
          return parse(function(error, data) {
            expect(error.code).toEqual(400);
            expect(error.message).toEqual(null);
            return expect(data).toEqual(null);
          });
        });
      });
    });
  });

}).call(this);

},{"../../lib/core":4,"../../lib/services/ec2":28,"../helpers":93}],112:[function(require,module,exports){
(function() {
  var AWS, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  require('../../lib/services/route53');

  describe('AWS.Route53', function() {
    var et;
    et = null;
    beforeEach(function() {
      return et = new AWS.ElasticTranscoder();
    });
    describe('cancelJob', function() {
      return it('omits the body', function() {
        var params;
        helpers.mockHttpResponse(200, {}, '');
        params = {
          Id: 'job-id'
        };
        return et.cancelJob({
          Id: 'job-id'
        }, function(err, data) {
          var req;
          req = this.request.httpRequest;
          expect(req.path).toEqual('/2012-09-25/jobs/job-id');
          return expect(req.body).toEqual('');
        });
      });
    });
    return describe('updatePipelineNotifications', function() {
      return it('only populates the body with non-uri and non-header params', function() {
        var params;
        helpers.mockHttpResponse(200, {}, '');
        params = {
          Id: 'pipeline-id',
          Notifications: {
            Progressing: 'arn1',
            Completed: 'arn2',
            Warning: 'arn3',
            Error: 'arn4'
          }
        };
        return et.updatePipelineNotifications(params, function(err, data) {
          var req;
          req = this.request.httpRequest;
          expect(req.path).toEqual('/2012-09-25/pipelines/pipeline-id/notifications');
          return expect(req.body).toEqual('{"Notifications":{"Progressing":"arn1","Completed":"arn2","Warning":"arn3","Error":"arn4"}}');
        });
      });
    });
  });

}).call(this);

},{"../../lib/services/route53":40,"../helpers":93}],113:[function(require,module,exports){
(function() {
  var AWS, Buffer, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  Buffer = require('buffer').Buffer;

  require('../../lib/services/glacier');

  describe('AWS.Glacier', function() {
    var glacier;
    glacier = null;
    beforeEach(function() {
      return glacier = new AWS.Glacier();
    });
    describe('building requests', function() {
      it('sets accountId to "-" if not set', function() {
        var req;
        req = glacier.listVaults();
        req.emit('validate', [req]);
        req.emit('build', [req]);
        return expect(req.httpRequest.path).toEqual('/-/vaults');
      });
      return it('will not override accountId if set', function() {
        var req;
        req = glacier.listVaults({
          accountId: 'ABC123'
        });
        req.emit('validate', [req]);
        req.emit('build', [req]);
        return expect(req.httpRequest.path).toEqual('/ABC123/vaults');
      });
    });
    describe('computeChecksums', function() {
      return it('returns correct linear and tree hash for buffer data', function() {
        var data, expected;
        data = new Buffer(1024 * 1024 * 5.5);
        data.fill('0');
        expected = {
          linearHash: '68aff0c5a91aa0491752bfb96e3fef33eb74953804f6a2f7b708d5bcefa8ff6b',
          treeHash: '154e26c78fd74d0c2c9b3cc4644191619dc4f2cd539ae2a74d5fd07957a3ee6a'
        };
        return expect(glacier.computeChecksums(data)).toEqual(expected);
      });
    });
    describe('initiateJob', function() {
      return it('correctly builds the request', function() {
        var params;
        helpers.mockHttpResponse(200, {}, '');
        params = {
          vaultName: 'vault-name',
          jobParameters: {
            Format: 'foo',
            Type: 'bar'
          }
        };
        return glacier.initiateJob(params, function(err, data) {
          var req;
          req = this.request.httpRequest;
          expect(req.path).toEqual('/-/vaults/vault-name/jobs');
          return expect(req.body).toEqual('{"Format":"foo","Type":"bar"}');
        });
      });
    });
    return describe('uploadArchive', function() {
      return it('passes the body along', function() {
        var params;
        helpers.mockHttpResponse(200, {}, '');
        params = {
          vaultName: 'vault-name',
          body: 'abc'
        };
        return glacier.uploadArchive(params, function(err, data) {
          var req;
          req = this.request.httpRequest;
          expect(req.method).toEqual('POST');
          expect(req.path).toEqual('/-/vaults/vault-name/archives');
          return expect(req.body).toEqual('abc');
        });
      });
    });
  });

}).call(this);

},{"../../lib/services/glacier":34,"../helpers":93,"buffer":70}],114:[function(require,module,exports){
(function() {
  var AWS, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  require('../../lib/services/route53');

  describe('AWS.Route53', function() {
    var r53;
    r53 = null;
    beforeEach(function() {
      return r53 = new AWS.Route53();
    });
    describe('setEndpoint', function() {
      it('always enables SSL if no endpoint is set', function() {
        var service;
        service = new AWS.Route53({
          sslEnabled: false
        });
        return expect(service.endpoint.protocol).toEqual('https:');
      });
      return it('allows overriding SSL if custom endpoint is set', function() {
        var service;
        service = new AWS.Route53({
          endpoint: 'http://example.com'
        });
        return expect(service.endpoint.protocol).toEqual('http:');
      });
    });
    describe('building requests', function() {
      var service;
      service = new AWS.Route53;
      it('should fix hosted zone ID on input', function() {
        var req;
        req = service.getHostedZone({
          Id: '/hostedzone/ABCDEFG'
        });
        req.emit('build', [req]);
        return expect(req.httpRequest.path).toMatch('/hostedzone/ABCDEFG$');
      });
      return it('should fix health check ID on input', function() {
        var req;
        req = service.getHealthCheck({
          HealthCheckId: '/healthcheck/ABCDEFG'
        });
        req.emit('build', [req]);
        return expect(req.httpRequest.path).toMatch('/healthcheck/ABCDEFG$');
      });
    });
    return describe('changeResourceRecordSets', function() {
      return it('correctly builds the XML document', function() {
        var params, xml;
        xml = "<ChangeResourceRecordSetsRequest xmlns=\"https://route53.amazonaws.com/doc/2012-12-12/\">\n  <ChangeBatch>\n    <Comment>comment</Comment>\n    <Changes>\n      <Change>\n        <Action>CREATE</Action>\n        <ResourceRecordSet>\n          <Name>name</Name>\n          <Type>type</Type>\n          <ResourceRecords>\n            <ResourceRecord>\n              <Value>foo.com</Value>\n            </ResourceRecord>\n          </ResourceRecords>\n        </ResourceRecordSet>\n      </Change>\n    </Changes>\n  </ChangeBatch>\n</ChangeResourceRecordSetsRequest>";
        helpers.mockHttpResponse(200, {}, '');
        params = {
          HostedZoneId: 'zone-id',
          ChangeBatch: {
            Changes: [
              {
                ResourceRecordSet: {
                  Name: 'name',
                  Type: 'type',
                  ResourceRecords: [
                    {
                      Value: 'foo.com'
                    }
                  ]
                },
                Action: 'CREATE'
              }
            ],
            Comment: 'comment'
          }
        };
        return r53.changeResourceRecordSets(params, function(err, data) {
          return helpers.matchXML(this.request.httpRequest.body, xml);
        });
      });
    });
  });

}).call(this);

},{"../../lib/services/route53":40,"../helpers":93}],115:[function(require,module,exports){
(function() {
  var AWS, Buffer, Stream, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  Stream = require('stream').Stream;

  Buffer = require('buffer').Buffer;

  require('../../lib/services/s3');

  describe('AWS.S3', function() {
    var oldRegion, request, s3;
    s3 = null;
    oldRegion = null;
    request = function(operation, params) {
      var req;
      req = new AWS.Request(s3, operation, params || {});
      req.service.addAllRequestListeners(req);
      return req;
    };
    beforeEach(function() {
      oldRegion = AWS.config.region;
      AWS.config.update({
        region: void 0
      });
      return s3 = new AWS.S3();
    });
    afterEach(function() {
      return AWS.config.update({
        region: oldRegion
      });
    });
    describe('dnsCompatibleBucketName', function() {
      it('must be at least 3 characters', function() {
        return expect(s3.dnsCompatibleBucketName('aa')).toBe(false);
      });
      it('must not be longer than 63 characters', function() {
        var b;
        b = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
        return expect(s3.dnsCompatibleBucketName(b)).toBe(false);
      });
      it('must start with a lower-cased letter or number', function() {
        expect(s3.dnsCompatibleBucketName('Abc')).toBe(false);
        expect(s3.dnsCompatibleBucketName('-bc')).toBe(false);
        return expect(s3.dnsCompatibleBucketName('abc')).toBe(true);
      });
      it('must end with a lower-cased letter or number', function() {
        expect(s3.dnsCompatibleBucketName('abC')).toBe(false);
        expect(s3.dnsCompatibleBucketName('ab-')).toBe(false);
        return expect(s3.dnsCompatibleBucketName('abc')).toBe(true);
      });
      it('may not contain multiple contiguous dots', function() {
        expect(s3.dnsCompatibleBucketName('abc.123')).toBe(true);
        return expect(s3.dnsCompatibleBucketName('abc..123')).toBe(false);
      });
      it('may only contain letters numbers and dots', function() {
        expect(s3.dnsCompatibleBucketName('abc123')).toBe(true);
        return expect(s3.dnsCompatibleBucketName('abc_123')).toBe(false);
      });
      return it('must not look like an ip address', function() {
        expect(s3.dnsCompatibleBucketName('1.2.3.4')).toBe(false);
        return expect(s3.dnsCompatibleBucketName('a.b.c.d')).toBe(true);
      });
    });
    describe('endpoint', function() {
      it('sets hostname to s3.amazonaws.com when region is un-specified', function() {
        s3 = new AWS.S3();
        return expect(s3.endpoint.hostname).toEqual('s3.amazonaws.com');
      });
      it('sets hostname to s3.amazonaws.com when region is us-east-1', function() {
        s3 = new AWS.S3({
          region: 'us-east-1'
        });
        return expect(s3.endpoint.hostname).toEqual('s3.amazonaws.com');
      });
      it('sets region to us-east-1 when unspecified', function() {
        s3 = new AWS.S3({
          region: 'us-east-1'
        });
        return expect(s3.config.region).toEqual('us-east-1');
      });
      return it('combines the region with s3 in the endpoint using a - instead of .', function() {
        s3 = new AWS.S3({
          region: 'us-west-1'
        });
        return expect(s3.endpoint.hostname).toEqual('s3-us-west-1.amazonaws.com');
      });
    });
    describe('building a request', function() {
      var build;
      build = function(operation, params) {
        var req;
        req = request(operation, params);
        req.emit('build', [req]);
        return req.httpRequest;
      };
      it('obeys the configuration for s3ForcePathStyle', function() {
        var config, req;
        config = new AWS.Config({
          s3ForcePathStyle: true
        });
        s3 = new AWS.S3(config);
        expect(s3.config.s3ForcePathStyle).toEqual(true);
        req = build('headObject', {
          Bucket: 'bucket',
          Key: 'key'
        });
        expect(req.endpoint.hostname).toEqual('s3.amazonaws.com');
        return expect(req.path).toEqual('/bucket/key');
      });
      describe('uri escaped params', function() {
        it('uri-escapes path and querystring params', function() {
          var params, req;
          params = {
            Bucket: 'bucket',
            Key: 'a b c',
            VersionId: 'a&b'
          };
          req = build('headObject', params);
          return expect(req.path).toEqual('/a%20b%20c?versionId=a%26b');
        });
        it('does not uri-escape forward slashes in the path', function() {
          var params, req;
          params = {
            Bucket: 'bucket',
            Key: 'k e/y'
          };
          req = build('headObject', params);
          return expect(req.path).toEqual('/k%20e/y');
        });
        it('ensures a single forward slash exists', function() {
          var req;
          req = build('listObjects', {
            Bucket: 'bucket'
          });
          expect(req.path).toEqual('/');
          req = build('listObjects', {
            Bucket: 'bucket',
            MaxKeys: 123
          });
          return expect(req.path).toEqual('/?max-keys=123');
        });
        return it('ensures a single forward slash exists when querystring is present');
      });
      return describe('virtual-hosted vs path-style bucket requests', function() {
        describe('HTTPS', function() {
          beforeEach(function() {
            return s3 = new AWS.S3({
              sslEnabled: true
            });
          });
          it('puts dns-compat bucket names in the hostname', function() {
            var req;
            req = build('headObject', {
              Bucket: 'bucket-name',
              Key: 'abc'
            });
            expect(req.method).toEqual('HEAD');
            expect(req.endpoint.hostname).toEqual('bucket-name.s3.amazonaws.com');
            return expect(req.path).toEqual('/abc');
          });
          it('ensures the path contains / at a minimum when moving bucket', function() {
            var req;
            req = build('listObjects', {
              Bucket: 'bucket-name'
            });
            expect(req.endpoint.hostname).toEqual('bucket-name.s3.amazonaws.com');
            return expect(req.path).toEqual('/');
          });
          it('puts dns-compat bucket names in path if they contain a dot', function() {
            var req;
            req = build('listObjects', {
              Bucket: 'bucket.name'
            });
            expect(req.endpoint.hostname).toEqual('s3.amazonaws.com');
            return expect(req.path).toEqual('/bucket.name');
          });
          it('puts dns-compat bucket names in path if configured to do so', function() {
            var req;
            s3 = new AWS.S3({
              sslEnabled: true,
              s3ForcePathStyle: true
            });
            req = build('listObjects', {
              Bucket: 'bucket-name'
            });
            expect(req.endpoint.hostname).toEqual('s3.amazonaws.com');
            return expect(req.path).toEqual('/bucket-name');
          });
          return it('puts dns-incompat bucket names in path', function() {
            var req;
            req = build('listObjects', {
              Bucket: 'bucket_name'
            });
            expect(req.endpoint.hostname).toEqual('s3.amazonaws.com');
            return expect(req.path).toEqual('/bucket_name');
          });
        });
        return describe('HTTP', function() {
          beforeEach(function() {
            return s3 = new AWS.S3({
              sslEnabled: false
            });
          });
          it('puts dns-compat bucket names in the hostname', function() {
            var req;
            req = build('listObjects', {
              Bucket: 'bucket-name'
            });
            expect(req.endpoint.hostname).toEqual('bucket-name.s3.amazonaws.com');
            return expect(req.path).toEqual('/');
          });
          it('puts dns-compat bucket names in the hostname if they contain a dot', function() {
            var req;
            req = build('listObjects', {
              Bucket: 'bucket.name'
            });
            expect(req.endpoint.hostname).toEqual('bucket.name.s3.amazonaws.com');
            return expect(req.path).toEqual('/');
          });
          return it('puts dns-incompat bucket names in path', function() {
            var req;
            req = build('listObjects', {
              Bucket: 'bucket_name'
            });
            expect(req.endpoint.hostname).toEqual('s3.amazonaws.com');
            return expect(req.path).toEqual('/bucket_name');
          });
        });
      });
    });
    describe('errors with no XML body', function() {
      var extractError;
      extractError = function(statusCode, body) {
        var req, resp;
        req = request('operation');
        resp = new AWS.Response(req);
        resp.httpResponse.body = new Buffer(body || '');
        resp.httpResponse.statusCode = statusCode;
        req.emit('extractError', [resp]);
        return resp.error;
      };
      it('handles 304 errors', function() {
        var error;
        error = extractError(304);
        expect(error.code).toEqual('NotModified');
        return expect(error.message).toEqual(null);
      });
      it('handles 400 errors', function() {
        var error;
        error = extractError(400);
        expect(error.code).toEqual('BadRequest');
        return expect(error.message).toEqual(null);
      });
      it('handles 403 errors', function() {
        var error;
        error = extractError(403);
        expect(error.code).toEqual('Forbidden');
        return expect(error.message).toEqual(null);
      });
      it('handles 404 errors', function() {
        var error;
        error = extractError(404);
        expect(error.code).toEqual('NotFound');
        return expect(error.message).toEqual(null);
      });
      it('misc errors not known to return an empty body', function() {
        var error;
        error = extractError(412);
        expect(error.code).toEqual(412);
        return expect(error.message).toEqual(null);
      });
      return it('uses canned errors only when the body is empty', function() {
        var body, error;
        body = "<xml>\n  <Code>ErrorCode</Code>\n  <Message>ErrorMessage</Message>\n</xml>";
        error = extractError(403, body);
        expect(error.code).toEqual('ErrorCode');
        return expect(error.message).toEqual('ErrorMessage');
      });
    });
    describe('getBucketAcl', function() {
      return it('correctly parses the ACL XML document', function() {
        var body, headers;
        headers = {
          'x-amz-request-id': 'request-id'
        };
        body = "<AccessControlPolicy xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\">\n  <AccessControlList>\n    <Grant>\n      <Grantee xsi:type=\"CanonicalUser\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n        <DisplayName>aws-ruby-sdk</DisplayName>\n        <ID>id</ID>\n      </Grantee>\n      <Permission>FULL_CONTROL</Permission>\n    </Grant>\n    <Grant>\n      <Grantee xsi:type=\"Group\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n        <URI>uri</URI>\n      </Grantee>\n      <Permission>READ</Permission>\n    </Grant>\n  </AccessControlList>\n  <Owner>\n    <DisplayName>aws-ruby-sdk</DisplayName>\n    <ID>id</ID>\n  </Owner>\n</AccessControlPolicy>";
        helpers.mockHttpResponse(200, headers, body);
        return s3.getBucketAcl(function(error, data) {
          expect(error).toBe(null);
          return expect(data).toEqual({
            Owner: {
              DisplayName: 'aws-ruby-sdk',
              ID: 'id'
            },
            Grants: [
              {
                Permission: 'FULL_CONTROL',
                Grantee: {
                  Type: 'CanonicalUser',
                  DisplayName: 'aws-ruby-sdk',
                  ID: 'id'
                }
              }, {
                Permission: 'READ',
                Grantee: {
                  Type: 'Group',
                  URI: 'uri'
                }
              }
            ],
            RequestId: 'request-id'
          });
        });
      });
    });
    describe('putBucketAcl', function() {
      return it('correctly builds the ACL XML document', function() {
        var params, xml;
        xml = "<AccessControlPolicy xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\">\n  <AccessControlList>\n    <Grant>\n      <Grantee xsi:type=\"CanonicalUser\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n        <DisplayName>aws-ruby-sdk</DisplayName>\n        <ID>id</ID>\n      </Grantee>\n      <Permission>FULL_CONTROL</Permission>\n    </Grant>\n    <Grant>\n      <Grantee xsi:type=\"Group\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n        <URI>uri</URI>\n      </Grantee>\n      <Permission>READ</Permission>\n    </Grant>\n  </AccessControlList>\n  <Owner>\n    <DisplayName>aws-ruby-sdk</DisplayName>\n    <ID>id</ID>\n  </Owner>\n</AccessControlPolicy>";
        helpers.mockHttpResponse(200, {}, '');
        params = {
          AccessControlPolicy: {
            Owner: {
              DisplayName: 'aws-ruby-sdk',
              ID: 'id'
            },
            Grants: [
              {
                Permission: 'FULL_CONTROL',
                Grantee: {
                  Type: 'CanonicalUser',
                  DisplayName: 'aws-ruby-sdk',
                  ID: 'id'
                }
              }, {
                Permission: 'READ',
                Grantee: {
                  Type: 'Group',
                  URI: 'uri'
                }
              }
            ]
          }
        };
        return s3.putBucketAcl(params, function(err, data) {
          return helpers.matchXML(this.request.httpRequest.body, xml);
        });
      });
    });
    describe('completeMultipartUpload', function() {
      it('returns data when the resp is 200 with valid response', function() {
        var body, headers;
        headers = {
          'x-amz-id-2': 'Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg==',
          'x-amz-request-id': '656c76696e6727732072657175657374'
        };
        body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<CompleteMultipartUploadResult xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\">\n  <Location>http://Example-Bucket.s3.amazonaws.com/Example-Object</Location>\n  <Bucket>Example-Bucket</Bucket>\n  <Key>Example-Object</Key>\n  <ETag>\"3858f62230ac3c915f300c664312c11f-9\"</ETag>\n</CompleteMultipartUploadResult>";
        helpers.mockHttpResponse(200, headers, body);
        return s3.completeMultipartUpload(function(error, data) {
          expect(error).toBe(null);
          return expect(data).toEqual({
            Location: 'http://Example-Bucket.s3.amazonaws.com/Example-Object',
            Bucket: 'Example-Bucket',
            Key: 'Example-Object',
            ETag: '"3858f62230ac3c915f300c664312c11f-9"',
            RequestId: '656c76696e6727732072657175657374'
          });
        });
      });
      return it('returns an error when the resp is 200 with an error xml document', function() {
        var body;
        body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Error>\n  <Code>InternalError</Code>\n  <Message>We encountered an internal error. Please try again.</Message>\n  <RequestId>656c76696e6727732072657175657374</RequestId>\n  <HostId>Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg==</HostId>\n</Error>";
        helpers.mockHttpResponse(200, {}, body);
        return s3.completeMultipartUpload(function(error, data) {
          expect(error instanceof Error).toBeTruthy();
          expect(error.code).toEqual('InternalError');
          expect(error.message).toEqual('We encountered an internal error. Please try again.');
          expect(error.statusCode).toEqual(200);
          expect(error.retryable).toEqual(true);
          return expect(data).toEqual(null);
        });
      });
    });
    describe('getBucketLocation', function() {
      it('returns null for the location constraint when not present', function() {
        var body;
        body = '<?xml version="1.0" encoding="UTF-8"?>\n<LocationConstraint xmlns="http://s3.amazonaws.com/doc/2006-03-01/"/>';
        helpers.mockHttpResponse(200, {}, body);
        return s3.getBucketLocation(function(error, data) {
          expect(error).toBe(null);
          return expect(data).toEqual({});
        });
      });
      return it('parses the location constraint from the root xml', function() {
        var body, headers;
        headers = {
          'x-amz-request-id': 'abcxyz'
        };
        body = '<?xml version="1.0" encoding="UTF-8"?>\n<LocationConstraint xmlns="http://s3.amazonaws.com/doc/2006-03-01/">EU</LocationConstraint>';
        helpers.mockHttpResponse(200, headers, body);
        return s3.getBucketLocation(function(error, data) {
          expect(error).toBe(null);
          return expect(data).toEqual({
            LocationConstraint: 'EU',
            RequestId: 'abcxyz'
          });
        });
      });
    });
    describe('createBucket', function() {
      it('auto-populates the LocationConstraint based on the region', function() {
        var loc;
        loc = null;
        s3 = new AWS.S3({
          region: 'eu-west-1'
        });
        s3.makeRequest = function(op, params) {
          return loc = params.CreateBucketConfiguration.LocationConstraint;
        };
        s3.createBucket({
          Bucket: 'name'
        });
        return expect(loc).toEqual('eu-west-1');
      });
      return it('correctly builds the xml', function() {});
    });
    AWS.util.each(AWS.S3.prototype.computableChecksumOperations, function(operation) {
      return describe(operation, function() {
        return it('forces Content-MD5 header parameter', function() {
          var hash, resp;
          helpers.mockHttpResponse(200, {}, '');
          resp = s3[operation]({
            Bucket: 'bucket',
            ContentMD5: '000'
          }).send();
          hash = AWS.util.crypto.md5(resp.request.httpRequest.body, 'base64');
          return expect(resp.request.httpRequest.headers['Content-MD5']).toEqual(hash);
        });
      });
    });
    describe('willComputeChecksums', function() {
      var willCompute;
      beforeEach(function() {
        return helpers.mockHttpResponse(200, {}, '');
      });
      willCompute = function(operation, opts) {
        var checksum, compute, realChecksum, resp;
        compute = opts.computeChecksums;
        s3 = new AWS.S3({
          computeChecksums: compute
        });
        resp = s3.makeRequest(operation, {
          Bucket: 'example',
          ContentMD5: opts.hash
        }).send();
        checksum = resp.request.httpRequest.headers['Content-MD5'];
        if (opts.hash !== void 0) {
          return expect(checksum).toEqual(opts.hash);
        } else {
          realChecksum = AWS.util.crypto.md5(resp.request.httpRequest.body, 'base64');
          return expect(checksum).toEqual(realChecksum);
        }
      };
      it('computes checksums if the operation requires it', function() {
        willCompute('deleteObjects', {
          computeChecksums: true
        });
        willCompute('putBucketCors', {
          computeChecksums: true
        });
        willCompute('putBucketLifecycle', {
          computeChecksums: true
        });
        return willCompute('putBucketTagging', {
          computeChecksums: true
        });
      });
      it('computes checksums if computeChecksums is off and operation requires it', function() {
        willCompute('deleteObjects', {
          computeChecksums: false
        });
        willCompute('putBucketCors', {
          computeChecksums: false
        });
        willCompute('putBucketLifecycle', {
          computeChecksums: false
        });
        return willCompute('putBucketTagging', {
          computeChecksums: false
        });
      });
      it('does not compute checksums if computeChecksums is off', function() {
        return willCompute('putObject', {
          computeChecksums: false,
          hash: null
        });
      });
      it('does not compute checksums if computeChecksums is on and ContentMD5 is provided', function() {
        return willCompute('putBucketAcl', {
          computeChecksums: true,
          hash: '000'
        });
      });
      it('does not compute checksums for Stream objects', function() {
        var resp;
        s3 = new AWS.S3({
          computeChecksums: true
        });
        resp = s3.putObject({
          Bucket: 'example',
          Key: 'foo',
          Body: new Stream
        }).send();
        return expect(resp.request.httpRequest.headers['Content-MD5']).toEqual(void 0);
      });
      return it('computes checksums if computeChecksums is on and ContentMD5 is not provided', function() {
        return willCompute('putBucketAcl', {
          computeChecksums: true
        });
      });
    });
    return describe('getSignedUrl', function() {
      var date;
      date = null;
      beforeEach(function() {
        date = AWS.util.date.getDate;
        return AWS.util.date.getDate = function() {
          return new Date(0);
        };
      });
      afterEach(function() {
        return AWS.util.date.getDate = date;
      });
      it('gets a signed URL for getObject', function() {
        var url;
        url = s3.getSignedUrl('getObject', {
          Bucket: 'bucket',
          Key: 'key'
        });
        return expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=uefzBaGpqvO9QhGtT%2BbYda0pgQY%3D');
      });
      it('gets a signed URL with Expires time', function() {
        var url;
        url = s3.getSignedUrl('getObject', {
          Bucket: 'bucket',
          Key: 'key',
          Expires: 60
        });
        return expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=60&Signature=ZJKBOuhI99B2OZdkGSOmfG86BOI%3D');
      });
      it('gets a signed URL with expiration and bound bucket parameters', function() {
        var url;
        s3 = new AWS.S3({
          paramValidation: true,
          params: {
            Bucket: 'bucket'
          }
        });
        url = s3.getSignedUrl('getObject', {
          Key: 'key',
          Expires: 60
        });
        return expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=60&Signature=ZJKBOuhI99B2OZdkGSOmfG86BOI%3D');
      });
      it('gets a signed URL with callback', function() {
        var url;
        url = null;
        runs(function() {
          return s3.getSignedUrl('getObject', {
            Bucket: 'bucket',
            Key: 'key'
          }, function(err, value) {
            return url = value;
          });
        });
        waitsFor(function() {
          return url;
        });
        return runs(function() {
          return expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=uefzBaGpqvO9QhGtT%2BbYda0pgQY%3D');
        });
      });
      it('gets a signed URL for putObject with no body', function() {
        var url;
        url = s3.getSignedUrl('putObject', {
          Bucket: 'bucket',
          Key: 'key'
        });
        return expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=h%2FphNvPoGxx9qq2U7Zhbfqgi0Xs%3D');
      });
      it('gets a signed URL for putObject with a body (and checksum)', function() {
        var url;
        url = s3.getSignedUrl('putObject', {
          Bucket: 'bucket',
          Key: 'key',
          Body: 'body'
        });
        return expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Content-MD5=hBotaJrYa9FhFEdFPCLG%2FA%3D%3D&Expires=900&Signature=7%2BXiHEwB%2B3nSg2rhTyatSigkGPI%3D');
      });
      return it('gets a signed URL and appends to existing query parameters', function() {
        var url;
        url = s3.getSignedUrl('listObjects', {
          Bucket: 'bucket',
          Prefix: 'prefix'
        });
        return expect(url).toEqual('https://bucket.s3.amazonaws.com/?prefix=prefix&AWSAccessKeyId=akid&Expires=900&Signature=fWeCHJBop4LyDXm2%2F%2BvR%2BqzH5zk%3D');
      });
    });
  });

}).call(this);

},{"../../lib/services/s3":41,"../helpers":93,"buffer":70,"stream":66}],116:[function(require,module,exports){
(function() {
  var AWS, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  require('../../lib/services/simpledb');

  describe('AWS.SimpleDB', function() {
    return describe('setEndpoint', function() {
      it('uses global endpoint if region is us-east-1', function() {
        var service;
        service = new AWS.SimpleDB({
          region: 'us-east-1'
        });
        service.setEndpoint();
        return expect(service.endpoint.host).toEqual('sdb.amazonaws.com');
      });
      return it('uses normal setEndpoint functionality if region is not us-east-1', function() {
        var service, setEndpoint;
        setEndpoint = spyOn(AWS.Service.prototype, 'setEndpoint');
        service = new AWS.SimpleDB({
          region: 'us-west-2'
        });
        service.setEndpoint();
        return expect(setEndpoint).toHaveBeenCalled();
      });
    });
  });

}).call(this);

},{"../../lib/services/simpledb":43,"../helpers":93}],117:[function(require,module,exports){
(function() {
  var AWS, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  require('../../lib/services/sqs');

  describe('AWS.SQS', function() {
    var checksumValidate, sqs;
    sqs = null;
    beforeEach(function() {
      return sqs = new AWS.SQS({
        params: {
          QueueUrl: 'http://url'
        }
      });
    });
    checksumValidate = function(operation, input, response, shouldPass, cb) {
      var output;
      output = null;
      helpers.mockHttpResponse(200, {}, response);
      runs(function() {
        return sqs[operation](input, function(e, d) {
          return output = {
            error: e,
            data: d
          };
        });
      });
      waitsFor(function() {
        return output;
      });
      return runs(function() {
        if (shouldPass) {
          expect(output.error).toEqual(null);
        } else {
          expect(output.error).not.toEqual(null);
        }
        if (cb) {
          return cb(output.error, output.data);
        }
      });
    };
    describe('sendMessage', function() {
      var input, md5, payload;
      input = {
        MessageBody: 'foo'
      };
      md5 = 'acbd18db4cc2f85cedef654fccc4a4d8';
      payload = function(md5) {
        return "<SendMessageResponse><SendMessageResult>\n  <MD5OfMessageBody>" + md5 + "</MD5OfMessageBody>\n  <MessageId>MSGID</MessageId>\n</SendMessageResult></SendMessageResponse>";
      };
      it('correctly validates MD5 of message input', function() {
        return checksumValidate('sendMessage', input, payload(md5), true, function(err, data) {
          return expect(data.MD5OfMessageBody).toEqual(md5);
        });
      });
      it('raises InvalidChecksum if MD5 does not match message input', function() {
        return checksumValidate('sendMessage', input, payload('000'), false, function(err) {
          expect(err.message).toMatch('Got "000", expecting "acbd18db4cc2f85cedef654fccc4a4d8"');
          return expect(err.messageIds).toEqual(['MSGID']);
        });
      });
      return it('ignores checksum errors if computeChecksums is false', function() {
        sqs.config.computeChecksums = false;
        return checksumValidate('sendMessage', input, payload('000'), true);
      });
    });
    describe('sendMessageBatch', function() {
      var input, md5bar, md5foo, payload;
      input = {
        Entries: [
          {
            Id: 'a',
            MessageBody: 'foo'
          }, {
            Id: 'b',
            MessageBody: 'bar'
          }, {
            Id: 'c',
            MessageBody: 'bar'
          }
        ]
      };
      md5foo = 'acbd18db4cc2f85cedef654fccc4a4d8';
      md5bar = '37b51d194a7513e45b56f6524f2d51f2';
      payload = function(md5a, md5b, md5c) {
        return "<SendMessageBatchResponse><SendMessageBatchResult>\n  <SendMessageBatchResultEntry>\n    <Id>a</Id>\n    <MessageId>MSGID1</MessageId>\n    <MD5OfMessageBody>" + md5a + "</MD5OfMessageBody>\n  </SendMessageBatchResultEntry>\n  <SendMessageBatchResultEntry>\n    <Id>b</Id>\n    <MessageId>MSGID2</MessageId>\n    <MD5OfMessageBody>" + md5b + "</MD5OfMessageBody>\n  </SendMessageBatchResultEntry>\n  <SendMessageBatchResultEntry>\n    <Id>c</Id>\n    <MessageId>MSGID3</MessageId>\n    <MD5OfMessageBody>" + md5c + "</MD5OfMessageBody>\n  </SendMessageBatchResultEntry>\n</SendMessageBatchResult></SendMessageBatchResponse>";
      };
      it('correctly validates MD5 of operation', function() {
        var output;
        output = payload(md5foo, md5bar, md5bar);
        return checksumValidate('sendMessageBatch', input, output, true, function(err, data) {
          expect(data.Successful[0].MD5OfMessageBody).toEqual(md5foo);
          expect(data.Successful[1].MD5OfMessageBody).toEqual(md5bar);
          return expect(data.Successful[2].MD5OfMessageBody).toEqual(md5bar);
        });
      });
      it('raises InvalidChecksum with relevent message IDs', function() {
        var output;
        output = payload('000', md5bar, '000');
        return checksumValidate('sendMessageBatch', input, output, false, function(err, data) {
          expect(err.message).toMatch('Invalid messages: a, c');
          return expect(err.messageIds).toEqual(['MSGID1', 'MSGID3']);
        });
      });
      return it('ignores checksum errors if computeChecksums is false', function() {
        var output;
        output = payload(md5foo, '000', md5bar);
        sqs.config.computeChecksums = false;
        return checksumValidate('sendMessageBatch', input, output, true);
      });
    });
    return describe('receiveMessage', function() {
      var md5, payload;
      md5 = 'acbd18db4cc2f85cedef654fccc4a4d8';
      payload = function(body, md5, id) {
        return "<ReceiveMessageResponse><ReceiveMessageResult><Message>\n  <Body>" + body + "</Body>\n  <MD5OfBody>" + md5 + "</MD5OfBody>\n  <MessageId>" + id + "</MessageId>\n</Message></ReceiveMessageResult></ReceiveMessageResponse>";
      };
      it('correctly validates MD5 of operation', function() {
        var output;
        output = payload('foo', md5, 'MSGID');
        return checksumValidate('receiveMessage', {}, output, true, function(err, data) {
          return expect(data.Messages[0].MD5OfBody).toEqual(md5);
        });
      });
      it('raises InvalidChecksum with relevent message IDs', function() {
        var output;
        output = payload('foo', '000', 'MSGID');
        return checksumValidate('receiveMessage', {}, output, false, function(err, data) {
          expect(err.message).toMatch('Invalid messages: MSGID');
          return expect(err.messageIds).toEqual(['MSGID']);
        });
      });
      return it('ignores checksum errors if computeChecksums is false', function() {
        var output;
        output = payload('foo', '000', 'MSGID');
        sqs.config.computeChecksums = false;
        return checksumValidate('receiveMessage', {}, output, true, function(err, data) {
          return expect(data.Messages[0].MD5OfBody).not.toEqual(md5);
        });
      });
    });
  });

}).call(this);

},{"../../lib/services/sqs":46,"../helpers":93}],118:[function(require,module,exports){
(function() {
  var AWS;

  AWS = require('../../lib/core');

  require('../../lib/signers/s3');

  describe('AWS.Signers.S3', function() {
    var accessKeyId, addAuth, body, buildRequest, credentials, date, headers, method, path, secretAccessKey, sessionToken, stringToSign, virtualHostedBucket;
    method = null;
    path = null;
    headers = null;
    body = null;
    date = null;
    virtualHostedBucket = null;
    accessKeyId = null;
    secretAccessKey = null;
    sessionToken = null;
    beforeEach(function() {
      method = 'POST';
      path = '/';
      virtualHostedBucket = null;
      date = new Date(0);
      headers = {};
      body = null;
      accessKeyId = 'akid';
      secretAccessKey = 'secret';
      return sessionToken = null;
    });
    buildRequest = function() {
      var req;
      req = new AWS.HttpRequest('https://s3.amazonaws.com');
      req.method = method;
      req.path = path;
      req.headers = headers;
      req.body = body;
      req.virtualHostedBucket = virtualHostedBucket;
      return req;
    };
    credentials = function() {
      var creds;
      creds = {};
      creds.accessKeyId = accessKeyId;
      creds.secretAccessKey = secretAccessKey;
      if (sessionToken) {
        creds.sessionToken = sessionToken;
      }
      return creds;
    };
    addAuth = function(req) {
      var signer;
      signer = new AWS.Signers.S3(req || buildRequest());
      signer.addAuthorization(credentials(), date);
      return signer.request;
    };
    stringToSign = function(req) {
      var signer;
      signer = new AWS.Signers.S3(req || buildRequest());
      return signer.stringToSign();
    };
    describe('addAuthorization', function() {
      it('sets the date header when not present', function() {
        var req;
        req = buildRequest();
        addAuth(req);
        return expect(req.headers['X-Amz-Date']).toEqual(AWS.util.date.rfc822(date));
      });
      it('overwrites Date if present', function() {
        var req;
        req = buildRequest();
        req.headers['X-Amz-Date'] = 'date-string';
        addAuth(req);
        return expect(req.headers['X-Amz-Date']).toEqual(AWS.util.date.rfc822(date));
      });
      it('omits the security token header when session token is blank', function() {
        var req;
        sessionToken = null;
        req = addAuth();
        return expect(req.headers['x-amz-security-token']).toEqual(void 0);
      });
      it('adds a security token header when session token available', function() {
        var req;
        sessionToken = 'session';
        req = addAuth();
        return expect(req.headers['x-amz-security-token']).toEqual('session');
      });
      return it('adds an Authorization header which contains akid and signature', function() {
        var creds, req, signer;
        creds = {
          accessKeyId: 'AKID',
          secretAccessKey: 'secret'
        };
        req = buildRequest();
        signer = new AWS.Signers.S3(req);
        spyOn(signer, 'stringToSign');
        signer.stringToSign.andReturn('string-to-sign');
        signer.addAuthorization(creds, date);
        return expect(req.headers['Authorization']).toEqual('AWS AKID:Gg5WLabTOvH0WMd15wv7lWe4zK0=');
      });
    });
    return describe('stringToSign', function() {
      beforeEach(function() {
        return headers['X-Amz-Date'] = 'DATE-STRING';
      });
      it('builds a basic string to sign', function() {
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-date:DATE-STRING\n/");
      });
      it('includes content md5 and content type when present', function() {
        headers['Content-Type'] = 'CONTENT-TYPE';
        headers['Content-MD5'] = 'CONTENT-MD5';
        return expect(stringToSign()).toEqual("POST\nCONTENT-MD5\nCONTENT-TYPE\n\nx-amz-date:DATE-STRING\n/");
      });
      it('includes the http method, whatever it is', function() {
        method = 'VERB';
        return expect(stringToSign()).toEqual("VERB\n\n\n\nx-amz-date:DATE-STRING\n/");
      });
      it('includes any x-amz- style headers, but not others', function() {
        headers['X-Amz-Abc'] = 'abc';
        headers['X-Amz-Xyz'] = 'xyz';
        headers['random-header'] = 'random';
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-abc:abc\nx-amz-date:DATE-STRING\nx-amz-xyz:xyz\n/");
      });
      it('includes x-amz- headers that are lower-cased', function() {
        headers['x-amz-Abc'] = 'abc';
        headers['x-amz-Xyz'] = 'xyz';
        headers['random-header'] = 'random';
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-abc:abc\nx-amz-date:DATE-STRING\nx-amz-xyz:xyz\n/");
      });
      it('sorts headers by their name', function() {
        headers['x-amz-mno'] = 'mno';
        headers['x-amz-Xyz'] = 'xyz';
        headers['x-amz-Abc'] = 'abc';
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-abc:abc\nx-amz-date:DATE-STRING\nx-amz-mno:mno\nx-amz-xyz:xyz\n/");
      });
      it('builds a canonical resource from the path', function() {
        path = '/bucket_name/key';
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-date:DATE-STRING\n/bucket_name/key");
      });
      it('appends the bucket to the path when it is part of the hostname', function() {
        path = '/';
        virtualHostedBucket = 'bucket-name';
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-date:DATE-STRING\n/bucket-name/");
      });
      it('appends the subresource portion of the path querystring', function() {
        path = '/?acl';
        virtualHostedBucket = 'bucket-name';
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-date:DATE-STRING\n/bucket-name/?acl");
      });
      it('includes the sub resource value when present', function() {
        path = '/bucket_name/key?versionId=123';
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-date:DATE-STRING\n/bucket_name/key?versionId=123");
      });
      it('omits non-sub-resource querystring params from the resource string', function() {
        path = '/?versionId=abc&next-marker=xyz';
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-date:DATE-STRING\n/?versionId=abc");
      });
      it('sorts sub resources by name', function() {
        path = '/?logging&acl&website&torrent=123';
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-date:DATE-STRING\n/?acl&logging&torrent=123&website");
      });
      it('sorts sub resources by name', function() {
        path = '/?logging&acl&website&torrent=123';
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-date:DATE-STRING\n/?acl&logging&torrent=123&website");
      });
      it('includes the un-decoded query string param for sub resources', function() {
        path = '/?versionId=a%2Bb';
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-date:DATE-STRING\n/?versionId=a%2Bb");
      });
      it('includes the non-encoded query string get header overrides', function() {
        path = '/?response-content-type=a%2Bb';
        return expect(stringToSign()).toEqual("POST\n\n\n\nx-amz-date:DATE-STRING\n/?response-content-type=a+b");
      });
      return it('omits the date header when not present', function() {
        delete headers['X-Amz-Date'];
        return expect(stringToSign()).toEqual("POST\n\n\n\n/");
      });
    });
  });

}).call(this);

},{"../../lib/core":4,"../../lib/signers/s3":52}],119:[function(require,module,exports){
(function() {
  var AWS;

  AWS = require('../../lib/core');

  require('../../lib/service_interface/query');

  require('../../lib/signers/v2');

  describe('AWS.Signers.V2', function() {
    var buildRequest, buildSigner, credentials, date, request, signRequest, signer, stringify;
    credentials = null;
    date = null;
    request = null;
    signer = null;
    buildRequest = function() {
      request = new AWS.HttpRequest(new AWS.Endpoint('localhost'));
      request.params = {};
      return request;
    };
    buildSigner = function(request) {
      return new AWS.Signers.V2(request);
    };
    signRequest = function(request) {
      signer = new AWS.Signers.V2(request);
      return signer.addAuthorization(credentials, date);
    };
    beforeEach(function() {
      credentials = {
        accessKeyId: 'akid',
        secretAccessKey: 'secret'
      };
      date = new Date(1935346573456);
      return signRequest(buildRequest());
    });
    stringify = AWS.util.queryParamsToString;
    describe('constructor', function() {
      return it('builds a signer for a request object', function() {
        return expect(signer.request).toBe(request);
      });
    });
    return describe('addAuthorization', function() {
      it('adds a url encoded iso8601 timestamp param', function() {
        return expect(stringify(request.params)).toMatch(/Timestamp=2031-04-30T20%3A16%3A13.456Z/);
      });
      it('adds a SignatureVersion param', function() {
        return expect(stringify(request.params)).toMatch(/SignatureVersion=2/);
      });
      it('adds a SignatureMethod param', function() {
        return expect(stringify(request.params)).toMatch(/SignatureMethod=HmacSHA256/);
      });
      it('adds an AWSAccessKeyId param', function() {
        return expect(stringify(request.params)).toMatch(/AWSAccessKeyId=akid/);
      });
      it('omits SecurityToken when sessionToken has been omitted', function() {
        return expect(stringify(request.params)).not.toMatch(/SecurityToken/);
      });
      it('adds the SecurityToken when sessionToken is provided', function() {
        credentials.sessionToken = 'session';
        signRequest(buildRequest());
        return expect(stringify(request.params)).toMatch(/SecurityToken=session/);
      });
      it('populates the body', function() {
        return expect(request.body).toEqual('AWSAccessKeyId=akid&Signature=%2FrumhWptMPvyb4aaeOv5iGpl6%2FLfs5uVHu8k1d3NNfc%3D&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2031-04-30T20%3A16%3A13.456Z');
      });
      it('populates content-length header', function() {
        return expect(request.headers['Content-Length']).toEqual(165);
      });
      return it('signs additional body params', function() {
        request = buildRequest();
        request.params['Param.1'] = 'abc';
        request.params['Param.2'] = 'xyz';
        signRequest(request);
        return expect(request.body).toEqual('AWSAccessKeyId=akid&Param.1=abc&Param.2=xyz&Signature=3pcXIWw0eVd4wFmp%2Blo24L93UTMGcYSNE%2BFYNNqzDts%3D&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2031-04-30T20%3A16%3A13.456Z');
      });
    });
  });

}).call(this);

},{"../../lib/core":4,"../../lib/service_interface/query":14,"../../lib/signers/v2":53}],120:[function(require,module,exports){
(function() {
  var AWS, buildRequest, buildSigner, helpers;

  AWS = require('../../lib/core');

  helpers = require('../helpers');

  require('../../lib/services/dynamodb');

  beforeEach(function() {
    return spyOn(AWS.util, 'userAgent').andReturn('aws-sdk-js/0.1');
  });

  buildRequest = function() {
    var ddb, req, resp;
    ddb = new AWS.DynamoDB.Client({
      region: 'region',
      endpoint: 'localhost',
      apiVersion: '2011-12-05'
    });
    req = ddb.makeRequest('listTables', {
      foo: 'bår'
    });
    resp = new AWS.Response(req);
    req.emitEvents(['validate', 'build', 'afterBuild'], resp);
    return req.httpRequest;
  };

  buildSigner = function(request) {
    return new AWS.Signers.V4(request || buildRequest(), 'dynamodb');
  };

  describe('AWS.Signers.V4', function() {
    var authorization, creds, date, datetime, signature, signer;
    date = new Date(1935346573456);
    datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '');
    creds = {
      accessKeyId: 'akid',
      secretAccessKey: 'secret',
      sessionToken: 'session'
    };
    signature = '838c924736f5ce488c99f0955097c9571544d84968102543edc9b01dfaa7ef16';
    authorization = 'AWS4-HMAC-SHA256 Credential=akid/20310430/region/dynamodb/aws4_request, ' + 'SignedHeaders=content-length;host;x-amz-date;x-amz-security-token;x-amz-target, ' + 'Signature=' + signature;
    signer = null;
    beforeEach(function() {
      signer = buildSigner();
      return signer.addHeaders(creds, datetime);
    });
    describe('constructor', function() {
      return it('can build a signer for a request object', function() {
        var req;
        req = buildRequest();
        signer = buildSigner(req);
        return expect(signer.request).toBe(req);
      });
    });
    describe('addAuthorization', function() {
      var headers, key, value, _results;
      headers = {
        'Content-Type': 'application/x-amz-json-1.0',
        'Content-Length': 14,
        'X-Amz-Target': 'DynamoDB_20111205.ListTables',
        'Host': 'localhost',
        'X-Amz-Date': datetime,
        'x-amz-security-token': 'session',
        'Authorization': authorization
      };
      beforeEach(function() {
        return signer.addAuthorization(creds, date);
      });
      _results = [];
      for (key in headers) {
        value = headers[key];
        _results.push(it('should add ' + key + ' header', function() {
          key = this.description.match(/(\S+) header/)[1];
          return expect(signer.request.headers[key]).toEqual(headers[key]);
        }));
      }
      return _results;
    });
    describe('authorization', function() {
      return it('should return authorization part for signer', function() {
        return expect(signer.authorization(creds, datetime)).toEqual(authorization);
      });
    });
    describe('signature', function() {
      return it('should generate proper signature', function() {
        return expect(signer.signature(creds, datetime)).toEqual(signature);
      });
    });
    describe('stringToSign', function() {
      return it('should sign correctly generated input string', function() {
        return expect(signer.stringToSign(datetime)).toEqual('AWS4-HMAC-SHA256\n' + datetime + '\n' + '20310430/region/dynamodb/aws4_request\n' + signer.hexEncodedHash(signer.canonicalString()));
      });
    });
    return describe('canonicalHeaders', function() {
      it('should return headers', function() {
        return expect(signer.canonicalHeaders()).toEqual(['content-length:14', 'host:localhost', 'x-amz-date:' + datetime, 'x-amz-security-token:session', 'x-amz-target:DynamoDB_20111205.ListTables'].join('\n'));
      });
      it('should ignore Authorization header', function() {
        signer.request.headers = {
          'Authorization': 'foo'
        };
        return expect(signer.canonicalHeaders()).toEqual('');
      });
      it('should lowercase all header names (not values)', function() {
        signer.request.headers = {
          'FOO': 'BAR'
        };
        return expect(signer.canonicalHeaders()).toEqual('foo:BAR');
      });
      it('should sort headers by key', function() {
        signer.request.headers = {
          abc: 'a',
          bca: 'b',
          Qux: 'c',
          bar: 'd'
        };
        return expect(signer.canonicalHeaders()).toEqual('abc:a\nbar:d\nbca:b\nqux:c');
      });
      it('should compact multiple spaces in keys/values to a single space', function() {
        signer.request.headers = {
          'Header': 'Value     with  Multiple   \t spaces'
        };
        return expect(signer.canonicalHeaders()).toEqual('header:Value with Multiple spaces');
      });
      return it('should strip starting and end of line spaces', function() {
        signer.request.headers = {
          'Header': ' \t   Value  \t  '
        };
        return expect(signer.canonicalHeaders()).toEqual('header:Value');
      });
    });
  });

}).call(this);

},{"../../lib/core":4,"../../lib/services/dynamodb":27,"../helpers":93}],121:[function(require,module,exports){
var __filename="/test/util.spec.coffee";(function() {
  var AWS, Buffer;

  AWS = require('../lib/core');

  Buffer = require('buffer').Buffer;

  describe('uriEscape', function() {
    var e;
    e = AWS.util.uriEscape;
    it('escapes spaces as %20', function() {
      return expect(e('a b')).toEqual('a%20b');
    });
    it('escapes + as %2B', function() {
      return expect(e('a+b')).toEqual('a%2Bb');
    });
    it('escapes / as %2F', function() {
      return expect(e('a/b')).toEqual('a%2Fb');
    });
    it('escapes * as %2A', function() {
      return expect(e('a*b')).toEqual('a%2Ab');
    });
    it('does not escape ~', function() {
      return expect(e('a~b')).toEqual('a~b');
    });
    return it('encodes utf8 characters', function() {
      return expect(e('ёŝ')).toEqual('%D1%91%C5%9D');
    });
  });

  describe('uriEscapePath', function() {
    var e;
    e = AWS.util.uriEscapePath;
    it('does not escape forward slashes', function() {
      var s;
      s = 'a&b/x=y/1+2/m?n';
      return expect(e(s)).toEqual('a%26b/x%3Dy/1%2B2/m%3Fn');
    });
    return it('leaves leading and trailing forward slashes in place', function() {
      var s;
      s = '/ab cd/';
      return expect(e(s)).toEqual('/ab%20cd/');
    });
  });

  describe('AWS.util.queryParamsToString', function() {
    var qpts;
    qpts = AWS.util.queryParamsToString;
    it('sorts query parameters before stringifying', function() {
      return expect(qpts({
        c: '1',
        b: '2',
        a: '3'
      })).toEqual('a=3&b=2&c=1');
    });
    it('handles empty values', function() {
      return expect(qpts({
        a: '',
        b: '2'
      })).toEqual('a=&b=2');
    });
    it('handles null/undefined values', function() {
      return expect(qpts({
        a: void 0,
        b: null
      })).toEqual('a&b');
    });
    it('calls uriEscape on each name and value', function() {
      var spy;
      spy = spyOn(AWS.util, 'uriEscape').andCallThrough();
      qpts({
        c: '1',
        b: '2',
        a: '3'
      });
      return expect(spy.calls.length).toEqual(6);
    });
    it('handles values as lists', function() {
      return expect(qpts({
        a: ['1', '2', '3'],
        b: '4'
      })).toEqual('a=1&a=2&a=3&b=4');
    });
    return it('escapes list values', function() {
      return expect(qpts({
        a: ['+', '&', '*'],
        b: '4'
      })).toEqual('a=%26&a=%2A&a=%2B&b=4');
    });
  });

  describe('AWS.util.date', function() {
    var util;
    util = AWS.util.date;
    describe('getDate', function() {
      return it('should return current date by default', function() {
        var now, oldDate;
        oldDate = Date;
        now = {};
        Date = jasmine.createSpy().andReturn(now);;
        expect(util.getDate()).toBe(now);
        return Date = oldDate;;
      });
    });
    describe('iso8601', function() {
      it('should return date formatted as YYYYMMDDTHHnnssZ', function() {
        spyOn(util, 'getDate').andCallFake(function() {
          return new Date(600000);
        });
        return expect(util.iso8601()).toEqual('1970-01-01T00:10:00.000Z');
      });
      return it('should allow date parameter', function() {
        return expect(util.iso8601(new Date(660000))).toEqual('1970-01-01T00:11:00.000Z');
      });
    });
    describe('rfc822', function() {
      it('should return date formatted as YYYYMMDDTHHnnssZ', function() {
        spyOn(util, 'getDate').andCallFake(function() {
          return new Date(600000);
        });
        return expect(util.rfc822()).toEqual('Thu, 01 Jan 1970 00:10:00 GMT');
      });
      return it('should allow date parameter', function() {
        return expect(util.rfc822(new Date(660000))).toEqual('Thu, 01 Jan 1970 00:11:00 GMT');
      });
    });
    return describe('unixTimestamp', function() {
      it('should return date formatted as unix timestamp', function() {
        spyOn(util, 'getDate').andCallFake(function() {
          return new Date(600000);
        });
        return expect(util.unixTimestamp()).toEqual(600);
      });
      it('should allow date parameter', function() {
        return expect(util.unixTimestamp(new Date(660000))).toEqual(660);
      });
      return it('should return date formatted as unix timestamp with milliseconds', function() {
        spyOn(util, 'getDate').andCallFake(function() {
          return new Date(600123);
        });
        return expect(util.unixTimestamp()).toEqual(600.123);
      });
    });
  });

  describe('AWS.util.string', function() {
    var len;
    len = AWS.util.string.byteLength;
    return describe('byteLength', function() {
      it('handles null/undefined objects', function() {
        expect(len(void 0)).toEqual(0);
        return expect(len(null)).toEqual(0);
      });
      it('handles buffer input', function() {
        return expect(len(new Buffer('∂ƒ©∆'))).toEqual(10);
      });
      it('handles string input', function() {
        expect(len('')).toEqual(0);
        return expect(len('∂ƒ©∆')).toEqual(10);
      });
      it('handles file object input (path property)', function() {
        var file, fileLen, fs;
        fs = require('fs');
        file = fs.createReadStream(__filename);
        fileLen = fs.lstatSync(file.path).size;
        expect(len(file)).toEqual(fileLen);
        return expect(len({
          path: __filename
        })).toEqual(fileLen);
      });
      it('fails if input is not a string, buffer, or file', function() {
        var e, err;
        err = null;
        try {
          len(3.14);
        } catch (_error) {
          e = _error;
          err = e;
        }
        expect(err.message).toEqual('Cannot determine length of 3.14');
        return expect(err.object).toBe(3.14);
      });
      return it('ignores path property unless it is a string', function() {
        var e, err, object;
        object = {};
        err = null;
        try {
          len(object);
        } catch (_error) {
          e = _error;
          err = e;
        }
        expect(err.message).toMatch(/Cannot determine length of /);
        return expect(err.object).toBe(object);
      });
    });
  });

  describe('AWS.util.buffer', function() {
    return describe('concat', function() {
      return it('concatenates a list of buffers', function() {
        var buffer1, buffer2, buffer3;
        buffer1 = new Buffer('abcdefg');
        buffer2 = new Buffer('hijklmn');
        buffer3 = AWS.util.buffer.concat([buffer1, buffer2]);
        expect(buffer3.length).toEqual(14);
        return expect(buffer3.toString()).toEqual('abcdefghijklmn');
      });
    });
  });

  describe('AWS.util.crypto', function() {
    var util;
    util = AWS.util.crypto;
    describe('crc32', function() {
      it('returns the correct CRC32 value for binary data', function() {
        var buffer, i, _i, _ref;
        buffer = new Buffer(4433);
        for (i = _i = 0, _ref = buffer.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
          buffer.writeUInt8(i % 256, i);
        }
        return expect(util.crc32(buffer)).toEqual(899332870);
      });
      return it('handles String values', function() {
        var string;
        string = '{"ConsumedCapacityUnits":1.0}';
        return expect(util.crc32(string)).toEqual(2614884069);
      });
    });
    describe('toHex', function() {
      return it('should convert binary data to hex string', function() {
        return expect(util.toHex('ABC')).toEqual('414243');
      });
    });
    describe('hmac', function() {
      var input, key, result;
      input = 'foo';
      key = 'KEY';
      result = '116a3725a3540067a09e4dba64bb6b3fb27b4d98a1a2e2dbcb8b4cffa73585d5';
      it('should return a keyed hash as a binary digest', function() {
        var expected;
        expected = util.hmac(key, input);
        return expect(util.toHex(expected)).toEqual(result);
      });
      it('should return a keyed hash as hex digest', function() {
        var expected;
        expected = util.hmac(key, input, 'hex');
        return expect(expected).toEqual(result);
      });
      it('accepts the crypto function as an argument', function() {
        var r;
        r = util.hmac('secret', 'the quick brown fox', 'base64', 'sha1');
        return expect(r).toEqual('z1BzGT+uG/2qGzE1UHb5m/skn1E=');
      });
      return it('accepts UTF-8 input for string', function() {
        var r;
        r = util.hmac('foo', 'å∆ç∂', 'hex');
        return expect(r).toEqual('b2ce6b3feec8a02f3bb2e3f32f7bf0daee0f14e79631707a266fddcf404edded');
      });
    });
    describe('sha256', function() {
      var input, result;
      input = 'foo';
      result = '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae';
      it('should return binary data hashed with sha256', function() {
        var expected;
        expected = util.sha256(input);
        return expect(util.toHex(expected)).toEqual(result);
      });
      it('should return hex data hashed with sha256', function() {
        var expected;
        expected = util.sha256(input, 'hex');
        return expect(expected).toEqual(result);
      });
      return it('accepts UTF-8 input', function() {
        var r;
        r = util.sha256('ß∂ƒ©', 'hex');
        return expect(r).toEqual('3c01ddd413d2cacac59a255e4aade0d9058a8a9ea8b2dfe5bb2dc4ed132b4139');
      });
    });
    return describe('md5', function() {
      var input, result;
      input = 'foo';
      result = 'acbd18db4cc2f85cedef654fccc4a4d8';
      it('should return binary data hashed with md5', function() {
        var expected;
        expected = util.md5(input);
        return expect(util.toHex(expected)).toEqual(result);
      });
      it('should return hex data hashed with md5', function() {
        var expected;
        expected = util.md5(input, 'hex');
        return expect(expected).toEqual(result);
      });
      return it('accepts UTF-8 input', function() {
        var r;
        r = util.md5('ￃ', 'hex');
        return expect(r).toEqual('b497dbbe19fb58cddaeef11f9d40804c');
      });
    });
  });

  describe('AWS.util.each', function() {
    it('should iterate over a hash', function() {
      var parts;
      parts = [];
      AWS.util.each({
        a: 1,
        b: 2,
        c: 3
      }, function(key, item) {
        return parts.push([key + '_', item + 1]);
      });
      return expect(parts).toEqual([['a_', 2], ['b_', 3], ['c_', 4]]);
    });
    it('should iterate over an array', function() {
      var total;
      total = 0;
      AWS.util.each([1, 2, 3], function(idx, item) {
        return total += item;
      });
      return expect(total).toEqual(6);
    });
    it('should ignore inherited properties', function() {
      var obj, objCtor, parts;
      objCtor = function() {
        this.a = 1;
        this.b = 2;
        return this.c = 3;
      };
      objCtor.prototype = {
        d: 4,
        e: 5,
        f: 6
      };
      obj = new objCtor();
      parts = [];
      AWS.util.each(obj, function(key, item) {
        return parts.push([key + '_', item + 1]);
      });
      return expect(parts).toEqual([['a_', 2], ['b_', 3], ['c_', 4]]);
    });
    it('callback should not change "this" scope', function() {
      return new function() {
        var self;
        this["class"] = 'MyClass';
        self = this;
        return AWS.util.each.apply(this, [
          [1, 2, 3], function() {
            return expect(this).toBe(self);
          }
        ]);
      };
    });
    return it('can abort out of loop', function() {
      var string;
      string = '';
      AWS.util.each({
        a: 1,
        b: 2,
        c: 3
      }, function(key, item) {
        if (item === 2) {
          return AWS.util.abort;
        }
        return string += key;
      });
      return expect(string).toEqual('a');
    });
  });

  describe('AWS.util.arrayEach', function() {
    it('should iterate over arrays', function() {
      var total;
      total = 0;
      AWS.util.arrayEach([1, 2, 3], function(item) {
        return total += item;
      });
      return expect(total).toEqual(6);
    });
    it('should pass index as second parameter', function() {
      var lastIndex;
      lastIndex = null;
      return AWS.util.arrayEach([1, 2, 3], function(item, idx) {
        expect(typeof idx).toEqual('number');
        if (lastIndex !== null) {
          expect(lastIndex).toEqual(idx - 1);
        }
        return lastIndex = idx;
      });
    });
    return it('can abort out of loop', function() {
      var total;
      total = 0;
      AWS.util.arrayEach([1, 2, 3], function(item, idx) {
        if (idx === 1) {
          return AWS.util.abort;
        }
        return total += item;
      });
      return expect(total).toEqual(1);
    });
  });

  describe('AWS.util.copy', function() {
    it('does not copy null or undefined', function() {
      expect(AWS.util.copy(null)).toEqual(null);
      return expect(AWS.util.copy(void 0)).toEqual(void 0);
    });
    it('should perform a shallow copy of an object', function() {
      var copied, obj;
      obj = {
        a: 1,
        b: 2,
        c: 3
      };
      copied = AWS.util.copy(obj);
      expect(copied).not.toBe(obj);
      return expect(copied).toEqual({
        a: 1,
        b: 2,
        c: 3
      });
    });
    return it('should copy inherited properties', function() {
      var copied, obj, objCtor;
      objCtor = function() {
        this.a = 1;
        this.b = 2;
        return this.c = 3;
      };
      objCtor.prototype = {
        d: 4
      };
      obj = new objCtor();
      copied = AWS.util.copy(obj);
      expect(copied).not.toBe(obj);
      return expect(copied).toEqual({
        a: 1,
        b: 2,
        c: 3,
        d: 4
      });
    });
  });

  describe('AWS.util.merge', function() {
    return it('should merge an object into another and return new object', function() {
      var newObj, obj;
      obj = {
        a: 1,
        b: 2,
        c: 3
      };
      newObj = AWS.util.merge(obj, {
        d: 4,
        e: 5,
        a: 6
      });
      expect(newObj).toEqual({
        a: 6,
        b: 2,
        c: 3,
        d: 4,
        e: 5
      });
      return expect(obj).toEqual({
        a: 1,
        b: 2,
        c: 3
      });
    });
  });

  describe('AWS.util.update', function() {
    it('should merge an object into another', function() {
      var obj;
      obj = {
        a: 1,
        b: 2,
        c: 3
      };
      AWS.util.update(obj, {
        d: 4,
        e: 5,
        a: 6
      });
      return expect(obj).toEqual({
        a: 6,
        b: 2,
        c: 3,
        d: 4,
        e: 5
      });
    });
    return it('should return the merged object', function() {
      var obj;
      obj = {
        a: 1,
        b: 2
      };
      return expect(AWS.util.update(obj, {
        c: 3
      })).toBe(obj);
    });
  });

  describe('AWS.util.inherit', function() {
    it('should inherit an object and append features', function() {
      var Base, Derived, derived;
      Base = function(value) {
        return this.defaultValue = value;
      };
      Base.prototype = {
        main: function() {
          return 'main';
        },
        other: 'other'
      };
      Derived = AWS.util.inherit(Base, {
        constructor: function(value) {
          return Base.apply(this, [value + 5]);
        },
        main: function() {
          return 'notMain';
        },
        foo: function() {
          return 'bar';
        }
      });
      derived = new Derived(5);
      expect(derived instanceof Base).toBeTruthy();
      expect(derived.constructor).toBe(Derived);
      expect(derived.main()).toEqual('notMain');
      expect(derived.other).toEqual('other');
      expect(derived.defaultValue).toEqual(10);
      return expect(derived.foo()).toEqual('bar');
    });
    return it('should create pass-through constructor if not defined', function() {
      var Base, Derived, derived;
      Base = AWS.util.inherit({
        constructor: jasmine.createSpy()
      });
      Derived = AWS.util.inherit(Base, {
        other: true
      });
      derived = new Derived(1, 2, 'three');
      expect(derived.other).toEqual(true);
      return expect(Base.prototype.constructor).toHaveBeenCalledWith(1, 2, 'three');
    });
  });

  describe('AWS.util.mixin', function() {
    it('copies properties to other object prototype', function() {
      var obj;
      obj = {
        prototype: {
          a: 1,
          b: 2
        }
      };
      AWS.util.mixin(obj, {
        prototype: {
          b: 3,
          c: 4
        }
      });
      return expect(obj.prototype).toEqual({
        a: 1,
        b: 3,
        c: 4
      });
    });
    it('resets prototype constructor', function() {
      var obj;
      obj = {
        prototype: {
          constructor: 'PASS'
        }
      };
      AWS.util.mixin(obj, {
        prototype: {
          constructor: 'FAIL'
        }
      });
      return expect(obj.prototype).toEqual({
        constructor: 'PASS'
      });
    });
    return it('returns original klass', function() {
      var obj, out;
      obj = {
        prototype: {
          foo: 1
        }
      };
      out = AWS.util.mixin(obj, {
        prototype: {
          bar: 2
        }
      });
      return expect(out).toBe(obj);
    });
  });

  describe('AWS.util.isType', function() {
    it('accepts function for type', function() {
      return expect(AWS.util.isType([], Array)).toEqual(true);
    });
    return it('accepts string for type', function() {
      return expect(AWS.util.isType([], 'Array')).toEqual(true);
    });
  });

  describe('AWS.util.isEmpty', function() {
    it('returns true when passed an empty object literal', function() {
      return expect(AWS.util.isEmpty({})).toEqual(true);
    });
    return it('returns true when passed a non-empty object literal', function() {
      return expect(AWS.util.isEmpty({
        a: 1
      })).toEqual(false);
    });
  });

  describe('AWS.util.error', function() {
    it('returns the created error object with extra options', function() {
      var err, origError;
      origError = new Error();
      err = AWS.util.error(origError, {
        message: 'msg',
        code: 'code'
      });
      expect(err).toBe(origError);
      expect(err.message).toEqual('msg');
      return expect(err.code).toEqual('code');
    });
    it('accepts missing options', function() {
      var err, origError;
      origError = new Error('ERROR');
      err = AWS.util.error(origError);
      expect(err).toBe(origError);
      return expect(err.message).toEqual('ERROR');
    });
    return it('maintains the original error message property', function() {
      var err, origError;
      origError = new Error('ERROR');
      err = AWS.util.error(origError, {
        code: 'code'
      });
      expect(err).toBe(origError);
      expect(err.message).toEqual('ERROR');
      return expect(err.code).toEqual('code');
    });
  });

  describe('AWS.util.base64', function() {
    var base64;
    base64 = AWS.util.base64;
    describe('encode', function() {
      return it('encodes the given string', function() {
        expect(base64.encode('foo')).toEqual('Zm9v');
        return expect(base64.encode('ёŝ')).toEqual('0ZHFnQ==');
      });
    });
    return describe('decode', function() {
      return it('decodes the given string', function() {
        expect(base64.decode('Zm9v')).toEqual('foo');
        return expect(base64.decode('0ZHFnQ==')).toEqual('ёŝ');
      });
    });
  });

  describe('AWS.util.jamespath', function() {
    var find, query;
    query = AWS.util.jamespath.query;
    find = AWS.util.jamespath.find;
    describe('query', function() {
      it('can find a toplevel element of a data structure', function() {
        return expect(query('foo', {
          foo: 'value'
        })).toEqual(['value']);
      });
      it('can find a nested element of a data structure', function() {
        return expect(query('foo.bar.baz', {
          foo: {
            bar: {
              baz: 'value'
            }
          }
        })).toEqual(['value']);
      });
      it('can index an element (positive and negative indexes)', function() {
        var data;
        data = {
          foo: {
            bar: [
              {
                baz: 'wrong'
              }, {
                baz: 'right'
              }, {
                baz: 'wrong'
              }
            ]
          }
        };
        expect(query('foo.bar[1].baz', data)).toEqual(['right']);
        return expect(query('foo.bar[-2].baz', data)).toEqual(['right']);
      });
      it('can index an element with wildcard', function() {
        var data;
        data = {
          foo: {
            bar: [
              {
                baz: 'wrong'
              }, {
                baz: 'right'
              }, {
                baz: 'wrong'
              }
            ]
          }
        };
        return expect(query('foo.bar[*].baz', data)).toEqual(['wrong', 'right', 'wrong']);
      });
      it('returns empty array if element is not found', function() {
        var data;
        data = {
          foo: {
            notBar: {
              baz: 'value'
            }
          }
        };
        return expect(query('foo.bar.baz', data)).toEqual([]);
      });
      it('allows multiple expressions to be ORed', function() {
        var data;
        data = {
          foo: {
            key1: 'wrong'
          },
          bar: {
            key2: 'right'
          }
        };
        return expect(query('foo.key2 or bar.key2', data)).toEqual(['right']);
      });
      it('returns multiple matches if a wildcard is used', function() {
        var data;
        data = {
          foo: {
            child1: {
              bar: 'value1'
            },
            child2: {
              bar: 'value2'
            },
            child3: {
              bar: 'value3'
            }
          }
        };
        return expect(query('foo.*.bar', data)).toEqual(['value1', 'value2', 'value3']);
      });
      return it('can support wildcard on both token and index', function() {
        var data;
        data = {
          foo: {
            child1: ['value1', 'value2'],
            child2: ['value3'],
            child4: 'notarray'
          }
        };
        return expect(query('foo.*[*]', data)).toEqual(['value1', 'value2', 'value3']);
      });
    });
    return describe('find', function() {
      it('returns the first match of query', function() {
        return expect(find('foo.*', {
          foo: {
            bar: 1,
            baz: 2
          }
        })).toEqual(1);
      });
      return it('returns null if no match is found', function() {
        return expect(find('invalid.*', {
          foo: {
            bar: 1,
            baz: 2
          }
        })).toEqual(null);
      });
    });
  });

}).call(this);

},{"../lib/core":4,"buffer":70,"fs":63}],122:[function(require,module,exports){
(function() {
  var AWS, helpers, matchXML;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  matchXML = helpers.matchXML;

  describe('AWS.XML.Builder', function() {
    var toXML, xmlns;
    xmlns = 'http://mockservice.com/xmlns';
    toXML = function(rules, params, options) {
      var builder;
      if (!options) {
        options = {};
      }
      options.xmlnamespace = xmlns;
      builder = new AWS.XML.Builder('Data', rules, options);
      return builder.toXML(params);
    };
    describe('toXML', function() {
      it('returns an empty element when there are no params', function() {
        return expect(toXML(null, null)).toEqual("<Data xmlns=\"" + xmlns + "\"/>");
      });
      it('wraps simple structures with location of body', function() {
        var params, rules, xml;
        rules = {
          Name: {},
          State: {}
        };
        params = {
          Name: 'abc',
          State: 'Enabled'
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Name>abc</Name>\n  <State>Enabled</State>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      it('orders xml members by the order they appear in the rules', function() {
        var params, rules, xml;
        rules = {
          Count: {
            type: 'integer'
          },
          State: {}
        };
        params = {
          State: 'Disabled',
          Count: 123
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Count>123</Count>\n  <State>Disabled</State>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      it('can serializes structures into XML', function() {
        var params, rules, xml;
        rules = {
          Name: {},
          Details: {
            type: 'structure',
            members: {
              Abc: {},
              Xyz: {}
            }
          }
        };
        params = {
          Details: {
            Xyz: 'xyz',
            Abc: 'abc'
          },
          Name: 'john'
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Name>john</Name>\n  <Details>\n    <Abc>abc</Abc>\n    <Xyz>xyz</Xyz>\n  </Details>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      it('serializes empty structures as empty element', function() {
        var params, rules, xml;
        rules = {
          Config: {
            type: 'structure',
            members: {
              Foo: {},
              Bar: {}
            }
          }
        };
        params = {
          Config: {}
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Config/>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      return it('does not serialize missing members', function() {
        var params, rules, xml;
        rules = {
          Config: {
            type: 'structure',
            members: {
              Foo: {},
              Bar: {}
            }
          }
        };
        params = {
          Config: {
            Foo: 'abc'
          }
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Config>\n    <Foo>abc</Foo>\n  </Config>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
    });
    describe('lists', function() {
      it('serializes lists (default member names)', function() {
        var params, rules, xml;
        rules = {
          Aliases: {
            type: 'list',
            members: {}
          }
        };
        params = {
          Aliases: ['abc', 'mno', 'xyz']
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Aliases>\n    <member>abc</member>\n    <member>mno</member>\n    <member>xyz</member>\n  </Aliases>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      it('serializes lists (custom member names)', function() {
        var params, rules, xml;
        rules = {
          Aliases: {
            type: 'list',
            members: {
              name: 'Alias'
            }
          }
        };
        params = {
          Aliases: ['abc', 'mno', 'xyz']
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Aliases>\n    <Alias>abc</Alias>\n    <Alias>mno</Alias>\n    <Alias>xyz</Alias>\n  </Aliases>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      it('includes lists elements even if they have no members', function() {
        var params, rules, xml;
        rules = {
          Aliases: {
            type: 'list',
            members: {
              name: 'Alias'
            }
          }
        };
        params = {
          Aliases: []
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Aliases/>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      return it('serializes lists of structures', function() {
        var params, rules, xml;
        rules = {
          Points: {
            type: 'list',
            members: {
              type: 'structure',
              name: 'Point',
              members: {
                X: {
                  type: 'float'
                },
                Y: {
                  type: 'float'
                }
              }
            }
          }
        };
        params = {
          Points: [
            {
              X: 1.2,
              Y: 2.1
            }, {
              X: 3.4,
              Y: 4.3
            }
          ]
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Points>\n    <Point>\n      <X>1.2</X>\n      <Y>2.1</Y>\n    </Point>\n    <Point>\n      <X>3.4</X>\n      <Y>4.3</Y>\n    </Point>\n  </Points>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
    });
    describe('lists', function() {
      it('serializes lists without a base wrapper', function() {
        var params, rules, xml;
        rules = {
          Aliases: {
            type: 'list',
            flattened: true,
            members: {}
          }
        };
        params = {
          Aliases: ['abc', 'mno', 'xyz']
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Aliases>abc</Aliases>\n  <Aliases>mno</Aliases>\n  <Aliases>xyz</Aliases>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      it('serializes lists (custom member names)', function() {
        var params, rules, xml;
        rules = {
          Aliases: {
            type: 'list',
            flattened: true,
            name: 'Alias',
            members: {}
          }
        };
        params = {
          Aliases: ['abc', 'mno', 'xyz']
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Alias>abc</Alias>\n  <Alias>mno</Alias>\n  <Alias>xyz</Alias>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      it('omits lists elements when no members are given', function() {
        var params, rules, xml;
        rules = {
          Aliases: {
            type: 'list',
            flattened: true,
            members: {
              name: 'Alias'
            }
          }
        };
        params = {
          Aliases: []
        };
        xml = "<Data xmlns=\"" + xmlns + "\"/>";
        return matchXML(toXML(rules, params), xml);
      });
      return it('serializes lists of structures', function() {
        var params, rules, xml;
        rules = {
          Points: {
            type: 'list',
            flattened: true,
            name: 'Point',
            members: {
              type: 'structure',
              name: 'Point',
              members: {
                X: {
                  type: 'float'
                },
                Y: {
                  type: 'float'
                }
              }
            }
          }
        };
        params = {
          Points: [
            {
              X: 1.2,
              Y: 2.1
            }, {
              X: 3.4,
              Y: 4.3
            }
          ]
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Point>\n    <X>1.2</X>\n    <Y>2.1</Y>\n  </Point>\n  <Point>\n    <X>3.4</X>\n    <Y>4.3</Y>\n  </Point>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
    });
    describe('numbers', function() {
      it('integers', function() {
        var params, rules, xml;
        rules = {
          Count: {
            type: 'integer'
          }
        };
        params = {
          Count: 123.0
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Count>123</Count>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      return it('floats', function() {
        var params, rules, xml;
        rules = {
          Count: {
            type: 'float'
          }
        };
        params = {
          Count: 123.123
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Count>123.123</Count>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
    });
    describe('booleans', function() {
      it('true', function() {
        var params, rules, xml;
        rules = {
          Enabled: {
            type: 'boolean'
          }
        };
        params = {
          Enabled: true
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Enabled>true</Enabled>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      return it('false', function() {
        var params, rules, xml;
        rules = {
          Enabled: {
            type: 'booleans'
          }
        };
        params = {
          Enabled: false
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Enabled>false</Enabled>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
    });
    describe('timestamps', function() {
      var time;
      time = new Date();
      it('iso8601', function() {
        var params, rules, xml;
        rules = {
          Expires: {
            type: 'timestamp'
          }
        };
        params = {
          Expires: time
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Expires>" + (AWS.util.date.iso8601(time)) + "</Expires>\n</Data>";
        return matchXML(toXML(rules, params, {
          timestampFormat: 'iso8601'
        }), xml);
      });
      it('rfc822', function() {
        var params, rules, xml;
        rules = {
          Expires: {
            type: 'timestamp'
          }
        };
        params = {
          Expires: time
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Expires>" + (AWS.util.date.rfc822(time)) + "</Expires>\n</Data>";
        return matchXML(toXML(rules, params, {
          timestampFormat: 'rfc822'
        }), xml);
      });
      it('unix timestamp', function() {
        var params, rules, xml;
        rules = {
          Expires: {
            type: 'timestamp'
          }
        };
        params = {
          Expires: time
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Expires>" + (AWS.util.date.unixTimestamp(time)) + "</Expires>\n</Data>";
        return matchXML(toXML(rules, params, {
          timestampFormat: 'unixTimestamp'
        }), xml);
      });
      return it('follows the forat given on the shape', function() {
        var params, rules, xml;
        rules = {
          Expires: {
            type: 'timestamp',
            format: 'rfc822'
          }
        };
        params = {
          Expires: time
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Expires>" + (AWS.util.date.rfc822(time)) + "</Expires>\n</Data>";
        return matchXML(toXML(rules, params, {
          timestampFormat: 'unixTimestamp'
        }), xml);
      });
    });
    describe('xml attributes', function() {
      return it('can serialize xml attributes', function() {
        var params, rules, xml;
        rules = {
          Config: {
            type: 'structure',
            members: {
              Foo: {
                type: 'string'
              },
              Attr: {
                type: 'string',
                attribute: true,
                name: 'attr:name'
              }
            }
          }
        };
        params = {
          Config: {
            Foo: 'bar',
            Attr: 'abc'
          }
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Config attr:name=\"abc\"><Foo>bar</Foo></Config>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
    });
    return describe('xml namespaces', function() {
      it('can apply xml namespaces on structures', function() {
        var params, rules, xml;
        rules = {
          Config: {
            type: 'structure',
            xmlns: {
              uri: 'URI'
            },
            members: {
              Foo: {
                type: 'string'
              }
            }
          }
        };
        params = {
          Config: {
            Foo: 'bar'
          }
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Config xmlns=\"URI\"><Foo>bar</Foo></Config>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      it('applies namespace prefixes to the xmlns attribute', function() {
        var params, rules, xml;
        rules = {
          Config: {
            type: 'structure',
            xmlns: {
              prefix: 'xsi',
              uri: 'URI'
            },
            members: {
              Foo: {
                type: 'string'
              }
            }
          }
        };
        params = {
          Config: {
            Foo: 'bar'
          }
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Config xmlns:xsi=\"URI\"><Foo>bar</Foo></Config>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
      return it('can apply namespaces to elements that have other attributes', function() {
        var params, rules, xml;
        rules = {
          Config: {
            type: 'structure',
            xmlns: {
              prefix: 'xsi',
              uri: 'URI'
            },
            members: {
              Foo: {
                type: 'string'
              },
              Bar: {
                type: 'string',
                attribute: true,
                name: 'xsi:label'
              }
            }
          }
        };
        params = {
          Config: {
            Foo: 'abc',
            Bar: 'xyz'
          }
        };
        xml = "<Data xmlns=\"" + xmlns + "\">\n  <Config xsi:label=\"xyz\" xmlns:xsi=\"URI\"><Foo>abc</Foo></Config>\n</Data>";
        return matchXML(toXML(rules, params), xml);
      });
    });
  });

}).call(this);

},{"../helpers":93}],123:[function(require,module,exports){
(function() {
  var AWS, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  describe('AWS.XML.Parser', function() {
    var parse;
    parse = function(xml, rules, callback) {
      return callback.call(this, new AWS.XML.Parser(rules).parse(xml));
    };
    describe('default behavior', function() {
      var rules;
      rules = {};
      it('returns an empty object from an empty document', function() {
        var xml;
        xml = '<xml/>';
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({});
        });
      });
      it('returns empty elements as null', function() {
        var xml;
        xml = '<xml><element/></xml>';
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            element: null
          });
        });
      });
      it('converts string elements to properties', function() {
        var xml;
        xml = '<xml><foo>abc</foo><bar>xyz</bar></xml>';
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            foo: 'abc',
            bar: 'xyz'
          });
        });
      });
      it('converts nested elements into objects', function() {
        var xml;
        xml = '<xml><foo><bar>yuck</bar></foo></xml>';
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            foo: {
              bar: 'yuck'
            }
          });
        });
      });
      it('returns everything as a string (even numbers)', function() {
        var xml;
        xml = '<xml><count>123</count></xml>';
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            count: '123'
          });
        });
      });
      it('flattens sibling elements of the same name', function() {
        var xml;
        xml = '<xml><foo><bar>1</bar><bar>2</bar></foo></xml>';
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            foo: {
              bar: '1'
            }
          });
        });
      });
      return it('ignores xmlns on the root element', function() {
        var xml;
        xml = '<xml xmlns="http://foo.bar.com"><Abc>xyz</Abc></xml>';
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            Abc: 'xyz'
          });
        });
      });
    });
    describe('structures', function() {
      return it('returns empty objects as {}', function() {
        var rules, xml;
        xml = '<xml><Item/></xml>';
        rules = {
          type: 'structure',
          members: {
            Item: {
              type: 'structure',
              members: {
                Name: {
                  type: 'string'
                }
              }
            }
          }
        };
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            Item: {}
          });
        });
      });
    });
    describe('lists', function() {
      it('returns empty lists as []', function() {
        var rules, xml;
        xml = '<xml><items/></xml>';
        rules = {
          type: 'structure',
          members: {
            items: {
              type: 'list',
              members: {
                type: 'string'
              }
            }
          }
        };
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            items: []
          });
        });
      });
      it('returns missing lists as []', function() {
        var rules, xml;
        xml = '<xml></xml>';
        rules = {
          type: 'structure',
          members: {
            items: {
              type: 'list',
              members: {
                type: 'string'
              }
            }
          }
        };
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            items: []
          });
        });
      });
      it('Converts xml lists of strings into arrays of strings', function() {
        var rules, xml;
        xml = "<xml>\n  <items>\n    <member>abc</member>\n    <member>xyz</member>\n  </items>\n</xml>";
        rules = {
          type: 'structure',
          members: {
            items: {
              type: 'list',
              members: {}
            }
          }
        };
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            items: ['abc', 'xyz']
          });
        });
      });
      it('Observes list member names when present', function() {
        var rules, xml;
        xml = "<xml>\n  <items>\n    <item>abc</item>\n    <item>xyz</item>\n  </items>\n</xml>";
        rules = {
          type: 'structure',
          members: {
            items: {
              type: 'list',
              members: {
                name: 'item'
              }
            }
          }
        };
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            items: ['abc', 'xyz']
          });
        });
      });
      it('can parse lists of strucures', function() {
        var rules, xml;
        xml = "<xml>\n  <People>\n    <member><Name>abc</Name></member>>\n    <member><Name>xyz</Name></member>>\n  </People>\n</xml>";
        rules = {
          type: 'structure',
          members: {
            People: {
              type: 'list',
              members: {
                type: 'structure',
                members: {
                  Name: {
                    type: 'string'
                  }
                }
              }
            }
          }
        };
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            People: [
              {
                Name: 'abc'
              }, {
                Name: 'xyz'
              }
            ]
          });
        });
      });
      return it('can parse lists of strucures with renames', function() {
        var rules, xml;
        xml = "<xml>\n  <People>\n    <Person><Name>abc</Name></Person>>\n    <Person><Name>xyz</Name></Person>>\n  </People>\n</xml>";
        rules = {
          type: 'structure',
          members: {
            People: {
              type: 'list',
              members: {
                type: 'structure',
                name: 'Person',
                members: {
                  Name: {
                    type: 'string'
                  }
                }
              }
            }
          }
        };
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            People: [
              {
                Name: 'abc'
              }, {
                Name: 'xyz'
              }
            ]
          });
        });
      });
    });
    describe('flattened lists', function() {
      var xml;
      xml = "<xml>\n  <person>\n    <name>Unknown</name>\n    <alias>John Doe</alias>\n    <alias>Jane Doe</alias>\n  </person>\n</xml>";
      it('flattens siblings of the same name into a single element', function() {
        return parse(xml, {}, function(data) {
          return expect(data).toEqual({
            person: {
              name: 'Unknown',
              alias: 'John Doe'
            }
          });
        });
      });
      it('collects sibling elements of the same name', function() {
        var rules;
        rules = {
          type: 'structure',
          members: {
            person: {
              members: {
                alias: {
                  name: 'aka',
                  type: 'list',
                  flattened: true,
                  members: {}
                }
              }
            }
          }
        };
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            person: {
              name: 'Unknown',
              aka: ['John Doe', 'Jane Doe']
            }
          });
        });
      });
      it('flattened lists can be composed of complex obects', function() {
        var rules, values;
        xml = "<xml>\n  <name>Name</name>\n  <complexValue>\n    <a>1</a>\n    <b>2</b>\n  </complexValue>\n  <complexValue>\n    <a>3</a>\n    <b>4</b>\n  </complexValue>\n</xml>";
        rules = {
          type: 'structure',
          members: {
            complexValue: {
              type: 'list',
              flattened: true,
              name: 'values',
              members: {
                type: 'structure',
                members: {}
              }
            }
          }
        };
        values = {
          name: 'Name',
          values: [
            {
              a: '1',
              b: '2'
            }, {
              a: '3',
              b: '4'
            }
          ]
        };
        return parse(xml, rules, function(data) {
          return expect(data).toEqual(values);
        });
      });
      return it('can parse flattened lists of complex objects', function() {
        var rules;
        xml = "<xml>\n  <Count>2</Count>\n  <Person><Name>abc</Name></Person>\n  <Person><Name>xyz</Name></Person>\n</xml>";
        rules = {
          type: 'structure',
          members: {
            Count: {
              type: 'integer'
            },
            Person: {
              type: 'list',
              flattened: true,
              name: 'People',
              members: {
                type: 'structure',
                name: 'Person'
              }
            }
          }
        };
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            Count: 2,
            People: [
              {
                Name: 'abc'
              }, {
                Name: 'xyz'
              }
            ]
          });
        });
      });
    });
    describe('maps', function() {
      return describe('non-flattened', function() {
        it('expects entry, key, and value elements by default', function() {
          var rules, xml;
          xml = "<xml>\n  <SummaryMap>\n    <entry>\n      <key>Groups</key>\n      <value>31</value>\n    </entry>\n    <entry>\n      <key>GroupsQuota</key>\n      <value>50</value>\n    </entry>\n    <entry>\n      <key>UsersQuota</key>\n      <value>150</value>\n    </entry>\n  </SummaryMap>\n</xml>";
          rules = {
            type: 'structure',
            members: {
              SummaryMap: {
                type: 'map',
                members: {
                  type: 'integer'
                }
              }
            }
          };
          return parse(xml, rules, function(data) {
            return expect(data).toEqual({
              SummaryMap: {
                Groups: 31,
                GroupsQuota: 50,
                UsersQuota: 150
              }
            });
          });
        });
        it('can use alternate names for key and value elements', function() {
          var rules, xml;
          xml = "<xml>\n  <SummaryMap>\n    <entry>\n      <Property>Groups</Property>\n      <Count>31</Count>\n    </entry>\n    <entry>\n      <Property>GroupsQuota</Property>\n      <Count>50</Count>\n    </entry>\n    <entry>\n      <Property>UsersQuota</Property>\n      <Count>150</Count>\n    </entry>\n  </SummaryMap>\n</xml>";
          rules = {
            type: 'structure',
            members: {
              SummaryMap: {
                type: 'map',
                name: 'Summary',
                keys: {
                  name: 'Property'
                },
                members: {
                  type: 'integer',
                  name: 'Count'
                }
              }
            }
          };
          return parse(xml, rules, function(data) {
            return expect(data).toEqual({
              Summary: {
                Groups: 31,
                GroupsQuota: 50,
                UsersQuota: 150
              }
            });
          });
        });
        return describe('flattened', function() {
          it('expects key and value elements by default', function() {
            var rules, xml;
            xml = "<xml>\n  <Attributes>\n    <key>color</key>\n    <value>red</value>\n  </Attributes>\n  <Attributes>\n    <key>size</key>\n    <value>large</value>\n  </Attributes>\n</xml>";
            rules = {
              type: 'strucure',
              members: {
                Attributes: {
                  type: 'map',
                  flattened: true
                }
              }
            };
            return parse(xml, rules, function(data) {
              return expect(data).toEqual({
                Attributes: {
                  color: 'red',
                  size: 'large'
                }
              });
            });
          });
          return it('can use alternate names for key and value elements', function() {
            var rules, xml;
            xml = "<xml>\n  <Attribute>\n    <AttrName>age</AttrName>\n    <AttrValue>35</AttrValue>\n  </Attribute>\n  <Attribute>\n    <AttrName>height</AttrName>\n    <AttrValue>72</AttrValue>\n  </Attribute>\n</xml>";
            rules = {
              type: 'structure',
              members: {
                Attribute: {
                  name: 'Attributes',
                  type: 'map',
                  flattened: true,
                  keys: {
                    name: 'AttrName'
                  },
                  members: {
                    name: 'AttrValue',
                    type: 'integer'
                  }
                }
              }
            };
            return parse(xml, rules, function(data) {
              return expect(data).toEqual({
                Attributes: {
                  age: 35,
                  height: 72
                }
              });
            });
          });
        });
      });
    });
    describe('booleans', function() {
      var rules;
      rules = {
        type: 'structure',
        members: {
          enabled: {
            type: 'boolean'
          }
        }
      };
      it('converts the string "true" in to the boolean value true', function() {
        var xml;
        xml = "<xml><enabled>true</enabled></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            enabled: true
          });
        });
      });
      it('converts the string "false" in to the boolean value false', function() {
        var xml;
        xml = "<xml><enabled>false</enabled></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            enabled: false
          });
        });
      });
      return it('converts the empty elements into null', function() {
        var xml;
        xml = "<xml><enabled/></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            enabled: null
          });
        });
      });
    });
    describe('timestamp', function() {
      var rules;
      rules = {
        type: 'structure',
        members: {
          CreatedAt: {
            type: 'timestamp'
          }
        }
      };
      it('returns an empty element as null', function() {
        var xml;
        xml = "<xml><CreatedAt/></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            CreatedAt: null
          });
        });
      });
      it('understands unix timestamps', function() {
        var date, timestamp, xml;
        timestamp = 1349908100;
        date = new Date(timestamp * 1000);
        xml = "<xml><CreatedAt>" + timestamp + "</CreatedAt></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            CreatedAt: date
          });
        });
      });
      it('understands basic iso8601 strings', function() {
        var date, timestamp, xml;
        timestamp = '2012-10-10T15:47:10.001Z';
        date = new Date(timestamp);
        xml = "<xml><CreatedAt>" + timestamp + "</CreatedAt></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            CreatedAt: date
          });
        });
      });
      it('understands basic rfc822 strings', function() {
        var date, timestamp, xml;
        timestamp = 'Wed, 10 Oct 2012 15:59:55 UTC';
        date = new Date(timestamp);
        xml = "<xml><CreatedAt>" + timestamp + "</CreatedAt></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            CreatedAt: date
          });
        });
      });
      return it('throws an error when unable to determine the format', function() {
        var error, message, timestamp, xml;
        timestamp = 'bad-date-format';
        xml = "<xml><CreatedAt>" + timestamp + "</CreatedAt></xml>";
        message = 'unhandled timestamp format: ' + timestamp;
        error = {
          code: 'AWS.XML.Parser.Error',
          message: message
        };
        return expect(function() {
          return new AWS.XML.Parser(rules).parse(xml);
        }).toThrow(error);
      });
    });
    describe('numbers', function() {
      var rules;
      rules = {
        type: 'structure',
        members: {
          decimal: {
            type: 'float'
          }
        }
      };
      it('float parses elements types as integer', function() {
        var xml;
        xml = "<xml><decimal>123.456</decimal></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            decimal: 123.456
          });
        });
      });
      return it('returns null for empty elements', function() {
        var xml;
        xml = "<xml><decimal/></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            decimal: null
          });
        });
      });
    });
    describe('integers', function() {
      var rules;
      rules = {
        type: 'structure',
        members: {
          count: {
            type: 'integer'
          }
        }
      };
      it('integer parses elements types as integer', function() {
        var xml;
        xml = "<xml><count>123</count></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            count: 123
          });
        });
      });
      return it('returns null for empty elements', function() {
        var xml;
        xml = "<xml><count/></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            count: null
          });
        });
      });
    });
    describe('renaming elements', function() {
      it('can rename scalar elements', function() {
        var rules, xml;
        rules = {
          type: 'structure',
          members: {
            alias: {
              name: 'aka'
            }
          }
        };
        xml = "<xml><alias>John Doe</alias></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            aka: 'John Doe'
          });
        });
      });
      return it('can rename nested elements', function() {
        var rules, xml;
        rules = {
          type: 'structure',
          members: {
            person: {
              members: {
                alias: {
                  name: 'aka'
                }
              }
            }
          }
        };
        xml = "<xml><person><name>Joe</name><alias>John Doe</alias></person></xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            person: {
              name: 'Joe',
              aka: 'John Doe'
            }
          });
        });
      });
    });
    describe('base64 encoded strings', function() {
      return it('base64 decodes string elements with encoding="base64"', function() {
        var rules, xml;
        rules = {
          type: 'structure',
          members: {
            Value: {
              type: 'string'
            }
          }
        };
        xml = "<xml>\n  <Value encoding=\"base64\">Zm9v</Value>\n</xml>";
        parse(xml, rules, function(data) {
          return expect(data).toEqual({
            Value: 'foo'
          });
        });
        rules = {
          type: 'structure',
          members: {
            Value: {}
          }
        };
        xml = "<xml>\n  <Value encoding=\"base64\">Zm9v</Value>\n</xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            Value: 'foo'
          });
        });
      });
    });
    describe('elements with XML namespaces', function() {
      return it('strips the xmlns element', function() {
        var rules, xml;
        rules = {
          type: 'structure',
          members: {
            List: {
              type: 'list',
              members: {
                type: 'structure',
                members: {
                  Attr1: {},
                  Attr2: {
                    type: 'structure',
                    members: {
                      Foo: {}
                    }
                  }
                }
              }
            }
          }
        };
        xml = "<xml xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\">\n  <List>\n    <member>\n      <Attr1 xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:type=\"CanonicalUser\">abc</Attr1>\n      <Attr2 xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:type=\"CanonicalUser\"><Foo>bar</Foo></Attr2>\n    </member>\n  </List>\n</xml>";
        return parse(xml, rules, function(data) {
          return expect(data).toEqual({
            List: [
              {
                Attr1: 'abc',
                Attr2: {
                  Foo: 'bar'
                }
              }
            ]
          });
        });
      });
    });
    return describe('parsing errors', function() {
      return it('throws an error when unable to parse the xml', function() {
        var error, message, rules, xml;
        xml = 'asdf';
        rules = {};
        message = "Non-whitespace before first tag.\nLine: 0\nColumn: 1\nChar: a";
        error = {
          code: 'AWS.XML.Parser.Error',
          message: message
        };
        return expect(function() {
          return new AWS.XML.Parser(rules).parse(xml);
        }).toThrow(error);
      });
    });
  });

}).call(this);

},{"../helpers":93}]},{},[1])
;
