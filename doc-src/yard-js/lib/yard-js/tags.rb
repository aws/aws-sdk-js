require 'yard'

module YARDJS
  module Tags
    include YARD::Tags

    class CallbackTag < OverloadTag
      attr_accessor :param_name

      def initialize(tag_name, text)
        name, text = *text.split(" ", 2)
        self.param_name = name
        super(tag_name, text)
      end
    end

    class EventDirective < Directive
      def call
        overload = YARD::Tags::OverloadTag.new(:overload, tag.name)
        name = overload.name
        ns = YARD::CodeObjects::NamespaceObject === object ? object : handler.namespace
        obj = CodeObjects::EventObject.new(ns, name)
        ds = YARD::DocstringParser.new
        handler.register_group(obj)
        obj.parameters = overload.parameters
        obj.docstring = ds.parse(tag.text, obj, parser.handler).to_docstring
        obj
      end
    end

    class IgnoreDirective < Directive
      def call
        handler.extra_state.ignore_next_statement = true
      end
    end
  end
end
