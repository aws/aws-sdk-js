var world = require('./helpers');
var path = require('path');

world.AWS = require('../../lib/aws');
try {
  world.AWS.config.loadFromPath(path.resolve('./configuration'));
} catch (e) {} finally {
  process.env['CONFIGURED_REGION'] = world.AWS.config.region || new world.AWS.Config().region;
}

var WorldConstructor = function WorldConstructor(callback) {
  callback(world);
};

exports.World = WorldConstructor;
exports.WorldInstance = world;
