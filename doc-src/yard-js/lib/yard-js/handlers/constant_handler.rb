require_relative 'base'

module YARDJS
  module Handlers
    class ConstantHandler < Base
      handles AssignmentExpression
      handles Property

      process do
        if statement.is_a?(AssignmentExpression)
          name, value = statement.left.source, statement.right
        else
          name, value = statement.key.val, statement.value
        end

        return if value.is_a?(FunctionExpression)
        return if value.is_a?(ObjectExpression)
        return if value.is_a?(CallExpression)

        handle_default_comments

        obj = register CodeObjects::PropertyObject.new(namespace, name)
        if value.is_a?(Literal)
          obj.property_type = :literal
          if type = parse_type(value.val)
            obj.docstring.add_tag(YARD::Tags::Tag.new(:return, '', [type]))
          end
        else
          obj.property_type = :object
        end

        unless obj.has_tag?(:value)
          obj.docstring.add_tag(YARD::Tags::Tag.new(:value, value.source))
        end

        unless obj.has_tag?(:static)
          obj.docstring.add_tag(YARD::Tags::Tag.new(:static, ''))
        end
      end

      def parse_type(type)
        case type
        when Node; type.class.to_s[/::([^:]+)$/, 1]
        when FalseClass, TrueClass; 'Boolean'
        when NilClass; 'null'
        end
      end
    end
  end
end
