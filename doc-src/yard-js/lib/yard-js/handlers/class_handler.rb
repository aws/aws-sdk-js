require_relative 'base'

module YARDJS
  module Handlers
    class ClassHandler < Base
      handles AssignmentExpression
      handles Property

      process do
        statement.comments ||= parser.extra_state.comments
        handle_default_comments

        if statement.is_a?(AssignmentExpression)
          left, right = statement.left, statement.right
        else
          left, right = statement.key, statement.value
        end

        return unless right.is_a?(CallExpression) &&
          right.callee.source =~ YARDJS.options.define_class_expression

        obj = register YARD::CodeObjects::ClassObject.new(namespace, left.source)
        obj.superclass = right.args.first.source if right.args.size > 1

        defs = right.args.last.properties
        parse_block(defs, :namespace => obj)
      end
    end

    class UpdateClassHandler < Base
      handles CallExpression

      process do
        return unless statement.callee.source =~
          YARDJS.options.update_class_expression

        ns = P(statement.args.first.source.gsub(/\.prototype/, ''))
        ensure_loaded!(ns)

        statement.comments ||= parser.extra_state.comments
        register(ns) if statement.comments && statement.comments.size > 0

        parse_block(statement.args.last.properties, :namespace => ns)
      end
    end
  end
end
