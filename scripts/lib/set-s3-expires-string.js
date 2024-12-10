/**
 * Sets model overrides for S3 ExpiresString.
 */
module.exports = function setS3ExpiresString(model) {
  if (model.metadata.serviceId === 'S3') {
    var newShapes = {};
    for (var shapeId in model.shapes) {
      newShapes[shapeId] = model.shapes[shapeId];
      if (shapeId === 'Expires') {
        // preserve timestamp type for Expires.
        newShapes[shapeId] = {};
        newShapes[shapeId].type = 'timestamp';

        // add ExpiresString
        newShapes['ExpiresString'] = {
          type: 'string'
        };
      }
    }
    model.shapes = newShapes;

    for (var operationKey in model.operations) {
      var op = model.operations[operationKey];
      if (!op.output || !op.output.shape) {
        continue;
      }
      var output = model.shapes[op.output.shape];
      if (!output || !output.members) {
        continue;
      }
      if ('Expires' in output.members) {
        var newMembers = {};
        for (var memberKey in output.members) {
          newMembers[memberKey] = output.members[memberKey];
          if (memberKey === 'Expires') {
            newMembers['ExpiresString'] = Object.assign({}, newMembers[memberKey], {
              'shape': 'ExpiresString',
              'location': 'header',
              'locationName': 'ExpiresString'
            });

            newMembers[memberKey].deprecated = true;
            newMembers[memberKey].documentation = 'Deprecated in favor of ExpiresString.';
          }
        }
        output.members = newMembers;
      }
    }

    return true;
  }
  return false;
};
