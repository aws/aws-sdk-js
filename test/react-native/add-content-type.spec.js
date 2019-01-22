var helpers = require('../helpers');
var AWS = helpers.AWS;
var addContentType = require('../../lib/react-native/add-content-type').addContentType;

describe('React Native', function() {
    var mockService = new AWS.Service({
        paramValidation: true
    });

    describe('addContentType', function() {
        it('should add an empty content type if one is not defined and there is a body', function() {
            var req = mockService.makeRequest('fakeOp');
            req.httpRequest.body = 'body';
            delete req.httpRequest.headers['Content-Type'];
            addContentType(req);
            expect(typeof req.httpRequest.headers['Content-Type']).to.eql('string');
        });
        it('should not add a content type if body is empty', function() {
            var req = mockService.makeRequest('fakeOp');
            req.httpRequest.body = null;
            delete req.httpRequest.headers['Content-Type'];
            addContentType(req);
            expect(typeof req.httpRequest.headers['Content-Type']).to.eql('undefined');
        });
        it('should not override content type if content type is already defined', function() {
            var req = mockService.makeRequest('fakeOp');
            req.httpRequest.body = 'body';
            req.httpRequest.headers['Content-Type'] = 'type';
            addContentType(req);
            expect(req.httpRequest.headers['Content-Type']).to.eql('type');
        });
        it('should not override content type if generating presigned url', function() {
            var req = mockService.makeRequest('fakeOp');
            req.httpRequest.body = 'body';
            delete req.httpRequest.headers['Content-Type'];
            helpers.spyOn(req, 'isPresigned').andCallFake(function() {
                return true;
            });
            addContentType(req);
            expect(typeof req.httpRequest.headers['Content-Type']).to.eql('undefined');
        });
    });
});
