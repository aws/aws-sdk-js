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

AWS.Glacier = AWS.Service.defineService('./services/glacier.api', {
  Client: {
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
      var version = request.client.api.apiVersion;
      request.httpRequest.headers['x-amz-glacier-version'] = version;
    },

    addTreeHashHeaders: function addTreeHashHeaders(request) {
      if (request.params.body === undefined) return;

      var hashes = request.client.computeChecksums(request.params.body);
      request.httpRequest.headers['x-amz-content-sha256'] = hashes.linearHash;

      if (!request.httpRequest.headers['x-amz-sha256-tree-hash']) {
        request.httpRequest.headers['x-amz-sha256-tree-hash'] = hashes.treeHash;
      }
    },

    computeChecksums: function buildTreeHash(data) {
      if (!(data instanceof Buffer)) data = new Buffer(data);

      var mb = 1024 * 1024;
      var hashes = [];
      var hash = AWS.util.crypto.createHash('sha256');

      // build leaf nodes in 1mb chunks
      for (var i = 0; i < data.length; i += mb) {
        var chunk = data.slice(i, AWS.util.min(i + mb, data.length));
        hash.update(chunk);
        hashes.push(AWS.util.crypto.sha256(chunk));
      }

      return {
        linearHash: hash.digest('hex'),
        treeHash: this.buildHashTree(hashes)
      };
    },

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
  }
});

module.exports = AWS.Glacier;
