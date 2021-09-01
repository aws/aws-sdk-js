# frozen_string_literal: true

def tag_parse(content, object = nil, handler = nil)
  @parser = DocstringParser.new
  @parser.parse(content, object, handler)
  @parser
end

RSpec.describe YARD::Tags::ParseDirective do
  describe "#call" do
    after { Registry.clear }

    it "parses if handler=nil but use file=(stdin)" do
      tag_parse %(@!parse
        # Docstring here
        def foo; end
      )
      expect(Registry.at('#foo').docstring).to eq "Docstring here"
      expect(Registry.at('#foo').file).to eq '(stdin)'
    end

    it "allows parser type to be specified in type" do
      tag_parse %{@!parse [c]
        void Init_Foo() {
          rb_define_method(rb_cMyClass, "foo", foo, 1);
        }
      }
      expect(Registry.at('MyClass#foo')).not_to be nil
    end

    it "parses code in context of current handler" do
      src = <<-eof
        class A
          # @!parse
          #   def foo; end
          eval "def foo; end"
        end
      eof
      parser = YARD::Parser::SourceParser.new
      parser.file = "myfile.rb"
      parser.parse(StringIO.new(src))
      expect(Registry.at('A#foo').file).to eq 'myfile.rb'
    end
  end
end

RSpec.describe YARD::Tags::GroupDirective do
  describe "#call" do
    it "does nothing if handler=nil" do
      tag_parse("@!group foo")
    end

    it "sets group value in parser state (with handler)" do
      handler = OpenStruct.new(:extra_state => OpenStruct.new)
      tag_parse("@!group foo", nil, handler)
      expect(handler.extra_state.group).to eq 'foo'
    end
  end
end

RSpec.describe YARD::Tags::EndGroupDirective do
  describe "#call" do
    it "does nothing if handler=nil" do
      tag_parse("@!endgroup foo")
    end

    it "sets group value in parser state (with handler)" do
      handler = OpenStruct.new(:extra_state => OpenStruct.new(:group => "foo"))
      tag_parse("@!endgroup", nil, handler)
      expect(handler.extra_state.group).to be nil
    end
  end
end

RSpec.describe YARD::Tags::MacroDirective do
  def handler
    OpenStruct.new(:call_params => %w(a b c),
                   :caller_method => 'foo',
                   :scope => :instance, :visibility => :public,
                   :namespace => P('Foo::Bar'),
                   :parser => OpenStruct.new(:file => "(stdin)", :line => 1),
                   :statement => OpenStruct.new(:source => 'foo :a, :b, :c'))
  end

  after(:all) { Registry.clear }

  describe "#call" do
    it "defines new macro when [new] is provided" do
      tag_parse("@!macro [new] foo\n  foo")
      expect(CodeObjects::MacroObject.find('foo').macro_data).to eq 'foo'
    end

    it "defines new macro if text block is provided" do
      tag_parse("@!macro bar\n  bar")
      expect(CodeObjects::MacroObject.find('bar').macro_data).to eq 'bar'
    end

    it "expands macros and return #expanded_text to tag parser" do
      tag_parse("@!macro [new] foo\n  foo")
      expect(tag_parse("@!macro foo").text).to eq 'foo'
    end

    it "does not expand new macro if docstring is unattached" do
      expect(tag_parse("@!macro [new] foo\n  foo").text).not_to eq 'foo'
    end

    it "expands new anonymous macro even if docstring is unattached" do
      expect(tag_parse("@!macro\n  foo").text).to eq 'foo'
    end

    it "allows multiple macros to be expanded" do
      tag_parse("@!macro [new] foo\n  foo")
      tag_parse("@!macro bar\n  bar")
      expect(tag_parse("@!macro foo\n@!macro bar").text).to eq "foo\nbar"
    end

    it "allows anonymous macros" do
      tag_parse("@!macro\n  a b c", nil, handler)
      expect(@parser.text).to eq 'a b c'
    end

    it "expands call_params and caller_method using $N when handler is provided" do
      tag_parse("@!macro\n  $1 $2 $3", nil, handler)
      expect(@parser.text).to eq 'a b c'
    end

    it "attaches macro to method if one exists" do
      tag_parse("@!macro [attach] attached\n  $1 $2 $3", nil, handler)
      macro = CodeObjects::MacroObject.find('attached')
      expect(macro.method_object).to eq P('Foo::Bar.foo')
    end

    it "does not expand new attached macro if defined on class method" do
      baz = CodeObjects::MethodObject.new(P('Foo::Bar'), :baz, :class)
      expect(baz.visibility).to eq :public
      tag_parse("@!macro [attach] attached2\n  @!visibility private", baz, handler)
      macro = CodeObjects::MacroObject.find('attached2')
      expect(macro.method_object).to eq P('Foo::Bar.baz')
      expect(baz.visibility).to eq :public
    end

    it "expands macro if defined on class method and there is no data block" do
      tag_parse("@!macro [new] attached3\n  expanded_data")
      baz = CodeObjects::MethodObject.new(P('Foo::Bar'), :baz, :class)
      doc = DocstringParser.new.parse('@!macro attached3', baz, handler).to_docstring
      expect(doc).to eq 'expanded_data'
    end

    it "does not attach macros to class/modules but creates macro" do
      YARD::Registry.clear
      YARD.parse_string "module Foo; end"
      tag_parse("@!macro [attach] attached4\n  $1 $2 $3", YARD::Registry.at('Foo'), handler)
      macro = CodeObjects::MacroObject.find('attached4')
      expect(macro.method_object).to eq nil
      expect(log.io.string).to match(/Attaching macros to non-methods is unsupported/)
    end

    it "does not attempt to expand macro values if handler = nil" do
      tag_parse("@!macro [attach] xyz\n  $1 $2 $3")
    end
  end
