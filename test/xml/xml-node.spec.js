var XmlNode = require('../../lib/xml/xml-node').XmlNode;
var XmlText = require('../../lib/xml/xml-text').XmlText;

describe('XmlNode', function() {
    it('creates empty xml documents', function() {
        var node = new XmlNode('Xml');
        expect(node.toString()).to.equal('<Xml/>');
    });

    it('nests elements', function() {
        var node = new XmlNode('xml', [
            new XmlNode('element')
        ]);
        expect(node.toString()).to.equal('<xml><element/></xml>');
    });

    it('nests elements deeply', function() {
        var node = new XmlNode('xml', [
            new XmlNode('a', [
                new XmlNode('b', [
                    new XmlNode('c')
                ])
            ])
        ]);
        expect(node.toString()).to.equal('<xml><a><b><c/></b></a></xml>');
    });

    it('supports flat elements with nested elements', function() {
        var node = new XmlNode('xml', [
            new XmlNode('a', [
                new XmlNode('b')
            ]),
            new XmlNode('c')
        ]);
        expect(node.toString()).to.equal('<xml><a><b/></a><c/></xml>');
    });

    it('accepts element values', function() {
        var node = new XmlNode('xml', [
            new XmlNode('element', [
                new XmlText('value')
            ])
        ]);
        expect(node.toString()).to.equal('<xml><element>value</element></xml>');
    });

    it('accepts element attributes', function() {
        var node = new XmlNode('xml', [
            new XmlNode('el')
                .addAttribute('abc', 123)
                .addAttribute('mno', 'xyz')
        ]);
        expect(node.toString()).to.equal('<xml><el abc="123" mno="xyz"/></xml>');
    });

    it('accepts element values and attributes at the same time', function() {
        var node = new XmlNode('xml', [
            new XmlNode('el', [
                new XmlText('value')
            ]).addAttribute('abc', 'xyz')
        ]);
        expect(node.toString()).to.equal('<xml><el abc="xyz">value</el></xml>');
    });

    it('accepts attributes on outer elements', function() {
        var node = new XmlNode('xml', [
            new XmlNode('out', [
                new XmlNode('c')
            ]).addAttribute('a', 'b')
        ]).addAttribute('xmlns', 'abc');
        expect(node.toString()).to.equal('<xml xmlns="abc"><out a="b"><c/></out></xml>');
    });

    it('ignores null and undefined attributes', function() {
        var node = new XmlNode('xml');
        expect(Object.keys(node.attributes).length).to.equal(0);
        node.addAttribute('foo', null);
        node.addAttribute('bar', undefined);
        node.addAttribute('baz', 123);
        node.addAttribute('bingo', 'bongo');
        expect(node.toString()).to.equal('<xml baz="123" bingo="bongo"/>');
    });

    it('escapes attribute values and element text', function() {
        var node = new XmlNode('xml', [
            new XmlNode('this & that')
        ]).addAttribute('xmlns', 'a"b');
        expect(node.toString()).to.equal('<xml xmlns="a&quot;b"><this & that/></xml>');
    });

    describe('addAttribute', function() {
        it('adds an attribute to the XmlNode', function() {
            var node = new XmlNode('xml');
            expect(node.attributes['foo']).to.be.undefined;
            node.addAttribute('foo', 'bar');
            expect(node.attributes['foo']).to.equal('bar');
        });

        it('returns a reference to the XmlNode', function() {
            var node = new XmlNode('xml');
            expect(node.addAttribute('foo', 'bar')).to.equal(node);
        });
    });

    describe('addChildNode', function() {
        it('adds a child to the XmlNode', function() {
            var node = new XmlNode('xml');
            expect(node.children.length === 0);
            node.addChildNode(new XmlNode('foo'));
            expect(node.children.length === 1);
            expect(node.toString()).to.equal('<xml><foo/></xml>');
        });

        it('returns a reference to the XmlNode', function() {
            var node = new XmlNode('xml');
            expect(node.addChildNode(new XmlNode('foo'))).to.equal(node);
        });
    });

    describe('removeAttribute', function() {
        it('removes an attribute from the XmlNode', function() {
            var node = new XmlNode('xml');
            node.addAttribute('foo', 'bar');
            expect(node.attributes['foo']).to.equal('bar');
            node.removeAttribute('foo');
            expect(node.attributes['foo']).to.be.undefined;
        });

        it('returns a reference to the XmlNode', function() {
            var node = new XmlNode('xml');
            expect(node.removeAttribute('foo')).to.equal(node);
        });
    });
});
