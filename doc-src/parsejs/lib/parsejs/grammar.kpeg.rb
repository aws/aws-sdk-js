require 'kpeg/compiled_parser'

class ParseJS::Parser < KPeg::CompiledParser


  def initialize(string)
    super
    @benchmark = true
  end



  module ::ParseJS::AST
    class Node; end
    class ArrayExpression < Node
      def initialize(elements)
        @elements = elements
      end
      attr_reader :elements
    end
    class ArrayPattern < Node
      def initialize(elements)
        @elements = elements
      end
      attr_reader :elements
    end
    class AssignmentExpression < Node
      def initialize(op, left, right)
        @op = op
        @left = left
        @right = right
      end
      attr_reader :op
      attr_reader :left
      attr_reader :right
    end
    class BinaryExpression < Node
      def initialize(op, left, right)
        @op = op
        @left = left
        @right = right
      end
      attr_reader :op
      attr_reader :left
      attr_reader :right
    end
    class BlockStatement < Node
      def initialize(statements)
        @statements = statements
      end
      attr_reader :statements
    end
    class BreakStatement < Node
      def initialize(label)
        @label = label
      end
      attr_reader :label
    end
    class CallExpression < Node
      def initialize(callee, args)
        @callee = callee
        @args = args
      end
      attr_reader :callee
      attr_reader :args
    end
    class CatchClause < Node
      def initialize(param, body)
        @param = param
        @body = body
      end
      attr_reader :param
      attr_reader :body
    end
    class Comment < Node
      def initialize(body, type, newline)
        @body = body
        @type = type
        @newline = newline
      end
      attr_reader :body
      attr_reader :type
      attr_reader :newline
    end
    class CommentedStatement < Node
      def initialize(statement, comments)
        @statement = statement
        @comments = comments
      end
      attr_reader :statement
      attr_reader :comments
    end
    class ConditionalExpression < Node
      def initialize(test, consequent, alternate)
        @test = test
        @consequent = consequent
        @alternate = alternate
      end
      attr_reader :test
      attr_reader :consequent
      attr_reader :alternate
    end
    class ContinueStatement < Node
      def initialize(label)
        @label = label
      end
      attr_reader :label
    end
    class DebuggerStatement < Node
      def initialize()
      end
    end
    class DoWhileStatement < Node
      def initialize(body, test)
        @body = body
        @test = test
      end
      attr_reader :body
      attr_reader :test
    end
    class EmptyStatement < Node
      def initialize()
      end
    end
    class ExpressionStatement < Node
      def initialize(expression)
        @expression = expression
      end
      attr_reader :expression
    end
    class ForInStatement < Node
      def initialize(left, right, body, type)
        @left = left
        @right = right
        @body = body
        @type = type
      end
      attr_reader :left
      attr_reader :right
      attr_reader :body
      attr_reader :type
    end
    class ForStatement < Node
      def initialize(init, test, update, body)
        @init = init
        @test = test
        @update = update
        @body = body
      end
      attr_reader :init
      attr_reader :test
      attr_reader :update
      attr_reader :body
    end
    class FunctionDeclaration < Node
      def initialize(id, params, body)
        @id = id
        @params = params
        @body = body
      end
      attr_reader :id
      attr_reader :params
      attr_reader :body
    end
    class FunctionExpression < Node
      def initialize(id, params, body)
        @id = id
        @params = params
        @body = body
      end
      attr_reader :id
      attr_reader :params
      attr_reader :body
    end
    class Identifier < Node
      def initialize(val)
        @val = val
      end
      attr_reader :val
    end
    class IfStatement < Node
      def initialize(test, consequent, alternate)
        @test = test
        @consequent = consequent
        @alternate = alternate
      end
      attr_reader :test
      attr_reader :consequent
      attr_reader :alternate
    end
    class LabeledStatement < Node
      def initialize(label, body)
        @label = label
        @body = body
      end
      attr_reader :label
      attr_reader :body
    end
    class Literal < Node
      def initialize(val)
        @val = val
      end
      attr_reader :val
    end
    class LogicalExpression < Node
      def initialize(op, left, right)
        @op = op
        @left = left
        @right = right
      end
      attr_reader :op
      attr_reader :left
      attr_reader :right
    end
    class MemberExpression < Node
      def initialize(object, property, computed)
        @object = object
        @property = property
        @computed = computed
      end
      attr_reader :object
      attr_reader :property
      attr_reader :computed
    end
    class NewExpression < Node
      def initialize(callee, args)
        @callee = callee
        @args = args
      end
      attr_reader :callee
      attr_reader :args
    end
    class Number < Node
      def initialize(val)
        @val = val
      end
      attr_reader :val
    end
    class ObjectExpression < Node
      def initialize(properties)
        @properties = properties
      end
      attr_reader :properties
    end
    class ObjectPattern < Node
      def initialize(properties)
        @properties = properties
      end
      attr_reader :properties
    end
    class ParameterList < Node
      def initialize(list)
        @list = list
      end
      attr_reader :list
    end
    class Program < Node
      def initialize(elements)
        @elements = elements
      end
      attr_reader :elements
    end
    class Property < Node
      def initialize(key, value, kind, comments)
        @key = key
        @value = value
        @kind = kind
        @comments = comments
      end
      attr_reader :key
      attr_reader :value
      attr_reader :kind
      attr_reader :comments
    end
    class RegExp < Node
      def initialize(body, flags)
        @body = body
        @flags = flags
      end
      attr_reader :body
      attr_reader :flags
    end
    class ReturnStatement < Node
      def initialize(label)
        @label = label
      end
      attr_reader :label
    end
    class SequenceExpression < Node
      def initialize(expressions)
        @expressions = expressions
      end
      attr_reader :expressions
    end
    class Spread < Node
      def initialize(name)
        @name = name
      end
      attr_reader :name
    end
    class String < Node
      def initialize(val, quote)
        @val = val
        @quote = quote
      end
      attr_reader :val
      attr_reader :quote
    end
    class SwitchCase < Node
      def initialize(test, consequent)
        @test = test
        @consequent = consequent
      end
      attr_reader :test
      attr_reader :consequent
    end
    class SwitchStatement < Node
      def initialize(discriminant, cases)
        @discriminant = discriminant
        @cases = cases
      end
      attr_reader :discriminant
      attr_reader :cases
    end
    class ThisExpression < Node
      def initialize()
      end
    end
    class ThrowStatement < Node
      def initialize(argument)
        @argument = argument
      end
      attr_reader :argument
    end
    class TryStatement < Node
      def initialize(block, handler, finalizer)
        @block = block
        @handler = handler
        @finalizer = finalizer
      end
      attr_reader :block
      attr_reader :handler
      attr_reader :finalizer
    end
    class UnaryExpression < Node
      def initialize(op, argument)
        @op = op
        @argument = argument
      end
      attr_reader :op
      attr_reader :argument
    end
    class UpdateExpression < Node
      def initialize(op, argument, prefix)
        @op = op
        @argument = argument
        @prefix = prefix
      end
      attr_reader :op
      attr_reader :argument
      attr_reader :prefix
    end
    class VariableDeclaration < Node
      def initialize(kind, declarations, semicolon)
        @kind = kind
        @declarations = declarations
        @semicolon = semicolon
      end
      attr_reader :kind
      attr_reader :declarations
      attr_reader :semicolon
    end
    class VariableDeclarator < Node
      def initialize(id, init)
        @id = id
        @init = init
      end
      attr_reader :id
      attr_reader :init
    end
    class WhileStatement < Node
      def initialize(test, body)
        @test = test
        @body = body
      end
      attr_reader :test
      attr_reader :body
    end
    class WithStatement < Node
      def initialize(object, body)
        @object = object
        @body = body
      end
      attr_reader :object
      attr_reader :body
    end
  end
  def array_expression(elements)
    ::ParseJS::AST::ArrayExpression.new(elements)
  end
  def array_pattern(elements)
    ::ParseJS::AST::ArrayPattern.new(elements)
  end
  def assignment_expression(op, left, right)
    ::ParseJS::AST::AssignmentExpression.new(op, left, right)
  end
  def binary_expression(op, left, right)
    ::ParseJS::AST::BinaryExpression.new(op, left, right)
  end
  def block_statement(statements)
    ::ParseJS::AST::BlockStatement.new(statements)
  end
  def break_statement(label)
    ::ParseJS::AST::BreakStatement.new(label)
  end
  def call_expression(callee, args)
    ::ParseJS::AST::CallExpression.new(callee, args)
  end
  def catch_clause(param, body)
    ::ParseJS::AST::CatchClause.new(param, body)
  end
  def comment(body, type, newline)
    ::ParseJS::AST::Comment.new(body, type, newline)
  end
  def commented_statement(statement, comments)
    ::ParseJS::AST::CommentedStatement.new(statement, comments)
  end
  def conditional_expression(test, consequent, alternate)
    ::ParseJS::AST::ConditionalExpression.new(test, consequent, alternate)
  end
  def continue_statement(label)
    ::ParseJS::AST::ContinueStatement.new(label)
  end
  def debugger_statement()
    ::ParseJS::AST::DebuggerStatement.new()
  end
  def do_while_statement(body, test)
    ::ParseJS::AST::DoWhileStatement.new(body, test)
  end
  def empty_statement()
    ::ParseJS::AST::EmptyStatement.new()
  end
  def expression_statement(expression)
    ::ParseJS::AST::ExpressionStatement.new(expression)
  end
  def for_in_statement(left, right, body, type)
    ::ParseJS::AST::ForInStatement.new(left, right, body, type)
  end
  def for_statement(init, test, update, body)
    ::ParseJS::AST::ForStatement.new(init, test, update, body)
  end
  def function_declaration(id, params, body)
    ::ParseJS::AST::FunctionDeclaration.new(id, params, body)
  end
  def function_expression(id, params, body)
    ::ParseJS::AST::FunctionExpression.new(id, params, body)
  end
  def identifier(val)
    ::ParseJS::AST::Identifier.new(val)
  end
  def if_statement(test, consequent, alternate)
    ::ParseJS::AST::IfStatement.new(test, consequent, alternate)
  end
  def labeled_statement(label, body)
    ::ParseJS::AST::LabeledStatement.new(label, body)
  end
  def literal(val)
    ::ParseJS::AST::Literal.new(val)
  end
  def logical_expression(op, left, right)
    ::ParseJS::AST::LogicalExpression.new(op, left, right)
  end
  def member_expression(object, property, computed)
    ::ParseJS::AST::MemberExpression.new(object, property, computed)
  end
  def new_expression(callee, args)
    ::ParseJS::AST::NewExpression.new(callee, args)
  end
  def number(val)
    ::ParseJS::AST::Number.new(val)
  end
  def object_expression(properties)
    ::ParseJS::AST::ObjectExpression.new(properties)
  end
  def object_pattern(properties)
    ::ParseJS::AST::ObjectPattern.new(properties)
  end
  def parameter_list(list)
    ::ParseJS::AST::ParameterList.new(list)
  end
  def program(elements)
    ::ParseJS::AST::Program.new(elements)
  end
  def property(key, value, kind, comments)
    ::ParseJS::AST::Property.new(key, value, kind, comments)
  end
  def regexp(body, flags)
    ::ParseJS::AST::RegExp.new(body, flags)
  end
  def return_statement(label)
    ::ParseJS::AST::ReturnStatement.new(label)
  end
  def sequence_expression(expressions)
    ::ParseJS::AST::SequenceExpression.new(expressions)
  end
  def spread(name)
    ::ParseJS::AST::Spread.new(name)
  end
  def string_literal(val, quote)
    ::ParseJS::AST::String.new(val, quote)
  end
  def switch_case(test, consequent)
    ::ParseJS::AST::SwitchCase.new(test, consequent)
  end
  def switch_statement(discriminant, cases)
    ::ParseJS::AST::SwitchStatement.new(discriminant, cases)
  end
  def this_expression()
    ::ParseJS::AST::ThisExpression.new()
  end
  def throw_statement(argument)
    ::ParseJS::AST::ThrowStatement.new(argument)
  end
  def try_statement(block, handler, finalizer)
    ::ParseJS::AST::TryStatement.new(block, handler, finalizer)
  end
  def unary_expression(op, argument)
    ::ParseJS::AST::UnaryExpression.new(op, argument)
  end
  def update_expression(op, argument, prefix)
    ::ParseJS::AST::UpdateExpression.new(op, argument, prefix)
  end
  def variable_declaration(kind, declarations, semicolon)
    ::ParseJS::AST::VariableDeclaration.new(kind, declarations, semicolon)
  end
  def variable_declarator(id, init)
    ::ParseJS::AST::VariableDeclarator.new(id, init)
  end
  def while_statement(test, body)
    ::ParseJS::AST::WhileStatement.new(test, body)
  end
  def with_statement(object, body)
    ::ParseJS::AST::WithStatement.new(object, body)
  end

  # S = (WhiteSpace | LineTerminatorSequence { nil } | Comment)
  def _S

    _save = self.pos
    while true # choice
      _tmp = apply(:_WhiteSpace)
      break if _tmp
      self.pos = _save

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_LineTerminatorSequence)
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin;  nil ; end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_Comment)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_S unless _tmp
    return _tmp
  end

  # - = S*:spaces { spaces.compact }
  def __hyphen_

    _save = self.pos
    while true # sequence
      _ary = []
      while true
        _tmp = apply(:_S)
        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      spaces = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  spaces.compact ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :__hyphen_ unless _tmp
    return _tmp
  end

  # SnoComment = (WhiteSpace | LineTerminatorSequence) { nil }
  def _SnoComment

    _save = self.pos
    while true # sequence

      _save1 = self.pos
      while true # choice
        _tmp = apply(:_WhiteSpace)
        break if _tmp
        self.pos = _save1
        _tmp = apply(:_LineTerminatorSequence)
        break if _tmp
        self.pos = _save1
        break
      end # end choice

      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  nil ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_SnoComment unless _tmp
    return _tmp
  end

  # SnoLB = (WhiteSpace | SingleLineComment | MultiLineCommentNoLB)+
  def _SnoLB
    _save = self.pos

    _save1 = self.pos
    while true # choice
      _tmp = apply(:_WhiteSpace)
      break if _tmp
      self.pos = _save1
      _tmp = apply(:_SingleLineComment)
      break if _tmp
      self.pos = _save1
      _tmp = apply(:_MultiLineCommentNoLB)
      break if _tmp
      self.pos = _save1
      break
    end # end choice

    if _tmp
      while true

        _save2 = self.pos
        while true # choice
          _tmp = apply(:_WhiteSpace)
          break if _tmp
          self.pos = _save2
          _tmp = apply(:_SingleLineComment)
          break if _tmp
          self.pos = _save2
          _tmp = apply(:_MultiLineCommentNoLB)
          break if _tmp
          self.pos = _save2
          break
        end # end choice

        break unless _tmp
      end
      _tmp = true
    else
      self.pos = _save
    end
    set_failed_rule :_SnoLB unless _tmp
    return _tmp
  end

  # WhiteSpace = /[\t\v\f ]+/ { nil }
  def _WhiteSpace

    _save = self.pos
    while true # sequence
      _tmp = scan(/\A(?-mix:[\t\v\f ]+)/)
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  nil ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_WhiteSpace unless _tmp
    return _tmp
  end

  # LF = "\n"
  def _LF
    _tmp = match_string("\n")
    set_failed_rule :_LF unless _tmp
    return _tmp
  end

  # CR = ""
  def _CR
    _tmp = match_string("\r")
    set_failed_rule :_CR unless _tmp
    return _tmp
  end

  # LineTerminator = /[\n\r]+/
  def _LineTerminator
    _tmp = scan(/\A(?-mix:[\n\r]+)/)
    set_failed_rule :_LineTerminator unless _tmp
    return _tmp
  end

  # LineTerminatorSequence = < /\n|\r\n|\r/ > { text }
  def _LineTerminatorSequence

    _save = self.pos
    while true # sequence
      _text_start = self.pos
      _tmp = scan(/\A(?-mix:\n|\r\n|\r)/)
      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  text ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_LineTerminatorSequence unless _tmp
    return _tmp
  end

  # Comment = (MultiLineComment | SingleLineComment)
  def _Comment

    _save = self.pos
    while true # choice
      _tmp = apply(:_MultiLineComment)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_SingleLineComment)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_Comment unless _tmp
    return _tmp
  end

  # MultiLineCommentNoLB = "/*" < (!"*/" SourceCharacter)* > "*/" {comment(text, 'multiline', nil)}
  def _MultiLineCommentNoLB

    _save = self.pos
    while true # sequence
      _tmp = match_string("/*")
      unless _tmp
        self.pos = _save
        break
      end
      _text_start = self.pos
      while true

        _save2 = self.pos
        while true # sequence
          _save3 = self.pos
          _tmp = match_string("*/")
          _tmp = _tmp ? nil : true
          self.pos = _save3
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:_SourceCharacter)
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        break unless _tmp
      end
      _tmp = true
      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("*/")
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; comment(text, 'multiline', nil); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_MultiLineCommentNoLB unless _tmp
    return _tmp
  end

  # MultiLineComment = ("/*" < (!"*/" SourceCharacter)* > "*/" LineTerminatorSequence:lf {comment(text, 'multiline', lf)} | MultiLineCommentNoLB)
  def _MultiLineComment

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = match_string("/*")
        unless _tmp
          self.pos = _save1
          break
        end
        _text_start = self.pos
        while true

          _save3 = self.pos
          while true # sequence
            _save4 = self.pos
            _tmp = match_string("*/")
            _tmp = _tmp ? nil : true
            self.pos = _save4
            unless _tmp
              self.pos = _save3
              break
            end
            _tmp = apply(:_SourceCharacter)
            unless _tmp
              self.pos = _save3
            end
            break
          end # end sequence

          break unless _tmp
        end
        _tmp = true
        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("*/")
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_LineTerminatorSequence)
        lf = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; comment(text, 'multiline', lf); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_MultiLineCommentNoLB)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_MultiLineComment unless _tmp
    return _tmp
  end

  # SingleLineComment = "//" < /[^\n\r]*/ > {comment(text, 'singleline', nil)}
  def _SingleLineComment

    _save = self.pos
    while true # sequence
      _tmp = match_string("//")
      unless _tmp
        self.pos = _save
        break
      end
      _text_start = self.pos
      _tmp = scan(/\A(?-mix:[^\n\r]*)/)
      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; comment(text, 'singleline', nil); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_SingleLineComment unless _tmp
    return _tmp
  end

  # SourceCharacter = /[\x00-\xff]/n
  def _SourceCharacter
    _tmp = scan(/\A(?-mix:[\x00-\xff])/n)
    set_failed_rule :_SourceCharacter unless _tmp
    return _tmp
  end

  # EOS = (- ";" | SnoLB? LineTerminatorSequence | SnoLB? &"}" | - EOF)
  def _EOS

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string(";")
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save2 = self.pos
      while true # sequence
        _save3 = self.pos
        _tmp = apply(:_SnoLB)
        unless _tmp
          _tmp = true
          self.pos = _save3
        end
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:_LineTerminatorSequence)
        unless _tmp
          self.pos = _save2
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save4 = self.pos
      while true # sequence
        _save5 = self.pos
        _tmp = apply(:_SnoLB)
        unless _tmp
          _tmp = true
          self.pos = _save5
        end
        unless _tmp
          self.pos = _save4
          break
        end
        _save6 = self.pos
        _tmp = match_string("}")
        self.pos = _save6
        unless _tmp
          self.pos = _save4
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save7 = self.pos
      while true # sequence
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save7
          break
        end
        _tmp = apply(:_EOF)
        unless _tmp
          self.pos = _save7
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_EOS unless _tmp
    return _tmp
  end

  # EOSnoLB = (SnoLB? ";" | SnoLB? LineTerminatorSequence | SnoLB? &"}" | SnoLB? EOF)
  def _EOSnoLB

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _save2 = self.pos
        _tmp = apply(:_SnoLB)
        unless _tmp
          _tmp = true
          self.pos = _save2
        end
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string(";")
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save3 = self.pos
      while true # sequence
        _save4 = self.pos
        _tmp = apply(:_SnoLB)
        unless _tmp
          _tmp = true
          self.pos = _save4
        end
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:_LineTerminatorSequence)
        unless _tmp
          self.pos = _save3
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save5 = self.pos
      while true # sequence
        _save6 = self.pos
        _tmp = apply(:_SnoLB)
        unless _tmp
          _tmp = true
          self.pos = _save6
        end
        unless _tmp
          self.pos = _save5
          break
        end
        _save7 = self.pos
        _tmp = match_string("}")
        self.pos = _save7
        unless _tmp
          self.pos = _save5
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save8 = self.pos
      while true # sequence
        _save9 = self.pos
        _tmp = apply(:_SnoLB)
        unless _tmp
          _tmp = true
          self.pos = _save9
        end
        unless _tmp
          self.pos = _save8
          break
        end
        _tmp = apply(:_EOF)
        unless _tmp
          self.pos = _save8
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_EOSnoLB unless _tmp
    return _tmp
  end

  # EOF = !SourceCharacter
  def _EOF
    _save = self.pos
    _tmp = apply(:_SourceCharacter)
    _tmp = _tmp ? nil : true
    self.pos = _save
    set_failed_rule :_EOF unless _tmp
    return _tmp
  end

  # ReservedWord = (Keyword | FutureReservedWord | "null" | "true" | "false") !IdentifierPart
  def _ReservedWord

    _save = self.pos
    while true # sequence

      _save1 = self.pos
      while true # choice
        _tmp = apply(:_Keyword)
        break if _tmp
        self.pos = _save1
        _tmp = apply(:_FutureReservedWord)
        break if _tmp
        self.pos = _save1
        _tmp = match_string("null")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("true")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("false")
        break if _tmp
        self.pos = _save1
        break
      end # end choice

      unless _tmp
        self.pos = _save
        break
      end
      _save2 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save2
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ReservedWord unless _tmp
    return _tmp
  end

  # Keyword = /break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|instanceof|in|new|return|switch|this|throw|try|typeof|var|void|while|with/
  def _Keyword
    _tmp = scan(/\A(?-mix:break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|instanceof|in|new|return|switch|this|throw|try|typeof|var|void|while|with)/)
    set_failed_rule :_Keyword unless _tmp
    return _tmp
  end

  # FutureReservedWord = /abstract|boolean|byte|char|class|const|double|enum|export|extends|final|float|goto|implements|import|interface|int|long|native|package|private|protected|public|short|static|super|synchronized|throws|transient|volatile/
  def _FutureReservedWord
    _tmp = scan(/\A(?-mix:abstract|boolean|byte|char|class|const|double|enum|export|extends|final|float|goto|implements|import|interface|int|long|native|package|private|protected|public|short|static|super|synchronized|throws|transient|volatile)/)
    set_failed_rule :_FutureReservedWord unless _tmp
    return _tmp
  end

  # Identifier = !ReservedWord IdentifierName:name {identifier(name)}
  def _Identifier

    _save = self.pos
    while true # sequence
      _save1 = self.pos
      _tmp = apply(:_ReservedWord)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_IdentifierName)
      name = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; identifier(name); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_Identifier unless _tmp
    return _tmp
  end

  # IdentifierName = < IdentifierStart IdentifierPart* > { text }
  def _IdentifierName

    _save = self.pos
    while true # sequence
      _text_start = self.pos

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_IdentifierStart)
        unless _tmp
          self.pos = _save1
          break
        end
        while true
          _tmp = apply(:_IdentifierPart)
          break unless _tmp
        end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  text ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_IdentifierName unless _tmp
    return _tmp
  end

  # IdentifierStart = (/[A-Za-z]/ | "$" | "_")
  def _IdentifierStart

    _save = self.pos
    while true # choice
      _tmp = scan(/\A(?-mix:[A-Za-z])/)
      break if _tmp
      self.pos = _save
      _tmp = match_string("$")
      break if _tmp
      self.pos = _save
      _tmp = match_string("_")
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_IdentifierStart unless _tmp
    return _tmp
  end

  # IdentifierPart = (IdentifierStart | /[0-9]/)
  def _IdentifierPart

    _save = self.pos
    while true # choice
      _tmp = apply(:_IdentifierStart)
      break if _tmp
      self.pos = _save
      _tmp = scan(/\A(?-mix:[0-9])/)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_IdentifierPart unless _tmp
    return _tmp
  end

  # HexDigit = /[0-9a-fA-F]/
  def _HexDigit
    _tmp = scan(/\A(?-mix:[0-9a-fA-F])/)
    set_failed_rule :_HexDigit unless _tmp
    return _tmp
  end

  # FalseTok = "false" !IdentifierPart
  def _FalseTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("false")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_FalseTok unless _tmp
    return _tmp
  end

  # TrueTok = "true" !IdentifierPart
  def _TrueTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("true")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_TrueTok unless _tmp
    return _tmp
  end

  # NullTok = "null" !IdentifierPart
  def _NullTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("null")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_NullTok unless _tmp
    return _tmp
  end

  # BreakTok = "break" !IdentifierPart
  def _BreakTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("break")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_BreakTok unless _tmp
    return _tmp
  end

  # ContinueTok = "continue" !IdentifierPart
  def _ContinueTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("continue")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ContinueTok unless _tmp
    return _tmp
  end

  # DebuggerTok = "debugger" !IdentifierPart
  def _DebuggerTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("debugger")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_DebuggerTok unless _tmp
    return _tmp
  end

  # InTok = "in" !IdentifierPart
  def _InTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("in")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_InTok unless _tmp
    return _tmp
  end

  # InstanceOfTok = "instanceof" !IdentifierPart
  def _InstanceOfTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("instanceof")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_InstanceOfTok unless _tmp
    return _tmp
  end

  # DeleteTok = "delete" !IdentifierPart
  def _DeleteTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("delete")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_DeleteTok unless _tmp
    return _tmp
  end

  # FunctionTok = "function" !IdentifierPart
  def _FunctionTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("function")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_FunctionTok unless _tmp
    return _tmp
  end

  # NewTok = "new" !IdentifierPart
  def _NewTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("new")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_NewTok unless _tmp
    return _tmp
  end

  # ThisTok = "this" !IdentifierPart
  def _ThisTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("this")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ThisTok unless _tmp
    return _tmp
  end

  # TypeofTok = "typeof" !IdentifierPart
  def _TypeofTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("typeof")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_TypeofTok unless _tmp
    return _tmp
  end

  # VoidTok = "void" !IdentifierPart
  def _VoidTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("void")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_VoidTok unless _tmp
    return _tmp
  end

  # IfTok = "if" !IdentifierPart
  def _IfTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("if")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_IfTok unless _tmp
    return _tmp
  end

  # ElseTok = "else" !IdentifierPart
  def _ElseTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("else")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ElseTok unless _tmp
    return _tmp
  end

  # DoTok = "do" !IdentifierPart
  def _DoTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("do")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_DoTok unless _tmp
    return _tmp
  end

  # WhileTok = "while" !IdentifierPart
  def _WhileTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("while")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_WhileTok unless _tmp
    return _tmp
  end

  # ForTok = "for" !IdentifierPart
  def _ForTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("for")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ForTok unless _tmp
    return _tmp
  end

  # VarTok = "var" !IdentifierPart
  def _VarTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("var")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_VarTok unless _tmp
    return _tmp
  end

  # ReturnTok = "return" !IdentifierPart
  def _ReturnTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("return")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ReturnTok unless _tmp
    return _tmp
  end

  # CaseTok = "case" !IdentifierPart
  def _CaseTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("case")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_CaseTok unless _tmp
    return _tmp
  end

  # DefaultTok = "default" !IdentifierPart
  def _DefaultTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("default")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_DefaultTok unless _tmp
    return _tmp
  end

  # SwitchTok = "switch" !IdentifierPart
  def _SwitchTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("switch")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_SwitchTok unless _tmp
    return _tmp
  end

  # ThrowTok = "throw" !IdentifierPart
  def _ThrowTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("throw")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ThrowTok unless _tmp
    return _tmp
  end

  # CatchTok = "catch" !IdentifierPart
  def _CatchTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("catch")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_CatchTok unless _tmp
    return _tmp
  end

  # FinallyTok = "finally" !IdentifierPart
  def _FinallyTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("finally")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_FinallyTok unless _tmp
    return _tmp
  end

  # TryTok = "try" !IdentifierPart
  def _TryTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("try")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_TryTok unless _tmp
    return _tmp
  end

  # WithTok = "with" !IdentifierPart
  def _WithTok

    _save = self.pos
    while true # sequence
      _tmp = match_string("with")
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_IdentifierPart)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_WithTok unless _tmp
    return _tmp
  end

  # root = Program:p { p }
  def _root

    _save = self.pos
    while true # sequence
      _tmp = apply(:_Program)
      p = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  p ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_root unless _tmp
    return _tmp
  end

  # Program = CommentedStatement*:s - {program(s)}
  def _Program

    _save = self.pos
    while true # sequence
      _ary = []
      while true
        _tmp = apply(:_CommentedStatement)
        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      s = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; program(s); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_Program unless _tmp
    return _tmp
  end

  # FunctionBody = CommentedStatement*:statements - { statements }
  def _FunctionBody

    _save = self.pos
    while true # sequence
      _ary = []
      while true
        _tmp = apply(:_CommentedStatement)
        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      statements = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  statements ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_FunctionBody unless _tmp
    return _tmp
  end

  # FunctionDeclaration = FunctionTok - Identifier:id - "(" - FormalParameterList?:params - ")" - "{" SnoComment* FunctionBody:body - "}" {function_declaration(id, params || parameter_list([]), body)}
  def _FunctionDeclaration

    _save = self.pos
    while true # sequence
      _tmp = apply(:_FunctionTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Identifier)
      id = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_FormalParameterList)
      @result = nil unless _tmp
      unless _tmp
        _tmp = true
        self.pos = _save1
      end
      params = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("{")
      unless _tmp
        self.pos = _save
        break
      end
      while true
        _tmp = apply(:_SnoComment)
        break unless _tmp
      end
      _tmp = true
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_FunctionBody)
      body = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("}")
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; function_declaration(id, params || parameter_list([]), body); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_FunctionDeclaration unless _tmp
    return _tmp
  end

  # FunctionExpression = FunctionTok - Identifier?:id - "(" - FormalParameterList?:params - ")" - "{" SnoComment* FunctionBody:body - "}" {function_expression(id, params || parameter_list([]), body)}
  def _FunctionExpression

    _save = self.pos
    while true # sequence
      _tmp = apply(:_FunctionTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_Identifier)
      @result = nil unless _tmp
      unless _tmp
        _tmp = true
        self.pos = _save1
      end
      id = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _save2 = self.pos
      _tmp = apply(:_FormalParameterList)
      @result = nil unless _tmp
      unless _tmp
        _tmp = true
        self.pos = _save2
      end
      params = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("{")
      unless _tmp
        self.pos = _save
        break
      end
      while true
        _tmp = apply(:_SnoComment)
        break unless _tmp
      end
      _tmp = true
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_FunctionBody)
      body = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("}")
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; function_expression(id, params || parameter_list([]), body); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_FunctionExpression unless _tmp
    return _tmp
  end

  # FormalParameterList = Identifier:id (- "," - Identifier)*:ids {parameter_list([id] + ids)}
  def _FormalParameterList

    _save = self.pos
    while true # sequence
      _tmp = apply(:_Identifier)
      id = @result
      unless _tmp
        self.pos = _save
        break
      end
      _ary = []
      while true

        _save2 = self.pos
        while true # sequence
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = match_string(",")
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:_Identifier)
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      ids = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; parameter_list([id] + ids); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_FormalParameterList unless _tmp
    return _tmp
  end

  # UseStrictDirective = "use" S "strict" S ("," !LineTerminator SourceCharacter)*
  def _UseStrictDirective

    _save = self.pos
    while true # sequence
      _tmp = match_string("use")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_S)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("strict")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_S)
      unless _tmp
        self.pos = _save
        break
      end
      while true

        _save2 = self.pos
        while true # sequence
          _tmp = match_string(",")
          unless _tmp
            self.pos = _save2
            break
          end
          _save3 = self.pos
          _tmp = apply(:_LineTerminator)
          _tmp = _tmp ? nil : true
          self.pos = _save3
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:_SourceCharacter)
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        break unless _tmp
      end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_UseStrictDirective unless _tmp
    return _tmp
  end

  # Statement = (IfStatement | ExpressionStatement | VariableStatement | Block | EmptyStatement | IterationStatement | ContinueStatement | BreakStatement | ReturnStatement | WithStatement | LabeledStatement | SwitchStatement | ThrowStatement | TryStatement | DebuggerStatement | FunctionDeclaration)
  def _Statement

    _save = self.pos
    while true # choice
      _tmp = apply(:_IfStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_ExpressionStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_VariableStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_Block)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_EmptyStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_IterationStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_ContinueStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_BreakStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_ReturnStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_WithStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_LabeledStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_SwitchStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_ThrowStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_TryStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_DebuggerStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_FunctionDeclaration)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_Statement unless _tmp
    return _tmp
  end

  # CommentedStatement = -:comments Statement:s {commented_statement(s, comments)}
  def _CommentedStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:__hyphen_)
      comments = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Statement)
      s = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; commented_statement(s, comments); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_CommentedStatement unless _tmp
    return _tmp
  end

  # Block = "{" CommentedStatement*:statements - "}" {block_statement(statements)}
  def _Block

    _save = self.pos
    while true # sequence
      _tmp = match_string("{")
      unless _tmp
        self.pos = _save
        break
      end
      _ary = []
      while true
        _tmp = apply(:_CommentedStatement)
        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      statements = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("}")
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; block_statement(statements); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_Block unless _tmp
    return _tmp
  end

  # VariableStatement = VarTok - VariableDeclaration:decl (- "," - VariableDeclaration)*:decls EOS {variable_declaration("var", [decl] + decls, true)}
  def _VariableStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:_VarTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_VariableDeclaration)
      decl = @result
      unless _tmp
        self.pos = _save
        break
      end
      _ary = []
      while true

        _save2 = self.pos
        while true # sequence
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = match_string(",")
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:_VariableDeclaration)
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      decls = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_EOS)
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; variable_declaration("var", [decl] + decls, true); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_VariableStatement unless _tmp
    return _tmp
  end

  # VariableDeclaration = Identifier:id (- "=" !"=" - AssignmentExpression:expr)? {variable_declarator(id, expr)}
  def _VariableDeclaration

    _save = self.pos
    while true # sequence
      _tmp = apply(:_Identifier)
      id = @result
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos

      _save2 = self.pos
      while true # sequence
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = match_string("=")
        unless _tmp
          self.pos = _save2
          break
        end
        _save3 = self.pos
        _tmp = match_string("=")
        _tmp = _tmp ? nil : true
        self.pos = _save3
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:_AssignmentExpression)
        expr = @result
        unless _tmp
          self.pos = _save2
        end
        break
      end # end sequence

      unless _tmp
        _tmp = true
        self.pos = _save1
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; variable_declarator(id, expr); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_VariableDeclaration unless _tmp
    return _tmp
  end

  # VariableDeclarationNoIn = Identifier:id (- "=" !"=" - AssignmentExpressionNoIn:expr)? {variable_declarator(id, expr)}
  def _VariableDeclarationNoIn

    _save = self.pos
    while true # sequence
      _tmp = apply(:_Identifier)
      id = @result
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos

      _save2 = self.pos
      while true # sequence
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = match_string("=")
        unless _tmp
          self.pos = _save2
          break
        end
        _save3 = self.pos
        _tmp = match_string("=")
        _tmp = _tmp ? nil : true
        self.pos = _save3
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:_AssignmentExpressionNoIn)
        expr = @result
        unless _tmp
          self.pos = _save2
        end
        break
      end # end sequence

      unless _tmp
        _tmp = true
        self.pos = _save1
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; variable_declarator(id, expr); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_VariableDeclarationNoIn unless _tmp
    return _tmp
  end

  # VariableDeclarationListNoIn = VariableDeclarationNoIn:var (- "," - VariableDeclarationNoIn)*:vars { [var] + vars }
  def _VariableDeclarationListNoIn

    _save = self.pos
    while true # sequence
      _tmp = apply(:_VariableDeclarationNoIn)
      var = @result
      unless _tmp
        self.pos = _save
        break
      end
      _ary = []
      while true

        _save2 = self.pos
        while true # sequence
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = match_string(",")
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:_VariableDeclarationNoIn)
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      vars = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  [var] + vars ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_VariableDeclarationListNoIn unless _tmp
    return _tmp
  end

  # EmptyStatement = ";" {empty_statement()}
  def _EmptyStatement

    _save = self.pos
    while true # sequence
      _tmp = match_string(";")
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; empty_statement(); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_EmptyStatement unless _tmp
    return _tmp
  end

  # ExpressionStatement = !("{" | FunctionTok) Expression:e EOS {expression_statement(e)}
  def _ExpressionStatement

    _save = self.pos
    while true # sequence
      _save1 = self.pos

      _save2 = self.pos
      while true # choice
        _tmp = match_string("{")
        break if _tmp
        self.pos = _save2
        _tmp = apply(:_FunctionTok)
        break if _tmp
        self.pos = _save2
        break
      end # end choice

      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Expression)
      e = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_EOS)
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; expression_statement(e); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ExpressionStatement unless _tmp
    return _tmp
  end

  # IfStatement = IfTok - "(" - Expression:expr - ")" - Statement:stmt1 (- ElseTok - Statement:stmt2)? {if_statement(expr, stmt1, stmt2)}
  def _IfStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:_IfTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Expression)
      expr = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Statement)
      stmt1 = @result
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos

      _save2 = self.pos
      while true # sequence
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:_ElseTok)
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:_Statement)
        stmt2 = @result
        unless _tmp
          self.pos = _save2
        end
        break
      end # end sequence

      unless _tmp
        _tmp = true
        self.pos = _save1
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; if_statement(expr, stmt1, stmt2); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_IfStatement unless _tmp
    return _tmp
  end

  # IterationStatement = (DoWhileStatement | WhileStatement | ForInStatement | ForStatement)
  def _IterationStatement

    _save = self.pos
    while true # choice
      _tmp = apply(:_DoWhileStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_WhileStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_ForInStatement)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_ForStatement)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_IterationStatement unless _tmp
    return _tmp
  end

  # DoWhileStatement = DoTok - Statement:stmt - WhileTok - "(" - Expression:expr - ")" EOS {do_while_statement(stmt, expr)}
  def _DoWhileStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:_DoTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Statement)
      stmt = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_WhileTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Expression)
      expr = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_EOS)
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; do_while_statement(stmt, expr); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_DoWhileStatement unless _tmp
    return _tmp
  end

  # WhileStatement = WhileTok - "(" - Expression:expr - ")" - Statement:stmt {while_statement(expr, stmt)}
  def _WhileStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:_WhileTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Expression)
      expr = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Statement)
      stmt = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; while_statement(expr, stmt); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_WhileStatement unless _tmp
    return _tmp
  end

  # ForInStatement = ForTok - "(" (ForInLeft | ForInVarLeft):left InTok - Expression:right - ")" - Statement:stmt {for_in_statement(left, right, stmt, nil)}
  def _ForInStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:_ForTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end

      _save1 = self.pos
      while true # choice
        _tmp = apply(:_ForInLeft)
        break if _tmp
        self.pos = _save1
        _tmp = apply(:_ForInVarLeft)
        break if _tmp
        self.pos = _save1
        break
      end # end choice

      left = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_InTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Expression)
      right = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Statement)
      stmt = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; for_in_statement(left, right, stmt, nil); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ForInStatement unless _tmp
    return _tmp
  end

  # ForInLeft = - LeftHandSideExpression:expr - { expr }
  def _ForInLeft

    _save = self.pos
    while true # sequence
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_LeftHandSideExpression)
      expr = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  expr ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ForInLeft unless _tmp
    return _tmp
  end

  # ForInVarLeft = - VarTok - VariableDeclarationNoIn:decl - {variable_declaration("var", [decl], false)}
  def _ForInVarLeft

    _save = self.pos
    while true # sequence
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_VarTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_VariableDeclarationNoIn)
      decl = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; variable_declaration("var", [decl], false); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ForInVarLeft unless _tmp
    return _tmp
  end

  # ForStatement = ForTok - "(" - (ForVarInit | ForInit)?:init - ";" - ForTest?:test - ";" - ForUpdate?:update - ")" - Statement:body {for_statement(init, test, update, body)}
  def _ForStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:_ForTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos

      _save2 = self.pos
      while true # choice
        _tmp = apply(:_ForVarInit)
        break if _tmp
        self.pos = _save2
        _tmp = apply(:_ForInit)
        break if _tmp
        self.pos = _save2
        break
      end # end choice

      @result = nil unless _tmp
      unless _tmp
        _tmp = true
        self.pos = _save1
      end
      init = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(";")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _save3 = self.pos
      _tmp = apply(:_ForTest)
      @result = nil unless _tmp
      unless _tmp
        _tmp = true
        self.pos = _save3
      end
      test = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(";")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _save4 = self.pos
      _tmp = apply(:_ForUpdate)
      @result = nil unless _tmp
      unless _tmp
        _tmp = true
        self.pos = _save4
      end
      update = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Statement)
      body = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; for_statement(init, test, update, body); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ForStatement unless _tmp
    return _tmp
  end

  # ForInit = ExpressionNoIn
  def _ForInit
    _tmp = apply(:_ExpressionNoIn)
    set_failed_rule :_ForInit unless _tmp
    return _tmp
  end

  # ForVarInit = VarTok - VariableDeclarationListNoIn:list {variable_declaration("var", list, false)}
  def _ForVarInit

    _save = self.pos
    while true # sequence
      _tmp = apply(:_VarTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_VariableDeclarationListNoIn)
      list = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; variable_declaration("var", list, false); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ForVarInit unless _tmp
    return _tmp
  end

  # ForTest = Expression
  def _ForTest
    _tmp = apply(:_Expression)
    set_failed_rule :_ForTest unless _tmp
    return _tmp
  end

  # ForUpdate = Expression
  def _ForUpdate
    _tmp = apply(:_Expression)
    set_failed_rule :_ForUpdate unless _tmp
    return _tmp
  end

  # ContinueStatement = (ContinueTok SnoLB? Identifier:id EOS {continue_statement(id)} | ContinueTok SnoLB? EOSnoLB {continue_statement(nil)})
  def _ContinueStatement

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_ContinueTok)
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = apply(:_SnoLB)
        unless _tmp
          _tmp = true
          self.pos = _save2
        end
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_Identifier)
        id = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_EOS)
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; continue_statement(id); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save3 = self.pos
      while true # sequence
        _tmp = apply(:_ContinueTok)
        unless _tmp
          self.pos = _save3
          break
        end
        _save4 = self.pos
        _tmp = apply(:_SnoLB)
        unless _tmp
          _tmp = true
          self.pos = _save4
        end
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:_EOSnoLB)
        unless _tmp
          self.pos = _save3
          break
        end
        @result = begin; continue_statement(nil); end
        _tmp = true
        unless _tmp
          self.pos = _save3
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_ContinueStatement unless _tmp
    return _tmp
  end

  # BreakStatement = (BreakTok SnoLB? Identifier:id ROS {break_statement(id)} | BreakTok SnoLB? EOSnoLB {break_statement(nil)})
  def _BreakStatement

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_BreakTok)
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = apply(:_SnoLB)
        unless _tmp
          _tmp = true
          self.pos = _save2
        end
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_Identifier)
        id = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_ROS)
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; break_statement(id); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save3 = self.pos
      while true # sequence
        _tmp = apply(:_BreakTok)
        unless _tmp
          self.pos = _save3
          break
        end
        _save4 = self.pos
        _tmp = apply(:_SnoLB)
        unless _tmp
          _tmp = true
          self.pos = _save4
        end
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:_EOSnoLB)
        unless _tmp
          self.pos = _save3
          break
        end
        @result = begin; break_statement(nil); end
        _tmp = true
        unless _tmp
          self.pos = _save3
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_BreakStatement unless _tmp
    return _tmp
  end

  # ReturnStatement = ReturnTok SnoLB? (EOSnoLB | Expression:expr EOS) {return_statement(expr)}
  def _ReturnStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:_ReturnTok)
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_SnoLB)
      unless _tmp
        _tmp = true
        self.pos = _save1
      end
      unless _tmp
        self.pos = _save
        break
      end

      _save2 = self.pos
      while true # choice
        _tmp = apply(:_EOSnoLB)
        break if _tmp
        self.pos = _save2

        _save3 = self.pos
        while true # sequence
          _tmp = apply(:_Expression)
          expr = @result
          unless _tmp
            self.pos = _save3
            break
          end
          _tmp = apply(:_EOS)
          unless _tmp
            self.pos = _save3
          end
          break
        end # end sequence

        break if _tmp
        self.pos = _save2
        break
      end # end choice

      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; return_statement(expr); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ReturnStatement unless _tmp
    return _tmp
  end

  # WithStatement = WithTok - "(" - Expression:expr - ")" - Statement:statement {with_statement(expr, statement)}
  def _WithStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:_WithTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Expression)
      expr = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Statement)
      statement = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; with_statement(expr, statement); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_WithStatement unless _tmp
    return _tmp
  end

  # LabeledStatement = Identifier:id - ":" - Statement:statement {labeled_statement(id, statement)}
  def _LabeledStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:_Identifier)
      id = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(":")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Statement)
      statement = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; labeled_statement(id, statement); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_LabeledStatement unless _tmp
    return _tmp
  end

  # SwitchStatement = SwitchTok - "(" - Expression:expr - ")" - "{" - CaseClauses:clauses - "}" {switch_statement(expr, clauses)}
  def _SwitchStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:_SwitchTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Expression)
      expr = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("{")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_CaseClauses)
      clauses = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("}")
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; switch_statement(expr, clauses); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_SwitchStatement unless _tmp
    return _tmp
  end

  # CaseClauses = (CaseClause*:clauses - DefaultClause:default - CaseClause*:more_clauses { clauses + [default] + more_clauses } | CaseClause*:clauses - DefaultClause:default { clauses + [default] } | CaseClause*:clauses { clauses })
  def _CaseClauses

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _ary = []
        while true
          _tmp = apply(:_CaseClause)
          _ary << @result if _tmp
          break unless _tmp
        end
        _tmp = true
        @result = _ary
        clauses = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_DefaultClause)
        default = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _ary = []
        while true
          _tmp = apply(:_CaseClause)
          _ary << @result if _tmp
          break unless _tmp
        end
        _tmp = true
        @result = _ary
        more_clauses = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin;  clauses + [default] + more_clauses ; end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save4 = self.pos
      while true # sequence
        _ary = []
        while true
          _tmp = apply(:_CaseClause)
          _ary << @result if _tmp
          break unless _tmp
        end
        _tmp = true
        @result = _ary
        clauses = @result
        unless _tmp
          self.pos = _save4
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save4
          break
        end
        _tmp = apply(:_DefaultClause)
        default = @result
        unless _tmp
          self.pos = _save4
          break
        end
        @result = begin;  clauses + [default] ; end
        _tmp = true
        unless _tmp
          self.pos = _save4
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save6 = self.pos
      while true # sequence
        _ary = []
        while true
          _tmp = apply(:_CaseClause)
          _ary << @result if _tmp
          break unless _tmp
        end
        _tmp = true
        @result = _ary
        clauses = @result
        unless _tmp
          self.pos = _save6
          break
        end
        @result = begin;  clauses ; end
        _tmp = true
        unless _tmp
          self.pos = _save6
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_CaseClauses unless _tmp
    return _tmp
  end

  # CaseClause = - CaseTok - Expression:expr - ":" (- Statement)*:statements {switch_case(expr, statements)}
  def _CaseClause

    _save = self.pos
    while true # sequence
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_CaseTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Expression)
      expr = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(":")
      unless _tmp
        self.pos = _save
        break
      end
      _ary = []
      while true

        _save2 = self.pos
        while true # sequence
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:_Statement)
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      statements = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; switch_case(expr, statements); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_CaseClause unless _tmp
    return _tmp
  end

  # DefaultClause = - DefaultTok:tok - ":" (- Statement)*:statements {switch_case(nil, statements)}
  def _DefaultClause

    _save = self.pos
    while true # sequence
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_DefaultTok)
      tok = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(":")
      unless _tmp
        self.pos = _save
        break
      end
      _ary = []
      while true

        _save2 = self.pos
        while true # sequence
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:_Statement)
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      statements = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; switch_case(nil, statements); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_DefaultClause unless _tmp
    return _tmp
  end

  # ThrowStatement = ThrowTok SnoLB? (EOSnoLB | Expression:expr EOS) {throw_statement(expr)}
  def _ThrowStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:_ThrowTok)
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_SnoLB)
      unless _tmp
        _tmp = true
        self.pos = _save1
      end
      unless _tmp
        self.pos = _save
        break
      end

      _save2 = self.pos
      while true # choice
        _tmp = apply(:_EOSnoLB)
        break if _tmp
        self.pos = _save2

        _save3 = self.pos
        while true # sequence
          _tmp = apply(:_Expression)
          expr = @result
          unless _tmp
            self.pos = _save3
            break
          end
          _tmp = apply(:_EOS)
          unless _tmp
            self.pos = _save3
          end
          break
        end # end sequence

        break if _tmp
        self.pos = _save2
        break
      end # end choice

      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; throw_statement(expr); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ThrowStatement unless _tmp
    return _tmp
  end

  # TryStatement = (TryTok - Block:try - Catch:catch - Finally?:finally {try_statement(try, catch, finally)} | TryTok - Block:try - Finally:finally {try_statement(try, nil, finally)})
  def _TryStatement

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_TryTok)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_Block)
        try = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_Catch)
        catch = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = apply(:_Finally)
        @result = nil unless _tmp
        unless _tmp
          _tmp = true
          self.pos = _save2
        end
        finally = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; try_statement(try, catch, finally); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save3 = self.pos
      while true # sequence
        _tmp = apply(:_TryTok)
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:_Block)
        try = @result
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:_Finally)
        finally = @result
        unless _tmp
          self.pos = _save3
          break
        end
        @result = begin; try_statement(try, nil, finally); end
        _tmp = true
        unless _tmp
          self.pos = _save3
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_TryStatement unless _tmp
    return _tmp
  end

  # Catch = CatchTok - "(" - Identifier:id - ")" - Block:block {catch_clause(id, block)}
  def _Catch

    _save = self.pos
    while true # sequence
      _tmp = apply(:_CatchTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Identifier)
      id = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Block)
      block = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; catch_clause(id, block); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_Catch unless _tmp
    return _tmp
  end

  # Finally = FinallyTok - Block:block { block }
  def _Finally

    _save = self.pos
    while true # sequence
      _tmp = apply(:_FinallyTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Block)
      block = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  block ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_Finally unless _tmp
    return _tmp
  end

  # DebuggerStatement = DebuggerTok - EOS {debugger_statement()}
  def _DebuggerStatement

    _save = self.pos
    while true # sequence
      _tmp = apply(:_DebuggerTok)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_EOS)
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; debugger_statement(); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_DebuggerStatement unless _tmp
    return _tmp
  end

  # Expression = AssignmentExpression:expr (- "," - AssignmentExpression)*:exprs {sequence_expression([expr] + exprs)}
  def _Expression

    _save = self.pos
    while true # sequence
      _tmp = apply(:_AssignmentExpression)
      expr = @result
      unless _tmp
        self.pos = _save
        break
      end
      _ary = []
      while true

        _save2 = self.pos
        while true # sequence
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = match_string(",")
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:_AssignmentExpression)
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      exprs = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; sequence_expression([expr] + exprs); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_Expression unless _tmp
    return _tmp
  end

  # ExpressionNoIn = AssignmentExpressionNoIn:expr (- "," - AssignmentExpressionNoIn)*:exprs {sequence_expression([expr] + exprs)}
  def _ExpressionNoIn

    _save = self.pos
    while true # sequence
      _tmp = apply(:_AssignmentExpressionNoIn)
      expr = @result
      unless _tmp
        self.pos = _save
        break
      end
      _ary = []
      while true

        _save2 = self.pos
        while true # sequence
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = match_string(",")
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:_AssignmentExpressionNoIn)
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      exprs = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; sequence_expression([expr] + exprs); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ExpressionNoIn unless _tmp
    return _tmp
  end

  # AssignmentExpression = (LeftHandSideExpression:left - AssignmentOperator:op - AssignmentExpression:right {assignment_expression(op, left, right)} | ConditionalExpression)
  def _AssignmentExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_LeftHandSideExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_AssignmentOperator)
        op = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_AssignmentExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; assignment_expression(op, left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_ConditionalExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_AssignmentExpression unless _tmp
    return _tmp
  end

  # AssignmentExpressionNoIn = (LeftHandSideExpression:left - AssignmentOperator:op - AssignmentExpressionNoIn:right {assignment_expression(op, left, right)} | ConditionalExpressionNoIn)
  def _AssignmentExpressionNoIn

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_LeftHandSideExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_AssignmentOperator)
        op = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_AssignmentExpressionNoIn)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; assignment_expression(op, left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_ConditionalExpressionNoIn)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_AssignmentExpressionNoIn unless _tmp
    return _tmp
  end

  # AssignmentOperator = < ("=" !"=" | "*=" | "|=" | "%=" | "+=" | "-=" | "<<=" | ">>=" | ">>>=" | "&=" | "^=" | "|=") > { text }
  def _AssignmentOperator

    _save = self.pos
    while true # sequence
      _text_start = self.pos

      _save1 = self.pos
      while true # choice

        _save2 = self.pos
        while true # sequence
          _tmp = match_string("=")
          unless _tmp
            self.pos = _save2
            break
          end
          _save3 = self.pos
          _tmp = match_string("=")
          _tmp = _tmp ? nil : true
          self.pos = _save3
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        break if _tmp
        self.pos = _save1
        _tmp = match_string("*=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("|=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("%=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("+=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("-=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("<<=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string(">>=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string(">>>=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("&=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("^=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("|=")
        break if _tmp
        self.pos = _save1
        break
      end # end choice

      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  text ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_AssignmentOperator unless _tmp
    return _tmp
  end

  # ConditionalExpression = (LogicalOrExpression:left - "?" - AssignmentExpression:middle - ":" - AssignmentExpression:right {conditional_expression(left, middle, right)} | LogicalOrExpression)
  def _ConditionalExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_LogicalOrExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("?")
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_AssignmentExpression)
        middle = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string(":")
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_AssignmentExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; conditional_expression(left, middle, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_LogicalOrExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_ConditionalExpression unless _tmp
    return _tmp
  end

  # ConditionalExpressionNoIn = (LogicalOrExpressionNoIn:left - "?" - AssignmentExpressionNoIn:middle - ":" - AssignmentExpressionNoIn:right {conditional_expression(left, middle, right)} | LogicalOrExpressionNoIn)
  def _ConditionalExpressionNoIn

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_LogicalOrExpressionNoIn)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("?")
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_AssignmentExpressionNoIn)
        middle = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string(":")
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_AssignmentExpressionNoIn)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; conditional_expression(left, middle, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_LogicalOrExpressionNoIn)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_ConditionalExpressionNoIn unless _tmp
    return _tmp
  end

  # LogicalOrExpression = (LogicalOrExpression:left - "||" - LogicalAndExpression:right {logical_expression('||', left, right)} | LogicalAndExpression)
  def _LogicalOrExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_LogicalOrExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("||")
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_LogicalAndExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; logical_expression('||', left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_LogicalAndExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_LogicalOrExpression unless _tmp
    return _tmp
  end

  # LogicalOrExpressionNoIn = (LogicalAndExpressionNoIn:left - "||" - LogicalAndExpressionNoIn:right {logical_expression('||', left, right)} | LogicalAndExpressionNoIn)
  def _LogicalOrExpressionNoIn

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_LogicalAndExpressionNoIn)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("||")
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_LogicalAndExpressionNoIn)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; logical_expression('||', left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_LogicalAndExpressionNoIn)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_LogicalOrExpressionNoIn unless _tmp
    return _tmp
  end

  # LogicalAndExpression = (LogicalAndExpression:left - "&&" - BitwiseOrExpression:right {logical_expression('&&', left, right)} | BitwiseOrExpression)
  def _LogicalAndExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_LogicalAndExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("&&")
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_BitwiseOrExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; logical_expression('&&', left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_BitwiseOrExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_LogicalAndExpression unless _tmp
    return _tmp
  end

  # LogicalAndExpressionNoIn = (LogicalAndExpression:left - "&&" - BitwiseOrExpressionNoIn:right {logical_expression('&&', left, right)} | BitwiseOrExpressionNoIn)
  def _LogicalAndExpressionNoIn

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_LogicalAndExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("&&")
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_BitwiseOrExpressionNoIn)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; logical_expression('&&', left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_BitwiseOrExpressionNoIn)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_LogicalAndExpressionNoIn unless _tmp
    return _tmp
  end

  # BitwiseOrExpression = (BitwiseOrExpression:left - "|" !"=" - BitwiseXOrExpression:right {binary_expression('|', left, right)} | BitwiseXOrExpression)
  def _BitwiseOrExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_BitwiseOrExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("|")
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = match_string("=")
        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_BitwiseXOrExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression('|', left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_BitwiseXOrExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_BitwiseOrExpression unless _tmp
    return _tmp
  end

  # BitwiseOrExpressionNoIn = (BitwiseOrExpressionNoIn:left - "|" !"=" - BitwiseXOrExpressionNoIn:right {binary_expression('|', left, right)} | BitwiseXOrExpressionNoIn)
  def _BitwiseOrExpressionNoIn

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_BitwiseOrExpressionNoIn)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("|")
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = match_string("=")
        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_BitwiseXOrExpressionNoIn)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression('|', left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_BitwiseXOrExpressionNoIn)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_BitwiseOrExpressionNoIn unless _tmp
    return _tmp
  end

  # BitwiseXOrExpression = (BitwiseXOrExpression:left - "^" !"=" - BitwiseAndExpression:right {binary_expression('^', left, right)} | BitwiseAndExpression)
  def _BitwiseXOrExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_BitwiseXOrExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("^")
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = match_string("=")
        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_BitwiseAndExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression('^', left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_BitwiseAndExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_BitwiseXOrExpression unless _tmp
    return _tmp
  end

  # BitwiseXOrExpressionNoIn = (BitwiseXOrExpressionNoIn:left - "^" !"=" - BitwiseAndExpressionNoIn:right {binary_expression('^', left, right)} | BitwiseAndExpressionNoIn)
  def _BitwiseXOrExpressionNoIn

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_BitwiseXOrExpressionNoIn)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("^")
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = match_string("=")
        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_BitwiseAndExpressionNoIn)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression('^', left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_BitwiseAndExpressionNoIn)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_BitwiseXOrExpressionNoIn unless _tmp
    return _tmp
  end

  # BitwiseAndExpression = (BitwiseAndExpression:left - "&" !"=" - EqualityExpression:right {binary_expression('&', left, right)} | EqualityExpression)
  def _BitwiseAndExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_BitwiseAndExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("&")
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = match_string("=")
        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_EqualityExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression('&', left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_EqualityExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_BitwiseAndExpression unless _tmp
    return _tmp
  end

  # BitwiseAndExpressionNoIn = (BitwiseAndExpressionNoIn:left - "&" !"=" - EqualityExpressionNoIn:right {binary_expression('&', left, right)} | EqualityExpressionNoIn)
  def _BitwiseAndExpressionNoIn

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_BitwiseAndExpressionNoIn)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("&")
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = match_string("=")
        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_EqualityExpressionNoIn)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression('&', left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_EqualityExpressionNoIn)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_BitwiseAndExpressionNoIn unless _tmp
    return _tmp
  end

  # EqualityExpression = (EqualityExpression:left - EqualityOp:op - RelationalExpression:right {binary_expression(op, left, right)} | RelationalExpression)
  def _EqualityExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_EqualityExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_EqualityOp)
        op = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_RelationalExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression(op, left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_RelationalExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_EqualityExpression unless _tmp
    return _tmp
  end

  # EqualityExpressionNoIn = (EqualityExpressionNoIn:left - EqualityOp:op - RelationalExpressionNoIn:right {binary_expression(op, left, right)} | RelationalExpressionNoIn)
  def _EqualityExpressionNoIn

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_EqualityExpressionNoIn)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_EqualityOp)
        op = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_RelationalExpressionNoIn)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression(op, left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_RelationalExpressionNoIn)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_EqualityExpressionNoIn unless _tmp
    return _tmp
  end

  # EqualityOp = < ("===" | "!==" | "==" | "!=") > { text }
  def _EqualityOp

    _save = self.pos
    while true # sequence
      _text_start = self.pos

      _save1 = self.pos
      while true # choice
        _tmp = match_string("===")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("!==")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("==")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("!=")
        break if _tmp
        self.pos = _save1
        break
      end # end choice

      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  text ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_EqualityOp unless _tmp
    return _tmp
  end

  # RelationalExpression = (RelationalExpression:left - RelationalOp:op - ShiftExpression:right {binary_expression(op, left, right)} | ShiftExpression:expr)
  def _RelationalExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_RelationalExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_RelationalOp)
        op = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_ShiftExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression(op, left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_ShiftExpression)
      expr = @result
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_RelationalExpression unless _tmp
    return _tmp
  end

  # RelationalExpressionNoIn = (RelationalExpressionNoIn:left - RelationalOpNoIn - ShiftExpression:right {binary_expression(op, left, right)} | ShiftExpression)
  def _RelationalExpressionNoIn

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_RelationalExpressionNoIn)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_RelationalOpNoIn)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_ShiftExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression(op, left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_ShiftExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_RelationalExpressionNoIn unless _tmp
    return _tmp
  end

  # RelationalOp = < ("<=" | ">=" | "<" | ">" | InstanceOfTok | InTok) > { text }
  def _RelationalOp

    _save = self.pos
    while true # sequence
      _text_start = self.pos

      _save1 = self.pos
      while true # choice
        _tmp = match_string("<=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string(">=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("<")
        break if _tmp
        self.pos = _save1
        _tmp = match_string(">")
        break if _tmp
        self.pos = _save1
        _tmp = apply(:_InstanceOfTok)
        break if _tmp
        self.pos = _save1
        _tmp = apply(:_InTok)
        break if _tmp
        self.pos = _save1
        break
      end # end choice

      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  text ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_RelationalOp unless _tmp
    return _tmp
  end

  # RelationalOpNoIn = < ("<=" | ">=" | "<" | ">" | InstanceOfTok) > { text }
  def _RelationalOpNoIn

    _save = self.pos
    while true # sequence
      _text_start = self.pos

      _save1 = self.pos
      while true # choice
        _tmp = match_string("<=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string(">=")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("<")
        break if _tmp
        self.pos = _save1
        _tmp = match_string(">")
        break if _tmp
        self.pos = _save1
        _tmp = apply(:_InstanceOfTok)
        break if _tmp
        self.pos = _save1
        break
      end # end choice

      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  text ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_RelationalOpNoIn unless _tmp
    return _tmp
  end

  # ShiftExpression = (ShiftExpression:left - ShiftOp:op - AdditiveExpression:right {binary_expression(op, left, right)} | AdditiveExpression)
  def _ShiftExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_ShiftExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_ShiftOp)
        op = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_AdditiveExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression(op, left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_AdditiveExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_ShiftExpression unless _tmp
    return _tmp
  end

  # ShiftOp = < ("<<" | ">>>" | ">>") > { text }
  def _ShiftOp

    _save = self.pos
    while true # sequence
      _text_start = self.pos

      _save1 = self.pos
      while true # choice
        _tmp = match_string("<<")
        break if _tmp
        self.pos = _save1
        _tmp = match_string(">>>")
        break if _tmp
        self.pos = _save1
        _tmp = match_string(">>")
        break if _tmp
        self.pos = _save1
        break
      end # end choice

      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  text ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ShiftOp unless _tmp
    return _tmp
  end

  # AdditiveExpression = (AdditiveExpression:left - AdditiveOp:op - MultiplicativeExpression:right {binary_expression(op, left, right)} | MultiplicativeExpression)
  def _AdditiveExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_AdditiveExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_AdditiveOp)
        op = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_MultiplicativeExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression(op, left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_MultiplicativeExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_AdditiveExpression unless _tmp
    return _tmp
  end

  # AdditiveOp = (< "+" > !("+" | "=") { text } | < "-" > !("-" | "=") { text })
  def _AdditiveOp

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _text_start = self.pos
        _tmp = match_string("+")
        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos

        _save3 = self.pos
        while true # choice
          _tmp = match_string("+")
          break if _tmp
          self.pos = _save3
          _tmp = match_string("=")
          break if _tmp
          self.pos = _save3
          break
        end # end choice

        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin;  text ; end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save4 = self.pos
      while true # sequence
        _text_start = self.pos
        _tmp = match_string("-")
        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save4
          break
        end
        _save5 = self.pos

        _save6 = self.pos
        while true # choice
          _tmp = match_string("-")
          break if _tmp
          self.pos = _save6
          _tmp = match_string("=")
          break if _tmp
          self.pos = _save6
          break
        end # end choice

        _tmp = _tmp ? nil : true
        self.pos = _save5
        unless _tmp
          self.pos = _save4
          break
        end
        @result = begin;  text ; end
        _tmp = true
        unless _tmp
          self.pos = _save4
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_AdditiveOp unless _tmp
    return _tmp
  end

  # MultiplicativeExpression = (MultiplicativeExpression:left - MultiplicativeOp:op - UnaryExpression:right {binary_expression(op, left, right)} | UnaryExpression)
  def _MultiplicativeExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_MultiplicativeExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_MultiplicativeOp)
        op = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_UnaryExpression)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; binary_expression(op, left, right); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_UnaryExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_MultiplicativeExpression unless _tmp
    return _tmp
  end

  # MultiplicativeOp = < ("*" | "/" | "%") > !"=" { text }
  def _MultiplicativeOp

    _save = self.pos
    while true # sequence
      _text_start = self.pos

      _save1 = self.pos
      while true # choice
        _tmp = match_string("*")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("/")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("%")
        break if _tmp
        self.pos = _save1
        break
      end # end choice

      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      _save2 = self.pos
      _tmp = match_string("=")
      _tmp = _tmp ? nil : true
      self.pos = _save2
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  text ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_MultiplicativeOp unless _tmp
    return _tmp
  end

  # UnaryExpression = (PostfixExpression | SimpleUnaryExpression)
  def _UnaryExpression

    _save = self.pos
    while true # choice
      _tmp = apply(:_PostfixExpression)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_SimpleUnaryExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_UnaryExpression unless _tmp
    return _tmp
  end

  # SimpleUnaryExpression = UnaryOp:op - UnaryExpression:expr {unary_expression(op, expr)}
  def _SimpleUnaryExpression

    _save = self.pos
    while true # sequence
      _tmp = apply(:_UnaryOp)
      op = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_UnaryExpression)
      expr = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; unary_expression(op, expr); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_SimpleUnaryExpression unless _tmp
    return _tmp
  end

  # UnaryOp = < (DeleteTok | VoidTok | TypeofTok | "++" | "--" | "+" | "-" | "~" | "!") > { text }
  def _UnaryOp

    _save = self.pos
    while true # sequence
      _text_start = self.pos

      _save1 = self.pos
      while true # choice
        _tmp = apply(:_DeleteTok)
        break if _tmp
        self.pos = _save1
        _tmp = apply(:_VoidTok)
        break if _tmp
        self.pos = _save1
        _tmp = apply(:_TypeofTok)
        break if _tmp
        self.pos = _save1
        _tmp = match_string("++")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("--")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("+")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("-")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("~")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("!")
        break if _tmp
        self.pos = _save1
        break
      end # end choice

      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  text ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_UnaryOp unless _tmp
    return _tmp
  end

  # PostfixExpression = (LeftHandSideExpression:argument SnoLB? PostfixOp:op {update_expression(op, argument, false)} | LeftHandSideExpression)
  def _PostfixExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_LeftHandSideExpression)
        argument = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = apply(:_SnoLB)
        unless _tmp
          _tmp = true
          self.pos = _save2
        end
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_PostfixOp)
        op = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; update_expression(op, argument, false); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_LeftHandSideExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_PostfixExpression unless _tmp
    return _tmp
  end

  # PostfixOp = < ("++" | "--") > { text }
  def _PostfixOp

    _save = self.pos
    while true # sequence
      _text_start = self.pos

      _save1 = self.pos
      while true # choice
        _tmp = match_string("++")
        break if _tmp
        self.pos = _save1
        _tmp = match_string("--")
        break if _tmp
        self.pos = _save1
        break
      end # end choice

      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  text ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_PostfixOp unless _tmp
    return _tmp
  end

  # LeftHandSideExpression = (CallExpression | NewExpression)
  def _LeftHandSideExpression

    _save = self.pos
    while true # choice
      _tmp = apply(:_CallExpression)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_NewExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_LeftHandSideExpression unless _tmp
    return _tmp
  end

  # CallExpression = (CallExpression:call - BracketAccessor:expr {member_expression(call, expr, true)} | CallExpression:call - DotAccessor:expr {member_expression(call, expr, false)} | CallExpression:expr - Arguments:arguments {call_expression(expr, arguments)} | MemberExpression:expr - Arguments:arguments {call_expression(expr, arguments)})
  def _CallExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_CallExpression)
        call = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_BracketAccessor)
        expr = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; member_expression(call, expr, true); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save2 = self.pos
      while true # sequence
        _tmp = apply(:_CallExpression)
        call = @result
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:_DotAccessor)
        expr = @result
        unless _tmp
          self.pos = _save2
          break
        end
        @result = begin; member_expression(call, expr, false); end
        _tmp = true
        unless _tmp
          self.pos = _save2
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save3 = self.pos
      while true # sequence
        _tmp = apply(:_CallExpression)
        expr = @result
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:_Arguments)
        arguments = @result
        unless _tmp
          self.pos = _save3
          break
        end
        @result = begin; call_expression(expr, arguments); end
        _tmp = true
        unless _tmp
          self.pos = _save3
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save4 = self.pos
      while true # sequence
        _tmp = apply(:_MemberExpression)
        expr = @result
        unless _tmp
          self.pos = _save4
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save4
          break
        end
        _tmp = apply(:_Arguments)
        arguments = @result
        unless _tmp
          self.pos = _save4
          break
        end
        @result = begin; call_expression(expr, arguments); end
        _tmp = true
        unless _tmp
          self.pos = _save4
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_CallExpression unless _tmp
    return _tmp
  end

  # BracketAccessor = "[" - Expression:expr - "]" { expr }
  def _BracketAccessor

    _save = self.pos
    while true # sequence
      _tmp = match_string("[")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_Expression)
      expr = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("]")
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  expr ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_BracketAccessor unless _tmp
    return _tmp
  end

  # DotAccessor = "." - IdentifierName:id {identifier(id)}
  def _DotAccessor

    _save = self.pos
    while true # sequence
      _tmp = match_string(".")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_IdentifierName)
      id = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; identifier(id); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_DotAccessor unless _tmp
    return _tmp
  end

  # Arguments = "(" - ArgumentList?:args - ")" { args || [] }
  def _Arguments

    _save = self.pos
    while true # sequence
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_ArgumentList)
      @result = nil unless _tmp
      unless _tmp
        _tmp = true
        self.pos = _save1
      end
      args = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  args || [] ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_Arguments unless _tmp
    return _tmp
  end

  # ArgumentList = AssignmentExpression:expr (- "," - AssignmentExpression)*:exprs { [expr] + exprs }
  def _ArgumentList

    _save = self.pos
    while true # sequence
      _tmp = apply(:_AssignmentExpression)
      expr = @result
      unless _tmp
        self.pos = _save
        break
      end
      _ary = []
      while true

        _save2 = self.pos
        while true # sequence
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = match_string(",")
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:_AssignmentExpression)
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      exprs = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  [expr] + exprs ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ArgumentList unless _tmp
    return _tmp
  end

  # NewExpression = (MemberExpression | NewTok - NewExpression:expr {new_expression(expr, nil)})
  def _NewExpression

    _save = self.pos
    while true # choice
      _tmp = apply(:_MemberExpression)
      break if _tmp
      self.pos = _save

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_NewTok)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_NewExpression)
        expr = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; new_expression(expr, nil); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_NewExpression unless _tmp
    return _tmp
  end

  # MemberExpression = (MemberExpression:left - BracketAccessor:right {member_expression(left, right, true)} | MemberExpression:left - DotAccessor:right {member_expression(left, right, false)} | NewTok - MemberExpression:expr - Arguments:arguments {new_expression(expr, arguments)} | PrimaryExpression | FunctionExpression)
  def _MemberExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_MemberExpression)
        left = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_BracketAccessor)
        right = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; member_expression(left, right, true); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save2 = self.pos
      while true # sequence
        _tmp = apply(:_MemberExpression)
        left = @result
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:_DotAccessor)
        right = @result
        unless _tmp
          self.pos = _save2
          break
        end
        @result = begin; member_expression(left, right, false); end
        _tmp = true
        unless _tmp
          self.pos = _save2
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save3 = self.pos
      while true # sequence
        _tmp = apply(:_NewTok)
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:_MemberExpression)
        expr = @result
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:_Arguments)
        arguments = @result
        unless _tmp
          self.pos = _save3
          break
        end
        @result = begin; new_expression(expr, arguments); end
        _tmp = true
        unless _tmp
          self.pos = _save3
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_PrimaryExpression)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_FunctionExpression)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_MemberExpression unless _tmp
    return _tmp
  end

  # PrimaryExpression = (ThisTok {this_expression()} | Identifier | Literal | ArrayLiteral | ObjectLiteral | "(" - Expression:expr - ")" { expr.parens = true; expr })
  def _PrimaryExpression

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_ThisTok)
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; this_expression(); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_Identifier)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_Literal)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_ArrayLiteral)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_ObjectLiteral)
      break if _tmp
      self.pos = _save

      _save2 = self.pos
      while true # sequence
        _tmp = match_string("(")
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:_Expression)
        expr = @result
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save2
          break
        end
        _tmp = match_string(")")
        unless _tmp
          self.pos = _save2
          break
        end
        @result = begin;  expr.parens = true; expr ; end
        _tmp = true
        unless _tmp
          self.pos = _save2
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_PrimaryExpression unless _tmp
    return _tmp
  end

  # ArrayLiteral = ("[" - Elision?:elision - "]" {array_expression(elision || [])} | "[" - ElementList:list - "]" {array_expression(list)} | "[" - ElementList:list - "," - Elision?:elision - "]" {array_expression(list + (elision || []))})
  def _ArrayLiteral

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = match_string("[")
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = apply(:_Elision)
        @result = nil unless _tmp
        unless _tmp
          _tmp = true
          self.pos = _save2
        end
        elision = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string("]")
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; array_expression(elision || []); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save3 = self.pos
      while true # sequence
        _tmp = match_string("[")
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:_ElementList)
        list = @result
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = match_string("]")
        unless _tmp
          self.pos = _save3
          break
        end
        @result = begin; array_expression(list); end
        _tmp = true
        unless _tmp
          self.pos = _save3
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save4 = self.pos
      while true # sequence
        _tmp = match_string("[")
        unless _tmp
          self.pos = _save4
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save4
          break
        end
        _tmp = apply(:_ElementList)
        list = @result
        unless _tmp
          self.pos = _save4
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save4
          break
        end
        _tmp = match_string(",")
        unless _tmp
          self.pos = _save4
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save4
          break
        end
        _save5 = self.pos
        _tmp = apply(:_Elision)
        @result = nil unless _tmp
        unless _tmp
          _tmp = true
          self.pos = _save5
        end
        elision = @result
        unless _tmp
          self.pos = _save4
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save4
          break
        end
        _tmp = match_string("]")
        unless _tmp
          self.pos = _save4
          break
        end
        @result = begin; array_expression(list + (elision || [])); end
        _tmp = true
        unless _tmp
          self.pos = _save4
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_ArrayLiteral unless _tmp
    return _tmp
  end

  # ElementList = (ElementList:list - "," - Elision?:elision - AssignmentExpression:expr { list + (elision || []) + [expr] } | Elision?:elision - AssignmentExpression:expr { (elision || []) + [expr] })
  def _ElementList

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_ElementList)
        list = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string(",")
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = apply(:_Elision)
        @result = nil unless _tmp
        unless _tmp
          _tmp = true
          self.pos = _save2
        end
        elision = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_AssignmentExpression)
        expr = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin;  list + (elision || []) + [expr] ; end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save3 = self.pos
      while true # sequence
        _save4 = self.pos
        _tmp = apply(:_Elision)
        @result = nil unless _tmp
        unless _tmp
          _tmp = true
          self.pos = _save4
        end
        elision = @result
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:_AssignmentExpression)
        expr = @result
        unless _tmp
          self.pos = _save3
          break
        end
        @result = begin;  (elision || []) + [expr] ; end
        _tmp = true
        unless _tmp
          self.pos = _save3
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_ElementList unless _tmp
    return _tmp
  end

  # Elision = (Elision:elision - "," { elision + [nil] } | "," { [nil] })
  def _Elision

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_Elision)
        elision = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string(",")
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin;  elision + [nil] ; end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save2 = self.pos
      while true # sequence
        _tmp = match_string(",")
        unless _tmp
          self.pos = _save2
          break
        end
        @result = begin;  [nil] ; end
        _tmp = true
        unless _tmp
          self.pos = _save2
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_Elision unless _tmp
    return _tmp
  end

  # ObjectLiteral = "{" SnoComment* PropertyNameAndValueList?:list - ","? - "}" {object_expression(list || [])}
  def _ObjectLiteral

    _save = self.pos
    while true # sequence
      _tmp = match_string("{")
      unless _tmp
        self.pos = _save
        break
      end
      while true
        _tmp = apply(:_SnoComment)
        break unless _tmp
      end
      _tmp = true
      unless _tmp
        self.pos = _save
        break
      end
      _save2 = self.pos
      _tmp = apply(:_PropertyNameAndValueList)
      @result = nil unless _tmp
      unless _tmp
        _tmp = true
        self.pos = _save2
      end
      list = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _save3 = self.pos
      _tmp = match_string(",")
      unless _tmp
        _tmp = true
        self.pos = _save3
      end
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("}")
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; object_expression(list || []); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ObjectLiteral unless _tmp
    return _tmp
  end

  # PropertyNameAndValueList = PropertyAssignment:prop (- "," SnoComment* PropertyAssignment)*:props { [prop] + props }
  def _PropertyNameAndValueList

    _save = self.pos
    while true # sequence
      _tmp = apply(:_PropertyAssignment)
      prop = @result
      unless _tmp
        self.pos = _save
        break
      end
      _ary = []
      while true

        _save2 = self.pos
        while true # sequence
          _tmp = apply(:__hyphen_)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = match_string(",")
          unless _tmp
            self.pos = _save2
            break
          end
          while true
            _tmp = apply(:_SnoComment)
            break unless _tmp
          end
          _tmp = true
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = apply(:_PropertyAssignment)
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        _ary << @result if _tmp
        break unless _tmp
      end
      _tmp = true
      @result = _ary
      props = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  [prop] + props ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_PropertyNameAndValueList unless _tmp
    return _tmp
  end

  # PropertyAssignment = (-:comments PropertyName:key - ":" - AssignmentExpression:value {property(key, value, 'init', comments)} | PropertyGetter | PropertySetter)
  def _PropertyAssignment

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:__hyphen_)
        comments = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_PropertyName)
        key = @result
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = match_string(":")
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:__hyphen_)
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_AssignmentExpression)
        value = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; property(key, value, 'init', comments); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_PropertyGetter)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_PropertySetter)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_PropertyAssignment unless _tmp
    return _tmp
  end

  # PropertyGetter = "get" - PropertyName - "(" - ")" - "{" - FunctionBody - "}"
  def _PropertyGetter

    _save = self.pos
    while true # sequence
      _tmp = match_string("get")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_PropertyName)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("{")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_FunctionBody)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("}")
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_PropertyGetter unless _tmp
    return _tmp
  end

  # PropertySetter = "set" - PropertyName - "(" - PropertySetParameterList - ")" - "{" - FunctionBody - "}"
  def _PropertySetter

    _save = self.pos
    while true # sequence
      _tmp = match_string("set")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_PropertyName)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("(")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_PropertySetParameterList)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string(")")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("{")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_FunctionBody)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:__hyphen_)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("}")
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_PropertySetter unless _tmp
    return _tmp
  end

  # PropertyName = (IdentifierName:name {identifier(name)} | StringLiteral | NumericLiteral)
  def _PropertyName

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_IdentifierName)
        name = @result
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; identifier(name); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_StringLiteral)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_NumericLiteral)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_PropertyName unless _tmp
    return _tmp
  end

  # PropertySetParameterList = Identifier
  def _PropertySetParameterList
    _tmp = apply(:_Identifier)
    set_failed_rule :_PropertySetParameterList unless _tmp
    return _tmp
  end

  # Literal = (NullLiteral {literal(nil)} | BooleanLiteral | NumericLiteral:number {literal(number)} | StringLiteral:string {literal(string)} | RegularExpressionLiteral:regex {literal(regex)})
  def _Literal

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_NullLiteral)
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; literal(nil); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_BooleanLiteral)
      break if _tmp
      self.pos = _save

      _save2 = self.pos
      while true # sequence
        _tmp = apply(:_NumericLiteral)
        number = @result
        unless _tmp
          self.pos = _save2
          break
        end
        @result = begin; literal(number); end
        _tmp = true
        unless _tmp
          self.pos = _save2
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save3 = self.pos
      while true # sequence
        _tmp = apply(:_StringLiteral)
        string = @result
        unless _tmp
          self.pos = _save3
          break
        end
        @result = begin; literal(string); end
        _tmp = true
        unless _tmp
          self.pos = _save3
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save4 = self.pos
      while true # sequence
        _tmp = apply(:_RegularExpressionLiteral)
        regex = @result
        unless _tmp
          self.pos = _save4
          break
        end
        @result = begin; literal(regex); end
        _tmp = true
        unless _tmp
          self.pos = _save4
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_Literal unless _tmp
    return _tmp
  end

  # NullLiteral = NullTok
  def _NullLiteral
    _tmp = apply(:_NullTok)
    set_failed_rule :_NullLiteral unless _tmp
    return _tmp
  end

  # BooleanLiteral = (TrueTok {literal(true)} | FalseTok {literal(false)})
  def _BooleanLiteral

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_TrueTok)
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; literal(true); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save2 = self.pos
      while true # sequence
        _tmp = apply(:_FalseTok)
        unless _tmp
          self.pos = _save2
          break
        end
        @result = begin; literal(false); end
        _tmp = true
        unless _tmp
          self.pos = _save2
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_BooleanLiteral unless _tmp
    return _tmp
  end

  # NumericLiteral = < (DecimalLiteral:literal | HexIntegerLiteral:literal) > !IdentifierStart { literal }
  def _NumericLiteral

    _save = self.pos
    while true # sequence
      _text_start = self.pos

      _save1 = self.pos
      while true # choice
        _tmp = apply(:_DecimalLiteral)
        literal = @result
        break if _tmp
        self.pos = _save1
        _tmp = apply(:_HexIntegerLiteral)
        literal = @result
        break if _tmp
        self.pos = _save1
        break
      end # end choice

      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      _save2 = self.pos
      _tmp = apply(:_IdentifierStart)
      _tmp = _tmp ? nil : true
      self.pos = _save2
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  literal ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_NumericLiteral unless _tmp
    return _tmp
  end

  # DecimalLiteral = (< DecimalIntegerLiteral "." DecimalDigit* ExponentPart? > {number(text)} | < "." DecimalDigit+ ExponentPart? > {number(text)} | < DecimalIntegerLiteral ExponentPart? > {number(text)})
  def _DecimalLiteral

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _text_start = self.pos

        _save2 = self.pos
        while true # sequence
          _tmp = apply(:_DecimalIntegerLiteral)
          unless _tmp
            self.pos = _save2
            break
          end
          _tmp = match_string(".")
          unless _tmp
            self.pos = _save2
            break
          end
          while true
            _tmp = apply(:_DecimalDigit)
            break unless _tmp
          end
          _tmp = true
          unless _tmp
            self.pos = _save2
            break
          end
          _save4 = self.pos
          _tmp = apply(:_ExponentPart)
          unless _tmp
            _tmp = true
            self.pos = _save4
          end
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; number(text); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save5 = self.pos
      while true # sequence
        _text_start = self.pos

        _save6 = self.pos
        while true # sequence
          _tmp = match_string(".")
          unless _tmp
            self.pos = _save6
            break
          end
          _save7 = self.pos
          _tmp = apply(:_DecimalDigit)
          if _tmp
            while true
              _tmp = apply(:_DecimalDigit)
              break unless _tmp
            end
            _tmp = true
          else
            self.pos = _save7
          end
          unless _tmp
            self.pos = _save6
            break
          end
          _save8 = self.pos
          _tmp = apply(:_ExponentPart)
          unless _tmp
            _tmp = true
            self.pos = _save8
          end
          unless _tmp
            self.pos = _save6
          end
          break
        end # end sequence

        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save5
          break
        end
        @result = begin; number(text); end
        _tmp = true
        unless _tmp
          self.pos = _save5
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save9 = self.pos
      while true # sequence
        _text_start = self.pos

        _save10 = self.pos
        while true # sequence
          _tmp = apply(:_DecimalIntegerLiteral)
          unless _tmp
            self.pos = _save10
            break
          end
          _save11 = self.pos
          _tmp = apply(:_ExponentPart)
          unless _tmp
            _tmp = true
            self.pos = _save11
          end
          unless _tmp
            self.pos = _save10
          end
          break
        end # end sequence

        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save9
          break
        end
        @result = begin; number(text); end
        _tmp = true
        unless _tmp
          self.pos = _save9
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_DecimalLiteral unless _tmp
    return _tmp
  end

  # DecimalIntegerLiteral = < ("0" | /[1-9]/ DecimalDigit*) > {number(text)}
  def _DecimalIntegerLiteral

    _save = self.pos
    while true # sequence
      _text_start = self.pos

      _save1 = self.pos
      while true # choice
        _tmp = match_string("0")
        break if _tmp
        self.pos = _save1

        _save2 = self.pos
        while true # sequence
          _tmp = scan(/\A(?-mix:[1-9])/)
          unless _tmp
            self.pos = _save2
            break
          end
          while true
            _tmp = apply(:_DecimalDigit)
            break unless _tmp
          end
          _tmp = true
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        break if _tmp
        self.pos = _save1
        break
      end # end choice

      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; number(text); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_DecimalIntegerLiteral unless _tmp
    return _tmp
  end

  # HexIntegerLiteral = (< "0x" HexDigit+ > {number(text)} | < "0X" HexDigit+ > {number(text)})
  def _HexIntegerLiteral

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _text_start = self.pos

        _save2 = self.pos
        while true # sequence
          _tmp = match_string("0x")
          unless _tmp
            self.pos = _save2
            break
          end
          _save3 = self.pos
          _tmp = apply(:_HexDigit)
          if _tmp
            while true
              _tmp = apply(:_HexDigit)
              break unless _tmp
            end
            _tmp = true
          else
            self.pos = _save3
          end
          unless _tmp
            self.pos = _save2
          end
          break
        end # end sequence

        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; number(text); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save4 = self.pos
      while true # sequence
        _text_start = self.pos

        _save5 = self.pos
        while true # sequence
          _tmp = match_string("0X")
          unless _tmp
            self.pos = _save5
            break
          end
          _save6 = self.pos
          _tmp = apply(:_HexDigit)
          if _tmp
            while true
              _tmp = apply(:_HexDigit)
              break unless _tmp
            end
            _tmp = true
          else
            self.pos = _save6
          end
          unless _tmp
            self.pos = _save5
          end
          break
        end # end sequence

        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save4
          break
        end
        @result = begin; number(text); end
        _tmp = true
        unless _tmp
          self.pos = _save4
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_HexIntegerLiteral unless _tmp
    return _tmp
  end

  # DecimalDigit = /[0-9]/
  def _DecimalDigit
    _tmp = scan(/\A(?-mix:[0-9])/)
    set_failed_rule :_DecimalDigit unless _tmp
    return _tmp
  end

  # ExponentPart = /[eE]/ SignedInteger
  def _ExponentPart

    _save = self.pos
    while true # sequence
      _tmp = scan(/\A(?-mix:[eE])/)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_SignedInteger)
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_ExponentPart unless _tmp
    return _tmp
  end

  # SignedInteger = (DecimalDigit+ | "+" DecimalDigit+ | "-" DecimalDigit+)
  def _SignedInteger

    _save = self.pos
    while true # choice
      _save1 = self.pos
      _tmp = apply(:_DecimalDigit)
      if _tmp
        while true
          _tmp = apply(:_DecimalDigit)
          break unless _tmp
        end
        _tmp = true
      else
        self.pos = _save1
      end
      break if _tmp
      self.pos = _save

      _save2 = self.pos
      while true # sequence
        _tmp = match_string("+")
        unless _tmp
          self.pos = _save2
          break
        end
        _save3 = self.pos
        _tmp = apply(:_DecimalDigit)
        if _tmp
          while true
            _tmp = apply(:_DecimalDigit)
            break unless _tmp
          end
          _tmp = true
        else
          self.pos = _save3
        end
        unless _tmp
          self.pos = _save2
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save4 = self.pos
      while true # sequence
        _tmp = match_string("-")
        unless _tmp
          self.pos = _save4
          break
        end
        _save5 = self.pos
        _tmp = apply(:_DecimalDigit)
        if _tmp
          while true
            _tmp = apply(:_DecimalDigit)
            break unless _tmp
          end
          _tmp = true
        else
          self.pos = _save5
        end
        unless _tmp
          self.pos = _save4
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_SignedInteger unless _tmp
    return _tmp
  end

  # DQ = "\""
  def _DQ
    _tmp = match_string("\"")
    set_failed_rule :_DQ unless _tmp
    return _tmp
  end

  # SQ = "'"
  def _SQ
    _tmp = match_string("'")
    set_failed_rule :_SQ unless _tmp
    return _tmp
  end

  # StringLiteral = (DQ < DoubleStringCharacter* > DQ {string_literal(text, '"')} | SQ < SingleStringCharacter* > SQ {string_literal(text, "'")})
  def _StringLiteral

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_DQ)
        unless _tmp
          self.pos = _save1
          break
        end
        _text_start = self.pos
        while true
          _tmp = apply(:_DoubleStringCharacter)
          break unless _tmp
        end
        _tmp = true
        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_DQ)
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin; string_literal(text, '"'); end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save3 = self.pos
      while true # sequence
        _tmp = apply(:_SQ)
        unless _tmp
          self.pos = _save3
          break
        end
        _text_start = self.pos
        while true
          _tmp = apply(:_SingleStringCharacter)
          break unless _tmp
        end
        _tmp = true
        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save3
          break
        end
        _tmp = apply(:_SQ)
        unless _tmp
          self.pos = _save3
          break
        end
        @result = begin; string_literal(text, "'"); end
        _tmp = true
        unless _tmp
          self.pos = _save3
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_StringLiteral unless _tmp
    return _tmp
  end

  # RS = "\\"
  def _RS
    _tmp = match_string("\\")
    set_failed_rule :_RS unless _tmp
    return _tmp
  end

  # DoubleStringCharacter = (!(DQ | RS | LineTerminator) < SourceCharacter > { text } | < RS EscapeSequence > { text } | LineContinuation)
  def _DoubleStringCharacter

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _save2 = self.pos

        _save3 = self.pos
        while true # choice
          _tmp = apply(:_DQ)
          break if _tmp
          self.pos = _save3
          _tmp = apply(:_RS)
          break if _tmp
          self.pos = _save3
          _tmp = apply(:_LineTerminator)
          break if _tmp
          self.pos = _save3
          break
        end # end choice

        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
          break
        end
        _text_start = self.pos
        _tmp = apply(:_SourceCharacter)
        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin;  text ; end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save4 = self.pos
      while true # sequence
        _text_start = self.pos

        _save5 = self.pos
        while true # sequence
          _tmp = apply(:_RS)
          unless _tmp
            self.pos = _save5
            break
          end
          _tmp = apply(:_EscapeSequence)
          unless _tmp
            self.pos = _save5
          end
          break
        end # end sequence

        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save4
          break
        end
        @result = begin;  text ; end
        _tmp = true
        unless _tmp
          self.pos = _save4
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_LineContinuation)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_DoubleStringCharacter unless _tmp
    return _tmp
  end

  # SingleStringCharacter = (!(SQ | RS | LineTerminator) < SourceCharacter > { text } | < RS EscapeSequence > { text } | LineContinuation)
  def _SingleStringCharacter

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _save2 = self.pos

        _save3 = self.pos
        while true # choice
          _tmp = apply(:_SQ)
          break if _tmp
          self.pos = _save3
          _tmp = apply(:_RS)
          break if _tmp
          self.pos = _save3
          _tmp = apply(:_LineTerminator)
          break if _tmp
          self.pos = _save3
          break
        end # end choice

        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
          break
        end
        _text_start = self.pos
        _tmp = apply(:_SourceCharacter)
        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save1
          break
        end
        @result = begin;  text ; end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save

      _save4 = self.pos
      while true # sequence
        _text_start = self.pos

        _save5 = self.pos
        while true # sequence
          _tmp = apply(:_RS)
          unless _tmp
            self.pos = _save5
            break
          end
          _tmp = apply(:_EscapeSequence)
          unless _tmp
            self.pos = _save5
          end
          break
        end # end sequence

        if _tmp
          text = get_text(_text_start)
        end
        unless _tmp
          self.pos = _save4
          break
        end
        @result = begin;  text ; end
        _tmp = true
        unless _tmp
          self.pos = _save4
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_LineContinuation)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_SingleStringCharacter unless _tmp
    return _tmp
  end

  # LineContinuation = RS LineTerminatorSequence
  def _LineContinuation

    _save = self.pos
    while true # sequence
      _tmp = apply(:_RS)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_LineTerminatorSequence)
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_LineContinuation unless _tmp
    return _tmp
  end

  # EscapeSequence = (CharacterEscapeSequence | "0" !DecimalDigit | HexEscapeSequence | UnicodeEscapeSequence)
  def _EscapeSequence

    _save = self.pos
    while true # choice
      _tmp = apply(:_CharacterEscapeSequence)
      break if _tmp
      self.pos = _save

      _save1 = self.pos
      while true # sequence
        _tmp = match_string("0")
        unless _tmp
          self.pos = _save1
          break
        end
        _save2 = self.pos
        _tmp = apply(:_DecimalDigit)
        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_HexEscapeSequence)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_UnicodeEscapeSequence)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_EscapeSequence unless _tmp
    return _tmp
  end

  # CharacterEscapeSequence = (SingleEscapeCharacter | NonEscapeCharacter)
  def _CharacterEscapeSequence

    _save = self.pos
    while true # choice
      _tmp = apply(:_SingleEscapeCharacter)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_NonEscapeCharacter)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_CharacterEscapeSequence unless _tmp
    return _tmp
  end

  # SingleEscapeCharacter = /['"\bfnrtv]/
  def _SingleEscapeCharacter
    _tmp = scan(/\A(?-mix:['"\bfnrtv])/)
    set_failed_rule :_SingleEscapeCharacter unless _tmp
    return _tmp
  end

  # NonEscapeCharacter = !(EscapeCharacter | LineTerminator) SourceCharacter
  def _NonEscapeCharacter

    _save = self.pos
    while true # sequence
      _save1 = self.pos

      _save2 = self.pos
      while true # choice
        _tmp = apply(:_EscapeCharacter)
        break if _tmp
        self.pos = _save2
        _tmp = apply(:_LineTerminator)
        break if _tmp
        self.pos = _save2
        break
      end # end choice

      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_SourceCharacter)
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_NonEscapeCharacter unless _tmp
    return _tmp
  end

  # EscapeCharacter = (SingleEscapeCharacter | DecimalDigit | "x" | "u")
  def _EscapeCharacter

    _save = self.pos
    while true # choice
      _tmp = apply(:_SingleEscapeCharacter)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_DecimalDigit)
      break if _tmp
      self.pos = _save
      _tmp = match_string("x")
      break if _tmp
      self.pos = _save
      _tmp = match_string("u")
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_EscapeCharacter unless _tmp
    return _tmp
  end

  # HexEscapeSequence = "x" HexDigit HexDigit
  def _HexEscapeSequence

    _save = self.pos
    while true # sequence
      _tmp = match_string("x")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_HexDigit)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_HexDigit)
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_HexEscapeSequence unless _tmp
    return _tmp
  end

  # UnicodeEscapeSequence = "u" HexDigit HexDigit HexDigit HexDigit
  def _UnicodeEscapeSequence

    _save = self.pos
    while true # sequence
      _tmp = match_string("u")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_HexDigit)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_HexDigit)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_HexDigit)
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_HexDigit)
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_UnicodeEscapeSequence unless _tmp
    return _tmp
  end

  # RegularExpressionLiteral = "/" RegularExpressionBody:body "/" RegularExpressionFlags:flags {regexp(body, flags)}
  def _RegularExpressionLiteral

    _save = self.pos
    while true # sequence
      _tmp = match_string("/")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_RegularExpressionBody)
      body = @result
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("/")
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_RegularExpressionFlags)
      flags = @result
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin; regexp(body, flags); end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_RegularExpressionLiteral unless _tmp
    return _tmp
  end

  # RegularExpressionBody = < RegularExpressionFirstChar RegularExpressionChar* > { text }
  def _RegularExpressionBody

    _save = self.pos
    while true # sequence
      _text_start = self.pos

      _save1 = self.pos
      while true # sequence
        _tmp = apply(:_RegularExpressionFirstChar)
        unless _tmp
          self.pos = _save1
          break
        end
        while true
          _tmp = apply(:_RegularExpressionChar)
          break unless _tmp
        end
        _tmp = true
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  text ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_RegularExpressionBody unless _tmp
    return _tmp
  end

  # RegularExpressionFirstChar = (!(LineTerminator | "*" | "\\" | "/" | "[") SourceCharacter | RegularExpressionBackslashSequence | RegularExpressionClass)
  def _RegularExpressionFirstChar

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _save2 = self.pos

        _save3 = self.pos
        while true # choice
          _tmp = apply(:_LineTerminator)
          break if _tmp
          self.pos = _save3
          _tmp = match_string("*")
          break if _tmp
          self.pos = _save3
          _tmp = match_string("\\")
          break if _tmp
          self.pos = _save3
          _tmp = match_string("/")
          break if _tmp
          self.pos = _save3
          _tmp = match_string("[")
          break if _tmp
          self.pos = _save3
          break
        end # end choice

        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_SourceCharacter)
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_RegularExpressionBackslashSequence)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_RegularExpressionClass)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_RegularExpressionFirstChar unless _tmp
    return _tmp
  end

  # RegularExpressionChar = (!(LineTerminator | "\\" | "/" | "[") SourceCharacter | RegularExpressionBackslashSequence | RegularExpressionClass)
  def _RegularExpressionChar

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _save2 = self.pos

        _save3 = self.pos
        while true # choice
          _tmp = apply(:_LineTerminator)
          break if _tmp
          self.pos = _save3
          _tmp = match_string("\\")
          break if _tmp
          self.pos = _save3
          _tmp = match_string("/")
          break if _tmp
          self.pos = _save3
          _tmp = match_string("[")
          break if _tmp
          self.pos = _save3
          break
        end # end choice

        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_SourceCharacter)
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_RegularExpressionBackslashSequence)
      break if _tmp
      self.pos = _save
      _tmp = apply(:_RegularExpressionClass)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_RegularExpressionChar unless _tmp
    return _tmp
  end

  # RegularExpressionBackslashSequence = RS !LineTerminator SourceCharacter
  def _RegularExpressionBackslashSequence

    _save = self.pos
    while true # sequence
      _tmp = apply(:_RS)
      unless _tmp
        self.pos = _save
        break
      end
      _save1 = self.pos
      _tmp = apply(:_LineTerminator)
      _tmp = _tmp ? nil : true
      self.pos = _save1
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = apply(:_SourceCharacter)
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_RegularExpressionBackslashSequence unless _tmp
    return _tmp
  end

  # RegularExpressionClass = "[" RegularExpressionClassChar* "]"
  def _RegularExpressionClass

    _save = self.pos
    while true # sequence
      _tmp = match_string("[")
      unless _tmp
        self.pos = _save
        break
      end
      while true
        _tmp = apply(:_RegularExpressionClassChar)
        break unless _tmp
      end
      _tmp = true
      unless _tmp
        self.pos = _save
        break
      end
      _tmp = match_string("]")
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_RegularExpressionClass unless _tmp
    return _tmp
  end

  # RegularExpressionClassChar = (!(LineTerminator | "\\" | "]") SourceCharacter | RegularExpressionBackslashSequence)
  def _RegularExpressionClassChar

    _save = self.pos
    while true # choice

      _save1 = self.pos
      while true # sequence
        _save2 = self.pos

        _save3 = self.pos
        while true # choice
          _tmp = apply(:_LineTerminator)
          break if _tmp
          self.pos = _save3
          _tmp = match_string("\\")
          break if _tmp
          self.pos = _save3
          _tmp = match_string("]")
          break if _tmp
          self.pos = _save3
          break
        end # end choice

        _tmp = _tmp ? nil : true
        self.pos = _save2
        unless _tmp
          self.pos = _save1
          break
        end
        _tmp = apply(:_SourceCharacter)
        unless _tmp
          self.pos = _save1
        end
        break
      end # end sequence

      break if _tmp
      self.pos = _save
      _tmp = apply(:_RegularExpressionBackslashSequence)
      break if _tmp
      self.pos = _save
      break
    end # end choice

    set_failed_rule :_RegularExpressionClassChar unless _tmp
    return _tmp
  end

  # RegularExpressionFlags = < IdentifierPart* > { text }
  def _RegularExpressionFlags

    _save = self.pos
    while true # sequence
      _text_start = self.pos
      while true
        _tmp = apply(:_IdentifierPart)
        break unless _tmp
      end
      _tmp = true
      if _tmp
        text = get_text(_text_start)
      end
      unless _tmp
        self.pos = _save
        break
      end
      @result = begin;  text ; end
      _tmp = true
      unless _tmp
        self.pos = _save
      end
      break
    end # end sequence

    set_failed_rule :_RegularExpressionFlags unless _tmp
    return _tmp
  end

  Rules = {}
  Rules[:_S] = rule_info("S", "(WhiteSpace | LineTerminatorSequence { nil } | Comment)")
  Rules[:__hyphen_] = rule_info("-", "S*:spaces { spaces.compact }")
  Rules[:_SnoComment] = rule_info("SnoComment", "(WhiteSpace | LineTerminatorSequence) { nil }")
  Rules[:_SnoLB] = rule_info("SnoLB", "(WhiteSpace | SingleLineComment | MultiLineCommentNoLB)+")
  Rules[:_WhiteSpace] = rule_info("WhiteSpace", "/[\\t\\v\\f ]+/ { nil }")
  Rules[:_LF] = rule_info("LF", "\"\\n\"")
  Rules[:_CR] = rule_info("CR", "\"\"")
  Rules[:_LineTerminator] = rule_info("LineTerminator", "/[\\n\\r]+/")
  Rules[:_LineTerminatorSequence] = rule_info("LineTerminatorSequence", "< /\\n|\\r\\n|\\r/ > { text }")
  Rules[:_Comment] = rule_info("Comment", "(MultiLineComment | SingleLineComment)")
  Rules[:_MultiLineCommentNoLB] = rule_info("MultiLineCommentNoLB", "\"/*\" < (!\"*/\" SourceCharacter)* > \"*/\" {comment(text, 'multiline', nil)}")
  Rules[:_MultiLineComment] = rule_info("MultiLineComment", "(\"/*\" < (!\"*/\" SourceCharacter)* > \"*/\" LineTerminatorSequence:lf {comment(text, 'multiline', lf)} | MultiLineCommentNoLB)")
  Rules[:_SingleLineComment] = rule_info("SingleLineComment", "\"//\" < /[^\\n\\r]*/ > {comment(text, 'singleline', nil)}")
  Rules[:_SourceCharacter] = rule_info("SourceCharacter", "/[\\x00-\\xff]/n")
  Rules[:_EOS] = rule_info("EOS", "(- \";\" | SnoLB? LineTerminatorSequence | SnoLB? &\"}\" | - EOF)")
  Rules[:_EOSnoLB] = rule_info("EOSnoLB", "(SnoLB? \";\" | SnoLB? LineTerminatorSequence | SnoLB? &\"}\" | SnoLB? EOF)")
  Rules[:_EOF] = rule_info("EOF", "!SourceCharacter")
  Rules[:_ReservedWord] = rule_info("ReservedWord", "(Keyword | FutureReservedWord | \"null\" | \"true\" | \"false\") !IdentifierPart")
  Rules[:_Keyword] = rule_info("Keyword", "/break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|instanceof|in|new|return|switch|this|throw|try|typeof|var|void|while|with/")
  Rules[:_FutureReservedWord] = rule_info("FutureReservedWord", "/abstract|boolean|byte|char|class|const|double|enum|export|extends|final|float|goto|implements|import|interface|int|long|native|package|private|protected|public|short|static|super|synchronized|throws|transient|volatile/")
  Rules[:_Identifier] = rule_info("Identifier", "!ReservedWord IdentifierName:name {identifier(name)}")
  Rules[:_IdentifierName] = rule_info("IdentifierName", "< IdentifierStart IdentifierPart* > { text }")
  Rules[:_IdentifierStart] = rule_info("IdentifierStart", "(/[A-Za-z]/ | \"$\" | \"_\")")
  Rules[:_IdentifierPart] = rule_info("IdentifierPart", "(IdentifierStart | /[0-9]/)")
  Rules[:_HexDigit] = rule_info("HexDigit", "/[0-9a-fA-F]/")
  Rules[:_FalseTok] = rule_info("FalseTok", "\"false\" !IdentifierPart")
  Rules[:_TrueTok] = rule_info("TrueTok", "\"true\" !IdentifierPart")
  Rules[:_NullTok] = rule_info("NullTok", "\"null\" !IdentifierPart")
  Rules[:_BreakTok] = rule_info("BreakTok", "\"break\" !IdentifierPart")
  Rules[:_ContinueTok] = rule_info("ContinueTok", "\"continue\" !IdentifierPart")
  Rules[:_DebuggerTok] = rule_info("DebuggerTok", "\"debugger\" !IdentifierPart")
  Rules[:_InTok] = rule_info("InTok", "\"in\" !IdentifierPart")
  Rules[:_InstanceOfTok] = rule_info("InstanceOfTok", "\"instanceof\" !IdentifierPart")
  Rules[:_DeleteTok] = rule_info("DeleteTok", "\"delete\" !IdentifierPart")
  Rules[:_FunctionTok] = rule_info("FunctionTok", "\"function\" !IdentifierPart")
  Rules[:_NewTok] = rule_info("NewTok", "\"new\" !IdentifierPart")
  Rules[:_ThisTok] = rule_info("ThisTok", "\"this\" !IdentifierPart")
  Rules[:_TypeofTok] = rule_info("TypeofTok", "\"typeof\" !IdentifierPart")
  Rules[:_VoidTok] = rule_info("VoidTok", "\"void\" !IdentifierPart")
  Rules[:_IfTok] = rule_info("IfTok", "\"if\" !IdentifierPart")
  Rules[:_ElseTok] = rule_info("ElseTok", "\"else\" !IdentifierPart")
  Rules[:_DoTok] = rule_info("DoTok", "\"do\" !IdentifierPart")
  Rules[:_WhileTok] = rule_info("WhileTok", "\"while\" !IdentifierPart")
  Rules[:_ForTok] = rule_info("ForTok", "\"for\" !IdentifierPart")
  Rules[:_VarTok] = rule_info("VarTok", "\"var\" !IdentifierPart")
  Rules[:_ReturnTok] = rule_info("ReturnTok", "\"return\" !IdentifierPart")
  Rules[:_CaseTok] = rule_info("CaseTok", "\"case\" !IdentifierPart")
  Rules[:_DefaultTok] = rule_info("DefaultTok", "\"default\" !IdentifierPart")
  Rules[:_SwitchTok] = rule_info("SwitchTok", "\"switch\" !IdentifierPart")
  Rules[:_ThrowTok] = rule_info("ThrowTok", "\"throw\" !IdentifierPart")
  Rules[:_CatchTok] = rule_info("CatchTok", "\"catch\" !IdentifierPart")
  Rules[:_FinallyTok] = rule_info("FinallyTok", "\"finally\" !IdentifierPart")
  Rules[:_TryTok] = rule_info("TryTok", "\"try\" !IdentifierPart")
  Rules[:_WithTok] = rule_info("WithTok", "\"with\" !IdentifierPart")
  Rules[:_root] = rule_info("root", "Program:p { p }")
  Rules[:_Program] = rule_info("Program", "CommentedStatement*:s - {program(s)}")
  Rules[:_FunctionBody] = rule_info("FunctionBody", "CommentedStatement*:statements - { statements }")
  Rules[:_FunctionDeclaration] = rule_info("FunctionDeclaration", "FunctionTok - Identifier:id - \"(\" - FormalParameterList?:params - \")\" - \"{\" SnoComment* FunctionBody:body - \"}\" {function_declaration(id, params || parameter_list([]), body)}")
  Rules[:_FunctionExpression] = rule_info("FunctionExpression", "FunctionTok - Identifier?:id - \"(\" - FormalParameterList?:params - \")\" - \"{\" SnoComment* FunctionBody:body - \"}\" {function_expression(id, params || parameter_list([]), body)}")
  Rules[:_FormalParameterList] = rule_info("FormalParameterList", "Identifier:id (- \",\" - Identifier)*:ids {parameter_list([id] + ids)}")
  Rules[:_UseStrictDirective] = rule_info("UseStrictDirective", "\"use\" S \"strict\" S (\",\" !LineTerminator SourceCharacter)*")
  Rules[:_Statement] = rule_info("Statement", "(IfStatement | ExpressionStatement | VariableStatement | Block | EmptyStatement | IterationStatement | ContinueStatement | BreakStatement | ReturnStatement | WithStatement | LabeledStatement | SwitchStatement | ThrowStatement | TryStatement | DebuggerStatement | FunctionDeclaration)")
  Rules[:_CommentedStatement] = rule_info("CommentedStatement", "-:comments Statement:s {commented_statement(s, comments)}")
  Rules[:_Block] = rule_info("Block", "\"{\" CommentedStatement*:statements - \"}\" {block_statement(statements)}")
  Rules[:_VariableStatement] = rule_info("VariableStatement", "VarTok - VariableDeclaration:decl (- \",\" - VariableDeclaration)*:decls EOS {variable_declaration(\"var\", [decl] + decls, true)}")
  Rules[:_VariableDeclaration] = rule_info("VariableDeclaration", "Identifier:id (- \"=\" !\"=\" - AssignmentExpression:expr)? {variable_declarator(id, expr)}")
  Rules[:_VariableDeclarationNoIn] = rule_info("VariableDeclarationNoIn", "Identifier:id (- \"=\" !\"=\" - AssignmentExpressionNoIn:expr)? {variable_declarator(id, expr)}")
  Rules[:_VariableDeclarationListNoIn] = rule_info("VariableDeclarationListNoIn", "VariableDeclarationNoIn:var (- \",\" - VariableDeclarationNoIn)*:vars { [var] + vars }")
  Rules[:_EmptyStatement] = rule_info("EmptyStatement", "\";\" {empty_statement()}")
  Rules[:_ExpressionStatement] = rule_info("ExpressionStatement", "!(\"{\" | FunctionTok) Expression:e EOS {expression_statement(e)}")
  Rules[:_IfStatement] = rule_info("IfStatement", "IfTok - \"(\" - Expression:expr - \")\" - Statement:stmt1 (- ElseTok - Statement:stmt2)? {if_statement(expr, stmt1, stmt2)}")
  Rules[:_IterationStatement] = rule_info("IterationStatement", "(DoWhileStatement | WhileStatement | ForInStatement | ForStatement)")
  Rules[:_DoWhileStatement] = rule_info("DoWhileStatement", "DoTok - Statement:stmt - WhileTok - \"(\" - Expression:expr - \")\" EOS {do_while_statement(stmt, expr)}")
  Rules[:_WhileStatement] = rule_info("WhileStatement", "WhileTok - \"(\" - Expression:expr - \")\" - Statement:stmt {while_statement(expr, stmt)}")
  Rules[:_ForInStatement] = rule_info("ForInStatement", "ForTok - \"(\" (ForInLeft | ForInVarLeft):left InTok - Expression:right - \")\" - Statement:stmt {for_in_statement(left, right, stmt, nil)}")
  Rules[:_ForInLeft] = rule_info("ForInLeft", "- LeftHandSideExpression:expr - { expr }")
  Rules[:_ForInVarLeft] = rule_info("ForInVarLeft", "- VarTok - VariableDeclarationNoIn:decl - {variable_declaration(\"var\", [decl], false)}")
  Rules[:_ForStatement] = rule_info("ForStatement", "ForTok - \"(\" - (ForVarInit | ForInit)?:init - \";\" - ForTest?:test - \";\" - ForUpdate?:update - \")\" - Statement:body {for_statement(init, test, update, body)}")
  Rules[:_ForInit] = rule_info("ForInit", "ExpressionNoIn")
  Rules[:_ForVarInit] = rule_info("ForVarInit", "VarTok - VariableDeclarationListNoIn:list {variable_declaration(\"var\", list, false)}")
  Rules[:_ForTest] = rule_info("ForTest", "Expression")
  Rules[:_ForUpdate] = rule_info("ForUpdate", "Expression")
  Rules[:_ContinueStatement] = rule_info("ContinueStatement", "(ContinueTok SnoLB? Identifier:id EOS {continue_statement(id)} | ContinueTok SnoLB? EOSnoLB {continue_statement(nil)})")
  Rules[:_BreakStatement] = rule_info("BreakStatement", "(BreakTok SnoLB? Identifier:id ROS {break_statement(id)} | BreakTok SnoLB? EOSnoLB {break_statement(nil)})")
  Rules[:_ReturnStatement] = rule_info("ReturnStatement", "ReturnTok SnoLB? (EOSnoLB | Expression:expr EOS) {return_statement(expr)}")
  Rules[:_WithStatement] = rule_info("WithStatement", "WithTok - \"(\" - Expression:expr - \")\" - Statement:statement {with_statement(expr, statement)}")
  Rules[:_LabeledStatement] = rule_info("LabeledStatement", "Identifier:id - \":\" - Statement:statement {labeled_statement(id, statement)}")
  Rules[:_SwitchStatement] = rule_info("SwitchStatement", "SwitchTok - \"(\" - Expression:expr - \")\" - \"{\" - CaseClauses:clauses - \"}\" {switch_statement(expr, clauses)}")
  Rules[:_CaseClauses] = rule_info("CaseClauses", "(CaseClause*:clauses - DefaultClause:default - CaseClause*:more_clauses { clauses + [default] + more_clauses } | CaseClause*:clauses - DefaultClause:default { clauses + [default] } | CaseClause*:clauses { clauses })")
  Rules[:_CaseClause] = rule_info("CaseClause", "- CaseTok - Expression:expr - \":\" (- Statement)*:statements {switch_case(expr, statements)}")
  Rules[:_DefaultClause] = rule_info("DefaultClause", "- DefaultTok:tok - \":\" (- Statement)*:statements {switch_case(nil, statements)}")
  Rules[:_ThrowStatement] = rule_info("ThrowStatement", "ThrowTok SnoLB? (EOSnoLB | Expression:expr EOS) {throw_statement(expr)}")
  Rules[:_TryStatement] = rule_info("TryStatement", "(TryTok - Block:try - Catch:catch - Finally?:finally {try_statement(try, catch, finally)} | TryTok - Block:try - Finally:finally {try_statement(try, nil, finally)})")
  Rules[:_Catch] = rule_info("Catch", "CatchTok - \"(\" - Identifier:id - \")\" - Block:block {catch_clause(id, block)}")
  Rules[:_Finally] = rule_info("Finally", "FinallyTok - Block:block { block }")
  Rules[:_DebuggerStatement] = rule_info("DebuggerStatement", "DebuggerTok - EOS {debugger_statement()}")
  Rules[:_Expression] = rule_info("Expression", "AssignmentExpression:expr (- \",\" - AssignmentExpression)*:exprs {sequence_expression([expr] + exprs)}")
  Rules[:_ExpressionNoIn] = rule_info("ExpressionNoIn", "AssignmentExpressionNoIn:expr (- \",\" - AssignmentExpressionNoIn)*:exprs {sequence_expression([expr] + exprs)}")
  Rules[:_AssignmentExpression] = rule_info("AssignmentExpression", "(LeftHandSideExpression:left - AssignmentOperator:op - AssignmentExpression:right {assignment_expression(op, left, right)} | ConditionalExpression)")
  Rules[:_AssignmentExpressionNoIn] = rule_info("AssignmentExpressionNoIn", "(LeftHandSideExpression:left - AssignmentOperator:op - AssignmentExpressionNoIn:right {assignment_expression(op, left, right)} | ConditionalExpressionNoIn)")
  Rules[:_AssignmentOperator] = rule_info("AssignmentOperator", "< (\"=\" !\"=\" | \"*=\" | \"|=\" | \"%=\" | \"+=\" | \"-=\" | \"<<=\" | \">>=\" | \">>>=\" | \"&=\" | \"^=\" | \"|=\") > { text }")
  Rules[:_ConditionalExpression] = rule_info("ConditionalExpression", "(LogicalOrExpression:left - \"?\" - AssignmentExpression:middle - \":\" - AssignmentExpression:right {conditional_expression(left, middle, right)} | LogicalOrExpression)")
  Rules[:_ConditionalExpressionNoIn] = rule_info("ConditionalExpressionNoIn", "(LogicalOrExpressionNoIn:left - \"?\" - AssignmentExpressionNoIn:middle - \":\" - AssignmentExpressionNoIn:right {conditional_expression(left, middle, right)} | LogicalOrExpressionNoIn)")
  Rules[:_LogicalOrExpression] = rule_info("LogicalOrExpression", "(LogicalOrExpression:left - \"||\" - LogicalAndExpression:right {logical_expression('||', left, right)} | LogicalAndExpression)")
  Rules[:_LogicalOrExpressionNoIn] = rule_info("LogicalOrExpressionNoIn", "(LogicalAndExpressionNoIn:left - \"||\" - LogicalAndExpressionNoIn:right {logical_expression('||', left, right)} | LogicalAndExpressionNoIn)")
  Rules[:_LogicalAndExpression] = rule_info("LogicalAndExpression", "(LogicalAndExpression:left - \"&&\" - BitwiseOrExpression:right {logical_expression('&&', left, right)} | BitwiseOrExpression)")
  Rules[:_LogicalAndExpressionNoIn] = rule_info("LogicalAndExpressionNoIn", "(LogicalAndExpression:left - \"&&\" - BitwiseOrExpressionNoIn:right {logical_expression('&&', left, right)} | BitwiseOrExpressionNoIn)")
  Rules[:_BitwiseOrExpression] = rule_info("BitwiseOrExpression", "(BitwiseOrExpression:left - \"|\" !\"=\" - BitwiseXOrExpression:right {binary_expression('|', left, right)} | BitwiseXOrExpression)")
  Rules[:_BitwiseOrExpressionNoIn] = rule_info("BitwiseOrExpressionNoIn", "(BitwiseOrExpressionNoIn:left - \"|\" !\"=\" - BitwiseXOrExpressionNoIn:right {binary_expression('|', left, right)} | BitwiseXOrExpressionNoIn)")
  Rules[:_BitwiseXOrExpression] = rule_info("BitwiseXOrExpression", "(BitwiseXOrExpression:left - \"^\" !\"=\" - BitwiseAndExpression:right {binary_expression('^', left, right)} | BitwiseAndExpression)")
  Rules[:_BitwiseXOrExpressionNoIn] = rule_info("BitwiseXOrExpressionNoIn", "(BitwiseXOrExpressionNoIn:left - \"^\" !\"=\" - BitwiseAndExpressionNoIn:right {binary_expression('^', left, right)} | BitwiseAndExpressionNoIn)")
  Rules[:_BitwiseAndExpression] = rule_info("BitwiseAndExpression", "(BitwiseAndExpression:left - \"&\" !\"=\" - EqualityExpression:right {binary_expression('&', left, right)} | EqualityExpression)")
  Rules[:_BitwiseAndExpressionNoIn] = rule_info("BitwiseAndExpressionNoIn", "(BitwiseAndExpressionNoIn:left - \"&\" !\"=\" - EqualityExpressionNoIn:right {binary_expression('&', left, right)} | EqualityExpressionNoIn)")
  Rules[:_EqualityExpression] = rule_info("EqualityExpression", "(EqualityExpression:left - EqualityOp:op - RelationalExpression:right {binary_expression(op, left, right)} | RelationalExpression)")
  Rules[:_EqualityExpressionNoIn] = rule_info("EqualityExpressionNoIn", "(EqualityExpressionNoIn:left - EqualityOp:op - RelationalExpressionNoIn:right {binary_expression(op, left, right)} | RelationalExpressionNoIn)")
  Rules[:_EqualityOp] = rule_info("EqualityOp", "< (\"===\" | \"!==\" | \"==\" | \"!=\") > { text }")
  Rules[:_RelationalExpression] = rule_info("RelationalExpression", "(RelationalExpression:left - RelationalOp:op - ShiftExpression:right {binary_expression(op, left, right)} | ShiftExpression:expr)")
  Rules[:_RelationalExpressionNoIn] = rule_info("RelationalExpressionNoIn", "(RelationalExpressionNoIn:left - RelationalOpNoIn - ShiftExpression:right {binary_expression(op, left, right)} | ShiftExpression)")
  Rules[:_RelationalOp] = rule_info("RelationalOp", "< (\"<=\" | \">=\" | \"<\" | \">\" | InstanceOfTok | InTok) > { text }")
  Rules[:_RelationalOpNoIn] = rule_info("RelationalOpNoIn", "< (\"<=\" | \">=\" | \"<\" | \">\" | InstanceOfTok) > { text }")
  Rules[:_ShiftExpression] = rule_info("ShiftExpression", "(ShiftExpression:left - ShiftOp:op - AdditiveExpression:right {binary_expression(op, left, right)} | AdditiveExpression)")
  Rules[:_ShiftOp] = rule_info("ShiftOp", "< (\"<<\" | \">>>\" | \">>\") > { text }")
  Rules[:_AdditiveExpression] = rule_info("AdditiveExpression", "(AdditiveExpression:left - AdditiveOp:op - MultiplicativeExpression:right {binary_expression(op, left, right)} | MultiplicativeExpression)")
  Rules[:_AdditiveOp] = rule_info("AdditiveOp", "(< \"+\" > !(\"+\" | \"=\") { text } | < \"-\" > !(\"-\" | \"=\") { text })")
  Rules[:_MultiplicativeExpression] = rule_info("MultiplicativeExpression", "(MultiplicativeExpression:left - MultiplicativeOp:op - UnaryExpression:right {binary_expression(op, left, right)} | UnaryExpression)")
  Rules[:_MultiplicativeOp] = rule_info("MultiplicativeOp", "< (\"*\" | \"/\" | \"%\") > !\"=\" { text }")
  Rules[:_UnaryExpression] = rule_info("UnaryExpression", "(PostfixExpression | SimpleUnaryExpression)")
  Rules[:_SimpleUnaryExpression] = rule_info("SimpleUnaryExpression", "UnaryOp:op - UnaryExpression:expr {unary_expression(op, expr)}")
  Rules[:_UnaryOp] = rule_info("UnaryOp", "< (DeleteTok | VoidTok | TypeofTok | \"++\" | \"--\" | \"+\" | \"-\" | \"~\" | \"!\") > { text }")
  Rules[:_PostfixExpression] = rule_info("PostfixExpression", "(LeftHandSideExpression:argument SnoLB? PostfixOp:op {update_expression(op, argument, false)} | LeftHandSideExpression)")
  Rules[:_PostfixOp] = rule_info("PostfixOp", "< (\"++\" | \"--\") > { text }")
  Rules[:_LeftHandSideExpression] = rule_info("LeftHandSideExpression", "(CallExpression | NewExpression)")
  Rules[:_CallExpression] = rule_info("CallExpression", "(CallExpression:call - BracketAccessor:expr {member_expression(call, expr, true)} | CallExpression:call - DotAccessor:expr {member_expression(call, expr, false)} | CallExpression:expr - Arguments:arguments {call_expression(expr, arguments)} | MemberExpression:expr - Arguments:arguments {call_expression(expr, arguments)})")
  Rules[:_BracketAccessor] = rule_info("BracketAccessor", "\"[\" - Expression:expr - \"]\" { expr }")
  Rules[:_DotAccessor] = rule_info("DotAccessor", "\".\" - IdentifierName:id {identifier(id)}")
  Rules[:_Arguments] = rule_info("Arguments", "\"(\" - ArgumentList?:args - \")\" { args || [] }")
  Rules[:_ArgumentList] = rule_info("ArgumentList", "AssignmentExpression:expr (- \",\" - AssignmentExpression)*:exprs { [expr] + exprs }")
  Rules[:_NewExpression] = rule_info("NewExpression", "(MemberExpression | NewTok - NewExpression:expr {new_expression(expr, nil)})")
  Rules[:_MemberExpression] = rule_info("MemberExpression", "(MemberExpression:left - BracketAccessor:right {member_expression(left, right, true)} | MemberExpression:left - DotAccessor:right {member_expression(left, right, false)} | NewTok - MemberExpression:expr - Arguments:arguments {new_expression(expr, arguments)} | PrimaryExpression | FunctionExpression)")
  Rules[:_PrimaryExpression] = rule_info("PrimaryExpression", "(ThisTok {this_expression()} | Identifier | Literal | ArrayLiteral | ObjectLiteral | \"(\" - Expression:expr - \")\" { expr.parens = true; expr })")
  Rules[:_ArrayLiteral] = rule_info("ArrayLiteral", "(\"[\" - Elision?:elision - \"]\" {array_expression(elision || [])} | \"[\" - ElementList:list - \"]\" {array_expression(list)} | \"[\" - ElementList:list - \",\" - Elision?:elision - \"]\" {array_expression(list + (elision || []))})")
  Rules[:_ElementList] = rule_info("ElementList", "(ElementList:list - \",\" - Elision?:elision - AssignmentExpression:expr { list + (elision || []) + [expr] } | Elision?:elision - AssignmentExpression:expr { (elision || []) + [expr] })")
  Rules[:_Elision] = rule_info("Elision", "(Elision:elision - \",\" { elision + [nil] } | \",\" { [nil] })")
  Rules[:_ObjectLiteral] = rule_info("ObjectLiteral", "\"{\" SnoComment* PropertyNameAndValueList?:list - \",\"? - \"}\" {object_expression(list || [])}")
  Rules[:_PropertyNameAndValueList] = rule_info("PropertyNameAndValueList", "PropertyAssignment:prop (- \",\" SnoComment* PropertyAssignment)*:props { [prop] + props }")
  Rules[:_PropertyAssignment] = rule_info("PropertyAssignment", "(-:comments PropertyName:key - \":\" - AssignmentExpression:value {property(key, value, 'init', comments)} | PropertyGetter | PropertySetter)")
  Rules[:_PropertyGetter] = rule_info("PropertyGetter", "\"get\" - PropertyName - \"(\" - \")\" - \"{\" - FunctionBody - \"}\"")
  Rules[:_PropertySetter] = rule_info("PropertySetter", "\"set\" - PropertyName - \"(\" - PropertySetParameterList - \")\" - \"{\" - FunctionBody - \"}\"")
  Rules[:_PropertyName] = rule_info("PropertyName", "(IdentifierName:name {identifier(name)} | StringLiteral | NumericLiteral)")
  Rules[:_PropertySetParameterList] = rule_info("PropertySetParameterList", "Identifier")
  Rules[:_Literal] = rule_info("Literal", "(NullLiteral {literal(nil)} | BooleanLiteral | NumericLiteral:number {literal(number)} | StringLiteral:string {literal(string)} | RegularExpressionLiteral:regex {literal(regex)})")
  Rules[:_NullLiteral] = rule_info("NullLiteral", "NullTok")
  Rules[:_BooleanLiteral] = rule_info("BooleanLiteral", "(TrueTok {literal(true)} | FalseTok {literal(false)})")
  Rules[:_NumericLiteral] = rule_info("NumericLiteral", "< (DecimalLiteral:literal | HexIntegerLiteral:literal) > !IdentifierStart { literal }")
  Rules[:_DecimalLiteral] = rule_info("DecimalLiteral", "(< DecimalIntegerLiteral \".\" DecimalDigit* ExponentPart? > {number(text)} | < \".\" DecimalDigit+ ExponentPart? > {number(text)} | < DecimalIntegerLiteral ExponentPart? > {number(text)})")
  Rules[:_DecimalIntegerLiteral] = rule_info("DecimalIntegerLiteral", "< (\"0\" | /[1-9]/ DecimalDigit*) > {number(text)}")
  Rules[:_HexIntegerLiteral] = rule_info("HexIntegerLiteral", "(< \"0x\" HexDigit+ > {number(text)} | < \"0X\" HexDigit+ > {number(text)})")
  Rules[:_DecimalDigit] = rule_info("DecimalDigit", "/[0-9]/")
  Rules[:_ExponentPart] = rule_info("ExponentPart", "/[eE]/ SignedInteger")
  Rules[:_SignedInteger] = rule_info("SignedInteger", "(DecimalDigit+ | \"+\" DecimalDigit+ | \"-\" DecimalDigit+)")
  Rules[:_DQ] = rule_info("DQ", "\"\\\"\"")
  Rules[:_SQ] = rule_info("SQ", "\"'\"")
  Rules[:_StringLiteral] = rule_info("StringLiteral", "(DQ < DoubleStringCharacter* > DQ {string_literal(text, '\"')} | SQ < SingleStringCharacter* > SQ {string_literal(text, \"'\")})")
  Rules[:_RS] = rule_info("RS", "\"\\\\\"")
  Rules[:_DoubleStringCharacter] = rule_info("DoubleStringCharacter", "(!(DQ | RS | LineTerminator) < SourceCharacter > { text } | < RS EscapeSequence > { text } | LineContinuation)")
  Rules[:_SingleStringCharacter] = rule_info("SingleStringCharacter", "(!(SQ | RS | LineTerminator) < SourceCharacter > { text } | < RS EscapeSequence > { text } | LineContinuation)")
  Rules[:_LineContinuation] = rule_info("LineContinuation", "RS LineTerminatorSequence")
  Rules[:_EscapeSequence] = rule_info("EscapeSequence", "(CharacterEscapeSequence | \"0\" !DecimalDigit | HexEscapeSequence | UnicodeEscapeSequence)")
  Rules[:_CharacterEscapeSequence] = rule_info("CharacterEscapeSequence", "(SingleEscapeCharacter | NonEscapeCharacter)")
  Rules[:_SingleEscapeCharacter] = rule_info("SingleEscapeCharacter", "/['\"\\bfnrtv]/")
  Rules[:_NonEscapeCharacter] = rule_info("NonEscapeCharacter", "!(EscapeCharacter | LineTerminator) SourceCharacter")
  Rules[:_EscapeCharacter] = rule_info("EscapeCharacter", "(SingleEscapeCharacter | DecimalDigit | \"x\" | \"u\")")
  Rules[:_HexEscapeSequence] = rule_info("HexEscapeSequence", "\"x\" HexDigit HexDigit")
  Rules[:_UnicodeEscapeSequence] = rule_info("UnicodeEscapeSequence", "\"u\" HexDigit HexDigit HexDigit HexDigit")
  Rules[:_RegularExpressionLiteral] = rule_info("RegularExpressionLiteral", "\"/\" RegularExpressionBody:body \"/\" RegularExpressionFlags:flags {regexp(body, flags)}")
  Rules[:_RegularExpressionBody] = rule_info("RegularExpressionBody", "< RegularExpressionFirstChar RegularExpressionChar* > { text }")
  Rules[:_RegularExpressionFirstChar] = rule_info("RegularExpressionFirstChar", "(!(LineTerminator | \"*\" | \"\\\\\" | \"/\" | \"[\") SourceCharacter | RegularExpressionBackslashSequence | RegularExpressionClass)")
  Rules[:_RegularExpressionChar] = rule_info("RegularExpressionChar", "(!(LineTerminator | \"\\\\\" | \"/\" | \"[\") SourceCharacter | RegularExpressionBackslashSequence | RegularExpressionClass)")
  Rules[:_RegularExpressionBackslashSequence] = rule_info("RegularExpressionBackslashSequence", "RS !LineTerminator SourceCharacter")
  Rules[:_RegularExpressionClass] = rule_info("RegularExpressionClass", "\"[\" RegularExpressionClassChar* \"]\"")
  Rules[:_RegularExpressionClassChar] = rule_info("RegularExpressionClassChar", "(!(LineTerminator | \"\\\\\" | \"]\") SourceCharacter | RegularExpressionBackslashSequence)")
  Rules[:_RegularExpressionFlags] = rule_info("RegularExpressionFlags", "< IdentifierPart* > { text }")
end
