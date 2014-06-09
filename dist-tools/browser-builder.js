#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var CacheStrategy = require('./strategies/cache');
var DefaultStrategy = require('./strategies/default');

var defaultServices = 'cloudwatch,dynamodb,kinesis,s3,sqs,sns,sts';
var sanitizeRegex = /[^a-zA-Z0-9,-]/;

function Builder(options) {
  this.setDefaultOptions(options);
  this.serviceCode = [];
  this.builtServices = {};
  this.buildStrategy = this.options.cache ?
    new CacheStrategy(this) : new DefaultStrategy(this);
}

Builder.prototype.setDefaultOptions = function(options) {
  this.options = options || {};
  this.options.libPath = this.options.libPath || this.getRootPath();
  this.options.cacheRoot = this.options.cacheRoot ||
    path.join(this.options.libPath, 'dist-tools', 'cache');
  this.options.cache = this.options.cache || false;
  this.options.writeCache = this.options.writeCache || false;
  this.options.minify = this.options.minify || false;
  this.options.minifyOptions = this.options.minifyOptions || {compress: false};
};

Builder.prototype.getRootPath = function() {
  return path.join(__dirname, '..');
};

Builder.prototype.cachePath = function(path) {
  var fullPath = this.options.cacheRoot;
  if (path) {
    fullPath += '/' + path + (this.options.minify ? '.min' : '') + '.js';
  }

  return fullPath;
};

Builder.prototype.cacheExists = function(path) {
  return fs.existsSync(this.cachePath(path));
};

Builder.prototype.buildService = function(name, usingDefaultServices) {
  var match = name.match(/^(.+?)(?:-(.+?))?$/);
  var service = match[1], version = match[2] || 'latest';
  var contents = [];
  var lines, err;

  if (!this.builtServices[service]) {
    this.builtServices[service] = {};

    lines = this.buildStrategy.getServiceHeader(service);
    if (lines === null) {
      if (!usingDefaultServices) {
        err = new Error('Invalid module: ' + service);
        err.name = 'InvalidModuleError';
        throw err;
      }
    } else {
      contents.push(lines);
    }
  }

  if (!this.builtServices[service][version]) {
    this.builtServices[service][version] = true;

    lines = this.buildStrategy.getService(service, version);
    if (lines === null) {
      if (!usingDefaultServices) {
        err = new Error('Invalid module: ' + service + '-' + version);
        err.name = 'InvalidModuleError';
        throw err;
      }
    } else {
      contents.push(lines);
    }
  }

  return contents.join('\n');
};

Builder.prototype.addServices = function(services) {
  var usingDefaultServices = false;
  if (!services) {
    usingDefaultServices = true;
    services = defaultServices;
  }
  if (services.match(sanitizeRegex)) {
    throw new Error('Incorrectly formatted service names');
  }

  var invalidModules = [];
  var stsIncluded = false;
  services.split(',').sort().forEach(function(name) {
    if (name.match(/^sts\b/) || name === 'all') stsIncluded = true;
    try {
      this.serviceCode.push(this.buildService(name, usingDefaultServices));
    } catch (e) {
      if (e.name === 'InvalidModuleError') invalidModules.push(name);
      else throw e;
    }
  }.bind(this));

  if (!stsIncluded) {
    this.serviceCode.push(this.buildService('sts'));
  }

  if (invalidModules.length > 0) {
    throw new Error('Missing modules: ' + invalidModules.join(', '));
  }

  return this;
};

Builder.prototype.build = function(callback) {
  this.buildStrategy.getCore(function(err, core) {
    callback(err, err ? null : (core + ';' + this.serviceCode.join('\n')));
  }.bind(this));
};

// run if we called this tool directly
if (require.main === module) {
  var options = {
    minify: process.env.MINIFY ? true : false,
    cache: process.env.CACHE ? true : false,
    writeCache: process.env.WRITE_CACHE ? true : false,
    cacheRoot: process.env.CACHE_ROOT,
    libPath: process.env.LIB_PATH
  };
  var services = process.argv[2] || process.env.SERVICES;
  new Builder(options).addServices(services).build(function (err, code) {
    if (err) console.error(err.message);
    else console.log(code);
  });
}

module.exports = Builder;
