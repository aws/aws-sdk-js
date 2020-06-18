var escapeAttribute = require('../../lib/xml/escape-attribute').escapeAttribute;

describe('escape-attribute', function() {
    it('escapes: & < > "\'', function() {
        var value = 'abc 123 &<>"%\'';
        expect(escapeAttribute(value)).to.equal('abc 123 &amp;&lt;&gt;&quot;%&apos;');
    });
});
