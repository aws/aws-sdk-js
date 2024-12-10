require "parsejs/visitor"

module ParseJS
  module AST
    module Scope
      attr_accessor :scope_variables, :parent_variables, :variable_access
      attr_accessor :parent_scope, :child_scopes

      def variable_in_scope?(name)
        return true if variable?(name)
        parent_scope && parent_scope.variable_in_scope?(name)
      end

      def variable?(name)
        scope_variable?(name) || parent_variable?(name) || variable_access?(name)
      end

      def scope_variable?(name)
        scope_variables && scope_variables.include?(name)
      end

      def parent_variable?(name)
        parent_variables && parent_variables.include?(name)
      end

      def variable_access?(name)
        variable_access && variable_access.include?(name)
      end

      # determine whether there is a reference for a particular variable
      # to a parent scope.
      def parent_variable_access?(name)
        # if this scope has a "var x = 1" type of declaration for this name,
        # it is not referencing a parent scope.
        return false if scope_variable?(name)

        # otherwise, if there is a variable access for this name, it's
        # referencing a parent scope.
        variable_access?(name)
      end

      # determine whether a variable can be added without causing damage
      # to child scopes.
      def available_variable?(name)
        # if the current scope is already using the variable, it's
        # unavailable.
        return false if variable?(name)

        # if any of the child scopes reference the variable as a
        # parent variable, it's not available.
        !any_child_references_parent_variable?(name)
      end

      def any_child_references_parent_variable?(name)
        unless child_scopes.nil?
          # this should really check if all descendent scopes see a
          # scope variable before they see a parent refernce

          return false if child_scopes.all? { |s| s.scope_variable?(name) }

          child_scopes.any? do |s|
            s.parent_variable_access?(name) ||
              s.parent_variable?(name) ||
              s.any_child_references_parent_variable?(name)
          end
        end
      end
    end

    class ProcessVariables < Visitor
      include ParseJS::Visitor::ScopeManager

      def self.process(ast)
        new.visit(ast)
      end

      def push_scope_variable(name)
        vars = current_scope.scope_variables ||= Set.new
        vars << name
      end

      def push_parent_variable(name)
        vars = current_scope.parent_variables ||= Set.new
        vars << name
      end

      def push_variable_access(name)
        vars = current_scope.variable_access ||= Set.new
        vars << name
      end

      def possible_variable_access(var)
        push_variable_access var.val if var && var.type?("Identifier")
      end

      def possible_variable_access_array(arr)
        arr.each { |arg| possible_variable_access arg }
      end

      def visit_VariableDeclarator(decl)
        push_scope_variable decl.id.val
        possible_variable_access decl.init

        super
      end

      def visit_MemberExpression(expr)
        possible_variable_access expr.object

        super
      end

      def visit_CallExpression(expr)
        possible_variable_access expr.callee
        possible_variable_access_array expr.args

        super
      end

      def visit_NewExpression(expr)
        possible_variable_access expr.callee
        possible_variable_access_array expr.args if expr.args

        super
      end

      def visit_ArrayExpression(expr)
        possible_variable_access_array expr.elements

        super
      end

      def visit_AssignmentExpression(expr)
        if expr.left.type?("Identifier")
          push_parent_variable expr.left.val
        end

        possible_variable_access expr.right

        super
      end

      def visit_Property(prop)
        possible_variable_access prop.value

        super
      end

      def visit_SequenceExpression(expr)
        possible_variable_access_array expr.expressions

        super
      end

      def visit_UpdateExpression(expr)
        possible_variable_access expr.argument

        super
      end

      def visit_UnaryExpression(expr)
        possible_variable_access expr.argument

        super
      end

      def visit_BinaryExpression(expr)
        possible_variable_access expr.left
        possible_variable_access expr.right

        super
      end

      def visit_ConditionalExpression(expr)
        possible_variable_access expr.alternate
        possible_variable_access expr.consequent
        possible_variable_access expr.test

        super
      end
    end
  end
end
