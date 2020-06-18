var helpers = require('../helpers');
var AWS = helpers.AWS;
var addContentType = require('../../lib/react-native/add-content-type').addContentType;

describe('React Native', function() {
    var mockService = new AWS.Service({
        paramValidation: true
    });
    describe('util', function() {
        it('environment should be js-react-native', function() {
            expect(AWS.util.environment).to.eql('js-react-native');
        });
    });
});
