require "parsejs/scope"

module ParseJS
  module AST
    class Node
      def type?(string)
        self.class.name.split("::").last == string
      end

      def cuddly?
        false
      end

      def statement?
        false
      end

      def needs_newline?
        false
      end
    end

    class Comment
      def multiline?
        @type == 'multiline'
      end
    end

    class SequenceExpression
      attr_accessor :parens
    end

    class BlockStatement
      attr_accessor :cuddly

      def cuddle!
        @cuddly = true
      end

      def needs_newline?
        !@cuddly
      end

      def cuddly?
        true
      end

      def statement?
        true
      end
    end

    class FunctionExpression
      include ParseJS::AST::Scope
    end

    class FunctionDeclaration
      include ParseJS::AST::Scope
    end

    class Program
      include ParseJS::AST::Scope
    end

    statements  = [VariableDeclaration, EmptyStatement, ExpressionStatement, IfStatement]
    statements += [WhileStatement, ForStatement, ForInStatement, DoWhileStatement]
    statements += [ContinueStatement, BreakStatement, ReturnStatement, WithStatement]
    statements += [LabeledStatement, SwitchStatement, ThrowStatement, TryStatement]
    statements += [DebuggerStatement, FunctionDeclaration]

    statements.each do |statement|
      statement.class_eval do
        def needs_newline?
          true
        end

        def statement?
          true
        end
      end
    end
  end
end

