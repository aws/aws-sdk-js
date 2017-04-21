var DynamoDBSet = require('../../lib/dynamodb/set'),
  helpers = require('../helpers'),
  AWS = helpers.AWS,
  input = helpers.AWS.DynamoDB.Converter.input,
  output = helpers.AWS.DynamoDB.Converter.output;

describe('AWS.DynamoDB.Converter', function() {
  describe('.input', function() {
    describe('strings', function() {
      it('should convert strings to StringAttributeValues', function() {
        expect(input('string')).to.deep.equal({S: 'string'});
      });

      it(
        'should convert strings to null when convertEmptyValues option set',
        function() {
          expect(input('', {convertEmptyValues: true}))
            .to.deep.equal({NULL: true});
        }
      );

      it(
        'should convert empty strings to StringAttributeValues otherwise',
        function() {
          expect(input('')).to.deep.equal({S: ''});
        }
      );
    });

    describe('binary values', function() {
      it('should convert binary values to BinaryAttributeValues', function() {
        var b64String = 'deadbeef';
        var converted = input(AWS.util.base64.decode(b64String));
        expect(converted).to.have.keys('B');
        expect(converted.B.toString('base64')).to.equal(b64String);
      });

      it(
        'should convert binary values to null when convertEmptyValues option set',
        function() {
          expect(input(AWS.util.base64.decode(''), {convertEmptyValues: true}))
            .to.deep.equal({NULL: true});
        }
      );

      it(
        'should convert empty strings to StringAttributeValues otherwise',
        function() {
          var converted = input(AWS.util.base64.decode(''));
          expect(converted).to.have.keys('B');
          expect(converted.B.toString('base64')).to.equal('');
        }
      );
    });

    describe('numbers', function() {
      it('should convert numbers to NumberAttributeValues', function() {
        expect(input(42)).to.deep.equal({N: '42'});
      });
    });

    describe('null', function() {
      it('should convert nulls to NullAttributeValues', function() {
        expect(input(null)).to.deep.equal({NULL: true});
      });
    });

    describe('boolean', function() {
      it('should convert booleans to BooleanAttributeValues', function() {
        expect(input(true)).to.deep.equal({BOOL: true});
        expect(input(false)).to.deep.equal({BOOL: false});
      });
    });

    describe('lists', function() {
      it('should convert lists to ListAttributeValues', function() {
        expect(input([])).to.deep.equal({L: []});
      });

      it(
        'should convert descendents of Array to ListAttributeValues',
        function() {
          var MyArray = function() {
            var array = [];
            array.__proto__ = MyArray.prototype;
            return array;
          };
          MyArray.prototype = new Array;
          var arrayInstance = new MyArray();

          expect(Array.isArray(arrayInstance)).to.be.true;

          arrayInstance.push('a', 2, false, null);

          expect(input(arrayInstance)).to.deep.equal({L: [
            {S: 'a'},
            {N: '2'},
            {BOOL: false},
            {NULL: true}
          ]});
        }
      );

      it('should convert list members to AttributeValues', function() {
        expect(input(['a', 1, true, null, {}])).to.deep.equal({L: [
          {S: 'a'},
          {N: '1'},
          {BOOL: true},
          {NULL: true},
          {M: {}}
        ]});
      });

      it(
        'should remove empty list members when convertEmptyValues option is set',
        function() {
          expect(input(
            ['', AWS.util.base64.decode(''), true],
            {convertEmptyValues: true}
          )).to.deep.equal({L: [
            {NULL: true},
            {NULL: true},
            {BOOL: true}
          ]});
        }
      );
    });

    describe('maps', function() {
      it('should convert maps to MapAttributeValues', function() {
        expect(input({})).to.deep.equal({M: {}});
      });

      it(
        'should convert objects with inheritance chains to MapAttributeValues',
        function() {
          var MyPrototype = function() {
            this.foo = 'bar';
          };
          var MyDescendent = function () {
            MyPrototype.call(this);
            this.fizz = 'buzz';
          };
          MyDescendent.prototype = Object.create(MyPrototype.prototype);
          MyDescendent.prototype.snap = ['crackle', 'pop'];

          var myInstance = new MyDescendent();
          myInstance.quux = true;

          expect(input(myInstance)).to.deep.equal({
            M: {
              foo: {S: 'bar'},
              fizz: {S: 'buzz'},
              snap: {L: [{S: 'crackle'}, {S: 'pop'}]},
              quux: {BOOL: true}
            }
          });
        }
      );

      it(
        'should convert objects created with AWS.util.inherit to MapAttributeValues',
        function () {
          var MyClass = AWS.util.inherit({}, {
            constructor: function () {
              this.foo = 'bar';
            }
          });

          expect(input(new MyClass())).to.deep.equal({M: {foo: {S: 'bar'}}});
        }
      );

      if (AWS.util.isNode()) {
        it(
          'should convert objects created with util.inherits to MapAttributeValues',
          function () {
            var util = require('util');

            var Cat = function() {
              this.purrs = true;
            };

            var Tabby = function() {
              Cat.call(this);
              this.favoriteFood = 'fancy feast';
            };

            util.inherits(Tabby, Cat);

            Cat.prototype.legs = 4;

            expect(input(new Tabby())).to.deep.equal({M: {
              purrs: {BOOL: true},
              favoriteFood: {S: 'fancy feast'},
              legs: {N: '4'}
            }});
          }
        );
      }

      it('should convert map members to AttributeValues', function() {
        expect(input({a: 'a', b: 1, c: true, d: null, e: ['s']})).to.deep.equal({
          M: {
            a: {S: 'a'},
            b: {N: '1'},
            c: {BOOL: true},
            d: {NULL: true},
            e: {L: [{S: 's'}]}
          }
        });
      });

      it(
        'should remove empty map members when convertEmptyValues option is set',
        function() {
          expect(input(
            {a: '', b: AWS.util.base64.decode(''), c: true},
            {convertEmptyValues: true}
          )).to.deep.equal({M: {
            a: {NULL: true},
            b: {NULL: true},
            c: {BOOL: true}
          }});
        }
      );
    });

    describe('string sets', function() {
      it(
        'should convert sets with strings into StringSetAttributeValues',
        function() {
          expect(input(new DynamoDBSet(['a', 'b', 'c'])))
            .to.deep.equal({SS: ['a', 'b', 'c']});
        }
      );

      it(
        'should drop empty members when convertEmptyValues option is set',
        function() {
          expect(input(new DynamoDBSet(['a', '', 'c']), {convertEmptyValues: true}))
            .to.deep.equal({SS: ['a', 'c']});
        }
      );

      it(
        'should keep empty members when convertEmptyValues option is not set',
        function() {
          expect(input(new DynamoDBSet(['a', '', 'c'])))
            .to.deep.equal({SS: ['a', '', 'c']});
        }
      );
    });

    describe('number sets', function() {
      it(
        'should convert sets with numbers into NumberSetAttributeValues',
        function() {
          expect(input(new DynamoDBSet([1, 2, 3])))
            .to.deep.equal({NS: ['1', '2', '3']});
        }
      );
    });

    describe('binary sets', function() {
      var b64Strings = ['dead', 'beef', 'face'];

      it(
        'should convert sets with strings into StringSetAttributeValues',
        function() {
          var converted = input(new DynamoDBSet(b64Strings.map(AWS.util.base64.decode)));
          expect(converted).to.have.keys('BS');
          expect(converted.BS.map(AWS.util.base64.encode)).to.deep.equal(b64Strings);
        }
      );

      it(
        'should drop empty members when convertEmptyValues option is set',
        function() {
          var converted = input(
            new DynamoDBSet(b64Strings.concat('').map(AWS.util.base64.decode)),
            {convertEmptyValues: true}
          );
          expect(converted).to.have.keys('BS');
          expect(converted.BS.map(AWS.util.base64.encode)).to.deep.equal(b64Strings);
        }
      );

      it(
        'should drop empty members when convertEmptyValues option is set',
        function() {
          var converted = input(
            new DynamoDBSet(b64Strings.concat('').map(AWS.util.base64.decode))
          );
          expect(converted).to.have.keys('BS');
          expect(converted.BS.map(AWS.util.base64.encode))
            .to.deep.equal(b64Strings.concat(''));
        }
      );
    });
  });

  describe('.output', function() {
    describe('strings', function() {
      it('should convert StringAttributeValues to strings', function() {
        expect(output({S: 'string'})).to.equal('string');
      });
    });

    describe('binary values', function() {
      it('should convert binary values to BinaryAttributeValues', function() {
        var b64String = 'deadbeef';
        expect(AWS.util.base64.encode(output({B: AWS.util.base64.decode(b64String)}))).to.equal(b64String);
      });
    });

    describe('numbers', function() {
      it('should convert numbers to NumberAttributeValues', function() {
        expect(output({N: '42'})).to.equal(42);
      });
    });

    describe('null', function() {
      it('should convert nulls to NullAttributeValues', function() {
        expect(output({NULL: true})).to.equal(null);
      });
    });

    describe('boolean', function() {
      it('should convert booleans to BooleanAttributeValues', function() {
        expect(output({BOOL: true})).to.equal(true);
        expect(output({BOOL: false})).to.equal(false);
      });
    });

    describe('lists', function() {
      it('should convert lists to ListAttributeValues', function() {
        expect(output({L: []})).to.deep.equal([]);
      });

      it('should convert list members to AttributeValues', function() {
        expect(output({L: [
          {S: 'a'},
          {N: '1'},
          {BOOL: true},
          {NULL: true},
          {M: {}}
        ]})).to.deep.equal(['a', 1, true, null, {}]);
      });
    });

    describe('maps', function() {
      it('should convert maps to MapAttributeValues', function() {
        expect(output({M: {}})).to.deep.equal({});
      });

      it('should convert map members to AttributeValues', function() {
        expect(output({
          M: {
            a: {S: 'a'},
            b: {N: '1'},
            c: {BOOL: true},
            d: {NULL: true},
            e: {L: [{S: 's'}]}
          }
        })).to.deep.equal({a: 'a', b: 1, c: true, d: null, e: ['s']});
      });
    });

    describe('string sets', function() {
      it(
        'should convert sets with strings into StringSetAttributeValues',
        function() {
          var converted = output({SS: ['a', 'b', 'c']});
          expect(converted).to.have.keys('values', 'type');
          expect(converted.type).to.equal('String');
          expect(converted.values).to.deep.equal(['a', 'b', 'c']);
        }
      );
    });

    describe('number sets', function() {
      it(
        'should convert sets with numbers into NumberSetAttributeValues',
        function() {
          var converted = output({NS: ['1', '2', '3']});
          expect(converted).to.have.keys('values', 'type');
          expect(converted.type).to.equal('Number');
          expect(converted.values).to.deep.equal([1, 2, 3]);
        }
      );
    });

    describe('binary sets', function() {
      it(
        'should convert sets with strings into StringSetAttributeValues',
        function() {
          var b64Strings = ['dead', 'beef', 'face'];
          var converted = output({BS: b64Strings.map(AWS.util.base64.decode)});
          expect(converted).to.have.keys('values', 'type');
          expect(converted.type).to.equal('Binary');
          expect(converted.values.map(AWS.util.base64.encode))
            .to.deep.equal(b64Strings);
        }
      );
    });
  });
});
