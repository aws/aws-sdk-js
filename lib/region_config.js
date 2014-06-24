var util = require('./util');
var config = require('./region_config.json');

function regionConfig(service) {
  var sId = service.serviceIdentifier || '';
  var sRegion = service.config.region || '';
  var finalConfig = {};

  config.forEach(function(item) {
    (item.regions || []).forEach(function(region) {
      if (sRegion.match(new RegExp('^' + region.replace('*', '.*') + '$'))) {
        (item.serviceConfigs || []).forEach(function(svcConfig) {
          (svcConfig.services || []).forEach(function(svcName) {
            if (sId.match(new RegExp('^' + svcName.replace('*', '.*') + '$'))) {
              util.update(finalConfig, svcConfig.config);
              service.isGlobalEndpoint = !!svcConfig.globalEndpoint;
            }
          });
        });
      }
    });
  });

  util.each(finalConfig, function(key, value) {
    if (service.config[key] === undefined || service.config[key] === null) {
      service.config[key] = value;
    }
  });
}

module.exports = regionConfig;
