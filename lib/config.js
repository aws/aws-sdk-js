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
    if (options.credentials) {
      this.credentials = new AWS.Credentials(options.credentials);
    } else {
      this.credentials = new AWS.Credentials(options);
    }

    this.set('region', options.region);
    this.set('maxRetries', options.maxRetries);
    this.set('useSSL', options.useSSL, true);
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

AWS.FileSystemConfig = inherit(AWS.Config, {

  constructor: function FileSystemConfig(filename) {
    var options = JSON.parse(this.fs().readFileSync(filename, 'utf-8'));
    if (options.credentials === undefined) options.credentials = null;
    var credentials = new AWS.FileSystemCredentials(
      filename, options.credentials);
    options.credentials = credentials;
    AWS.Config.call(this, options);
  },

  fs: function fs() { return require('fs'); }

});

/**
 * @constructor
 */
AWS.Credentials = inherit({

  constructor: function Credentials(accessKeyId, secretAccessKey, sessionToken) {
    if (arguments.length == 1 && typeof arguments[0] === 'object') {
      this.accessKeyId = arguments[0].accessKeyId;
      this.secretAccessKey = arguments[0].secretAccessKey;
      this.sessionToken = arguments[0].sessionToken;
    } else {
      this.accessKeyId = accessKeyId;
      this.secretAccessKey = secretAccessKey;
      this.sessionToken = sessionToken;
    }
  },

  refresh: function refresh() { }

});

AWS.FileSystemCredentials = inherit(AWS.Credentials, {

  constructor: function FileSystemCredentials(filename, initialCredentials) {
    this.filename = filename;
    if (initialCredentials) {
      AWS.Credentials.call(this, initialCredentials);
    } else {
      this.refresh();
    }
  },

  refresh: function refresh() {
    var data = this.fs().readFileSync(this.filename, 'utf-8');
    var options = JSON.parse(data);
    var creds = new AWS.Credentials(options.credentials ?
                                    options.credentials : options);

    this.accessKeyId = creds.accessKeyId;
    this.secretAccessKey = creds.secretAccessKey;
    this.sessionToken = creds.sessionToken;
  },

  fs: function fs() { return require('fs'); }
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

AWS.DefaultCredentials = inherit(AWS.Credentials, {

  constructor: function DefaultCredentials(extraProviders, defaultProviders) {

    if (defaultProviders === undefined) {
      defaultProviders = [
        function () { return new AWS.EnvironmentCredentials('AWS'); },
        function () { return new AWS.EnvironmentCredentials('AMAZON'); }
      ];
    }

    if (extraProviders === undefined) {
      extraProviders = [];
    }

    var finalCreds;
    var providers = defaultProviders.concat(extraProviders);
    AWS.util.arrayEach(providers, function (provider) {
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


AWS.configuration = new AWS.Config({
  credentials: new AWS.DefaultCredentials()
});
