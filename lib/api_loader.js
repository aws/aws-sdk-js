var AWS = require('./core');

AWS.apiLoader = function(svc, version) {
  if (!AWS.apiLoader.services.hasOwnProperty(svc)) {
    throw new Error('InvalidService: Failed to load api for ' + svc);
  }
  return AWS.apiLoader.services[svc][version];
};

/**
 * This member of AWS.apiLoader is private, but changing it will necessitate a
 * change to ../scripts/services-table-generator.ts
 */
AWS.apiLoader.services = {};

module.exports = AWS.apiLoader;
