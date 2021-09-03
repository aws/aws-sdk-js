require_relative 'core_ext/yard'

module YARDJS
  module Parser
    class JavaScriptParser < YARD::Parser::Base
      attr_accessor :file, :source, :ast

      def initialize(source, filename)
        self.source = source
        self.file = filename
      end

      def parse
        self.ast = ParseJS.parse(source)
        self
      end

      def enumerator
        ast.elements
      end
    end
  end
end
