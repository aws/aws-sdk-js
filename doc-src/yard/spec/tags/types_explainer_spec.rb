# frozen_string_literal: true

RSpec.describe YARD::Tags::TypesExplainer do
  Type = YARD::Tags::TypesExplainer::Type
  CollectionType = YARD::Tags::TypesExplainer::CollectionType
  FixedCollectionType = YARD::Tags::TypesExplainer::FixedCollectionType
  HashCollectionType = YARD::Tags::TypesExplainer::HashCollectionType
  Parser = YARD::Tags::TypesExplainer::Parser

  def parse(types)
    Parser.new(types).parse
  end

  def parse_fail(types)
    expect(lambda { parse(types) }).to raise_error(SyntaxError)
  end

  describe Type, '#to_s' do
    before { @t = Type.new(nil) }

    it "works for a class/module reference" do
      @t.name = "ClassModuleName"
      expect(@t.to_s).to eq "a ClassModuleName"
      expect(@t.to_s(false)).to eq "ClassModuleNames"

      @t.name = "XYZ"
      expect(@t.to_s).to eq "a XYZ"
      expect(@t.to_s(false)).to eq "XYZ's"

      @t.name = "Array"
      expect(@t.to_s).to eq "an Array"
      expect(@t.to_s(false)).to eq "Arrays"
    end

    it "works for a method (ducktype)" do
      @t.name = "#mymethod"
      expect(@t.to_s).to eq "an object that responds to #mymethod"
      expect(@t.to_s(false)).to eq "objects that respond to #mymethod"
    end

    it "works for a constant value" do
      ['false', 'true', 'nil', '4'].each do |name|
        @t.name = name
        expect(@t.to_s).to eq name
        expect(@t.to_s(false)).to eq name
      end
    end
  end

  describe CollectionType, '#to_s' do
    before { @t = CollectionType.new("Array", nil) }

    it "can contain one item" do
      @t.types = [Type.new("Object")]
      expect(@t.to_s).to eq "an Array of (Objects)"
    end

    it "can contain more than one item" do
      @t.types = [Type.new("Object"), Type.new("String"), Type.new("Symbol")]
      expect(@t.to_s).to eq "an Array of (Objects, Strings or Symbols)"
    end

    it "can contain nested collections" do
      @t.types = [CollectionType.new("List", [Type.new("Object")])]
      expect(@t.to_s).to eq "an Array of (a List of (Objects))"
    end
  end

  describe FixedCollectionType, '#to_s' do
    before { @t = FixedCollectionType.new("Array", nil) }

    it "can contain one item" do
      @t.types = [Type.new("Object")]
      expect(@t.to_s).to eq "an Array containing (an Object)"
    end

    it "can contain more than one item" do
      @t.types = [Type.new("Object"), Type.new("String"), Type.new("Symbol")]
      expect(@t.to_s).to eq "an Array containing (an Object followed by a String followed by a Symbol)"
    end

    it "can contain nested collections" do
      @t.types = [FixedCollectionType.new("List", [Type.new("Object")])]
      expect(@t.to_s).to eq "an Array containing (a List containing (an Object))"
    end
  end

  describe FixedCollectionType, '#to_s' do
    before { @t = HashCollectionType.new("Hash", nil, nil) }

    it "can contain a single key type and value type" do
      @t.key_types = [Type.new("Object")]
      @t.value_types = [Type.new("Object")]
      expect(@t.to_s).to eq "a Hash with keys made of (Objects) and values of (Objects)"
    end

    it "can contain multiple key types" do
      @t.key_types = [Type.new("Key"), Type.new("String")]
      @t.value_types = [Type.new("Object")]
      expect(@t.to_s).to eq "a Hash with keys made of (Keys or Strings) and values of (Objects)"
    end

    it "can contain multiple value types" do
      @t.key_types = [Type.new("String")]
      @t.value_types = [Type.new("true"), Type.new("false")]
      expect(@t.to_s).to eq "a Hash with keys made of (Strings) and values of (true or false)"
    end
  end

  describe Parser, '#parse' do
    it "parses a regular class name" do
      type = parse("MyClass")
      expect(type.size).to eq 1
      expect(type.first).to be_a(Type)
      expect(type.first.name).to eq "MyClass"
    end

    it "parses a path reference name" do
      type = parse("A::B")
      expect(type.size).to eq 1
      expect(type.first).to be_a(Type)
      expect(type.first.name).to eq "A::B"
    end

    it "parses a list of simple names" do
      type = parse("A, B::C, D, E")
      expect(type.size).to eq 4
      expect(type[0].name).to eq "A"
      expect(type[1].name).to eq "B::C"
      expect(type[2].name).to eq "D"
      expect(type[3].name).to eq "E"
    end

    it "parses a collection type" do
      type = parse("MyList<String>")
      expect(type.first).to be_a(CollectionType)
      expect(type.first.types.size).to eq 1
      expect(type.first.name).to eq "MyList"
      expect(type.first.types.first.name).to eq "String"
    end

    it "allows a collection type without a name" do
      type = parse("<String>")
      expect(type.first.name).to eq "Array"
    end

    it "allows a fixed collection type without a name" do
      type = parse("(String)")
      expect(type.first.name).to eq "Array"
    end

    it "allows a hash collection type without a name" do
      type = parse("{K=>V}")
      expect(type.first.name).to eq "Hash"
    end

    it "does not accept two commas in a row" do
      parse_fail "A,,B"
    end

    it "does not accept two types not separated by a comma" do
      parse_fail "A B"
    end

    it "does not allow a comma without a following type" do
      parse_fail "A, "
    end

    it "fails on any unrecognized character" do
      parse_fail "$"
    end
  end

  describe ".explain" do
    it "parses an arbitrarily nested collection type" do
      explain = YARD::Tags::TypesExplainer.explain("Array<String, Array<Symbol, List(String, {K=>V})>>")
      result = "an Array of (Strings or an Array of (Symbols or a List containing
        (a String followed by a Hash with keys made of (K's) and values of (V's))))"
      expect(explain).to eq result.delete("\n").squeeze(' ')
    end

    it "parses various examples" do
      expect = {
        "Fixnum, Foo, Object, true" => "a Fixnum; a Foo; an Object; true",
        "#read" => "an object that responds to #read",
        "Array<String, Symbol, #read>" => "an Array of (Strings, Symbols or objects that respond to #read)",
        "Set<Number>" => "a Set of (Numbers)",
        "Array(String, Symbol)" => "an Array containing (a String followed by a Symbol)",
        "Hash{String => Symbol, Number}" => "a Hash with keys made of (Strings) and values of (Symbols or Numbers)",
        "Array<Foo, Bar>, List(String, Symbol, #to_s), {Foo, Bar => Symbol, Number}" => "an Array of (Foos or Bars);
          a List containing (a String followed by a Symbol followed by an object that responds to #to_s);
          a Hash with keys made of (Foos or Bars) and values of (Symbols or Numbers)",
        "#weird_method?, #<=>, #!=" => "an object that responds to #weird_method?;
          an object that responds to #<=>;
          an object that responds to #!="
      }
      expect.each do |input, expected|
        explain = YARD::Tags::TypesExplainer.explain(input)
        expect(explain).to eq expected.delete("\n").squeeze(' ')
      end
    end
  end
end
