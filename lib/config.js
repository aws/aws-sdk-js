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

AWS.FileSystemConfig = AWS.util.inherit(AWS.Config, {
  constructor: function FileSystemConfig(filename) {
    var data = require('fs').readFileSync(filename, 'ascii');
    AWS.Config.call(this, JSON.parse(data));
  }
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
    }
    else {
      this.accessKeyId = accessKeyId;
      this.secretAccessKey = secretAccessKey;
      this.sessionToken = sessionToken;
    }
  }
});

AWS.configuration = new AWS.Config();
