var escapeElement = require('../../lib/xml/escape-element').escapeElement;

describe('escape-element', function() {
    it('escapes: & < > \\r \\n \u0085\u2028', function() {
        var value = 'abc 123 &<>"%\r\n\u0085\u2028';
        expect(escapeElement(value)).to.equal('abc 123 &amp;&lt;&gt;"%&#x0D;&#x0A;&#x85;&#x2028;');
    });
});
