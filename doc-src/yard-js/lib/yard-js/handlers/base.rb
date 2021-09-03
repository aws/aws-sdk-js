require_relative '../core_ext/yard'
require_relative '../core_ext/parsejs'

module YARDJS
  module Handlers
    class Base < YARD::Handlers::Base
      include ParseJS::AST

      def self.handles?(node)
        handlers.any? {|h| node.is_a?(h) }
      end

      def call_params; [] end
      def caller_method; nil end

      def parse_block(inner_node, opts = {})
        push_state(opts) { parser.process([inner_node].flatten) }
      end

      def handle_default_comments(comments = statement.comments)
        return if comments.size == 1
        comments[0...-1].each do |comment|
          register_docstring(nil, clean_comment(comment.body))
        end

        if parser.extra_state.ignore_next_statement
          parser.extra_state.ignore_next_statement = nil
          abort!
        end
      end

      def clean_comment(comment)
        comment = comment.body if comment.respond_to?(:body)
        return "" if comment.nil?
        comment.gsub(/^[ \t]*\*[ \t]{0,1}/, '')
      end

      def register_docstring(object, docstring = statement.comments, stmt = statement)
        docstring = docstring.last if Array === docstring
        docstring = clean_comment(docstring) if docstring
        docstring.force_encoding('utf-8') if docstring

        super(object, docstring, stmt)
      end

      def register_source(object, source = statement.source, type = parser.parser_type)
        return unless object.is_a?(CodeObjects::PropertyObject)
        object.source ||= source
        object.source_type = type
      end
    end
  end
end