end

RSpec.describe YARD::Tags::MethodDirective do
  describe "#call" do
    after { Registry.clear }

    it "uses entire docstring if no indented data is found" do
      YARD.parse_string <<-eof
        class Foo
          # @!method foo
          # @!method bar
          # @!scope class
        end
      eof
      expect(Registry.at('Foo.foo')).to be_a(CodeObjects::MethodObject)
      expect(Registry.at('Foo.bar')).to be_a(CodeObjects::MethodObject)
    end

    it "handles indented block text in @!method" do
      YARD.parse_string <<-eof
        # @!method foo(a)
        #   Docstring here
        #   @return [String] the foo
        # Ignore this
        # @param [String] a
      eof
      foo = Registry.at('#foo')
      expect(foo.docstring).to eq "Docstring here"
      expect(foo.docstring.tag(:return)).not_to be nil
      expect(foo.tag(:param)).to be nil
    end

    it "executes directives on object in indented block" do
      YARD.parse_string <<-eof
        class Foo
          # @!method foo(a)
          #   @!scope class
          #   @!visibility private
          # @!method bar
          #   Hello
          # Ignore this
        end
      eof
      foo = Registry.at('Foo.foo')
      expect(foo.visibility).to eq :private
      bar = Registry.at('Foo#bar')
      expect(bar.visibility).to eq :public
    end

    it "is able to define multiple @methods in docstring" do
      YARD.parse_string <<-eof
        class Foo
          # @!method foo1
          #   Docstring1
          # @!method foo2
          #   Docstring2
          # @!method foo3
          #   @!scope class
          #   Docstring3
        end
      eof
      foo1 = Registry.at('Foo#foo1')
      foo2 = Registry.at('Foo#foo2')
      foo3 = Registry.at('Foo.foo3')
      expect(foo1.docstring).to eq 'Docstring1'
      expect(foo2.docstring).to eq 'Docstring2'
      expect(foo3.docstring).to eq 'Docstring3'
    end

    it "defines the method inside namespace if attached to namespace object" do
      YARD.parse_string <<-eof
        module Foo
          # @!method foo
          #   Docstring1
          # @!method bar
          #   Docstring2
          class Bar
          end
        end
      eof
      expect(Registry.at('Foo::Bar#foo').docstring).to eq 'Docstring1'
      expect(Registry.at('Foo::Bar#bar').docstring).to eq 'Docstring2'
    end

    it "sets scope to class if signature has 'self.' prefix" do
      YARD.parse_string <<-eof
        # @!method self.foo
        # @!method self. bar
        # @!method self.baz()
        class Foo
        end
      eof
      %w(foo bar baz).each do |name|
        expect(Registry.at("Foo.#{name}")).to be_a(CodeObjects::MethodObject)
      end
    end

    it "defines parameters from signature" do
      YARD.parse_string <<-eof
        # @!method foo(a, b, c = nil)
      eof
      expect(Registry.at('#foo').parameters).to eq [['a', nil], ['b', nil], ['c', 'nil']]
    end

    it "is able to define method with module scope (module function)" do
      YARD.parse_string <<-eof
        # @!method foo
        #   @!scope module
        #   This is a docstring
        #   @return [Boolean] whether this is true
        class Foo
        end
      eof
      foo_c = Registry.at('Foo.foo')
      foo_i = Registry.at('Foo#foo')
      expect(foo_c).not_to be nil
      expect(foo_i).not_to be nil
      expect(foo_c).to be_module_function
      expect(foo_c.docstring).to eq foo_i.docstring
      expect(foo_c.tag(:return).text).to eq foo_i.tag(:return).text
    end
  end
end

