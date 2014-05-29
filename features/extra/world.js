var world = require('./helpers');
world.AWS = require('../../lib/aws');
try {
  world.AWS.config.loadFromPath(__dirname + '/../../configuration');
} catch (e) { }

var WorldConstructor = function WorldConstructor(callback) {
  callback(world);
};

exports.World = WorldConstructor;
exports.WorldInstance = world;
