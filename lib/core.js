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
  VERSION: 'v0.9.9-pre.10',

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
