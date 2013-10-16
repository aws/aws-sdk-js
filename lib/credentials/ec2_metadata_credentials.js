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
require('../credentials');
require('../metadata_service');

/**
 * Represents credentials recieved from the metadata service on an EC2 instance.
 *
 * By default, this class will connect to the metadata service using
 * {AWS.MetadataService} and attempt to load any available credentials. If it
 * can connect, and credentials are available, these will be used with zero
 * configuration.
 */
AWS.EC2MetadataCredentials = AWS.util.inherit(AWS.Credentials, {
  constructor: function EC2MetadataCredentials(options) {
    AWS.Credentials.call(this);
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
        self.expireTime = new Date(creds.Expiration);
      }
      callback(err);
    });
  }
});
