require_relative 'base'

module YARDJS
  module Handlers
    class InstanceMethodHandler < Base
      handles Property

      process do
        return unless statement.value.is_a?(FunctionExpression)

        handle_default_comments

        name = statement.key.val
        params = statement.value.params.list.map {|t| [t.val, nil]}

        obj = register CodeObjects::PropertyObject.new(namespace, name)
        obj.property_type = :function
        obj.parameters = params
        obj.signature = "#{name}(#{params.join(', ')})"
        unless obj.has_tag?(:return)
          obj.docstring.add_tag(YARD::Tags::Tag.new(:return, '', ['void']))
        end
      end
    end
  end
end
