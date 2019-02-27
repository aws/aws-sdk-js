var NumberValue = require('../../lib/dynamodb/numberValue');

describe('NumberValue', function() {
    it('should store numbers', function() {
        var number = new NumberValue(123);
        expect(number.toString()).to.equal('123');
    });

    it('should store numeric strings', function() {
       var number = new NumberValue('123.1');
       expect(number.toString()).to.equal('123.1');
    });

    it(
        'should store numeric values that would lose precision if converted to JavaScript numbers',
        function() {
            var number = new NumberValue('900719925474099100');
            if (typeof Number.isSafeInteger === 'function') {
                expect(Number.isSafeInteger(number.toNumber())).to.be.false;
            }
            expect(number.toString()).to.equal('900719925474099100');
        }
    );

    it('should convert numeric strings to numbers', function() {
        var number = new NumberValue('123.1');
        expect(number.toNumber()).to.equal(123.1);
    });


    it('should appear as a numeric value when converted to JSON', function() {
        var number = new NumberValue('123.1');
        expect(JSON.stringify({
            number: new NumberValue('123'),
            nested: {
                number: new NumberValue('234')
            }
        })).to.equal('{"number":123,"nested":{"number":234}}');
    });
});
