var expect = require('chai').expect;
var removeEventStreamOperations = require('./remove-event-stream-ops').removeEventStreamOperations;
var Translator = require('./translator');
var Api = require('../../lib/model/api');
var fooModel = require('./foo-2018-03-30.normal.json');

describe('removeEventStreamOperations', function() {
    describe('removes operations when eventstream', function() {
        it('is on the input shape shape', function() {
            var mockModel = deepCopyObject(fooModel);
            expect(typeof mockModel.operations['EventStreamOnInputOperation']).to.equal('object');
            removeEventStreamOperations(mockModel);
            expect(typeof mockModel.operations['EventStreamOnInputOperation']).to.equal('undefined');
        });

        it('is on the input shape payload shape', function() {
            var mockModel = deepCopyObject(fooModel);
            expect(typeof mockModel.operations['EventStreamOnInputPayloadOperation']).to.equal('object');
            removeEventStreamOperations(mockModel);
            expect(typeof mockModel.operations['EventStreamOnInputPayloadOperation']).to.equal('undefined');
        });
    });

    describe('does not remove operations', function() {
        it('when eventstream is not present on input or output shapes', function() {
            var mockModel = deepCopyObject(fooModel);
            expect(typeof mockModel.operations['BarOperation']).to.equal('object');
            removeEventStreamOperations(mockModel);
            expect(typeof mockModel.operations['BarOperation']).to.equal('object');
        });

        it('is on the output shape ', function() {
            var mockModel = deepCopyObject(fooModel);
            expect(typeof mockModel.operations['EventStreamOnOutputOperation']).to.equal('object');
            removeEventStreamOperations(mockModel);
            expect(typeof mockModel.operations['EventStreamOnOutputOperation']).to.equal('object');
        });

        it('is on the output shape payload shape', function() {
            var mockModel = deepCopyObject(fooModel);
            expect(typeof mockModel.operations['EventStreamOnOutputPayloadOperation']).to.equal('object');
            removeEventStreamOperations(mockModel);
            expect(typeof mockModel.operations['EventStreamOnOutputPayloadOperation']).to.equal('object');
        });
    });

    it('returns true when an operation is removed', function() {
        var mockModel = deepCopyObject(fooModel);
        expect(typeof mockModel.operations['EventStreamOnInputPayloadOperation']).to.equal('object');
        var didRemove = removeEventStreamOperations(mockModel);
        expect(typeof mockModel.operations['EventStreamOnInputPayloadOperation']).to.equal('undefined');
        expect(didRemove).to.equal(true);
    });

    it('returns false when no operations are removed', function() {
        var mockModel = deepCopyObject(fooModel);
        // delete operations we know will be removed
        var operationsToRemove = [
            'EventStreamOnInputOperation',
            'EventStreamOnInputPayloadOperation'
        ];
        for (var i = 0; i < operationsToRemove.length; i++) {
            delete mockModel.operations[operationsToRemove[i]];
        }
        expect(typeof mockModel.operations['BarOperation']).to.equal('object');
        var didRemove = removeEventStreamOperations(mockModel);
        expect(typeof mockModel.operations['BarOperation']).to.equal('object');
        expect(didRemove).to.equal(false);
    });
});

describe('timestampFormat', function() {
    it('prefer timestampFormat trait in member than in shape', function() {
        var mockModel = deepCopyObject(fooModel);
        var minified = new Translator(mockModel, {});
        var minifiedApi = new Api(minified);
        expect(minifiedApi.operations.bazOperation.input.members.BazString.timestampFormat).to.equal('iso8601');
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
