var escapeElement = require('../../lib/xml/escape-element').escapeElement;

describe('escape-element', function() {
    it('escapes: & < >', function() {
        var value = 'abc 123 &<>"%';
        expect(escapeElement(value)).to.equal('abc 123 &amp;&lt;&gt;"%');
    });
});
