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
var path = require('path');
var browserify = require('browserify');
var through = require('through');
var _ = require('underscore');
var uglify = require('uglify-js');
var bundleTransform = require('./bundle-transform');

var root = path.normalize(path.join(__dirname, '..', 'lib'));
var mainFile = path.join(root, 'aws.js');
var licenseHeader = fs.readFileSync(mainFile).
  toString().match(/\/\*\*[\s\S]+?Copyright.+?Amazon[\s\S]+?\*\//)[0] + '\n';
var uglifyOptions = { compress: false, fromString: true };

function defaultOptions() {
  return {
    minify: false,
    minifyOptions: { compress: false },
    stream: process.stdout
  };
}

function minifyStream(options) {
  options = options || {};
  options.fromString = true;
  var buffer = [];

  function write(data) { buffer.push(data); }
  function end() {
    var min = uglify.minify(buffer.join(''), options);
    this.queue(licenseHeader); // put license back
    this.queue(min.code);
    this.queue(null);
    buffer = null;
  }

  return through(write, end);
}

function build(services, options, callback) {
  options = _.defaults(options || {}, defaultOptions());

  bundleTransform(services, true, function (err, transform) {
    if (err) {
      if (callback) return callback(err);
      else throw err;
    }

    var stream = browserify(mainFile).
                 transform(transform).
                 ignore('domain').
                 bundle();
    var b = stream;

    if (options.minify) {
      var newStream = minifyStream(options.minifyOptions);
      stream.on('error', newStream.emit.bind(newStream, 'error'));
      stream = stream.pipe(newStream);
    }
    if (options.stream) {
      stream.on('error', options.stream.emit.bind(options.stream, 'error'));
      stream = stream.pipe(options.stream);
    }

    process.nextTick(function() { b.write(licenseHeader); });

    if (callback) callback(err, stream);
  });
}

module.exports = build;

// run if we called this tool directly
if (require.main === module) {
  var options = { minify: process.env.MINIFY ? true : false };
  module.exports(process.argv[2] || process.env.SERVICES, options);
}
