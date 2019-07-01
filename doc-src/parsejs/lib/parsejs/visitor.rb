module ParseJS
  class Visitor
    def accept(node)
      visit(node) if node
    end

    def map(node)
      node && node.map { |item| item ? accept(item) : nil }
    end

    def visit(node)
      type = node.class.name.split("::").last
      send("visit_#{type}", node)
    end

    def visit_Program(program)
      map(program.elements)
    end

    def visit_ExpressionStatement(statement)
      accept(statement.expression)
    end

    def visit_SequenceExpression(expression)
      [expression.parens, map(expression.expressions)]
    end

    def visit_Literal(literal)
      case val = literal.val
      when nil
        "null"
      when ParseJS::AST::Node
        accept val
      else
        val
      end
    end

    def visit_Number(number)
      number.val
    end

    def visit_String(string)
      string.val
    end

    def visit_ThisExpression(statement)
      "this"
    end

    def visit_DebuggerStatement(expr)
      "debugger"
    end

    def visit_EmptyStatement(empty)
      ";"
    end

    def visit_RegExp(regex)
      [regex.body, regex.flags]
    end

    def visit_Identifier(id)
      id.val
    end

    def visit_ThrowStatement(statement)
      accept(statement.argument)
    end

    def visit_ReturnStatement(statement)
      accept(statement.label) if statement.label
    end

    def visit_UnaryExpression(unary)
      [unary.op, accept(unary.argument)]
    end

    def visit_AssignmentExpression(expr)
      [accept(expr.left), expr.op, accept(expr.right)]
    end

    def visit_CallExpression(expr)
      [accept(expr.callee), map(expr.args)]
    end

    def visit_ArrayExpression(expr)
      map(expr.elements)
    end

    def visit_ObjectExpression(expr)
      map(expr.properties)
    end

    def visit_Property(prop)
      [map(prop.comments), accept(prop.key), accept(prop.value)]
    end

    def visit_CommentedStatement(statement)
      [map(statement.comments), accept(statement.statement)]
    end

    def visit_MemberExpression(expr)
      [accept(expr.object), accept(expr.property), expr.computed]
    end

    def visit_NewExpression(expr)
      [accept(expr.callee), expr.args && map(expr.args)]
    end

    def visit_BinaryExpression(expr)
      [accept(expr.left), expr.op, accept(expr.right)]
    end

    def visit_LogicalExpression(expr)
      visit_BinaryExpression(expr)
    end

    def visit_BlockStatement(statement)
      map(statement.statements)
    end

    def visit_IfStatement(statement)
      [
        accept(statement.test),
        accept(statement.consequent),
        statement.alternate && accept(statement.alternate)
      ]
    end

    def visit_WhileStatement(statement)
      [accept(statement.test), accept(statement.body)]
    end

    def visit_DoWhileStatement(statement)
      [accept(statement.body), accept(statement.test)]
    end

    def visit_ForStatement(statement)
      [
        accept(statement.init),
        accept(statement.test),
        accept(statement.update),
        accept(statement.body)
      ]
    end

    def visit_VariableDeclaration(decl)
      [decl.kind, map(decl.declarations), decl.semicolon]
    end

    def visit_VariableDeclarator(decl)
      [accept(decl.id), decl.init && accept(decl.init)]
    end

    def visit_UpdateExpression(expr)
      [expr.op, expr.prefix, accept(expr.argument)]
    end

    def visit_ForInStatement(statement)
      [
        accept(statement.left),
        accept(statement.right),
        accept(statement.body)
      ]
    end

    def visit_SwitchStatement(statement)
      [accept(statement.discriminant), map(statement.cases)]
    end

    def visit_SwitchCase(switch)
      [switch.test && accept(switch.test), map(switch.consequent)]
    end

    def visit_TryStatement(statement)
      [
        statement.block && accept(statement.block),
        statement.handler && accept(statement.handler),
        statement.finalizer && accept(statement.finalizer)
      ]
    end

    def visit_CatchClause(clause)
      [accept(clause.param), accept(clause.body)]
    end

    def visit_FunctionDeclaration(decl)
      [
        decl.id && accept(decl.id),
        accept(decl.params),
        map(decl.body)
      ]
    end

    def visit_ParameterList(params)
      map(params.list)
    end

    def visit_FunctionExpression(expr)
      visit_FunctionDeclaration(expr)
    end

    def visit_BreakStatement(statement)
      accept(statement.label) if statement.label
    end

    def visit_ContinueStatement(statement)
      accept(statement.label) if statement.label
    end

    def visit_ConditionalExpression(expr)
      [accept(expr.test), accept(expr.consequent), accept(expr.alternate)]
    end

    def visit_Comment(comment)
      [comment.type, comment.body, comment.newline]
    end

    def visit_WithStatement(statement)
      [accept(statement.object), accept(statement.body)]
    end

    module ScopeManager
      def initialize(*)
        @scopes = []
        super
      end

      def current_scope
        @scopes.last
      end

      def push_child(scope)
        current_scope.child_scopes ||= []
        current_scope.child_scopes << scope
        scope.parent_scope = current_scope
      end

      def visit_Program(program)
        @scopes << program
        ret = super
        @scopes.pop
        ret
      end

      def visit_FunctionDeclaration(decl)
        push_child(decl)

        @scopes << decl
        ret = super
        @scopes.pop
        ret
      end
    end
  end
end
