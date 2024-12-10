require_relative 'base'

module YARDJS
  module Handlers
    class CommentedStatementHandler < Base
      handles CommentedStatement

      process do
        parser.extra_state.comments = statement.comments
        parse_block(statement.statement)
        parser.extra_state.comments = nil
      end
    end

    class ExpressionStatementHandler < Base
      handles ExpressionStatement
      process { parse_block statement.expression }
    end

    class SequenceExpressionStatementHandler < Base
      handles SequenceExpression
      process { parse_block statement.expressions }
    end

    class CommentHandler < Base
      handles Comment

      process do
        register_docstring(nil)
      end
    end
  end
end