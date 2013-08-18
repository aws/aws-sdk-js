#!/usr/bin/env node
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
var fs = require('fs');
var util = require('util');
var browserify = require('browserify');
var path = require('path');
var through = require('through');
var _ = require('underscore');
var uglify = require('uglify-js');
var bundleTransform = require('./bundle-transform');

var root = path.normalize(path.join(__dirname, '..', 'lib'));
var defaultOptions = {
  minify: false,
  stream: process.stdout
};

function build(services, options) {
  options = _.defaults(options, defaultOptions);

  var stream = browserify(path.join(root, 'aws')).
               transform(bundleTransform(services, true)).
               ignore('domain').
               bundle();

  if (options.minify) stream = stream.pipe(minifyStream());
  if (options.stream) stream = stream.pipe(options.stream);
  return stream;
}

function minifyStream() {
  var buffer = [];

  function write(data) { buffer.push(data); }
  function end() {
    var min = uglify.minify(buffer.join(''), {fromString: true});
    this.queue(min.code);
    this.queue(null);
    buffer = null;
  }

  return through(write, end);
}

module.exports = build;

// run if we called this tool directly
if (require.main === module) {
  options = { minify: process.env.MINIFY ? true : false };
  module.exports(process.argv[2] || process.env.SERVICES, options);
}
