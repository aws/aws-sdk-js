module YARD
  module Tags
    class MethodDirective
      def method_name
        sig = sanitized_tag_signature
        if sig
          sig[/\A\s*([^\(; \t]+)/, 1]
        else
          handler.call_params.first
        end
      end

      def create_object
        name = method_name
        visibility = parser.state.visibility || handler.visibility
        ns = CodeObjects::NamespaceObject === object ? object : handler.namespace
        obj = YARDJS::CodeObjects::PropertyObject.new(ns, name)
        handler.register_file_info(obj)
        handler.register_source(obj)
        handler.register_visibility(obj, visibility)
        handler.register_group(obj)
        obj.signature = method_signature
        obj.parameters = OverloadTag.new(:overload, method_signature).parameters
        obj.docstring = Docstring.new!(parser.text, parser.tags, obj,
          parser.raw_text)
        obj.property_type = :function
        handler.register_module_function(obj)
        obj
      end
    end

    class AttributeDirective
      def method_name
        sanitized_tag_signature || handler.call_params.first
      end

      def method_signature; method_name end

      def create_attribute_data(object)
        if object.tag(:constant)
          object.property_type = :literal
        else
          object.property_type = :object
        end
      end
    end
  end
end
