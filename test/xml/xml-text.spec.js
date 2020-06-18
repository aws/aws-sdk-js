var XmlText = require('../../lib/xml/xml-text').XmlText;

describe('XmlText', function() {
    it('escapes element text', function() {
        var text = new XmlText('this & that are < or > "most"');
        expect(text.toString()).to.equal('this &amp; that are &lt; or &gt; "most"');
    });
});
