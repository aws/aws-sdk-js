require "parsejs/visitor"
require "json"

module ParseJS
  require "pp"

  class Stringifier < Visitor
    def self.to_string(ast)
      stringifier = new(ast)
      yield stringifier if block_given?
      stringifier.to_string
    end

    attr_accessor :include_comments

    def initialize(ast)
      @ast = ast
      @indent = 0
      @include_comments = false
    end

    def accept(node)
      return "" if node.nil?

      nl = @newline

      out = if node.cuddly?
        " " << super
      elsif @newline
        @newline = false
        current_indent << super
      else
        super
      end

      out << newline if node.needs_newline? && needs_newline?(out)

      out
    end

    def indent
      @indent += 1
    end

    def outdent
      @indent -= 1
    end

    def current_indent
      "  " * @indent
    end

    def newline
      @newline = true
      "\n"
    end

    def cuddle(node, out, more=false)
      if node.cuddly?
        node.cuddle! if more
      else
        indent
        out << newline
      end

      out << accept(node)

      if more && node.cuddly?
        out << " "
        @newline = false
      end

      unless node.cuddly?
        outdent
        out << current_indent if more
      end
    end

    def without_newline
      old, @skip_newline = @skip_newline, true
      ret = yield
      @skip_newline = old
      ret
    end

    def needs_newline?(out)
      out !~ /\n$/ && !@skip_newline
    end

    def strip_newline(str)
      @newline = false
      str.sub(/\n$/, '')
    end

    def to_string
      accept @ast
    end

    def params(node)
      map(node).join(", ")
    end

    def each(node)
      node.each { |element| accept(element) }
    end

    def visit_Program(program)
      map(program.elements).join("")
    end

    def visit_ExpressionStatement(statement)
      accept(statement.expression) + ";"
    end

    def visit_SequenceExpression(expression)
      out = ""
      out << "(" if expression.parens
      exprs = params(expression.expressions)
      exprs = strip_newline(exprs) if expression.parens
      out << exprs
      out << ")" if expression.parens
      out
    end

    def visit_Literal(literal)
      case val = literal.val
      when nil
        "null"
      when ParseJS::AST::Node
        accept val
      else
        val.inspect
      end
    end

    def visit_String(string)
      string.quote + super + string.quote
    end

    def visit_RegExp(regex)
      "/#{super.join("/")}"
    end

    def visit_DebuggerStatement(expr)
      "#{super};"
    end

    def visit_UnaryExpression(unary)
      op, argument = super
      space = op =~ /\w/ ? sp : ""
      "#{op}#{space}#{argument}"
    end

    def visit_AssignmentExpression(expr)
      left, op, right = super
      "#{left} #{op} #{right}"
    end

    def visit_CallExpression(expr)
      out = strip_newline(accept(expr.callee))
      args = params(expr.args)
      args = strip_newline(args)
      out << "(" + args + ")"
    end

    def visit_ArrayExpression(expr)

      "[" + begin

        last, out = expr.elements.size - 1, ""
        expr.elements.each_with_index do |element, i|
          if element.nil?
            out << ","
            out << " " unless i == last
          else
            out << accept(element)
            out << ", " unless i == last
          end
        end
        out

      end + "]"
    end

    def visit_ObjectExpression(expr)
      if expr.properties.length > 2
        out = "{" << newline
        indent

        last = expr.properties.size - 1
        expr.properties.each_with_index do |prop, i|
          out << strip_newline(accept(prop))
          out << "," unless last == i
          out << newline
        end

        outdent
        out << current_indent << "}"
      else
        "{#{params(expr.properties)}}"
      end
    end

    def visit_Property(property)
      comments, key, value = super

      "#{comments.join}#{key}: #{value}"
    end

    def visit_CommentedStatement(statement)
      comments, statement = super
      "#{comments.join}#{statement}"
    end

    def visit_MemberExpression(expr)
      left = strip_newline(accept(expr.object))
      right = accept(expr.property)

      if expr.computed
        "#{left}[#{right}]"
      else
        "#{left}.#{right}"
      end
    end

    def visit_NewExpression(expr)
      callee, args = super

      left = "new #{callee}"
      arg_string = "(#{args.join(", ")})" if args
      return "#{left}#{arg_string}"
    end

    def visit_BinaryExpression(expr)
      left = strip_newline(accept(expr.left))
      right = accept(expr.right)

      "#{left} #{expr.op} #{right}"
    end

    def visit_BlockStatement(statement)
      out = "{" << newline
      indent
      out << super.join
      outdent
      out << current_indent << "}"
      @newline = false unless statement.cuddly
      out
    end

    def visit_IfStatement(statement)
      consequent = statement.consequent
      alternate = statement.alternate

      out = "if (" + accept(statement.test) + ")"

      cuddle(consequent, out, alternate)

      if alternate
        out << "else"
        cuddle(alternate, out, false)
      end

      out
    end

    def visit_WhileStatement(statement)
      test = statement.test
      body = statement.body

      out = "while (" + accept(test) + ")"
      cuddle(body, out, false)
      out
    end

    def visit_DoWhileStatement(statement)
      out = "do"
      cuddle(statement.body, out, true)
      out << "while (" + accept(statement.test) + ");"
    end

    def visit_ForStatement(statement)
      init = statement.init
      test = statement.test
      update = statement.update
      body = statement.body
      out = ""

      without_newline do
        out << "for (" + accept(init) + ";"
        test = accept(test)
        out << " #{test}" unless test.empty?
        out << ";"
        update = accept(update)
        out << " #{update}" unless update.empty?
        out << ")"
      end

      cuddle(body, out, false)
      out
    end

    def visit_VariableDeclaration(decl)
      kind, declarations, semicolon = super
      "#{kind} #{declarations.join(", ")}#{";" if semicolon}"
    end

    def visit_VariableDeclarator(decl)
      id, init = super

      out = id
      out << (init ? " = #{init}" : "")
    end

    def visit_UpdateExpression(expr)
      op, prefix, argument = super

      op += " " if op =~ /\w/

      if prefix
        "#{op}#{argument}"
      else
        "#{argument}#{op}"
      end
    end

    def visit_ForInStatement(statement)
      left = statement.left
      right = statement.right
      body = statement.body

      out = ""

      without_newline do
        out << "for (" + accept(left) + " in " + accept(right) + ")"
      end

      cuddle(body, out, false)
      out
    end

    def visit_SwitchStatement(statement)
      out = ""

      without_newline do
        out << "switch (" + accept(statement.discriminant) + ") {" << newline
        indent
      end

      out << map(statement.cases).join
      outdent
      out << current_indent << "}" << newline
    end

    def visit_SwitchCase(switch)
      if switch.test
        out = "case #{accept(switch.test)}:" << newline
      else
        out = "default:" << newline
      end

      indent
      out << map(switch.consequent).join
      outdent
      out
    end

    def visit_ThrowStatement(statement)
      "throw #{super};"
    end

    def visit_TryStatement(statement)
      handler = statement.handler
      finalizer = statement.finalizer

      out = "try"

      cuddle(statement.block, out, handler || finalizer)

      if handler
        out << "catch (" + accept(handler.param) + ")"
        cuddle(handler.body, out, finalizer)
      end

      if finalizer
        out << "finally"
        cuddle(finalizer, out, false)
      end

      out
    end

    def visit_FunctionDeclaration(decl)
      id = decl.id
      parameters = decl.params.list
      body = decl.body

      out = "function " + accept(id) + "("
      out << params(parameters)
      out << ") {" << newline

      indent
      out << map(decl.body).join
      outdent
      out << current_indent << "}"
    end

    def labeled(name, label)
      out = name
      out << " #{label}" if label
      out << ";"
    end

    def visit_ReturnStatement(statement)
      labeled("return", super)
    end

    def visit_BreakStatement(statement)
      labeled("break", super)
    end

    def visit_ContinueStatement(statement)
      labeled("continue", super)
    end

    def visit_ConditionalExpression(expr)
      out = strip_newline(accept(expr.test))
      out << " ? " << strip_newline(accept(expr.consequent))
      out << " : " << accept(expr.alternate)
    end

    def visit_Comment(comment)
      return "" unless include_comments
      if comment.type == 'singleline'
        "//" + comment.body + newline
      else
        body = comment.body.split("\n")
        first = body.shift
        out = "/*" + first + newline + body.map { |s| "#{current_indent}#{s}" }.join(newline) + "*/"
        out << "\n" if comment.newline
        out
      end
    end

  private
    def sp
      " "
    end
  end
end
