var expect = require('chai').expect;
var pruneShapes = require('./prune-shapes').pruneShapes;
var extraModel = require('./extra-2018-08-02.normal.json');

describe('pruneShapes', function() {
    it('removes unused shapes from model', function() {
        var model = deepCopyObject(extraModel);

        var originalOperationNames = Object.keys(model.operations);
        var originalShapeNames = Object.keys(model.shapes);

        expect(originalShapeNames.sort()).to.eql([
            'BarOperationInput',
            'BarOperationOutput',
            'BazOperationInput',
            'BazStringShape',
            'EventStreamPayload',
            'EventStreamStructure',
            'FancyStructure',
            'ListOfList',
            'ListOfString',
            'MapOfList',
            'MapOfString',
            'String',
            'StringShape'
        ]);

        pruneShapes(model);

        // Unused shapes should now be removed
        var visitedShapeNames = Object.keys(model.shapes);
        expect(visitedShapeNames.sort()).to.eql([
            'FancyStructure',
            'ListOfString',
            'MapOfList',
            'String'
        ]);

        expect(originalOperationNames.sort()).to.eql(Object.keys(model.operations).sort());
    });
});

function deepCopyObject(original) {
    if (typeof original !== 'object' || original === null) {
        return original;
    }
    var newObject = {};
    var keys = Object.keys(original);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = original[key];
        if (Array.isArray(value)) {
            newObject[key] = [];
            for (var j = 0; j < value.length; j++) {
                newObject[key].push(deepCopyObject(value[j]));
            }
        } else if (typeof value === 'object' && value !== null) {
            newObject[key] = deepCopyObject(value)
        } else {
            newObject[key] = value;
        }
    }
    return newObject;
}
