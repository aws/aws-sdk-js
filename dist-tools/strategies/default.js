var fs = require('fs');
var util = require('util');
var path = require('path');

function DefaultStrategy(builder) {
  this.builder = builder;
  this.libPath = this.builder.options.libPath;
  this.isCached = this.builder.options.writeCache;
  this.isMinified = this.builder.options.minify;
  this.minifyOptions = this.builder.options.minifyOptions || {};
  this.minifyOptions.fromString = true;
  this.AWS = require(this.libPath + '/lib/aws');
  this.apis = require('aws-sdk-apis');
  this.license = [
    '// AWS SDK for JavaScript v' + this.AWS.VERSION,
    '// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.',
    '// License at https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt'
  ].join('\n') + '\n';
  this.setServiceClasses();

  if (this.isCached && !this.builder.cacheExists()) {
    fs.mkdirSync(this.builder.cachePath());
  }
}

DefaultStrategy.prototype.setServiceClasses = function() {
  this.serviceClasses = {};
  this.AWS.util.each.call(this, this.AWS, function(name, serviceClass) {
    if (serviceClass.serviceIdentifier) {
      this.serviceClasses[serviceClass.serviceIdentifier] = serviceClass;
    }
  });
};

DefaultStrategy.prototype.minify = function(code) {
  var uglify = require('uglify-js');
  var minified = uglify.minify(code, this.minifyOptions);
  return minified.code;
};

DefaultStrategy.prototype.stripComments = function(code) {
  var lines = code.split(/\r?\n/);
  var multiLine = false;
  lines = lines.map(function (line) {
    var rLine = line;
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
  }).filter(function(l) { return l !== null; });

  var newCode = lines.join('\n');
  newCode = newCode.replace(/\/\*\*[\s\S]+?Copyright\s+.+?Amazon[\s\S]+?\*\//g, '');
  return newCode;
};

DefaultStrategy.prototype.getServiceHeader = function(service) {
  if (service === 'all') {
    return Object.keys(this.serviceClasses).map(function(service) {
      return this.getServiceHeader(service);
    }.bind(this)).join('\n');
  }

  var file = util.format(
    'AWS.%s = AWS.Service.defineService(\'%s\');\n',
    this.apis.serviceName(service), service);
  var svcPath = this.libPath + '/lib/services/' + service + '.js';
  if (fs.existsSync(svcPath)) {
    var lines = fs.readFileSync(svcPath).toString().split(/\r?\n/);
    file += lines.map(function (line) {
      line = line.replace(/^var\s*.*\s*=\s*require\s*\(.+\).*/, '');
      line = line.replace(/^module.exports\s*=.*/, '');
      return line;
    }).join('\n');
  }

  if (this.isMinified) file = this.minify(file);
  else file = this.stripComments(file);

  if (this.isCached) {
    fs.writeFileSync(this.builder.cachePath(service), file);
  }

  return file;
};

DefaultStrategy.prototype.getService = function(service, version) {
  if (service === 'all') {
    return Object.keys(this.serviceClasses).map(function(service) {
      var out = this.serviceClasses[service].apiVersions.map(function(version) {
        if (version.indexOf('*') >= 0) return null;
        return this.getService(service, version);
      }.bind(this)).filter(function(c) { return c !== null; }).join('\n');

      if (this.isCached) {
        // build 'latest', but don't add it to code (for caching)
        this.getService(service, 'latest');
      }

      return out;
    }.bind(this)).join('\n');
  }

  var svc, api;
  if (!this.serviceClasses[service]) {
    return null;
  }

  try {
    var ClassName = this.serviceClasses[service];
    svc = new ClassName({apiVersion: version});
    api = this.apis.load(service, svc.api.apiVersion);
  } catch (e) {
    return null;
  }

  var line = util.format(
    'AWS.Service.defineServiceApi(AWS.%s, "%s", %s);',
    this.apis.serviceName(service), svc.api.apiVersion, JSON.stringify(api));

  if (this.isCached) {
    fs.writeFileSync(this.builder.cachePath(service + '-' + version), line);
  }

  return line;
};

DefaultStrategy.prototype.getCore = function(callback) {
  var img = require('browserify/node_modules/insert-module-globals');
  img.vars.process = function() { return '{browser:true}'; };

  var browserify = require('browserify');
  var opts = { basedir: this.libPath };
  browserify(opts).add('./lib/browser').
      ignore('domain').bundle(function (err, data) {
    if (err) return callback(err);

    var code = (data || '').toString();
    if (this.isMinified) code = this.minify(code);
    else code = this.stripComments(code);

    code = this.license + code;
    if (this.isCached) {
      fs.writeFileSync(this.builder.cachePath('_core'), code);
    }

    callback(null, code);
  }.bind(this));
};

module.exports = DefaultStrategy;
