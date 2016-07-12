var expect = require('chai').expect;

describe('The ChangeCreator class', function() {
    var ChangeCreator = require('../change-creator').ChangeCreator;
    describe('validateChange', function() {
        var changeCreator;
        var changeFields = ['Type', 'Category', 'Description'];
        var changeObj;
        beforeEach(function() {
            changeCreator = new ChangeCreator();
            changeObj = {
                Type: 'feature',
                Category: 's3',
                Description: 'new feature'
            };
        });

        // Verify all fields are required.
        changeFields.forEach(function(field) {
            it ('throws an error when `' + field +'` is missing', function() {
                delete changeObj[field];
                var keys = Object.keys(changeObj);
                keys.forEach(function(key) {
                    changeCreator['setChange' + key](changeObj[key]);
                });
                expect(function() {
                    changeCreator.validateChange(changeObj);
                }).to.throw();
            });
        });

        it('throws an error when no argument provided', function() {
            expect(function() {
                changeCreator.validateChange();
            }).to.throw();
        });

        it('does not throw if all fields are supplied', function() {
            var keys = Object.keys(changeObj);
            keys.forEach(function(key) {
                changeCreator['setChange' + key](changeObj[key]);
            });
            expect(function() {
                changeCreator.validateChange();
            }).to.not.throw();
        });
    });
});