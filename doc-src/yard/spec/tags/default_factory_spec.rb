# frozen_string_literal: true

RSpec.describe YARD::Tags::DefaultFactory do
  before { @f = YARD::Tags::DefaultFactory.new }

  describe "#parse_tag" do
    it "does not have trailing whitespace on a regular freeform tag" do
      expect(@f.parse_tag('api', 'private     ').text).to eq "private"
    end
  end

  describe "#extract_types_and_name_from_text" do
    def parse_types(types)
      @f.send(:extract_types_and_name_from_text, types)
    end

    it "handles one type" do
      expect(parse_types('[A]')).to eq [nil, ['A'], ""]
    end

    it "handles a list of types" do
      expect(parse_types('[A, B, C]')).to eq [nil, ['A', 'B', 'C'], ""]
    end

    it "handles ducktypes" do
      expect(parse_types('[#foo]')).to eq [nil, ['#foo'], '']
    end

    %w(#foo= #<< #<=> #>> #== #=== Array<#<=>> Array<#==>).each do |meth|
      it "handles ducktypes with special method name #{meth}" do
        expect(parse_types("[#{meth}]")).to eq [nil, [meth], '']
      end
    end

    it "only parses #ducktypes inside brackets" do
      expect(parse_types("#ducktype")).to eq [nil, nil, '#ducktype']
    end

    it "returns the text before and after the type list" do
      expect(parse_types(' b <String> description')).to eq ['b', ['String'], 'description']
      expect(parse_types('b c <String> description (test)')).to eq [nil, nil, 'b c <String> description (test)']
    end

    it "does not allow types to start after a newline" do
      v = parse_types("   \n   [X]")
      expect(v).to eq [nil, nil, "[X]"]
    end

    it "handles a complex list of types" do
      v = parse_types(' [Test, Array<String, Hash, C>, String]')
      expect(v).to include(["Test", "Array<String, Hash, C>", "String"])
    end

    it "handles any of the following start/end delimiting chars: (), <>, {}, []" do
      a = parse_types('[a,b,c]')
      b = parse_types('<a,b,c>')
      c = parse_types('(a,b,c)')
      d = parse_types('{a,b,c}')
      expect(a).to eq b
      expect(b).to eq c
      expect(c).to eq d
      expect(a).to include(['a', 'b', 'c'])
    end

    it "returns the text before the type list as the last element" do
      expect(parse_types('b[x, y, z]')).to eq ['b', ['x', 'y', 'z'], '']
      expect(parse_types('  ! <x>')).to eq ["!", ['x'], '']
    end

    it "returns text unparsed if there is no type list" do
      expect(parse_types('')).to eq [nil, nil, '']
      expect(parse_types('[]')).to eq [nil, nil, '[]']
    end

    it "allows A => B syntax" do
      v = parse_types(' [Test, Array<String, Hash{A => {B => C}}, C>, String]')
      expect(v).to include(["Test", "Array<String, Hash{A => {B => C}}, C>", "String"])
    end

    it "handles quoted values" do
      v = parse_types(' ["foo, bar", \'baz, qux\', in"them,iddle"]')
      expect(v).to include(["\"foo, bar\"", "'baz, qux'", 'in"them,iddle"'])
    end
  end

  describe "#parse_tag_with_types" do
    def parse_types(text)
      @f.send(:parse_tag_with_types, 'test', text)
    end

    it "parses given types and description" do
      expect(YARD::Tags::Tag).to receive(:new).with("test", "description", ["x", "y", "z"])
      parse_types(' [x, y, z] description')
    end

    it "parses given types only" do
      expect(YARD::Tags::Tag).to receive(:new).with("test", "", ["x", "y", "z"])
      parse_types(' [x, y, z] ')
    end

    it "allows type list to be omitted" do
      expect(YARD::Tags::Tag).to receive(:new).with('test', 'description', nil)
      parse_types('  description    ')
    end

    it "raises an error if a name is specified before type list" do
      expect { parse_types('b<String> desc') }.to raise_error(YARD::Tags::TagFormatError, 'cannot specify a name before type list for \'@test\'')
    end
  end

  describe "#parse_tag_with_types_name_and_default" do
    def parse_types(text)
      @f.send(:parse_tag_with_types_name_and_default, 'test', text)
    end

    it "parses a standard type list with name before types (no default)" do
      expect(YARD::Tags::DefaultTag).to receive(:new).with("test", "description", ["x", "y", "z"], 'NAME', nil)
      parse_types('NAME [x, y, z] description')
    end

    it "parses a standard type list with name after types (no default)" do
      expect(YARD::Tags::DefaultTag).to receive(:new).with("test", "description", ["x", "y", "z"], 'NAME', nil)
      parse_types('  [x, y, z] NAME description')
    end

    it "parses a tag definition with name, typelist and default" do
      expect(YARD::Tags::DefaultTag).to receive(:new).with("test", "description", ["x", "y", "z"], 'NAME', ['default', 'values'])
      parse_types('  [x, y, z] NAME (default, values) description')
    end

    it "parses a tag definition with name, typelist and default when name is before type list" do
      expect(YARD::Tags::DefaultTag).to receive(:new).with("test", "description", ["x", "y", "z"], 'NAME', ['default', 'values'])
      parse_types(' NAME [x, y, z] (default, values) description')
    end

    it "allows typelist to be omitted" do
      expect(YARD::Tags::DefaultTag).to receive(:new).with("test", "description", nil, 'NAME', ['default', 'values'])
      parse_types('  NAME (default, values) description')
    end
  end

  describe "#parse_tag_with_options" do
    def parse_options(text)
      @f.parse_tag_with_options('option', text)
    end

    it "has a name before tag info" do
      t = parse_options("xyz key [Types] (default) description")
      expect(t.tag_name).to eq 'option'
      expect(t.name).to eq 'xyz'
    end

    it "parses the rest of the tag like DefaultTag" do
      t = parse_options("xyz key [Types] (default) description")
      expect(t.pair).to be_instance_of(Tags::DefaultTag)
      expect(t.pair.types).to eq ["Types"]
      expect(t.pair.name).to eq "key"
      expect(t.pair.defaults).to eq ["default"]
      expect(t.pair.text).to eq "description"
    end

    it "allows omitting default" do
      t = parse_options("xyz [Types] key")
      expect(t.pair).to be_instance_of(Tags::DefaultTag)
      expect(t.pair.name).to eq "key"
    end
  end
end
