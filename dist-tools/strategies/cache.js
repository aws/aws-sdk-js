var fs = require('fs');

function CacheStrategy(builder) {
  this.builder = builder;
  this.cacheRoot = this.builder.options.cacheRoot;
  this.minify = this.builder.options.minify;

  this.loadServices();
  if (!this.builder.cacheExists()) {
    fs.mkdirSync(this.builder.cachePath());
  }
}

CacheStrategy.prototype.loadServices = function() {
  this.services = {};
  fs.readdirSync(this.cacheRoot).forEach(function(file) {
    var match = file.match(/^([^_-]+)-(latest|\d+-\d+-\d+)\.(?:min\.)?js$/);
    if (match) {
      var service = match[1], version = match[2];
      if (!this.services[service]) this.services[service] = {};
      this.services[service][version] = service + '-' + version;
    }
  }.bind(this));
};

CacheStrategy.prototype.getServiceHeader = function(service) {
  if (service === 'all') {
    return Object.keys(this.services).map(function (name) {
      return this.getServiceHeader(name);
    }.bind(this)).join('\n');
  }

  if (this.services[service] && this.builder.cacheExists(service)) {
    return this.read(service);
  }
  return null;
};

CacheStrategy.prototype.getService = function(service, version) {
  if (service === 'all') {
    return Object.keys(this.services).map(function (name) {
      return this.getService(name);
    }.bind(this)).join('\n');
  }

  var versions = this.services[service];
  if (versions) {
    var file = versions[version || 'latest'];
    if (file && this.builder.cacheExists(file)) {
      return this.read(file);
    }
  }
  return null;
};

CacheStrategy.prototype.getCore = function(callback) {
  if (this.builder.cacheExists('_core')) {
    callback(null, this.read('_core'));
  } else {
    callback(new Error('Core not found.'));
  }
};

CacheStrategy.prototype.read = function(path) {
  return fs.readFileSync(this.builder.cachePath(path)).toString();
};

module.exports = CacheStrategy;
