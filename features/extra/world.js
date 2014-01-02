var world = require('./helpers');
world.AWS = require('../../lib/aws');
world.AWS.config.loadFromPath(__dirname + '/../../configuration');

var WorldConstructor = function WorldConstructor(callback) {
  callback(world);
};

exports.World = WorldConstructor;
exports.WorldInstance = world;
