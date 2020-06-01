#!/usr/bin/env node

var path = require('path');

var AWS = require('../index');

var license = [
  '// AWS SDK for JavaScript v' + AWS.VERSION,
  '// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.',
  '// License at https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt'
].join('\n') + '\n';

function minify(code) {
  var uglify = require('uglify-js');
  var minified = uglify.minify(code, {fromString: true});
  return minified.code;
}

function build(options, callback) {
  if (arguments.length === 1) {
    callback = options;
    options = {};
  }

  var img = require('insert-module-globals');
  img.vars.process = function() { return '{browser:true}'; };

  if (options.services) process.env.AWS_SERVICES = options.services;

  var brOpts = { basedir: path.resolve(__dirname, '..') };
  if (options.build) brOpts = options.build; // grab specific build options if any

  var browserify = require('browserify');
  browserify(brOpts).add('./').ignore('domain').bundle(function(err, data) {
    if (err) return callback(err);

    var code = (data || '').toString();
    if (options.minify) code = minify(code);

    code = license + code;
    callback(null, code);
  });
}

build.license = license;
module.exports = build;
