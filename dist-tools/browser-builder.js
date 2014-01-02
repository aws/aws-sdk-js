#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var browserify = require('browserify');
var through = require('through');
var _ = require('underscore');
var uglify = require('uglify-js');
var bundleTransform = require('./bundle-transform');
var bundleHelpers = require('./bundle-helpers');

var version = JSON.parse(fs.readFileSync('package.json')).version;
var licenseHeader = [
  '// AWS SDK for JavaScript v' + version,
  '// ' + fs.readFileSync(__dirname + '/../LICENSE.txt').toString().
          match(/(Copyright\s+.+?Amazon.+?)\n/)[1],
  '// License at https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt'
].join('\n') + '\n';

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

function stripCommentStream() {
  var buffer = [];

  function write(data) { buffer.push(data); }
  function end() {
    var lines = buffer.join('').split(/\r?\n/);
    var multiLine = false;
    lines = lines.map(function (line) {
      rLine = line;
      if (line.match(/^\s*\/\//)) {
        rLine = null;
      } else if (line.match(/^\s*\/\*/)) {
        multiLine = true;
        rLine = null;
      }

      if (multiLine) {
        var multiLineEnd = line.match(/\*\/(.*)/);
        if (multiLineEnd) {
          multiLine = false;
          rLine = multiLineEnd[1];
        } else {
          rLine = null;
        }
      }

      return rLine;
    }).filter(function(l) { return l != null; });
    var code = lines.join('\n');
    code = code.replace(/\/\*\*[\s\S]+?Copyright\s+.+?Amazon[\s\S]+?\*\//g, '');
    this.queue(licenseHeader); // put license back
    this.queue(code);
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

    var stream = browserify(bundleHelpers.mainFile).
                 transform(transform).
                 ignore('domain').
                 bundle();
    var b = stream;

    if (options.minify) {
      var newStream = minifyStream(options.minifyOptions);
      stream.on('error', newStream.emit.bind(newStream, 'error'));
      stream = stream.pipe(newStream);
    } else {
      var newStream = stripCommentStream();
      stream.on('error', newStream.emit.bind(newStream, 'error'));
      stream = stream.pipe(newStream);
    }
    if (options.stream) {
      stream.on('error', options.stream.emit.bind(options.stream, 'error'));
      stream = stream.pipe(options.stream);
    }

    if (callback) callback(err, stream);
  });
}

module.exports = build;

// run if we called this tool directly
if (require.main === module) {
  var options = { minify: process.env.MINIFY ? true : false };
  module.exports(process.argv[2] || process.env.SERVICES, options);
}
