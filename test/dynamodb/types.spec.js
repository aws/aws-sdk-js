var typeOf = require('../../lib/dynamodb/types').typeOf,
    helpers = require('../helpers'),
    AWS = helpers.AWS;

describe('DynamoDb document client typeOf (internal)', function() {
    it('should return "Array" for arrays', function() {
        expect(typeOf([])).to.equal('Array');
    });

    it('should return "Object" for objects', function() {
        expect(typeOf({})).to.equal('Object');
    });

    it('should return "Object" for null-prototype objects', function() {
        expect(typeOf(Object.create(null))).to.equal('Object');
    });

    it('should return "Set" for sets', function() {
        var client = new AWS.DynamoDB.DocumentClient();
        expect(typeOf(client.createSet(['a']))).to.equal('Set');
    });

    it('should return "String" for strings', function() {
        expect(typeOf('foo')).to.equal('String');
    });

    it('should return "Number" for numbers', function() {
        expect(typeOf(42)).to.equal('Number');
    });

    it('should return "Binary" for buffers', function() {
        expect(typeOf(AWS.util.buffer.toBuffer('foo'))).to.equal('Binary');
    });

    it('should return "Binary" for TypedArray objects', function() {
        expect(typeOf(new Uint8Array(0))).to.equal('Binary');
    });

    it('should return "Binary" for ArrayBuffer objects', function() {
        expect(typeOf(new ArrayBuffer(0))).to.equal('Binary');
    });

    it('should return "Boolean" for booleans', function() {
        expect(typeOf(true)).to.equal('Boolean');
    });

    it('should return "null" for null', function() {
        expect(typeOf(null)).to.equal('null');
    });
});
