var fs = require('fs');
var util = require('util');
var path = require('path');
var through = require('through');
var _ = require('underscore');
var bundleHelpers = require('./bundle-helpers');
var AWS = require('../lib/aws');

var sanitizeRegex = /[^a-zA-Z0-9,-]/g;

function mapFromNames(names) {
  var map = {};
  _.each(names, function (name) {
    var match = name.match(/^(.+?)(?:-(.+?))?$/);
    var service = match[1], version = match[2];
    if (!map[service]) map[service] = [];
    if (version) map[service].push(version);
  });
  return map;
}

function mapFromServices() {
  var map = {};
  AWS.util.each(AWS, function(name, ServiceClass) {
    if (ServiceClass.serviceIdentifier) {
      map[ServiceClass.serviceIdentifier] = ServiceClass;
    }
  });
  return map;
}

function allServicesMap() {
  var map = {};
  AWS.util.each(AWS, function(name, ServiceClass) {
    if (ServiceClass.serviceIdentifier) {
      var apis = ServiceClass.apiVersions.filter(function (v) {
        return v.indexOf('*') < 0;
      }).map(function (v) { return new ServiceClass({apiVersion: v})});
      map[ServiceClass.serviceIdentifier] = apis;
    }
  });
  return map;
}

function parseServiceMap(services, callback) {
  if (!services) services = bundleHelpers.defaultServices;
  if (services === 'all') return callback(null, allServicesMap());
  if (services.match(sanitizeRegex)) {
    return callback(new Error('Incorrectly formatted service names'));
  }
  services = services.split(',');

  var serviceMap = mapFromServices();
  var givenMap = mapFromNames(services);
  var invalidModules = [];
  var outMap = {};

  _.each(givenMap, function (versions, service) {
    if (!serviceMap[service]) { // no such service
      invalidModules.push(service);
    } else if (versions.length === 0) { // take latest
      outMap[service] = [new serviceMap[service]()];
    } else { // validate all versions
      outMap[service] = [];
      _.each(versions, function (version) {
        try {
          outMap[service].push(new serviceMap[service]({apiVersion: version}));
        } catch (e) {
          invalidModules.push(service + '-' + version);
        }
      });
    }
  });

  if (invalidModules.length > 0) {
    callback(new Error('Missing modules: ' + invalidModules.join(', ')));
  } else {
    callback(null, outMap);
  }
}

function generateBundleFile(services, callback) {
  parseServiceMap(services, function (err, serviceMap) {
    if (err) return callback(err);

    var contents = ['var AWS = require("./core"); module.exports = AWS;'];

    _.each(serviceMap, function (versions, svcName) {
      _.each(versions, function (svc) {
        var line = util.format(
          '%s(require("./services/%s"), "%s", %s);',
          'AWS.Service.defineServiceApi', svcName, svc.api.apiVersion,
          JSON.stringify(svc.api));
        contents.push(line);
      });
    });

    callback(null, contents.join('\n'));
  });
}

module.exports = function(file, servicesPassed, callback) {
  var bundleData = null;
  var services = servicesPassed ? file :
    ('SERVICES' in process.env ? process.env.SERVICES : null);

  function makeBundle(callback) {
    if (bundleData) return callback();
    generateBundleFile(services, function (err, bundle) {
      if (err) {
        if (callback) callback(err);
        else throw err;
      }
      else {
        bundleData = bundle;
        if (callback) callback();
      }
    });
  }

  function transform(file) {
    if (file === bundleHelpers.mainFile) {
      var data = fs.readFileSync(bundleHelpers.browserFile);
      return through(function() {}, function() {
        this.queue(data); this.queue(null);
      });
    }

    if (file !== bundleHelpers.servicesFile) return through();

    function write() { }
    function end() {
      var self = this;
      makeBundle(function (err) {
        if (err) self.emit('error', err);
        else {
          self.queue(bundleData);
          self.queue(null);
        }
      });
    }

    return through(write, end);
  }

  if (!servicesPassed) {
    return transform(file);
  } else if (callback) {
    makeBundle(function (err) { callback(err, transform); });
  } else {
    return transform;
  }
};
