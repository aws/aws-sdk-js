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
 * @constructor
 */
AWS.Config = inherit({

  constructor: function Config(options) {
    if (options === undefined) options = {};
    this.set('credentials', new AWS.Credentials(options));
    this.set('region', options.region);
    this.set('maxRetries', options.maxRetries);
    this.set('sslEnabled', options.sslEnabled, true);
    this.set('s3ForcePathStyle', options.s3ForcePathStyle, false);
  },

  set: function set(property, value, defaultValue) {
    if (value === undefined) {
      this[property] = defaultValue;
    } else {
      this[property] = value;
    }
  }

});

AWS.loadConfig = function loadConfig(path) {
  var config = new AWS.Config(JSON.parse(AWS.util.readFileSync(path)));
  var fileSystemCreds = new AWS.FileSystemCredentials(path, config);
  var chain = new AWS.CredentialProviderChain();
  chain.providers.unshift(fileSystemCreds);
  config.credentials = chain.resolve();
  AWS.config = config;
};

/**
 * @constructor
 */
AWS.Credentials = inherit({

  /**
   * Accepts credentials as arguments 3 different ways (session token
   * is always optional):
   *
   *   // as positional arguments
   *   var creds = new AWS.Credentials('akid', 'secret', 'session');
   *
   *   // as properties of an object
   *   var creds = new AWS.Credentials({
   *     accessKeyId: 'akid',
   *     secretAccessKey: 'secret',
   *     sessionToken: 'session'
   *   });
   *
   *   // nested under the property "credentials"
   *   var creds = new AWS.Credentials({ credentials: {
   *     accessKeyId: 'akid',
   *     secretAccessKey: 'secret',
   *     sessionToken: 'session'
   *   }});
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

AWS.config = new AWS.Config({
  credentials: new AWS.CredentialProviderChain().resolve()
});