RSpec.describe YARD::Tags::AttributeDirective do
  describe "#call" do
    after { Registry.clear }

    it "uses entire docstring if no indented data is found" do
      YARD.parse_string <<-eof
        class Foo
          # @!attribute foo
          # @!attribute bar
          # @!scope class
        end
      eof
      expect(Registry.at('Foo.foo')).to be_reader
      expect(Registry.at('Foo.bar')).to be_reader
    end

    it "handles indented block in @!attribute" do
      YARD.parse_string <<-eof
        # @!attribute foo
        #   Docstring here
        #   @return [String] the foo
        # Ignore this
        # @param [String] a
      eof
      foo = Registry.at('#foo')
      expect(foo.is_attribute?).to be true
      expect(foo.docstring).to eq "Docstring here"
      expect(foo.docstring.tag(:return)).not_to be nil
      expect(foo.tag(:param)).to be nil
    end

    it "is able to define multiple @attributes in docstring" do
      YARD.parse_string <<-eof
        class Foo
          # @!attribute [r] foo1
          #   Docstring1
          # @!attribute [w] foo2
          #   Docstring2
          # @!attribute foo3
          #   @!scope class
          #   Docstring3
        end
      eof
      foo1 = Registry.at('Foo#foo1')
      foo2 = Registry.at('Foo#foo2=')
      foo3 = Registry.at('Foo.foo3')
      foo4 = Registry.at('Foo.foo3=')
      expect(foo1).to be_reader
      expect(foo2).to be_writer
      expect(foo3).to be_reader
      expect(foo1.docstring).to eq 'Docstring1'
      expect(foo2.docstring).to eq 'Docstring2'
      expect(foo3.docstring).to eq 'Docstring3'
      expect(foo4).to be_writer
      expect(foo1.attr_info[:write]).to be nil
      expect(foo2.attr_info[:read]).to be nil
    end

    it "defines the attr inside namespace if attached to namespace object" do
      YARD.parse_string <<-eof
        module Foo
          # @!attribute [r] foo
          # @!attribute [r] bar
          class Bar
          end
        end
      eof
      expect(Registry.at('Foo::Bar#foo')).to be_reader
      expect(Registry.at('Foo::Bar#bar')).to be_reader
    end
  end

  it "sets scope to class if signature has 'self.' prefix" do
    YARD.parse_string <<-eof
      # @!attribute self.foo
      # @!attribute self. bar
      # @!attribute self.baz
      class Foo
      end
    eof
    %w(foo bar baz).each do |name|
      expect(Registry.at("Foo.#{name}")).to be_reader
    end
  end
end

RSpec.describe YARD::Tags::ScopeDirective do
  describe "#call" do
    after { Registry.clear }

    it "sets state on tag parser if object = nil" do
      tag_parse("@!scope class")
      expect(@parser.state.scope).to eq :class
    end

    it "sets state on tag parser if object is namespace" do
      object = CodeObjects::ClassObject.new(:root, 'Foo')
      tag_parse("@!scope class", object)
      expect(object[:scope]).to be nil
      expect(@parser.state.scope).to eq :class
    end

    it "sets scope on object if object is a method object" do
      object = CodeObjects::MethodObject.new(:root, 'foo')
      tag_parse("@!scope class", object)
      expect(object.scope).to eq :class
    end

    %w(class instance module).each do |type|
      it "allows #{type} as value" do
        tag_parse("@!scope #{type}")
        expect(@parser.state.scope).to eq type.to_sym
      end
    end

    %w(invalid foo FOO CLASS INSTANCE).each do |type|
      it "does not allow #{type} as value" do
        tag_parse("@!scope #{type}")
        expect(@parser.state.scope).to be nil
      end
    end
  end
end

RSpec.describe YARD::Tags::VisibilityDirective do
  describe "#call" do
    after { Registry.clear }

    it "sets visibility on tag parser if object = nil" do
      tag_parse("@!visibility private")
      expect(@parser.state.visibility).to eq :private
    end

    it "sets state on tag parser if object is namespace" do
      object = CodeObjects::ClassObject.new(:root, 'Foo')
      tag_parse("@!visibility protected", object)
      expect(object.visibility).to eq :protected
      expect(@parser.state.visibility).to be nil
    end

    it "sets visibility on object if object is a method object" do
      object = CodeObjects::MethodObject.new(:root, 'foo')
      tag_parse("@!visibility private", object)
      expect(object.visibility).to eq :private
    end

    %w(public private protected).each do |type|
      it "allows #{type} as value" do
        tag_parse("@!visibility #{type}")
        expect(@parser.state.visibility).to eq type.to_sym
      end
    end

    %w(invalid foo FOO PRIVATE INSTANCE).each do |type|
      it "does not allow #{type} as value" do
        tag_parse("@!visibility #{type}")
        expect(@parser.state.visibility).to be nil
      end
    end

    it "updates visibility on future methods" do
      Registry.clear
      YARD.parse_string <<-eof
        class Foo
          # @!visibility private


          def foo; end
          def bar; end
          def baz; end
        end
      eof
      %w(foo bar baz).each do |name|
        expect(Registry.at("Foo##{name}").visibility).to eq :private
      end
    end if YARD::Parser::SourceParser.parser_type == :ruby
  end
end
