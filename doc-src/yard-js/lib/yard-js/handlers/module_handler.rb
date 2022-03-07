require_relative 'base'

module YARDJS
  module Handlers
    class ModuleHandler < Base
      handles AssignmentExpression
      handles VariableDeclaration
      handles Property

      process do
        case statement
        when VariableDeclaration
          left = statement.declarations.first.id
          right = statement.declarations.first.init
        when AssignmentExpression
          left = statement.left
          right = statement.right
        when Property
          left = statement.key
          right = statement.value
        end

        return unless ObjectExpression === right

        statement.comments ||= parser.extra_state.comments
        handle_default_comments

        obj = register YARD::CodeObjects::ModuleObject.new(namespace, left.source)
        parse_block(right.properties, :namespace => obj)
      end
    end
  end
end
